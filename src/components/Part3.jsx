import React from "react";
import { motion } from "framer-motion";
import women from "../assets/women.png";

const Part3 = () => {
  return (
    <section
      className="w-full overflow-hidden 
      bg-linear-to-r from-[#f6ca9e] via-[#fee0be] to-[#ebaf84] py-12"
    >
      <div className="flex flex-col md:flex-row items-center mt-14 justify-center gap-20 px-6">

        {/* 👩 IMAGE */}
        <motion.div
          className="border-12 border-green-900 w-full md:w-[32%] p-2"
          initial={{ x: -80, opacity: 0, scale: 0.95 }}
          whileInView={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <img
            src={women}
            alt="Jewellery"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* 🟢 TEXT SECTION */}
        <div className="flex flex-col items-start w-full md:w-[40%]">

          {/* 🟢 HEADING */}
          <motion.h1
            className="text-green-900 text-3xl md:text-4xl font-semibold mb-4"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Swarnamukhi Jewellers
          </motion.h1>

          {/* 🟡 PARAGRAPH */}
          <motion.p
            className="text-amber-900 text-base md:text-lg leading-relaxed"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Welcome to Swarnamukhi, your premier destination for exquisite gold
            and diamond jewelry. With a rich legacy of crafting stunning pieces
            that adorn generations, we take pride in our vast collection of
            intricately designed jewelry.

            <br /><br />

            Swarnamukhi Jewellers is a trusted name in fine jewellery,
            specializing in gold, diamond, and traditional South Indian
            jewellery. The brand blends timeless tradition with modern
            aesthetics, offering pieces perfect for weddings, special occasions,
            and everyday elegance.

            <br /><br />

            At Swarnamukhi, we believe jewelry is not just adornment, but a
            symbol of love, tradition, and celebration. Visit us to experience
            the beauty and craftsmanship that sets us apart!
          </motion.p>
        </div>

      </div>
    </section>
  );
};

export default Part3;
