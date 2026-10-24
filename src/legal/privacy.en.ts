import type { LegalDoc } from './types'

export const privacyEn: LegalDoc = {
  title: 'Privacy policy',
  lead:
    "Circa is a game for guessing, challenging and beating your friends. To make that work we need some of your data. This policy explains which data, why, who we share it with, how long we keep it and what your rights are. No small print: if anything is wrong or unclear, email us at {email}.",
  sections: [
    {
      id: 'wie',
      title: 'Who is responsible',
      blocks: [
        'Circa is a product of **{tradeName}**, a sole proprietorship of {owner}, located at {address}, the Netherlands, registered with the Dutch Chamber of Commerce (KvK) under number {kvk}. We are the controller of the personal data you provide in the Circa app and on {domain}.',
        "Privacy questions or a request about your data? Email **{email}**. We don't have a data protection officer; an organisation of our size is not required to.",
      ],
    },
    {
      id: 'welke-gegevens',
      title: 'What data we process',
      blocks: [
        '**Account.** Your email address and an encrypted password, or a login through Apple (and, once available, Google or Facebook). With Sign in with Apple you can hide your email address, in which case we only receive a relay address from Apple. When you first sign in with Apple, Apple may share your name with us.',
        "**Profile.** Your username, display name, profile photo (if you choose one), language and settings (such as sound, haptics and notifications). We don't ask for your phone number, date of birth, address or location.",
        '**Game data.** Your answers and guesses, when you gave them, your points, ranking, duels, group rounds and answers to the question of the day. For geography questions you save a point on the map that you pick yourself; it is never your own location.',
        '**Friends and groups.** Who your friends are, friend requests, who you have blocked, which groups you are in, invitations and group photos.',
        "**Messages and content.** Chat messages in groups and private conversations, emoji reactions, photos you send in chats, stories (a photo with a caption), reactions to stories, and questions you write yourself with \"Plant a question\". We also keep track of how far you have read a conversation, so the app can count your unread messages. Others can't see when you read something.",
        "**Contacts (only if you want).** If you let the app look at your contacts, it reads only the **email addresses** in your address book, on your phone. These are turned into a hash (a fixed code) on your phone and sent to our server to check which of your contacts already play Circa. We don't store those hashes. Names, phone numbers and photos from your address book never leave your phone. We only log how many hashes you sent and when, to prevent abuse.",
        '**Purchases and planted questions.** When you buy "Plant a question", we store the question you wrote: the text, the correct answer, the unit, the category, and any explanation and source you added. Apple gives us a transaction ID, the product, the status and the time of purchase. With the purchase the app sends an internal code so we can link the payment to your question. We never see your payment details; they stay with Apple. If you get a refund through Apple, Apple tells us and we take your question out of the round if it hasn\'t been played yet.',
        '**Technical data.** Like any online service, our servers process technical data such as your IP address, device type and the time of a request, to run and secure the app. We use **no** ad networks, no trackers and no third-party analytics or crash reporting services.',
      ],
    },
    {
      id: 'waarom',
      title: 'Why we do this and on what legal basis',
      blocks: [
        {
          table: {
            head: ['Purpose', 'Data', 'Legal basis (GDPR)'],
            rows: [
              ['Creating your account, signing in and keeping it secure', 'Account, technical data', 'Performance of the contract'],
              ['Running the game: questions, answers, points, rankings, duels and groups', 'Profile, game data, friends and groups', 'Performance of the contract'],
              ['Chatting and sharing photos and stories with your friends', 'Messages and content', 'Performance of the contract'],
              ['Finding friends through your contacts', 'Hashed email addresses from your contacts', 'Consent (given in the app, withdrawable at any time)'],
              ['Checking and processing purchases, including refunds', 'Purchase data', 'Performance of the contract and legal obligation (tax record keeping)'],
              ['Preventing abuse, spam and fraud', 'Technical data, contact-match log, blocks', 'Legitimate interest: a safe app for everyone'],
              ['Sending notifications about your games (once available)', 'Device token, preferences', "Consent through your phone's notification prompt"],
              ['Answering questions and reports you send us', 'Your email and what you write', 'Legitimate interest'],
            ],
          },
        },
        "We don't use your data for advertising, we don't sell it, and we don't build profiles to predict your behaviour. There is no automated decision-making with legal effects for you. The automatic points and rankings in the game are just the rules of the game.",
      ],
    },
    {
      id: 'wie-ziet-wat',
      title: 'Who sees what in the app',
      blocks: [
        {
          list: [
            '**Anyone with a Circa account** can see your username, display name, profile photo and ranking, for example when you play someone in a live duel. Profile photos are stored behind a public link that only opens with the exact address.',
            '**Search by username and being found through contacts** are on by default. You can turn both off in your settings.',
            "**Your friends and group members** see your answers and results in the games you play together. You only see other players' answers after you have answered yourself or the round has ended.",
            '**Question of the day**: your friends only see your answer after they have answered or the day has ended. If you score really well (for example exactly right, or better than 90% of players), Circa may automatically show your result to your friends as a story.',
            '**Messages, chat photos, group photos and stories** are only visible to the members of that conversation or group, or to your friends (stories, for 24 hours).',
            "**A question you plant** is only seen by the group when it is played; they only see who planted it after the round ends.",
          ],
        },
        "Sometimes in a duel you play a computer-controlled opponent, when no real player is available right away. That opponent receives no data about you beyond what is needed to play the match.",
      ],
    },
    {
      id: 'delen',
      title: 'Who we share data with',
      blocks: [
        'We only share your data with parties we need to run Circa. Parties that process data on our behalf are bound by an agreement on security and confidentiality (a data processing agreement).',
        {
          list: [
            "**Supabase** (database, login, file storage and server code). Our database runs in a data centre in **Ireland (EU)**. Supabase is a US company; any access from the US is covered by the European Commission's standard contractual clauses.",
            "**Apple**, when you use Sign in with Apple, buy something on the App Store or (once available) receive notifications. Apple is responsible for this itself; see Apple's privacy policy. Maps in the app are shown with Apple Maps.",
            '**Google and Meta (Facebook)**, only if you choose to sign in or find friends with them, once those options are available. On Android too, once that version exists, purchases and notifications run through Google.',
            '**GIPHY**, once GIFs are available in chat. We send your search term to GIPHY on your behalf, without your name or account. When you view GIFs, your phone loads the image directly from GIPHY, so GIPHY sees your IP address. GIPHY is based in the US.',
            '**Vercel** hosts this website and sees technical data such as your IP address to do so.',
          ],
        },
        "Beyond these parties we only share your data when the law requires it, for example on a lawful request from the police or a regulator. If data goes to a country outside the European Economic Area, we make sure appropriate safeguards are in place, such as the EU-US Data Privacy Framework or the European Commission's standard contractual clauses.",
      ],
    },
    {
      id: 'bewaren',
      title: 'How long we keep data',
      blocks: [
        {
          list: [
            '**As long as your account exists** we keep your account, profile, game and friends data, because you need it to play.',
            '**Stories** are visible for 24 hours. We delete the files no later than 30 days after that.',
            '**The contact-match log** (counts and times only) is kept for up to 30 days.',
            '**Purchase data** is kept for 7 years, because Dutch tax law requires it.',
            '**Emails to us** are kept as long as needed to help you, and for no more than 2 years.',
          ],
        },
        '**If you delete your account** (in the app, or by emailing us), this happens:',
        {
          list: [
            'Your login, email address, profile photo, friendships, requests, preferences, linked accounts and contact data are deleted immediately.',
            'Your profile becomes anonymous: your name becomes "Deleted player" and your username a random code. Nobody can find you anymore.',
            "Messages you sent in groups or conversations stay visible to the other members, but without your name, so their conversation still makes sense. Want specific messages or photos removed too? Email us and we'll delete them.",
            'Photos you posted in chats, stories or as a group photo are deleted within 30 days.',
            "Game results only remain in anonymous form, so other players' scores and rankings stay correct. They can no longer be linked to you.",
            'A planted question that has already been played stays in the group\'s history without your name. A question that hasn\'t been played yet is deleted.',
            'Purchase data is kept until the end of the tax retention period.',
          ],
        },
      ],
    },
    {
      id: 'kinderen',
      title: 'Children and teenagers',
      blocks: [
        'Circa is for everyone aged **13 and over**. Are you 13, 14 or 15? Then you may only use Circa with permission from your parent or guardian. Parents and guardians can always email us at {email} to see or delete their child\'s data.',
        "If we find out that someone under 13 has an account, or that someone under 16 doesn't have permission, we delete that account.",
      ],
    },
    {
      id: 'beveiliging',
      title: 'Security',
      blocks: [
        'All connections between the app and our servers are encrypted (HTTPS). Passwords are only stored in encrypted form. In the database, strict access rules decide who can see which data: only you, your friends or the members of a group, depending on the kind of data. Chat photos, group photos and stories are kept in protected storage and can only be opened through temporary links.',
        'If something does go wrong with your data (a data breach), we report it to the Dutch Data Protection Authority within 72 hours where required, and tell you if the risk to you is high.',
      ],
    },
    {
      id: 'rechten',
      title: 'Your rights',
      blocks: [
        "You have the right to access, correct or delete your data. You can object to processing based on our legitimate interest, restrict processing, and ask for your data in a common file format (data portability). Consent you've given, such as for contacts or notifications, can be withdrawn at any time in the app or in your phone's settings.",
        "Much of this you can do yourself in the app: change your name and photo, turn off discoverability, block someone and delete your account. See [Delete your account](./verwijderen.html) for how that works. For everything else, email **{email}**. We reply within one month. To make sure nobody else requests your data, we may ask you to confirm the account is really yours.",
        "Not happy with how we handle your data? Tell us first and we'll sort it out together. You can also always file a complaint with the [Dutch Data Protection Authority (Autoriteit Persoonsgegevens)](https://www.autoriteitpersoonsgegevens.nl) or the data protection authority in your own country.",
      ],
    },
    {
      id: 'website',
      title: 'This website',
      blocks: [
        "On {domain} we use **no cookies** and no trackers. The site only remembers your chosen language and light or dark theme, and that is stored in your own browser. It never leaves your device. Fonts and images come from our own server, not from Google or anyone else. Our host Vercel processes technical data such as your IP address to serve and secure the site.",
      ],
    },
    {
      id: 'wijzigingen',
      title: 'Changes',
      blocks: [
        "Circa is growing, and this policy grows with it. At the top you can see when it was last updated. If we change something important, for example because we bring in a new party or want to use your data for a new purpose, we'll tell you in the app beforehand. Where the law requires it, we'll ask for your consent first.",
      ],
    },
  ],
}
