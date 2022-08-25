import { useState } from "react";
import useSWR from "swr";
export default function Marquee() {
  async function fetcher(input, init) {
    const res = await fetch(input, init);
    return res.json();
  }

  const data = useSWR("/api/scrape", fetcher, {
    loadingTimeout: 5000,
    errorRetryCount: 30000,
  });
  console.log(data);

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
