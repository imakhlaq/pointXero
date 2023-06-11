import Link from 'next/link';
import SearchBar from '../search/SearchBar';
import { AiOutlineShopping } from 'react-icons/ai';
import { RxHamburgerMenu } from 'react-icons/rx';

const NavBar = () => {
  return (
    <header className='flex justify-between px-4 py-3 md:px-7 md:py-5 items-center text-white bg-blueBgColor'>
      <Link
        href='/'
        className='flex justify-center items-center gap-1 md:gap-2'>
        <AiOutlineShopping className='text-3xl md:text-4xl' />
        <h1 className='text-lg font-semibold md:text-2xl mt-1'>PointXero</h1>
      </Link>
      <SearchBar />
      <nav className='hidden lg:block'>
        <ul className='flex gap-10 text-lg font-medium'>
          <li>Account</li>
          <li>Orders</li>
          <li>Cart</li>
        </ul>
      </nav>
      <nav className='lg:hidden'>
        <RxHamburgerMenu size='2rem' />
      </nav>
    </header>
  );
};
export default NavBar;
