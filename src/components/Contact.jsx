import React from "react";
import emptybanner from "../assets/emptybanner.jpg";

const Contact = () => {
  return (
    <section className="relative w-full py-16 overflow-hidden">

      {/* Background Image */}
      <img
        src={emptybanner}
        alt="background"
        className="absolute inset-0 w-full h-full object-cover blur-[3px] scale-105"
      />

      {/* Content Wrapper (adds margin space around overlay) */}
      <div className="relative z-10 max-w-6xl mt-10 mx-auto px-6">

        {/* Brown Transparent Box with margin */}
        <div className="bg-[#5a2d0c]/80 rounded-2xl p-8 md:p-12 text-white">

          {/* Heading */}
          <h1 className="text-3xl md:text-4xl font-semibold text-center mb-4">
            CONTACT US
          </h1>

          <p className="text-center text-sm md:text-base mb-10 max-w-2xl mx-auto">
            Swarnamukhi Jewellers is a trusted name in fine jewellery, known for its
            exquisite craftsmanship and elegant designs. Specializing in gold, diamond.
          </p>

          {/* Form */}
          <div className="grid md:grid-cols-2 gap-6">

            <input
              type="text"
              placeholder="Your Name"
              className="p-3 rounded-lg bg-white/90 text-black outline-none"
            />

            <input
              type="email"
              placeholder="Email"
              className="p-3 rounded-lg bg-white/90 text-black outline-none"
            />

            <input
              type="tel"
              placeholder="Phone Number"
              className="p-3 rounded-lg bg-white/90 text-black outline-none"
            />

            <input
              type="text"
              placeholder="Subject"
              className="p-3 rounded-lg bg-white/90 text-black outline-none"
            />
          </div>

          <textarea
            placeholder="Write a message"
            className="w-full mt-6 p-4 rounded-lg bg-white/90 text-black outline-none"
            rows={5}
          ></textarea>

          <div className="flex justify-center mt-6">
            <button className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-lg">
              Send a Message
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
