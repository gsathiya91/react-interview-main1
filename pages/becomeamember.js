import Layout from "../components/Layout";
import Spacer from "../components/Spacer";
import BecomeContentSlider from "../components/BecomeContentSlider";
import BecomeTabSection from "../components/BecomeTabSection";
import BeAPartOfCommunity from "../components/BeAPartOfCommunity";
import BecomeTwocolSection from "../components/BecomeTwocolSection";
import Head from "next/head";

const sectionOne = {
  title: "Be A Part Of Our Community",
  backgroundColor: "#4bbb87",
  padding: "",
  cardItems: [
    {
      number: "<h2>18</h2>",
      description: "Industry Verticals",
    },
    {
      number: "<h2>80,000+</h2>",
      description: "Social Media Followers",
    },
    {
      number: "<h2>110+</h2>",
      description: "Events a Year",
    },
    {
      number: "<h2>120+</h2>",
      description: "Countries Engaged With",
    },
  ],
};

const twocolSectionData1 = [
  {
    display: "right",
    image:
      "https://ww2.innovatefinance.com/wp-content/uploads/2022/08/rectangle-39.svg",
    title: `Connect. Collaborate. Grow. `,
    arrayofp: [
      {
        ptag: "<p>Our network is made up of CEOs, founders, and innovators, giving you an insight into the most exciting new companies. You can meet the entrepreneurs and executives on the front line of innovation, connect with FinTech focused investors, and those leading on digital innovation in financial institutions. Our connections reach all points across the national and global ecosystem and our network gives our members routes to scale internationally.</p>",
      },
    ],
  },
];

const twocolsectiondata2 = [
  {
    display: "left",
    image:
      "https://ww2.innovatefinance.com/wp-content/uploads/2022/08/rectangle-36.svg",
    title: "Shape Policy & Regulation",
    backgroundColor: "rgba(0,0,52,0.1)",
    arrayofp: [
      {
        ptag: `<p>Our team is always on hand to advise on regulatory and policy changes. We host policy roundtables, undertake and collate research, and provide essential feedback on the sector to regulators, Ministers and government departments. These include HM Treasury and DIT; the FCA and the Bank of England; and the City of London Corporation.</p>`,
      },
      {
        ptag: `<p><strong><a aria-label="Find out what we're doing in this space here" gtmlinkname="Find out what we're doing in this space here" gtmlinkcontext="Become a Member" href='/policy'>Find out what we’re doing in this space here</a></strong></p>`,
      },
    ],
  },
];

const twocolsectiondata3 = [
  {
    display: "right",
    title: "Amplify Your Voice",
    image:
      "https://ww2.innovatefinance.com/wp-content/uploads/2022/08/Rectangle-37.webp",
    arrayofp: [
      {
        ptag: "<p>We can broadcast your message to our 50,000+ social media followers.</p>",
      },
      {
        ptag: "<p>Speak at our events across the year, including at IFGS, UK FinTech Week and FinTech as a Force for Good.</p>",
      },
      {
        ptag: "<p>Add your voice to roundtables and workshops, showcase your expertise. Our research and insight champions the work of our members.</p>",
      },
    ],
  },
];

const twocolsectiondata4 = [
  {
    display: "left",
    image:
      "https://ww2.innovatefinance.com/wp-content/uploads/2022/08/rectangle-38.svg",
    title: `Educate and Inform`,
    backgroundColor: "rgba(0,0,52,0.1)",
    arrayofp: [
      {
        ptag: "<p>We define the market landscape and provide authoritative research and opinion on the wider FinTech sector.</p>",
      },
      {
        ptag: "<p>We keep our members up-to-date with their peers, and the impact of innovation on the ecosystem. Our events and communications keep you informed year round.</p>",
      },
    ],
  },
];

