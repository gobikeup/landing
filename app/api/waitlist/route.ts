import { Redis } from "@upstash/redis"
import { NextRequest, NextResponse } from "next/server"

const redis = new Redis({
  url: process.env.KV_REST_API_URL!,
  token: process.env.KV_REST_API_TOKEN!,
})

const RATE_LIMIT_MAX = 10
const RATE_LIMIT_WINDOW = 3600 // 1 hora en segundos

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && email.length <= 254
}

function getIP(req: NextRequest): string {
  return (
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    req.headers.get("x-real-ip") ||
    "unknown"
  )
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()

    // Honeypot — si este campo tiene valor, es un bot
    if (body.website) {
      return NextResponse.json({ message: "Listo, te avisaremos." }, { status: 200 })
    }

    const email = body.email?.trim().toLowerCase()

    if (!email || !isValidEmail(email)) {
      return NextResponse.json(
        { error: "Ingresa un correo válido." },
        { status: 400 }
      )
    }

    // Rate limit por IP
    const ip = getIP(req)
    const rateLimitKey = `rl:${ip}`
    const currentCount = (await redis.get<number>(rateLimitKey)) || 0

    if (currentCount >= RATE_LIMIT_MAX) {
      return NextResponse.json(
        { error: "Demasiados intentos. Prueba nuevamente más tarde." },
        { status: 429 }
      )
    }

    // Verificar duplicado
    const exists = await redis.sismember("waitlist", email)
    if (exists) {
      return NextResponse.json({ message: "Ya estás en la lista. Te avisaremos." })
    }

    // Guardar email y actualizar rate limit
    await redis.sadd("waitlist", email)
    await redis.incr(rateLimitKey)
    if (currentCount === 0) {
      await redis.expire(rateLimitKey, RATE_LIMIT_WINDOW)
    }

    return NextResponse.json({ message: "Listo, te avisaremos cuando lancemos." })
  } catch {
    return NextResponse.json(
      { error: "Algo salió mal. Intenta de nuevo." },
      { status: 500 }
    )
  }
}
