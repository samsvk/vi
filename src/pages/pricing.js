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
    <div className="flex flex-col items-center justify-center min-h-screen font-inter min-w-screen bg-[#f8f8f8] text-[#343434] tracking-tight font-[14px] font-semibold">
      {/* ${price} */}
      <div className="flex flex-col justify-center w-full max-w-xl p-8 border rounded-lg border-[rgba(0,0,0,.06)] h-max bg-[#fffefc] ">
        <div className="border-b border-[rgba(0,0,0,.06)] py-3">
          <ul className="flex items-center gap-4">
            <label>Character Type: </label>
            {possibleCharTypes.map((item, index) => {
              const isActive = state.type === item;
              return (
                <li
                  key={index}
                  onClick={() => setState({ ...state, type: item })}
                  className={`hover:cursor-pointer py-1 px-2.5 hover:bg-[rgba(0,0,0,.045)] rounded-md ${
                    isActive ? "bg-[rgba(0,0,0,.045)]" : "text-inherit"
                  }`}
                >
                  {item.replace(/_/g, " ")}
                </li>
              );
            })}
          </ul>
        </div>

        <div className="border-b border-[rgba(0,0,0,.06)] py-3">
          <ul className="flex items-center gap-4">
            <label>Character Style: </label>
            {possibleStyleTypes.map((item, index) => {
              const isActive = state.style === item;
              return (
                <li
                  className={`hover:cursor-pointer py-1 px-2.5 hover:bg-[rgba(0,0,0,.045)] rounded-md ${
                    isActive ? "bg-[rgba(0,0,0,.045)]" : "text-inherit"
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
                  <label>{item}: </label>
                  {Object.values(state.artVariables[item]).map((item, index) => {
                    return (
                      <li
                        className={`hover:cursor-pointer py-1 px-2.5 hover:bg-[rgba(0,0,0,.045)] rounded-md ${
                          item.selected ? "bg-[rgba(0,0,0,.045)]" : "text-inherit"
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
                className="flex items-center border-b border-[rgba(0,0,0,.06)] flex-column  py-3 gap-4"
              >
                <label>{item.replace(/_/g, " ")}: </label>
                <span
                  className={`border-[rgba(0,0,0,.06)] border w-6 h-6 rounded-sm flex items-center justify-center hover:cursor-pointer
                  transition-[background]
                  ${!isTrue ? "bg-[#f8f8f8]" : "bg-[#f8f8f8]"}
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
