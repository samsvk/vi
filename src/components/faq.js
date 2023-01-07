import { BsCurrencyDollar } from "react-icons/bs";
import { useState } from "react";
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";

const FAQ_DATA = [
  {
    title: "Payments",
    description:
      "PayPal is the only transaction service I use for payments. Payments must be paid in full before commission work begins. Depending on the size of comission, payment structures/plans could be considered. I DO NOT WORK FOR FREE UNDER ANY CIRCUMSTANCE",
  },
  {
    title: "Comission Progress/Process",
    description:
      "Please provide references for your commission once accepted. Please refrain from extreme detail as I prefer having 90% creativity a small concept/brief idea is enough for me. Once your commission is accepted, it will be finished in a maximum time period of 3 weeks. I will transfer the final product via Wetransfer.",
  },
  {
    title: "Uncomfortable Requests",
    description:
      "I hold the right to reject any request that I deem Hardcore NSFW, gore, violent, hateful etc.",
  },
  {
    title: "Refund Policy",
    description:
      "All orders are final and once payment complete. (exceptions can be made if NO work has been done)",
  },
  {
    title: "Private Commissions",
    description:
      "I stream all my commissions on Twitch however, I am happy to keep commissions private if requested and agreed too before payment has been made.",
  },
];

export const Item = ({ item }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex flex-col items-center py-2 border-b border-gray-100">
      <div className="flex w-full">
        <h1 className="text-sm font-medium leading-snug tracking-tight whitespace-nowrap opacity-40">
          {item.title}
        </h1>
        <button
          onClick={() => setOpen(!open)}
          className="block ml-auto text-sm font-medium leading-snug tracking-tight opacity-40"
        >
          {open ? (
            <AiOutlineMinusCircle size={18} />
          ) : (
            <AiOutlinePlusCircle size={18} />
          )}
        </button>
      </div>
      {open && (
        <p className="mt-2 mr-auto text-sm font-medium leading-snug tracking-tight opacity-40">
          — {item.description}
        </p>
      )}
    </div>
  );
};

export default function FAQ() {
  return (
    <div className="border-t border-[#f0f0f0] mt-6">
      {FAQ_DATA.map((faq, index) => (
        <Item key={index} item={faq}></Item>
      ))}
    </div>
  );
}
