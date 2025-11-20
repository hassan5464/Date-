import React, { useState } from "react";
import gsap from "gsap";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);


  return (
    <nav className="fixed  top-0 right-0  w-screen z-50 h-[88px] p-2   ">
      <div className="container flex items-center justify-between bg-(--NavColor) backdrop-blur-sm border-(--NavBorder) rounded-full w-3/4 h-full   ">
        <img
          src="./logo.png"
          alt="logo brand"
          className="w-18 h-6 object-cover"
        />
        <div className="hidden md:block">
          <ul className="flex items-center gap-4">
            <li className="text-[#0E300F] font-semibold">Products</li>
            <li className="text-[#0E300F] font-semibold">Contact Us </li>
            <li className="text-[#0E300F] font-semibold">Benefits</li> 
          </ul>
        </div>
        <button
          type="button"
          onClick={() => {
            isOpen ? setIsOpen(false) : setIsOpen(true);
          }}
          className=" lg:hidden cursor-pointer rounded-md p-2 "
          aria-controls="mobile-menu"
          aria-expanded="false"
        >
          <span className=" -inset-0.5" />
          <span className="sr-only">Open main menu</span>

          {isOpen ? (
            <svg
              className="size-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
              data-slot="icon"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="block size-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
              data-slot="icon"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
