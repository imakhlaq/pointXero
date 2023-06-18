import { RiSearchLine } from "react-icons/ri";

const SearchBar = () => {
  return (
    <div className="flex justify-center items-center rounded-sm p-2 flex-1 w-full">
      <div className="bg-inherit p-1 border border-gray border-r-0 rounded-l-md min-h-11 w-2/3 lg:w-[28rem]">
        <input
          type="text"
          className="focus-within:bg-none focus:outline-none bg-inherit px-3 text-whiteText w-full"
          placeholder="Search"
        />
      </div>

      <button className="bg-greenColor px-4 py-2.5 rounded-r-md min-h-11 overflow-hidden">
        <RiSearchLine className=" h-4 w-4 text-cyan-50 text-center" />
      </button>
    </div>
  );
};
export default SearchBar;
