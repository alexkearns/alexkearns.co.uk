import { Container } from '@/components/Container'
import { useMDXComponent } from 'next-contentlayer/hooks'
import { format, parseISO } from 'date-fns'
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

export function ArticleLayout({ article }) {
  const date = format(parseISO(article.date), 'LLLL d, yyyy')
  const Content = useMDXComponent(article.body.code)

  return (
    <Container className="mt-16 lg:mt-32">
      <div className="xl:relative">
        <div className="mx-auto max-w-2xl">
          <Link href={'/articles'}>
            <button
              type="button"
              aria-label="Go back to articles"
              className="group mb-8 flex h-10 w-10 items-center justify-center rounded-full border border-zinc-700/50 bg-zinc-800 shadow-md shadow-zinc-800/5 transition hover:border-zinc-700 lg:absolute lg:-left-5 lg:mb-0 lg:-mt-2 xl:-top-1.5 xl:left-0 xl:mt-0"
            >
              <ArrowLeftIcon className="h-4 w-4 stroke-zinc-500 transition group-hover:stroke-zinc-400" />
            </button>
          </Link>
          <article>
            <header className="flex flex-col">
              <h1 className="mt-6 text-4xl font-bold tracking-tight text-zinc-100 sm:text-5xl">
                {article.title}
              </h1>
              <time
                dateTime={date}
                className="order-first flex items-center text-base text-zinc-500"
              >
                <span className="h-4 w-0.5 rounded-full bg-zinc-500" />
                <span className="ml-3">{date}</span>
              </time>
            </header>
            <Prose className="mt-8">
              <Content />
            </Prose>
          </article>
        </div>
      </div>
    </Container>
  )
}
