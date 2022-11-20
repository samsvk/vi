import Pricing from "../components/pricing";
import { useState } from "react";
export default function Information() {
  const [price, setPrice] = useState(0);
  return (
    <div className="w-full h-full min-h-screen text-black bg-white min-w-screen font-inter">
      <div className="flex flex-col max-w-2xl gap-10 py-12 mx-auto">
        <section>
          <h1 className="text-[28px] font-medium tracking-tighter leading-loose">
            Vi's Commission Information
          </h1>
          <p className="text-sm font-medium leading-snug tracking-tight opacity-40">
            Please use the below pricing calculator for a rough estimate on your
            commission price. Using this calcualtor allows you and I to have an
            understanding of your commission desires and allows me to accurately
            create what you're looking for.
          </p>
        </section>

        <section>
          <Pricing setPrice={setPrice} />
        </section>
      </div>
    </div>
  );
}
