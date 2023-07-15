"use client";
import store from "./store";
import React from "react";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";

type Props = {
  children: React.ReactNode;
};
const ProvideRedux = ({ children }: Props) => {
  return <Provider store={store}>{children}</Provider>;
};
export default ProvideRedux;
