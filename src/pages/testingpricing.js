import * as React from "react";

const POSSIBLE_ART_VARIABLES = {
  Background: {
    enabled: true,
    type: "CHECKBOX",
    pricing: [{ selected: false, type: "default", price: 50 }],
  },
  Commercial: {
    enabled: true,
    type: "CHECKBOX",
    pricing: [{ selected: false, type: "default", price: 150 }],
  },
  Linestyle: {
    enabled: true,
    type: "DROPDOWN",
    pricing: [
      { selected: true, type: "Line", price: 30 },
      { selected: false, type: "Flat_Color", price: 45 },
      { selected: false, type: "Full_Illustration", price: 65 },
    ],
  },
};

const TYPES_OF_CHARACTERS = {
  Character_Art: {
    variables: {
      ...POSSIBLE_ART_VARIABLES,
    },
    pricing: [
      { selected: true, type: "icon", price: 250 },
      { selected: false, type: "half body", price: 450 },
      { selected: false, type: "full body", price: 650 },
    ],
  },
  "2D_MODEL_ART": {
    variables: {
      ...POSSIBLE_ART_VARIABLES,
      Linestyle: { enabled: false },
      Background: { enabled: false },
    },
    pricing: [
      { selected: true, type: "icon", price: 650 },
      { selected: false, type: "half body", price: 1150 },
      { selected: false, type: "full body", price: 1550 },
    ],
  },
};

export default function Pricing() {
  const CHARACTER_OPTIONS = Object.keys(TYPES_OF_CHARACTERS);
  const [state, setState] = React.useState({
    type: CHARACTER_OPTIONS[0],
    data: TYPES_OF_CHARACTERS[CHARACTER_OPTIONS[0]],
  });
  const [price, setPrice] = React.useState(0);
  const VARIABLE_OPTIONS = Object.keys(state.data.variables);

  React.useEffect(() => {
    const mainPrices = state.data.pricing.map((item, index) =>
      item.selected ? item.price : 0
    );

    const variablePrices = VARIABLE_OPTIONS.map((item, index) => {
      return state.data?.variables[item]?.pricing?.map((_, idx) => {
        return _.selected ? _.price : 0;
      });
    });

    const flattened = mainPrices.concat(variablePrices.flat());

    const total = flattened
      .filter((item) => item !== undefined)
      .reduce((total, num) => num + total, 0);

    setPrice(total);
  }, [state]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen font-inter min-w-screen bg-main-default text-[#aaa] tracking-tight font-normal text-sm relative">
      <h1 className="mb-10">${price}</h1>
      <div className="flex gap-2 mb-10">
        {CHARACTER_OPTIONS.map((option, index) => {
          const isSelected = state.type;
          return (
            <h1
              key={index}
              className={`${
                isSelected === option ? "text-green-500" : "text-inherit"
              }`}
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
        {state.data.pricing.map((item, index) => {
          return (
            <li
              key={index}
              className={`${item.selected ? "text-green-500" : "text-inherit"}`}
              onClick={() =>
                setState(() => {
                  return {
                    ...state,
                    data: {
                      ...state.data,
                      pricing: state.data.pricing.map((item, idx) => {
                        return idx === index
                          ? { ...item, selected: true }
                          : { ...item, selected: false };
                      }),
                    },
                  };
                })
              }
            >
              {item.type}
            </li>
          );
        })}
      </ul>
      <ul className="flex flex-col gap-2">
        {VARIABLE_OPTIONS.map((variable, index) => {
          const variableOptions = state.data.variables[variable];
          return (
            <div key={index}>
              <ArtVariableSelection
                variable={variable}
                variableOptions={variableOptions}
                index={index}
                state={state}
                setState={setState}
              />
            </div>
          );
        })}
      </ul>
    </div>
  );
}

const ArtVariableSelection = ({
  variable,
  variableOptions,
  index,
  state,
  setState,
}) => {
  if (!variableOptions.enabled) return null;

  switch (variableOptions.type) {
    case "CHECKBOX":
      return (
        <div className="flex gap-2">
          {variable}:{" "}
          {console.log(state.data.variables[variable].pricing[0].selected)}
          <span
            onClick={() =>
              setState(() => {
                return {
                  ...state,
                  data: {
                    ...state.data,
                    variables: {
                      ...state.data.variables,
                      [variable]: {
                        ...state.data.variables[variable],
                        pricing: state.data.variables[variable].pricing.map(
                          (item) => ({ ...item, selected: !item.selected })
                        ),
                      },
                    },
                  },
                };
              })
            }
            className={`text-md border-white/5 border w-6 h-6 rounded-md flex items-center justify-center hover:cursor-pointer
                  transition-[background] ${
                    state.data.variables[variable].pricing[0].selected
                      ? "bg-green-500"
                      : "text-inherit"
                  }`}
          ></span>
        </div>
      );
    case "DROPDOWN":
      return (
        <div className="flex gap-2">
          {variable}:
          <ul className="flex gap-2">
            {variableOptions.pricing.map((item, index) => (
              <li
                className={`${
                  state.data.variables[variable].pricing[index].selected
                    ? "text-green-500"
                    : "text-inherit"
                }`}
                key={index}
                onClick={() =>
                  setState(() => {
                    return {
                      ...state,
                      data: {
                        ...state.data,
                        variables: {
                          ...state.data.variables,
                          [variable]: {
                            ...state.data.variables[variable],
                            pricing: state.data.variables[variable].pricing.map(
                              (item, idx) => {
                                return idx === index
                                  ? { ...item, selected: true }
                                  : { ...item, selected: false };
                              }
                            ),
                          },
                        },
                      },
                    };
                  })
                }
              >
                {item.type}
              </li>
            ))}
          </ul>
        </div>
      );

    default:
      return null;
  }
};
