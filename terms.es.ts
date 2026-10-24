import type { LegalDoc } from './types'

export const termsEs: LegalDoc = {
  title: 'Términos de uso',
  lead:
    'Estos términos se aplican cuando usas la app Circa o {domain}. Al crear una cuenta los aceptas. Los hemos hecho lo más cortos y claros posible. Lee también nuestra [política de privacidad](./privacy.html).',
  sections: [
    {
      id: 'wie',
      title: 'Quiénes somos',
      blocks: [
        'Circa lo ofrece **{tradeName}**, empresa individual de {owner}.',
        { list: ['Dirección: {address}, Países Bajos', 'Número de la Cámara de Comercio (KvK): {kvk}', 'Número de IVA: {vat}', 'Correo: {email}'] },
        'En estos términos, «nosotros» significa {tradeName}, y «tú», cualquier persona que use Circa.',
      ],
    },
    {
      id: 'account',
      title: 'Tu cuenta',
      blocks: [
        {
          list: [
            'Debes tener al menos **13 años** para usar Circa. Si tienes 13, 14 o 15 años, necesitas permiso de tu madre, padre o tutor, que también será responsable de tu uso de Circa.',
            'Creas una sola cuenta para ti y das datos correctos. Tu cuenta es personal; no puedes venderla ni cederla.',
            'Eres responsable de tus datos de acceso. Si crees que otra persona usa tu cuenta, avísanos enseguida.',
            'Tu nombre de usuario y tu nombre visible no pueden ser ofensivos, imitar a otra persona o marca ni contener publicidad. Si lo hacen, podemos cambiarlos.',
          ],
        },
      ],
    },
    {
      id: 'spel',
      title: 'El juego',
      blocks: [
        'Circa es un juego en el que estimas respuestas y te mides con amigos u otros jugadores. Algunas cosas que debes saber:',
        {
          list: [
            'Las respuestas correctas vienen de fuentes fiables, pero podemos equivocarnos. Si ves un error, avísanos y lo corregiremos. Los resultados que debieron ser distintos por ese error pueden corregirse.',
            'Los puntos, rankings y rachas son solo para el juego. **No tienen valor económico**, no puedes ganar nada con ellos y no se pueden transferir ni canjear.',
            'En los duelos a veces puedes jugar contra un **rival controlado por ordenador**, cuando no hay un jugador real disponible en ese momento.',
            'Podemos cambiar las reglas, la puntuación, las preguntas y las funciones para que el juego sea mejor o más justo.',
            'No se permite hacer trampas, por ejemplo con varias cuentas, scripts o aprovechando errores de la app.',
          ],
        },
      ],
    },
    {
      id: 'gedrag',
      title: 'Normas de convivencia',
      blocks: [
        'Circa va de pasarlo bien con amigos. Mantén el buen rollo. En mensajes, fotos, historias, nombres y preguntas que escribas, **no** puedes:',
        {
          list: [
            'acosar, amenazar, intimidar o discriminar a otras personas;',
            'publicar contenido sexual, violento o de odio, y menos aún nada inapropiado en el que aparezcan menores;',
            'compartir datos personales o fotos de otras personas sin su permiso;',
            'difundir spam, publicidad, estafas o contenido ilegal;',
            'infringir derechos de autor u otros derechos de terceros;',
            'hacerte pasar por otra persona;',
            'intentar hackear, sobrecargar o saltarte la app o nuestros servidores.',
          ],
        },
        'Eres responsable de lo que publicas. Lo que envías en privado también debe cumplir estas normas.',
      ],
    },
    {
      id: 'content',
      title: 'Tu contenido',
      blocks: [
        'Lo que publicas en Circa (mensajes, fotos, historias, preguntas) sigue siendo tuyo. Solo nos das el derecho a guardarlo, tratarlo y mostrarlo a las personas a las que va dirigido, durante el tiempo necesario para que Circa funcione. Este derecho es gratuito, no exclusivo y mundial.',
        'Una pregunta que plantas con «Planta una pregunta» se usa para la ronda de tu grupo (ver Compras dentro de la app).',
        'Declaras que tienes derecho a publicar lo que publicas y que no vulnera derechos de terceros.',
      ],
    },
    {
      id: 'melden',
      title: 'Avisos y medidas',
      blocks: [
        '¿Ves algo que no está permitido o alguien se pone pesado? Bloquéalo en la app y escríbenos a **{email}** contando lo que pasó y, si puedes, con una captura de pantalla. Lo revisaremos lo antes posible.',
        'Si un contenido o un comportamiento incumple estos términos o la ley, podemos eliminar el contenido, limitar funciones o suspender o cerrar tu cuenta. Te diremos qué hemos hecho y por qué, salvo que no podamos o no nos esté permitido. ¿No estás de acuerdo? Escríbenos y lo revisaremos de nuevo.',
      ],
    },
    {
      id: 'aankopen',
      title: 'Compras dentro de la app',
      blocks: [
        'Circa se descarga y se juega gratis. Algunos extras se pueden comprar. Ahora mismo es **«Planta una pregunta»**: escribes tu propia pregunta con la respuesta correcta y entra en una próxima ronda de tu grupo. El precio (IVA incluido) aparece en el App Store antes de pagar. No hay suscripciones.',
        {
          list: [
            'Pagas a través del App Store de Apple (y más adelante, posiblemente, Google Play). También se aplican las condiciones de esa tienda. Nunca vemos tus datos de pago.',
            'Una compra sirve para una pregunta plantada en un grupo. La compra es personal: no puedes pasarla a otra persona ni a otra cuenta, y una compra ya usada no se puede restaurar.',
            'Tu pregunta debe cumplir las normas de convivencia y tener una respuesta correcta. Añade una fuente cuando puedas. Podemos revisar una pregunta y, si hace falta, corregirla un poco (por ejemplo, una falta de ortografía) o rechazarla.',
            'El grupo solo ve tu pregunta cuando se juega. Quién la plantó lo ven al terminar la ronda.',
            'Una compra es contenido digital que recibes al momento. Al confirmar la compra aceptas la entrega inmediata y pierdes tu derecho de desistimiento de 14 días.',
            'Los reembolsos se gestionan a través de Apple. Si te devuelven el dinero, la compra se anula; una pregunta plantada que aún no se haya jugado se retira de la ronda.',
            'Si no podemos usar una pregunta plantada porque incumple estos términos, no recibirás compensación por nuestra parte. Si el motivo es un error nuestro, lo solucionaremos.',
          ],
        },
      ],
    },
    {
      id: 'rechten',
      title: 'Nuestros derechos',
      blocks: [
        'La app, la web, el diseño, las preguntas, el nombre Circa y el logotipo son nuestros o de nuestros licenciantes. Puedes usar Circa para uso personal y no comercial. No puedes copiar, modificar, revender ni crear tu propia versión de la app. Algunas fotos son de terceros y se usan bajo su licencia, con atribución cuando la licencia lo exige.',
      ],
    },
    {
      id: 'beschikbaarheid',
      title: 'Disponibilidad y cambios',
      blocks: [
        'Hacemos todo lo posible para que Circa funcione bien, pero no podemos garantizar que la app nunca falle ni tenga errores. A veces hace falta mantenimiento. Podemos añadir, cambiar o retirar funciones. Si dejamos de ofrecer Circa por completo, te avisaremos con al menos 30 días de antelación.',
      ],
    },
    {
      id: 'aansprakelijkheid',
      title: 'Responsabilidad',
      blocks: [
        'Circa es un juego y se ofrece tal cual. No somos responsables de los daños causados porque la app no esté disponible temporalmente, por errores en preguntas o respuestas, o por lo que publiquen o hagan otros usuarios.',
        'Si aun así somos responsables, nuestra responsabilidad se limita al importe que hayas pagado en compras en Circa en los 12 meses anteriores, con un máximo de 100 €. Este límite no se aplica en caso de dolo o negligencia grave por nuestra parte, ni a los derechos que siempre tienes como consumidor por ley.',
      ],
    },
    {
      id: 'beeindigen',
      title: 'Dejar Circa',
      blocks: [
        'Puedes dejarlo cuando quieras. Elimina tu cuenta en la app o escríbenos. Qué pasa con tus datos lo explica la [política de privacidad](./privacy.html). Si incumples estos términos de forma grave o repetida, podemos cerrar tu cuenta.',
      ],
    },
    {
      id: 'apple',
      title: 'Si usas la app para iOS',
      blocks: [
        'Estos términos son un acuerdo entre tú y nosotros, no con Apple. Para la app de iOS se aplica además lo siguiente:',
        {
          list: [
            'Somos nosotros, y no Apple, los responsables de la app, su mantenimiento y soporte, y de atender quejas o reclamaciones sobre ella, incluidas las de responsabilidad por producto, requisitos legales o normativos, protección del consumidor y propiedad intelectual.',
            'Apple no está obligada a ofrecer mantenimiento ni soporte. Si la app no cumple una garantía legalmente aplicable, puedes pedir a Apple que te devuelva el precio de compra (si lo hubo); más allá de eso, Apple no tiene obligaciones de garantía.',
            'Declaras que no te encuentras en un país sujeto a embargo del Gobierno de EE. UU. y que no figuras en ninguna lista del Gobierno de EE. UU. de personas prohibidas o restringidas.',
            'Apple y sus filiales son terceros beneficiarios de estos términos y pueden hacerlos cumplir frente a ti.',
          ],
        },
      ],
    },
    {
      id: 'recht',
      title: 'Cambios, ley aplicable y conflictos',
      blocks: [
        'Podemos actualizar estos términos. Te avisaremos de los cambios importantes en la app con al menos 30 días de antelación. Si sigues jugando después, se aplican los nuevos términos. Si no estás de acuerdo, puedes eliminar tu cuenta.',
        'Estos términos se rigen por la ley neerlandesa. Si eres consumidor y vives en otro país de la UE, conservas la protección de las normas imperativas de ese país. ¿Tienes una queja? Escríbenos primero a {email}; respondemos en 14 días y buscamos juntos una solución. Si no lo logramos, puedes acudir al tribunal competente.',
        'Si una parte de estos términos no es válida, el resto sigue aplicándose. Si una traducción difiere, prevalece la versión neerlandesa.',
      ],
    },
  ],
}
