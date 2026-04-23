import React from "react";
import { motion } from "framer-motion";
import kolam from "../assets/kolam.png";

const Part2 = () => {
  return (
    <section
      className="w-full h-auto overflow-x-hidden 
      bg-linear-to-r from-[#3c240c] via-[#5a3204d0] to-[#451d01] py-5"
    >
      {/* Heading */}
      <div className="text-center px-4">
        
        {/* 🟡 HEADING */}
        <motion.h1
          className="text-white text-2xl sm:text-3xl md:text-4xl my-6"
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          TODAY'S <span className="text-amber-300">GOLD</span> AND SILVER RATE
        </motion.h1>

        {/* 🟢 PARAGRAPH */}
        <motion.p
          className="text-amber-100 max-w-xl mx-auto text-sm sm:text-base"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Gold and silver prices are slightly lower today, pressured by market
          volatility and profit booking after recent highs
        </motion.p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10 px-4 max-w-6xl mx-auto">

        {[ 
          { title: "22k GOLD", price: "₹ 14000", sub: "₹1,12,800" },
          { title: "18k GOLD", price: "₹ 11655", sub: "₹93,240" },
          { title: "Silver - 99.9%", price: "₹ 266", sub: null },
        ].map((item, i) => (
          <div
            key={i}
            className="relative w-full max-w-70 h-70 mx-auto"
          >
            {/* 🟣 ROTATING KOLAM */}
            <motion.img
              src={kolam}
              alt=""
              className="w-full h-full object-cover rounded-3xl opacity-80"
              animate={{ rotate: 360 }}
              transition={{
                repeat: Infinity,
                duration: 25,   // slow rotation
                ease: "linear",
              }}
            />

            {/* Content */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-[#451d01f5] text-white rounded-3xl p-4 w-full max-w-55 text-center">
                <h1>{item.title}</h1>
                <h1 className="text-2xl sm:text-3xl">{item.price}</h1>
                <p>per gram</p>

                {item.sub && (
                  <div className="flex justify-between my-2 p-2 rounded-xl bg-amber-900/60 text-sm">
                    <h2>8 gram</h2>
                    <h2>{item.sub}</h2>
                  </div>
                )}
              </div>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
};

export default Part2;
