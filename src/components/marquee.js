import { useState } from "react";
export default function Marquee() {
  const [closed, setClosed] = useState(false);
  return (
    <div className="absolute top-0 flex w-full text-xs font-light bg-black">
      <div class="relative flex py-1 overflow-x-hidden flex-row w-full">
        <div class="flex whitespace-nowrap w-full gap-12  text-center">
          <span class="flex-1">
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
