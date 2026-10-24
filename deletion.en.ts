import type { LegalDoc } from './types'

export const deletionEn: LegalDoc = {
  title: 'Delete your account and data',
  lead:
    "Want to stop using Circa? You can have your account and data deleted in two ways: yourself in the app, or by emailing us. Both are free, and you don't have to tell us why.",
  sections: [
    {
      id: 'in-de-app',
      title: 'In the app (fastest)',
      blocks: [
        {
          steps: [
            'Open Circa and sign in.',
            'Tap **Profile** at the bottom.',
            'Scroll down and tap **Delete account**, below Sign out.',
            'Confirm with **Delete my account**.',
          ],
        },
        "Your account is gone right away and you're signed out. Note: just deleting the app from your phone isn't enough; your account would still exist.",
      ],
    },
    {
      id: 'via-mail',
      title: 'By email',
      blocks: [
        "Can't sign in anymore, or want your chat messages and photos removed too? Send us an email. Ideally send it from your account's email address, so we can quickly check it's really your account.",
        {
          request: {
            title: 'Send your request to',
            intro: 'Use this text, or write it in your own words:',
            subject: 'Circa account deletion request',
            body:
              "Hi Circa,\n\nPlease delete my account and my data.\n\nUsername: \nEmail address of my account: \nAlso delete my chat messages and photos: yes / no\n\nThanks,\n",
            copy: 'Copy address',
            copied: 'Copied',
            open: 'Open in your mail app',
          },
        },
        "We delete your account within one month, usually much sooner, and email you when it's done. If we can't be sure the account is yours, we'll ask a verification question first.",
      ],
    },
    {
      id: 'wat-verdwijnt',
      title: 'What gets deleted',
      blocks: [
        {
          list: [
            'Deleted right away: your login, email address, profile photo, friends and requests, preferences, linked accounts and contact data.',
            'Your profile becomes anonymous: your name becomes "Deleted player" and your username a random code. Nobody can find you anymore.',
            'Photos you posted in chats, stories or as a group photo are deleted within 30 days.',
            'Messages you sent in groups stay visible to the other members without your name, so their conversation still makes sense. Want those gone too? Say so in your email.',
            "Game results only remain in anonymous form, so other players' results stay correct.",
            'Purchase data has to be kept for 7 years under Dutch tax law.',
          ],
        },
        'All the details are in our [privacy policy](./privacy.html#bewaren).',
      ],
    },
    {
      id: 'apple',
      title: 'Signed in with Apple?',
      blocks: [
        "You can also remove Circa's access to your Apple ID: open your iPhone's Settings, tap your name and look for Circa under **Sign in with Apple**. That only stops the link with Apple; delete your Circa account as described above.",
      ],
    },
    {
      id: 'ouders',
      title: 'For parents and guardians',
      blocks: [
        "Want your child's account deleted? Email us at {email} with your child's username. We may ask you to confirm that you're the parent or guardian.",
      ],
    },
  ],
}
