import Image from "next/image";
import Header from "../components/header";
import Marquee from "../components/marquee";
import Head from "next/head";
import Data from "../static";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home — VIVIXSTAR</title>
      </Head>
      <Marquee />
      <Header />
      <div className="max-w-[1800px] w-full mx-auto mb-10">
        <div className="grid max-h-full min-h-[91vh] grid-cols-6 grid-rows-5 gap-x-3 gap-y-1 py-10">
          {Data.map((item, index) => (
            <div
              key={index}
              className={`${item.pos.col} ${item.pos.row} overflow-hidden`}
            >
              <h1 className="mb-1 text-xs font-light uppercase">
                0{index + 1} / {item.name}
              </h1>
              <div className="relative h-full max-w-full mx-auto my-0">
                <Image
                  quality={100}
                  loading="eager"
                  priority={true}
                  layout="fill"
                  objectFit="cover"
                  src={`/vi/${item.url}`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
