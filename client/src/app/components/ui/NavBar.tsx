"use client";
import Link from "next/link";
import SearchBar from "../search/SearchBar";
import { AiOutlineShopping, AiOutlineShoppingCart } from "react-icons/ai";
import { RxHamburgerMenu } from "react-icons/rx";
import { useGetLoggedData } from "@/hooks/useGetLoggedData";
import { useAppSelector } from "@/store/hooks";
import { useEffect } from "react";

const NavBar = () => {
  const setLogin = useGetLoggedData();
  //checking logged
  useEffect(() => {
    setLogin();
  }, []);

  const isUserLogged = useAppSelector((state) => state.auth);

  return (
    <>
      <header className="flex justify-between px-4 py-3 md:px-7 md:py-5 items-center text-white bg-blueBgColor">
        <Link
          href="/"
          className="flex justify-center items-center gap-1 md:gap-2"
        >
          <AiOutlineShopping className="text-3xl md:text-4xl" />
          <h1 className="text-lg font-semibold md:text-2xl mt-1">PointXero</h1>
        </Link>
        <div className="hidden lg:block">
          <SearchBar />
        </div>

        <nav className="hidden lg:block">
          <ul className="flex gap-16 text-lg font-medium">
            <li>
              <Link href="/cart" className="hover">
                <AiOutlineShoppingCart className="h-7 w-7" />
              </Link>
            </li>

            {isUserLogged?.userName && (
              <>
                <li>
                  <Link href="/orders">Orders</Link>
                </li>
                <li>Account</li>
              </>
            )}
            {!isUserLogged?.userName && (
              <>
                <li>
                  <Link href="/login">Login</Link>
                </li>
                <li>
                  <Link href="/signup">Signup</Link>
                </li>
              </>
            )}
          </ul>
        </nav>
        <nav className="lg:hidden">
          <RxHamburgerMenu size="2rem" />
        </nav>
      </header>
      <div className="lg:hidden bg-blueBgColor">
        <SearchBar />
      </div>
    </>
  );
};
export default NavBar;
