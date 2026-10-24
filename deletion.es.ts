import type { LegalDoc } from './types'

export const deletionEs: LegalDoc = {
  title: 'Eliminar tu cuenta y tus datos',
  lead:
    '¿Quieres dejar Circa? Puedes eliminar tu cuenta y tus datos de dos formas: tú mismo en la app o escribiéndonos un correo. Las dos son gratis y no tienes que explicar por qué.',
  sections: [
    {
      id: 'in-de-app',
      title: 'En la app (lo más rápido)',
      blocks: [
        'La app de Circa está en neerlandés e inglés; si tu teléfono no está en neerlandés, verás los botones en inglés.',
        {
          steps: [
            'Abre Circa e inicia sesión.',
            'Toca **Profile** (Perfil) abajo.',
            'Desplázate hacia abajo y toca **Delete account** (Eliminar cuenta), debajo de Sign out.',
            'Confirma con **Delete my account** (Eliminar mi cuenta).',
          ],
        },
        'Tu cuenta desaparece al momento y se cierra tu sesión. Ojo: borrar solo la app del teléfono no basta; tu cuenta seguiría existiendo.',
      ],
    },
    {
      id: 'via-mail',
      title: 'Por correo electrónico',
      blocks: [
        '¿Ya no puedes iniciar sesión, o quieres que también desaparezcan tus mensajes y fotos de los chats? Escríbenos. Mejor desde el correo de tu cuenta, así podemos comprobar rápido que la cuenta es tuya.',
        {
          request: {
            title: 'Envía tu solicitud a',
            intro: 'Usa este texto o escríbelo con tus palabras:',
            subject: 'Solicitud de eliminación de cuenta de Circa',
            body:
              'Hola, Circa:\n\nQuiero que eliminéis mi cuenta y mis datos.\n\nNombre de usuario: \nCorreo de mi cuenta: \nEliminar también mis mensajes y fotos de los chats: sí / no\n\nGracias,\n',
            copy: 'Copiar dirección',
            copied: 'Copiado',
            open: 'Abrir en tu app de correo',
          },
        },
        'Eliminamos tu cuenta en el plazo de un mes, normalmente mucho antes, y te avisamos por correo cuando esté hecho. Si no podemos estar seguros de que la cuenta es tuya, primero te haremos una pregunta de verificación.',
      ],
    },
    {
      id: 'wat-verdwijnt',
      title: 'Qué se elimina',
      blocks: [
        {
          list: [
            'Se borra al momento: tu inicio de sesión, correo, foto de perfil, amigos y solicitudes, preferencias, cuentas vinculadas y datos de contactos.',
            'Tu perfil pasa a ser anónimo: tu nombre pasa a ser «Jugador eliminado» y tu nombre de usuario un código aleatorio. Ya nadie puede encontrarte.',
            'Las fotos que publicaste en chats, historias o como foto de grupo se borran en un plazo de 30 días.',
            'Los mensajes que enviaste en grupos siguen visibles para los demás miembros, sin tu nombre, para que su conversación tenga sentido. ¿Quieres que también desaparezcan? Dilo en tu correo.',
            'Los resultados de juego solo se conservan de forma anónima, para que los resultados de los demás sigan siendo correctos.',
            'Los datos de compra deben conservarse 7 años por la ley fiscal neerlandesa.',
          ],
        },
        'Todos los detalles están en nuestra [política de privacidad](./privacy.html#bewaren).',
      ],
    },
    {
      id: 'apple',
      title: '¿Iniciaste sesión con Apple?',
      blocks: [
        'También puedes retirar el acceso de Circa a tu ID de Apple: abre los Ajustes de tu iPhone, toca tu nombre y busca Circa en **Iniciar sesión con Apple**. Eso solo corta la conexión con Apple; tu cuenta de Circa la eliminas como se explica arriba.',
      ],
    },
    {
      id: 'ouders',
      title: 'Para madres, padres y tutores',
      blocks: [
        '¿Quieres que eliminemos la cuenta de tu hijo o hija? Escríbenos a {email} con su nombre de usuario. Puede que te pidamos confirmar que eres su madre, padre o tutor.',
      ],
    },
  ],
}
