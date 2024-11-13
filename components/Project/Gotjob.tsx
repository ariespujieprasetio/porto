import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function Gotjob({}: Props) {
  return (
    <>
      <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
        <motion.img
          initial={{ y: -300, opacity: 0 }}
          transition={{ duration: 1.2 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          src="/gotjob.png"
          alt="test"
          className="w-1/2"
        />
        <div className="space-y-10 px-8 md:px-10 max-w-6xl">
          <h4 className="text-4xl font-semibold text-center">
            Project Job Portal Gotjob.id 
          </h4>
          <p className="text-lg text-center md:text-left">
            Job Portal web to support hiring at PT Global Service Indonesia
          </p>
        </div>
        <div className="space-x-60">
          <a href="https://gotjob.id">
            <button className="heroButton text-2xl">Live Candidate</button>
          </a>
          <a href="https://recruiter.gotjob.id">
            <button className="heroButton text-2xl">Live Recruiter</button>
          </a>
        </div>
      </div>
    </>
  );
}
