import { AiOutlineTwitter } from "react-icons/ai";
import { FaDiscord } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoLogoTwitch } from "react-icons/io";
export default function Header() {
  return (
    <div className="max-w-[270px] w-full flex flex-col items-center justify-center mx-auto text-center mt-10 relative">
      <h1 className="font-['Crimson_Text'] text-[50px] tracking-wider relative">
        VIVIXSTAR <span className="absolute">*</span>
      </h1>
      <ul className="pl-[12px] absolute bottom-0 flex items-start w-full gap-5 text-left font-light text-xs">
        <li className="w-[50%]">INFORMATION</li>
        <li className="text-right w-[50%] flex text-[14px]relative justify-end gap-1">
          <a
            href={`https://twitch.tv/vivixstar`}
            target="_blank"
            rel="noreferrer"
          >
            <IoLogoTwitch className="" />
          </a>
          <a
            href={`https://discord.com`}
            target="_blank"
            rel="noreferrer"
          >
            <FaDiscord className="" />
          </a>
          <a
            href={`https://twitter.com/vivixstarvtuber`}
            target="_blank"
            rel="noreferrer"
          >
            <AiOutlineTwitter className="" />
          </a>
          <a
            href={`mailto:green.tea.leaf97@gmail.com`}
            target="_blank"
            rel="noreferrer"
          >
            <MdEmail className="" />
          </a>
        </li>
      </ul>
    </div>
  );
}
