"use client";
import useLanguage from "@/app/context/useLanguage.jsx";
import { langs } from "@/app/data/langs.js";

export default function Header() {
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
    document.querySelector(link).scrollIntoView({
      behavior: "smooth",
    });
  }

  return (
    <>
      <div className="2xl:container mx-auto px-5">
        <ul className="flex justify-between py-8 text-xl border-b border-b-gray-400 gap-8">
          {links.map((link) => (
            <button
              key={link.text}
              className="cursor-pointer text-gray-500 transform transition-all duration-300 font-bold hover:text-black"
              onClick={() => scrollTo(link.link)}
            >
              {link.text}
            </button>
          ))}
        </ul>
      </div>
    </>
  );
}
