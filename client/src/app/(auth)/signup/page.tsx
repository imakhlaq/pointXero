"use client";
import Link from "next/link";
import { Dispatch, FormEvent, useState } from "react";
import useValidateInput, { ActionType } from "@/app/hooks/useValidateInput";
import {
  zodEmail,
  zodFirstName,
  zodPhoneNO,
  zodSecondName,
} from "../../../../zodSchemas/singnUpSchema";
import { zodPass, zodUserName } from "../../../../zodSchemas/logInSchema";

const valueChangeHandler = (dispatch: Dispatch<ActionType>, value: string) => {
  dispatch({ type: "updateInput", payload: value });
};
const blurHandler = (dispatch: Dispatch<ActionType>) => {
  dispatch({ type: "inputComplete" });
};

const SignUpPage = () => {
  const [passShow, setPassShow] = useState(false);

  const [
    firstNameError,
    firstNameErrMessage,
    firstNameValue,
    firstNameDispatch,
  ] = useValidateInput(zodFirstName);

  console.log(firstNameError, firstNameErrMessage);
  const [
    secondNameError,
    secondNameErrMessage,
    secondNameValue,
    secondNameDispatch,
  ] = useValidateInput(zodSecondName);

  const [userNameError, userNameErrMessage, userNameValue, userNameDispatch] =
    useValidateInput(zodUserName);

  const [passError, passErrMessage, passValue, passDispatch] =
    useValidateInput(zodPass);

  const [phoneNOError, phoneNOErrMessage, phoneNOValue, phoneNODispatch] =
    useValidateInput(zodPhoneNO);

  const [emailError, emailErrMessage, emailValue, emailDispatch] =
    useValidateInput(zodEmail);

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!userNameErrMessage || !passError) return;
  };

  return (
    <main>
      <div className="container relative mx-auto my-32 flex max-w-xl flex-col px-6 text-gray-900 justify-center text-whiteText ">
        <div className="flex flex-col gap-7 px-14 py-20 bg-gradient-to-r from-blueBgColor to-slate-700 mt-14 rounded-lg mx-auto lg:w-10/12">
          <h2 className=" font-semibold text-2xl mb-9">Create New Account</h2>
          <form className="flex w-full gap-7 flex-col" onSubmit={submitHandler}>
            <input
              type="text"
              className={`bg-black max-w-xs px-3 py-2 rounded-md bg-transparent  focus-within:bg-none focus:outline-none border  ${
                firstNameError
                  ? "border-red-600 animate-pulse"
                  : "border-whiteText"
              }`}
              placeholder="first Name"
              onChange={(e) =>
                valueChangeHandler(firstNameDispatch, e.target.value)
              }
              onBlur={() => blurHandler(firstNameDispatch)}
            />
            <input
              type="text"
              className={`bg-black max-w-xs px-3 py-2 rounded-md bg-transparent focus-within:bg-none focus:outline-none border  ${
                secondNameError
                  ? "border-red-600 animate-pulse"
                  : "border-whiteText"
              }`}
              placeholder="Second Name"
              onChange={(e) =>
                valueChangeHandler(secondNameDispatch, e.target.value)
              }
              onBlur={() => blurHandler(secondNameDispatch)}
            />
            <input
              type="text"
              className={`bg-black max-w-xs px-3 py-2 rounded-md bg-transparent focus-within:bg-none focus:outline-none border  ${
                userNameError
                  ? "border-red-600 animate-pulse"
                  : "border-whiteText"
              }`}
              placeholder="User Name"
              onChange={(e) =>
                valueChangeHandler(userNameDispatch, e.target.value)
              }
              onBlur={() => blurHandler(userNameDispatch)}
            />
            <input
              type="text"
              className={`bg-black max-w-xs px-3 py-2 rounded-md bg-transparent focus-within:bg-none focus:outline-none border  ${
                phoneNOError
                  ? "border-red-600 animate-pulse"
                  : "border-whiteText"
              }`}
              placeholder="Phone No"
              onChange={(e) =>
                valueChangeHandler(phoneNODispatch, e.target.value)
              }
              onBlur={() => blurHandler(phoneNODispatch)}
            />
            <input
              type="email"
              className={`bg-black max-w-xs px-3 py-2 rounded-md bg-transparent focus-within:bg-none focus:outline-none border  ${
                emailError ? "border-red-600 animate-pulse" : "border-whiteText"
              }`}
              placeholder="Email"
              onChange={(e) =>
                valueChangeHandler(emailDispatch, e.target.value)
              }
              onBlur={() => blurHandler(emailDispatch)}
            />
            <input
              type="password"
              className={`bg-black max-w-xs px-3 py-2 rounded-md bg-transparent focus-within:bg-none focus:outline-none border  ${
                passError ? "border-red-600 animate-pulse" : "border-whiteText"
              }`}
              placeholder="Password"
              onChange={(e) => valueChangeHandler(passDispatch, e.target.value)}
              onBlur={() => blurHandler(passDispatch)}
            />
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="remember"
                className="accent-greenColor bottom-0 rounded-sm border border-whiteText"
              />
              <label htmlFor="remember">I agree Terms & Conditions </label>
            </div>
            <button
              type="submit"
              className="bg-greenColor max-w-xs py-2 px-4 rounded-md font-bold "
            >
              Sign Up
            </button>
          </form>
          <Link href="/login" className="text-center mt-10">
            Already have Account? Sign In
          </Link>
        </div>
      </div>
    </main>
  );
};
export default SignUpPage;
