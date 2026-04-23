import React from "react";
import { motion } from "framer-motion";

import card1 from "../assets/card1.jpg";
import card2 from "../assets/card2.jpg";
import card3 from "../assets/card3.jpg";
import card4 from "../assets/card4.jpg";
import card5 from "../assets/card5.jpg";
import card6 from "../assets/card6.jpg";

// ✅ USE SHARED VARIANTS ONLY
import { textContainer, textItem, cardContainer, cardItem } from "./Motionvariants.js";

const Part4 = () => {
  return (
    <section
      className="w-full overflow-hidden 
      bg-linear-to-r from-[#f6ca9e] via-[#fee0be] to-[#ebaf84] py-12"
    >
      {/* ✅ HEADING */}
      <motion.div
        className="flex flex-col items-center my-10 text-center px-4"
        variants={textContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <motion.h1
          variants={textItem}
          className="text-green-800 text-3xl md:text-4xl font-semibold my-4"
        >
          COLLECTIONS
        </motion.h1>

        <motion.p
          variants={textItem}
          className="text-green-900 max-w-2xl"
        >
          Explore our diverse selections. Find your style
        </motion.p>
      </motion.div>

      {/* ✅ CARDS */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-6 mt-10"
        variants={cardContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {[
          { img: card1, title: "SILVER" },
          { img: card2, title: "TRADITIONAL COLLECTIONS" },
          { img: card3, title: "TRENDING COLLECTIONS" },
          { img: card4, title: "FESTIVE COLLECTIONS" },
          { img: card5, title: "BRIDAL COLLECTIONS" },
          { img: card6, title: "NEW LAUNCHES" },
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
              className="w-full h-auto object-cover"
            />

            <h1 className="text-center text-green-800 font-semibold py-3">
              {item.title}
            </h1>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Part4;