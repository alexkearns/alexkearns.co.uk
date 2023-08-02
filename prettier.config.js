module.exports = {
  singleQuote: true,
  semi: false,
  plugins: [require('prettier-plugin-tailwindcss')],
  overrides: [
    {
      files: '*.mdx',
      options: {
        proseWrap: 'always',
      },
    },
  ],
}
