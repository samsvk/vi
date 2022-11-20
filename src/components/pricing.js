import * as React from "react";
import { RiCheckLine } from "react-icons/ri";

const POSSIBLE_ART_VARIABLES = {
  Background: {
    description: "description",
    enabled: true,
    type: "CHECKBOX",
    pricing: [{ selected: false, type: "default", price: 50 }],
  },
  Basic_Commercial_Rights: {
    description: "description",
    enabled: true,
    type: "CHECKBOX",
    pricing: [{ selected: false, type: "default", price: 150 }],
  },
  Linestyle: {
    description: "description",
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
      <div className="relative z-10 flex flex-col justify-center gap-5">
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
                    className={`py-2 px-2.5 bg-white/5 rounded-xl border border-white/5 hover:cursor-pointer font-medium leading-loose tracking-tight text-md ${
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
                    className={`py-2 px-2.5 bg-white/5 rounded-xl border border-white/5 hover:cursor-pointer font-medium leading-loose tracking-tight text-md ${
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

        <section>
          <h1 className="text-[28px] font-medium tracking-tighter leading-loose">
            Commission Variables
          </h1>
        </section>

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
        <div className="p-5 rounded-2xl bg-[#f9f9f9] flex">
          <ul className="flex items-center gap-4">
            <div>
              <h1 className="font-medium leading-loose tracking-tighter text-md">
                {variable.replace(/_/g, " ")}:
              </h1>
              <p className="text-xs font-medium leading-snug tracking-tight opacity-40">
                Selected the relevant character type.
              </p>
            </div>

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
                  transition-[background] bg-black rounded-xl border border-white/5 ${
                    state.data.variables[variable].pricing[0].selected
                      ? "bg-green-900/10 border-green-700 text-green-700"
                      : "text-inherit"
                  }`}
            >
              {state.data.variables[variable].pricing[0].selected && (
                <RiCheckLine style={{ verticalAlign: "middle" }} />
              )}
            </li>
          </ul>
        </div>
      );
    case "DROPDOWN":
      return (
        <div className="py-3 border-b border-white/5">
          <ul className="flex items-center gap-4">
            <label className="text-xs opacity-50 ">
              {variable.replace(/_/g, " ")}:
            </label>
            {variableOptions.pricing.map((item, index) => (
              <li
                className={`py-1 px-2.5 bg-white/5 rounded-xl border border-white/5 hover:cursor-pointer  ${
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
