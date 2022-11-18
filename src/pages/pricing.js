import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { RiCheckLine, RiCloseLine } from "react-icons/ri";

const charTypes = {
  Character_Art: { Icon: 250, Half_Body: 450, Full_Body: 650 },
  "2D_Live_Model_Art": { Icon: 450, Half_Body: 1150, Full_Body: 1500 },
};

const artVariables = {
  Background: { selected: false, price: 50 },
  Commercial_Use: { selected: false, price: 150 },
  Linestyle: [
    { type: "Line_Art", selected: true, price: 30 },
    { type: "Flat_Color", selected: false, price: 45 },
    { type: "Full_Illustration", selected: false, price: 65 },
  ],
};

export default function Pricing() {
  const possibleCharTypes = Object.keys(charTypes);
  const possibleStyleTypes = Object.keys(Object.values(charTypes)[0]);
  const possibleArtVariables = Object.keys(artVariables);

  const [price, setPrice] = useState(0);
  const [slider, setSlider] = useState(1);
  const [state, setState] = useState({
    type: possibleCharTypes[0],
    style: possibleStyleTypes[0],
    artVariables: artVariables,
  });

  useEffect(() => {
    const tempType = charTypes[state.type];
    const tempStyle = tempType[state.style];

    const collectivePriceOnVariables = possibleArtVariables.map((pav) => {
      if (Array.isArray(state.artVariables[pav])) {
        return state.artVariables[pav].map((item) =>
          item.selected ? item.price : 0
        );
      } else {
        return state.artVariables[pav]?.selected === true
          ? state.artVariables[pav].price
          : 0;
      }
    });

    const total = collectivePriceOnVariables
      .flat()
      .reduce((total, num) => num + total, 0);
    setPrice(tempStyle + total);
  }, [state]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen font-inter min-w-screen bg-main-default text-[#aaa] tracking-tight font-normal text-sm relative">
      <div className="relative z-10 flex flex-col justify-center w-full px-6 py-4 border rounded-lg max-w-max border-white/5 h-max bg-black/10">
        <div className="py-3 border-b border-white/5">
          <label className="text-xl font-semibold opacity-50 min-w-[120px]">
            Vi's Price Calculator: <span className="text-white">${price}</span>
          </label>
        </div>

        <div className="py-3 border-b border-white/5">
          <ul className="flex items-center gap-4">
            <label className="text-xs  opacity-50 min-w-[120px]">
              Character Type:{" "}
            </label>
            {possibleCharTypes.map((item, index) => {
              const isActive = state.type === item;
              return (
                <li
                  key={index}
                  onClick={() => setState({ ...state, type: item })}
                  className={`hover:cursor-pointer py-1 px-2.5 bg-white/5 rounded-md border border-white/5 ${
                    isActive
                      ? "bg-green-900/10 border-green-700 text-green-700"
                      : "text-inherit"
                  }`}
                >
                  {item.replace(/_/g, " ")}
                </li>
              );
            })}
          </ul>
        </div>

        <div className="py-3 border-b border-white/5">
          <ul className="flex items-center gap-4">
            <label className="text-xs  opacity-50 min-w-[120px]">
              Character Style:{" "}
            </label>
            {possibleStyleTypes.map((item, index) => {
              const isActive = state.style === item;
              return (
                <li
                  className={`hover:cursor-pointer py-1 px-2.5 bg-white/5 rounded-md border border-white/5 ${
                    isActive
                      ? "bg-green-900/10 border-green-700 text-green-700"
                      : "text-inherit"
                  }`}
                  key={index}
                  onClick={() => setState({ ...state, style: item })}
                >
                  {item.replace(/_/g, " ")}
                </li>
              );
            })}
          </ul>
        </div>

        {possibleArtVariables.map((item, index) => {
          const isTrue = state.artVariables[item].selected;
          if (typeof Object.values(state.artVariables[item])[0] === "object") {
            const dynamicName = Object.keys(state.artVariables)[index];
            return (
              <div key={index}>
                <ul className="flex items-center gap-4 py-3">
                  <label className="text-xs  opacity-50 min-w-[120px]">
                    {item}:{" "}
                  </label>
                  {Object.values(state.artVariables[item]).map((item, index) => {
                    return (
                      <li
                        className={`hover:cursor-pointer py-1 px-2.5 bg-white/5 rounded-md border border-white/5 ${
                          item.selected
                            ? "bg-green-900/10 border-green-700 text-green-700"
                            : "text-inherit"
                        }`}
                        key={index}
                        onClick={() =>
                          setState({
                            ...state,
                            artVariables: {
                              ...state.artVariables,
                              [dynamicName]: state.artVariables[dynamicName].map(
                                (item, i) => ({
                                  ...item,
                                  selected: i === index ? true : false,
                                })
                              ),
                            },
                          })
                        }
                      >
                        {item.type.replace(/_/g, " ")}
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          } else {
            return (
              <div
                key={index}
                className="flex items-center gap-4 py-3 border-b border-white/5 flex-column"
              >
                <label className="text-xs  opacity-50 min-w-[120px]">
                  {item.replace(/_/g, " ")}:{" "}
                </label>
                <span
                  className={`border-white/5 border w-6 h-6 rounded-md flex items-center justify-center hover:cursor-pointer
                  transition-[background]
                  ${
                    isTrue
                      ? "bg-green-900/10 border-green-700 text-green-700"
                      : " bg-main-default"
                  }
                  `}
                  onClick={() =>
                    setState({
                      ...state,
                      artVariables: {
                        ...state.artVariables,
                        [item]: {
                          ...state.artVariables[item],
                          selected: !state.artVariables[item].selected,
                        },
                      },
                    })
                  }
                >
                  {isTrue && <RiCheckLine style={{ verticalAlign: "middle" }} />}
                </span>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}
