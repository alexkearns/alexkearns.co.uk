export function getSiteUrl() {
  let siteUrl = process.env.NEXT_PUBLIC_SITE_URL
  // Checks if it's deployed in Vercel, and not production as we set NEXT_PUBLIC_SITE_URL in production
  if (process.env.NEXT_PUBLIC_VERCEL_ENV && process.env.NEXT_PUBLIC_VERCEL_ENV !== 'production') {
    siteUrl = `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
  }

  const { host } = new URL(siteUrl)

  return {
    siteUrl,
    host
  }
}

export function getUrlForRoute(route="") {
  const { siteUrl } = getSiteUrl()

  return `${siteUrl}/${route}`
}