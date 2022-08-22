export default function Header() {
  return (
    <div className="max-w-[270px] w-full flex flex-col items-center justify-center mx-auto text-center mt-10 relative">
      <h1 className="font-['Crimson_Text'] text-[50px] tracking-wider relative">
        VIVIXSTAR <span className="absolute">*</span>
      </h1>
      <ul className="pl-[12px] absolute bottom-0 flex items-start w-full gap-5 text-left font-light text-xs">
        <li className="w-[50%]">INFORMATION</li>
        <li className="text-right w-[50%]">CONTACT</li>
      </ul>
    </div>
  );
}
