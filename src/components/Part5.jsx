import React from "react";
import { motion } from "framer-motion";

import smcard1 from "../assets/smcard1.png";
import smcard2 from "../assets/smcard2.png";
import smcard3 from "../assets/smcard3.png";

// ✅ IMPORT SHARED VARIANTS
import { textContainer, textItem, cardContainer, cardItem } from "./Motionvariants.js";

const Part5 = () => {
  return (
    <section
      className="w-full overflow-hidden 
      bg-linear-to-r from-[#3c240c] via-[#5a3204d0] to-[#451d01] py-12"
    >
      {/* ✅ HEADING */}
      <motion.div
        className="flex flex-col items-center text-center my-10 px-4"
        variants={textContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <motion.h1
          variants={textItem}
          className="text-white text-3xl md:text-4xl font-semibold my-4"
        >
          CATEGORY
        </motion.h1>

        <motion.p
          variants={textItem}
          className="text-amber-100 max-w-2xl"
        >
          Specializing in gold, diamond, and traditional South Indian jewellery, the brand blends timeless tradition with modern aesthetics, offering pieces that are perfect for weddings, special occasions, and everyday elegance.
        </motion.p>
      </motion.div>

      {/* ✅ CARDS */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-6 mt-10"
        variants={cardContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {[
          { img: smcard1, title: "RING" },
          { img: smcard2, title: "CHAIN" },
          { img: smcard3, title: "NECKLACE" },
        ].map((item, index) => (
          <motion.div
            key={index}
            variants={cardItem}
            whileHover={{ scale: 1.05, y: -6 }}
            className="bg-white/10 backdrop-blur-md rounded-xl overflow-hidden shadow-lg cursor-pointer"
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-52 object-cover"
            />

            <h1 className="text-center text-amber-100 font-semibold py-3">
              {item.title}
            </h1>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Part5;
