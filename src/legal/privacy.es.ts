import type { LegalDoc } from './types'

export const privacyEs: LegalDoc = {
  title: 'Política de privacidad',
  lead:
    'Circa es un juego para adivinar, retar y ganar a tus amigos. Para que funcione necesitamos algunos de tus datos. En esta política te contamos cuáles, por qué, con quién los compartimos, cuánto tiempo los guardamos y cuáles son tus derechos. Sin letra pequeña: si algo no está bien o no queda claro, escríbenos a {email}.',
  sections: [
    {
      id: 'wie',
      title: 'Quién es el responsable',
      blocks: [
        'Circa es un producto de **{tradeName}**, empresa individual de {owner}, con domicilio en {address}, Países Bajos, inscrita en la Cámara de Comercio neerlandesa (KvK) con el número {kvk}. Somos el responsable del tratamiento de los datos personales que facilitas en la app Circa y en {domain}.',
        '¿Preguntas sobre privacidad o una solicitud sobre tus datos? Escribe a **{email}**. No tenemos delegado de protección de datos; para una organización de nuestro tamaño no es obligatorio.',
      ],
    },
    {
      id: 'welke-gegevens',
      title: 'Qué datos tratamos',
      blocks: [
        '**Cuenta.** Tu correo electrónico y una contraseña cifrada, o un inicio de sesión con Apple (y, cuando esté disponible, con Google o Facebook). Con Iniciar sesión con Apple puedes ocultar tu correo; en ese caso solo recibimos una dirección de reenvío de Apple. La primera vez que inicias sesión con Apple, Apple puede facilitarnos tu nombre.',
        '**Perfil.** Tu nombre de usuario, tu nombre visible, tu foto de perfil (si eliges una), tu idioma y tus ajustes (como sonido, vibración y notificaciones). No pedimos tu número de teléfono, fecha de nacimiento, dirección ni ubicación.',
        '**Datos de juego.** Tus respuestas y estimaciones, cuándo las diste, tus puntos, tu ranking, tus duelos, tus rondas en grupo y tus respuestas a la pregunta del día. En las preguntas de geografía guardas un punto del mapa que eliges tú; nunca es tu ubicación real.',
        '**Amigos y grupos.** Quiénes son tus amigos, solicitudes de amistad, a quién has bloqueado, en qué grupos estás, invitaciones y fotos de grupo.',
        '**Mensajes y contenido.** Mensajes de chat en grupos y conversaciones privadas, reacciones con emoji, fotos que envías por chat, historias (foto con texto), reacciones a historias y preguntas que escribes tú con «Planta una pregunta». También guardamos hasta dónde has leído una conversación, para que la app pueda contar tus mensajes no leídos. Los demás no ven cuándo has leído algo.',
        '**Contactos (solo si tú quieres).** Si das permiso a la app para ver tus contactos, en tu teléfono solo lee las **direcciones de correo electrónico** de tu agenda. Se convierten en un hash (un código fijo) en tu teléfono y se envían así a nuestro servidor para ver cuáles de tus contactos ya juegan a Circa. No guardamos esos hashes. Los nombres, números de teléfono y fotos de tu agenda nunca salen de tu teléfono. Solo registramos cuántos hashes enviaste y cuándo, para evitar abusos.',
        '**Compras y preguntas plantadas.** Cuando compras «Planta una pregunta», guardamos la pregunta que escribiste: el texto, la respuesta correcta, la unidad, la categoría y, si las añades, tu explicación y tu fuente. Apple nos facilita un ID de transacción, el producto, el estado y el momento de la compra. Con la compra, la app envía un código interno para vincular el pago con tu pregunta. Nunca vemos tus datos de pago; se quedan en Apple. Si Apple te devuelve el dinero, nos lo comunica y retiramos tu pregunta de la ronda si aún no se ha jugado.',
        '**Datos técnicos.** Como cualquier servicio en línea, nuestros servidores tratan datos técnicos como tu dirección IP, el tipo de dispositivo y la hora de una solicitud, para que la app funcione y sea segura. **No** usamos redes publicitarias, rastreadores ni servicios de analítica o de informes de errores de terceros.',
      ],
    },
    {
      id: 'waarom',
      title: 'Por qué lo hacemos y con qué base legal',
      blocks: [
        {
          table: {
            head: ['Finalidad', 'Datos', 'Base legal (RGPD)'],
            rows: [
              ['Crear tu cuenta, iniciar sesión y protegerla', 'Cuenta, datos técnicos', 'Ejecución del contrato'],
              ['Hacer funcionar el juego: preguntas, respuestas, puntos, rankings, duelos y grupos', 'Perfil, datos de juego, amigos y grupos', 'Ejecución del contrato'],
              ['Chatear y compartir fotos e historias con tus amigos', 'Mensajes y contenido', 'Ejecución del contrato'],
              ['Encontrar amigos a través de tus contactos', 'Correos de tus contactos convertidos en hash', 'Consentimiento (que das en la app y puedes retirar cuando quieras)'],
              ['Verificar y tramitar compras, incluidos los reembolsos', 'Datos de compra', 'Ejecución del contrato y obligación legal (conservación fiscal)'],
              ['Evitar abusos, spam y fraude', 'Datos técnicos, registro de coincidencias de contactos, bloqueos', 'Interés legítimo: una app segura para todos'],
              ['Enviar notificaciones sobre tus partidas (cuando esté disponible)', 'Token del dispositivo, preferencias', 'Consentimiento mediante el aviso de notificaciones de tu teléfono'],
              ['Responder a preguntas y avisos que nos envíes', 'Tu correo y lo que nos escribes', 'Interés legítimo'],
            ],
          },
        },
        'No usamos tus datos para publicidad, no los vendemos y no creamos perfiles para predecir tu comportamiento. No hay decisiones automatizadas con efectos jurídicos para ti. Los puntos y rankings automáticos del juego son solo las reglas del juego.',
      ],
    },
    {
      id: 'wie-ziet-wat',
      title: 'Quién ve qué en la app',
      blocks: [
        {
          list: [
            '**Cualquier persona con una cuenta de Circa** puede ver tu nombre de usuario, tu nombre visible, tu foto de perfil y tu ranking, por ejemplo cuando juegas contra alguien en un duelo en directo. Las fotos de perfil se guardan tras un enlace público que solo se abre con la dirección exacta.',
            '**La búsqueda por nombre de usuario y que te encuentren por tus contactos** están activadas por defecto. Puedes desactivar ambas en los ajustes.',
            '**Tus amigos y los miembros de tus grupos** ven tus respuestas y resultados en las partidas que jugáis juntos. Las respuestas de los demás solo las ves cuando has respondido tú o cuando la ronda ha terminado.',
            '**Pregunta del día**: tus amigos solo ven tu respuesta cuando han respondido ellos o cuando el día ha terminado. Si lo haces muy bien (por ejemplo, aciertas exacto o superas al 90% de los jugadores), Circa puede mostrar tu resultado automáticamente a tus amigos como historia.',
            '**Mensajes, fotos de chat, fotos de grupo e historias** solo los ven los miembros de esa conversación o grupo, o tus amigos (las historias, durante 24 horas).',
            '**Una pregunta que plantas** solo la ve el grupo cuando se juega; quién la plantó lo ven al terminar la ronda.',
          ],
        },
        'A veces, en un duelo, juegas contra un rival controlado por ordenador cuando no hay un jugador real disponible en ese momento. Ese rival no recibe datos tuyos más allá de lo necesario para jugar la partida.',
      ],
    },
    {
      id: 'delen',
      title: 'Con quién compartimos datos',
      blocks: [
        'Solo compartimos tus datos con quienes necesitamos para que Circa funcione. Con quienes tratan datos por encargo nuestro tenemos un acuerdo de seguridad y confidencialidad (contrato de encargado del tratamiento).',
        {
          list: [
            '**Supabase** (base de datos, inicio de sesión, almacenamiento de archivos y código del servidor). Nuestra base de datos está en un centro de datos en **Irlanda (UE)**. Supabase es una empresa estadounidense; cualquier acceso desde EE. UU. está cubierto por las cláusulas contractuales tipo de la Comisión Europea.',
            '**Apple**, cuando usas Iniciar sesión con Apple, compras algo en el App Store o (cuando esté disponible) recibes notificaciones. Apple es responsable de ello; consulta la política de privacidad de Apple. Los mapas de la app se muestran con Apple Maps.',
            '**Google y Meta (Facebook)**, solo si decides iniciar sesión o buscar amigos con ellos, cuando esas opciones estén disponibles. También en Android, cuando exista esa versión, las compras y notificaciones pasarán por Google.',
            '**GIPHY**, cuando los GIF estén disponibles en el chat. Enviamos tu búsqueda a GIPHY en tu nombre, sin tu nombre ni tu cuenta. Cuando ves GIF, tu teléfono carga la imagen directamente desde GIPHY, por lo que GIPHY ve tu dirección IP. GIPHY tiene su sede en EE. UU.',
            '**Vercel** aloja esta web y, para ello, ve datos técnicos como tu dirección IP.',
          ],
        },
        'Fuera de estas partes, solo compartimos tus datos cuando la ley nos obliga, por ejemplo ante una solicitud legítima de la policía o de una autoridad supervisora. Si los datos salen del Espacio Económico Europeo, nos aseguramos de que haya garantías adecuadas, como el Marco de Privacidad de Datos UE-EE. UU. o las cláusulas contractuales tipo de la Comisión Europea.',
      ],
    },
    {
      id: 'bewaren',
      title: 'Cuánto tiempo guardamos los datos',
      blocks: [
        {
          list: [
            '**Mientras exista tu cuenta** guardamos tus datos de cuenta, perfil, juego y amigos, porque los necesitas para jugar.',
            '**Las historias** se ven durante 24 horas. Borramos los archivos como máximo 30 días después.',
            '**El registro de coincidencias de contactos** (solo cifras y horas) se guarda como máximo 30 días.',
            '**Los datos de compra** se guardan 7 años, porque la ley fiscal neerlandesa lo exige.',
            '**Los correos que nos envías** se guardan el tiempo necesario para ayudarte, y como máximo 2 años.',
          ],
        },
        '**Si eliminas tu cuenta** (en la app o escribiéndonos) ocurre lo siguiente:',
        {
          list: [
            'Tu inicio de sesión, correo, foto de perfil, amistades, solicitudes, preferencias, cuentas vinculadas y datos de contactos se borran de inmediato.',
            'Tu perfil pasa a ser anónimo: tu nombre pasa a ser «Jugador eliminado» y tu nombre de usuario un código aleatorio. Ya nadie puede encontrarte.',
            'Los mensajes que enviaste en grupos o conversaciones siguen visibles para los demás miembros, pero sin tu nombre, para que su conversación siga teniendo sentido. ¿Quieres que también desaparezcan ciertos mensajes o fotos? Escríbenos y los borramos.',
            'Las fotos que publicaste en chats, historias o como foto de grupo se borran en un plazo de 30 días.',
            'Los resultados de juego solo se conservan de forma anónima, para que las puntuaciones y rankings de los demás sigan siendo correctos. Ya no se pueden vincular contigo.',
            'Una pregunta plantada que ya se jugó se queda en el historial del grupo sin tu nombre. Una pregunta que aún no se ha jugado se borra.',
            'Los datos de compra se conservan hasta que termina el plazo legal de conservación fiscal.',
          ],
        },
      ],
    },
    {
      id: 'kinderen',
      title: 'Menores',
      blocks: [
        'Circa es para todas las personas a partir de **13 años**. ¿Tienes 13, 14 o 15 años? Entonces solo puedes usar Circa con permiso de tu madre, padre o tutor. Madres, padres y tutores pueden escribirnos siempre a {email} para ver o borrar los datos de su hijo o hija.',
        'Si descubrimos que alguien menor de 13 años tiene una cuenta, o que alguien menor de 16 no tiene permiso, eliminamos esa cuenta.',
      ],
    },
    {
      id: 'beveiliging',
      title: 'Seguridad',
      blocks: [
        'Todas las conexiones entre la app y nuestros servidores están cifradas (HTTPS). Las contraseñas solo se guardan cifradas. En la base de datos, unas reglas de acceso estrictas deciden quién puede ver qué: solo tú, tus amigos o los miembros de un grupo, según el tipo de dato. Las fotos de chat, las fotos de grupo y las historias están en un almacenamiento protegido y solo se abren mediante enlaces temporales.',
        'Si aun así algo sale mal con tus datos (una brecha de seguridad), lo notificamos a la autoridad neerlandesa de protección de datos en un plazo de 72 horas cuando sea obligatorio, y te avisamos si el riesgo para ti es alto.',
      ],
    },
    {
      id: 'rechten',
      title: 'Tus derechos',
      blocks: [
        'Tienes derecho a acceder a tus datos, rectificarlos o suprimirlos. Puedes oponerte al tratamiento basado en nuestro interés legítimo, limitar el tratamiento y pedir tus datos en un formato de archivo habitual (portabilidad). El consentimiento que hayas dado, por ejemplo para tus contactos o las notificaciones, puedes retirarlo cuando quieras en la app o en los ajustes de tu teléfono.',
        'Mucho de esto puedes hacerlo tú en la app: cambiar tu nombre y tu foto, desactivar que te encuentren, bloquear a alguien y eliminar tu cuenta. Cómo hacerlo lo explicamos en [Eliminar tu cuenta](./verwijderen.html). Para todo lo demás, escribe a **{email}**. Respondemos en el plazo de un mes. Para que nadie más pida tus datos, puede que te pidamos confirmar que la cuenta es tuya.',
        '¿No estás contento con cómo tratamos tus datos? Dínoslo primero y lo solucionamos juntos. También puedes presentar siempre una reclamación ante la [autoridad neerlandesa de protección de datos (Autoriteit Persoonsgegevens)](https://www.autoriteitpersoonsgegevens.nl) o ante la autoridad de protección de datos de tu país, como la [AEPD](https://www.aepd.es) en España.',
      ],
    },
    {
      id: 'website',
      title: 'Esta web',
      blocks: [
        'En {domain} **no usamos cookies** ni rastreadores. La web solo recuerda el idioma y el tema claro u oscuro que eliges, y eso se guarda en tu propio navegador. Nunca sale de tu dispositivo. Las fuentes y las imágenes vienen de nuestro propio servidor, no de Google ni de otros. Nuestro proveedor de alojamiento, Vercel, trata datos técnicos como tu dirección IP para mostrar y proteger la web.',
      ],
    },
    {
      id: 'wijzigingen',
      title: 'Cambios',
      blocks: [
        'Circa crece, y esta política crece con él. Arriba ves cuándo se actualizó por última vez. Si cambiamos algo importante, por ejemplo porque incorporamos a una nueva empresa o queremos usar tus datos para una nueva finalidad, te avisaremos antes en la app. Cuando la ley lo exija, te pediremos primero tu consentimiento.',
      ],
    },
  ],
}
