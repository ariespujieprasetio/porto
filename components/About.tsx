import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function About({}: Props) {
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
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        about
      </h3>
      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 1.5,
        }}
        src="/P1119999.jpg"
        className="-mb-28 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[600px]"
      />
      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">Here&apos;s my background</h4>
        <p className="text-sm">
          Hi, i&apos;m Aries Pujie Prasetio. I am an enthusiastic,
          self-motivated, responsible and hard working person. With 3+ years in
          IT Developer experience i am able to work well both in a team
          environment as well as using own initiative. I&apos;m a thriving Web
          Developer adept in all stages of advanced web development. Proficient
          in an assortment of technologies, including Python, Go-lang,
          JavaScript, ReactJS, Tailwind, Express.JS, Sequelize ORM, and MySql.
        </p>
      </div>
    </motion.div>
  );
}
