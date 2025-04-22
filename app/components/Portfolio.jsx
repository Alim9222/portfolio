"use client";
import useLanguage from "@/app/context/useLanguage.jsx";
import { langs } from "@/app/data/langs.js";
import portfolio1 from "@/app/assets/images/portfolio1.png";
import portfolio3 from "@/app/assets/images/portfolio3.png";
import portfolio2 from "@/app/assets/images/portfolio2.png";
import Image from "next/image";

export default function Portfolio() {
  const { lang } = useLanguage();

  return (
    <div
      id="portfolio"
      className="w-full bg-gray-100 py-10 flex flex-col justify-center items-center text-center"
    >
      <h1 className="text-4xl font-bold pt-20 pb-10">
        {langs.portfolio[lang]}
      </h1>
      <Image
        className="cursor-pointer px-5"
        src={portfolio1}
        alt="portfolio1"
      />
      <p className="border-b-2 border-black text-lg mt-5 mb-20 cursor-pointer">
        {langs.portfolio_info_1[lang]}
      </p>
      <Image
        className="cursor-pointer px-5"
        src={portfolio2}
        alt="portfolio2"
      />
      <p className="border-b-2 border-black text-lg mt-5 mb-20 cursor-pointer">
        {langs.portfolio_info_2[lang]}
      </p>
      <Image
        className="cursor-pointer px-5"
        src={portfolio3}
        alt="portfolio3"
      />
      <p className="border-b-2 border-black text-lg mt-5 mb-15 cursor-pointer">
        {langs.portfolio_info_3[lang]}
      </p>
    </div>
  );
}
