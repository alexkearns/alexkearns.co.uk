import Head from 'next/head'
import { useRouter } from 'next/router'

import { Container } from '@/components/Container'
import { formatDate } from '@/lib/formatDate'
import { Prose } from '@/components/Prose'

function ArrowLeftIcon(props) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M7.25 11.25 3.75 8m0 0 3.5-3.25M3.75 8h8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function ArticleLayout({
  children,
  meta,
  isRssFeed = false,
  previousPathname,
}) {
  let router = useRouter()

  if (isRssFeed) {
    return children
  }

  let siteUrl = process.env.NEXT_PUBLIC_SITE_URL
  // Checks if it's deployed in Vercel, and not production as we set NEXT_PUBLIC_SITE_URL in production
  if (process.env.NEXT_PUBLIC_VERCEL_ENV && process.env.NEXT_PUBLIC_VERCEL_ENV !== 'production') {
    siteUrl = `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
  }

  const { host } = new URL(siteUrl)

  return (
    <>
      <Head>
        <title>{`${meta.title} - Alex Kearns`}</title>
        <meta name="description" content={meta.description} />

        <meta property="og:url" content={`${siteUrl}${router.asPath}`} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta
          property="og:image"
          content={`${siteUrl}/api/og?title=${meta.title}&date=${formatDate(meta.date)}`}
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:domain" content={host} />
        <meta name="twitter:url" content={`${siteUrl}${router.asPath}`} />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta
          name="twitter:image"
          content={`${siteUrl}/api/og?title=${meta.title}&date=${formatDate(meta.date)}`}
        />
        
      </Head>
      <Container className="mt-16 lg:mt-32">
        <div className="xl:relative">
          <div className="mx-auto max-w-2xl">
            {previousPathname && (
              <button
                type="button"
                onClick={() => router.back()}
                aria-label="Go back to articles"
                className="group mb-8 flex h-10 w-10 items-center justify-center rounded-full shadow-md shadow-zinc-800/5 transition border border-zinc-700/50 bg-zinc-800 hover:border-zinc-700 lg:absolute lg:-left-5 lg:mb-0 lg:-mt-2 xl:-top-1.5 xl:left-0 xl:mt-0"
              >
                <ArrowLeftIcon className="h-4 w-4 transition stroke-zinc-500 group-hover:stroke-zinc-400" />
              </button>
            )}
            <article>
              <header className="flex flex-col">
                <h1 className="mt-6 text-4xl font-bold tracking-tight text-zinc-100 sm:text-5xl">
                  {meta.title}
                </h1>
                <time
                  dateTime={meta.date}
                  className="order-first flex items-center text-base text-zinc-500"
                >
                  <span className="h-4 w-0.5 rounded-full bg-zinc-500" />
                  <span className="ml-3">{formatDate(meta.date)}</span>
                </time>
              </header>
              <Prose className="mt-8">{children}</Prose>
            </article>
          </div>
        </div>
      </Container>
    </>
  )
}
