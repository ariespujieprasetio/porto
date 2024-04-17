import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import vitePic from "../../public/vite.webp";
import mikroOrmPic from "../../public/mikroorm.jpg";
import nestjsPic from "../../public/nestjs.png";
import gatsbyPic from "../../public/gatsby.png";
import reactNativePic from "../../public/react-native.png";

type Props = {};

export default function ExperienceCardIcx({}: Props) {
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
        className="w-28 h-28 xl:[200] object-contain"
        src="/icx-logo-black.png"
        alt="Company pic"
      />

      <div className="px-0 md:px-10">
        <h4 className="text-3xl font-light">
          Software Engineer, RnD IT Specialist
        </h4>
        <p className="font-bold text-xl mt-1">GSI (Global Service Indonesia)</p>
        <div className="flex space-x-4 my-2">
          <Image
            className="h-10 w-10 rounded-full object-cover"
            src={vitePic}
            alt="viteJs"
          />
          <Image
            className="h-10 w-10 rounded-full"
            src={mikroOrmPic}
            alt="mikroORM"
          />
          <Image
            className="h-10 w-10 rounded-full"
            src={nestjsPic}
            alt="NestJs"
          />
          <Image
            className="h-10 w-10 rounded-full"
            src={gatsbyPic}
            alt="GatsbyJS"
          />
          <Image
            className="h-10 w-10 rounded-full object-cover"
            src={reactNativePic}
            alt="react-native"
          />
        </div>
        <p className="my-4">Dec 2022 - Present</p>

        <ul className="list-disc space-y-2 ml-5 text-md">
          <li>
            Maintenance of web-based office attendance applications with Golang
            & PHP
          </li>
          <li>
            Technical Leader Project for accounting apps for PT United Tractors
            Tbk with Go-lang & Laravel 9
          </li>
          <li>Make REST API with Golang</li>
          <li>
            Make a Dashboard Monitoring for Odoo Project YKBUT with React.js and
            PostgreSQL
          </li>
          <li>Maintaining and bug fixing Daycare Web Projects with Laravel</li>
          <li>
            Create API Integration for YKBUT Odoo Dashboard Data using Nest.js
          </li>
        </ul>
      </div>
    </article>
  );
}
