import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { getSiteUrl, getUrlForRoute } from '@/lib/url'
import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import {
  TwitterIcon,
  InstagramIcon,
  GitHubIcon,
  LinkedInIcon,
} from '@/components/Icons'
import image1 from '@/images/photos/image-1.jpeg'
import image2 from '@/images/photos/image-2.jpeg'
import image3 from '@/images/photos/image-3.jpeg'
import image4 from '@/images/photos/image-4.jpeg'
import image5 from '@/images/photos/image-5.jpeg'
import logoAws from '@/images/logos/aws.png'
import logoBt from '@/images/logos/bt.png'
import logoUbisend from '@/images/logos/ubisend.png'
import logoInawisdom from '@/images/logos/inawisdom.jpg'
import logoUbertas from '@/images/logos/ubertas.jpg'
import { allArticles } from 'contentlayer/generated'
import { compareDesc, format, parseISO } from 'date-fns'

function MailIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100/10 stroke-zinc-500"
      />
      <path
        d="m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6"
        className="stroke-zinc-500"
      />
    </svg>
  )
}

function BriefcaseIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100/10 stroke-zinc-500"
      />
      <path
        d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
        className="stroke-zinc-500"
      />
    </svg>
  )
}

function ArrowDownIcon(props) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function ArrowTopRightOnSquare(props) {
  return (
    <svg fill="none" viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
      />
    </svg>
  )
}

function Article({ article }) {
  return (
    <Card as="article">
      <Card.Title href={article.url}>{article.title}</Card.Title>
      {article.series && <Card.Tags tags={[article.series]} />}
      <Card.Eyebrow as="time" dateTime={article.date} decorate>
        {format(parseISO(article.date), 'LLLL d, yyyy')}
      </Card.Eyebrow>
      <Card.Description>{article.description}</Card.Description>
      <Card.Cta>Read article</Card.Cta>
    </Card>
  )
}

function SocialLink({ icon: Icon, ...props }) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-400 transition group-hover:fill-zinc-300" />
    </Link>
  )
}

function Newsletter() {
  return (
    <form
      action="/thank-you"
      className="rounded-2xl border border-zinc-700/40 p-6"
    >
      <h2 className="flex text-sm font-semibold text-zinc-100">
        <MailIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Stay up to date</span>
      </h2>
      <p className="mt-2 text-sm text-zinc-400">
        Get notified when I publish something new, and unsubscribe at any time.
      </p>
      <div className="mt-6 flex">
        <input
          type="email"
          placeholder="Email address"
          aria-label="Email address"
          required
          className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-700 bg-zinc-700/[0.15] px-3 py-[calc(theme(spacing.2)-1px)] text-zinc-200 shadow-md shadow-zinc-800/5 placeholder:text-zinc-500 focus:border-teal-400 focus:outline-none focus:ring-4 focus:ring-teal-400/10 sm:text-sm"
        />
        <Button type="submit" className="ml-4 flex-none">
          Join
        </Button>
      </div>
    </form>
  )
}

function Achievements() {
  let achievements = [
    {
      issuer: 'Amazon Web Services',
      title: 'AWS Ambassador',
      logo: logoAws,
      start: '2022',
      end: {
        label: 'Present',
        dateTime: new Date().getFullYear(),
      },
    },
    {
      issuer: 'Amazon Web Services',
      title: 'AWS Community Builder',
      logo: logoAws,
      start: '2022',
      end: {
        label: 'Present',
        dateTime: new Date().getFullYear(),
      },
    },
  ]

  return (
    <div className="rounded-2xl border border-zinc-700/40 p-6">
      <h2 className="flex text-sm font-semibold text-zinc-100">
        <BriefcaseIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Professional Achievements</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {achievements.map((achievement, achievementIndex) => (
          <li key={achievementIndex} className="flex gap-4">
            <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full border border-zinc-700/50 bg-zinc-800 shadow-md shadow-zinc-800/5">
              <Image
                src={achievement.logo}
                alt=""
                className="h-7 w-7 rounded-full"
                unoptimized
              />
            </div>
            <dl className="flex flex-auto flex-wrap gap-x-2">
              <dt className="sr-only">Title</dt>
              <dd className="w-full flex-none text-sm font-medium text-zinc-100">
                {achievement.title}
              </dd>
              <dt className="sr-only">Issuer</dt>
              <dd className="text-xs text-zinc-400">{achievement.issuer}</dd>
              <dt className="sr-only">Date</dt>
              <dd
                className="ml-auto text-xs text-zinc-500"
                aria-label={`${
                  achievement.start.label ?? achievement.start
                } until ${achievement.end.label ?? achievement.end}`}
              >
                <time
                  dateTime={achievement.start.dateTime ?? achievement.start}
                >
                  {achievement.start.label ?? achievement.start}
                </time>{' '}
                <span aria-hidden="true">—</span>{' '}
                <time dateTime={achievement.end.dateTime ?? achievement.end}>
                  {achievement.end.label ?? achievement.end}
                </time>
              </dd>
            </dl>
          </li>
        ))}
      </ol>
      <Button
        target="_blank"
        href="https://www.credly.com/users/alexkearns/badges"
        variant="secondary"
        className="group mt-6 w-full"
      >
        View 8x AWS Certifications
        <ArrowTopRightOnSquare className="h-4 w-4 stroke-zinc-400 transition group-hover:stroke-zinc-50 group-active:stroke-zinc-50" />
      </Button>
    </div>
  )
}

