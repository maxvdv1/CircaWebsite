import type { LegalDoc } from './types'

export const privacyNl: LegalDoc = {
  title: 'Privacyverklaring',
  lead:
    'Circa is een spel om met vrienden te schatten, uit te dagen en te winnen. Daarvoor hebben we een paar gegevens van je nodig. In deze verklaring lees je welke, waarom, met wie we ze delen, hoe lang we ze bewaren en wat je rechten zijn. Geen kleine lettertjes: als iets niet klopt of onduidelijk is, mail ons op {email}.',
  sections: [
    {
      id: 'wie',
      title: 'Wie is verantwoordelijk',
      blocks: [
        'Circa is een product van **{tradeName}**, een eenmanszaak van {owner}, gevestigd op {address}, ingeschreven bij de Kamer van Koophandel onder nummer {kvk}. Wij zijn de verwerkingsverantwoordelijke voor de persoonsgegevens die je in de Circa-app en op {domain} achterlaat.',
        'Vragen over privacy of een verzoek over je gegevens? Mail naar **{email}**. Een functionaris voor gegevensbescherming hebben we niet; die is voor een organisatie van onze omvang niet verplicht.',
      ],
    },
    {
      id: 'welke-gegevens',
      title: 'Welke gegevens we verwerken',
      blocks: [
        '**Account.** Je e-mailadres en een versleuteld wachtwoord, of een login via Apple (en, zodra beschikbaar, Google of Facebook). Bij Sign in with Apple kun je je e-mailadres verbergen; dan krijgen wij alleen een doorstuuradres van Apple. Als je via Apple voor het eerst inlogt, kan Apple ons je naam doorgeven.',
        '**Profiel.** Je gebruikersnaam, je weergavenaam, je profielfoto (als je die kiest), je taal en je instellingen (zoals geluid, trillen en meldingen). We vragen niet om je telefoonnummer, geboortedatum, adres of locatie.',
        '**Spelgegevens.** Je antwoorden en schattingen, de tijd waarop je ze gaf, je punten, je ranking, je duels, je groepsrondes en je antwoorden op de vraag van vandaag. Bij aardrijkskundevragen sla je een punt op de kaart op dat jij zelf kiest; dat is nooit je eigen locatie.',
        '**Vrienden en groepen.** Wie je vrienden zijn, vriendschapsverzoeken, wie je hebt geblokkeerd, in welke groepen je zit, uitnodigingen en groepsfoto\'s.',
        '**Berichten en content.** Chatberichten in groepen en privégesprekken, reacties met emoji, foto\'s die je in de chat stuurt, stories (foto met bijschrift), reacties op stories, en vragen die je zelf schrijft met "Plant een vraag". Ook houden we bij tot waar je een gesprek hebt gelezen, zodat de app je ongelezen berichten kan tellen. Anderen zien niet wanneer jij iets hebt gelezen.',
        '**Contacten (alleen als jij dat wilt).** Als je de app toestemming geeft om je contacten te bekijken, leest de app op je telefoon alleen de **e-mailadressen** uit je adresboek. Die worden op je telefoon omgezet in een hash (een vaste code) en zo naar onze server gestuurd om te kijken wie van je contacten al Circa speelt. We bewaren die hashes niet. Namen, telefoonnummers en foto\'s uit je adresboek verlaten je telefoon nooit. We loggen alleen hoeveel hashes je op welk moment stuurde, om misbruik te voorkomen.',
        '**Aankopen en geplande vragen.** Als je "Plant een vraag" koopt, bewaren we de vraag die je schreef: de tekst, het juiste antwoord, de eenheid, de categorie, en eventueel je uitleg en bron. Van Apple krijgen we een transactie-ID, het product, de status en het moment van aankoop. Bij de aankoop stuurt de app een interne code mee, zodat we de betaling aan jouw vraag kunnen koppelen. Je betaalgegevens zien wij nooit; die blijven bij Apple. Vraag je via Apple je geld terug, dan horen we dat van Apple en halen we je vraag uit de ronde als hij nog niet gespeeld is.',
        '**Technische gegevens.** Zoals elke online dienst verwerken onze servers technische gegevens zoals je IP-adres, het type apparaat en het tijdstip van een verzoek, om de app te laten werken en te beveiligen. We gebruiken **geen** advertentienetwerken, geen trackers en geen analytics- of crashrapportagediensten van derden.',
      ],
    },
    {
      id: 'waarom',
      title: 'Waarom we dat doen en op welke grond',
      blocks: [
        {
          table: {
            head: ['Doel', 'Welke gegevens', 'Grondslag (AVG)'],
            rows: [
              ['Je account aanmaken, inloggen en beveiligen', 'Account, technische gegevens', 'Uitvoering van de overeenkomst'],
              ['Het spel laten werken: vragen, antwoorden, punten, rankings, duels en groepen', 'Profiel, spelgegevens, vrienden en groepen', 'Uitvoering van de overeenkomst'],
              ['Chatten, foto\'s en stories delen met je vrienden', 'Berichten en content', 'Uitvoering van de overeenkomst'],
              ['Vrienden vinden via je contacten', 'Gehashte e-mailadressen uit je contacten', 'Toestemming (die je in de app geeft en altijd kunt intrekken)'],
              ['Aankopen controleren en verwerken, ook terugbetalingen', 'Aankoopgegevens', 'Uitvoering van de overeenkomst en wettelijke plicht (fiscale bewaarplicht)'],
              ['Misbruik, spam en fraude voorkomen', 'Technische gegevens, logboek van contactmatches, blokkeringen', 'Gerechtvaardigd belang: een veilige app voor iedereen'],
              ['Meldingen sturen over je spel (zodra beschikbaar)', 'Apparaattoken, voorkeuren', 'Toestemming via de meldingsvraag van je telefoon'],
              ['Vragen en meldingen beantwoorden die je ons stuurt', 'Je e-mail en wat je ons schrijft', 'Gerechtvaardigd belang'],
            ],
          },
        },
        'We gebruiken je gegevens niet voor advertenties, we verkopen ze niet en we maken geen profielen om je gedrag te voorspellen. Er vindt geen geautomatiseerde besluitvorming plaats die rechtsgevolgen voor je heeft. De automatische punten en rankings in het spel zijn alleen de spelregels.',
      ],
    },
    {
      id: 'wie-ziet-wat',
      title: 'Wie ziet wat in de app',
      blocks: [
        {
          list: [
            '**Iedereen met een Circa-account** kan je gebruikersnaam, weergavenaam, profielfoto en ranking zien, bijvoorbeeld als je tegen iemand speelt in een live duel. Profielfoto\'s worden opgeslagen via een openbare link die alleen met het juiste adres te openen is.',
            '**Zoeken op gebruikersnaam en gevonden worden via contacten** staat standaard aan. Je kunt het allebei uitzetten in je instellingen.',
            '**Je vrienden en groepsleden** zien je antwoorden en resultaten in de spellen die je samen speelt. Antwoorden van anderen zie je pas als je zelf hebt geantwoord of als de ronde voorbij is.',
            '**De vraag van vandaag**: je vrienden zien je antwoord pas als zij zelf hebben geantwoord of als de dag voorbij is. Als je heel goed scoort (bijvoorbeeld precies goed, of beter dan 90% van de spelers), kan Circa je resultaat automatisch als story aan je vrienden laten zien.',
            '**Berichten, chatfoto\'s, groepsfoto\'s en stories** zijn alleen zichtbaar voor de leden van dat gesprek of die groep, of voor je vrienden (stories, 24 uur lang).',
            '**Een vraag die je zelf plant** ziet de groep pas als hij gespeeld wordt; wie hem heeft geplant zien ze pas na afloop van de ronde.',
          ],
        },
        'Soms speel je in een duel tegen een computergestuurde tegenstander, als er niet meteen een echte speler beschikbaar is. Die tegenstander krijgt geen gegevens van je, behalve wat nodig is om het potje te spelen.',
      ],
    },
    {
      id: 'delen',
      title: 'Met wie we gegevens delen',
      blocks: [
        'We delen je gegevens alleen met partijen die we nodig hebben om Circa te laten werken. Met partijen die namens ons gegevens verwerken hebben we afspraken gemaakt over beveiliging en geheimhouding (een verwerkersovereenkomst).',
        {
          list: [
            '**Supabase** (database, login, opslag van bestanden en servercode). Onze database draait in een datacenter in **Ierland (EU)**. Supabase is een Amerikaans bedrijf; voor eventuele toegang vanuit de VS gelden de standaardcontractbepalingen van de Europese Commissie.',
            '**Apple**, als je Sign in with Apple gebruikt, iets koopt via de App Store of (zodra beschikbaar) meldingen ontvangt. Apple is daarvoor zelf verantwoordelijk; zie de privacyverklaring van Apple. Kaarten in de app worden getoond met Apple Kaarten.',
            '**Google en Meta (Facebook)**, alleen als je ervoor kiest om daarmee in te loggen of vrienden te vinden, zodra die opties beschikbaar zijn. Ook op Android, zodra die versie er is, verlopen aankopen en meldingen via Google.',
            '**GIPHY**, zodra GIF\'s in de chat beschikbaar zijn. Je zoekterm sturen wij namens jou naar GIPHY, zonder je naam of account. Als je GIF\'s bekijkt, laadt je telefoon de afbeelding rechtstreeks bij GIPHY, waardoor GIPHY je IP-adres ziet. GIPHY zit in de VS.',
            '**Vercel** host deze website en ziet daarvoor technische gegevens zoals je IP-adres.',
          ],
        },
        'Buiten deze partijen delen we je gegevens alleen als de wet ons dat verplicht, bijvoorbeeld op een rechtmatig verzoek van de politie of een toezichthouder. Gaan gegevens naar een land buiten de Europese Economische Ruimte, dan zorgen we voor passende waarborgen, zoals het EU-VS Data Privacy Framework of de standaardcontractbepalingen van de Europese Commissie.',
      ],
    },
    {
      id: 'bewaren',
      title: 'Hoe lang we gegevens bewaren',
      blocks: [
        {
          list: [
            '**Zolang je account bestaat** bewaren we je account-, profiel-, spel- en vriendengegevens, want die heb je nodig om te spelen.',
            '**Stories** zijn 24 uur zichtbaar. De bestanden verwijderen we uiterlijk 30 dagen daarna.',
            '**Het logboek van contactmatches** (alleen aantallen en tijdstippen) bewaren we maximaal 30 dagen.',
            '**Aankoopgegevens** bewaren we 7 jaar, omdat de fiscale wet dat verplicht.',
            '**E-mails aan ons** bewaren we zolang dat nodig is om je te helpen, en maximaal 2 jaar.',
          ],
        },
        '**Als je je account verwijdert** (in de app, of door ons te mailen) gebeurt dit:',
        {
          list: [
            'Je login, e-mailadres, profielfoto, vriendschappen, verzoeken, voorkeuren, gekoppelde accounts en contactgegevens worden direct verwijderd.',
            'Je profiel wordt anoniem: je naam wordt "Verwijderde speler" en je gebruikersnaam een willekeurige code. Je bent niet meer te vinden.',
            'Berichten die je in groepen of gesprekken hebt gestuurd blijven zichtbaar voor de andere leden, maar zonder je naam. Zo blijft hun gesprek begrijpelijk. Wil je dat bepaalde berichten of foto\'s ook verdwijnen? Mail ons, dan verwijderen we ze.',
            'Foto\'s die je in chats, stories of als groepsfoto hebt geplaatst, verwijderen we binnen 30 dagen.',
            'Spelresultaten blijven alleen nog anoniem bestaan, zodat uitslagen en rankings van anderen kloppen. Ze zijn dan niet meer aan jou te koppelen.',
            'Een geplande vraag die al gespeeld is, blijft zonder je naam in de geschiedenis van de groep. Een vraag die nog niet gespeeld is, verwijderen we.',
            'Aankoopgegevens bewaren we nog tot het einde van de fiscale bewaartermijn.',
          ],
        },
      ],
    },
    {
      id: 'kinderen',
      title: 'Kinderen en jongeren',
      blocks: [
        'Circa is voor iedereen vanaf **13 jaar**. Ben je 13, 14 of 15? Dan mag je Circa alleen gebruiken als je ouder of voogd daar toestemming voor geeft. Ouders en voogden kunnen ons altijd mailen op {email} om gegevens van hun kind in te zien of te laten verwijderen.',
        'Merken we dat iemand jonger dan 13 een account heeft, of dat iemand onder de 16 geen toestemming heeft, dan verwijderen we dat account.',
      ],
    },
    {
      id: 'beveiliging',
      title: 'Beveiliging',
      blocks: [
        'Alle verbindingen tussen de app en onze servers zijn versleuteld (HTTPS). Wachtwoorden slaan we alleen versleuteld op. In de database bepalen strenge toegangsregels wie welke gegevens mag zien: alleen jijzelf, je vrienden of de leden van een groep, afhankelijk van het soort gegeven. Chatfoto\'s, groepsfoto\'s en stories staan in afgeschermde opslag en zijn alleen via tijdelijke links te openen.',
        'Gaat er toch iets mis met je gegevens (een datalek), dan melden we dat binnen 72 uur bij de Autoriteit Persoonsgegevens als dat verplicht is, en laten we het jou weten als het risico voor je groot is.',
      ],
    },
    {
      id: 'rechten',
      title: 'Je rechten',
      blocks: [
        'Je hebt het recht om je gegevens in te zien, te laten verbeteren of te laten verwijderen. Je kunt bezwaar maken tegen verwerking op basis van ons gerechtvaardigd belang, de verwerking laten beperken, en je gegevens in een gangbaar bestandsformaat opvragen (dataportabiliteit). Toestemming die je hebt gegeven, zoals voor je contacten of meldingen, kun je altijd intrekken in de app of in de instellingen van je telefoon.',
        'Veel kun je zelf in de app: je naam en foto aanpassen, vindbaarheid uitzetten, iemand blokkeren en je account verwijderen. Hoe dat precies werkt, lees je op [Account verwijderen](./verwijderen.html). Voor de rest mail je naar **{email}**. We reageren binnen een maand. Om te voorkomen dat iemand anders jouw gegevens opvraagt, vragen we je soms te bevestigen dat het account echt van jou is.',
        'Ben je niet tevreden over hoe we met je gegevens omgaan? Laat het ons eerst weten, dan lossen we het samen op. Je mag ook altijd een klacht indienen bij de [Autoriteit Persoonsgegevens](https://www.autoriteitpersoonsgegevens.nl).',
      ],
    },
    {
      id: 'website',
      title: 'Deze website',
      blocks: [
        'Op {domain} gebruiken we **geen cookies** en geen trackers. De site onthoudt alleen je gekozen taal en licht of donker thema, en dat staat in de opslag van je eigen browser. Dat verlaat je apparaat niet. Lettertypen en afbeeldingen komen van onze eigen server, niet van Google of andere partijen. Onze hostingpartij Vercel verwerkt technische gegevens zoals je IP-adres om de site te tonen en te beveiligen.',
      ],
    },
    {
      id: 'wijzigingen',
      title: 'Wijzigingen',
      blocks: [
        'Circa groeit, en deze verklaring groeit mee. Bovenaan zie je wanneer hij voor het laatst is bijgewerkt. Veranderen we iets belangrijks, bijvoorbeeld omdat we een nieuwe partij inschakelen of je gegevens voor een nieuw doel willen gebruiken, dan laten we je dat vooraf in de app weten. Waar de wet dat vraagt, vragen we eerst je toestemming.',
      ],
    },
  ],
}
