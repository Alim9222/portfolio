"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import burger from "@/app/assets/images/burger.svg";
import close from "@/app/assets/images/close.svg";
import useLanguage from "@/app/context/useLanguage.jsx";
import { langs } from "@/app/data/langs.js";
import ChangeLangButton from "./ChangeLangButton";

export default function Burger({ button }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [open]);
  const { lang } = useLanguage();

  const links = [
    {
      text: langs.home[lang],
      link: "#home",
    },
    {
      text: langs.about[lang],
      link: "#aboutme",
    },
    {
      text: langs.skills[lang],
      link: "#skills",
    },
    {
      text: langs.portfolio[lang],
      link: "#portfolio",
    },
    {
      text: langs.contacts[lang],
      link: "#contacts",
    },
  ];

  function scrollTo(link) {
    setOpen(false);
    document.querySelector(link).scrollIntoView({
      behavior: "smooth",
    });
  }

  return (
    <>
      {button && (
        <button onClick={() => setOpen(true)} className="w-10 h-10 cursor-auto">
          <Image
            className="w-full h-full cursor-pointer"
            src={burger}
            alt="burger"
          />
        </button>
      )}
      {open && (
        <div className="bg-white absolute w-screen h-screen z-30 top-0 left-0 p-8 flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <div className="flex flex-col items-start gap-8">
              {links.map((link) => (
                <button
                  key={link.text}
                  className="cursor-pointer text-3xl font-semibold text-gray-500 transition-all duration-300 hover:text-black"
                  onClick={() => scrollTo(link.link)}
                >
                  {link.text}
                </button>
              ))}
            </div>
            <button className="w-8 h-8" onClick={() => setOpen(false)}>
              <Image
                className="w-full h-full cursor-pointer"
                src={close}
                alt="close"
              />
            </button>
          </div>

          <div className="absolute bottom-20 right-10">
            <ChangeLangButton />
          </div>
        </div>
      )}
    </>
  );
}
