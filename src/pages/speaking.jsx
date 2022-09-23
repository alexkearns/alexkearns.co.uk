import Head from 'next/head'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function SpeakingSection({ children, ...props }) {
  return (
    <Section {...props}>
      <div className="space-y-16">{children}</div>
    </Section>
  )
}

function Appearance({ title, description, event, cta, href }) {
  return (
    <Card as="article">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Eyebrow decorate>{event}</Card.Eyebrow>
      <Card.Description>{description}</Card.Description>
      <Card.Cta>{cta}</Card.Cta>
    </Card>
  )
}

export default function Speaking() {
  return (
    <>
      <Head>
        <title>Speaking - Alex Kearns</title>
        <meta
          name="description"
          content="I’ve spoken at all kinds of events and am always open to trying new formats."
        />
      </Head>
      <SimpleLayout
        title="I’ve spoken at all kinds of events and am always open to trying new formats."
        intro="I really love delivering content live. It's incredibly nerve-wracking but it allows for the building of rapport with an audience and instant feedback on whether I'm pitching
          my talk at the right level."
      >
        <div className="space-y-20">
          <SpeakingSection title="Conferences">
            <Appearance
              title="Grab your digital swimwear, we're diving into a data lake"
              description="An architectural overview of data lakes, the alternative ways of building a data platform and how to get started with implementation on AWS."
              event="AWS Community Summit 2022"
              cta="Video coming soon..."
            />
            <Appearance
              href="#"
              title="Democratising Machine Learning for Business"
              description="A session designed to give an audience new to machine learning enough of an overview to have informed conversations and recognise opportunities to drive efficiencies in their businesses."
              event="nor(DEV):con 2022"
              cta="Download slides"
            />
          </SpeakingSection>
          <SpeakingSection title="Events">
            <Appearance
              href="#"
              title="Controlled Empowerment: A tale of two sides"
              description="A 15 minute lightning talk delivered to my fellow AWS Ambassadors about how developers can be empowered to work freely on AWS without introducing
                unacceptable security risks."
              event="AWS Ambassador EMEA Summit, June 2022"
              cta="View slides"
            />
            <Appearance
              href="https://www.youtube.com/watch?v=1dznfbf_gEQ"
              title="The best practices of working securely on AWS"
              description="I was lucky enough to be invited to speak to the OWASP Suffolk Chapter meetup all about the best practices of working
                securely on AWS, focusing on easy wins for establishing solid security posture as well as making the most of AWS'
                managed security services - a sure-fire way to take the load off of a security professional new to cloud."
              event="OWASP Suffolk, March 2022"
              cta="Watch video"
            />
            <Appearance
              href="https://www.youtube.com/watch?v=6hBmjYPNdnc"
              title="Serverless: What, why, how?"
              description="Norfolk Developers were kind enough to let me talk to their community all about serverless, particularly on AWS. 
                What I really wanted viewers to get from this talk was an understanding of what serverless really was, bust some of the common myths, talk through
                why it's a good choice of architecture (and why it isn't always) as well as just how a developer can get started with it."
              event="Norfolk Developers, September 2021"
              cta="Watch video"
            />
            <Appearance
              href="https://www.youtube.com/watch?v=b1u3cFYs6fw"
              title="AWS App Runner: The what, the why and the how"
              description="A talk all about App Runner, a(nother) new service for running containers on AWS designed for simplicity - AWS Lightsail style."
              event="Ipswich AWS User Group, June 2021"
              cta="Watch video"
            />
            <Appearance
              href="#"
              title="Tech and Toast: Handling Peaks in Website Traffic"
              description="I opted to talk about scaling websites / web applications. This was a topic that has been majority self taught and that I have a real interest in moving into as a career. 
                The one hesitation I had about giving speaking on this was that the audience were likely to be only about 1/3 technical. When the topic has potential to be so complex from a technical perspective, 
                I wanted to make sure that I pitched the concepts at the right level. I'm pleased to say that the talk went very well, drawing in the biggest crowd yet at a Tech and Toast event."
              event="Tech East, February 2020"
              cta="View slides"
            />
            <Appearance
              href="https://www.youtube.com/watch?v=mF4cX0dINFk"
              title="Tech and Toast: Local Recall"
              description="I spoke about the Local Recall project that I'd worked on (with some technical bits thrown in). Given the size of the project, fitting it all in a 15 minute talk was quite 
                daunting. To make sure that I was going into the right amount of detail about the right bits, I did a dry run with the ubisend team the day before. After a couple of last minute tweaks - it was good to go! 
                Safe to say, as it was my first proper public speaking event, I was a little nervous. A lot more people turned up than I was expecting which didn't help with that! After speaking to a few people afterwards, it seemed to have gone well which I was pleased with."
              event="Tech East, November 2019"
              cta="Watch video"
            />
          </SpeakingSection>
          <SpeakingSection title="Live streams">
            <Appearance
              href="https://www.youtube.com/playlist?list=PLc8-tQY65nvVLAKiHuLLyQxnw7dgNxJ43"
              title="Brewing a serverless application"
              description="Sticking with the serverless theme that I'd delivered before to a Norfolk Developers audience, I decided to live stream
                the building of a simple web application using React as a front-end (very much not my specialty, you've been warned!)
                and a Python backend making use of AWS serverless services such as Lambda functions, API Gateway and DynamoDB."
              event="Norfolk Developers, March 2022"
              cta="Watch video"
            />
          </SpeakingSection>
        </div>
      </SimpleLayout>
    </>
  )
}
