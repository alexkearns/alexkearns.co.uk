import { getSiteUrl, getUrlForRoute } from '@/lib/url'
import { ArticleLayout } from '@/components/ArticleLayout'

export default async function Article({ params }) {
  return <div></div>
  // const { slug } = params
  // const { article } = await getData(slug)

  // return <ArticleLayout article={article} />
}

export async function generateStaticParams() {
  const articles = []

  return articles.map((article) => ({
    slug: article.slug,
  }))
}

export async function generateMetadata({ params }) {
  const article = {}
  return {
    title: `${article.frontmatter.title} - Alex Kearns`,
    description: article.frontmatter.description,
    openGraph: {
      title: article.frontmatter.title,
      description: article.frontmatter.description,
      images: [
        `${getSiteUrl().siteUrl}/api/og?title=${
          article.frontmatter.title
        }&date=${article.frontmatter.date}`,
      ],
      url: getUrlForRoute(`articles/${params.slug}`),
    },
  }
}
