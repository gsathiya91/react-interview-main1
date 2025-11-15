import React from "react";
import Layout from "../components/Layout";
import Head from "next/head";
import HeroSection from "../components/HeroSection";


const HeroSectionData = {
  mainTitle: `<h1>WHOOPS!</h1><span>404</span>`,
  description: `It looks like you are lost! Try searching here`,
  placeholder: "Search site",
};
const custom404 = () => {
  return (
    <>
      <Head>
      </Head>
      <HeroSection
        className={"custom404-Hero-section"}
        data={HeroSectionData}
        noGrid
      />
    </>
  );
};

export default custom404;

custom404.getLayout = page => <Layout>{page}</Layout>;
