import type { LegalDoc } from './types'

export const deletionNl: LegalDoc = {
  title: 'Je account en gegevens verwijderen',
  lead:
    'Wil je stoppen met Circa? Je kunt je account en je gegevens op twee manieren laten verwijderen: zelf in de app, of met een mail aan ons. Allebei gratis, en je hoeft niet uit te leggen waarom.',
  sections: [
    {
      id: 'in-de-app',
      title: 'Zelf in de app (het snelst)',
      blocks: [
        {
          steps: [
            'Open Circa en log in.',
            'Tik onderin op **Profiel**.',
            'Scroll naar beneden en tik op **Account verwijderen**, onder Uitloggen.',
            'Bevestig met **Verwijder mijn account**.',
          ],
        },
        'Je account is daarna meteen weg en je wordt uitgelogd. Let op: alleen de app van je telefoon verwijderen is niet genoeg, dan blijft je account gewoon bestaan.',
      ],
    },
    {
      id: 'via-mail',
      title: 'Via e-mail',
      blocks: [
        'Kun je niet meer inloggen, of wil je dat ook je berichten en foto\'s in chats verdwijnen? Stuur ons dan een mail. Doe dat het liefst vanaf het e-mailadres van je account, dan kunnen we snel checken dat het echt jouw account is.',
        {
          request: {
            title: 'Stuur je verzoek naar',
            intro: 'Gebruik deze tekst, of schrijf het in je eigen woorden:',
            subject: 'Verwijderverzoek Circa-account',
            body:
              'Hallo Circa,\n\nIk wil dat mijn account en mijn gegevens worden verwijderd.\n\nGebruikersnaam: \nE-mailadres van mijn account: \nOok mijn berichten en foto\'s in chats verwijderen: ja / nee\n\nGroet,\n',
            copy: 'Kopieer adres',
            copied: 'Gekopieerd',
            open: 'Open in je mailapp',
          },
        },
        'We verwijderen je account binnen een maand, meestal veel sneller, en laten je per mail weten wanneer het klaar is. Kunnen we niet zeker weten dat het account van jou is, dan stellen we eerst een controlevraag.',
      ],
    },
    {
      id: 'wat-verdwijnt',
      title: 'Wat er wordt verwijderd',
      blocks: [
        {
          list: [
            'Direct weg: je login, e-mailadres, profielfoto, vrienden en verzoeken, voorkeuren, gekoppelde accounts en contactgegevens.',
            'Je profiel wordt anoniem: je naam wordt "Verwijderde speler" en je gebruikersnaam een willekeurige code. Niemand kan je nog vinden.',
            'Foto\'s die je in chats, stories of als groepsfoto hebt geplaatst, verwijderen we binnen 30 dagen.',
            'Berichten die je in groepen stuurde, blijven zonder je naam zichtbaar voor de andere leden, zodat hun gesprek klopt. Wil je dat die ook weg zijn, zet dat dan in je mail.',
            'Spelresultaten blijven alleen anoniem bestaan, zodat de uitslagen van anderen kloppen.',
            'Aankoopgegevens moeten we volgens de belastingwet 7 jaar bewaren.',
          ],
        },
        'Alle details staan in onze [privacyverklaring](./privacy.html#bewaren).',
      ],
    },
    {
      id: 'apple',
      title: 'Ingelogd met Apple?',
      blocks: [
        'Dan kun je Circa daarnaast de toegang tot je Apple ID ontnemen: open de Instellingen van je iPhone, tik op je naam en zoek bij **Log in met Apple** naar Circa. Dat stopt alleen de koppeling met Apple; je Circa-account verwijder je zoals hierboven.',
      ],
    },
    {
      id: 'ouders',
      title: 'Voor ouders en voogden',
      blocks: [
        'Wil je het account van je kind laten verwijderen? Mail ons op {email} met de gebruikersnaam van je kind. We kunnen je vragen te bevestigen dat je de ouder of voogd bent.',
      ],
    },
  ],
}
