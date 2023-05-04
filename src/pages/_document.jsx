import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
  let siteUrl = process.env.NEXT_PUBLIC_SITE_URL
  // Checks if it's deployed in Vercel, and not production as we set NEXT_PUBLIC_SITE_URL in production
  if (process.env.NEXT_PUBLIC_VERCEL_ENV && process.env.NEXT_PUBLIC_VERCEL_ENV !== 'production') {
    siteUrl = `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
  }
  
  return (
    <Html className="h-full antialiased" lang="en">
      <Head>
        <link
          rel="alternate"
          type="application/rss+xml"
          href={`${siteUrl}/rss/feed.xml`}
        />
        <link
          rel="alternate"
          type="application/feed+json"
          href={`${siteUrl}/rss/feed.json`}
        />
      </Head>
      <body className="flex h-full flex-col bg-zinc-50 bg-black">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
