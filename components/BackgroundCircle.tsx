import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function BackgroundCircle({}: Props) {
	return (
		<motion.div
			initial={{
				opacity: 0,
			}}
			animate={{
				scale: [1, 2, 2, 3, 1],
				opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1],
				borderRadius: ["20%", "20%", "50%", "80%", "20%"],
			}}
			transition={{
				duration: 2.5,
			}}
			className="relative flex justify-center items-center"
		>
			<div className="absolute border border-[#333333] rounded-full h-[200px] w-[200px] mt-56 animate-ping" />
			<div className="rounded-full border border-[#333333] h-[300px] w-[300px] absolute mt-56" />
			<div className="rounded-full border border-[#333333] h-[300px] w-[300px] absolute mt-56" />
			<div className="rounded-full border border-[#F7ab0a] opacity-20 h-[650px] w-[650px] absolute mt-56 animate-pulse" />
			<div className="rounded-full border border-[#333333] h-[800] w-[800] absolute mt-56" />
		</motion.div>
	);
}
