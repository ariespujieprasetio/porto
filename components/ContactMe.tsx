import React from "react";
import { motion } from "framer-motion";
import { PhoneIcon, MapIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";

type Props = {};
type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function ContactMe({}: Props) {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:arsiparies@gmail.com?subject=${formData.subject}&body=${formData.message} ${formData.email}`;
  };

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
      className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Contact
      </h3>
      <div className="flex flex-col space-y-5">
        <h4 className="text-xl lg:text-4xl font-semibold text-center">
          I have got just what you need, Lets Talk.
        </h4>
        <div className="space-y-5">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="h-7 w-7 animate-pulse" />
            <p>+62 821-3534-2145</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="h-7 w-7 animate-pulse" />
            <p>arsiparies@gmail.com</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <MapIcon className="h-7 w-7 animate-pulse" />
            <p>Cakung, Jakarta Timur</p>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col space-y-2 w-fit mx-auto"
          >
            <div className="lg:space-x-2 space-y-2 w-full">
              <input
                {...register("name")}
                placeholder="Name"
                className="contactInput w-full lg:w-48"
                type="text"
              />
              <input
                {...register("email")}
                type="email"
                placeholder="Email"
                className="contactInput w-full lg:w-48"
              />
            </div>
            <input
              {...register("subject")}
              placeholder="Subject"
              className="contactInput"
              type="text"
            />
            <textarea
              {...register("message")}
              placeholder="Message"
              className="contactInput"
            />
            <button
              type="submit"
              className="bg-gray-200 py-5 px-10 rounded-md text-black font-bold text-lg"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </motion.div>
  );
}
