import { ImageResponse } from '@vercel/og'

export const config = {
  runtime: 'edge',
}

// Make sure the font exists in the specified path:
const interMediumFont = fetch(
  new URL('../../assets/InterMedium.woff', import.meta.url)
).then((res) => res.arrayBuffer())

export default async function handler(req) {
  const interMediumFontData = await interMediumFont

  try {
    const { protocol, hostname, port, searchParams } = new URL(req.url)
    const siteUrl = `${protocol}//${hostname}${port ? `:${port}` : ''}`

    console.log(siteUrl)

    // ?title=<title>
    const hasTitle = searchParams.has('title')
    const title = hasTitle
      ? searchParams.get('title')?.slice(0, 100)
      : 'Alex Kearns'

    // ?date=<date>
    const hasDate = searchParams.has('date')
    const date = hasDate ? searchParams.get('date') : null

    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            fontFamily: '"Inter"',
            justifyContent: 'space-between',
          }}
        >
          <img
            alt="Gradient Background"
            height="100%"
            src={`${siteUrl}/images/ogGradient.jpg`}
            width="100%"
            style={{
              zIndex: '-100',
              position: 'absolute',
              top: 0,
              left: 0,
            }}
          />
          <img
            alt="Profile Picture"
            height="120px"
            src={`${siteUrl}/images/avatar.jpg`}
            width="120px"
            style={{
              zIndex: '-50',
              marginTop: '80px',
              marginLeft: '80px',
              borderRadius: '100%',
              border: '4px solid #FFF',
            }}
          />
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              padding: '80px',
            }}
          >
            <div
              style={{
                fontWeight: 500,
                color: 'white',
                fontSize: 60,
                letterSpacing: '-0.025em',
                lineHeight: 1.4,
                whiteSpace: 'pre-wrap',
                zIndex: '100',
              }}
            >
              {title}
            </div>
            {hasDate && (
              <div
                style={{
                  fontWeight: 500,
                  color: '#bfbfbf',
                  fontSize: 35,
                  letterSpacing: '-0.025em',
                  marginTop: '5px',
                  lineHeight: 1.4,
                  whiteSpace: 'pre-wrap',
                  zIndex: '100',
                }}
              >
                {date}
              </div>
            )}
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
        fonts: [
          {
            name: 'Inter',
            data: interMediumFontData,
            weight: 500,
          },
        ],
      }
    )
  } catch (e) {
    console.log(`${e.message}`)
    return new Response(`Failed to generate the image`, {
      status: 500,
    })
  }
}
