import Image from "next/image";
import Header from "../components/header";
import Marquee from "../components/marquee";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home — VIVIXSTAR</title>
      </Head>
      <Marquee />
      <Header />
      <div className="max-w-[1800px] w-full mx-auto mb-10">
        <div className="grid max-h-full min-h-screen grid-cols-6 grid-rows-5 gap-4 py-10">
          <div className="col-span-1 row-span-5 overflow-hidden">
            <div className="relative h-full max-w-full mx-auto my-0">
              <Image
                quality={100}
                loading="eager"
                priority={true}
                layout="fill"
                objectPosition={"top"}
                objectFit="cover"
                src={"/vi/1.jpeg"}
              />
            </div>
          </div>

          <div className="col-span-1 row-span-2 overflow-hidden">
            <div className="relative h-full max-w-full mx-auto my-0">
              <Image
                quality={100}
                loading="eager"
                priority={true}
                layout="fill"
                objectPosition={"top"}
                objectFit="cover"
                src={"/vi/14.jpg"}
              />
            </div>
          </div>

          <div className="col-span-1 row-span-3 overflow-hidden">
            <div className="relative h-full max-w-full mx-auto my-0">
              <Image
                quality={100}
                loading="eager"
                priority={true}
                layout="fill"
                objectPosition={"top"}
                objectFit="cover"
                src={"/vi/2.jpeg"}
              />
            </div>
          </div>

          <div className="col-span-1 row-span-4 overflow-hidden">
            <div className="relative h-full max-w-full mx-auto my-0">
              <Image
                quality={100}
                loading="eager"
                priority={true}
                layout="fill"
                objectPosition={"top"}
                objectFit="cover"
                src={"/vi/3.jpeg"}
              />
            </div>
          </div>

          <div className="col-span-1 row-span-3 overflow-hidden">
            <div className="relative h-full max-w-full mx-auto my-0">
              <Image
                quality={100}
                loading="eager"
                priority={true}
                layout="fill"
                objectPosition={"top"}
                objectFit="cover"
                src={"/vi/4.jpeg"}
              />
            </div>
          </div>
          <div className="col-span-1 row-span-3 overflow-hidden">
            <div className="relative h-full max-w-full mx-auto my-0">
              <Image
                quality={100}
                loading="eager"
                priority={true}
                layout="fill"
                objectPosition={"top"}
                objectFit="cover"
                src={"/vi/5.jpeg"}
              />
            </div>
          </div>
          <div className="col-span-1 row-span-3 overflow-hidden">
            <div className="relative h-full max-w-full mx-auto my-0">
              <Image
                quality={100}
                loading="eager"
                priority={true}
                layout="fill"
                objectPosition={"top"}
                objectFit="cover"
                src={"/vi/6.jpeg"}
              />
            </div>
          </div>

          <div className="col-span-1 row-span-2 overflow-hidden">
            <div className="relative h-full max-w-full mx-auto my-0">
              <Image
                quality={100}
                loading="eager"
                priority={true}
                layout="fill"
                objectPosition={"top"}
                objectFit="cover"
                src={"/vi/8.jpeg"}
              />
            </div>
          </div>

          <div className="col-span-2 row-span-2 overflow-hidden">
            <div className="relative h-full max-w-full mx-auto my-0">
              <Image
                quality={100}
                loading="eager"
                priority={true}
                layout="fill"
                objectPosition={"top"}
                objectFit="cover"
                src={"/vi/9.jpeg"}
              />
            </div>
          </div>
          <div className="col-span-1 row-span-1 overflow-hidden">
            <div className="relative h-full max-w-full mx-auto my-0">
              <Image
                quality={100}
                loading="eager"
                priority={true}
                layout="fill"
                objectPosition={"middle"}
                objectFit="cover"
                src={"/vi/13.jpeg"}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
