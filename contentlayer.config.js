import { defineDocumentType, makeSource } from 'contentlayer/source-files'
import highlight from 'rehype-highlight'
import remarkGfm from 'remark-gfm'
import highlightTerraform from './lib/highlightTerraform'

export const Article = defineDocumentType(() => ({
  name: 'Article',
  filePathPattern: `./articles/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    author: { type: 'string', required: true },
    description: { type: 'string', required: true },
    date: { type: 'date', required: true },
  },
  computedFields: {
    slugFlattened: {
      type: 'string',
      resolve: (article) =>
        article._raw.flattenedPath.replace(/^articles\//, ''),
    },
    slug: {
      type: 'string',
      resolve: (article) =>
        article._raw.flattenedPath.replace(/^articles\//, '').split('/'),
    },
    url: {
      type: 'string',
      resolve: (article) => `/${article._raw.flattenedPath}`,
    },
  },
}))

export default makeSource({
  contentDirPath: './content',
  documentTypes: [Article],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [[highlight, { languages: { tf: highlightTerraform } }]],
  },
})
