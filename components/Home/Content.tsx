import React from "react";
import { ContentMain } from "@/data/Content";
import Link from "next/link";
import { RiArrowDownSLine } from "react-icons/ri";
import { BiLeftArrowAlt } from "react-icons/bi";
import Image from "next/image";

const SectionOne = () => {
  return (
    <div className="container w-full border rounded-3xl mt-5 bg-blue-900 mx-auto xl:w-3/4">
      <div className="flex flex-row px-10 lg:px-20 bg-hero">
        <ul className="flex flex-1 pt-20 flex-col text-right sm:text-center lg:text-right justify-center text-white">
          <li className="text-xl sm:text-2xl pb-4 font-bold">
            {ContentMain.Section1[0].name}
          </li>
          <li className="text-xl sm:text-2xl pb-5 lg:pb-10 font-bold">
            {ContentMain.Section1[1].name}
          </li>
          <li className="font-medium text-justify leading-10">
            {ContentMain.Section1[2].name}
          </li>
          <div className="flex justify-center lg:justify-start mt-16">
            {" "}
            <button className="border border-blue-900 w-20 h-10 bg-yellow-400 rounded-xl text-black font-medium">
              <Link href="/">{ContentMain.Register[0].name}</Link>
            </button>
            <button className="border border-blue-900 w-16 h-10 mx-1 pb-1 bg-blue-700 rounded-xl">
              <Link href="/">{ContentMain.Login[0].name}</Link>
            </button>
          </div>
        </ul>
        <div className="flex-1 pt-20 w-2/5 mx-auto hidden lg:flex">
          <img src="https://www.zarinpal.com/assets/images/home.svg?c6c0b9504cbf3274eeaac49e1aa71fb4" />
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
    <div className="container w-full mx-auto xl:w-3/4 pt-24" id="SectionTwo">
      <div className="flex flex-wrap flex-col justify-center items-center lg:flex lg:flex-row">
        <div className="hidden sm:flex flex-1 relative lg:justify-start">
          <Image src="assets/pg.svg" alt="pgsvg" width={450} height={500} />
        </div>
        <div className="flex flex-1 flex-col text-center mx-10 md:justify-end md:text-right lg:mx-0 lg:pr-14 lg:justify-end">
          <p className="text-2xl text-slate-500 font-medium">
            {ContentMain.Section2[0].name}
          </p>
          <p className=" text-xl lg:text-3xl text-slate-800 py-5 font-bold">
            {ContentMain.Section2[1].name}
          </p>
          <p className=" text-justify md:mx-0 leading-10 text-gray-500 lg:text-justify ">
            {ContentMain.Section2[2].name}
          </p>
          <div className="my-8">
            <hr />
          </div>
          <div className="flex justify-center md:justify-start">
            {" "}
            <Link
              className="border h-9 flex items-center rounded-lg justify-center w-36 bg-yellow-400 text-sm"
              href="/"
            >
              {ContentMain.Makepayment[0].name}
            </Link>
            <p className="border h-9 flex items-center rounded-lg justify-center w-28 mx-2 bg-sky-100 text-blue-800 ">
              <BiLeftArrowAlt className="mt-1 text-lg" />
              <Link href="/">{ContentMain.moreAbout[0].name}</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
const SectionThree = () => {
  return (
    <div className="container flex w-full mx-auto pt-10 sm:flex-col xl:w-3/4 lg:pt-16 lg:flex-row lg:px-0">
      <div className="flex flex-1 flex-col text-center mx-10 lg:mx-0 md:text-right lg:mt-14 lg:text-start">
        <p className="text-2xl text-slate-500 font-medium">
          {ContentMain.Section3[0].name}
        </p>
        <p className=" text-xl lg:text-3xl text-slate-800 py-5 font-bold">
          {ContentMain.Section3[1].name}
        </p>
        <p className=" text-justify text-gray-500 leading-10 md:mx-0 lg:w-5/6 lg:text-justify">
          {ContentMain.Section3[2].name}
        </p>
        <div className="my-8 lg:w-5/6">
          <hr />
        </div>
        <div className="flex justify-center md:justify-start">
          {" "}
          <Link
            className="border h-9 flex items-center rounded-lg justify-center w-36 bg-yellow-400 text-sm"
            href="/"
          >
            {ContentMain.MakeZarinLink[0].name}
          </Link>
          <p className="border h-9 flex items-center rounded-lg justify-center w-28 mx-2 bg-sky-100 text-blue-800 ">
            <BiLeftArrowAlt className="mt-1 text-lg" />
            <Link href="/">{ContentMain.moreAbout[0].name}</Link>
          </p>
        </div>
      </div>
      <div className="hidden sm:flex sm:mx-auto lg:flex flex-1 md:mt-10 lg:justify-end ">
        <Image
          src="assets/social-image.svg"
          alt="socialimage"
          width={600}
          height={500}
        />
      </div>
    </div>
  );
};
const Sectionfour = () => {
  return (
    <div className="container w-full mx-auto xl:w-3/4 pt-24">
      <div className="flex flex-wrap flex-col justify-center items-center lg:flex lg:flex-row">
        <div className="hidden sm:flex flex-1 relative lg:justify-start">
          <Image
            src="assets/zarincard .svg"
            alt="pgsvg"
            width={410}
            height={300}
          />
        </div>
        <div className="flex flex-1 flex-col text-center mx-10 lg:mx-0 md:justify-end md:text-right lg:pr-14 lg:justify-end">
          <p className="text-2xl text-slate-500 font-medium">
            {ContentMain.Section4[0].name}
          </p>
          <p className=" text-xl lg:text-3xl text-slate-800 py-5 font-bold">
            {ContentMain.Section4[1].name}
          </p>
          <p className="text-justify text-gray-500 leading-10 lg:text-justify md:mx-0">
            {ContentMain.Section4[2].name}
          </p>
          <div className=" my-8">
            <hr />
          </div>
          <div className="flex justify-center md:justify-start">
            {" "}
            <Link
              className="border h-9 flex items-center rounded-lg justify-center w-36 bg-yellow-400 text-sm"
              href="/"
            >
              {ContentMain.RequestCard[0].name}
            </Link>
            <p className="border h-9 flex items-center rounded-lg justify-center w-28 mx-2 bg-sky-100 text-blue-800 ">
              <BiLeftArrowAlt className="mt-1 text-lg" />
              <Link href="/">{ContentMain.moreAbout[0].name}</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
const Sectionfive = () => {
  return (
    <div className="container flex w-full mx-auto pt-10 sm:flex-col xl:w-3/4 lg:pt-16 lg:px-0 lg:flex-row">
      <div className="flex flex-1 flex-col text-center mx-10 lg:mx-0 md:text-right lg:mt-14 lg:text-start">
        <p className="text-2xl text-slate-500 font-medium">
          {ContentMain.Section5[0].name}
        </p>
        <p className="text-xl lg:text-3xl text-slate-800 py-5 font-bold">
          {ContentMain.Section5[1].name}
        </p>
        <p className="text-justify text-gray-500 leading-10 md:mx-0 lg:w-5/6 lg:text-justify">
          {ContentMain.Section5[2].name}
        </p>
        <div className="my-8 lg:w-5/6">
          <hr />
        </div>
        <div className="flex justify-center md:justify-start">
          {" "}
          <Link
            className="border h-9 flex items-center rounded-lg justify-center w-48 bg-yellow-400 text-sm"
            href="/"
          >
            {ContentMain.ShareRequest[0].name}
          </Link>
          <p className="border h-9 flex items-center rounded-lg justify-center w-28 mx-2 bg-sky-100 text-blue-800 ">
            <BiLeftArrowAlt className="mt-1 text-lg" />
            <Link href="/">{ContentMain.moreAbout[0].name}</Link>
          </p>
        </div>
      </div>
      <div className="hidden md:flex sm:mx-auto flex-1 md:mt-10 lg:mt-0 lg:flex lg:justify-end lg:mr-10">
        <Image
          src="assets/payout.svg"
          alt="socialimage"
          width={500}
          height={400}
        />
      </div>
    </div>
  );
};

const SectionSix = () => {
  return (
    <div className="container w-full mx-auto xl:w-3/4 pt-24">
      <div className="flex flex-wrap flex-col justify-center items-center lg:flex lg:flex-row">
        <div className=" hidden md:flex flex-1 relative">
          <Image
            src="assets/zarinplus.svg"
            alt="pgsvg"
            width={460}
            height={450}
          />
        </div>
        <div className="flex flex-1 flex-col lg:pr-14 text-center mx-10 lg:mx-0 md:justify-end md:text-right lg:justify-end">
          <p className="text-2xl text-slate-500 font-medium">
            {ContentMain.Section6[0].name}
          </p>
          <p className=" text-xl lg:text-3xl text-slate-800 py-5 font-bold">
            {ContentMain.Section6[1].name}
          </p>
          <p className=" text-justify text-gray-500 leading-10 lg:text-justify md:mx-0">
            {ContentMain.Section6[2].name}
          </p>
          <div className=" my-8">
            <hr />
          </div>
          <div className="flex justify-center md:justify-start">
            {" "}
            <Link
              className="border h-9 flex items-center rounded-lg justify-center w-36 bg-yellow-400 text-sm"
              href="/"
            >
              {ContentMain.JoinZarinPlus[0].name}
            </Link>
            <p className="border h-9 flex items-center rounded-lg justify-center w-28 mx-2 bg-sky-100 text-blue-800 ">
              <BiLeftArrowAlt className="mt-1 text-lg" />
              <Link href="/">{ContentMain.moreAbout[0].name}</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Content = () => {
  return (
    <div className="mx-5 sm:mx-0">
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <Sectionfour />
      <Sectionfive />
      <SectionSix />
    </div>
  );
};

export default Content;
