import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { getSiteUrl, getUrlForRoute } from '@/lib/url'
import { Container } from '@/components/Container'
import {
  TwitterIcon,
  InstagramIcon,
  GitHubIcon,
  LinkedInIcon,
} from '@/components/Icons'
import portraitImage from '@/images/portrait.jpg'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium transition text-zinc-200 hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const metadata = {
  title: 'About - Alex Kearns',
  description: "I’m an AWS consultant based in Ipswich, UK. I work at Ubertas Consulting as a Principal Solutions Architect helping organisations of all sizes migrate to AWS, and modernise their workloads.",
  openGraph: {
    title: "About",
    description: "I'm an AWS consultant based in Ipswich, UK. I work at Ubertas Consulting as a Principal Solutions Architect helping organisations of all sizes migrate to AWS, and modernise their workloads.",
    images: [`${getSiteUrl().siteUrl}/api/og?title=About`],
    url: getUrlForRoute("about")
  }
};

export default function About() {
  return (
    <>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={portraitImage}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rotate-3 rounded-2xl object-cover bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-zinc-100">
              <span className="text-4xl sm:text-5xl font-bold block tracking-tight">Hi! I’m Alex.</span>
              <span className="text-2xl font-medium block mt-2">I live in the UK, where I help businesses migrate their applications to AWS and realise the benefits of the cloud.</span>
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-400">
              <p>
                I&apos;ve always been a bit of a geek. Interested in computers from an early age, whether it was in relation to software 
                or hardware. I remember writing my first HTML at school and being hooked on the process of writing code that changed 
                what appeared on the screen. I also remember being fascinated at how computers worked inside, taking great pleasure in 
                dismantling the family computer. I&apos;m not sure my parents remember it so fondly, given that I could not put it back together 
                again!
              </p>
              <p>
                I think it was always clear to me that I would end up working in tech in some way, shape or form. It took a little while 
                to work out exactly what it was - I began with a software development role during, and for the years immediately following, 
                my studies at university. In this role I had some exposure to AWS, primarily due to it being a small team and someone having 
                to do it! I began to cut my teeth on the high level concepts that I&apos;d need as a base.
              </p>
              <p>
                Through self study as well as increased responsibility at work, I moved to BT to work specifically on AWS projects. The long 
                term plan was for me to become a consultant, however due to delays during the pandemic I spent my time there working on 
                internal projects. Specifically, these projects were around cloud adoption within the business as well as the governance 
                required for it to be used on sensitive projects.
              </p>
              <p>
                After BT, I moved to Inawisdom - an AWS Partner specialising in helping businesses to extract usable insights from
                the data that they have. This was typically via the means of new (or improved) data platforms, or via machine learning.
              </p>
              <p>
                Today, I&apos;m working at Ubertas Consulting. Ubertas are an AWS Advanced Partner that focus on helping customers to migrate to AWS as
                well as architecting their workloads in according with AWS best practices.
              </p>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              <SocialLink href="https://twitter.com/alex_kearns" icon={TwitterIcon}>
                Follow on Twitter
              </SocialLink>
              <SocialLink href="https://instagram.com/alexjameskearns" icon={InstagramIcon} className="mt-4">
                Follow on Instagram
              </SocialLink>
              <SocialLink href="https://github.com/alexkearns" icon={GitHubIcon} className="mt-4">
                Follow on GitHub
              </SocialLink>
              <SocialLink href="https://linkedin.com/in/alexjameskearns" icon={LinkedInIcon} className="mt-4">
                Follow on LinkedIn
              </SocialLink>
              <SocialLink
                href="mailto:alex@alexkearns.co.uk"
                icon={MailIcon}
                className="mt-8 border-t pt-8 border-zinc-700/40"
              >
                alex@alexkearns.co.uk
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}
