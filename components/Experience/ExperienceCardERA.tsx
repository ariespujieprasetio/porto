import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function ExperienceCardERA({}: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-28 h-28 rounded-md xl:[200] object-contain object-center bg-white"
        src="/telkom.png"
        alt="Company pic"
      />

      <div className="px-0 md:px-10">
        <h4 className="text-3xl font-light">Home Service</h4>
        <p className="font-bold text-xl mt-1">Telkom Indonesia</p>
        <p className="my-4">July 2020 - September 2020 </p>

        <ul className="list-disc space-y-2 ml-5 text-md">
          <li>Supervise incoming Order Input activities using Telegram </li>
          <li>
            Inputting Customer Data Into Daily Reports or Documents related in
            accordance with the request of the Head of Service Area
          </li>
          <li>Updating the Daily Board within the WTO</li>
          <li>Increased customer satisfaction by 40-50%</li>
        </ul>
      </div>
    </article>
  );
}
