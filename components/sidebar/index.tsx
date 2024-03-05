"use client";
import Link from "next/link";
import { RiLogoutBoxRFill } from "react-icons/ri";
import { PiChalkboardSimpleFill } from "react-icons/pi";
import { FaStar } from "react-icons/fa";
const SiderbarComponent = () => {
  return (
    <div className="h-screen fixed text-gray-300  w-[18%]">
      <div className="flex flex-row gap-x-2 items-center text-xl pb-6 w-full pl-5">
        <img src="https://www.flowbite-react.com/favicon.svg" alt="logo" />
        <div className="text-gray-200">TASKIFY</div>
      </div>

      <div className="flex flex-col gap-y-6">
        <Link
          className="w-full flex flex-row gap-x-2 items-center pl-5"
          href={"/"}
        >
          <FaStar size={22} />
          <div>Sık Kullanılanlar</div>
        </Link>
        <Link
          className="w-full flex flex-row gap-x-2 items-center pl-5"
          href={"/groupboard"}
        >
          <PiChalkboardSimpleFill size={22} />
          <div>Panolar</div>
        </Link>
        <Link
          className="w-full flex flex-row gap-x-2 items-center pl-5"
          onClick={() => {}}
          href={"/login"}
        >
          <RiLogoutBoxRFill size={23} />
          <div>Çıkış</div>
        </Link>
      </div>
    </div>
  );
};

export default SiderbarComponent;
