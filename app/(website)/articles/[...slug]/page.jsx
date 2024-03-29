import { format, parseISO } from 'date-fns'
import { getSiteUrl, getUrlForRoute } from '@/lib/url'
import { ArticleLayout } from '@/components/ArticleLayout'
import { allArticles } from 'contentlayer/generated'

export default async function Article({ params }) {
  const article = allArticles.find(
    (article) => article.slugFlattened === params.slug.join('/')
  )
  return <ArticleLayout article={article} />
}

export async function generateStaticParams() {
  return allArticles.map((article) => ({
    slug: article.slug,
  }))
}

export async function generateMetadata({ params }) {
  const article = allArticles.find((article) => {
    return article.slugFlattened === params.slug.join('/')
  })
  const date = format(parseISO(article.date), 'LLLL d, yyyy')

  let title = article.title
  if (article.series) {
    title = `${title} (${article.series})`
  }

  return {
    title: `${title} - Alex Kearns`,
    description: article.description,
    openGraph: {
      title: article.title,
      description: article.description,
      images: [`${getSiteUrl().siteUrl}/api/og?title=${title}&date=${date}`],
      url: getUrlForRoute(article.slugFlattened),
    },
  }
}
