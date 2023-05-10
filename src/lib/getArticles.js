import { readFileSync, readdirSync} from 'fs'
import * as path from 'path'
import { compileMDX } from "next-mdx-remote/rsc"
import fg from 'fast-glob'
import ArticleImage from '@/components/ArticleImage'

export async function getArticleBySlug(slug) {
  return await getArticleByFilename(`${slug}.mdx`)
}

async function getArticleByFilename(filename) {
  const source = readFileSync(
    path.join(process.cwd(), 'content', 'articles', filename),
    'utf8'
  );

  const slug = filename.replace('.mdx', '')

  const { content, frontmatter } = await compileMDX({
    source, 
    options: { parseFrontmatter: true },
    components: {
      Image: ({src, ...props}) => <ArticleImage slug={slug} image={src} {...props} />
    }
  });
  
  return {
    content,
    frontmatter,
    slug
  };
}

export async function getAllArticles() {
  const articleFilenames = await fg(['*.mdx'], {cwd: path.join('content', 'articles')})
  const articles = await Promise.all(articleFilenames.map(getArticleByFilename))
  return articles.sort((a, z) => new Date(z.frontmatter.date) - new Date(a.frontmatter.date))
}
