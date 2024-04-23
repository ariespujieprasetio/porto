import React from "react";
import { motion } from "framer-motion";
import Html5 from "./Skill/html5";
import CSS from "./Skill/css";
import ReactS from "./Skill/react";
import Vue from "./Skill/vue";
import Next from "./Skill/next";
import Express from "./Skill/express";
import Node from "./Skill/node";
import Seq from "./Skill/seq";
import Redux from "./Skill/Redux";
import Redis from "./Skill/redis";
import MySQL from "./Skill/mysql";
import Docker from "./Skill/docker";
import Tailwind from "./Skill/tailwind";
import Jira from "./Skill/jira";
import Firebase from "./Skill/firebase";
import Postman from "./Skill/postman";

type Props = {};

export default function Skills({}: Props) {
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
			className="h-screen flex relative flex-col text-center md:text-left
        max-y-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center"
		>
			<h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
				Skills
			</h3>
			<div className="grid grid-cols-4 gap-4 md:gap-5 xl:gap-7 xl:pt-14">
				<Html5 />
				<CSS />
				<ReactS />
				<Vue />
				<Next />
				<Redux />
				<Tailwind />
				<Jira />
				<Express />
				<Node />
				<Seq />
				<Redis />
				<MySQL />
				<Docker />
				<Postman />
				<Firebase />
			</div>
		</motion.div>
	);
}
