import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import { getSiteUrl, getUrlForRoute } from '@/lib/url'

import nordevcon23Image from '@/images/events/nordevcon-23.png'
import nordevcon22Image from '@/images/events/nordevcon-22.png'
import nordevServerlessStreamImage from '@/images/events/nordev-serverless-stream.png'
import nordevServerlessWhatWhyHowImage from '@/images/events/nordev-serverless-what-why-how.png'
import techToastColchesterImage from '@/images/events/tech-toast-colchester.png'
import techToastNorwichImage from '@/images/events/tech-toast-norwich.png'
import ueaMoneyhackImage from '@/images/events/uea-moneyhack.png'
import ipswichAwsUserGroupImage from '@/images/events/ipswich-aws-user-group.png'
import ambassadorSummit22Image from '@/images/events/ambassador-summit-22.png'
import cloudContainerConundrumImage from '@/images/events/cloud-container-conundrum.png'
import comsum22Image from '@/images/events/comsum-22.png'
import owaspImage from '@/images/events/owasp.png'
import readySetCloudImage from '@/images/events/ready-set-cloud-podcast.jpeg'

const eventAppearanceType = {
  CONF: 'Conference',
  TALK: 'Talk',
  STREAM: 'Live Stream',
  POD: 'Podcast',
}

const eventAppearance = [
  {
    title: 'What on earth is app modernization?',
    type: eventAppearanceType.POD,
    event: 'Ready, Set, Cloud! Podcast',
    image: {
      src: readySetCloudImage,
    },
    date: Date.parse('30 June 2023'),
    href: 'https://www.readysetcloud.io/podcast/13/',
    cta: 'Listen to the podcast',
  },
  {
    title: 'Serverless orchestration: Events, Queues, State Machines, oh my!',
    type: eventAppearanceType.CONF,
    event: 'nor(DEV):con',
    image: {
      src: nordevcon23Image,
    },
    date: Date.parse('23 February 2023'),
    href: 'https://www.youtube.com/watch?v=3ktFKGW8tQI',
    cta: 'Watch video',
  },
  {
    title: 'The Cloud Container Conundrum',
    type: eventAppearanceType.TALK,
    event: 'The bAWSton User Group',
    image: {
      src: cloudContainerConundrumImage,
    },
    date: Date.parse('9 March 2023'),
    href: 'https://alexkearns-aws-community-public-storage.s3.eu-west-2.amazonaws.com/baws-user-group-the-cloud-container-conundrum.pdf',
    cta: 'View slides',
  },
  {
    title: "Grab your digital swimwear, we're diving into a data lake",
    type: eventAppearanceType.CONF,
    event: 'AWS Community Summit',
    date: Date.parse('22 September 2022'),
    image: {
      src: comsum22Image,
    },
    href: 'https://alexkearns-aws-community-public-storage.s3.eu-west-2.amazonaws.com/aws-comsum-22.pdf',
    cta: 'View slides',
  },
  {
    title: 'Democratising Machine Learning for Business',
    type: eventAppearanceType.CONF,
    event: 'nor(DEV):con',
    date: Date.parse('17 June 2022'),
    image: {
      src: nordevcon22Image,
    },
    href: 'https://ak-ambassador-public-storage.s3.eu-west-2.amazonaws.com/democratising_ml_for_business.pdf',
    cta: 'View slides',
  },
  {
    title: 'Controlled Empowerment: A tale of two sides',
    type: eventAppearanceType.TALK,
    event: 'AWS Ambassador EMEA Summit',
    date: Date.parse('29 June 2022'),
    image: {
      src: ambassadorSummit22Image,
    },
    href: 'https://ak-ambassador-public-storage.s3.eu-west-2.amazonaws.com/controlled_empowerment_a_tale_of_two_sides.pdf',
    cta: 'View slides',
  },
  {
    title: 'The best practices of working securely on AWS',
    type: eventAppearanceType.TALK,
    event: 'OWASP Suffolk Chapter',
    image: {
      src: owaspImage,
    },
    date: Date.parse('29 March 2022'),
    href: 'https://www.youtube.com/watch?v=1dznfbf_gEQ',
    cta: 'Watch video',
  },
  {
    title: 'Serverless: What, why, how?',
    type: eventAppearanceType.TALK,
    event: 'Norfolk Developers',
    date: Date.parse('16 September 2021'),
    image: {
      src: nordevServerlessWhatWhyHowImage,
    },
    href: 'https://www.youtube.com/watch?v=6hBmjYPNdnc',
    cta: 'Watch video',
  },
  {
    title: 'AWS App Runner: The what, the why and the how',
    type: eventAppearanceType.TALK,
    event: 'Ipswich AWS User Group',
    image: {
      src: ipswichAwsUserGroupImage,
    },
    date: Date.parse('17 June 2021'),
    href: 'https://www.youtube.com/watch?v=b1u3cFYs6fw',
    cta: 'Watch video',
  },
  {
    title: 'Handling Peaks in Website Traffic',
    type: eventAppearanceType.TALK,
    event: 'TechEast: Tech and Toast',
    image: {
      src: techToastColchesterImage,
    },
    date: Date.parse('14 February 2020'),
    href: 'https://ak-ambassador-public-storage.s3.eu-west-2.amazonaws.com/tech-and-toast-peaks-in-website-traffic.pdf',
    cta: 'View slides',
  },
  {
    title: 'What is Local Recall?',
    type: eventAppearanceType.TALK,
    event: 'TechEast: Tech and Toast',
    image: {
      src: techToastNorwichImage,
    },
    date: Date.parse('22 November 2019'),
    href: 'https://www.youtube.com/watch?v=mF4cX0dINFk',
    cta: 'Watch video',
  },
  {
    title: 'What is a chatbot?',
    type: eventAppearanceType.TALK,
    event: 'UEA Moneyhack',
    image: {
      src: ueaMoneyhackImage,
    },
    date: Date.parse('16 November 2019'),
    href: 'https://ak-ambassador-public-storage.s3.eu-west-2.amazonaws.com/uea-moneyhack.pdf',
    cta: 'View slides',
  },
  {
    title: 'Brewing a serverless application',
    type: eventAppearanceType.STREAM,
    event: 'Norfolk Developers',
    image: {
      src: nordevServerlessStreamImage,
    },
    date: Date.parse('23 March 2022'),
    href: 'https://www.youtube.com/playlist?list=PLc8-tQY65nvVLAKiHuLLyQxnw7dgNxJ43',
    cta: 'Watch stream recording',
  },
]

