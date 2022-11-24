import { FaDiscord, FaTwitter } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { RiTwitchFill } from "react-icons/ri";
const SOCIALS_DATA = [
  {
    name: "Email",
    description: "My Preferred point of contact.",
    url: "mailto:vivixstar628@gmail.com",
    icon: <AiOutlineMail />,
  },
  {
    name: "Discord",
    description: "Join my community with over 1,000+ members.",
    url: "https://discord.gg/pxMPdxGhKW",
    icon: <FaDiscord />,
  },
  {
    name: "Twitter",
    description: "Follow my twitter for my comission status.",
    url: "https://twitter.com/vivixstar",
    icon: <FaTwitter />,
  },
  {
    name: "Twitch",
    description: "I stream my commissions on Twitch.tv",
    url: "https://twitch.tv/vivixstar",
    icon: <RiTwitchFill />,
  },
];

export default function Socials() {
  return (
    <div className="grid grid-cols-2 gap-3 mt-3">
      {SOCIALS_DATA.map((social, index) => (
        <></>
      ))}
    </div>
  );
}
