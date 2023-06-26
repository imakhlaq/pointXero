import { useEffect, useReducer } from "react";

type InitialState = {
  value: string | number;
  message: string;
  error: null | boolean;
};

export type ActionType = {
  type: "updateInput" | "inputComplete";
  payload?: string;
};

const initialState = {} as InitialState;

const wrapperFn = (zodSchema: any) => {
  return (state: InitialState, action: ActionType) => {
    if (action.type === "updateInput") {
      return {
        ...state,
        value: action.payload!,
        error: false,
        message: "",
      };
    } else if (action.type === "inputComplete") {
      // @ts-ignore
      const res = zodSchema.safeParse(state.value);

      if (res.success) {
        return { ...state, error: false, message: "" };
      }

      console.log(res.error.format());

      return {
        ...state,
        error: true,
        message: res.error.format()._errors[0],
      };
    } else {
      return { ...state };
    }
  };
};

function useValidateInput(zodSchema: any) {
  const [inputValue, dispatch] = useReducer(wrapperFn(zodSchema), initialState);

  const { error, message, value } = inputValue;

  return [error, message, value, dispatch];
}

export default useValidateInput;