function Appearance({ title, event, date, image, type, cta, href }) {
  return (
    <Card>
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Eyebrow as="div" decorate>
        <div>{event}</div>
        <div>{new Date(date).toLocaleDateString('en-GB')}</div>
      </Card.Eyebrow>
      <Card.Tags tags={[type]} />
      {image && (
        <>
          <div className={'flex-1'} />
          <Card.Image src={image.src} alt={image.alt} />
        </>
      )}
      <Card.Cta>{cta}</Card.Cta>
    </Card>
  )
}

export const metadata = {
  title: 'Speaking - Alex Kearns',
  description:
    'I’ve spoken at all kinds of events and am always open to trying new formats.',
  openGraph: {
    title: 'Speaking',
    description:
      'I’ve spoken at all kinds of events and am always open to trying new formats.',
    images: [`${getSiteUrl().siteUrl}/api/og?title=Speaking`],
    url: getUrlForRoute('speaking'),
  },
}

export default function Speaking() {
  return (
    <>
      <SimpleLayout
        title="I’ve spoken at all kinds of events and am always open to trying new formats."
        intro="I really love delivering content live. It's still incredibly nerve-wracking but I wouldn't change it!"
      >
        <ul
          role="list"
          className="grid grid-cols-1 gap-x-16 gap-y-20 sm:grid-cols-2 lg:grid-cols-3"
        >
          {eventAppearance
            .sort((a, b) => b.date - a.date)
            .map((appearance, key) => (
              <Appearance key={key} {...appearance} />
            ))}
        </ul>
      </SimpleLayout>
    </>
  )
}
