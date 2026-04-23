import React from "react";
import { motion } from "framer-motion";

import pp from "../assets/priceprotection.jpg";
import as from "../assets/assuredsavings.jpg";
import ts from "../assets/transparentandsecure.jpg";

// ✅ reuse same animation system
import { textContainer, textItem, cardContainer, cardItem } from "./Motionvariants.js";

const Part7 = () => {
  return (
    <section className="w-full bg-linear-to-r from-[#f6ca9e] via-[#fee0be] to-[#ebaf84] py-16 px-6">
      
      {/* ✅ HEADING */}
      <motion.div
        className="text-center max-w-4xl mx-auto"
        variants={textContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <motion.h1
          variants={textItem}
          className="text-2xl md:text-3xl font-semibold text-green-800 tracking-wide"
        >
          Swarnanidhi Advanced Booking Scheme
        </motion.h1>

        <motion.p
          variants={textItem}
          className="mt-4 text-amber-800 leading-relaxed"
        >
          Are you planning to buy gold for an upcoming celebration, a wedding, 
          or an important milestone? Don’t let the unpredictability of gold prices 
          spoil your plans. Our Gold Advance Booking Scheme is your perfect solution 
          to lock in a price and buy your dream jewelry with complete peace of mind.
        </motion.p>
      </motion.div>

      {/* ✅ FEATURES */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-14 max-w-6xl mx-auto text-center"
        variants={cardContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        
        {[
          {
            img: pp,
            title: "Price Protection",
            desc: "The single biggest advantage is that you are completely protected from rising gold prices. If the price goes up, you still pay the lower, booked rate.",
          },
          {
            img: as,
            title: "Assured Savings",
            desc: "By availing the “best of both rates” benefit, you are guaranteed savings on your gold purchase, giving you more value for your money.",
          },
          {
            img: ts,
            title: "Transparent & Secure",
            desc: "Our scheme is completely transparent with no hidden charges. Your advance payment is secure, and you will receive a booking receipt with all details clearly mentioned.",
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            variants={cardItem}
            whileHover={{ scale: 1.05, y: -6 }}
            className="flex flex-col items-center p-4 bg-white shadow-lg rounded-2xl gap-4 cursor-pointer"
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-12 h-12 object-contain"
            />
            
            <h2 className="text-lg font-semibold text-green-800">
              {item.title}
            </h2>

            <p className="text-amber-800 text-sm leading-relaxed max-w-xs">
              {item.desc}
            </p>
          </motion.div>
        ))}

      </motion.div>
    </section>
  );
};

export default Part7;