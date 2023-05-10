import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import { getAllArticles } from '@/lib/getArticles'
import { formatDate } from '@/lib/formatDate'
import { getUrlInfo } from '@/lib/url'

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

const description = "My longer-form thoughts primarily focused on AWS, with a sprinkling of other stuff for good measure, collected in chronological order."

export const metadata = {
  title: 'Articles - Alex Kearns',
  description,
  openGraph: {
    title: "Articles",
    description,
    images: [`${getUrlInfo().siteUrl}/api/og?title=Articles`]
  }
};

export default async function ArticlesIndex() {
  const { articles } = await getData()

  return (
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
  )
}

async function getData() {
  return {
    articles: (await getAllArticles()).map(({ frontmatter, slug }) => { return {slug, ...frontmatter} })
  }
}