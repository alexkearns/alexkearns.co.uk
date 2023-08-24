import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import { getSiteUrl, getUrlForRoute } from '@/lib/url'
import { compareDesc, format, parseISO } from 'date-fns'
import { allArticles } from 'contentlayer/generated'

function Article({ article }) {
  return (
    <article className="md:grid md:grid-cols-4 md:items-baseline">
      <Card className="md:col-span-3">
        <Card.Title href={article.url}>{article.title}</Card.Title>
        <Card.Eyebrow
          as="time"
          dateTime={article.date}
          className="md:hidden"
          decorate
        >
          {format(parseISO(article.date), 'LLLL d, yyyy')}
        </Card.Eyebrow>
        <Card.Description>{article.description}</Card.Description>
        <Card.Cta>Read article</Card.Cta>
      </Card>
      <Card.Eyebrow
        as="time"
        dateTime={article.date}
        className="mt-1 hidden md:block"
      >
        {format(parseISO(article.date), 'LLLL d, yyyy')}
      </Card.Eyebrow>
    </article>
  )
}

const description =
  'My longer-form thoughts primarily focused on AWS, with a sprinkling of other stuff for good measure, collected in chronological order.'

export const metadata = {
  title: 'Articles - Alex Kearns',
  description,
  openGraph: {
    title: 'Articles',
    description,
    images: [`${getSiteUrl().siteUrl}/api/og?title=Articles`],
    url: getUrlForRoute('articles'),
  },
}

export default async function ArticlesIndex() {
  const articles = allArticles
    .sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))
    .slice(0, 4)

  return (
    <SimpleLayout
      title="Writing all about AWS related things, as well as general tech and life stuff."
      intro={description}
    >
      <div className="md:border-l md:border-zinc-700/40 md:pl-6">
        <div className="flex max-w-3xl flex-col space-y-16">
          {articles.map((article) => (
            <Article key={article.slug} article={article} />
          ))}
        </div>
      </div>
    </SimpleLayout>
  )
}