function Resume() {
  let resume = [
    {
      company: 'Ubertas Consulting',
      title: 'Principal SA',
      logo: logoUbertas,
      start: '2023',
      end: {
        label: 'Present',
        dateTime: new Date().getFullYear(),
      },
    },
    {
      company: 'Inawisdom',
      title: 'Lead Consultant',
      logo: logoInawisdom,
      start: '2021',
      end: '2023',
    },
    {
      company: 'BT',
      title: 'Cloud Engineer',
      logo: logoBt,
      start: '2020',
      end: '2021',
    },
    {
      company: 'ubisend',
      title: 'Software Developer',
      logo: logoUbisend,
      start: '2017',
      end: '2020',
    },
  ]

  return (
    <div className="rounded-2xl border border-zinc-700/40 p-6">
      <h2 className="flex text-sm font-semibold text-zinc-100">
        <BriefcaseIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Work</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {resume.map((role, roleIndex) => (
          <li key={roleIndex} className="flex gap-4">
            <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full border border-zinc-700/50 bg-zinc-800 shadow-md shadow-zinc-800/5">
              <Image
                src={role.logo}
                alt=""
                className="h-7 w-7 rounded-full"
                unoptimized
              />
            </div>
            <dl className="flex flex-auto flex-wrap gap-x-2">
              <dt className="sr-only">Company</dt>
              <dd className="w-full flex-none text-sm font-medium text-zinc-100">
                {role.company}
              </dd>
              <dt className="sr-only">Role</dt>
              <dd className="text-xs text-zinc-400">{role.title}</dd>
              <dt className="sr-only">Date</dt>
              <dd
                className="ml-auto text-xs text-zinc-500"
                aria-label={`${role.start.label ?? role.start} until ${
                  role.end.label ?? role.end
                }`}
              >
                <time dateTime={role.start.dateTime ?? role.start}>
                  {role.start.label ?? role.start}
                </time>{' '}
                <span aria-hidden="true">—</span>{' '}
                <time dateTime={role.end.dateTime ?? role.end}>
                  {role.end.label ?? role.end}
                </time>
              </dd>
            </dl>
          </li>
        ))}
      </ol>
    </div>
  )
}

function Photos() {
  let rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2']

  return (
    <div className="mt-16 sm:mt-20">
      <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        {[image1, image2, image3, image4, image5].map((image, imageIndex) => (
          <div
            key={image.src}
            className={clsx(
              'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-800 sm:w-72 sm:rounded-2xl',
              rotations[imageIndex % rotations.length]
            )}
          >
            <Image
              src={image}
              alt=""
              sizes="(min-width: 640px) 18rem, 11rem"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export const metadata = {
  title: 'Alex Kearns',
  description:
    'I’m Alex - an AWS consultant based in Ipswich, UK. I work at Ubertas Consulting as a Principal Solutions Architect helping organisations of all sizes migrate to AWS, and modernise their workloads.',
  openGraph: {
    title: 'Alex Kearns',
    description:
      'I’m Alex - an AWS consultant based in Ipswich, UK. I work at Ubertas Consulting as a Principal Solutions Architect helping organisations of all sizes migrate to AWS, and modernise their workloads.',
    images: [`${getSiteUrl().siteUrl}/api/og?title=Alex Kearns`],
    url: getUrlForRoute(),
  },
}

export default async function Home() {
  const articles = allArticles
    .sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))
    .slice(0, 4)

  return (
    <>
      <Container className="mt-16 sm:mt-32">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-100 sm:text-5xl">
            Usually found with my head in the clouds.
          </h1>
          <p className="mt-6 text-base text-zinc-400">
            I’m Alex - an AWS consultant based in Ipswich, UK. I work at Ubertas
            Consulting as a Principal Solutions Architect helping clients of all
            sizes to migrate their applications to AWS and modernise to make the
            most of cloud.
          </p>
          <div className="mt-6 flex gap-6">
            <SocialLink
              href="https://twitter.com/alex_kearns"
              aria-label="Follow on Twitter"
              icon={TwitterIcon}
            />
            <SocialLink
              href="https://instagram.com/alexjameskearns"
              aria-label="Follow on Instagram"
              icon={InstagramIcon}
            />
            <SocialLink
              href="https://github.com/alexkearns"
              aria-label="Follow on GitHub"
              icon={GitHubIcon}
            />
            <SocialLink
              href="https://linkedin.com/in/alexjameskearns"
              aria-label="Follow on LinkedIn"
              icon={LinkedInIcon}
            />
          </div>
        </div>
      </Container>
      <Photos />
      <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-16">
            {articles.map((article) => (
              <Article key={article.url} article={article} />
            ))}
          </div>
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <Achievements />
            <Resume />
          </div>
        </div>
      </Container>
    </>
  )
}
