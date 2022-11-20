import Pricing from "../components/pricing";
import Socials from "../components/socials";
import { useState } from "react";
export default function Information() {
  const [price, setPrice] = useState(0);
  return (
    <div className="w-full h-full min-h-screen text-black bg-white min-w-screen font-inter">
      <div className="flex flex-col max-w-2xl gap-8 py-12 mx-auto">
        <section>
          <h1 className="text-[28px] font-medium tracking-tighter leading-loose">
            Price Calculator: <span className="">${price}</span>
          </h1>
          <p className="text-sm font-medium leading-snug tracking-tight opacity-40">
            Please use the below pricing calculator for a rough estimate on your
            commission price. Using this calcualtor allows you and I to have an
            understanding of your commission desires and allows me to accurately
            create what you're looking for.
          </p>
          <Pricing setPrice={setPrice} />
        </section>

        <section>
          <h1 className="text-[28px] font-medium tracking-tighter leading-loose">
            Contact Information
          </h1>
          <p className="text-sm font-medium leading-snug tracking-tight opacity-40">
            If you're interested in commissioning, please contact me via any of the
            following social channels.
          </p>
          <Socials />
        </section>
      </div>
    </div>
  );
}
