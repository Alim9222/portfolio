"use client";
import useLanguage from "@/app/context/useLanguage.jsx";
import { langs } from "@/app/data/langs.js";

export default function AboutMe() {
  const { lang } = useLanguage();

  return (
    <>
      <div id="aboutme" className="w-full bg-gray-100 py-10">
        <div className="flex text-center items-center flex-col">
          <h1 className="font-bold text-4xl mx-auto pt-18 pb-5">
            {langs.about[lang]}
          </h1>
          <p className="text-lg pb-10 w-[350px] sm:w-[500px]">
            {langs.about_info_1[lang]} <br /> <br />
            {langs.about_info_2[lang]} <br /> <br />
            {langs.about_info_3[lang]} <br />
          </p>
        </div>
      </div>
    </>
  );
}
