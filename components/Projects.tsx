import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import StarbucksClone from "./Project/StarbucksClone";
import Gotjob from "./Project/Gotjob";
import Ykbut from "./Project/Ykbut";
import Cermat from "./Project/Cermat";
import Employeeselfservice from "./Project/Employeeselfservice";

type Props = {};

export default function Projects({}: Props) {
  // State untuk referensi scroll dan offset
  const [scrollPosition, setScrollPosition] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Fungsi untuk menggeser scroll
  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 300; // Jumlah yang digeser setiap tombol klik
      if (direction === "left") {
        scrollRef.current.scrollLeft -= scrollAmount;
      } else {
        scrollRef.current.scrollLeft += scrollAmount;
      }
      setScrollPosition(scrollRef.current.scrollLeft); // Update posisi scroll
    }
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1.2,
      }}
      className="h-screen flex relative overflow-x-hidden overflow-y-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>
      <div className="relative w-full flex items-center justify-center">
        {/* Tombol Scroll Kiri */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 z-10 bg-gray-800 text-white p-2 rounded-full focus:outline-none"
        >
          {"<"}
        </button>

        {/* Kontainer Proyek */}
        <div
          ref={scrollRef}
          className="relative w-full flex overflow-x-scroll scrollbar-hide overflow-y-hidden snap-x snap-mandatory z-20"
        >
          <Cermat />
          <Ykbut />
          <Gotjob />
          <Employeeselfservice />
          <StarbucksClone />
        </div>

        {/* Tombol Scroll Kanan */}
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 z-10 bg-gray-800 text-white p-2 rounded-full focus:outline-none"
        >
          {">"}
        </button>
      </div>
    </motion.div>
  );
}
