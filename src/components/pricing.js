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
  Line_Art_Style: {
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
  "2D_Model_Art": {
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
      <div className="relative z-10 flex flex-col justify-center">
        <div className="flex flex-col gap-6 mt-6">
          <div className="flex flex-col">
            <h1 className="font-medium leading-none tracking-tighter text-md">
              Comission Type:
            </h1>
            <p className="my-2 text-xs font-medium leading-snug tracking-tight opacity-40">
              Please select the relevant character type for your commission.
            </p>
            <ul className="flex items-center gap-3">
              {CHARACTER_OPTIONS.map((option, index) => {
                const isSelected = state.type;
                return (
                  <li
                    key={index}
                    className={`border-gray-100 rounded-md text-black/40 px-2.5 py-2 border transition-[background] border-white/5 hover:cursor-pointer
                    font-medium leading-none tracking-tighter text-md
                    ${isSelected === option ? "bg-gray-100" : "text-inherit"}`}
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

          <div className="flex flex-col">
            <h1 className="font-medium leading-none tracking-tighter text-md">
              Style:
            </h1>
            <p className="my-2 text-xs font-medium leading-snug tracking-tight opacity-40">
              Selected the relevant character style.
            </p>
            <ul className="flex items-center gap-3">
              {state.data.pricing.map((item, index) => {
                return (
                  <li
                    key={index}
                    className={`border-gray-100 rounded-md text-black/40 px-2.5 py-2 border transition-[background] border-white/5 hover:cursor-pointer
                    font-medium leading-none tracking-tighter text-md
                    ${item.selected ? "bg-gray-100" : "text-inherit"}`}
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
                    {item.type.replace(/_/g, " ")}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <ul className="flex flex-col gap-6 pt-6 mt-6 border-t border-gray-100">
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

        <div className="flex flex-col gap-6 pt-6 mt-6 border-t border-gray-100"></div>
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
        <>
          <div className="flex flex-col">
            <h1 className="font-medium leading-none tracking-tighter text-md">
              {variable.replace(/_/g, " ")}:
            </h1>
            <p className="my-2 text-xs font-medium leading-snug tracking-tight opacity-40">
              {variableOptions.description}
            </p>

            <ul className="flex items-center gap-3">
              <li
                className={`border-gray-100 rounded-md text-black/40 px-2.5 py-2 border transition-[background] border-white/5 hover:cursor-pointer
                    font-medium leading-none tracking-tighter text-md
                    ${
                      state.data.variables[variable].pricing[0].selected
                        ? "bg-gray-100"
                        : "text-inherit"
                    }`}
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
                              (item) => ({ ...item, selected: true })
                            ),
                          },
                        },
                      },
                    };
                  })
                }
              >
                Yes
              </li>

              <li
                className={`border-gray-100 rounded-md text-black/40 px-2.5 py-2 border transition-[background] border-white/5 hover:cursor-pointer
                    font-medium leading-none tracking-tighter text-md
                    ${
                      !state.data.variables[variable].pricing[0].selected
                        ? "bg-gray-100"
                        : "text-inherit"
                    }`}
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
                              (item) => ({ ...item, selected: false })
                            ),
                          },
                        },
                      },
                    };
                  })
                }
              >
                No
              </li>
            </ul>
          </div>
        </>
      );

    case "DROPDOWN":
      return (
        <>
          <div className="flex flex-col">
            <h1 className="font-medium leading-none tracking-tighter text-md">
              {variable.replace(/_/g, " ")}:
            </h1>
            <p className="my-2 text-xs font-medium leading-snug tracking-tight opacity-40">
              {variableOptions.description}
            </p>
            <ul className="flex items-center gap-3">
              {variableOptions.pricing.map((item, index) => {
                return (
                  <li
                    key={index}
                    className={`border-gray-100 rounded-md text-black/40 px-2.5 py-2 border transition-[background] border-white/5 hover:cursor-pointer
                    font-medium leading-none tracking-tighter text-md
                    ${
                      state.data.variables[variable].pricing[index].selected
                        ? "bg-gray-100"
                        : "text-inherit"
                    }`}
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
                );
              })}
            </ul>
          </div>
        </>
      );
    default:
      return null;
  }
};
