import React from "react";
import { footer } from "@/data/Footer";
import { BiLeftArrowAlt } from "react-icons/bi";
import { SiInstagram, SiAparat } from "react-icons/si";
import { RiLinkedinFill } from "react-icons/ri";
import { FaTwitter, FaTelegramPlane } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="container mx-auto w-3/4 md:w-full xl:w-3/4">
      <div className="flex flex-col-reverse text-sm h-16 items-center container mx-auto md:flex-row md:justify-between md:font-bold md:text-lg md:border md:rounded-full md:bg-slate-100 md:px-3  lg:px-7 mt-14">
        <div className="flex items-center pt-3 md:pt-0 text-blue-800">
          <BiLeftArrowAlt className="md:text-xl mt-1" />
          <Link href="/">{footer.button[0].name}</Link>
        </div>
        <div className="flex">
          {footer.support.map((item) => (
            <div key={item.name}>
              <div className="px-1">{item.name}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col-reverse w-full mx-auto mt-12 lg:flex-row lg:items-start">
        <div className="flex flex-col w-72 justify-center mx-auto mt-10 md:mt-0">
          <div className="font-bold text-center md:text-right ">
            {footer.socialNetworks[0].name}
          </div>
          <div className="flex text-2xl text-blue-900 mt-4">
            <Link href="/">
              <SiAparat className="border w-10 h-10 rounded-xl p-2 m-2 bg-slate-100 hover:text-blue-500 hover:bg-white" />
            </Link>
            <Link href="/">
              <RiLinkedinFill className="border w-10 h-10 rounded-xl p-2 m-2 bg-slate-100 hover:text-blue-500 hover:bg-white" />
            </Link>
            <Link href="/">
              <FaTelegramPlane className="border w-10 h-10 rounded-xl p-1 m-2 bg-slate-100 hover:text-blue-500 hover:bg-white" />
            </Link>
            <Link href="/">
              <FaTwitter className="border w-10 h-10 rounded-xl p-2 m-2 bg-slate-100 hover:text-blue-500 hover:bg-white" />
            </Link>
            <Link href="/">
              <SiInstagram className="border w-10 h-10 rounded-xl p-2 m-2 bg-slate-100 hover:text-blue-500 hover:bg-white" />
            </Link>
          </div>
          <div className=" flex justify-center">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAH0AAACICAMAAAD9ARS9AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAcJQTFRFR3BMBAMFKVaXKVaXKVaXKVaXKVaXKVaXKVaXKVaXKVaXKVaXBAMFKVaXKVaXKVaXKVaXKVaXBAMF95Qh95Qh95Qh95QhBAMF95Qh95QhBAMFBAMFBAMF95QhBAMF95QhBAMF95Qh95Qh95QhBAMFBAMFBAMFs7Kz95Qh95QhBAMFBAMFBAMF95Qh95Qhs7Kzs7Kzs7Kzs7Kzs7Kzs7Kzs7Kzs7Kzs7Kzs7Kzs7Kzs7Kzs7Kzs7KzKVaX95Qhs7KzBAMF95ok95oi95oj958i95oh+u07+u08958m+d1B+MAn+u1B+dYp+dww+KUn+u1C+e00+u06+e0z+dwq+dhA+MYj+dc++dYq+dw1+e0x+uc++e01+u1D+e05+cc3+KUq+dI8+dJB+dJA+d1A+cEy+Mso+cw5+uhG+Kop+cc7+LAt+KUp958k+MYo96Uh+LAv+LAq+d0/+dw2+uI9+LAl958n+cE0+MYq+cwx+LUu+Lso+dg/+cYw+uI++LAm+ec5+NEk+dEz958l+eIz+NEl+ect+Lss+dhD+Msn96Ui+dct+dw9+eEs+dw3+uhE+dYo+eI2+LAo+dYr+Lsu96Uk+u1AIQZNDwAAAD10Uk5TAL8gMJ+/QIAQ789gQN+vcFCPgBDfMO8gn8+PMBCP36+fIGBQ789w779wYFCvQICPUDDPvyBgEJ+AQHDfrw3sfvgAAAhQSURBVHja7VsHc9s2FAYpEuAQh2RbsiVZlh15xHac4SZtmopm9upI2iTde++99967/b99AEGR5tAwKeWup3dnkQRBfHgT48EITWhCExqORJsAWfgmQCu61uGkSuKYwYnaCRMZJzY2OhGSlfEx3omTNiZ4xewkkTwecK2TTPZ4wVWZEEkdJ/MBuOzxqkhd+NH7na9z1Y7boD4ua99l4TIvLI3azxPdC49H8Yqa7NvGWNC5ganRwCKPA92XME6xhtGic2eT0M1A11PkPh7JG6mDqTb6YTaddcTtwRq91hMYtNOsMX+DT2C9xF+N3teldIPQRhjm0gdxe/Rq5zZnpEtllAOsmTqMiZ10nYxe8OboWfedPfXNSAd3zqAZe1Hgg64xygm1mmLW/ojfKfRyVjMbeCEFozvH1HvPQ7ONAFZyNOuC97B3TzV6DmqXhwfXPdWohexqJ0OD+0NAFqsUk7TbFxyL3bl2pqkHTjC6gtEbHMsQf6TQMm/PsZDEjc5We+4bADYLDqEV557dTooOMYqvTzXRmNnajk36FSP77kZ01tjdujASTZnJha84eCxU7cwmX0KRVWvidom3uUB2jQNGFocLC08J9osShYnp6/AmVinjpk4hcLhCYMXJ/OgRbKq3bMOf73CkFNqqKikp9pn35p0d36MxcIpzyLlPMuIbZMmMA7iJ0KjRNZweFjRZ1nJdUuHdW2Sq1WcYznNRo0c2RSWlj20mzv72NpUlEex0owpiak5za1FSI9i4/1ZaToLHse1YfYC5V5bBLKTuhN3YHuhiICU189w6vv/eZ8EQTGIyzeB2jd5ckn7T2gARQcsKXggL3bDEwJfEPsNQR80cZ/SQoUs4vIRMi2F8fmmQ7Dv0gdRVIka0qiq9Jl6F7OFFCrCVuDuVeqxvs8eY7hw9jB3M5xMDiZ6Xo/ngu7HDDhX3Jz23rIycNpDoqe5Mcovtns7lBOtR1OS0I5Zzy8ZZ6cuDXRMMg3j9K1hBJjbzfKrQa/RWoqOdHA5JanZnM1Lnislzu1zBoXmzh/IUY5TgitpnqYXTwLXs4Iho4sAhePcImMdWGRk4Ggw2wc1/tzQ+3RnrkYeI8KUxn/fAgfQ1a9xHPehwp9NTLgQraEITmtD/jerFOkIN+oOqxWID0YdiFS5FVsYfGhvl8nrR+6LRWskNXXDbVVR0Bbhddt0ahXXdZfZLy2rsgT4BNRl+3W3mgOsxLFAUhl51N1m7G4BTRa02e2g2l+GBVWiUaTmVQxHE1KjWs4CvA8hyA9Bb7jpDX3HXBReaLLs1dwW1W65L+WyV4YELZ9OXDasjZAAvupuAVwP0aru9QZtadhu0AFoGrA13g6LX3I26pweKVWa/HrpbW8+AXnabwjK0JviMVN02FDQZOjDZRhS96QoClbeH3grxLmTSOnxfBjum6KjZhsZWoDtC290A+RZBKy0qizr0SGgCJkOvt91io5gLOsi7VW5VGTqz76ZbpNy1oKRYdeEBri23TA2kCTWaZRDCCnRtJQ90VG8tC0IV1ZhChVpVYDoVNqGkgVYAtSbUNwUaDKBaXQAqg8WXlzfgHq0LtUmonNCEBqIZZytaNFVZiFXb78xEiw44S7Fqq9vDoc8709GiJceZipbNOfPRollnLVp0aGfnlqHQp50YVwtOjKtFJ97JSryTt+7s3D6c4J0oV1NQtBATfKyT+5x4J1d3do4MJ/gYV7TZKFdz8U7OxjsJgh9O9NPO6ShXs7RoKSr4V6KdrNBqU1HBDyr6iuPRJ/wKfZjmd999xW/2eYKg9AG/TjNlMfqSXysIbe9E6Ggf9Dn+7edveNe5KSZMSg/8zZtdRDO8k3+eP+3dzKJF3slT5+7mXyJ0MAK+ergP+hSY9tnrd9519e0bT51k4J4ur//+06MP3fj+cQCnGpkBrNe+uf/r8z9fe5GBw5fQ8bNf3HnXuU8/fhK+XKBfHhwO3MM6e9+9Vy8//zJvgrm688ODj/772+u8Px7Wj98+fP6Ra4C03yuCL8/cd+XcPRff9foDdDQEfuTwIKoHrEv3PnD5uW4TYPAV550H/3jozS64h/XXw78+8lLIFsFVXr3y1j3vhTzh+GoX/NhAhgem/OxHzgsXqXkFxnjpfefup51QAAZn/+Uf55nHHCcUZZ37P3M+fCLsLyd89IODuRsY9CkQ9ckQB2DQZ2jRyVAYnXVO0WoXHOeAX7TlVbvg6wLolq7gtwcPNQ6z/bWQMsCruB8FwZhX2woFY15tYVeoOcHEPxj6mkP7vo86VTiCzTND78qURt7pA5TdoJPwvrIPLVVCgZJa/a3HDh+By/GB0OFbCjG1Fsh0jrbqWdr+QMfMIw5UuvIAg5lbpHoCiSzysu2d1UNwOQa9uG0g9IV5btdb0z6jswu8taVp3xJn1vb7xj/no6/5hjJf8dFvu4NH+EOrR9GEJjShQYglXfwNacUvEUMvg7tC3uA6O9FHaBpAsUx6tNEkYsnw8igS8bshGd5jbjwT71fusoY7Bk2AywROU3lJCZlgnhK3NKWg0IMHhOePlWxy0A2kKJYB6Lap6IYoQs7MoiKXiU7z4FhGikx5F2kFLJdUUya0FkU2Rc3/97m9kGiJHYsQWyUG1kwTrhLGpEOwaWsmNqlcRFuSTdvEMq1gqbYsSZCzADGZuiZbIKC9H6iH1J/hnfmgGRi4shS4Ghy8KQHLHf84EMtVGaJlWaFaJEPKyJQUy7Ih2WyRAsFwxfAvxwomtqXbBNLUsoVtQ4H8DH0Jf0RXkCgqIA69QAxZIpntXwL5RTUicW2W/IS/nZCS0+EACM76vwQiULzMRyBeol4R03Lmk1g5oTj9B8uQUcWwuojoAAAAAElFTkSuQmCC"
              width={80}
              height={32}
            ></img>
          </div>
        </div>
        <div className="grid grid-cols-2 mx-auto flex-1 lg:ml-24 gap-x-8 gap-y-4 sm:gap-x-14 sm:gap-y-8 md:grid-cols-4 md:gap-x-12 lg:flex lg:justify-between lg:gap-x-2 ">
          <div className="text-sm">
            <div className="text-right text-lg font-bold">
              {footer.sources[0].name}
            </div>
            <div className="mt-5">
              {footer.moreSources.map((item) => (
                <ul className="py-1 md:py-2 text-right">
                  <Link key={item.name} href={item.href ? item.href : "/"}>
                    {item.name}
                  </Link>
                </ul>
              ))}
            </div>
          </div>
          <div>
            <div className="text-sm">
              <div className="text-right text-lg font-bold">
                {footer.communication[0].name}
              </div>
              <div className="mt-5">
                {footer.morecommunication.map((item) => (
                  <ul className="py-1 md:py-2 text-right" key={item.name}>
                    <Link key={item.name} href={item.href ? item.href : "/"}>
                      {item.name}
                    </Link>
                  </ul>
                ))}
              </div>
            </div>
          </div>
          <div>
            <div className="text-sm">
              <div className="text-right text-lg font-bold">
                {footer.gettingZarinPal[0].name}
              </div>
              <div className="mt-5">
                {footer.moreGettingZarinPal.map((item) => (
                  <ul className="py-1 md:py-2 text-right" key={item.name}>
                    <Link key={item.name} href={item.href ? item.href : "/"}>
                      {item.name}
                    </Link>
                  </ul>
                ))}
              </div>
            </div>
          </div>
          <div>
            <div className="text-sm">
              <div className="text-right text-lg font-bold">
                {footer.products[0].name}
              </div>
              <div className="mt-5">
                {footer.moreProducts.map((item) => (
                  <ul className="py-1 md:py-2 text-right" key={item.name}>
                    <Link key={item.name} href={item.href ? item.href : "/"}>
                      {item.name}
                    </Link>
                  </ul>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center text-sm my-7">
        <span>{footer.zaripal[0].name}</span>
      </div>
    </footer>
  );
};

export default Footer;
