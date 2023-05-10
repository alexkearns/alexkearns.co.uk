"use client"

import Image from "next/image"

export default function ArticleImage({slug, image, ...props}) {
  const importedImage = require(`../images/articles/${slug}/${image}`)
  return (
    <div className='w-full relative'>
      <Image src={importedImage} {...props} />
    </div>
  )
}