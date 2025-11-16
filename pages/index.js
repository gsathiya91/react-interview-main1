import * as React from "react";
import Announcements from "../components/Announcements";
import HeroSection from "../components/HeroSection";
import WhatsUp from "../components/WhatsUp";
import Layout from "../components/Layout";
import Spacer from "../components/Spacer";
import Head from "next/head";
import bgImage from "../public/images/UK-fintech-impact-report-2024.png";
import rightImage from "../public/eventimages/imageRight.png";
import leftImage from "../public/eventimages/mainleftimage.png";
import EventSection from "../components/EventSection/eventSection";
import EventHeroSection from "../components/EventSection/EventHeroSection";
import EventDetailsSection from "../components/EventSection/EventDetailsSection";
import KeyThemesSection from "../components/EventSection/KeyThemesSection";
import WhatToExpectSection from "../components/EventSection/WhatToExpectSection";
import FAQSection from "../components/EventSection/FAQSection";
import GetInvolvedSection from "../components/EventSection/GetInvolvedSection";

const HeroSectionData = {
  title: "Connecting The UK FinTech Community",
  description:
    "Innovate Finance is the independent industry body and voice of UK FinTech. Our mission is to accelerate the UK’s leading role in the financial services sector by directly supporting the next generation of technology-led innovators to create a more inclusive, more democratic and more effective financial services sector that works better for everyone.",
  placeholder:
    "Search here to find out more about members, policy, events and insights",
};
const whatSectionData = {
  heading: "Whats Coming Up",
  card: [
    {
      buttonName: "FIND OUT MORE",
      link: "/",
      bgImage: "https://ww2.innovatefinance.com/wp-content/uploads/2022/08/rectangle-39.svg",
    },
    {
      buttonName: "TAKE A LOOK",
      link: "/",
      heading: `Stablecoin: The UK Opportunity`,
      bgImage: "https://ww2.innovatefinance.com/wp-content/uploads/2022/08/rectangle-36.svg",
    },
    {
      buttonName: "TAKE A LOOK",
      link: "/",
      heading: `Women in FinTech Powerlist Now Live`,
      bgImage: "https://ww2.innovatefinance.com/wp-content/uploads/2022/08/Rectangle-37.webp",
    },
    {
      buttonName: "Read the Report",
      link: "/",
      heading: "FinTech Investment Landscape 2024",
      bgImage: "https://ww2.innovatefinance.com/wp-content/uploads/2022/08/rectangle-38.svg",
    },
    {
      buttonName: "TAKE A LOOK",
      link: "/",
      bgImage: "https://ww2.innovatefinance.com/wp-content/uploads/2022/08/rectangle-36.svg",
    },
  ],
};

const becomeData = {
  title: "Become A Member Today",
  mobileTitle: `Become A<br/>Member Today`,
  buttonName: "FIND OUT MORE",
  buttonLink: "/becomeamember/",
  para: [
    {
      heading: "The Industry Body for UK FinTech",
      description:
        "We are helping to transform financial services globally – from startups and scaleups to global corporates and established financial institutions. ",
    },
    {
      heading: "We Amplify the Reach of FinTech",
      description:
        "Showcasing innovation by connecting regulators, financial services firms and government, both in the UK and internationally.",
    },
    {
      heading: "We are Shaping the Future of Finance",
      description:
        "Helping create a global financial services sector that is more transparent, more sustainable and more inclusive.",
    },
  ],
};

const eventData = {
  title: "Purpose, Progress & Prosperity: Accelerating UK FinTech Leadership for All",

  content: {
    hero: {
      title: "Purpose, Progress & Prosperity: Accelerating UK FinTech Leadership for All",
      date: "Tuesday 21st October 2025",
      location: [
        "London Conference Centre,",
        "The University of Chicago Booth School of Business, One",
        "Bartholomew Close, Barts Square, London EC1A 7BL"
      ],
      buttons: [
        {
          label: "Secure Your Ticket",
          link: "/",
        },
        {
          label: "Sponsorship Opportunities",
          link: "/",
        },
      ],
      image: rightImage,
    },

    details: {
      image: leftImage,
      description: [
        `Welcome to <strong>Purpose, Progress & Prosperity: Accelerating UK FinTech Leadership for All</strong>, the fifth edition of our FinTech as a Force for Good Forum, taking place on the <strong>21st of October 2025</strong>.`,

        `Join the FinTech innovators and digital disruptors shaping the sector and showcasing how FinTech is driving economic growth across the country.`,

        `Explore cutting-edge technologies transforming our financial lives for the better, meet industry leaders and policy makers and be part of the positive change making financial services more transparent, more efficient and more democratic for all.`
      ],
    },

  },
};

