import type { ReactElement } from "react";
import Head from "next/head";
import Layout from "@components/layout";
import Home from "@pages/home";
import { initializeApollo } from "lib/gql/apolloClient";
import { customerProps, ListZellerCustomers } from "lib/gql/customersQuery";

const HomePage = ({ customers }: customerProps) => {
  return (
    <>
      <Head>
        <title>Josh Mapley | Zeller code test.</title>
        <meta name="description" content="Code test for Zeller" />
        <meta name="robots" content="index, nofollow" />
      </Head>
      <Home customers={customers} />
    </>
  );
};

HomePage.getLayout = function getLayout(page: ReactElement) {
  return <Layout {...page.props}>{page}</Layout>;
};

export const getStaticProps = async () => {
  const client = initializeApollo();
  const {
    data: {
      listZellerCustomers: { items },
    },
  } = await client.query({ query: ListZellerCustomers });
  return {
    props: {
      customers: items,
    },
  };
};

export default HomePage;
