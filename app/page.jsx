import HomePage from "./components/HomePage";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-montserrat",
});

export default function Home() {
  return (
    <>
      <div className={`${montserrat.className} w-full h-screen `}>
        <HomePage />
        <AboutMe />
        <Skills />
        <Contact />
      </div>
    </>
  );
}
