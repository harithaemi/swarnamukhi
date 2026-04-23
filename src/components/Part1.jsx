import React from "react";
import { motion } from "framer-motion";

import girl from "../assets/girl.png";
import logoicon from "../assets/logoicon.png";
import bannertitle from "../assets/bannertitle.png";
import jewel3 from "../assets/jewel3.png";
import jewel6 from "../assets/jewel6.png";
import jewel5 from "../assets/jewej5.png";

const Part1 = () => {
  return (
    <section
      className="
        w-full h-screen overflow-hidden 
        bg-gradient-to-r from-[#3c240c] via-[#5a3204d0] to-[#451d01] 
        px-4  pt-40 md:pt-0 flex items-center
      "
    >
      <div className="flex flex-col md:flex-row items-center relative w-full">

        {/* 👧 GIRL IMAGE (slide left → right slightly) */}
        <motion.img
          src={girl}
          alt="girl"
          className="
            w-full max-w-[320px] sm:max-w-[420px] 
            md:max-w-[700px]
            object-contain
            mb-6 md:mb-0
          "
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />

        {/* 🟢 CONTENT */}
        <div
          className="
            flex flex-col items-center text-right
            z-20
            mt-4 md:mt-4
            md:absolute md:right-0 md:top-1/2 md:-translate-y-1/2
          "
        >
          <div className="flex flex-col items-center gap-4">

            {/* 🟢 LOGO (pop / scale) */}
            <motion.img
              src={logoicon}
              alt="logo"
              className="w-20 sm:w-24 md:w-40"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            />

            {/* 🟡 TITLE (right → left slight slide) */}
            <motion.img
              src={bannertitle}
              alt="title"
              className="w-64 sm:w-80 md:w-[600px]"
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            />
          </div>

          {/* 🟣 GALLERY (small fade + rise) */}
          <motion.figure
            className="hover-gallery max-w-60 mt-6"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <img src={jewel3} alt="" />
            <img src={jewel5} alt="" />
            <img src={jewel6} alt="" />
          </motion.figure>
        </div>
      </div>
    </section>
  );
};

export default Part1;
