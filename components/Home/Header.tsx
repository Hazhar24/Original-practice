import { header } from "@/data/header";
import type * as headerTypes from "@/data/header";
import Link from "next/link";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoMdMenu } from "react-icons/io";
import { BiLeftArrowAlt } from "react-icons/bi";

function LoginButton() {
  return (
    <button className="border w-28 h-10 hidden lg:inline rounded-2xl text-blue-800 bg-sky-100 hover:bg-yellow-50">
      <Link href="/">{header.button[0].name}</Link>
    </button>
  );
}

function Logo() {
  return (
    <Link href="/" className="flex justify-end">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="136"
        height="30"
        viewBox="0 0 156 35"
      >
        <g fill="none" fillRule="evenodd">
          <g fill="#FFD23F" transform="translate(126 5)">
            <path d="M.805554002 0L9.19560373 0C9.90558353 0 10.2674002.854571775 9.76904895 1.35646313L1.39947941 9.75975225C.894301476 10.2684259.0273069153 9.91574551.0273069153 9.20360237L0 .800313249C0 .359462731.354989899 0 .805554002 0M29.2072138 30L20.8049156 30C20.0944774 30 19.7324272 29.1454282 20.2311002 28.6435369L28.5992426 20.2402477C29.1047467 19.7315741 29.9722327 20.0842545 29.9722327 20.7963976L29.9996256 29.1996868C30.0132879 29.6405373 29.6512376 30 29.2072138 30M1.24847895 22.7299403L22.7354587 1.24822765C24.4000973-.416075883 27.0941835-.416075883 28.7515211 1.24822765 30.4161596 2.91245819 30.4161596 5.60581094 28.7515211 7.26281521L7.26454125 28.7518271C5.6072037 30.4160576 2.9058165 30.4160576 1.24847895 28.7518271-.41615965 27.0875236-.41615965 24.3941708 1.24847895 22.7299403z" />
          </g>
          <path
            fill="#303030"
            d="M110.968216,15.4996705 C112.412761,15.4996705 113.58367,16.671375 113.58367,18.1159205 L113.58367,32.1835341 C113.58367,33.6280795 112.412761,34.7997841 110.968216,34.7997841 C109.52367,34.7997841 108.352761,33.6280795 108.352761,32.1835341 L108.352761,18.1159205 C108.352761,16.671375 109.52367,15.4996705 110.968216,15.4996705 Z M22.3581591,3.37988636 C22.4758864,13.1305682 22.53475,18.0069697 22.53475,18.0090909 L22.53475,23.4142045 C22.53475,29.6879545 17.4804318,34.7923864 11.2679318,34.7923864 C5.05463636,34.7923864 0.000318181818,29.6879545 0.000318181818,23.4142045 L0.000318181818,18.315 C0.000318181818,16.8704545 1.17043182,15.69875 2.61577273,15.69875 C4.06031818,15.69875 5.23122727,16.8704545 5.23122727,18.315 L5.23122727,23.4142045 C5.23122727,26.8028409 7.93895455,29.5606818 11.2679318,29.5606818 C14.5953182,29.5606818 17.3038409,26.8028409 17.3038409,23.4142045 L17.3038409,18.1467045 L17.12725,3.44272727 C17.10975,1.99818182 18.2663409,0.812954545 19.7435,0.795454545 C21.1737273,0.795454545 22.3414545,1.94568182 22.3581591,3.37988636 Z M75.3767159,15.4996705 L86.7156932,15.4996705 C88.1602386,15.4996705 89.3311477,16.671375 89.3311477,18.1159205 C89.3311477,19.5596705 88.1602386,20.731375 86.7156932,20.731375 L75.3767159,20.731375 L75.3767159,22.9721705 C75.3767159,29.4893295 70.0742159,34.7918295 63.5570568,34.7918295 C57.0398977,34.7918295 51.7373977,29.4893295 51.7373977,22.9721705 L51.7373977,18.3144432 C51.7373977,16.8698977 52.9075114,15.6989886 54.3528523,15.6989886 C55.7973977,15.6989886 56.9683068,16.8698977 56.9683068,18.3144432 L56.9683068,22.9721705 C56.9683068,26.6050114 59.9242159,29.560125 63.5570568,29.560125 C67.1898977,29.560125 70.1458068,26.6050114 70.1458068,22.9721705 L70.1458068,14.3144432 C70.1458068,12.8698977 71.3167159,11.6989886 72.7612614,11.6989886 C74.2066023,11.6989886 75.3767159,12.8698977 75.3767159,14.3144432 L75.3767159,15.4996705 Z M32.4998068,15.4996705 L41.9837841,15.4996705 C43.4283295,15.4996705 44.5992386,16.671375 44.5992386,18.1159205 C44.5992386,19.5596705 43.4283295,20.731375 41.9837841,20.731375 L29.9145795,20.731375 C29.7356023,20.731375 29.5598068,20.7130795 29.390375,20.678875 C29.3442386,20.6693295 29.302875,20.6494432 29.2575341,20.6375114 C29.136625,20.6056932 29.0149205,20.5746705 28.9011705,20.5269432 C28.8454886,20.503875 28.7961705,20.468875 28.7420795,20.4410341 C28.6458295,20.3925114 28.5471932,20.3471705 28.4581023,20.2875114 C28.4056023,20.2525114 28.3610568,20.206375 28.3117386,20.1681932 C28.2298068,20.1037614 28.1454886,20.0425114 28.0715114,19.970125 C28.0269659,19.9255795 27.9927614,19.873875 27.9521932,19.8269432 C27.8837841,19.7481932 27.8113977,19.6718295 27.7525341,19.5843295 C27.7167386,19.5318295 27.6920795,19.4729659 27.6602614,19.4180795 C27.6077614,19.3273977 27.5520795,19.2398977 27.5107159,19.1428523 C27.4836705,19.0792159 27.4685568,19.0100114 27.4470795,18.9439886 C27.4144659,18.8485341 27.377875,18.7554659 27.3571932,18.6552386 C27.3412841,18.5812614 27.3404886,18.5025114 27.3309432,18.4269432 C27.3206023,18.333875 27.3007159,18.2431932 27.2999205,18.1469432 L27.124125,3.44296591 C27.106625,1.99842045 28.2632159,0.813193182 29.740375,0.795693182 C31.1706023,0.795693182 32.3375341,1.94592045 32.3550341,3.380125 L32.4998068,15.4996705 Z M99.3852045,15.4996705 C100.82975,15.4996705 102.000659,16.671375 102.000659,18.1159205 L102.000659,32.1835341 C102.000659,33.6280795 100.82975,34.7997841 99.3852045,34.7997841 C97.9406591,34.7997841 96.76975,33.6280795 96.76975,32.1835341 L96.76975,18.1159205 C96.76975,16.671375 97.9406591,15.4996705 99.3852045,15.4996705 Z M63.5548295,20.573 C62.9105114,20.573 62.2741477,20.3105 61.8207386,19.8570909 C61.359375,19.3957273 61.096875,18.7593636 61.096875,18.1150455 C61.096875,17.4707273 61.359375,16.8343636 61.8207386,16.3809545 C62.7275568,15.4661818 64.3821023,15.4582273 65.296875,16.3809545 C65.7502841,16.8343636 66.0127841,17.4707273 66.0127841,18.1150455 C66.0127841,18.7593636 65.7502841,19.3957273 65.296875,19.8570909 C64.8355114,20.3105 64.2071023,20.573 63.5548295,20.573 Z M110.963602,12.3559545 C110.319284,12.3559545 109.683716,12.0934545 109.229511,11.6400455 C108.776102,11.1786818 108.505648,10.5423182 108.505648,9.898 C108.505648,9.25368182 108.776102,8.61731818 109.229511,8.16390909 C109.802239,7.59118182 110.653375,7.32868182 111.44883,7.48777273 C111.608716,7.51959091 111.759057,7.56731818 111.910193,7.63095455 C112.053375,7.69459091 112.197352,7.76618182 112.33258,7.85368182 C112.467807,7.94913636 112.59508,8.05254545 112.705648,8.16390909 C113.159852,8.61731818 113.422352,9.25368182 113.422352,9.898 C113.422352,10.5502727 113.159852,11.1786818 112.705648,11.6400455 C112.59508,11.7514091 112.467807,11.8548182 112.33258,11.9423182 C112.197352,12.0298182 112.053375,12.1093636 111.910193,12.173 C111.759057,12.2286818 111.600761,12.2764091 111.44883,12.3082273 C111.289739,12.3400455 111.122693,12.3559545 110.963602,12.3559545 Z M38.5000455,31.1287614 C38.5636818,31.2798977 38.6034545,31.4310341 38.6352727,31.590125 C38.6670909,31.7492159 38.6909545,31.9083068 38.6909545,32.0673977 C38.6909545,32.2264886 38.6670909,32.3935341 38.6352727,32.552625 C38.6034545,32.7037614 38.5636818,32.8628523 38.5000455,33.0060341 C38.4364091,33.1571705 38.3648182,33.3003523 38.2781136,33.4355795 C38.1826591,33.5708068 38.07925,33.690125 37.9670909,33.8094432 C37.8557273,33.9208068 37.7284545,34.0242159 37.5932273,34.1117159 C37.458,34.1992159 37.3156136,34.2787614 37.1716364,34.3423977 C37.0212955,34.3980795 36.8693636,34.4458068 36.7102727,34.477625 C36.5511818,34.5094432 36.3928864,34.5253523 36.233,34.5253523 C36.0739091,34.5253523 35.9068636,34.5094432 35.7477727,34.477625 C35.5974318,34.4458068 35.4375455,34.3980795 35.2951591,34.3423977 C35.1432273,34.2787614 35.0008409,34.1992159 34.8656136,34.1117159 C34.7303864,34.0242159 34.6031136,33.9208068 34.4909545,33.8094432 C34.3795909,33.690125 34.2761818,33.5708068 34.1886818,33.4355795 C34.1019773,33.3003523 34.0216364,33.1571705 33.958,33.0060341 C33.9031136,32.8628523 33.8545909,32.7037614 33.8227727,32.552625 C33.7909545,32.3935341 33.7758409,32.2264886 33.7758409,32.0673977 C33.7758409,31.9083068 33.7909545,31.7492159 33.8227727,31.590125 C33.8545909,31.4310341 33.9031136,31.2798977 33.958,31.1287614 C34.0216364,30.9855795 34.1019773,30.8423977 34.1886818,30.7071705 C34.2761818,30.5719432 34.3795909,30.4446705 34.4909545,30.3333068 C34.6031136,30.2219432 34.7303864,30.1185341 34.8656136,30.0230795 C35.0008409,29.9355795 35.1432273,29.8639886 35.2864091,29.8003523 C35.4375455,29.7367159 35.5974318,29.6889886 35.7477727,29.6571705 C36.0659545,29.5935341 36.3928864,29.5935341 36.7102727,29.6571705 C36.8693636,29.6889886 37.0212955,29.7367159 37.1716364,29.8003523 C37.3156136,29.8639886 37.458,29.9355795 37.5932273,30.0230795 C37.7284545,30.1185341 37.8557273,30.2219432 37.9670909,30.3333068 C38.07925,30.4446705 38.1826591,30.5719432 38.2781136,30.7071705 C38.3648182,30.8423977 38.4364091,30.9855795 38.5000455,31.1287614 Z M80.6814886,25.0587273 L87.7156932,25.0587273 C88.8468295,25.0587273 89.7631932,25.9758864 89.7631932,27.1070227 C89.7631932,28.2381591 88.8468295,29.1545227 87.7156932,29.1545227 L80.6814886,29.1545227 C79.5503523,29.1545227 78.6339886,28.2381591 78.6339886,27.1070227 C78.6339886,25.9758864 79.5503523,25.0587273 80.6814886,25.0587273 Z M39.7484318,24.2387727 C40.8795682,24.2387727 41.7959318,25.1559318 41.7959318,26.2870682 C41.7959318,27.4182045 40.8795682,28.3345682 39.7484318,28.3345682 L32.7142273,28.3345682 C31.5830909,28.3345682 30.6667273,27.4182045 30.6667273,26.2870682 C30.6667273,25.1559318 31.5830909,24.2387727 32.7142273,24.2387727 L39.7484318,24.2387727 Z"
          />
        </g>
      </svg>
    </Link>
  );
}

