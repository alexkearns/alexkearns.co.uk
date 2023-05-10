
import { getAllArticles, getArticleBySlug } from '@/lib/getArticles'
import { getUrlInfo } from '@/lib/url'
import { ArticleLayout } from '@/components/ArticleLayout'

export default async function ArticlesIndex({ params }) {
  const { slug } = params
  const { article } = await getData(slug)

  return <ArticleLayout article={article} />
}

async function getData(slug) {
  return {
    article: await getArticleBySlug(slug),
  }
}

export async function generateStaticParams() {
  const articles = await getAllArticles();
 
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { article } = await getData(params.slug)
  return {
    title: `${article.frontmatter.title} - Alex Kearns`,
    description: article.frontmatter.description,
    openGraph: {
      title: article.frontmatter.title,
      description: article.frontmatter.description,
      images: [`${getUrlInfo().siteUrl}/api/og?title=${article.frontmatter.title}&date=${article.frontmatter.date}`]
    }
  }
}