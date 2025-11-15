import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import HeroBanner from "../components/HeroBanner";
import TabSection from "../components/TabSection";
import Contentsection from "../components/Contentsection";
import Sponsor from "../components/Sponsor";
import TechZero from "../components/TechZero";
import NumbersCard from "../components/NumbersCard";
import Spacer from "../components/Spacer";
import Head from "next/head";


const herobanner = {
  bgMinHeight: "400px",
  bgImage:
    "https://ww2.innovatefinance.com/wp-content/uploads/2018/07/42793041051_961642fe28_k.jpg?id=340776",
};

const tabSection = [
  {
    title: "About Innovate Finance",
    link: "/about/",
  },
  {
    title: "becomeamember",
    link: "/becomeamember/",
  },
  {
    title: "Home",
    link: "/",
  },
  {
    title: "Corporate Announcements",
    link: "/in-the-news/",
  },
];

const contentSection = [
  {
    mainTitle: `<h1>About Innovate Finance</h1>`,
    description: [
      {
        ptag: `
      <p>Innovate Finance is the <strong>independent industry body for UK FinTech</strong>.</p>
      <p>Our mission is to accelerate the UK’s leading role in the financial services sector by directly supporting the next generation of technology-led innovators to <strong>create a more inclusive, more democratic and more effective financial services sector</strong> that works better for everyone.</p>
      <p>Innovate Finance’s membership and partnership community ranges from seed stage startups to scale up and high growth FinTechs; from multinational financial institutions to big tech firms; and from investors to global FinTech hubs. Innovate Finance supports our members and the wider financial innovation ecosystem by <strong>promoting policy and regulation that allows innovation to thrive</strong>, encouraging talent, <strong>diversity and skills into the sector</strong>, facilitating the scaling journey, fostering business opportunity, <strong>partnerships</strong> and domestic and international <strong>growth</strong>, and <strong>driving capital</strong> into UK FinTech.</p>
      <p>By bringing together and connecting the most forward-thinking participants in financial services, Innovate Finance is helping create a financial services sector that is <strong>more transparent, more sustainable</strong> and more inclusive.</p>
      `,
      },
    ],
  },
];
const contentSection1 = [
  {
    mainTitle: `<h2>Priority Programmes and Initiatives for 2024</h2>`,
    description: [
      {
        ptag: `<h4><b>Investment, Growth and Partnerships</b></h4>`,
      },
      {
        ptag: `<p><strong>Making it easier for FinTech companies and financial institutions to work together for mutual benefit.</strong></p>`,
      },

      {
        ptag: `<p>This programme aims to help FinTech companies gain access to capital by providing connections to the venture community, and to help VCs connect with new and exciting startups, through our Investor Speed Dating events and topical panels. We also invite our VC members to contribute their quotes in our Annual Investment Report covered by the FT, CityAm, and often cited by the Prime Minister and UK missions abroad. You will also have the opportunity to speak onstage at major Innovate Finance events to position your fund as a pre-eminent and trustworthy investment partner.<p>`,
      },
      {
        ptag: `<p>&nbsp;</p>`,
      },
    ],
  },
  {
    description: [
      {
        ptag: `<h4><b>Regulation, Policy and the Future of Finance</b></h4>`,
      },
      {
        ptag: `<p><strong>Supporting the UK’s advancement of proportionate and effective regulation.</strong></p>`,
      },
      {
        ptag: `<p>Innovate Finance aims to ensure the voice of the FinTech sector is heard across key policy areas. Our Government and Regulatory Affairs team works to maintain the UK’s position as a leading global FinTech ecosystem, and the most attractive hub for setting up and scaling a FinTech business in the world.
<p>`,
      },
      {
        ptag: `<p>Our policy work helps promote innovation in the UK, and supports our members as they navigate the shifting political and economic landscape. The input of our members is vital in helping us to ensure that we are representing the needs of an evolving sector.
</p>`,
      },
      {
        ptag: `<p>Our policy work consists of various working groups, invite only roundtables, and FinTech All Party Parliamentary Group events that provide our members with a platform to talk about their policy priorities and views on the developing policy landscape. Our research papers, reports, briefings and consultation responses deliver insights to policy makers and regulators to ensure the needs of the FinTech sector are recognised to support the sector grow. 
</p>`,
      },
      {
        ptag: `<p>Stay in the loop, <strong><a aria-label="sign up to our policy newsletter" gtmlinkname="sign up to our policy newsletter" gtmlinkcontext="Content Section" href="https://share.hsforms.com/10-tl0wXlRFSUGUQnTEXKiQ32t14?__hstc=189906676.024b37d85e54fce8037ff2baf0222965.1666243962551.1669285575619.1669291462354.87&__hssc=189906676.4.1669291462354&__hsfp=4244455505">sign up to our policy newsletter</a></strong><p>`,
      },
      {
        ptag: `<p>&nbsp;</p>`,
      },
    ],
  },
  {
    description: [
      {
        ptag: `<h4><b>FinTech as a Force for Good</b></h4>`,
      },
      {
        ptag: `<p><b>Showing how FinTech contributes to social betterment.</b></p>`,
      },
      {
        ptag: `<p>This programme supports initiatives, events and campaigns which demonstrate how financial services innovation is increasingly contributing to social betterment in the UK and globally. Innovate Finance showcases how new technologies can act as a force for good for consumers, businesses and society as a whole. We are actively raising awareness of the power of FinTech to make positive change to new and diverse audiences. In particular, we are focused on highlighting the importance of financial education, wellness and inclusion, together with the evolution of sustainable finance. Our annual FinTech as a Force For Good welcomes FinTech founders, financial services institutions, policy-makers and regulators, NPOs and NGOs, professional services firms, investors, and international hubs for a one-day impact summit to drive home the power the sector has in creating real change, right now.

</p> `,
      },

      {
        ptag: `<p>&nbsp;</p>`,
      },
    ],
  },
  {
    description: [
      {
        ptag: `<h4><b>International Connectivity and Scaling</b></h4>`,
      },
      {
        ptag: `<p><strong>Working collaboratively with the FinTech sector across the world.
</strong></p>`,
      },
      {
        ptag: `<p>We are supporting the growth of FinTech across the UK through the work of the FinTech National Network and its events, research and campaigns. Looking overseas, we are working with our Hub members and other partners to promote and support FinTechs’ international scaling ambitions.
</p>`,
      },
      {
        ptag: `<p><strong>International FinTech Group
</strong></p>`,
      },
      {
        ptag: `<p>The International FinTech Group’s aim is to strengthen and promote the brand recognition of UK FinTech internationally through collaboration across the sector. Members of the IFG support the growth of the UK FinTech sector through greater international awareness, uptake and impact of support programs, trade agreements and supporting frameworks and events.</p>`,
      },
      {
        ptag: `<p><strong>US programme
</strong></p>`,
      },
      {
        ptag: `<p>The US / UK FinTech Forum is a programme of events and thematic discussions in the US designed to support our members who are currently located in the US; to support those firm seeking to scale to the US through regulatory, partner and investor connections; to promote the UK FinTech ecosystem to US investors; to promote the UK as an international scaling destination of choice for US FinTechs; and more broadly to foster stronger ties between the two ecosystems. Launched in 2023 and focused in New York City, the programme has the support of our International team, and US Programme Lead based in NYC.
</p>`,
      },
      {
        ptag: `<p>&nbsp;</p>`,
      },
    ],
  },
  {
    description: [
      {
        ptag: `<h4><b>Skills, Talent and Culture</b></h4>`,
      },

      {
        ptag: `<p>Encouraging commitment to diversity, ensuring inclusive behaviour is at the heart of FinTech.
</p>`,
      },
      {
        ptag: `<p>Our FinTech For Schools and Diversity and Inclusion programmes are the lead elements of this programme. FinTech For Schools promotes awareness of FinTech and showcases the industry to the broadest range of talent at an early age from a diverse range of backgrounds. We want to help young people to learn how to manage their finances better, consider FinTech as a career choice or gain work experience and insight. 
</p>`,
      },
      {
        ptag: `<p>This programme, which includes our Women in FinTech and Pride in FinTech initiative aims to improve diversity in FinTech and financial services by creating positive action, real change and foster inclusion. We host tailored workshops and sessions dedicated to providing support for under represented employees at every level and stage in FinTech. We are also signatories or supporters of various Inclusivity Charters and encourage our members to sign up to these.</p>`,
      },
      {
        ptag: `<p>&nbsp;</p>`,
      },
    ],
  },
];

