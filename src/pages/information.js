import React from "react";
import Head from "next/head";
import Image from "next/image";
import Header from "../components/header";

const Information = () => {
  return (
    <>
      <Head>
        <title>Information — VIVIXSTAR</title>
      </Head>
      <div>
        <Header />
        <div className="max-w-[800px] mx-auto flex flex-col gap-12 my-12 w-full">
          <div className="flex gap-12">
            <aside className="mr-10 max-w-max whitespace-nowrap min-w-[160px]">
              <h1 className="relative text-xs font-light uppercase">
                01 / Terms of Service
              </h1>
            </aside>
            <section className="w-full">
              <ul className="flex flex-col gap-2 text-xs font-light list-decimal">
                <li>Payment Upfront</li>
                <li>No Backseating / Pressuring</li>
                <li>Preferably 90% Creative Freedom</li>
                <li>
                  Please don't request that I use the style of
                  another artist. I have my own style and
                  techniques.
                </li>
                <li>
                  Every piece of additional work will cost extra
                  depending on time taken to complete.
                </li>
                <li>
                  Once I complete the work, I will send
                  everything via Email please provide your email
                  in the order for easier reference.
                </li>
                <li>
                  You cannot sell nor re-distribute the
                  commissioned work for commercial use unless
                  otherwise discussed.
                </li>
                <li>
                  Please credit my work in any post you make
                  regarding the commission.
                </li>
                <li>
                  I may stream making your commission via stream.
                  Please let me know beforehand if you'd prefer
                  your commission to be private.
                </li>
                <li>
                  Please do not request a deadline and put stress
                  ontop of me while I work. I want to provide the
                  highest quality commissions I can the average
                  wait time for a finished piece is 3/4 weeks.
                </li>
                <li>
                  I will not accept any commissions that I do not
                  feel comfortable drawing.
                </li>
              </ul>
            </section>
          </div>
          <div className="flex gap-12">
            <aside className="mr-10 max-w-max whitespace-nowrap  min-w-[160px]">
              <h1 className="relative text-xs font-light uppercase">
                02 / Pricing
              </h1>
            </aside>
            <section className="w-full">
              <div className="flex flex-col max-h-full min-h-screen gap-4 py-10 ">
                <div className="flex-1 h-full">
                  <div className="relative min-h-[200px] max-h-[200px] max-w-[160px] w-full overflow-hidden ">
                    <Image
                      quality={100}
                      loading="eager"
                      priority={true}
                      layout="fill"
                      objectPosition={"top"}
                      objectFit="contain"
                      src={"/vi/14.jpg"}
                    />
                  </div>
                </div>
                <div className="flex-1 h-full">
                  <div className="relative min-h-[200px] max-h-[200px] max-w-[160px] w-full overflow-hidden ">
                    <Image
                      quality={100}
                      loading="eager"
                      priority={true}
                      layout="fill"
                      objectPosition={"top"}
                      objectFit="contain"
                      src={"/vi/4.jpeg"}
                    />
                  </div>
                </div>
                <div className="flex-1 h-full">
                  <div className="relative min-h-[200px] max-h-[200px] max-w-[160px] w-full overflow-hidden ">
                    <Image
                      quality={100}
                      loading="eager"
                      priority={true}
                      layout="fill"
                      objectPosition={"top"}
                      objectFit="contain"
                      src={"/vi/2.jpeg"}
                    />
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default Information;
