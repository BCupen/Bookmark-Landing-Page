import { useState } from "react";
import { Close, Facebook, Hamburger, MobileLogo, Twitter } from "./SVGs";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <header className="w-full py-12 px-6 flex justify-between items-center">
      <img src="./Bookmark-Landing-Page/images/logo-bookmark.svg" alt="logo" className={`${toggle ? 'invisible md:visible' : 'block'}`}/>
      {/* Desktop Nav */}
      <nav className="hidden md:flex gap-10">
        <ul className="flex items-center gap-10">
          <li className="uppercase text-[18px] text-neutral-blue-200 hover:text-primary-red cursor-pointer">
            Features
          </li>
          <li className="uppercase text-[18px] text-neutral-blue-200 hover:text-primary-red cursor-pointer">
            Pricing
          </li>
          <li className="uppercase text-[18px] text-neutral-blue-200 hover:text-primary-red cursor-pointer">
            Contact
          </li>
        </ul>
        <button className="cursor-pointer rounded-md border-2 border-white hover:border-primary-red bg-primary-red hover:bg-white tracking-wider text-[18px] text-white hover:text-primary-red uppercase py-2 px-6">
          Login
        </button>
      </nav>

      {/* Mobile Hamburger */}
      <button onClick={() => setToggle(true)} className={`${toggle ? 'invisible' : 'block'} md:hidden`}>
        <Hamburger />
      </button>

      {/* Mobile Menu */}
      {toggle && (
        <div className="fixed z-10 top-0 left-0 w-full h-screen md:hidden flex flex-col bg-neutral-blue-200 bg-opacity-90 py-10 px-6">
          <div className="flex justify-between mb-8">
            <MobileLogo />
            <button onClick={() => setToggle(false)}>
              <Close />
            </button>
          </div>
          <nav className="flex flex-col gap-6">
            <ul className="flex flex-col items-center justify-center border-y border-neutral-blue-100">
              <li className="w-full text-center uppercase py-5 text-white font-medium text-lg tracking-widest border-b border-neutral-blue-100">Features</li>
              <li className="w-full text-center uppercase py-5 text-white font-medium text-lg tracking-widest border-b border-neutral-blue-100">Pricing</li>
              <li className="w-full text-center uppercase py-5 text-white font-medium text-lg tracking-widest">Contact</li>
            </ul>
            <button className="w-full border-2 border-white tracking-widest text-lg font-semibold text-white rounded-md py-2 uppercase">
                Login
            </button>
          </nav>
          <div className="w-full flex justify-center items-end gap-8 grow fill-white">
            <Facebook />
            <Twitter />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
