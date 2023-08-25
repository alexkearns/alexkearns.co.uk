'use client'

import Image from 'next/image'

export default function ArticleImage({ src, props }) {
  const image = require(`../images/articles/${src}`)
  return (
    <div className="relative h-auto w-full">
      <Image src={image} {...props} />
    </div>
  )
}
