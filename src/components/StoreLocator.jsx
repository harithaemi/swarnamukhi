import React from "react";
import location from "../assets/location.png";
import call from "../assets/call.png";
import mail from "../assets/mail.png";
import number from "../assets/number.png";
import emptybanner from "../assets/emptybanner.jpg";

const StoreLocator = () => {
  return (
    <section className="relative w-full py-16 overflow-hidden">
      
      {/* Background Image */}
      <img
        src={emptybanner}
        alt="background"
        className="absolute inset-0 w-full h-full object-cover blur-[3px] scale-105 -z-10"
      />

      {/* Heading Section */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 my-10">
        <h1 className=" text-3xl md:text-4xl font-semibold my-4">
          STORE LOCATOR
        </h1>

        <p className=" max-w-2xl">
          Swarnamukhi Jewellers is a trusted name in fine jewellery, known for
          its exquisite craftsmanship and elegant designs. Specializing in gold,
          diamond
        </p>
     

      {/* Content Section */}
      <div className="relative my-14 z-10 flex flex-col md:flex-row gap-10 justify-between max-w-6xl mx-auto px-6">
        
        {/* LEFT - CONTACT */}
        <div className="md:w-1/2 text-black">
          <h6 className="font-semibold mb-4">CONTACT US</h6>

          <div className="flex gap-2 items-start text-sm leading-6">
            <img src={location} className="w-5 mt-1" />
            <p>
              SWARNAMUKHI GOLD AND DIAMONDS PVT LTD <br />
              MAR TOWER, GROUND FLOOR, <br />
              MANNADIYAR LANE, <br />
              KURUPPAM ROAD, THRISSUR - 680001
            </p>
          </div>

          <div className="mt-4 text-sm space-y-2">
            <p className="flex gap-2">
              <img src={number} className="w-6" /> 0487-2900916
            </p>
            <p className="flex gap-2">
              <img src={mail} className="w-6" /> info@smgoldanddiamonds.com
            </p>
            <p>10:00 AM - 06:00 PM</p>
            <p className="flex gap-2">
              <img src={call} className="w-6" /> 917594037134
            </p>
          </div>
        </div>

        {/* RIGHT - MAP */}
        <div className="md:w-1/2 w-full h-75 md:h-100 rounded-xl overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3922.74135087587!2d76.2130751!3d10.521026599999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7ef7a132fa32b%3A0x56bf4765ed850a08!2sSwarnamukhi%20Gold%20and%20Diamonds%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1776703682481!5m2!1sen!2sin"
            className="w-full h-full border-0"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="store-location"
          ></iframe>
        </div>
 </div>
      </div>
    </section>
  );
};

export default StoreLocator;
