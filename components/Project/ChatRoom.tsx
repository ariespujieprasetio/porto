import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function ChatRoom({}: Props) {
  return (
    <>
      <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
        <motion.img
          initial={{ y: -300, opacity: 0 }}
          transition={{ duration: 1.2 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          src="/Screenshot 2023-04-19 140058.png"
          alt="test"
          className="w-1/2"
        />
        <div className="space-y-10 px-8 md:px-10 max-w-6xl">
          <h4 className="text-4xl font-semibold text-center">
            Project Warehouse Online Shop
          </h4>
          <p className="text-lg text-center md:text-left">
            Making an online shop web app with many warehouse that can request
            and send units from one to another warehouse, using React,
            Express.js, MySql.
          </p>
        </div>
        <div className="space-x-60">
          <a href="https://jcwd230201.purwadhikabootcamp.com/">
            <button className="heroButton text-2xl">Live</button>
          </a>
          <a href="https://github.com/veanusnathan/OnlineShopWarehouseProject">
            <button className="heroButton text-2xl">Github</button>
          </a>
        </div>
      </div>
    </>
  );
}
