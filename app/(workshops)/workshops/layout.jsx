import Fathom from '@/components/Fathom'

import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

import '@/styles/tailwind.css'
import 'focus-visible'

export default function WorkshopLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}) {
  let siteUrl = process.env.NEXT_PUBLIC_SITE_URL
  // Checks if it's deployed in Vercel, and not production as we set NEXT_PUBLIC_SITE_URL in production
  if (
    process.env.NEXT_PUBLIC_VERCEL_ENV &&
    process.env.NEXT_PUBLIC_VERCEL_ENV !== 'production'
  ) {
    siteUrl = `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
  }

  return (
    <html className="h-full antialiased" lang="en">
      {children}
      {/* <body className="flex h-full flex-col bg-zinc-50 bg-black">
        <Fathom />
        <div className="fixed inset-0 flex justify-center sm:px-8">
          <div className="flex w-full max-w-7xl lg:px-8">
            <div className="w-full bg-zinc-900 ring-1 ring-zinc-300/20" />
          </div>
        </div>
        <div className="relative">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body> */}
    </html>
  )
}
