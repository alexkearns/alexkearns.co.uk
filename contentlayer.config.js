import { defineDocumentType, makeSource } from 'contentlayer/source-files'

export const Article = defineDocumentType(() => ({
  name: 'Article',
  filePathPattern: `./articles/**/*.mdx`,
  fields: {
    title: { type: 'string', required: true },
    author: { type: 'string', required: true },
    description: { type: 'string', required: true },
    date: { type: 'date', required: true },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (article) => `/articles/${article._raw.flattenedPath}`,
    },
  },
}))

export default makeSource({
  contentDirPath: './content',
  documentTypes: [Article],
})
