import { Container } from '@/components/Container'
import { formatDate } from '@/lib/formatDate'
import { Prose } from '@/components/Prose'
import Link from 'next/link'

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
  article
}) {
  let siteUrl = process.env.NEXT_PUBLIC_SITE_URL
  // Checks if it's deployed in Vercel, and not production as we set NEXT_PUBLIC_SITE_URL in production
  if (process.env.NEXT_PUBLIC_VERCEL_ENV && process.env.NEXT_PUBLIC_VERCEL_ENV !== 'production') {
    siteUrl = `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
  }

  return (
    <Container className="mt-16 lg:mt-32">
      <div className="xl:relative">
        <div className="mx-auto max-w-2xl">
          <Link href={"/articles"}>
            <button
              type="button"
              aria-label="Go back to articles"
              className="group mb-8 flex h-10 w-10 items-center justify-center rounded-full shadow-md shadow-zinc-800/5 transition border border-zinc-700/50 bg-zinc-800 hover:border-zinc-700 lg:absolute lg:-left-5 lg:mb-0 lg:-mt-2 xl:-top-1.5 xl:left-0 xl:mt-0"
            >
              <ArrowLeftIcon className="h-4 w-4 transition stroke-zinc-500 group-hover:stroke-zinc-400" />
            </button>
          </Link>
          <article>
            <header className="flex flex-col">
              <h1 className="mt-6 text-4xl font-bold tracking-tight text-zinc-100 sm:text-5xl">
                {article.frontmatter.title}
              </h1>
              <time
                dateTime={article.frontmatter.date}
                className="order-first flex items-center text-base text-zinc-500"
              >
                <span className="h-4 w-0.5 rounded-full bg-zinc-500" />
                <span className="ml-3">{formatDate(article.frontmatter.date)}</span>
              </time>
            </header>
            <Prose className="mt-8">
              { article.content }
            </Prose>
          </article>
        </div>
      </div>
    </Container>
  )
}
