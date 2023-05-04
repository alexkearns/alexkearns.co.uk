import Head from 'next/head'
import { useRouter } from 'next/router'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import { getAllArticles } from '@/lib/getAllArticles'
import { formatDate } from '@/lib/formatDate'

let siteUrl = process.env.NEXT_PUBLIC_SITE_URL
// Checks if it's deployed in Vercel, and not production as we set NEXT_PUBLIC_SITE_URL in production
if (process.env.NEXT_PUBLIC_VERCEL_ENV && process.env.NEXT_PUBLIC_VERCEL_ENV !== 'production') {
  siteUrl = `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
}

const { host } = new URL(siteUrl)

function Article({ article }) {
  return (
    <article className="md:grid md:grid-cols-4 md:items-baseline">
      <Card className="md:col-span-3">
        <Card.Title href={`/articles/${article.slug}`}>
          {article.title}
        </Card.Title>
        <Card.Eyebrow
          as="time"
          dateTime={article.date}
          className="md:hidden"
          decorate
        >
          {formatDate(article.date)}
        </Card.Eyebrow>
        <Card.Description>{article.description}</Card.Description>
        <Card.Cta>Read article</Card.Cta>
      </Card>
      <Card.Eyebrow
        as="time"
        dateTime={article.date}
        className="mt-1 hidden md:block"
      >
        {formatDate(article.date)}
      </Card.Eyebrow>
    </article>
  )
}

export default function ArticlesIndex({ articles }) {
  let router = useRouter()
  const description = "My longer-form thoughts primarily focused on AWS, with a sprinkling of other stuff for good measure, collected in chronological order."
  return (
    <>
      <Head>
        <title>Articles - Alex Kearns</title>
        <meta
          name="description"
          content={description}
        />
        <meta property="og:url" content={`${siteUrl}${router.asPath}`} />
        <meta property="og:type" content="webpage" />
        <meta property="og:title" content="Articles" />
        <meta property="og:description" content={description} />
        <meta
          property="og:image"
          content={`${siteUrl}/api/og?title=Articles`}
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:domain" content={host} />
        <meta name="twitter:url" content={`${siteUrl}${router.asPath}`} />
        <meta name="twitter:title" content="Articles" />
        <meta name="twitter:description" content={description} />
        <meta
          property="twitter:image"
          content={`${siteUrl}/api/og?title=Articles`}
        />

      </Head>
      <SimpleLayout
        title="Writing all about AWS related things, as well as general tech and life stuff."
        intro={description}
      >
        <div className="md:border-l md:pl-6 md:border-zinc-700/40">
          <div className="flex max-w-3xl flex-col space-y-16">
            {articles.map((article) => (
              <Article key={article.slug} article={article} />
            ))}
          </div>
        </div>
      </SimpleLayout>
    </>
  )
}

export async function getStaticProps() {
  return {
    props: {
      articles: (await getAllArticles()).map(({ component, ...meta }) => meta),
    },
  }
}