const Sponsour = {
  background: "linear-gradient(to bottom right, #3c7eb0 0%, #10b7d9 100%)",
  data: [
    {
      title: `<h2>Sponsor A Programme</h2>`,
      description: `<p style="color:#fff;">Join us in bringing together and connecting the most forward-thinking participants in financial services, and helping to create a global financial services sector that is more transparent, more sustainable and more inclusive.</p>`,
      buttonName: "FIND OUT MORE",
      buttonLink: "/sponsorship/",
      buttonBgColor: "#fff",
      buttonColor: "#000",
      buttonAlign: "right",
    },
  ],
};

const numberData = {
  title: `<h3>Our numbers</h3>`,
  gridCols: "3",
  numberCard: [
    {
      number: "<h4><strong>8</strong></h4>",
      linearGradient: "linear-gradient(to right,#006b31 0%, #6ec2b5 100%)",
      text: "Years Supporting FinTech",
    },
    {
      number: "<h4><strong>18</strong></h4>",
      linearGradient: "linear-gradient(to right,#3c7eb0 0%, #14b9da 100%)",
      text: "Industry Verticals",
    },
    {
      number: "<h4><strong>1:5</strong></h4>",
      linearGradient: "linear-gradient(to right,#3c7eb0 0%, #14b9da 100%)",
      text: "Financial Institutions to FinTech startups",
    },
  ],
};

