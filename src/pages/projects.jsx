import Head from 'next/head'
import { useRouter } from 'next/router'

import {
  GitHubIcon,
  GlobeIcon
} from '@/components/Icons'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'

const projects = [
  {
    name: 'DynamoDB Queryable Item History',
    description: 'An example of how to implement an easily queryable DynamoDB item history store using S3, Glue Crawlers and Athena.',
    link: { href: 'https://github.com/alexkearns/aws-dynamodb-item-history', label: 'github.com' },
    logo: GitHubIcon,
  },
  {
    name: 'Implementing S3 to Snowflake via Snowpipe with Terraform',
    description: 'Creates an end-to-end Snowpipe demo with S3 as a source using Terraform as the Infrastructure as Code tool.',
    link: { href: 'https://github.com/alexkearns/snowpipe-terraform-demo', label: 'github.com' },
    logo: GitHubIcon,
  },
  {
    name: 'AWS Subnet Splitter',
    description: 'A web application that simplifies the creation of Infrastructure-as-Code templates for VPCs and Subnets.',
    link: { href: 'https://aws-subnet-splitter.alexkearns.co.uk', label: 'aws-subnet-splitter.alexkearns.co.uk' },
    logo: GlobeIcon,
  }
]

let siteUrl = process.env.NEXT_PUBLIC_SITE_URL
// Checks if it's deployed in Vercel, and not production as we set NEXT_PUBLIC_SITE_URL in production
if (process.env.NEXT_PUBLIC_VERCEL_ENV && process.env.NEXT_PUBLIC_VERCEL_ENV !== 'production') {
  siteUrl = `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
}

const { host } = new URL(siteUrl)

function LinkIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default function Projects() {
  let router = useRouter()
  const description = "Bite-sized pieces of tech goodness that's free to adapt and learn from."

  return (
    <>
      <Head>
        <title>Projects - Alex Kearns</title>
        <meta
          name="description"
          content={description}
        />
        <meta property="og:url" content={`${siteUrl}${router.asPath}`} />
        <meta property="og:type" content="webpage" />
        <meta property="og:title" content="Projects" />
        <meta property="og:description" content={description} />
        <meta
          property="og:image"
          content={`${siteUrl}/api/og?title=Projects`}
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:domain" content={host} />
        <meta name="twitter:url" content={`${siteUrl}${router.asPath}`} />
        <meta name="twitter:title" content="Projects" />
        <meta name="twitter:description" content={description} />
        <meta
          property="twitter:image"
          content={`${siteUrl}/api/og?title=Projects`}
        />
      </Head>
      <SimpleLayout
        title="Bite-sized pieces of tech goodness that's free to adapt and learn from."
        intro="Just like many people that write software, I've worked on numerous little side projects that have never seen the light of day - these are the ones that I've deemed fit for human consumption!"
      >
        <ul
          role="list"
          className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map(({name, logo: Logo, description, link}) => (
            <Card as="li" key={name}>
              <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-500 dark:ring-0">
                <Logo />
              </div>
              <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                <Card.Link href={link.href}>{name}</Card.Link>
              </h2>
              <Card.Description>{description}</Card.Description>
              <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
                <LinkIcon className="h-6 w-6 flex-none" />
                <span className="ml-2">{link.label}</span>
              </p>
            </Card>
          ))}
        </ul>
      </SimpleLayout>
    </>
  )
}
