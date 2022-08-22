import Image from "next/image";
import Header from "../components/header";

export default function Home() {
  return (
    <>
      <Header />
      <div className="max-w-[1800px] w-full mx-auto mb-10">
        <div class="grid grid-cols-6 gap-4 grid-rows-5 min-h-screen max-h-full py-10">
          <div class="col-span-1 row-span-5 overflow-hidden">
            <div className="relative h-full max-w-full mx-auto my-0">
              <Image
                quality={100}
                loading="eager"
                priority={true}
                layout="fill"
                objectPosition={"top"}
                objectFit="cover"
                src={"/vi/1.jpeg"}
              />
            </div>
          </div>

          <div class="col-span-1 row-span-2 overflow-hidden">
            <div className="relative h-full max-w-full mx-auto my-0">
              <Image
                quality={100}
                loading="eager"
                priority={true}
                layout="fill"
                objectPosition={"top"}
                objectFit="cover"
                src={"/vi/14.jpg"}
              />
            </div>
          </div>

          <div class="col-span-1 row-span-3  overflow-hidden">
            <div className="relative h-full max-w-full mx-auto my-0">
              <Image
                quality={100}
                loading="eager"
                priority={true}
                layout="fill"
                objectPosition={"top"}
                objectFit="cover"
                src={"/vi/2.jpeg"}
              />
            </div>
          </div>

          <div class="col-span-1 row-span-4  overflow-hidden">
            <div className="relative h-full max-w-full mx-auto my-0">
              <Image
                quality={100}
                loading="eager"
                priority={true}
                layout="fill"
                objectPosition={"top"}
                objectFit="cover"
                src={"/vi/3.jpeg"}
              />
            </div>
          </div>

          <div class="col-span-1 row-span-3  overflow-hidden">
            <div className="relative h-full max-w-full mx-auto my-0">
              <Image
                quality={100}
                loading="eager"
                priority={true}
                layout="fill"
                objectPosition={"top"}
                objectFit="cover"
                src={"/vi/4.jpeg"}
              />
            </div>
          </div>
          <div class="col-span-1 row-span-3 overflow-hidden">
            <div className="relative h-full max-w-full mx-auto my-0">
              <Image
                quality={100}
                loading="eager"
                priority={true}
                layout="fill"
                objectPosition={"top"}
                objectFit="cover"
                src={"/vi/5.jpeg"}
              />
            </div>
          </div>
          <div class="col-span-1 row-span-3 overflow-hidden">
            <div className="relative h-full max-w-full mx-auto my-0">
              <Image
                quality={100}
                loading="eager"
                priority={true}
                layout="fill"
                objectPosition={"top"}
                objectFit="cover"
                src={"/vi/6.jpeg"}
              />
            </div>
          </div>

          <div class="col-span-1 row-span-2 overflow-hidden">
            <div className="relative h-full max-w-full mx-auto my-0">
              <Image
                quality={100}
                loading="eager"
                priority={true}
                layout="fill"
                objectPosition={"top"}
                objectFit="cover"
                src={"/vi/8.jpeg"}
              />
            </div>
          </div>

          <div class="col-span-2 row-span-2 overflow-hidden">
            <div className="relative h-full max-w-full mx-auto my-0">
              <Image
                quality={100}
                loading="eager"
                priority={true}
                layout="fill"
                objectPosition={"top"}
                objectFit="cover"
                src={"/vi/9.jpeg"}
              />
            </div>
          </div>
          <div class="col-span-1 row-span-1 overflow-hidden">
            <div className="relative h-full max-w-full mx-auto my-0">
              <Image
                quality={100}
                loading="eager"
                priority={true}
                layout="fill"
                objectPosition={"middle"}
                objectFit="cover"
                src={"/vi/13.jpeg"}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
