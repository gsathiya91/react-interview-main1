import * as React from "react";
import Layout from "../../components/Layout";
import Spacer from "../../components/Spacer";
import Head from "next/head";
import UkFintechForm from "../../components/UkFintechForm";


const formData = {
  title: "<h3>Get Involved</h3>",
  id: "5169784",
  formId: "f31f2e8d-ca67-4023-b9d0-c95365d37cf5",
};

const Fintechasaforceforgood = () => {


  return (
    <div className="fintech-as-aforce-for-good">
      <>
        <Head>
        </Head>

        <div itemprop="mainEntityOfPage">
          <Spacer height={"80px"} mobileHeight={"20px"} ipadHeight={"40px"} />

          <UkFintechForm data={formData} id="getinvolved" className="fffg-form" />
          <Spacer height="30px" />

        </div>

      </>
    </div>
  );
};

export default Fintechasaforceforgood;

Fintechasaforceforgood.getLayout = page => (
  <Layout bgColor="#fcfafa">{page}</Layout>
);

