import React from "react";
import { Content } from "@/data/Content";
import Link from "next/link";
import { RiArrowDownSLine } from "react-icons/ri";

const Section = () => {
  return (
    <div className="container w-full border rounded-3xl mt-5 bg-blue-900 mx-auto xl:w-3/4">
      <div className="flex flex-row px-20 bg-hero">
        <div className="flex-1 pt-20 w-2/5 mx-auto hidden lg:flex">
          <img src="https://www.zarinpal.com/assets/images/home.svg?c6c0b9504cbf3274eeaac49e1aa71fb4" />
        </div>
        <div className="flex flex-1 pt-20 flex-col text-right sm:text-center lg:text-right justify-center text-white">
          <p className="text-xl sm:text-3xl pb-4 font-bold">
            {Content.Section1[0].name}
          </p>
          <p className="text-xl sm:text-3xl pb-5 lg:pb-10 font-bold">
            {Content.Section1[1].name}
          </p>
          <p className="font-medium tracking-widest ">
            {Content.Section1[2].name}
          </p>
          <div className="flex justify-center lg:justify-end mt-16">
            <button className="border border-blue-900 w-16 h-10 mx-1 pb-1 bg-blue-700 rounded-xl">
              <Link href="/">{Content.Login[0].name}</Link>
            </button>
            <button className="border border-blue-900 w-20 h-10 bg-yellow-400 rounded-xl text-black font-medium">
              <Link href="/">{Content.Register[0].name}</Link>
            </button>
          </div>
        </div>
      </div>
      <div className="flex w-44 mx-auto relative top-20">
        <img
          src="https://www.zarinpal.com/assets/images/arrowbottom.svg?6588af1e1354de9198542e58bf5e3224"
          alt="arrowbottom"
        />
      </div>
      <button className="relative mx-auto flex justify-center">
        <RiArrowDownSLine className="text-4xl" />
      </button>
    </div>
  );
};

const Main = () => {
  return <Section />;
};

export default Main;
