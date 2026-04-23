import React from "react";
import { motion } from "framer-motion";

import icon1 from "../assets/icon1.png";
import icon2 from "../assets/icon2.png";
import icon3 from "../assets/icon3.png";
import icon4 from "../assets/icon4.png";
import icon5 from "../assets/icon5.png";
import bannerneck from "../assets/bannerneck.png";

const Part6 = () => {
  return (
    <section className="w-full overflow-hidden bg-linear-to-r from-[#3c240c] via-[#5a3204d0] to-[#451d01] py-12">

      {/* Image + Text Section */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 px-6 max-w-6xl mx-auto">

        {/* 🟡 IMAGE (animated) */}
        <div className="flex justify-center md:w-1/2 overflow-hidden">
          <motion.img
            src={bannerneck}
            alt="banner"
            className="w-64 md:w-90 object-contain"
            
            // 👇 start bottom-right + small
            initial={{ x: 120, y: 120, scale: 0.6, opacity: 0 }}

            // 👇 move to original position
            whileInView={{ x: 0, y: 0, scale: 1, opacity: 1 }}

            transition={{
              duration: 0.8,
              ease: "easeOut"
            }}

            viewport={{ once: true }}
          />
        </div>

        {/* 🟢 TEXT */}
        <div className="md:w-1/2 text-center md:text-left">
          <motion.h1
            className="text-white text-3xl md:text-4xl font-semibold mb-4"
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Why Swarnamukhi
          </motion.h1>

          <motion.p
            className="text-amber-100 leading-relaxed"
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            At Swarnamukhi, we believe that jewelry is not just an accessory, but a reflection of your unique story. We're not just jewelers, we're storytellers. We weave tales of love, tradition, and celebration into every piece.
          </motion.p>
        </div>

      </div>

      {/* 🔵 ICONS */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 px-6 mt-12 text-center">

        {[
          { img: icon1, title: "FAIR LABOUR EXCHANGE" },
          { img: icon2, title: "GUARANTEED BUY BACK" },
          { img: icon3, title: "100% BIS HALLMARK GOLD" },
          { img: icon4, title: "CERTIFIED DIAMONDS" },
          { img: icon5, title: "COMPLETE TRANSPARENCY" },
        ].map((item, index) => (

          <motion.div
            key={index}
            className="flex flex-col items-center gap-3"
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-16 h-16 object-contain"
            />

            <h1 className="text-sm font-semibold text-amber-100 max-w-32">
              {item.title}
            </h1>
          </motion.div>

        ))}

      </div>
    </section>
  );
};

export default Part6;