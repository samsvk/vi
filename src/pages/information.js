import Head from "next/head";
import Header from "../components/header";
import Marquee from "../components/marquee";
import { IoMdCheckmark } from "react-icons/io";
import { useState } from "react";
import { SOCIALS } from "../static";

const Information = () => {
  const [agree, setAgree] = useState(false);
  return (
    <>
      <Head>
        <title>Information — VIVIXSTAR</title>
      </Head>
      <div>
        <Marquee />
        <Header />
        <div className="max-w-[800px] mx-auto flex flex-col gap-12 my-12 w-full ">
          <div className="flex-col gap-5 mx-10 md:flex">
            <aside className="mr-10 max-w-max whitespace-nowrap">
              <h1 className="relative mb-3 text-xs font-light uppercase md:mb-0">
                01 / Terms of Service
              </h1>
            </aside>
            <section className="w-full">
              <ul className="flex flex-col gap-2 text-xs font-light">
                <li>1. Payment Upfront</li>
                <li>2. No Backseating / Pressuring</li>
                <li>3. Preferably 90% Creative Freedom</li>
                <li>
                  4. Please don't request that I use the style of
                  another artist. I have my own style and
                  techniques.
                </li>
                <li>
                  5. Every piece of additional work will cost
                  extra depending on time taken to complete.
                </li>
                <li>
                  6. Once I complete the work, I will send
                  everything via Email please provide your email
                  in the order for easier reference.
                </li>
                <li>
                  7. You cannot sell nor re-distribute the
                  commissioned work for commercial use unless
                  otherwise discussed.
                </li>
                <li>
                  8. Please credit my work in any post you make
                  regarding the commission.
                </li>
                <li>
                  9. I may stream making your commission via
                  stream. Please let me know beforehand if you'd
                  prefer your commission to be private.
                </li>
                <li>
                  10. Please do not request a deadline and put
                  stress ontop of me while I work. I want to
                  provide the highest quality commissions I can
                  the average wait time for a finished piece is
                  3/4 weeks.
                </li>
                <li>
                  11. I will not accept any commissions that I do
                  not feel comfortable drawing.
                </li>
                <li>
                  12. Collages and Dakimakuras count as multiple
                  units of the desired type.
                </li>
                <li>
                  13. Additional cost will be added if the
                  artwork should be extra clean for printing or
                  special use cases.
                </li>
              </ul>
            </section>
          </div>
          <div className="flex flex-col gap-5 mx-10 ">
            <aside className="mr-10 max-w-max whitespace-nowrap">
              <h1 className="relative mb-3 text-xs font-light uppercase md:mb-0">
                02 / Pricing
              </h1>
            </aside>
            <section className="flex flex-col w-full gap-5 md:flex-row">
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
              <div className="flex flex-col justify-center flex-1 p-3 mt-3 border md:mt-0 border-white/10">
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
              <div className="flex flex-col justify-center flex-1 p-3 mt-3 border md:mt-0 border-white/10">
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
          <div className="flex-col gap-5 mx-10 md:flex">
            <aside className="mr-10 max-w-max whitespace-nowrap ">
              <h1 className="relative mb-3 text-xs font-light uppercase md:mb-0">
                03 / Contact Me
              </h1>
            </aside>
            <section className="flex flex-col w-full gap-3">
              <p className="items-center inline-block mt-0 text-xs font-light md:inline-flex">
                <span className="relative block mr-2">
                  I acknowledge the above conditions and pricing:
                  <span
                    onClick={() => setAgree((prev) => !prev)}
                    className={`absolute bottom-0 ml-1 h-[13px] w-[13px] border border-white/10 hover:cursor-pointer hover:border-white/40 duration-200 inline-flex items-center justify-center ${
                      agree &&
                      "border-[#1e9e35] bg-[#181f19] text-[#35f558]"
                    }`}
                  >
                    {agree && <IoMdCheckmark />}
                  </span>
                </span>
              </p>

              <div className="mt-5 text-xs font-light">
                <ul
                  className={`will-change-transform flex flex-col gap-2 duration-500 ${
                    agree
                      ? "pointer-events-auto opacity-1 transform-y-[0px]"
                      : "pointer-events-none opacity-0 translate-y-[15px]"
                  }`}
                >
                  {SOCIALS.slice(1, 4).map((social, index) => {
                    return (
                      <li className="w-max" key={index}>
                        <a
                          href={social.url}
                          target="_blank"
                          rel="noreferrer"
                          className={`hover:cursor-pointer 
                          relative block after:absolute after:h-[1px] after:content-[''] 
                          after:bottom-[-1px] after:left-0 after:bg-white after:w-0 hover:after:w-full after:duration-150 whitespace-nowrap`}
                        >
                          {social.name}: {social.at}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default Information;
