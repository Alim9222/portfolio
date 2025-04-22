"use client";
import useLanguage from "@/app/context/useLanguage.jsx";
import { langs } from "@/app/data/langs.js";

import Image from "next/image";
import iner from "@/app/assets/images/iner.svg";
import instagram from "@/app/assets/images/instagram.svg";
import be from "@/app/assets/images/be.svg";
import world from "@/app/assets/images/world.svg";

export default function Contacts() {
  const { lang } = useLanguage();

  return (
    <div
      id="contacts"
      className="w-full py-10 flex flex-col justify-center items-center text-center"
    >
      <h1 className="text-4xl font-bold pt-20 pb-7">{langs.contacts[lang]}</h1>
      <p className="text-lg">
        {langs.contacts_info_1[lang]} <br /> {langs.contacts_info_2[lang]}
      </p>
      <div className="sm:px-0 px-5 w-full">
        <button className="text-lg rounded-full bg-black text-white py-2 px-8 my-8 cursor-pointer sm:w-auto w-full">
          {langs.button[lang]}
        </button>
      </div>
      <div className="flex flex-row sm:w-[400px] w-full justify-between pt-10 pb-24 sm:px-0 px-5">
        <Image className="cursor-pointer" src={iner} alt="portfolio3" />
        <Image className="cursor-pointer" src={instagram} alt="portfolio3" />
        <Image className="cursor-pointer" src={be} alt="be" />
        <Image className="cursor-pointer" src={world} alt="world" />
      </div>
      <p className="sm:hidden font-bold text-gray-400 p-5">
        {langs.likeMe[lang]}
      </p>
    </div>
  );
}
