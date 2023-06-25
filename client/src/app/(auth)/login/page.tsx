"use client";
import Link from "next/link";
import useValidateInput, { ActionType } from "@/app/hooks/useValidateInput";
import { ChangeEvent, Dispatch, FormEvent, useState } from "react";
import { zodPass, zodUserName } from "../../../../zodSchemas/logInSchema";

const valueChangeHandler = (dispatch: Dispatch<ActionType>, value: string) => {
  dispatch({ type: "updateInput", payload: value });
};
const blurHandler = (dispatch: Dispatch<ActionType>) => {
  dispatch({ type: "inputComplete" });
};

const LogInPage = () => {
  const [passShow, setPassShow] = useState(false);

  const [userNameError, userNameErrMessage, userNameValue, userNameDispatch] =
    useValidateInput(zodUserName);

  const [passError, passErrMessage, passValue, passDispatch] =
    useValidateInput(zodPass);

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    blurHandler(userNameDispatch);
    blurHandler(passDispatch);
    if (!userNameErrMessage || !passError) return;
  };

  return (
    <main>
      <div className="container relative mx-auto my-32 flex max-w-xl flex-col px-6 text-gray-900 justify-center text-whiteText ">
        <div className="flex flex-col gap-10 px-14 py-24 bg-gradient-to-r from-blueBgColor to-slate-700 mt-14 rounded-lg mx-auto">
          <h2 className=" font-semibold text-2xl mb-9">Sign In</h2>
          <form className="flex w-full gap-7 flex-col" onSubmit={submitHandler}>
            <input
              type="text"
              className={`bg-black max-w-xs px-3 py-2 rounded-md bg-transparent focus-within:bg-none focus:outline-none border ${
                userNameError
                  ? "border-red-600 animate-pulse"
                  : "border-whiteText"
              }`}
              placeholder="Username"
              onChange={(e) =>
                valueChangeHandler(userNameDispatch, e.target.value)
              }
              onBlur={() => blurHandler(userNameDispatch)}
            />
            <input
              type={`${passShow ? "text" : "password"}`}
              className={`bg-black max-w-xs px-3 py-2 rounded-md bg-transparent focus-within:bg-none focus:outline-none border ${
                passError ? "border-red-600 animate-pulse" : "border-whiteText"
              }`}
              placeholder="Password"
              onChange={(e) => valueChangeHandler(passDispatch, e.target.value)}
              onBlur={() => blurHandler(passDispatch)}
            />
            <div className="flex  items-center gap-2">
              <input
                type="checkbox"
                id="remember"
                className="accent-greenColor bottom-0 rounded-sm"
              />
              <label htmlFor="remember">Remember Me </label>
            </div>
            <button
              type="submit"
              className="bg-greenColor max-w-xs py-2 px-4 rounded-md font-bold mt-4"
            >
              Sign In
            </button>
          </form>

          <div className="flex justify-center items-center gap-2">
            <div className="h-[1px] w-32 bg-black "></div>
            <p>or</p>
            <div className="h-[1px] w-32 bg-black "></div>
          </div>

          <div>{/* for google */}</div>

          <Link href="/signup" className="text-center mt-10">
            Don&apos;t have Account? Sign Up
          </Link>
        </div>
      </div>
    </main>
  );
};
export default LogInPage;
