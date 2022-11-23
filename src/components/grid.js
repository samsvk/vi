import { WORK as Data } from "../static";
import Image from "next/image";
import useWindowSize from "./useWindowSize";
export default function Grid() {
  const size = useWindowSize();
  return (
    <>
      {size.width > 770 ? (
        <div className="grid max-h-full min-h-[91vh] grid-cols-6 grid-rows-5 gap-x-3 gap-y-1 py-10">
          {Data.map((item, index) => (
            <div
              key={index}
              className={`${item.pos.col} ${item.pos.row} overflow-hidden text-black`}
            >
              <h1 className="mb-1 text-xs font-light uppercase">
                0{index + 1} / {item.name}
              </h1>
              <div className="relative h-full max-w-full mx-auto my-0">
                <Image
                  quality={100}
                  loading="eager"
                  priority={true}
                  layout="fill"
                  objectFit="cover"
                  src={`/vi/${item.url}`}
                />
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="grid max-h-full min-h-[120vh] md:min-h-[91vh] grid-cols-3 grid-rows-[repeat(16,_minmax(0,1fr))] gap-x-3 gap-y-1 pt-10 ">
          {Data.map((item, index) => (
            <div
              key={index}
              className={`${item?.mpos?.col} ${item?.mpos?.row} overflow-hidden`}
            >
              <h1 className="mb-1 text-xs font-light uppercase">
                0{index + 1} / {item.name}
              </h1>
              <div className="relative h-full max-w-full mx-auto my-0">
                <Image
                  quality={100}
                  loading="eager"
                  priority={true}
                  layout="fill"
                  objectFit="cover"
                  src={`/vi/${item.url}`}
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
