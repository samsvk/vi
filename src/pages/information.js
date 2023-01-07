import Pricing from "../components/pricing";
import Socials from "../components/socials";
import FAQ from "../components/faq";
import Header from "../components/header";
import { useState } from "react";
import { SOCIALS } from "../static";
export default function Information() {
  const [price, setPrice] = useState(0);
  return (
    <div className="w-full h-full min-h-screen text-black bg-white min-w-screen">
      <Header />
      <div className="flex flex-col max-w-2xl gap-12 px-5 py-12 mx-auto font-inter">
        <section className="flex flex-col">
          <h1 className="text-[28px] font-medium tracking-tighter leading-none mb-0">
            FAQ
          </h1>
          <FAQ />
        </section>
        <section className="flex flex-col">
          <h1 className="text-[28px] font-medium tracking-tighter leading-none mb-5">
            Pricing Calculator: ${price}
          </h1>
          <p className="text-sm font-medium leading-snug tracking-tight opacity-40">
            Use the below pricing calculator for a rough estimate on your commission
            price. Apply the correct variables for your commission so I have can have
            a clear understanding of the details you desire.
          </p>
          <Pricing setPrice={setPrice} />
        </section>
      </div>
    </div>
  );
}
