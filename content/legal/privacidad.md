# Política de Privacidad — GoBikeUp

**Última actualización: 29 de junio de 2026**
**Versión 0.3**

> **Pedalea tranquilo.** Esta política te explica, en lenguaje claro, qué Datos Personales recolectamos cuando usas la App, para qué los usamos, con quién los compartimos y cómo puedes controlarlos. Léela con calma: queremos que sepas exactamente qué pasa con tu información.

A lo largo de este documento usamos algunos términos definidos: **"GoBike SpA"** o **"nosotros"** es el Responsable del tratamiento de tus datos; **"la App"** es la aplicación móvil GoBikeUp; **"tú"** eres la persona usuaria y titular de los datos; **"Datos Personales"** es cualquier información que te identifica o te hace identificable; y **"Encargados"** son los terceros que procesan datos por encargo y en nombre nuestro.

---

## Índice

1. [Identificación del responsable y contacto](#1-identificación-del-responsable-y-contacto)
2. [Alcance de esta política](#2-alcance-de-esta-política)
3. [Qué datos recolectamos y para qué](#3-qué-datos-recolectamos-y-para-qué)
4. [Base de licitud por finalidad](#4-base-de-licitud-por-finalidad)
5. [Geolocalización: en primer plano y en segundo plano](#5-geolocalización-en-primer-plano-y-en-segundo-plano)
6. [SOS de emergencia y contactos de terceros](#6-sos-de-emergencia-y-contactos-de-terceros)
7. [Alertas comunitarias](#7-alertas-comunitarias)
8. [Notificaciones push](#8-notificaciones-push)
9. [GoBikeTalleres: postulación de talleres (B2B)](#9-gobiketalleres-postulación-de-talleres-b2b)
10. [Almacenamiento en el dispositivo y analítica propia](#10-almacenamiento-en-el-dispositivo-y-analítica-propia)
11. [Con quién compartimos tus datos (Encargados) y transferencias internacionales](#11-con-quién-compartimos-tus-datos-encargados-y-transferencias-internacionales)
12. [Telemetría y diagnóstico](#12-telemetría-y-diagnóstico)
13. [Datos agregados para municipalidades (modelo B2G)](#13-datos-agregados-para-municipalidades-modelo-b2g)
14. [Retención de datos](#14-retención-de-datos)
15. [Tus derechos como titular y cómo ejercerlos](#15-tus-derechos-como-titular-y-cómo-ejercerlos)
16. [Borrado de cuenta y de tus datos](#16-borrado-de-cuenta-y-de-tus-datos)
17. [Menores de edad (niños, niñas y adolescentes)](#17-menores-de-edad-niños-niñas-y-adolescentes)
18. [Seguridad y notificación de vulneraciones](#18-seguridad-y-notificación-de-vulneraciones)
19. [Marco legal aplicable](#19-marco-legal-aplicable)
20. [Cambios a esta política](#20-cambios-a-esta-política)

---

## 1. Identificación del responsable y contacto

El responsable del tratamiento de tus Datos Personales es:

| | |
|---|---|
| **Razón social** | GoBike SpA |
| **RUT** | 78.427.191-9 |
| **Domicilio** | Avda. Vitacura 5480, of. 38, Vitacura, Santiago, Chile |
| **Producto** | Aplicación móvil "GoBikeUp" (la App) |
| **Sitio web** | gobikeup.cl |
| **Correo de contacto** | contacto@gobikeup.com |
| **Representante legal** | Sebastián Torres Erazo |
| **Responsable interno de privacidad** | Sebastián Torres Erazo |

Si tienes dudas sobre esta política, quieres ejercer tus derechos o necesitas reportar un problema de privacidad, escríbenos a **contacto@gobikeup.com**. Respondemos a través de ese mismo canal (ver Sección 15).

---

## 2. Alcance de esta política

Esta política cubre el tratamiento de Datos Personales que realizamos a través de **la App** (GoBikeUp para iOS y Android), incluyendo el flujo de postulación de talleres GoBikeTalleres descrito en la Sección 9. No cubre sitios web, servicios de terceros enlazados desde la App, ni otros productos que GoBike SpA pueda ofrecer y que tengan su propia política.

### Modelo "guest-first": puedes usar la App sin registrarte

GoBikeUp funciona sin que necesites crear una cuenta. Esto significa que hay dos formas de usar la App, y cada una implica un tratamiento de datos distinto:

**Como invitado (sin cuenta):**

- Puedes **ver** el mapa y las ciclovías, **calcular rutas A→B**, y **ver** las alertas comunitarias y los talleres cercanos. Como invitado solo puedes **consultar**: no puedes crear contenido.
- Para estas funciones tratamos tu **geolocalización** (mientras usas la App), el **texto de búsqueda de direcciones** que envías al geocoder, un **identificador del dispositivo** (`device-id`, ver Sección 3), tu **dirección IP**, y datos de **telemetría y diagnóstico**.
- No tratamos tu nombre ni correo, porque no nos los entregas.

**Como usuario registrado (con cuenta):**

- Crear contenido **requiere una cuenta**. Solo con sesión iniciada puedes: **crear alertas comunitarias**, **escribir reviews de talleres**, **activar un SOS de emergencia** y **guardar contactos de emergencia**.
- Además tratamos los datos de tu **cuenta** (nombre, correo) y habilitas funciones ligadas a tu identidad: **historial de rutas** (incluida la trayectoria de tus recorridos), **estadísticas personales de actividad**, **SOS de emergencia** con contactos, **reviews de talleres**, y la asociación de tus alertas a tu perfil.
- Algunas finalidades requieren tu **consentimiento explícito y granular** (por ejemplo, la geolocalización en segundo plano para el SOS y el uso de datos agregados para el modelo B2G).

El detalle completo de qué datos recolectamos, para qué y con qué base legal está en las Secciones 3 a 13. La App está disponible únicamente para Santiago de Chile y su contenido está únicamente en español.

---

## 3. Qué datos recolectamos y para qué

Recolectamos únicamente los Datos Personales necesarios para que la App funcione y para cumplir las finalidades que se describen a continuación. La tabla declara **todas** las categorías que la App trata, su finalidad, dónde se procesan y a quién se entregan. Si un campo no aparece en esta tabla, no lo recolectamos.

| Categoría de dato | Qué incluye | Para qué lo usamos (finalidad) | Quién lo procesa / dónde | ¿Aplica a invitado? |
|---|---|---|---|---|
| **Datos de cuenta** | Nombre, correo electrónico, UUID interno, `systemRole` | Crear y administrar tu cuenta, autenticarte | GoBike SpA — Hetzner (UE). Caché on-device en `expo-secure-store` | No (solo registrado) |
| **Teléfono del usuario** (opcional) | Tu número de teléfono, si decides agregarlo en los ajustes de tu perfil | Mostrarlo en tu perfil. Es distinto de los teléfonos de tus contactos de emergencia | GoBike SpA — Hetzner (UE). *Editable solo en iOS; en Android se muestra como solo lectura* | No |
| **Tipo de bicicleta** (opcional) | La categoría de bici que eliges en los ajustes | Personalizar tu perfil | GoBike SpA — Hetzner (UE) | No |
| **Contraseña** | Hash `bcrypt` de tu contraseña | Autenticación segura. Nunca se guarda en el dispositivo ni se registra en logs | GoBike SpA — Hetzner (UE) | No |
| **Tokens de sesión** | Token de acceso (JWT) y token de refresco | Mantener tu sesión iniciada sin volver a pedirte la contraseña. Nunca se registran en logs | En tu dispositivo (`expo-secure-store` / Keychain–Keystore) | No |
| **Identificador del dispositivo (`device-id`)** | Identificador **persistente** derivado del IDFV (iOS) o del ANDROID_ID (Android), guardado en `expo-secure-store` | (1) Prevención de abuso y límites de uso (*rate limiting*); (2) **analítica de uso y retención** (métricas agregadas de actividad diaria/mensual, p. ej. DAU/MAU). No lo usamos para atribuir contenido, porque crear contenido requiere cuenta. Se purga (ver Sección 14) | GoBike SpA — Hetzner (UE) | Sí |
| **Token de notificaciones push** | Token de notificación de Expo y estado del permiso de notificaciones | Enviarte avisos relevantes de la App (ver Sección 8) | GoBike SpA — Hetzner (UE); Expo, Google FCM y Apple APNs (EE.UU.) | Sí (si concedes el permiso) |
| **Geolocalización en primer plano** | GPS en vivo mientras usas la App | Navegación paso a paso, recentrar el mapa, mostrar alertas y talleres cercanos, geocoding | Backend GoBike SpA — Hetzner (UE) | Sí |
| **Geolocalización en segundo plano** | Stream de ubicación cada 5 s, hasta 30 min | **Único uso:** compartir tu recorrido en vivo con tu contacto durante un SOS activo (ver Sección 6) | GoBike SpA — Hetzner (UE); panel `admin.gobikeup.cl/sos/{token}`. Se borra a los 90 días | Sí (si activas un SOS) |
| **Ubicación puntual del SOS** | Coordenadas al disparar y al cancelar + estado del evento (`active`/`cancelled`/`expired`/`im_ok`/`false_alarm`) | Avisar tu ubicación a tus contactos de emergencia | GoBike SpA — Hetzner (UE); enviada por SMS vía Twilio (EE.UU.) | Sí (si activas un SOS) |
| **Historial de rutas (incluida la trayectoria)** | Origen, destino, etiquetas, distancia, duración, fecha y la **trayectoria completa (polilínea) del recorrido** que registramos mientras navegas | Permitirte re-navegar rutas, mostrarte tu última ruta y, **solo de forma agregada**, alimentar métricas de uso de ciclovías (ver Sección 13). Puede revelar tu domicilio o trabajo | GoBike SpA — Hetzner (UE) | No |
| **Estadísticas personales de actividad** | Cifras derivadas de tu uso: kilómetros totales, horas totales, número de rutas, alertas reportadas, CO₂ ahorrado estimado y fecha de ingreso | Mostrarte tu actividad en tu perfil | GoBike SpA — Hetzner (UE) | No |
| **Historial de eventos SOS** | Registro de tus SOS pasados y su estado | Mostrarte tu historial y dar seguimiento a emergencias | GoBike SpA — Hetzner (UE) | No |
| **Alertas comunitarias** | **Tipo** de alerta (bache, robo, obra, sin luz, perro, vía cortada, etc.) y **ubicación GPS** del incidente | Mostrar alertas comunitarias en el mapa a otros ciclistas (sin foto) | GoBike SpA — Hetzner (UE). Atribuidas a tu cuenta | No (crear requiere cuenta) |
| **Contactos de emergencia (terceros)** | Nombre, teléfono (E.164) y relación del contacto | Notificarles por SMS cuando actives un SOS | GoBike SpA — Hetzner (UE); enviados a Twilio (EE.UU.) | No (requiere cuenta) |
| **Reviews de talleres** | Texto de la reseña, calificación y tu **nombre** (se muestra públicamente junto a la reseña) | Publicar tu reseña (contenido público atribuido a tu perfil) | GoBike SpA — Hetzner (UE) | No (requiere cuenta) |
| **Interacciones con talleres (analítica propia)** | Eventos por taller: ver ficha, tocar llamar, tocar WhatsApp, tocar navegar | Entender qué talleres se usan y cómo, para mejorar el producto (analítica de producto **propia**, no de terceros) | GoBike SpA — Hetzner (UE) | Sí |
| **Datos de postulación GoBikeTalleres (B2B)** | Nombre de contacto, correo, teléfono, dirección, coordenadas (lat/lng), motivación y origen de la referencia del taller postulante | Recibir y gestionar postulaciones de talleres a la plataforma (ver Sección 9) | GoBike SpA — Hetzner (UE); correo transaccional vía Resend (EE.UU.) | Sí (formulario abierto) |
| **Texto de búsqueda de direcciones** | Lo que escribes para buscar una dirección (puede contener tu domicilio) | Convertir la dirección en coordenadas (geocoding) | **Google Geocoding (EE.UU.)** — proveedor en producción; la consulta viaja vía nuestro backend (Hetzner, UE) | Sí |
| **Dirección IP** | IP de tu conexión | Seguridad, prevención de abuso, enrutamiento y entrega del servicio | Cloudflare (proxy/WAF, global), Hetzner (UE), OpenFreeMap | Sí |
| **Telemetría de errores (backend)** | Stack traces, breadcrumbs y contexto técnico de los errores que ocurren en **nuestro servidor** (no en tu dispositivo) | Detectar y corregir fallas, mejorar estabilidad (ver Sección 12). La App no envía telemetría; se procesa **server-side** y se depura (*scrub*) para no incluir Datos Personales | GoBike SpA — Hetzner (UE); telemetría depurada en Sentry (EE.UU.) | No (no se recolecta de tu dispositivo) |
| **Tiles del mapa** | Solicitudes de fragmentos del mapa (revelan la zona que exploras) | Renderizar el mapa | OpenFreeMap | Sí |
| **Permisos del sistema** | Acceso a ubicación (incluido segundo plano) y a notificaciones | Obtener tu ubicación y enviarte notificaciones según se describe arriba | En tu dispositivo (sistema operativo) | Sí |

**Sobre tu avatar de perfil:** la App **no** te pide subir una foto de perfil. El avatar que ves se **genera en tu propio dispositivo** a partir de tu nombre o correo; no se sube ninguna imagen tuya a nuestros servidores.

**Sobre tu comuna:** si tu perfil muestra una comuna, es un dato que proviene del backend; la App **no** te pide ingresarla ni la captura desde la interfaz.

---

## 4. Base de licitud por finalidad

Tratamos tus Datos Personales solo cuando existe una base de licitud que lo permite. Bajo la **Ley N° 21.719**, el **consentimiento** se regula en su **artículo 12** y las **demás bases de licitud** (entre ellas la ejecución de un contrato, el interés legítimo y el cumplimiento de una obligación legal) en su **artículo 13**. El tratamiento es **híbrido**: algunas finalidades se sustentan en la ejecución del servicio, en una obligación legal o en nuestro interés legítimo, y otras requieren tu **consentimiento explícito y granular**, que puedes otorgar o revocar de forma independiente.

| Finalidad | Datos involucrados | Base de licitud (Ley N° 21.719) |
|---|---|---|
| Crear y administrar tu cuenta; autenticarte | Datos de cuenta, contraseña, tokens de sesión | Ejecución del contrato / prestación del servicio que solicitas (art. 13) |
| Seguridad, prevención de abuso y límites de uso | Identificador del dispositivo, dirección IP | Interés legítimo del Responsable (art. 13), ponderado frente a tus derechos |
| Analítica de uso y retención (métricas agregadas tipo DAU/MAU) | Identificador del dispositivo | Interés legítimo del Responsable (art. 13), ponderado frente a tus derechos |
| Navegación, mapa, alertas y talleres cercanos, geocoding | Geolocalización en primer plano, texto de búsqueda | Ejecución del servicio que activas al usar la navegación (art. 13) |
| **Geolocalización en segundo plano** (recorrido en vivo del SOS) | Stream de ubicación cada 5 s | **Consentimiento explícito** (art. 12) |
| Activar un SOS y avisar a tus contactos | Ubicación puntual del SOS, estado del evento, contactos de emergencia | **Consentimiento explícito** al configurar el SOS (art. 12); cuando entren en juego datos sensibles, el **interés vital** del titular o de un tercero (art. 16 c) |
| Enviar notificaciones push | Token de notificación, estado del permiso | **Consentimiento** al conceder el permiso del sistema (art. 12) |
| Recibir y gestionar postulaciones GoBikeTalleres (B2B) | Datos de postulación del taller | Ejecución de medidas precontractuales / interés legítimo (art. 13) |
| Publicar alertas comunitarias | Tipo de alerta, ubicación GPS | Ejecución del servicio y **consentimiento** para la publicación (arts. 12 y 13) |
| Guardar tu historial de rutas y trayectorias para re-navegar y ver tu actividad | Historial de rutas (incluida la polilínea), estadísticas personales | Ejecución del servicio (art. 13) |
| Publicar reviews de talleres | Texto, calificación, nombre | Ejecución del servicio y **consentimiento** para la publicación (arts. 12 y 13) |
| Analítica de producto propia sobre uso de talleres | Interacciones con talleres | Interés legítimo del Responsable (art. 13), ponderado frente a tus derechos |
| Detectar y corregir errores (telemetría) | Telemetría y diagnóstico, IP | Interés legítimo del Responsable (art. 13) |
| Cumplir obligaciones legales o requerimientos de autoridad | Las categorías que la ley exija conservar o entregar | Cumplimiento de una obligación legal (art. 13) |
| **Métricas agregadas** (modelo B2G a municipalidades) | Datos de uso de ciclovías, derivados del historial de rutas | **Consentimiento explícito y granular** para esta finalidad (art. 12). Los datos de SOS quedan **excluidos** (ver Sección 13) |

**Geolocalización y deber de información.** La geolocalización **no** es, por sí sola, un "dato personal sensible" en los términos del artículo 2 g) de la Ley N° 21.719. Sin embargo, por tratarse de datos de ubicación, su tratamiento está sujeto al **deber de información del artículo 16 sexies (Datos de geolocalización)**: te informamos el **tipo** de dato de localización, la **finalidad**, la **duración** del tratamiento y, si corresponde, su **cesión** a un tercero. Todo esto se detalla en la Sección 5. Además, dado que el SOS implica un tratamiento intensivo de tu ubicación que **podría calificar como de alto riesgo**, evaluamos la necesidad de una **evaluación de impacto en protección de datos (EIPDP) conforme a la regla general del artículo 15 ter**.

**Datos sensibles e interés vital.** Cuando un tratamiento involucre datos personales sensibles en el contexto de una emergencia, podrá ampararse en el **interés vital** del titular o de un tercero, conforme al **artículo 16 letra c)** de la Ley N° 21.719. Puedes revocar tu consentimiento en cualquier momento (ver Sección 15); la revocación no afecta la licitud del tratamiento previo a ella.

**Consentimiento granular.** Cada finalidad basada en consentimiento —geolocalización en segundo plano, notificaciones push y métricas B2G— se solicita por separado. Aceptar una no implica aceptar las demás, y puedes retirar cada una de forma independiente.

---

## 5. Geolocalización: en primer plano y en segundo plano

Tu ubicación es el corazón de GoBikeUp: sin ella no podemos guiarte por ciclovías, mostrarte alertas cercanas ni acompañarte en una emergencia. Por eso te explicamos con total claridad cuándo y cómo usamos tu ubicación, y cómo apagar cada permiso. Esta sección cumple el **deber de información del artículo 16 sexies (Datos de geolocalización)** de la Ley N° 21.719: tipo de dato, finalidad, duración y cesión a terceros.

### 5.1 Geolocalización en primer plano (mientras usas la App)

Cuando tienes la App abierta y en uso, accedemos a tu ubicación GPS en vivo para:

- **Navegación turn-by-turn:** guiarte paso a paso por la ruta ciclista (tu posición en tiempo real sobre el mapa).
- **Recentrado del mapa:** mostrarte dónde estás y centrar el mapa en tu posición.
- **Alertas y talleres cercanos:** mostrarte baches, robos, obras u otros reportes comunitarios y talleres próximos a ti.
- **Geocoding:** resolver direcciones y calcular rutas desde tu ubicación.

Mientras **navegas una ruta**, además registramos los puntos GPS de tu recorrido y, al finalizar la navegación, guardamos la **trayectoria completa (polilínea)** del trayecto como parte de tu **historial de rutas**. Es decir: la navegación sí genera un registro persistente de por dónde anduviste, asociado a tu cuenta (ver Secciones 3 y 14). Fuera de la navegación, tu ubicación de primer plano se usa para entregarte el servicio en el momento (mapa, alertas y talleres cercanos, geocoding).

**Base de licitud:** ejecución del servicio que solicitas (la navegación y el mapa) y, cuando corresponda, tu consentimiento al otorgar el permiso de ubicación del sistema (ver Sección 4).

### 5.2 Geolocalización en segundo plano (con la App cerrada o de fondo)

GoBikeUp solicita el permiso de **ubicación en segundo plano** del sistema (en Android, `ACCESS_BACKGROUND_LOCATION`). Queremos ser absolutamente transparentes sobre esto:

> **El único uso de la ubicación en segundo plano es el seguimiento en vivo durante una emergencia SOS.** No usamos la ubicación en segundo plano para publicidad, perfilamiento, análisis de comportamiento, ni para ningún otro fin.

Cuando activas un SOS, y solo mientras ese SOS está activo, la App transmite tu ubicación en segundo plano (un punto cada 5 segundos, hasta un máximo de 30 minutos) para que tu contacto de emergencia pueda seguir tu recorrido en vivo. Fuera de un SOS activo, la App **no** recopila tu ubicación en segundo plano. El detalle completo del SOS está en la Sección 6.

**Aviso destacado (prominent disclosure).** Antes de habilitar este permiso te mostramos un aviso claro explicando que la ubicación en segundo plano se usa exclusivamente para compartir tu recorrido con tu contacto de emergencia durante un SOS. El permiso es **opcional**: puedes usar el resto de la App sin concederlo, aunque en ese caso el seguimiento en vivo durante un SOS no estará disponible (sí se enviará tu ubicación puntual por SMS al disparar y cancelar la emergencia).

**Base de licitud:** tu **consentimiento explícito** al conceder el permiso (art. 12). Cuando el tratamiento involucre datos sensibles en el contexto de la emergencia, se ampara además en el **interés vital** del titular o de un tercero (art. 16 c) (ver Sección 4).

### 5.3 Cómo controlar o apagar la ubicación

Tú mandas sobre tus permisos de ubicación. En cualquier momento puedes:

| Acción | Dónde |
|--------|-------|
| Apagar la ubicación en segundo plano | Ajustes del sistema → GoBikeUp → Ubicación → elige "Solo con la app abierta" (o "Mientras se usa la app") |
| Apagar toda la ubicación | Ajustes del sistema → GoBikeUp → Ubicación → "No permitir" |
| Revisar/cambiar permisos en iOS | Ajustes → Privacidad y seguridad → Localización → GoBikeUp |
| Revisar/cambiar permisos en Android | Ajustes → Aplicaciones → GoBikeUp → Permisos → Ubicación |

Si revocas la ubicación, partes de la App dejarán de funcionar (navegación, mapa centrado en ti, alertas cercanas y seguimiento durante un SOS). Puedes volver a concederla cuando quieras.

---

## 6. SOS de emergencia y contactos de terceros

El SOS es una función de seguridad: con un botón avisas a tus contactos de emergencia que necesitas ayuda y compartes tu ubicación. Por su naturaleza, trata datos especialmente sensibles (tu ubicación precisa en un momento crítico) y datos de **terceros** (tus contactos). Lo tratamos con el máximo cuidado. El SOS **requiere una cuenta**.

### 6.1 Qué ocurre cuando activas un SOS

Al disparar un SOS:

- **Ubicación puntual:** capturamos tu ubicación GPS en el momento de disparar la emergencia y nuevamente al cancelarla.
- **Seguimiento en vivo (si concediste ubicación en segundo plano):** transmitimos tu ubicación cada 5 segundos, hasta un máximo de 30 minutos, para que tu contacto pueda seguir tu recorrido en tiempo real (ver Sección 5.2).
- **Estado del evento:** registramos el estado de la emergencia (`activo`, `cancelado`, `expirado`, `estoy bien`, `falsa alarma`) y la hora.

### 6.2 Cómo avisamos a tus contactos

- **SMS vía Twilio:** enviamos un mensaje de texto a tus contactos de emergencia a través de **Twilio** (proveedor ubicado en **Estados Unidos**). El SMS incluye tu aviso de emergencia y un enlace.
- **Dashboard de seguimiento:** el enlace abre un panel web (`admin.gobikeup.cl/sos/{token}`) con un **token único** asociado a esa emergencia, donde tu contacto puede ver tu ubicación y recorrido mientras el SOS está activo. El token vincula el acceso a ese evento específico; el seguimiento deja de actualizarse cuando el SOS finaliza.

### 6.3 Datos de tus contactos de emergencia (terceros)

Para usar el SOS guardamos los datos de las personas que designas como contactos de emergencia: **nombre**, **teléfono** (en formato internacional E.164, p. ej. `+56912345678`) y **relación** contigo. Estos datos se transmiten a **Twilio** (Estados Unidos) para el envío del SMS.

Como estos son datos de **otra persona**, te pedimos lo siguiente:

> **Tú declaras que cuentas con la autorización de cada persona que registras como contacto de emergencia** para entregarnos sus datos y para que reciba mensajes de emergencia de tu parte. Eres responsable de obtener esa autorización antes de agregarla.

Cualquier persona puede pedirnos que eliminemos sus datos escribiéndonos a [contacto@gobikeup.com](mailto:contacto@gobikeup.com).

### 6.4 Los datos de SOS quedan excluidos del modelo B2G

Queremos ser categóricos en esto:

> **Ningún dato de SOS se incluye jamás en los conjuntos de datos agregados que compartimos con municipalidades u organismos públicos** (el modelo B2G descrito en la Sección 13). Tus emergencias, tu ubicación durante un SOS y los datos de tus contactos quedan **completamente excluidos** de cualquier dataset que salga de GoBikeUp.

### 6.5 Retención y base de licitud

- **Ubicación del SOS (puntual y de seguimiento):** se conserva **90 días** y luego se elimina de forma automática.
- **Historial de eventos SOS** (que disparaste una emergencia, su estado y hora): se conserva mientras exista tu cuenta y se elimina al borrarla (ver Secciones 14 y 16).
- **Base de licitud:** tu **consentimiento explícito** al activar la función y al designar contactos (art. 12) y, cuando entren en juego datos sensibles durante la emergencia, el **interés vital** de proteger tu vida e integridad y la de terceros (art. 16 c) (ver Sección 4).

---

## 7. Alertas comunitarias

Las alertas comunitarias te permiten reportar baches, robos, obras, falta de luz, perros sueltos o vías cortadas para advertir a otros ciclistas. Son contenido **público** que se muestra en el mapa a toda la comunidad.

### 7.1 Qué datos recolectamos en una alerta

Crear una alerta **requiere una cuenta**. Cuando creas una alerta recolectamos únicamente:

- **Tipo de alerta:** la categoría del incidente (bache, robo, obra, sin luz, perro, vía cortada, etc.).
- **Ubicación GPS:** el punto donde ocurre el incidente que reportas.
- **Atribución:** la alerta queda vinculada a tu **cuenta**.

**No subimos fotos.** La creación de alertas en la App **no captura ni sube imágenes**: no hay selector de fotos ni uso de la cámara para esta función, y no recolectamos descripción de texto. Solo registramos el **tipo** y la **ubicación**.

### 7.2 Visibilidad pública y moderación

- **Visibilidad:** el tipo y la ubicación de tus alertas son **públicos**: cualquier usuario de la App puede verlos en el mapa.
- **Moderación:** podemos revisar, ocultar o eliminar alertas que sean ofensivas, falsas, abusivas o ilegales.
- **Eliminación:** si quieres que eliminemos una alerta tuya, escríbenos a [contacto@gobikeup.com](mailto:contacto@gobikeup.com) y la revisaremos (ver tus derechos en la Sección 15).

**Base de licitud:** ejecución del servicio y tu **consentimiento** al crear y publicar una alerta (ver Sección 4).

---

## 8. Notificaciones push

La App puede enviarte **notificaciones push** (por ejemplo, avisos relacionados con tus alertas, talleres o el estado de la App).

### Qué tratamos y cómo

Cuando concedes el permiso de notificaciones, la App genera y registra en nuestro backend un **token de notificación de Expo** junto con el estado del permiso. Para entregar la notificación a tu teléfono, ese token y el contenido del aviso pasan por la **infraestructura de notificaciones de Expo** y, según tu plataforma, por **Google Firebase Cloud Messaging (FCM)** en Android o **Apple Push Notification service (APNs)** en iOS. Estos proveedores están ubicados en **Estados Unidos**, por lo que su uso implica una transferencia internacional (ver Sección 11).

**Es opcional.** Puedes usar la App sin conceder el permiso de notificaciones, y puedes revocarlo en cualquier momento desde los ajustes de tu teléfono (Ajustes → GoBikeUp → Notificaciones). Si lo revocas, dejaremos de enviarte avisos push.

**Base de licitud:** tu **consentimiento** al conceder el permiso del sistema (art. 12; ver Sección 4).

---

## 9. GoBikeTalleres: postulación de talleres (B2B)

GoBikeTalleres es el flujo mediante el cual un taller puede **postular a la plataforma**. Es una función **B2B** distinta del uso ciclista de la App, y por eso le dedicamos una sección propia.

### Qué datos tratamos

Cuando completas el formulario de postulación, tratamos los datos que ingresas para identificar y contactar al taller: **nombre de contacto**, **correo electrónico**, **teléfono**, **dirección**, **coordenadas (lat/lng)** del taller, **motivación** de la postulación y el **origen de la referencia** (cómo nos conociste). Estos pueden ser **datos de un tercero** (la persona de contacto del taller); al enviarlos, declaras estar autorizado para hacerlo.

### Dónde se procesan

- Los datos de la postulación se almacenan en nuestro backend en **Hetzner (Unión Europea)**.
- Para confirmaciones y comunicaciones por correo de la postulación usamos **Resend** (proveedor de correo transaccional ubicado en **Estados Unidos**), lo que implica una transferencia internacional (ver Sección 11).
- El formulario puede convertir la dirección del taller en coordenadas mediante nuestro servicio de geocoding (**Google**, EE.UU., vía nuestro backend), igual que el resto de la App (ver Sección 11).

**Finalidad y base de licitud:** recibir, evaluar y gestionar la postulación del taller. La base es la **ejecución de medidas precontractuales** a solicitud del taller y/o nuestro **interés legítimo** en operar el marketplace (art. 13; ver Sección 4).

**Retención:** los datos de postulación se conservan mientras dure la evaluación y, si el taller se incorpora, mientras dure la relación; en caso contrario, se eliminan o anonimizan transcurrido un plazo razonable.

---

## 10. Almacenamiento en el dispositivo y analítica propia

La App guarda en tu dispositivo lo necesario para funcionar. Algunos datos van al **almacenamiento seguro** del sistema operativo y otros, menos sensibles, a un almacenamiento local **no cifrado** (`AsyncStorage`).

| Qué se guarda en el dispositivo | Dónde | Por qué |
|---|---|---|
| Token de acceso (JWT) y token de refresco | `expo-secure-store` (Keychain en iOS / Keystore en Android) | Mantener tu sesión sin volver a pedirte la contraseña |
| Identificador del dispositivo (`device-id`) | `expo-secure-store` | Prevención de abuso y analítica de uso (ver Sección 3) |
| **Búsquedas recientes de direcciones** | `AsyncStorage` (**no cifrado**) | Mostrarte tus búsquedas recientes. Incluyen el texto buscado **y sus coordenadas**, por lo que **pueden revelar tu domicilio o lugar de trabajo** |
| Preferencia de tema (claro/oscuro) | `AsyncStorage` (no cifrado) | Recordar cómo prefieres ver la App |
| Preferencia de capas del mapa | `AsyncStorage` (no cifrado) | Recordar tu configuración del mapa |

> **`AsyncStorage` no es almacenamiento cifrado**, a diferencia de `expo-secure-store`. Por eso solo guardamos ahí datos de baja sensibilidad (preferencias) y tus búsquedas recientes, que puedes borrar limpiando los datos de la App desde los ajustes de tu teléfono.

**Lo que NUNCA se guarda en tu dispositivo:**

- **Tu contraseña.** Solo viaja al servidor al iniciar sesión y allí se almacena como hash `bcrypt`. Nunca queda en el dispositivo ni se escribe en logs.
- Los **tokens de sesión nunca se registran en logs** ni se exponen fuera del almacenamiento seguro (Keychain/Keystore).

**Sin SDK de terceros de publicidad, pero sí analítica propia.** La App es una aplicación nativa: **no usa cookies**, ni píxeles de seguimiento, ni SDK de terceros de publicidad o marketing. **Sí registramos, en nuestros propios servidores, tus interacciones con talleres** (ver una ficha, tocar llamar, tocar WhatsApp, tocar navegar) como **analítica de producto propia**, para entender cómo se usa la App y mejorarla. Esta analítica es nuestra; no la compartimos con redes publicitarias.

**Deep links a talleres.** Cuando decides contactar a un taller, la App abre aplicaciones de terceros en tu teléfono: **WhatsApp** (`whatsapp://`) o tu **app de teléfono** (`tel:`) con el número del taller. Al hacerlo, sales de GoBikeUp y entras en esas apps, que se rigen por sus propias políticas de privacidad.

**Al cerrar sesión o borrar tu cuenta**, los tokens y la caché local se eliminan del almacenamiento seguro del dispositivo (ver Sección 16).

---

## 11. Con quién compartimos tus datos (Encargados) y transferencias internacionales

Para que la App funcione, GoBike SpA se apoya en proveedores de tecnología que actúan como **Encargados**: terceros que procesan Datos Personales **por cuenta y bajo instrucciones nuestras**, conforme a un contrato de tratamiento que los obliga a mantener confidencialidad, aplicar medidas de seguridad y usar los datos solo para la finalidad contratada.

Queremos ser honestos contigo: **algunos de estos proveedores están fuera de Chile** y, al usarlos, tus Datos Personales se transfieren a otros países (principalmente Estados Unidos y la Unión Europea). No vendemos tus Datos Personales a nadie. Tampoco los compartimos con terceros para fines publicitarios.

### Encargados que procesan tus datos

| Encargado | Qué dato recibe | País / Región | Finalidad |
|---|---|---|---|
| **Hetzner** | Cuenta (nombre, correo, UUID, `systemRole`, teléfono y tipo de bici si los agregas), contraseña (hash), historial de rutas (incluida la trayectoria), estadísticas personales, historial de eventos SOS, contactos de emergencia, alertas, reviews, interacciones con talleres, datos de postulación B2B, IP del cliente | Unión Europea (Alemania) | Hosting de la App y base de datos principal donde vive tu información |
| **Cloudflare** | IP del cliente, tráfico de la App | Estados Unidos / red global | Proxy y firewall (WAF) que protege la App frente a ataques |
| **Twilio** | Ubicación del SOS, estado del evento, nombre y teléfono (E.164) de tus contactos de emergencia | Estados Unidos | Envío del SMS de emergencia (SOS) a tus contactos (ver Sección 6) |
| **Expo / Google FCM / Apple APNs** | Token de notificación y contenido del aviso push | Estados Unidos | Entrega de notificaciones push a tu teléfono (ver Sección 8) |
| **Resend** | Nombre, correo y datos de la postulación GoBikeTalleres incluidos en el correo transaccional | Estados Unidos | Envío de correos transaccionales (postulaciones B2B, ver Sección 9) |
| **Google (Geocoding)** | Texto de búsqueda de direcciones (puede contener tu domicilio), coordenadas de consulta | Estados Unidos | Convertir direcciones en coordenadas (geocoding). **Proveedor activo en producción** |
| **Photon / komoot** | Texto de búsqueda de direcciones, coordenadas de consulta | Unión Europea | Geocoding — **alternativa técnica, no activa en la configuración actual** |
| **Sentry** | Telemetría de errores **del backend**, depurada (sin Datos Personales): stack traces, breadcrumbs y contexto técnico del servidor | Estados Unidos | Detección y diagnóstico de errores y fallas del servidor (ver Sección 12) |
| **OpenFreeMap** | IP del cliente, zona del mapa solicitada (tiles) | Red global | Entrega de los tiles (imágenes) del mapa que ves en pantalla |

> El detalle de qué datos recolectamos y con qué base legal está en las Secciones 3 y 4. La geolocalización y el SOS tienen secciones propias (5 y 6).

### Transferencias internacionales

Cuando un Encargado procesa tus datos fuera de Chile, realizamos una **transferencia internacional de Datos Personales**. La **Ley N° 21.719 (artículos 27 a 29, Título V)** permite estas transferencias siempre que existan **garantías adecuadas** que protejan tu información a un nivel equivalente al de la ley chilena.

Los mecanismos de transferencia que contempla la ley chilena incluyen, entre otros:

- **Niveles adecuados de protección** declarados respecto del país u organización de destino por la **Agencia de Protección de Datos Personales**.
- **Cláusulas tipo** de protección de datos que dicte la propia Agencia, incorporadas a los contratos con cada Encargado, junto con sus compromisos de seguridad y confidencialidad.

> **Nota honesta:** la **Agencia de Protección de Datos Personales aún no está operativa**, por lo que todavía no existen niveles de adecuación declarados ni cláusulas tipo oficiales emitidas por ella. Mientras tanto, sustentamos las transferencias en los contratos de tratamiento con cada Encargado y en sus medidas de seguridad y confidencialidad, y adoptaremos las cláusulas tipo o adecuaciones que la Agencia dicte una vez que entre en funciones.

Si un Encargado cambia o se suma uno nuevo, actualizaremos esta sección y, cuando corresponda, te lo informaremos (ver Sección 20).

---

## 12. Telemetría y diagnóstico

Para mantener la App estable y "pedalear tranquilo" también del lado técnico, monitoreamos los errores que ocurren en **nuestro backend**.

### Qué recolectamos y cómo

Cuando se produce un error o falla **en nuestros servidores**, se genera información técnica para que podamos detectarlo y corregirlo:

- **Stack traces** (el detalle técnico del error).
- **Breadcrumbs** (las últimas acciones registradas en el servidor antes del error, para reconstruir qué pasó).
- **Contexto técnico del servicio**: versión del backend y entorno de ejecución.

**La App, en tu dispositivo, no recolecta ni envía telemetría de errores a ningún servicio externo.** No hay un SDK de monitoreo de terceros enviando datos desde la App. El monitoreo de errores con **Sentry** (Estados Unidos) ocurre **únicamente del lado de nuestro backend**, para los errores que se producen en el servidor.

**Depuración de Datos Personales (scrubbing).** Antes de enviar cualquier reporte a Sentry, nuestro backend **depura (scrub) los Datos Personales**: la información que llega a Sentry está diseñada para **no** incluir contraseñas, tokens, correos, números de teléfono, coordenadas ni direcciones, ni otros Datos Personales. Por la ubicación de Sentry, este flujo implica una transferencia internacional (ver Sección 11).

### Cómo protegemos tu privacidad en la telemetría

- La telemetría tiene una **única finalidad**: estabilidad, calidad y diagnóstico técnico del servicio. **No** la usamos para perfilarte, segmentarte ni con fines publicitarios.
- El **data scrubbing** se aplica server-side antes de cualquier envío a Sentry, de modo que los reportes no contengan Datos Personales.

> **Base de licitud:** interés legítimo en mantener la seguridad y el correcto funcionamiento del servicio (art. 13; ver Sección 4). **Retención:** ver Sección 14.

---

## 13. Datos agregados para municipalidades (modelo B2G)

Esta es una de las finalidades más importantes —y más sensibles— de GoBikeUp, así que te la explicamos en detalle y **te la declaramos antes de recolectar tus datos**, no después.

### Para qué

GoBikeUp **planea generar, a futuro, estadísticas de uso de ciclovías** para municipalidades y organismos públicos (modelo B2G). El objetivo es que esos organismos puedan **mejorar la infraestructura ciclista de Santiago** con datos reales: saber qué tramos se usan más, en qué comunas y en qué franjas horarias. Mejores ciclovías para que puedas pedalear tranquilo.

> **Hoy no compartimos estos datos con nadie.** Te declaramos esta finalidad desde ya —antes de usar tus datos para ella— para poder cumplirla más adelante de forma transparente y conforme al principio de finalidad.

Para esto, tu **historial de rutas** (origen, destino, distancia, duración, fecha y la trayectoria de tus recorridos) sería una de las fuentes que alimentarían estas estadísticas.

### Qué compartiríamos exactamente (y qué NUNCA)

**Cuando lo hagamos, SOLO compartiremos datos agregados.** En concreto:

- **Sí compartiríamos:** flujos de uso por **tramo de ciclovía**, **comuna** y **franja horaria** (por ejemplo: "X viajes pasaron por tal tramo entre las 8:00 y las 9:00").
- **NUNCA compartiríamos:** trayectorias individuales, tu origen o destino exactos, tu historial de rutas, ni nada que permita identificarte o reconstruir tus desplazamientos.
- **NUNCA venderíamos ni entregaríamos datos personales** a municipalidades ni a ningún organismo. Lo que entregaríamos son **cifras agregadas**, no personas.
- **El SOS queda totalmente excluido.** Ninguna ubicación, evento ni dato de SOS forma parte de estos datasets, bajo ninguna circunstancia (ver Sección 6.4).

### Una advertencia honesta sobre la anonimización

> **Importante:** describimos aquí el método que aplicaremos. **No generaremos ni compartiremos ningún dataset B2G hasta que este proceso esté implementado y verificado.**

Las **trayectorias GPS son inherentemente re-identificables**: incluso agregadas, los recorridos pueden, en ciertas condiciones, asociarse a una persona (especialmente por sus puntos de inicio y fin). Por eso somos cautos y honestos:

> **Mientras no exista una anonimización efectiva y verificada, tratamos estos datos como Datos Personales.** No afirmamos que el resultado sea irreversible como un hecho ya logrado: la irreversibilidad es el **objetivo** del proceso de anonimización, sujeto a verificación técnica antes de cualquier entrega.

El proceso de anonimización previsto, que se aplicará **en nuestro backend** antes de generar cualquier dataset, contempla:

1. **Agregación**: los datos individuales se combinan en conteos por tramo, comuna y franja horaria.
2. **Supresión de celdas pequeñas (k-anonimato)**: se **eliminan las celdas con menos de 5 viajes** (k < 5), para que ningún dato apunte a una persona en un grupo demasiado chico.
3. **Recorte de origen y destino**: se **descartan los extremos del recorrido** (los puntos de inicio y fin), que son los que podrían revelar tu domicilio o lugar de trabajo.

### Prohibición de re-identificación

En los contratos con municipalidades y organismos públicos **prohibimos expresamente cualquier intento de re-identificación**, así como cruzar estos datos con otras fuentes para volver a identificar personas.

> **Consentimiento:** la finalidad B2G se basa en tu **consentimiento explícito y granular** (art. 12; ver Sección 4). Puedes **revocarlo en cualquier momento** sin que ello afecte el uso normal de la App (ver Secciones 15 y 16). La revocación detiene el uso futuro de tu historial para este fin.

---

## 14. Retención de datos

Por regla general, conservamos tus Datos Personales **mientras exista tu cuenta**, y los eliminamos cuando la borras (ver Sección 16). Algunas categorías tienen plazos propios por razones de seguridad o porque la ley así lo exige.

| Categoría de dato | Plazo de retención | Qué pasa al vencer / al borrar |
|---|---|---|
| Datos de cuenta (nombre, correo, UUID interno, `systemRole`, teléfono y tipo de bici si los agregas) | Mientras exista tu cuenta | Se eliminan al borrar la cuenta |
| Contraseña (hash bcrypt) | Mientras exista tu cuenta | Se elimina al borrar la cuenta |
| Tokens de sesión (access JWT + refresh) en el dispositivo | Vida útil del token / hasta que cierras sesión | Se revocan y eliminan al cerrar sesión o borrar la cuenta |
| Identificador del dispositivo (`device-id`) y métricas de actividad asociadas (DAU/MAU) | Mientras tengas la App instalada; las métricas de actividad se **purgan** transcurrido un plazo de retención | Se elimina al desinstalar o limpiar los datos de la App; las métricas se purgan al vencer el plazo |
| Token de notificaciones push | Mientras mantengas el permiso y la App instalada | Se elimina al revocar el permiso, desinstalar o borrar la cuenta |
| Historial de rutas (origen, destino, etiquetas, distancia, duración, fecha, trayectoria/polilínea) | Mientras exista tu cuenta | Se elimina al borrar la cuenta |
| Estadísticas personales de actividad | Mientras exista tu cuenta | Se eliminan al borrar la cuenta |
| Historial de eventos SOS | Mientras exista tu cuenta, con el tope de 90 días de la fila siguiente para los datos de ubicación | Se elimina al borrar la cuenta |
| Ubicación en vivo durante un SOS (stream de segundo plano) | **90 días**, con borrado automático | Se elimina automáticamente al cumplirse el plazo, aunque tu cuenta siga activa |
| Ubicación puntual del SOS (disparo/cancelación) y estado del evento | **90 días**, con borrado automático | Se elimina automáticamente al cumplirse el plazo |
| Contactos de emergencia (nombre, teléfono E.164, relación) | Mientras los mantengas en tu cuenta | Se eliminan al borrarlos o al borrar la cuenta |
| Alertas comunitarias (tipo, ubicación) | Como contenido comunitario público, mientras sean vigentes | Se eliminan o anonimizan al borrar la cuenta o al moderarse |
| Reviews de talleres (UGC público) | Mientras exista tu cuenta | Se eliminan o se desvinculan de tu perfil al borrar la cuenta |
| Interacciones con talleres (analítica propia) | Mientras exista tu cuenta | Se eliminan o se desvinculan de tu perfil al borrar la cuenta |
| Datos de postulación GoBikeTalleres (B2B) | Mientras dure la evaluación / la relación; en caso contrario, plazo razonable | Se eliminan o anonimizan al vencer el plazo |
| Búsquedas recientes de direcciones (on-device) | En tu dispositivo (`AsyncStorage`), hasta que limpies los datos de la App | No salen del dispositivo; las controlas tú |
| Texto de búsqueda de direcciones (geocoding) | No lo almacenamos de forma persistente en el backend; se procesa para responder tu consulta | El proveedor de geocoding puede conservar logs según su propia política |
| IP del cliente y logs de infraestructura | **90 días** | Se eliminan automáticamente al vencer el plazo |
| Telemetría y errores (depurada, en Sentry) | **90 días** | Se eliminan automáticamente al vencer el plazo |
| Datos agregados (modelo B2G) | Según su naturaleza y el resultado de la anonimización (ver Sección 13) | Mientras sigan siendo Datos Personales, se rigen por esta política |

> **Conservación limitada.** Cuando la ley nos obligue a conservar un dato por un plazo mayor (por ejemplo, para responder a una autoridad o defender un derecho), lo conservaremos solo durante ese plazo legal y luego lo eliminaremos.

Una vez eliminados, los Datos Personales pueden permanecer por un período breve en respaldos cifrados antes de su sobrescritura definitiva, sin que sean usados para ninguna otra finalidad.

---

## 15. Tus derechos como titular y cómo ejercerlos

Como titular de Datos Personales, la ley te reconoce un conjunto de derechos —conocidos como **ARCOP+**— que puedes ejercer en cualquier momento, de forma gratuita:

| Derecho | Qué significa |
|---|---|
| **Acceso** | Saber qué Datos Personales tuyos tratamos, con qué finalidad y a quién se los comunicamos. |
| **Rectificación** | Corregir datos inexactos, desactualizados o incompletos. |
| **Supresión** | Pedir que eliminemos tus datos cuando ya no sean necesarios o retires tu consentimiento, salvo que la ley nos obligue a conservarlos. |
| **Oposición** | Oponerte a un tratamiento determinado por motivos legítimos. |
| **Portabilidad** | Recibir tus datos en un formato estructurado y de uso común, o pedir que los transfiramos a otro responsable cuando sea técnicamente posible. |
| **Bloqueo** | Suspender temporalmente el tratamiento de un dato mientras se resuelve una solicitud (por ejemplo, una rectificación u oposición). |

### Cómo ejercer tus derechos

- **Canal y mecanismo:** puedes ejercer tus derechos directamente desde la App —por ejemplo, editando tu perfil, ajustando tus permisos o eliminando tu cuenta (ver Sección 16)— y, para cualquier solicitud, escribiéndonos a **contacto@gobikeup.com** indicando el derecho que quieres ejercer.
- Para proteger tu información, podemos pedirte que **acredites tu identidad** antes de responder, de modo de no entregar tus datos a un tercero.
- **Plazo de respuesta:** te responderemos en un plazo de **30 días corridos** contados desde tu solicitud. Este plazo puede **prorrogarse por una sola vez, hasta por 30 días corridos adicionales**, informándote de la prórroga y sus razones (conforme al **artículo 11 de la Ley N° 21.719**).

### Revocar tu consentimiento

Cuando un tratamiento se base en tu **consentimiento** (por ejemplo, geolocalización en segundo plano, notificaciones push o la finalidad B2G), puedes **revocarlo cuando quieras**:

- Desactivando los permisos correspondientes desde los **ajustes de tu teléfono** (ubicación, notificaciones) o desde la App.
- Escribiéndonos a **contacto@gobikeup.com**.

La revocación **no afecta** la licitud del tratamiento realizado antes de revocar, y puede implicar que algunas funciones (como el tracking en vivo del SOS) dejen de estar disponibles.

### Reclamo ante la autoridad

Si consideras que no respetamos tus derechos, puedes presentar un reclamo ante la **Agencia de Protección de Datos Personales** (organismo creado por la Ley N° 21.719), sin perjuicio de las acciones que la ley te reconozca ante los tribunales.

---

## 16. Borrado de cuenta y de tus datos

Puedes **eliminar tu cuenta directamente desde la App**, sin tener que escribirnos ni dar explicaciones. Es tu decisión y la respetamos.

### Qué ocurre cuando borras tu cuenta

Al confirmar el borrado, la App ejecuta una **purga real** de tu cuenta: **eliminamos tu cuenta y los Datos Personales ligados a ella** de nuestros sistemas. En concreto, se eliminan:

- Tus **datos de cuenta** (nombre, correo, UUID interno, y teléfono y tipo de bici si los agregaste) y la **contraseña** de la base de datos del backend (Hetzner, UE).
- Tu **historial de rutas** (incluida la trayectoria/polilínea de tus recorridos), tus **estadísticas personales** y tu **historial de eventos SOS**.
- Tus **contactos de emergencia**.
- Tus **reviews**, tus **interacciones con talleres** y el contenido atribuido a tu perfil; tus **alertas comunitarias** públicas se eliminan o se **anonimizan/desvinculan** de tu identidad.
- Tu **token de notificaciones push**.
- La **revocación de tus tokens** de sesión y el borrado de los datos cacheados en tu dispositivo (`expo-secure-store`).

### Excepciones reales

Solo unas pocas categorías no se borran de inmediato, por razones acotadas y legítimas:

- **Ubicación de SOS:** se rige por su propio plazo de **90 días** con borrado automático (ver Sección 14), porque puede ser relevante para tu seguridad y la de tus contactos.
- **Respaldos cifrados:** tus datos pueden persistir por un **período breve** en respaldos cifrados antes de su sobrescritura definitiva, sin ser usados para ninguna otra finalidad.
- **Obligaciones legales:** si la ley nos exige conservar algún dato, lo mantendremos solo por el plazo legal y aislado de cualquier otro uso.

Si en lugar de borrar la cuenta solo quieres **cerrar sesión** o **dejar de usar una función** (por ejemplo, revocar el permiso de ubicación o de notificaciones), puedes hacerlo sin eliminar tu cuenta (ver Sección 15).

---

## 17. Menores de edad (niños, niñas y adolescentes)

La App está pensada para personas de **16 años o más**. **No admitimos el registro de menores de 16 años.**

### Cómo verificamos la edad

Al registrarte, te pedimos **confirmar mediante una casilla** que tienes **al menos 16 años** ("Confirmo que tengo al menos 16 años"). Es una **declaración tuya**: la App **no** recolecta tu fecha ni tu año de nacimiento, y no guardamos ningún dato de edad. La verificación de la edad mínima se basa únicamente en esa **autodeclaración**. Si detectamos una cuenta de un menor de 16 años, la eliminaremos junto con sus datos.

### Por qué la edad mínima es 16 años

La Ley N° 21.719 establece una protección reforzada para adolescentes **menores de 16 años**: conforme al **artículo 16 quáter, inciso cuarto**, el tratamiento de **datos personales sensibles** de un adolescente menor de 16 años **requiere el consentimiento del padre, madre o representante legal**.

Como GoBikeUp trata datos de **ubicación** y opera una función de **emergencia (SOS)** que puede involucrar datos sensibles, hemos fijado la **edad mínima de uso en 16 años**. De este modo, no tratamos datos sensibles de adolescentes menores de 16 que requieran el consentimiento de su representante legal.

Si eres **padre, madre o representante legal** y crees que un menor de 16 años a tu cargo creó una cuenta declarando una edad falsa, escríbenos a **contacto@gobikeup.com** y eliminaremos la cuenta y sus datos.

### Una recomendación honesta

GoBikeUp maneja **datos de ubicación** y una función de **emergencia (SOS)**. Si eres adolescente, te recomendamos conversar con tu familia sobre el uso de la App y de tus **contactos de emergencia**, para que pedalees tranquilo y acompañado.

---

## 18. Seguridad y notificación de vulneraciones

La seguridad de tus Datos Personales es parte de nuestra promesa de que **pedalees tranquilo**. Aplicamos medidas técnicas y organizativas razonables para protegerlos:

- **Cifrado en tránsito (TLS/HTTPS):** toda comunicación entre la App y nuestros servidores viaja cifrada. El tráfico pasa además por **Cloudflare** (WAF/proxy), que ayuda a mitigar ataques.
- **Contraseñas con hash bcrypt:** nunca almacenamos tu contraseña en texto plano. Se guarda como un **hash bcrypt**, irreversible, y **jamás** se guarda en tu dispositivo ni se registra en logs.
- **Tokens en almacenamiento seguro del sistema:** tus tokens de sesión se guardan en `expo-secure-store`, que usa el **Keychain (iOS)** o el **Keystore (Android)** del dispositivo. **Nunca** se registran en logs (ver Sección 10).
- **Minimización en logs:** **no registramos información personal identificable (PII)** —como contraseñas, tokens o teléfonos y nombres completos— en nuestros sistemas, y depuramos (*scrub*) la telemetría de errores para que no contenga Datos Personales (ver Sección 12).
- **Control de acceso:** el acceso a los datos en el backend está restringido al personal y los **Encargados** estrictamente necesarios para operar el servicio.
- **Registro de vulneraciones:** mantenemos un **registro interno de vulneraciones de seguridad** que afecten Datos Personales, con las medidas adoptadas, conforme a la Ley N° 21.719.

Ninguna medida de seguridad es infalible. Aunque trabajamos para proteger tu información, no podemos garantizar una seguridad absoluta frente a todo riesgo.

### Notificación de vulneraciones

Si ocurre una **vulneración de seguridad** que afecte tus Datos Personales, actuaremos conforme a la **Ley N° 21.719**:

- **Notificación a la Agencia de Protección de Datos Personales:** la ley chilena **no contempla un plazo fijo de 72 horas** (ese plazo es propio del RGPD europeo). Conforme al **artículo 14 sexies**, notificaremos a la Agencia por los **medios más expeditos posibles y sin dilaciones indebidas** una vez que tomemos conocimiento de la vulneración.
- **Notificación a ti (titular):** la obligación de informarte directamente se **gatilla según la categoría de los datos afectados** y el riesgo asociado (por ejemplo, cuando se vean afectados datos sensibles o de geolocalización). Cuando corresponda, te informaremos —por correo o dentro de la App— describiendo qué ocurrió, qué datos se vieron afectados y qué medidas estamos tomando.

---

## 19. Marco legal aplicable

Tratamos tus Datos Personales conforme a la legislación chilena de protección de datos personales. En particular:

- **Ley N° 19.628**, sobre Protección de la Vida Privada.
- **Ley N° 21.719**, publicada el **13 de diciembre de 2024**, que regula la protección y el tratamiento de los datos personales y crea la **Agencia de Protección de Datos Personales**, cuya entrada en vigencia general se produce el **1 de diciembre de 2026**.

**La Ley N° 19.628 no se deroga:** la Ley N° 21.719 **sustituye y moderniza su texto**, actualizando el régimen de protección de datos. Esta política está redactada bajo el estándar de la **Ley N° 21.719**, de modo que tus derechos y nuestras obligaciones se ajusten desde ya al marco reforzado. **Sobre las citas legales:** cuando citamos un artículo por su número (por ejemplo, "artículo 12" o "artículo 16 sexies"), nos referimos al articulado de la **Ley N° 19.628 según su texto reformado por la Ley N° 21.719**.

Cuando transferimos datos fuera de Chile (por ejemplo, a Encargados ubicados en la Unión Europea o Estados Unidos), lo hacemos amparados en los mecanismos de transferencia internacional de los **artículos 27 a 29 (Título V) de la Ley N° 21.719** —niveles adecuados declarados por la Agencia o cláusulas tipo que esta dicte—, reconociendo que la Agencia aún no está operativa (ver Sección 11). Encontrarás el detalle en esa sección.

A partir de su entrada en vigencia, la **Agencia de Protección de Datos Personales** es la autoridad de control competente en Chile, ante la cual puedes presentar reclamos (ver Sección 15).

---

## 20. Cambios a esta política

Podemos actualizar esta política cuando cambien nuestras prácticas de tratamiento, agreguemos nuevas funciones a la App, o cuando lo exija una modificación legal o regulatoria.

- Cuando hagamos cambios, actualizaremos la fecha de **"Última actualización"** al inicio de este documento y subiremos la **versión**.
- Si el cambio es **relevante** —por ejemplo, una nueva finalidad de tratamiento, un nuevo Encargado que reciba tus datos, o un cambio en las bases de licitud— te lo informaremos dentro de la App y, cuando corresponda, te pediremos nuevamente tu consentimiento antes de aplicar el cambio.
- Los cambios menores (correcciones de redacción, aclaraciones) rigen desde su publicación en la App.

Te recomendamos revisar esta política periódicamente. La versión vigente siempre estará disponible dentro de la App y en **gobikeup.cl**. Si continúas usando la App después de que un cambio entre en vigencia, entendemos que estás al tanto de la versión actualizada; esto no reemplaza el consentimiento que te pidamos por separado cuando la ley lo exija.
