import React from 'react'
import media1 from "../assets/media1.png";
import media2 from "../assets/media2.png";
import media3 from "../assets/media3.png";
import media4 from "../assets/media4.png";
const Media = () => {
  return (
     <section
        className="w-full overflow-hidden 
        bg-linear-to-r from-[#f6ca9e] via-[#fee0be] to-[#ebaf84] py-12"
      >
        {/* Heading */}
        <div className="flex flex-col my-10 items-center text-center px-4">
          <h1 className="text-green-800 text-3xl md:text-4xl font-semibold my-4">
        SWARNAMUKHI  MEDIA
          </h1>
  
          <p className="text-green-900 max-w-2xl">
       Stay sparkling with the latest news and updates from Swarnamukhi Gold and Diamonds! Explore our news section for exciting announcements, new collection launches, exclusive offers, and behind-the-scenes glimpses into the world of jewelry.
          </p>
        </div>
  
        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-6 mt-10">
          
          {[ 
            { img: media1, title: "SWARNAMUKHI JEWELLERS" },
            { img: media2, title: "MATHRUBHUMI" },
            { img: media3, title: "NEWS18 KERALA" },
            { img: media4, title: "JANAM" },
          
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md rounded-xl overflow-hidden shadow-lg hover:scale-105 transition duration-300"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-52 object-cover"
              />
              <h1 className="text-center text-green-800 font-semibold py-3">
                {item.title}
              </h1>
            </div>
          ))}
  
        </div>
      </section>
  )
}

export default Media
