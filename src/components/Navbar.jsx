import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="text-white flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4">
      <h1 className="w-full text-3xl text-[#00df9a] font-semibold p-4">
        <a className="hover:text-gray-300" href="#">
          REACT.
        </a>
      </h1>
      <ul className="hidden md:flex">
        <li className="p-4">
          <a className="hover:text-[#00df9a]" href="#">
            Home
          </a>
        </li>
        <li className="p-4">
          <a className="hover:text-[#00df9a]" href="#">
            Company
          </a>
        </li>
        <li className="p-4">
          <a className="hover:text-[#00df9a]" href="#">
            Resources
          </a>
        </li>
        <li className="p-4">
          <a className="hover:text-[#00df9a]" href="#">
            About
          </a>
        </li>
        <li className="p-4">
          <a className="hover:text-[#00df9a]" href="#">
            Contact
          </a>
        </li>
      </ul>
      <div onClick={handleNav} className="block md:hidden cursor-pointer">
        {nav ? (
          <AiOutlineClose className="hover:text-[#00df9a]" size={30} />
        ) : (
          <AiOutlineMenu className="hover:text-[#00df9a]" size={30} />
        )}
      </div>
      <div
        className={
          nav
            ? "fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
            : "fixed left-[-100%] top-0 w-[60%] h-full ease-in-out duration-500"
        }
      >
        <h1 className="w-full text-3xl text-[#00df9a] font-semibold m-4 p-4">
          <a className="hover:text-gray-300" href="#">
            REACT.
          </a>
        </h1>
        <ul className="uppercase p-4">
          <li className="p-4 border-b border-gray-600">
            <a className="hover:text-[#00df9a]" href="#">
              Home
            </a>
          </li>
          <li className="p-4 border-b border-gray-600">
            <a className="hover:text-[#00df9a]" href="#">
              Company
            </a>
          </li>
          <li className="p-4 border-b border-gray-600">
            <a className="hover:text-[#00df9a]" href="#">
              Resources
            </a>
          </li>
          <li className="p-4 border-b border-gray-600">
            <a className="hover:text-[#00df9a]" href="#">
              About
            </a>
          </li>
          <li className="p-4">
            <a className="hover:text-[#00df9a]" href="#">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
