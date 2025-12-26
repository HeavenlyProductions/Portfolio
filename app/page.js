"use client";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Services from "./components/Services";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useThemeContext } from "../context/context.jsx";

export default function Home() {
  const { theme } = useThemeContext();
  const [mounted, setMounted] = useState(false);

  // This ensures the component only "acts" client-side AFTER the first render
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="transition duration-300 opacity-0">
        <Navbar />
      </div>
    );
  }

  return (
    <div
      className={
        theme === "dark"
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
