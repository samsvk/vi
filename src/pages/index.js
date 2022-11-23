import Image from "next/image";
import Header from "../components/header";
import Marquee from "../components/marquee";
import Head from "next/head";
import Grid from "../components/grid";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home — VIVIXSTAR | Digital Artist</title>
        <meta
          name="description"
          content="VIVIXSTAR is a digital artist with world-famous clients and continues to grow her artistic style daily on her Twitch stream while handling commissions."
        />
      </Head>
      {/* <Marquee /> */}
      <Header />
      <div className="max-w-[1800px] w-full mx-auto mb-10 px-3">
        <Grid />
      </div>
    </>
  );
}
