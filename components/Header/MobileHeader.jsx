import Link from "next/link";
import React from "react";

const MobileHeader = () => {
  return (
    <div className="lg:hidden fixed z-50 top-auto bottom-0 w-full md:w-2/3 md:left-1/2 p-4 transition-all duration-500 transform md:-translate-x-1/2 ">
      <nav className="flex justify-evenly py-3 bg-primary rounded-lg overflow-hidden">
        <button className="text-white font-medium relative text-inverted text-center">
          <i className="block text-xl uil uil-estate"></i>
          <Link href="/"> Home </Link>
        </button>
        <button className="text-white font-medium relative text-inverted text-center">
          <i className="block text-xl uil uil-user-md"></i>{" "}
          <Link href="/about"> About </Link>
        </button>
        <button className="text-white font-medium relative text-inverted text-center">
          <i className="block text-xl uil uil-lightbulb-alt"></i>{" "}
          <Link href="/projects"> Projects </Link>
        </button>
        {/* <button className="text-white font-medium relative text-inverted text-center">
          <i className="block text-xl uil uil-bars"></i>{" "}
          <Link href="/"> Menu </Link>
        </button> */}
      </nav>
    </div>
  );
};

export default MobileHeader;
