import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./Experience/ExperienceCardPwd";
import ExperienceCardERA from "./Experience/ExperienceCardERA";
import ExperienceCardPwd from "./Experience/ExperienceCardPwd";
import ExperienceCardIcx from "./Experience/ExperienceCardIcx";

type Props = {};

export default function Experience({}: Props) {
  return (
    <>
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
        className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center"
      >
        <h3 className="absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl">
          Experience
        </h3>
        <div className=" w-full flex space-x-3 overflow-x-auto p-10 snap-x snap-mandatory">
          <ExperienceCardIcx />
          <ExperienceCardPwd />
          <ExperienceCardERA />
        </div>
      </motion.div>
    </>
  );
}
