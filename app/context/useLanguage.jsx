"use client";
import { createContext, useContext, useState } from "react";

export const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState("en");
  const hello = "hello";
  return (
    <LanguageContext.Provider value={{ lang, setLang, hello }}>
      {children}
    </LanguageContext.Provider>
  );
}

export default function useLanguage() {
  return useContext(LanguageContext);
}
