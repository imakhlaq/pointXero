"use client";
import { RiSearchLine } from "react-icons/ri";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import {FormEvent} from "react";

type T = {
  e: React.FormEvent | React.MouseEvent<HTMLButtonElement, MouseEvent>;
};

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

  function submitHandler1<T>(e: T) {


  }

  return (
    <div className="flex justify-center items-center rounded-sm p-2 flex-1 w-full }">
      <div className="bg-inherit border border-gray border-r-0 rounded-l-md min-h-11 w-2/3 lg:w-[28rem] rounded">
        <form onSubmit={event => {}}>
          <input
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            type="text"
            className="focus-within:bg-none focus:outline-none bg-inherit px-3 text-whiteText w-full py-2 focus:bg-whiteText rounded focus:text-black"
            placeholder="Search"
          />
        </form>
      </div>

      <button
        onClick={(event) => {}}
        className="bg-greenColor px-4 py-2.5 rounded-r-md min-h-11 overflow-hidden"
      >
        <RiSearchLine className=" h-4 w-4 text-cyan-50 text-center" />
      </button>
    </div>
  );
};
export default SearchBar;
