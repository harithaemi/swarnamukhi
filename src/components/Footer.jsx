import React from "react";
import Logo from "../assets/logo.png";
import fb from "../assets/fb.png";
import yt from "../assets/yt.png";
import watsapp from "../assets/watsapp.png";
import twitter from "../assets/twitter.png";
import insta from "../assets/insta.png";
import location from "../assets/location.png";
import call from "../assets/call.png";
import mail from "../assets/mail.png";
import number from "../assets/number.png";


const Footer = () => {
  return (
    <>
    <footer className="bg-[#f9eede] text-[#1f3d2b] pt-16 pb-6 px-6">
      
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10">
        
        {/* LEFT SECTION */}
        <div>
          <img src={Logo} className="h-20 mb-4" />

          <p className="text-sm leading-6">
            Elevate your celebrations! Plan, save, and gift gold for unforgettable
            weddings, anniversaries, and special moments. Your dream occasions,
            our timeless gold Swarnamukhi Jewellers's hospitality is an experience to live.
          </p>

          <h6 className="mt-6 font-semibold">FOLLOW US ON</h6>

          <div className="flex gap-3 mt-3">
            {[fb, twitter, yt, insta, watsapp].map((icon, i) => (
              <div key={i} >
                <img src={icon} className="w-8 h-8" />
              </div>
            ))}
          </div>
        </div>

        {/* COLUMN 2 */}
        <div>
          <h6 className="font-semibold mb-4">GET TO KNOW US</h6>
          <ul className="space-y-2 text-sm">
            <li>ABOUT US</li>
            <li>SWARNAMUKHI NEWS & EVENTS</li>
            <li>CONTACT US</li>
            <li>STORE LOCATOR</li>
            <li>MEDIA</li>
            <li>GALLERY</li>
            <li>CUSTOMERS STORIES</li>
          </ul>
        </div>

        {/* COLUMN 3 */}
        <div>
          <h6 className="font-semibold mb-4">INFORMATION</h6>
          <ul className="space-y-2 text-sm">
            <li>CAREERS</li>
            <li>TERMS AND CONDITIONS</li>
            <li>WHY CHOOSE US</li>
            <li>GOLD RATE HISTORY</li>
            <li>SILVER RATE HISTORY</li>
            <li>OUR PROMISE</li>
            <li>COLLECTIONS</li>
            <li>PRIVACY POLICY</li>
          </ul>
        </div>

        {/* COLUMN 4 */}
        <div>
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
            <p className="flex gap-2"><img src={number} className="w-6 h-auto"/> 0487-2900916</p>
            <p className="flex gap-2"><img src={mail} className="w-6 h-auto"/>  info@smgoldanddiamonds.com</p>
            <p>10:00 AM - 06:00 PM</p>
            <p className="flex gap-2"><img src={call} className="w-6 h-auto"/>  917594037134</p>
          </div>
        </div>
      </div>

    
    </footer>
      {/* BOTTOM */}
     <div className="text-center text-sm bg-[#3e2104] text-white py-5">
  Copyright © 2026 Swarnamukhi Gold and Diamonds. All rights reserved.
</div>
</>
  );
};

export default Footer;