const sliderData = {
  description: [
    {
      item: `“Through activities with Innovate Finance, Mambu has benefited from increased market awareness, a closer connection with key strategic partners, and distinctive thought leadership opportunities.”<br/>
      <b>Mambu</b>`,
    },
    {
      item: `The Innovate Finance team has always been incredibly responsive, helpful, and creative in their support. We’ve been members for years – joining roundtables, webinars, and of course, the Innovate Finance Global Summit, which is definitely a highlight and one of the best fintech events annually. We particularly enjoyed working with members of the team on various workstreams of Ron Kalifa’s Fintech Review (published in 2021), and they have always been a helpful sounding board on other areas such as banking regulation (e.g. MREL) and talent acquisition (e.g. the scale-up visa). We would highly recommend membership to any fintech that’s starting or scaling in the UK and internationally.<br/>
      <b>Nick Lee, </b><b>Head Of Regulatory and Government Affairs, </b><b>OakNorth</b>`,
    },
    {
      item: `<span style="font-weight: 400;">Innovate Finance also offers a powerful platform through which we can collaborate with </span><span style="font-weight: 400;">stakeholders across the fintech ecosystem to influence policy and conceptualise the new </span><span style="font-weight: 400;">initiatives that will drive our exciting sector forward.</span> <br/>
      <b>Ingrid Anusic, Marketing Director, Moneyhub</b>`,
    },
  ],
};


