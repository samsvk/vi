// const charTypes = {
//   Character_Art: { Icon: 250, Half_Body: 450, Full_Body: 650 },
//   "2D_Live_Model_Art": { Icon: 450, Half_Body: 1150, Full_Body: 1500 },
// };

// const artVariables = {
//   Background: { selected: false, price: 50 },
//   Commercial_Use: { selected: false, price: 150 },
//   Linestyle: [
//     { type: "Line_Art", selected: true, price: 30 },
//     { type: "Flat_Color", selected: false, price: 45 },
//     { type: "Full_Illustration", selected: false, price: 65 },
//   ],
// };

import * as React from "react";

const POSSIBLE_ART_VARIABLES = {
  Background: {
    enabled: true,
    type: "CHECKBOX",
    selected: false,
    pricing: [{ type: "default", price: 50 }],
  },
  Commercial_Use: {
    enabled: true,
    type: "CHECKBOX",
    selected: false,
    pricing: [{ type: "default", price: 150 }],
  },
  Linestyle: {
    enabled: true,
    type: "DROPDOWN",
    selected: false,
    pricing: [{ type: "default", price: 200 }],
  },
};

const TYPES_OF_CHARACTERS = {
  Character_Art: {
    selected: false,
    variables: {
      ...POSSIBLE_ART_VARIABLES,
    },
    pricing: { Icon: 250, Half_Body: 450, Full_Body: 650 },
  },
  "2D_MODEL_ART": {
    selected: false,
    variables: {
      ...POSSIBLE_ART_VARIABLES,
      Background: { enabled: false },
    },
    pricing: { Icon: 250, Half_Body: 450, Full_Body: 650 },
  },
};

export default function Pricing() {
  const [active, setActive] = React.useState(0);
  const CHARACTER_OPTIONS = Object.keys(TYPES_OF_CHARACTERS);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen font-inter min-w-screen bg-main-default text-[#aaa] tracking-tight font-normal text-sm relative">
      {CHARACTER_OPTIONS.map((option, index) => (
        <h1 className="mb-10" onClick={() => setActive(index)}>
          {option}
        </h1>
      ))}

      {CHARACTER_OPTIONS.map((option, index) => {
        if (index !== active) return null;
        const SELECTED_OPTION = TYPES_OF_CHARACTERS[option];
        const ART_TYPE = Object.keys(SELECTED_OPTION.pricing);
        const ART_VARIABLES = Object.keys(SELECTED_OPTION.variables);
        return (
          <div key={index}>
            <ul className="flex gap-2">
              {ART_TYPE.map((artType, index) => {
                return <h2 key={index}>{artType}</h2>;
              })}
            </ul>
            <ul>
              {ART_VARIABLES.map((artVar, index) => {
                const artVarOpt = SELECTED_OPTION.variables[artVar];
                return (
                  <ArtVariableSelection artVar={artVar} artVarOpt={artVarOpt} />
                );
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
}

const ArtVariableSelection = ({ artVar, artVarOpt }) => {
  if (!artVarOpt.enabled) return null;
  switch (artVarOpt.type) {
    case "CHECKBOX":
      return (
        <div>
          {artVar}: {artVarOpt.type}
        </div>
      );
      break;
    case "DROPDOWN":
      return (
        <div>
          {artVar}: {artVarOpt.type}
        </div>
      );
      break;
    default:
      return null;
  }
};
