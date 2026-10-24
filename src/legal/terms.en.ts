import type { LegalDoc } from './types'

export const termsEn: LegalDoc = {
  title: 'Terms of use',
  lead:
    'These terms apply when you use the Circa app or {domain}. By creating an account you agree to them. We kept them as short and clear as we could. Please also read our [privacy policy](./privacy.html).',
  sections: [
    {
      id: 'wie',
      title: 'Who we are',
      blocks: [
        'Circa is offered by **{tradeName}**, a sole proprietorship of {owner}.',
        { list: ['Address: {address}, the Netherlands', 'Chamber of Commerce (KvK) number: {kvk}', 'VAT number: {vat}', 'Email: {email}'] },
        'In these terms, "we" and "us" means {tradeName}, and "you" means anyone who uses Circa.',
      ],
    },
    {
      id: 'account',
      title: 'Your account',
      blocks: [
        {
          list: [
            'You must be at least **13 years old** to use Circa. If you are 13, 14 or 15, you need permission from your parent or guardian, who is then also responsible for your use of Circa.',
            "You create one account for yourself and give accurate details. Your account is personal; you may not sell or transfer it.",
            "You are responsible for your login details. If you think someone else is using your account, let us know right away.",
            "Your username and display name may not be offensive, imitate another person or brand, or contain advertising. If they do, we may change them.",
          ],
        },
      ],
    },
    {
      id: 'spel',
      title: 'The game',
      blocks: [
        'Circa is a game where you estimate answers and take on friends or other players. A few things to know:',
        {
          list: [
            'Correct answers come from reliable sources, but we can make mistakes. If you spot one, tell us and we will fix it. Results that should have been different because of it may be corrected.',
            "Points, rankings and streaks are only for the game. They have **no monetary value**, you can't win anything with them, and they can't be transferred or exchanged.",
            'In duels you may sometimes play a **computer-controlled opponent**, when no real player is available right away.',
            'We may change game rules, scoring, questions and features to make the game better or fairer.',
            'Cheating is not allowed, for example with multiple accounts, scripts or by exploiting bugs in the app.',
          ],
        },
      ],
    },
    {
      id: 'gedrag',
      title: 'House rules',
      blocks: [
        "Circa is about having fun with friends. Keep it friendly. In messages, photos, stories, names and questions you write, you may **not**:",
        {
          list: [
            'bully, threaten, intimidate or discriminate against others;',
            'post sexual, violent or hateful content, and certainly nothing inappropriate involving minors;',
            "share other people's personal data or photos without their permission;",
            'spread spam, advertising, scams or illegal content;',
            "infringe copyright or other people's rights;",
            'pretend to be someone else;',
            'try to hack, overload or get around the app or our servers.',
          ],
        },
        'You are responsible for what you post. Things you send privately must follow these rules too.',
      ],
    },
    {
      id: 'content',
      title: 'Your content',
      blocks: [
        'What you post in Circa (messages, photos, stories, questions) stays yours. You only give us the right to store, process and show it to the people it is meant for, for as long as needed to run Circa. This right is free, non-exclusive and worldwide.',
        'A question you plant with "Plant a question" is used for the round in your group (see In-app purchases).',
        "You confirm that you have the right to post what you post, and that it doesn't violate anyone else's rights.",
      ],
    },
    {
      id: 'melden',
      title: 'Reporting and enforcement',
      blocks: [
        "See something that isn't allowed, or is someone being a pain? Block them in the app and email us at **{email}** with what happened and, if possible, a screenshot. We'll look into it as soon as we can.",
        "If content or behaviour breaks these terms or the law, we may remove content, limit features, or suspend or close your account. We'll tell you what we did and why, unless we're not allowed to or can't. Disagree? Email us and we'll take another look.",
      ],
    },
    {
      id: 'aankopen',
      title: 'In-app purchases',
      blocks: [
        'Circa is free to download and play. Some extras can be bought. Right now that is **"Plant a question"**: you write your own question with the correct answer, and it goes into an upcoming round of your group. The price (including VAT) is shown in the App Store before you pay. There are no subscriptions.',
        {
          list: [
            "You pay through Apple's App Store (and later possibly Google Play). That store's terms apply as well. We never see your payment details.",
            "One purchase is good for one planted question in one group. A purchase is personal: you can't transfer it to someone else or another account, and a used purchase can't be restored.",
            'Your question must follow the house rules and have a correct answer. Add a source where you can. We may review a question and, if needed, lightly edit it (a typo, for example) or decline it.',
            'The group only sees your question when it is played. They only see who planted it after the round ends.',
            "A purchase is digital content delivered right away. By confirming the purchase you agree to immediate delivery, and your 14-day right of withdrawal lapses.",
            "Refunds are handled by Apple. If you get a refund, the purchase is cancelled; a planted question that hasn't been played yet is taken out of the round.",
            "If we can't use a planted question because it breaks these terms, you won't receive compensation from us. If the reason is a mistake on our side, we'll make it right.",
          ],
        },
      ],
    },
    {
      id: 'rechten',
      title: 'Our rights',
      blocks: [
        "The app, the website, the design, the questions, the name Circa and the logo belong to us or our licensors. You may use Circa for personal, non-commercial use. You may not copy, modify, resell or build your own version of the app. Some photos belong to third parties and are used under their licence, with attribution where that licence requires it.",
      ],
    },
    {
      id: 'beschikbaarheid',
      title: 'Availability and changes',
      blocks: [
        "We do our best to keep Circa working well, but we can't guarantee the app will never have outages or bugs. Sometimes maintenance is needed. We may add, change or stop features. If we stop Circa as a whole, we'll tell you at least 30 days in advance.",
      ],
    },
    {
      id: 'aansprakelijkheid',
      title: 'Liability',
      blocks: [
        "Circa is a game and is offered as is. We are not liable for damage caused by the app being temporarily unavailable, by mistakes in questions or answers, or by what other users post or do.",
        'If we are liable after all, our liability is limited to the amount you paid for purchases in Circa in the 12 months before, up to a maximum of €100. This limit does not apply in case of intent or gross negligence on our part, nor to rights you always have as a consumer under the law.',
      ],
    },
    {
      id: 'beeindigen',
      title: 'Leaving Circa',
      blocks: [
        'You can stop at any time. Delete your account in the app, or email us. What happens to your data is explained in the [privacy policy](./privacy.html). If you seriously or repeatedly break these terms, we may close your account.',
      ],
    },
    {
      id: 'apple',
      title: 'If you use the iOS app',
      blocks: [
        'These terms are an agreement between you and us, not with Apple. For the iOS app, the following also applies:',
        {
          list: [
            'We, not Apple, are responsible for the app, its maintenance and support, and for handling complaints or claims about the app, including product liability claims, claims about legal or regulatory requirements, consumer protection and intellectual property.',
            "Apple has no obligation to provide maintenance or support. If the app fails to meet a warranty that applies by law, you may ask Apple to refund the purchase price (if any); beyond that Apple has no warranty obligations.",
            "You confirm that you are not located in a country subject to a US government embargo, and are not listed on any US government list of prohibited or restricted parties.",
            'Apple and its subsidiaries are third-party beneficiaries of these terms and may enforce them against you.',
          ],
        },
      ],
    },
    {
      id: 'recht',
      title: 'Changes, governing law and disputes',
      blocks: [
        "We may update these terms. We'll tell you about important changes in the app at least 30 days in advance. If you keep playing after that, the new terms apply. If you don't agree, you can delete your account.",
        "These terms are governed by Dutch law. If you are a consumer living in another EU country, you keep the protection of that country's mandatory rules. Have a complaint? Email us first at {email}; we reply within 14 days and look for a solution together. If that doesn't work, you can go to the competent court.",
        'If part of these terms is invalid, the rest still applies. The Dutch version prevails if a translation differs.',
      ],
    },
  ],
}
