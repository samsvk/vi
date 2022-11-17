import { useEffect, useState } from "react";

const charTypes = {
  characterArt: { icon: 250, halfBody: 450, fullBody: 650 },
  modelArt: { icon: 450, halfBody: 1150, fullBody: 1500 },
};

export default function Pricing() {
  const possibleCharTypes = Object.keys(charTypes);
  const possibleStyleTypes = Object.keys(Object.values(charTypes)[0]);

  const [price, setPrice] = useState(0);
  const [state, setState] = useState({
    type: possibleCharTypes[0],
    style: possibleStyleTypes[0],
    value: 0,
  });

  useEffect(() => {
    const tempType = charTypes[state.type];
    const tempStyle = tempType[state.style];
    setPrice(tempStyle + state.value);
  }, [state]);

  function handleValueChange(increment, amount) {
    setState({
      ...state,
      value: increment ? state.value + amount : state.value - amount,
    });
  }

  return (
    <div className="flex items-center justify-center min-h-screen min-w-screen">
      <div className="flex flex-col justify-center flex-1 max-w-lg gap-2 p-3 border border-white/10">
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

        <div className="py-2 text-xs font-light lowercase">
          <ul className="flex gap-5 mt-2 uppercase">
            <label>Background: </label>
            <li onClick={() => handleValueChange(true, 50)}>Yes</li>
            <li onClick={() => handleValueChange(false, 50)}>No</li>
          </ul>
        </div>

        <div className="py-2 text-xs font-light lowercase">
          <ul className="flex gap-5 mt-2 uppercase">
            <label>Commercial Rights/Use: </label>
            <li onClick={() => handleValueChange(true, 150)}>Yes</li>
            <li onClick={() => handleValueChange(false, 150)}>No</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
