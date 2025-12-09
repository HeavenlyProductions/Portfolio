"use client";
import { useEffect } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Work from "./components/Work";
import { useThemeContext } from "../context/context.jsx";

export default function Home() {
  const { theme, setTheme, isMounted } = useThemeContext();

  useEffect(() => {
    if (
      localStorage.getItem("theme") === "dark" ||
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, [setTheme]);

  return (
    <div
      className={
        isMounted && theme === "dark"
          ? "darkTheme text-white transition duration-300"
          : "transition duration-300"
      }
    >
      <Navbar />
      <Header />
      <About />
      <Services />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
}
