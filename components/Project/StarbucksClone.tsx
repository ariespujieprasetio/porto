import React from "react";
import { motion } from "framer-motion";
type Props = {};

export default function StarbucksClone({}: Props) {
	return (
		<>
			<div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
				<motion.img
					initial={{ y: -300, opacity: 0 }}
					transition={{ duration: 1.2 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					src={"/Screenshot 2023-03-23 143401.png"}
					alt="test"
					className="w-1/2"
				/>
				<div className="space-y-10 px-8 md:px-10 max-w-6xl">
					<h4 className="text-4xl font-semibold text-center">
						Project Starbucks Web Clone
					</h4>
					<p className="text-lg text-center md:text-left">
						Making starbucks WebApp from scratch using React.js, tailwind CSS,
						Express REST API, and Sequelize ORM as base tools.
					</p>
				</div>
				<div className="space-x-60">
					<a href="https://github.com/veanusnathan/starbucks_FE">
						<button className="heroButton text-2xl">Github (FE)</button>
					</a>
					<a href="https://github.com/veanusnathan/starbucks_BE">
						<button className="heroButton text-2xl">Github (BE)</button>
					</a>
				</div>
			</div>
		</>
	);
}
