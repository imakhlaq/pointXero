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

// @ts-ignore
let globalZodSchema;

const reducerFun = (state: InitialState, action: ActionType) => {
  if (action.type === "updateInput") {
    return {
      ...state,
      value: action.payload!,
      error: false,
      message: "",
    };
  } else if (action.type === "inputComplete") {
    // @ts-ignore
    const res = globalZodSchema.safeParse(state.value);

    if (res.success) {
      return { ...state, error: false, message: "" };
    }

    return {
      ...state,
      error: true,
      message: res.error.format()._errors[0],
    };
  } else {
    return { ...state };
  }
};

function useValidateInput(zodSchema: any) {
  const [inputValue, dispatch] = useReducer(reducerFun, initialState);

  globalZodSchema = zodSchema;

  const { error, message, value } = inputValue;

  return [error, message, value, dispatch];
}

export default useValidateInput;
