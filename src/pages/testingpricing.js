import * as React from "react";

const POSSIBLE_ART_VARIABLES = {
  Background: {
    enabled: true,
    type: "CHECKBOX",
    selected: false,
    pricing: [{ selected: true, type: "default", price: 50 }],
  },
  Commercial_Use: {
    enabled: true,
    type: "CHECKBOX",
    selected: false,
    pricing: [{ selected: true, type: "default", price: 150 }],
  },
  Linestyle: {
    enabled: true,
    type: "DROPDOWN",
    selected: false,
    pricing: [
      { selected: true, type: "Line", price: 30 },
      { selected: false, type: "Flat_Color", price: 45 },
      { selected: false, type: "Full_Illustration", price: 65 },
    ],
  },
};

const TYPES_OF_CHARACTERS = {
  Character_Art: {
    selected: false,
    variables: {
      ...POSSIBLE_ART_VARIABLES,
    },
    main: { Icon: 250, Half_Body: 450, Full_Body: 650 },
  },
  "2D_MODEL_ART": {
    selected: false,
    variables: {
      ...POSSIBLE_ART_VARIABLES,
      Background: { enabled: false },
    },
    main: { Icon: 650, Half_Body: 1150, Full_Body: 1500 },
  },
};

export default function Pricing() {
  const CHARACTER_OPTIONS = Object.keys(TYPES_OF_CHARACTERS);
  const [state, setState] = React.useState({
    type: CHARACTER_OPTIONS[0],
    data: TYPES_OF_CHARACTERS[CHARACTER_OPTIONS[0]],
  });
  const [price, setPrice] = React.useState(0);
  const MAIN_OPTIONS = Object.keys(state.data.main);
  const VARIABLE_OPTIONS = Object.keys(state.data.variables);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen font-inter min-w-screen bg-main-default text-[#aaa] tracking-tight font-normal text-sm relative">
      <h1 className="mb-10">${price}</h1>
      <div className="flex gap-2 mb-10">
        {CHARACTER_OPTIONS.map((option, index) => {
          return (
            <h1
              key={index}
              className=""
              onClick={() =>
                setState({ type: option, data: TYPES_OF_CHARACTERS[option] })
              }
            >
              {option}
            </h1>
          );
        })}
      </div>
      <ul className="flex gap-2 mb-10">
        {MAIN_OPTIONS.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <ul className="flex flex-col gap-2">
        {VARIABLE_OPTIONS.map((variable, index) => {
          const variableOptions = state.data.variables[variable];
          return (
            <div key={index}>
              <ArtVariableSelection
                variable={variable}
                variableOptions={variableOptions}
              />
            </div>
          );
        })}
      </ul>
    </div>
  );
}

const ArtVariableSelection = ({ variable, variableOptions }) => {
  if (!variableOptions.enabled) return null;
  switch (variableOptions.type) {
    case "CHECKBOX":
      return (
        <div className="flex gap-2">
          {variable}:{" "}
          <span
            className={`text-md border-white/5 border w-6 h-6 rounded-md flex items-center justify-center hover:cursor-pointer
                  transition-[background]`}
          ></span>
        </div>
      );
      break;
    case "DROPDOWN":
      return (
        <div className="flex gap-2">
          {variable}:
          <ul className="flex gap-2">
            {variableOptions.pricing.map((item, index) => (
              <li key={index}>{item.type}</li>
            ))}
          </ul>
        </div>
      );
      break;
    default:
      return null;
  }
};