function SubMenuWithDescription(props: headerTypes.desktopMenu) {
  return (
    <>
      <li className="group relative dropdown px-2 lg:px-4 cursor-pointer">
        <a className="flex items-center">
          {props.name}
          <IoIosArrowDown className="mx-2" />
        </a>
        <div className="group-hover:block absolute hidden h-auto -right-40">
          <ul className="w-96 h-56 bg-white shadow flex flex-wrap p-2 border-t-4 border-yellow-300 rounded-2xl mt-5">
            {props.submenu?.map((smenu) => (
              <li
                key={smenu.name}
                className="w-1/2 hover:bg-sky-100 h-14 rounded-lg p-1 text-right"
              >
                <a href={smenu.href}>
                  <div>
                    <p>{smenu.name}</p>
                    <p className="text-xs pt-1">{smenu.description}</p>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </li>
    </>
  );
}

function SubMenu(props: headerTypes.desktopMenu) {
  return (
    <>
      <li className="group relative dropdown px-3 lg:px-5 cursor-pointer">
        <a className="flex items-center">
          {props.name}
          <IoIosArrowDown className="mx-2" />
        </a>
        <div className="group-hover:block absolute hidden h-auto -right-10">
          <ul className="w-40 bg-white shadow flex-row p-3 border-t-4 border-yellow-300 rounded-2xl mt-5">
            {props.submenu?.map((smenu) => (
              <li
                key={smenu.name}
                className="hover:bg-sky-100 rounded-lg p-2 text-right"
              >
                <a href={smenu.href}>
                  <div>{smenu.name}</div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </li>
    </>
  );
}

function Menu() {
  return (
    <>
      {header.desktopMenu.map((item: headerTypes.desktopMenu) =>
        item.submenu ? (
          item.withDescription ? (
            <SubMenuWithDescription
              key={item.name}
              submenu={item.submenu}
              name={item.name}
            />
          ) : (
            <SubMenu key={item.name} submenu={item.submenu} name={item.name} />
          )
        ) : (
          <li key={item.name}>
            <Link
              className="inline-block px-2 lg:px-4"
              href={item.href ? item.href : "/"}
            >
              {item.name}
            </Link>
          </li>
        )
      )}
    </>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <div className="md:sticky md:top-0">
      <div className="text-3xl px-0 h-16 flex flex-row justify-between items-center p-2 md:hidden">
        <div>
          <Logo />
        </div>
        <button onClick={() => setOpen(!open)}>
          <IoMdMenu name={`${open ? "close" : "menu"}`} />
        </button>
      </div>
      <ul
        className={`absolute md:hidden w-full bg-white text-right mt-16 duration-500 ${
          open ? "top-0" : "top-[-100%]"
        }`}
      >
        {header.mobileMenu.map((item) => (
          <Link
            className="p-3 pr-10 block font-bold"
            key={item.name}
            href={item.href ? item.href : "/"}
          >
            {item.name}
          </Link>
        ))}
        <div className="border w-full bg-blue-100 h-16 flex justify-start text-blue-900 items-center pr-20">
          <Link href="/">{header.button[0].name}</Link>
          <div>
            <BiLeftArrowAlt className="text-xl m-2 mb-1" />
          </div>
        </div>
      </ul>
      <div className="hidden mt-3 text-sm bg-white bg-opacity-90 border-b h-16 md:flex container w-full mx-auto xl:w-3/4">
        <div className="flex flex-1 items-center">
          <Logo />
          <ul className="w-full flex flex-row justify-end">
            <Menu />
          </ul>
          <LoginButton />
        </div>
      </div>
    </div>
  );
}
