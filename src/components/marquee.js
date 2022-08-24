import { useState } from "react";
export default function Marquee() {
  const [closed, setClosed] = useState(false);
  return (
    <div className="absolute top-0 flex w-full text-xs font-light bg-black">
      <div className="relative flex flex-row w-full py-1 overflow-x-hidden">
        <div className="flex w-full gap-12 text-center whitespace-nowrap">
          <span className="flex-1">
            Commissions:{" "}
            {!closed ? (
              <span className="text-[#b32733]">Closed</span>
            ) : (
              <span className="text-[#1e9e35]">Open</span>
            )}
          </span>
        </div>
      </div>
    </div>
  );
}
