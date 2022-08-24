import Image from "next/image";
import Header from "../components/header";
import Marquee from "../components/marquee";
import Head from "next/head";
import Grid from "../components/grid";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home — VIVIXSTAR</title>
      </Head>
      <Marquee />
      <Header />
      <div className="max-w-[1800px] w-full mx-auto mb-10 px-3">
        <Grid />
      </div>
    </>
  );
}
