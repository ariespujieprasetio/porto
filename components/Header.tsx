import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";

type Props = {};

export default function Header({}: Props) {
  return (
    <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center"
      >
        {/* Socials */}
        <SocialIcon
          url="https://www.linkedin.com/in/aries-pujie-prasetio-002912221/"
          fgColor="gray"
          bgColor="transparent"
          target="_blank"
        />
        <SocialIcon
          url="https://www.instagram.com/"
          fgColor="gray"
          bgColor="transparent"
          target="_blank"
        />
        <SocialIcon
          url="https://github.com/ariespujieprasetio/"
          fgColor="gray"
          bgColor="transparent"
          target="_blank"
        />
        <SocialIcon
          url="https://open.spotify.com/user/31ecokgyji6oqimvrxan5obk7i3e"
          fgColor="gray"
          bgColor="transparent"
          target="_blank"
        />
      </motion.div>
      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center text-gray-300"
      >
        <SocialIcon
          network="whatsapp"
          url="https://wa.me/+6282135342145"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          network="email"
          url="mailto:arsiparies@gmail.com"
          fgColor="gray"
          bgColor="transparent"
        />
        <a
          href="https://drive.google.com/file/d/1AzVDllQjE2edQbyCDlRnzDyhfbacD7tp/view?usp=sharing"
          className="uppercase cursor-pointer text-sm border-2 border-gray-500 rounded-full px-2 hover:bg-gray-700 hidden md:inline-flex text-gray-400"
        >
          RESUME
        </a>
      </motion.div>
    </header>
  );
}
