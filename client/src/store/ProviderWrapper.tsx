"use client";
import store from "./store";
import React from "react";
import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "react-query";

type Props = {
  children: React.ReactNode;
};
const ProviderWrapper = ({ children }: Props) => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>{children}</Provider>
    </QueryClientProvider>
  );
};
export default ProviderWrapper;