const numberSection = {
  title: `<h3>Industry numbers</h3>`,
  gridCols: "3",
  numberCard: [
    {
      number: `<h4>$11.6 Billion</h4>`,
      linearGradient: "linear-gradient(to right,#006b31 0%, #6ec2b5 100%)",
      text: "Invested into UK FinTech in 2021",
    },
    {
      number: `<h4><strong>2nd</strong></h4>`,
      linearGradient: "linear-gradient(to right,#3c7eb0 0%, #14b9da 100%)",
      text: "UK is the second biggest market in the world for FinTech investment.",
    },
    {
      number: `<h4><strong>71%</strong></h4>`,
      linearGradient: "linear-gradient(to right,#f1883e 0%, #e9ca00 100%)",
      text: "FinTech adoption rate in the UK",
    },
  ],
};


const techZeroData = {
  buttonLink: "/netzerocommitments/",
  buttonName: "FIND OUT MORE",
  bgMinHeight: "150px",
  image:
    "https://ww2.innovatefinance.com/wp-content/uploads/2021/10/techzeo-125x115.png",
  description: `<p><b>We’re committed to net zero by 2050 </b>at the latest and will
            update our target when we measure our emissions and publish a
            NetZero plan within the next 12 months.</p>`,
};

const About = () => {

  return (
    <>
      <Head>
      </Head>
      <>
        <HeroBanner data={herobanner} />
        <div className="about-page" itemProp="mainEntityOfPage">
          <TabSection data={tabSection} />
          <Contentsection data={contentSection} />
          <Spacer height="15px" />
          <NumbersCard data={numberData} />
          <NumbersCard data={numberSection} className="number-card-2" />
          <Contentsection data={contentSection1} />
          <Sponsor data={Sponsour} className="about-page-sponsor" />
          <Spacer height="40px" />
          <TechZero
            data={techZeroData}
            className={"about-hover-button-Bgcolor"}
          />
          <Spacer height="40px" />
        </div>
      </>
    </>
  );
};
export default About;

About.getLayout = page => <Layout>{page}</Layout>;


