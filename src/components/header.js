import Link from "next/link";
import { useRouter } from "next/router";
import { SOCIALS } from "../static";

export default function Header() {
  const router = useRouter();
  let route = router.pathname.replace(/[^\w\s]/gi, "");
  return (
    <div className="max-w-[270px] w-full flex flex-col items-center justify-center mx-auto text-center mt-10 relative">
      <h1 className="font-['Crimson_Text'] text-[50px] tracking-wider relative">
        VIVIXSTAR <span className="absolute">*</span>
      </h1>
      <ul className="pl-[12px] absolute bottom-0 flex items-start w-full gap-5 text-left font-light text-xs">
        <li className="w-max">
          <Link href={`${route === "information" ? "/" : "information"}`}>
            <span className="relative transition-[cubic-bezier(.63,.04,.34,0.92)] duration-150 block hover:cursor-pointer after:absolute after:h-[1px] after:content-[''] after:bottom-[-1px] after:left-0 after:bg-white after:w-0 hover:after:w-full after:duration-150 whitespace-nowrap">
              {route === "information" ? "Recent Work" : "Information"}
            </span>
          </Link>
        </li>
        <li className="text-right w-[100%] flex text-[14px]relative justify-end gap-1">
          {SOCIALS.map((social, index) => (
            <a
              key={index}
              className="duration-200 hover:opacity-50"
              href={social.url}
              target="_blank"
              rel="noreferrer"
            >
              {social.icon}
            </a>
          ))}
        </li>
      </ul>
    </div>
  );
}