const tabsData = {
  title: "Start Your Journey Here",
  tabs: [
    {
      tab: "FinTech Membership",
    },
    {
      tab: "Institutional Membership",
    },
    {
      tab: "Partners and Vendors",
    },
    {
      tab: "Investor Overview",
    },
    {
      tab: "Hubs Overview",
    },
    {
      tab: "RegTech UK",
    },
    {
      tab: "Digital Pound Foundation",
    },
  ],
  contentTab: [
    {
      title: "FinTech Membership",
      description:
        "FinTech membership brings you into our network, opening doors for you to meet potential partners, including investors, incumbent financial institutions and policy-makers. We will help you along your scaling journey and give you opportunities to learn from those with experience on what it takes to be a successful scale-up. We will involve you in our campaigns to create a global financial services sector that is more transparent, more sustainable and more inclusive.",
      cardData: [
        {
          title: "Startup",
          description: [
            { ptag: "Pre-seed and seed-stage FinTechs" },
            {
              ptag: `<b>Highlights of membership include;</b>`,
            },
            {
              list: [
                {
                  item: "Open invitations to Innovate Finance digital and in-person events and programmes.",
                },
                {
                  item: "Complimentary IFGS & FinTech as a Force for Good tickets.",
                },
                {
                  item: "Receive regular newsletters and insights, including investment landscapes, topical reports, latest news and thought leadership.",
                },
                {
                  item: "Dedicated company profile on the Innovate Finance membership directory.",
                },
                {
                  item: "Access to a network of fellow Founders and C-level executives through regular member meet-ups.",
                },
                {
                  item: "Access to Innovate Finance member and community portal.",
                },
                {
                  item: "Access to Innovate Finance policy and regulatory webinars and events.",
                },
                {
                  item: "Access to regulatory and policy insights from Innovate Finance policy team.",
                },
              ],
            },
            {
              ptag: `For the full list of benefits, please get in touch.`,
            },
          ],
          buttonName: "BECOME A MEMBER",
          buttonLink: "/membership/fintech/",
        },
        {
          title: "Scale Up",
          description: [
            {
              ptag: "Series A FinTechs with revenues and funding raised under £10m",
            },
            {
              ptag: `<b>Highlights of membership include all Startup benefits plus;</b>`,
            },
            {
              list: [
                {
                  item: "Access to Innovate Finance Talent and Skills Programme, including Skills Showcase and Careers Fair.",
                },
                {
                  item: "Access to institutional, asset management and CVC sessions and Partnership days.",
                },
              ],
            },
            {
              ptag: `For the full list of benefits, please get in touch.`,
            },
          ],
          buttonName: "Enquire about Membership",
          buttonLink: "/membership/fintech/",
        },
        {
          title: "High Growth",
          description: [
            { ptag: "FinTechs with revenues and funding raised over £10m" },
            {
              ptag: "<b>Highlights of membership include all Startup & Scaleup benefits plus</b>",
            },
            {
              list: [
                {
                  item: "Access to Innovate Finance’s international programme.",
                },
                {
                  item: "Participation in developing policy positions including government, parliamentary and regulatory consultation responses on relevant issues. This can include participation in both ad hoc and more regular policy groups.",
                },
              ],
            },
            {
              ptag: `For the full list of benefits, please get in touch.`,
            },
          ],
          buttonName: "Enquire about Membership",
          buttonLink: "/membership/fintech/",
        },
      ],
    },
    {
      title: "Institutional Membership",
      description:
        "Institutional membership brings you into our network, opening doors for you to meet potential FinTech partners, other incumbent financial institutions, and policy-makers from the UK and abroad. We will help you navigate the FinTech ecosystem and provide detailed insights on the areas of most interest to you, supporting you on your innovation and digital transformation journey. We will involve you in our campaigns to create a global financial services sector that is more transparent, more sustainable and more inclusive.",
      buttonName: "ENQUIRE ABOUT MEMBERSHIP",
      buttonLink: "/membership/institutional/",
    },
    {
      title: "Partners and Vendors",
      description:
        "As a Partner/Vendor member of Innovate Finance, you will be part of one of the world’s most vibrant FinTech networks. We will provide you with a platform to grow your visibility in the FinTech sector. We will help position you as an expert advisor in this space and enhance your reputation as a thought-leader driving the wider financial services innovation agenda.",

      buttonName: "ENQUIRE ABOUT MEMBERSHIP",
      buttonLink: "/membership/partner/",
    },
    {
      title: "Investor Overview",
      description:
        "Investor membership provides connections for you to our FinTech members and your peers. We will help you meet FinTech companies with which you want to build relationships, provide a platform for you to talk about your fund, and access to the valuable insights and research produced by Innovate Finance and our network.",
      buttonName: "ENQUIRE ABOUT MEMBERSHIP",
      buttonLink: "/membership/investor/",
    },
    {
      title: "Hubs Overview",
      description:
        "Hub membership brings you into our network, opening doors for you to meet FinTech companies, financial institutions, investors and policy-makers from the UK and abroad. We will help you navigate the FinTech ecosystem and provide detailed insights on the areas of most interest to you. We will involve you in our annual programmes that have a global focus, including UK FinTech Week.",
      buttonName: "ENQUIRE ABOUT MEMBERSHIP",
      buttonLink: "/membership/hubs/",
    },
    {
      title: "RegTech UK",
      description:
        "RegTech UK members are firms that provide technologies and solutions that facilitate the delivery of regulatory requirements more efficiently and effectively than existing capabilities. While RegTech is closely associated with financial services and FinTech, its applicability extends to any regulated industry.",
      buttonName: "ENQUIRE ABOUT MEMBERSHIP",
      buttonLink: "/regtechuk",
    },
    {
      title: "Digital Pound Foundation",
      description:
        "The Digital Pound Foundation brings together a diverse range of members and partners, from corporates to startups, as well as leading experts from the financial, technology, and regulatory sectors. The DPF’s active membership reflects a wealth of expertise and perspectives, ensuring a balanced approach to the complex challenges and opportunities posed by digital money.",
      buttonName: "ENQUIRE ABOUT MEMBERSHIP",
      buttonLink: "/digitalpoundfoundation",
    },
  ],
  buttonName: "want to know more? Get in touch",
  buttonLink: "/contact/",
};

const Becomeamember = () => {

  return (
    <>
      <Head>
      </Head>
      <div itemprop="mainEntityOfPage">
        <Spacer height="40px" />
        <BeAPartOfCommunity data={sectionOne} />
        <Spacer height="48px" ipadHeight="48px" mobileHeight="48px" />
        <div className="become-twocol-spacer-desktop-only">
          <Spacer height="77px" />
        </div>
        <BecomeTwocolSection
          data={twocolSectionData1}
          className="become-twocol-1"
        />
        <BecomeTwocolSection
          data={twocolsectiondata2}
          className="become-twocol-2"
        />
        <BecomeTwocolSection
          data={twocolsectiondata3}
          className="become-twocol-3"
        />
        <BecomeTwocolSection
          data={twocolsectiondata4}
          className="become-twocol-4"
        />
        <div className="become-twocol-spacer-desktop-only">
          <Spacer height="50px" />
        </div>
        <BecomeContentSlider data={sliderData} />
        <BecomeTabSection data={tabsData} />
      </div>
    </>
  );
};

export default Becomeamember;

Becomeamember.getLayout = page => <Layout>{page}</Layout>;


