import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function Cermat({}: Props) {
  return (
    <>
      <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
        <motion.img
          initial={{ y: -300, opacity: 0 }}
          transition={{ duration: 1.2 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          src="/Screenshot 2023-10-31 at 14.51.01.jpg"
          alt="icx"
          className="w-1/2"
        />
        <div className="space-y-10 px-8 md:px-10 max-w-6xl">
          <h4 className="text-4xl font-semibold text-center">
            Cermat (Accounting) App
          </h4>
          <p className="text-lg text-center md:text-left">
            Go-lang & Laravel 9 Web-based Application for Accounting for UMKM
            assisted by PT United Tractors Tbk.
          </p>
        </div>
        <div className="space-x-60">
          <a href="https://cermat.unitedtractors.com">
            <button className="heroButton text-2xl">Live Application</button>
          </a>
          {/* <a href="https://apps.apple.com/id/app/icx-indonesia/id6448935038">
            <button className="heroButton text-2xl">App Store</button>
          </a> */}
        </div>
      </div>
    </>
  );
}
