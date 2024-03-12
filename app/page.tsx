"use client";
import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Contact from "@/components/home/Contact";

import dynamic from "next/dynamic";
import { useEffect } from "react";

const Navbar = dynamic(() => import("@/components/home/Navbar"), {
  ssr: false,
});

export default function Home() {
  useEffect(() => {
    console.log("test");
  });

  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Contact />
    </main>
  );
}
