import React from "react";
import emptybanner from "../assets/emptybanner.jpg";
import news1 from "../assets/news1.jpg";
import news2 from "../assets/news2.jpg";
import news3 from "../assets/news3.jpg";

const News = () => {
  const newsData = [
    {
      img: news1,
      title: "OUR INAUGARATION",
      description:
        "Swarnamukhi Gold and Diamonds proudly marked its grand opening on the auspicious day of Akshaya Tritiya, Wednesday, April 30, 2025, at 11:00 AM, in the cultural heart of Mannadiyar Lane, Thrissur.",
    },
    {
      img: news2,
      title: "MATHRUBHUMI",
      description:
        "Introducing Swarnamukhi's Advance Booking Scheme, a revolutionary gold investment opportunity designed to help you secure your financial future.",
    },
    {
      img: news3,
      title: "NEWS18 KERALA",
      description:
        "Introducing Swarnamukhi's Advance Booking Scheme, a revolutionary gold investment opportunity designed to help you secure your financial future.",
    },
  ];

  return (
    <section className="relative w-full py-16 overflow-hidden">
      {/* Background Image */}
      <img
        src={emptybanner}
        alt="background"
        className="absolute inset-0 w-full h-full object-cover blur-[3px] scale-105"
      />

      <div className="relative  text-center z-10 max-w-6xl mx-auto px-6">
        <div className="flex flex-col items-center m-6">
        <h1 className=" text-3xl md:text-4xl font-semibold my-4">
         NEWS & EVENTS
        </h1>

        <p className=" text-center max-w-2xl">
          Our Vision is set on a framework that focuses the jewellery business and everything about it. We have seated our attention to enhance the customer experience, understand their needs, and brighten their world. It becomes a part of our duty to translate everyone’s dream into reality and thereby spread happiness. 
        </p></div>
        {/* Cards Container */}
        <div className="grid md:grid-cols-3 gap-6">
          {newsData.map((item, index) => (
            <div key={index} className="card bg-base-100 shadow-sm">
              <figure>
                <img src={item.img} alt={item.title} />
              </figure>

              <div className="card-body">
                <h2 className="card-title">{item.title}</h2>
                <p>{item.description}</p>

                <div className="card-actions justify-end">
                   <button className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-lg">
              Read more
            </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;
