import * as React from "react";
import Announcements from "../components/Announcements";
import HeroSection from "../components/HeroSection";
import WhatsUp from "../components/WhatsUp";
import Layout from "../components/Layout";
import Spacer from "../components/Spacer";
import Head from "next/head";
import bgImage from "../public/images/UK-fintech-impact-report-2024.png";


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
      </div>

    </>
  );
}

Home.getLayout = page => <Layout>{page}</Layout>;
