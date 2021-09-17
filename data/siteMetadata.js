const siteMetadata = {
  title: 'Alex Kearns',
  author: 'Alex Kearns',
  headerTitle: 'Alex Kearns',
  description: 'My ramblings, mostly about using serverless in AWS',
  language: 'en-gb',
  siteUrl: 'https://www.alexkearns.co.uk',
  siteRepo: 'https://github.com/alexkearns/personal-website',
  siteLogo: '/static/images/logo.png',
  image: '/static/images/avatar.png',
  socialBanner: '/static/images/twitter-card.png',
  email: 'alex@alexkearns.co.uk',
  github: 'https://github.com/alexkearns',
  twitter: 'https://twitter.com/alex_kearns',
  locale: 'en-GB',
  analytics: {
    // supports plausible, simpleAnalytics or googleAnalytics
    plausibleDataDomain: '', // e.g. tailwind-nextjs-starter-blog.vercel.app
    simpleAnalytics: false, // true or false
    googleAnalyticsId: '', // e.g. UA-000000-2 or G-XXXXXXX
  },
  newsletter: {
    // supports mailchimp, buttondown, convertkit
    // Please add your .env file and modify it according to your selection
    provider: '',
  },
}

module.exports = siteMetadata
