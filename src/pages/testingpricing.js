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
      { selected: true, type: "Icon", price: 250 },
      { selected: false, type: "Half Body", price: 450 },
      { selected: false, type: "Full Body", price: 650 },
    ],
  },
  "2D_Live_Model_Art": {
    variables: {
      ...POSSIBLE_ART_VARIABLES,
      Linestyle: { enabled: false },
      Background: { enabled: false },
    },
    pricing: [
      { selected: true, type: "Icon", price: 650 },
      { selected: false, type: "Half Body", price: 1150 },
      { selected: false, type: "Full Body", price: 1550 },
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
    setPrice(
      state.data.pricing
        .map((item, index) => (item.selected ? item.price : 0))
        .concat(
          VARIABLE_OPTIONS.map((item, index) => {
            return state.data?.variables[item]?.pricing?.map((_, idx) => {
              return _.selected ? _.price : 0;
            });
          }).flat()
        )
        .filter((item) => item !== undefined)
        .reduce((total, num) => num + total, 0)
    );
  }, [state]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen font-inter min-w-screen bg-main-default text-[#aaa] tracking-tight font-normal text-sm relative">
      <div className="relative z-10 flex flex-col justify-center w-full px-6 py-4 border rounded-lg max-w-max border-white/5 h-max bg-black/10">
        <div className="py-3 border-b border-white/5">
          <label className="text-md min-w-[120px]">
            Vi's Price Calculator - Total:{" "}
            <span className="text-green-700 border-green-700">${price}</span>
          </label>
        </div>
        <div className="py-3 border-b border-white/5">
          <ul className="flex items-center gap-4">
            <label className="text-xs  opacity-50 min-w-[120px]">Type: </label>
            {CHARACTER_OPTIONS.map((option, index) => {
              const isSelected = state.type;
              return (
                <li
                  key={index}
                  className={`py-1 px-2.5 bg-white/5 rounded-md border border-white/5 ${
                    isSelected === option
                      ? "bg-green-900/10 border-green-700 text-green-700"
                      : "text-inherit"
                  }`}
                  onClick={() =>
                    setState({ type: option, data: TYPES_OF_CHARACTERS[option] })
                  }
                >
                  {option.replace(/_/g, " ")}
                </li>
              );
            })}
          </ul>
        </div>

        <div className="py-3 border-b border-white/5">
          <ul className="flex items-center gap-4">
            <label className="text-xs  opacity-50 min-w-[120px]">Style</label>
            {state.data.pricing.map((item, index) => {
              return (
                <li
                  key={index}
                  className={`py-1 px-2.5 bg-white/5 rounded-md border border-white/5 ${
                    item.selected
                      ? "bg-green-900/10 border-green-700 text-green-700"
                      : "text-inherit"
                  }`}
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
        </div>
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
        <div className="py-3 border-b border-white/5">
          <ul className="flex items-center gap-4">
            <label className="text-xs opacity-50 min-w-[120px]">{variable}</label>
            <li
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
              className={`text-md w-6 h-6 flex items-center justify-center hover:cursor-pointer
                  transition-[background] bg-white/5 rounded-md border border-white/5 ${
                    state.data.variables[variable].pricing[0].selected
                      ? "bg-green-900/10 border-green-700 text-green-700"
                      : "text-inherit"
                  }`}
            ></li>
          </ul>
        </div>
      );
    case "DROPDOWN":
      return (
        <div className="py-3 border-b border-white/5">
          <ul className="flex items-center gap-4">
            <label className="text-xs  opacity-50 min-w-[120px]">{variable}</label>
            {variableOptions.pricing.map((item, index) => (
              <li
                className={`py-1 px-2.5 bg-white/5 rounded-md border border-white/5  ${
                  state.data.variables[variable].pricing[index].selected
                    ? "bg-green-900/10 border-green-700 text-green-700"
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
                {item.type.replace(/_/g, " ")}
              </li>
            ))}
          </ul>
        </div>
      );
    default:
      return null;
  }
};
