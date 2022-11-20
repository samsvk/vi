import * as React from "react";

const POSSIBLE_ART_VARIABLES = {
  Background: {
    description: "My background style is simplistic, but help overall composition.",
    enabled: true,
    type: "CHECKBOX",
    pricing: [{ selected: false, type: "default", price: 50 }],
  },
  Basic_Commercial_Rights: {
    description: "For basic commerical rights such as using it on Merchandise.",
    enabled: true,
    type: "CHECKBOX",
    pricing: [{ selected: false, type: "default", price: 150 }],
  },
  Linestyle: {
    description: "Please select your preferred linestyle.",
    enabled: true,
    type: "DROPDOWN",
    pricing: [
      { selected: true, type: "Line", price: 35 },
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
      { selected: true, type: "Half Body", price: 1150 },
      { selected: false, type: "Full Body", price: 1550 },
    ],
  },
};

export default function Pricing({ setPrice }) {
  const CHARACTER_OPTIONS = Object.keys(TYPES_OF_CHARACTERS);
  const [state, setState] = React.useState({
    type: CHARACTER_OPTIONS[0],
    data: TYPES_OF_CHARACTERS[CHARACTER_OPTIONS[0]],
  });
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
    <div className="w-full">
      <div className="relative z-10 flex flex-col justify-center gap-3">
        <div className="flex flex-col">
          <div className="p-5 rounded-tr-2xl rounded-tl-2xl bg-[#f9f9f9] flex">
            <div>
              <h1 className="font-medium leading-loose tracking-tighter text-md">
                Type of Commission
              </h1>
              <p className="text-xs font-medium leading-snug tracking-tight opacity-40">
                Selected the relevant character type.
              </p>
            </div>
            <ul className="flex items-center gap-4 ml-auto bg-[#f0f0f0] rounded-2xl p-1">
              {CHARACTER_OPTIONS.map((option, index) => {
                const isSelected = state.type;
                return (
                  <li
                    key={index}
                    className={`py-2 px-2.5 bg-white/5 rounded-xl border transition-[background] border-white/5 hover:cursor-pointer font-medium leading-loose tracking-tight text-md ${
                      isSelected === option ? "bg-white" : "text-inherit"
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

          <div className="p-5 rounded-br-2xl rounded-bl-2xl bg-[#f9f9f9] flex border-t border-[#f0f0f0] ">
            <div>
              <h1 className="font-medium leading-loose tracking-tighter text-md">
                Style of Commission
              </h1>
              <p className="text-xs font-medium leading-snug tracking-tight opacity-40">
                Selected the relevant character type.
              </p>
            </div>
            <ul className="flex items-center gap-4 ml-auto bg-[#f0f0f0] rounded-2xl p-1">
              {state.data.pricing.map((item, index) => {
                return (
                  <li
                    key={index}
                    className={`py-2 px-2.5 bg-white/5 rounded-xl border border-white/5 hover:cursor-pointer font-medium leading-loose tracking-tight text-md  transition-[background]  ${
                      item.selected ? "bg-white" : "text-inherit"
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
        </div>

        <ul className="flex flex-col gap-3">
          {VARIABLE_OPTIONS.map((variable, index) => {
            const variableOptions = state.data.variables[variable];
            if (!variableOptions.enabled) return null;
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
        <div className="p-5 rounded-2xl bg-[#f9f9f9] flex items-center">
          <div>
            <h1 className="font-medium leading-loose tracking-tighter text-md">
              {variable.replace(/_/g, " ")}:
            </h1>
            <p className="text-xs font-medium leading-snug tracking-tight opacity-40 max-w-[220px]">
              {variableOptions.description}
            </p>
          </div>

          <div
            className={`relative ml-auto w-[60px]  min-h-[30px] rounded-full flex items-center px-[4px]
            transition-[background] 
                     ${
                       state.data.variables[variable].pricing[0].selected
                         ? "bg-green-500"
                         : " bg-[#f0f0f0]"
                     }
          `}
          >
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
              className={`block absolute h-[24px] w-[24px] bg-white rounded-full
                ${
                  state.data.variables[variable].pricing[0].selected
                    ? "right-[4px]"
                    : "text-inherit"
                }
              `}
            />
          </div>
        </div>
      );

    case "DROPDOWN":
      return (
        <div className="p-5 rounded-2xl bg-[#f9f9f9] flex">
          <div>
            <h1 className="font-medium leading-loose tracking-tighter text-md">
              {variable.replace(/_/g, " ")}:
            </h1>
            <p className="text-xs font-medium leading-snug tracking-tight opacity-40 max-w-[220px]">
              {variableOptions.description}
            </p>
          </div>
          <ul className="flex items-center gap-4 ml-auto bg-[#f0f0f0] rounded-2xl p-1">
            {variableOptions.pricing.map((item, index) => (
              <li
                className={`py-2 px-2.5 bg-white/5 rounded-xl border transition-[background] border-white/5 hover:cursor-pointer font-medium leading-loose tracking-tight text-md ${
                  state.data.variables[variable].pricing[index].selected
                    ? "bg-white"
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
