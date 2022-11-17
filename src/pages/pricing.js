import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const charTypes = {
  characterArt: { icon: 250, halfBody: 450, fullBody: 650 },
  modelArt: { icon: 450, halfBody: 1150, fullBody: 1500 },
};

const artVariables = {
  background: { selected: false, price: 50 },
  commercial: { selected: false, price: 150 },
  linestyle: [
    { type: "line", selected: false, price: 30 },
    { type: "flat", selected: false, price: 45 },
    { type: "illustration", selected: false, price: 65 },
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

    const collectivePriceOnVariables = possibleArtVariables.map((pav) =>
      state.artVariables[pav]?.selected === true ? state.artVariables[pav].price : 0
    );
    const total = collectivePriceOnVariables.reduce((total, num) => num + total, 0);
    setPrice(tempStyle + total);
  }, [state]);

  console.log(state.artVariables.linestyle);

  return (
    <div className="flex items-center justify-center min-h-screen min-w-screen">
      <div className="flex flex-col justify-center flex-1 max-w-xl gap-2 p-3 border border-white/10">
        <div className="py-2 text-xs font-light uppercase border-b border-white/10">
          Vi's pricing calculator ${price}
        </div>

        <div className="py-2 text-xs font-light lowercase">
          <ul className="flex gap-5 mt-2 uppercase">
            <label>Type: </label>
            {possibleCharTypes.map((item, index) => (
              <li key={index} onClick={() => setState({ ...state, type: item })}>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="py-2 text-xs font-light lowercase">
          <ul className="flex gap-5 mt-2 uppercase">
            <label>Style: </label>
            {possibleStyleTypes.map((item, index) => (
              <li key={index} onClick={() => setState({ ...state, style: item })}>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {possibleArtVariables.map((item, index) => {
          const isTrue = state.artVariables[item].selected;
          if (typeof Object.values(state.artVariables[item])[0] === "object") {
            const dynamicName = Object.keys(state.artVariables)[index];
            return (
              <div className="py-2 text-xs font-light lowercase">
                <ul className="flex gap-5 mt-2 uppercase">
                  <label>Style: </label>
                  {Object.values(state.artVariables[item]).map((item, index) => {
                    let z = state.artVariables[dynamicName].map((item, i) => ({
                      ...item,
                      selected: i === index ? true : false,
                    }));

                    return (
                      <li
                        key={index}
                        onClick={() =>
                          setState({
                            ...state,
                            artVariables: {
                              ...state.artVariables,
                              [dynamicName]: z,
                            },
                          })
                        }
                      >
                        {item.type}
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
                className="flex items-center gap-2 py-2 text-xs font-light uppercase"
              >
                {item}:
                <span
                  className="w-4 h-4 border min-w-[5px] min-h-[5px] flex items-center justify-center hover:cursor-pointer"
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
                  {isTrue ? "Y" : "N"}
                </span>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}