const keyThemesContent = {
  title: "Key Themes",
  description:
    "Lee pirate nipperkin boat me. Warp road hang deck yer tails bucko coast timbers. Just avast swab bilged prey jennys quarterdeck nipper. Furl aft yellow coxswain rum shiver. Just gaff down spirits poop tails lugsail man hang overhaul. Grog mutiny locker belaying gold piracy road locker fer. Log of bilge crack lugsail spot yawl the piracy crow's. Halter gun locker a yer sloop of yard arr yarr.",
};

const whatToExpectContent = {
  title: "What to expect",
  items: [
    { label: "400+ Attendees" },
    { label: "Dedicated Meeting Area" },
    { label: "Exhibition Area" },
    { label: "Roundtables" },
    { label: "20+ Sessions" },
    { label: "50% C-Suite & Board Level in attendance" }
  ],
  video: `<iframe width="100%" height="100%"
          src="https://www.youtube.com/embed/LXb3EKWsInQ"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
           allowfullscreen></iframe>`
};

const faqContent = {
  left: {
    eyebrow: "Here to help",
    title: "Frequently Asked Questions",
    intro:
      "If you need more information, please get in contact via the form below and the team will be in touch shortly",
  },
  items: [
    {
      question: "When is FinTech as a Force for Good taking place?",
      answer: `
  FinTech as a Force for Good 2025 will be hosted by Innovate Finance at 
  <strong>London Conference Centre, The University of Chicago Booth School of Business, 
  One Bartholomew Close, Barts Square, London EC1A 7BL on Tuesday 21st October 2025</strong> 
  from 8am until 6pm including registration and drinks reception.
`,
    },
    {
      question:
        "Do Members receive complimentary tickets and if so how many?",
      answer:
        "Yes, members receive a limited allocation of complimentary tickets depending on their membership tier.",
    },
    {
      question: "Do you offer a concession and student ticket?",
      answer:
        "We offer concession and student pricing for eligible attendees. Proof of status may be required.",
    },
    {
      question: "Do we provide media passes?",
      answer:
        "A limited number of media passes will be available for accredited press and media partners.",
    },
    {
      question: "Speaking at FinTech as a Force for Good 2025?",
      answer:
        "Speaking opportunities are curated by the programme team. Please contact us via the form below with details.",
    },
    {
      question: "Sponsor and Partnerships",
      answer:
        "We offer a range of sponsorship and partnership packages. Get in touch with our partnerships team for more information.",
    },
    {
      question: "Virtual Tickets",
      answer:
        "A virtual ticket option will be available for selected sessions with live streaming and on-demand access.",
    },
  ],
};

const getInvolvedContent = {
  title: "Get Involved",
  checkboxes: [
    "Sponsoring",
    "Attending",
    "Speaking",
    "Exhibiting"
  ]
};


export default function Home() {


  return (
    <>
      <Head>
      </Head>
      <div itemprop="mainEntityOfPage">
        <Spacer height="80px" />

        <HeroSection data={HeroSectionData} className="home-hero-section" />
        <WhatsUp data={whatSectionData} />
        <Announcements
          becomeData={becomeData}
        />
        <Spacer height="60px" />

        <EventHeroSection
          title={eventData.content.hero.title}
          date={eventData.content.hero.date}
          location={eventData.content.hero.location}
          buttons={eventData.content.hero.buttons}
          image={eventData.content.hero.image}
        />
        <Spacer height="60px" />

        <EventDetailsSection image={eventData.content.details.image}>
          {eventData.content.details.description.map((p, i) => (
            <p key={i} dangerouslySetInnerHTML={{ __html: p }} />
          ))}
        </EventDetailsSection>

        <Spacer height="60px" />

        <KeyThemesSection
          title={keyThemesContent.title}
          description={keyThemesContent.description}
        />

        <Spacer height="60px" />
        <WhatToExpectSection data={whatToExpectContent} />

        <Spacer height="120px" />

        <FAQSection data={faqContent} />
        <Spacer height="60px" />

        <GetInvolvedSection data={getInvolvedContent} />
        <Spacer height="60px" />
      </div>

    </>
  );
}

Home.getLayout = page => <Layout>{page}</Layout>;
