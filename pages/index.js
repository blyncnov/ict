import Head from "next/head";
import PreHomeDisplay from "../components/preHome";

export default function Home() {
  return (
    <>
      <Head>
        <title>ICT decentralized dashboard</title>
        <meta
          name="ICT decentralized dashboard"
          content="ICT decentralized dashboard"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PreHomeDisplay />
    </>
  );
}
