import { FaDiscord, FaTwitter } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { RiTwitchFill } from "react-icons/ri";
const SOCIALS_DATA = [
  {
    name: "Email",
    description: "My Preferred point of contact.",
    url: "",
    icon: <AiOutlineMail />,
  },
  {
    name: "Discord",
    description: "Join my community with over 1,000+ members.",
    url: "",
    icon: <FaDiscord />,
  },
  {
    name: "Twitter",
    description: "Follow my twitter for my comission status.",
    url: "",
    icon: <FaTwitter />,
  },
  {
    name: "Twitch",
    description: "I stream my commissions on Twitch.tv",
    url: "",
    icon: <RiTwitchFill />,
  },
];

export default function Socials() {
  return (
    <div className="grid grid-cols-2 gap-3 mt-3">
      {SOCIALS_DATA.map((social, index) => (
        <div className="p-3 rounded-2xl bg-[#f9f9f9] flex flex-1 hover:cursor-pointer">
          <div className="h-[60px] max-h-[60px] max-w-[90px] w-[60px] min-w-[60px] min-h-[60px] bg-[#f0f0f0] rounded-full mr-3 flex items-center justify-center text-2xl">
            <span className="opacity-40">{social.icon}</span>
          </div>
          <div>
            <h1 className="font-medium leading-loose tracking-tighter text-md">
              {social.name}
            </h1>
            <p className="text-xs font-medium leading-snug tracking-tight opacity-40">
              {social.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
