"use client";
import useLanguage from "@/app/context/useLanguage.jsx";
import { langs } from "@/app/data/langs.js";

import fotoshop from "@/app/assets/images/fotoshop.svg";
import star4 from "@/app/assets/images/star4.svg";
import star3 from "@/app/assets/images/star3.svg";
import ai from "@/app/assets/images/ai.svg";
import ae from "@/app/assets/images/ae.svg";
import figma from "@/app/assets/images/figma.svg";
import Image from "next/image";

export default function Skills() {
  const { lang } = useLanguage();

  return (
    <div id="skills" className="container mx-auto py-15">
      <div className="flex flex-col">
        <p className="font-bold text-4xl mx-auto pt-12 pb-8">
          {langs.skills[lang]}
        </p>
        <p className="text-lg mx-auto pb-10">{langs.skills_info[lang]}</p>
        <div className="grid place-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-5">
          <div className="">
            <Image className="pb-4 mx-auto" src={fotoshop} alt="fotoshop" />
            <p className="text-center font-bold text-gray-400">
              Adobe <br /> Photoshop
            </p>
            <Image className="pt-4" src={star4} alt="star4" />
          </div>
          <div className="">
            <Image className="pb-4 mx-auto" src={ai} alt="ai" />
            <p className="text-center font-bold text-gray-400">
              Adobe <br /> Illustration
            </p>
            <Image className="pt-4" src={star3} alt="star3" />
          </div>
          <div className="">
            <Image className="pb-4 mx-auto" src={ae} alt="ae" />
            <p className="text-center font-bold text-gray-400">
              Adobe <br /> After Effects
            </p>
            <Image className="pt-4" src={star4} alt="star4" />
          </div>
          <div className="">
            <Image className="pb-4 mx-auto" src={figma} alt="figma" />
            <p className="text-center font-bold text-gray-400 pb-6">Figma</p>
            <Image className="pt-4" src={star4} alt="star4" />
          </div>
        </div>
      </div>
    </div>
  );
}
