import Link from "next/link";
import { AiOutlineShopping } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="bg-blueBgColor text-whiteText">
      <Link
        href="/"
        className="flex justify-center items-center gap-1 md:gap-2 "
      >
        <AiOutlineShopping className="text-3xl md:text-4xl" />
        <h1 className="text-lg font-semibold md:text-2xl mt-1">PointXero</h1>
      </Link>
      <div>
        <ul>
          <li>Twitter</li>
          <li>Instagram</li>
          <li>WhatsApp</li>
          <li>Email</li>
        </ul>
      </div>
    </footer>
  );
};
export default Footer;
