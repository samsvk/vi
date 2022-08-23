import React from "react";
import Head from "next/head";
import Header from "../components/header";
import Link from "next/link";

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
            <aside className="mr-10 max-w-max whitespace-nowrap  min-w-[130px]">
              <h1 className="relative text-xs font-light uppercase">
                02 / Pricing
              </h1>
            </aside>
            <section className="flex w-full gap-3">
              <div className="flex flex-col justify-center flex-1 p-3 border border-white/10">
                <h2 className="relative pb-2 text-xs font-light uppercase border-b border-white/10">
                  Bust/Icon{" — "}
                  <span className="font-bold tracking-wider">
                    $75
                  </span>
                </h2>
                <p className="mt-2 text-xs font-light">
                  Portrait of the character down to the
                  shoulders.
                </p>
              </div>
              <div className="flex flex-col justify-center flex-1 p-3 border border-white/10">
                <h2 className="relative pb-2 text-xs font-light uppercase border-b border-white/10">
                  Half Body{" — "}
                  <span className="font-bold tracking-wider">
                    $120
                  </span>
                </h2>

                <p className="mt-2 text-xs font-light">
                  Character illustration from head down to the
                  waist.
                </p>
              </div>
              <div className="flex flex-col justify-center flex-1 p-3 border border-white/10">
                <h2 className="relative pb-2 text-xs font-light uppercase border-b border-white/10">
                  Full Body{" — "}
                  <span className="font-bold tracking-wider">
                    $150
                  </span>
                </h2>

                <p className="mt-2 text-xs font-light">
                  Full body illustration of the character from
                  the head down to the legs.
                </p>
              </div>
            </section>
          </div>
          <div className="flex gap-12">
            <aside className="mr-10 max-w-max whitespace-nowrap  min-w-[130px]">
              <h1 className="relative text-xs font-light uppercase">
                03 / Extra Info
              </h1>
            </aside>
            <section className="flex flex-col w-full gap-3">
              <p className="mt-0 text-xs font-light">
                Collages and Dakimakuras count as multiple units
                of the desired type.
              </p>
              <p className="mt-2 text-xs font-light">
                Additional cost will be added if the artwork
                should be extra clean for printing or special use
                cases.
              </p>
              <p className="mt-2 text-xs font-light">
                Listed prices are for illustrations made with my
                usual line/coloring quality and style. You can
                see the examples by clicking{" "}
                <Link href="/">here</Link>
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default Information;
