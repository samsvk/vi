import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { RiCheckLine, RiCloseLine } from "react-icons/ri";

const charTypes = {
  character_art: { icon: 250, half_Body: 450, full_Body: 650 },
  "2d_live_model_art": { icon: 450, half_Body: 1150, full_Body: 1500 },
};

const artVariables = {
  background: { selected: false, price: 50 },
  commercial_use: { selected: false, price: 150 },
  linestyle: [
    { type: "line_art", selected: true, price: 30 },
    { type: "flat_color", selected: false, price: 45 },
    { type: "full_illustration", selected: false, price: 65 },
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
    <div className="flex items-center justify-center min-h-screen min-w-screen">
      <div className="flex flex-col justify-center flex-1 max-w-lg gap-2 p-8 border bg-gray-800/10 backdrop-blur border-white/10 ">
        <div className="p-3 mb-5 text-xs font-light uppercase border border-white/10 bg-main-default">
          Your total is currently <span className="underline">${price}</span>
        </div>

        <div className="flex flex-col py-2 text-xs font-light lowercase border-b border-white/10">
          <label className="lowercase opacity-50">type of character art: </label>
          <ul className="flex gap-6 mt-2 uppercase">
            {possibleCharTypes.map((item, index) => {
              const isActive = state.type === item;
              return (
                <li
                  key={index}
                  onClick={() => setState({ ...state, type: item })}
                  className={`hover:cursor-pointer hover:underline ${
                    isActive ? "text-green-500 underline" : "text-white"
                  }`}
                >
                  {item.replace(/_/g, " ")}
                </li>
              );
            })}
          </ul>
        </div>

        <div className="flex flex-col py-2 text-xs font-light lowercase border-b border-white/10">
          <label className="lowercase opacity-50">character style: </label>
          <ul className="flex gap-6 mt-2 uppercase">
            {possibleStyleTypes.map((item, index) => {
              const isActive = state.style === item;
              return (
                <li
                  className={`hover:cursor-pointer hover:underline ${
                    isActive ? "text-green-500 underline" : "text-white"
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
              <div
                className="flex-col py-2 text-xs font-light lowercase border-b border-white/10"
                key={index}
              >
                <label className="lowercase opacity-50">{item}:</label>
                <ul className="flex gap-6 mt-2 uppercase">
                  {Object.values(state.artVariables[item]).map((item, index) => {
                    return (
                      <li
                        className={`hover:cursor-pointer hover:underline ${
                          item.selected ? "text-green-500 underline" : "text-white"
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
                className="flex items-center gap-2 py-2 text-xs font-light uppercase border-b border-white/10 flex-column"
              >
                <label className="lowercase opacity-50">
                  {item.replace(/_/g, " ")}:{" "}
                </label>
                <span
                  className={`w-3.5 h-3.5 rounded-sm flex items-center justify-center hover:cursor-pointer
                  transition-[background]
                  ${!isTrue ? "bg-white/10" : "bg-green-900"}
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
                ></span>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}
