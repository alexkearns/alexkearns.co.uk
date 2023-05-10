
import { getAllArticles, getArticleBySlug } from '@/lib/getArticles'
import { ArticleLayout } from '@/components/ArticleLayout'

let siteUrl = process.env.NEXT_PUBLIC_SITE_URL
// Checks if it's deployed in Vercel, and not production as we set NEXT_PUBLIC_SITE_URL in production
if (process.env.NEXT_PUBLIC_VERCEL_ENV && process.env.NEXT_PUBLIC_VERCEL_ENV !== 'production') {
  siteUrl = `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
}

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
    title: article.frontmatter.title,
    description: article.frontmatter.description
  }
}