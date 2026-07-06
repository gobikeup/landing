import { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export const metadata: Metadata = {
  title: { absolute: "Soporte — GoBikeUp" },
  description:
    "Centro de ayuda de GoBikeUp: contáctanos, revisa las preguntas frecuentes sobre rutas por ciclovías, SOS de emergencia y alertas de la comunidad, y aprende a eliminar tu cuenta. App ciclista para Santiago de Chile.",
  alternates: {
    canonical: "https://www.gobikeup.cl/soporte",
  },
}

export default function SoportePage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-24 lg:py-32">
      <Link
        href="/"
        className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
      >
        <ArrowLeft className="h-4 w-4" />
        Volver al inicio
      </Link>
      <article className="prose prose-neutral max-w-none text-foreground prose-headings:text-foreground prose-p:text-muted-foreground prose-li:text-muted-foreground prose-strong:text-foreground prose-a:text-primary prose-em:text-muted-foreground">
        <h1>Soporte</h1>
        <p>
          ¿Necesitas ayuda con GoBikeUp? Estamos para acompañarte. Aquí
          encuentras cómo contactarnos, las respuestas a las preguntas más
          comunes y los pasos para gestionar tu cuenta.
        </p>

        <h2>Contacto</h2>
        <p>
          Escríbenos a{" "}
          <a href="mailto:contacto@gobikeup.com">contacto@gobikeup.com</a>.
          Cuéntanos qué está pasando con el mayor detalle posible —si puedes,
          incluye una captura de pantalla— para ayudarte más rápido.
        </p>
        <p>
          Si crees que tú u otra persona están en peligro inmediato, contacta
          primero a Carabineros llamando al <strong>133</strong> o al{" "}
          <strong>SAMU</strong> al <strong>131</strong>. GoBikeUp no reemplaza a
          los servicios de emergencia.
        </p>

        <h2>Preguntas frecuentes</h2>

        <h3>¿Necesito crear una cuenta para usar GoBikeUp?</h3>
        <p>
          No. La app funciona sin registro: puedes buscar rutas por ciclovías,
          ver el mapa y consultar las alertas de la comunidad como invitado.
          Solo necesitas una cuenta para acciones que guardan datos tuyos, como
          configurar el SOS, agregar contactos de emergencia o publicar reseñas
          de talleres.
        </p>

        <h3>¿Cómo funciona el botón SOS y a quién avisa?</h3>
        <p>
          Al activar el botón SOS se inicia una cuenta regresiva que puedes
          cancelar. Si no la cancelas, enviamos un SMS a tus contactos de
          emergencia con un enlace para seguir tu ubicación en tiempo real
          durante 30 minutos. Para que el aviso llegue necesitas tener al menos
          un contacto de emergencia configurado.
        </p>

        <h3>¿Cómo agrego contactos de emergencia?</h3>
        <p>
          Entra a la sección SOS y toca <strong>Agregar contacto</strong>.
          Ingresa el nombre y el teléfono de una persona de confianza. Al
          guardar confirmas que esa persona te autorizó a registrarla como tu
          contacto de emergencia. Puedes editar o eliminar tus contactos cuando
          quieras.
        </p>

        <h3>¿Cómo reporto una alerta en la ruta (bache, obra, inseguridad)?</h3>
        <p>
          Desde el mapa toca el botón para crear una alerta, elige el tipo
          (Bache, Inseguridad, Obras, Sin luz, Perro agresivo o Vía cortada) y
          confírmala en tu ubicación. La alerta aparece en tiempo real para el
          resto de la comunidad. Publicar una alerta requiere tener una cuenta.
        </p>

        <h3>¿Qué hago si veo contenido inapropiado, falso o abusivo?</h3>
        <p>
          En las reseñas y alertas de otros usuarios toca el menú de opciones y
          elige <strong>Reportar</strong>, indicando el motivo. También puedes{" "}
          <strong>bloquear</strong> al autor: no volverás a ver sus reseñas ni
          alertas, y puedes desbloquearlo cuando quieras desde Ajustes. Revisamos
          cada reporte; el contenido que pone en riesgo a un menor tiene la
          máxima prioridad (ver nuestra{" "}
          <Link href="/seguridad-infantil">política de seguridad infantil</Link>
          ).
        </p>

        <h3>¿Cómo funcionan las rutas por ciclovía?</h3>
        <p>
          Ingresas tu destino y calculamos la ruta usando las ciclovías reales
          de Santiago. Cuando hay opciones, te mostramos una ruta que prioriza
          ciclovías y una alternativa más corta, para que elijas la que
          prefieras. Los tramos donde conviene bajarse y empujar la bicicleta se
          marcan aparte.
        </p>

        <h3>¿En qué ciudades funciona GoBikeUp?</h3>
        <p>
          Por ahora solo en Santiago de Chile. Las ciclovías, las rutas y las
          alertas están acotadas a la Región Metropolitana. Estamos partiendo
          por Santiago y evaluaremos otras ciudades más adelante.
        </p>

        <h2>Eliminar tu cuenta</h2>
        <p>
          Puedes eliminar tu cuenta y tus datos personales directamente desde la
          app:
        </p>
        <ol>
          <li>
            Abre la app <strong>GoBikeUp</strong>.
          </li>
          <li>
            Abre el menú (<strong>☰</strong>, arriba a la izquierda) y entra a tu{" "}
            <strong>Perfil</strong>.
          </li>
          <li>
            Toca el ícono de <strong>Configuración</strong> (engranaje).
          </li>
          <li>
            Toca <strong>Eliminar cuenta</strong> y confirma. La acción es
            permanente.
          </li>
        </ol>
        <p>
          Si ya no tienes la app instalada, escríbenos a{" "}
          <a href="mailto:contacto@gobikeup.com">contacto@gobikeup.com</a> y
          procesaremos la eliminación de tu cuenta y de tus datos.
        </p>
        <p>
          Al confirmar, se eliminan de forma permanente tu cuenta y los datos
          asociados: historial de rutas, estadísticas de actividad, contactos de
          emergencia, reseñas y alertas. Algunas categorías se conservan por un
          plazo acotado por razones de seguridad o por obligación legal; el
          detalle está en la página{" "}
          <Link href="/eliminar-cuenta">Eliminar tu cuenta</Link> y en nuestra{" "}
          <Link href="/privacidad">Política de Privacidad</Link>.
        </p>

        <h2>Legal</h2>
        <p>
          Revisa cómo tratamos tus datos y las condiciones de uso de la app:
        </p>
        <ul>
          <li>
            <Link href="/privacidad">Política de Privacidad</Link>
          </li>
          <li>
            <Link href="/terminos">Términos de Servicio</Link>
          </li>
          <li>
            <Link href="/seguridad-infantil">Seguridad infantil</Link>
          </li>
        </ul>
      </article>
    </main>
  )
}
