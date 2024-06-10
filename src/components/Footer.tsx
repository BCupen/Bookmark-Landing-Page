import { Facebook, FooterLogo, Twitter } from "./SVGs";

const Footer = () => {
  return (
    <div className="w-full gap-6  flex flex-col items-center md:flex-row md:justify-around bg-neutral-blue-200 -mt-8 p-8">
      <div className="flex flex-col md:flex-row gap-6 md:gap-12">
        <FooterLogo />
        <ul className="flex flex-col md:flex-row items-center gap-4 md:gap-10 ">
          <li className="uppercase text-[18px] text-white hover:text-primary-red cursor-pointer">
            Features
          </li>
          <li className="uppercase text-[18px] text-white hover:text-primary-red cursor-pointer">
            Pricing
          </li>
          <li className="uppercase text-[18px] text-white hover:text-primary-red cursor-pointer">
            Contact
          </li>
        </ul>
      </div>

      <div className="flex justify-center items-end gap-8 ">
        <button className="fill-white hover:fill-primary-red">
          <Facebook />
        </button>
        <button className="fill-white hover:fill-primary-red">
          <Twitter />
        </button>
      </div>
    </div>
  );
};

export default Footer;
