import React from "react";
import { Content } from "@/data/Content";
import Link from "next/link";
import { RiArrowDownSLine } from "react-icons/ri";
import { BiLeftArrowAlt } from "react-icons/bi";
import Image from "next/image";

const SectionOne = () => {
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
      <div className="flex mx-auto justify-center relative top-20">
        <Image
          src="assets/arrowbottom.svg"
          alt="arrowbottom"
          width={190}
          height={100}
        />
      </div>
      <button className="relative mx-auto flex justify-center">
        <a href="#SectionTwo">
          <RiArrowDownSLine className="text-3xl" />
        </a>
      </button>
    </div>
  );
};

const SectionTwo = () => {
  return (
    <div id="SectionTwo" className="container w-full mx-auto xl:w-3/4 pt-24">
      <div className="flex flex-wrap flex-col-reverse lg:flex lg:flex-row justify-center items-center">
        <div className="flex flex-1 flex-col text-center md:text-right">
          <p className="text-2xl text-slate-500">{Content.Section2[0].name}</p>
          <p className=" text-xl lg:text-3xl text-slate-800 py-5 font-bold">
            {Content.Section2[1].name}
          </p>
          <p className=" text-center mx-5 md:mx-0 ">
            {Content.Section2[2].name}
          </p>
          <div className=" my-8">
            <hr />
          </div>
          <div className="flex mx-auto justify-center lg:justify-end">
            <p className="border h-9 flex items-center rounded-lg justify-center w-28 mx-8 bg-sky-100 text-blue-800 ">
              <BiLeftArrowAlt className="mt-1 text-lg" />
              <Link href="/">{Content.moreAbout[0].name}</Link>
            </p>
            <Link
              className="border h-9 flex items-center rounded-lg justify-center w-36 bg-yellow-400 text-sm"
              href="/"
            >
              {Content.Makepayment[0].name}
            </Link>
          </div>
        </div>
        <div className=" hidden sm:flex flex-1 relative bottom-10 xl:left-20">
          <Image src="assets/pg.svg" alt="pgsvg" width={450} height={450} />
        </div>
      </div>
    </div>
  );
};

const Main = () => {
  return (
    <>
      <SectionOne />
      <SectionTwo />
    </>
  );
};

export default Main;
