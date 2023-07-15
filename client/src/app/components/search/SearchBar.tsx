"use client";
import { RiSearchLine } from "react-icons/ri";
import React, { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { ToastContainer } from "react-toastify";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

  //generic to handle the search click
  function submitHandler1<T extends FormEvent<HTMLFormElement>>(e?: T): void {
    if (e) e.preventDefault();
    if (!searchTerm.trim().length) return;

    router.push(`/search/${searchTerm}`);
  }

  return (
    <>
      <div className="flex justify-center items-center p-2 flex-1 w-full }">
        <div className="bg-inherit border border-gray border-r-0 min-h-11 w-2/3 lg:w-[28rem] rounded-l-md">
          <form onSubmit={submitHandler1}>
            <input
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              type="text"
              className="focus-within:bg-none focus:outline-none bg-inherit px-3 text-whiteText w-full py-2 focus:bg-whiteText  focus:text-black"
              placeholder="Search"
            />
          </form>
        </div>

        <button
          onClick={(e) => submitHandler1()}
          className="bg-greenColor px-4 py-3 rounded-r-full min-h-11 overflow-hidden"
        >
          <RiSearchLine className="h-[1.1rem] w-5 text-cyan-50 text-center" />
        </button>
      </div>
      {/*{For ToastNotification}*/}
      <ToastContainer autoClose={3000} />
    </>
  );
};
export default SearchBar;
