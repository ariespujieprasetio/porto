import React from "react";
import { motion } from "framer-motion";
import StarbucksClone from "./Project/StarbucksClone";
import TwitterClone from "./Project/TwitterClone";
import HotelBus from "./Project/HotelBus";
import ChatRoom from "./Project/ChatRoom";
import Icx from "./Project/Icx";

type Props = {};

export default function Projects({}: Props) {
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
      <div className="relative w-full flex overflow-x-scroll scrollbar-hide overflow-y-hidden snap-x snap-mandatory z-20">
        <Icx />
        <HotelBus />
        <ChatRoom />
        <TwitterClone />
        <StarbucksClone />
      </div>
    </motion.div>
  );
}
