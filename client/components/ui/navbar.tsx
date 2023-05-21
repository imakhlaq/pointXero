import Link from 'next/link';

const Navbar = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link href="/" className="">
              PointXero
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
