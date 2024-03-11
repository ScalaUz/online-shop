import React from "react";

import {
  FaApple,
  FaClock,
  FaEnvelope,
  FaGooglePlay,
  FaInstagram,
  FaMapPin,
  FaPhone,
  FaTelegram,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-8 bg-gray-900">
      <div className="container mx-auto">
        <div className="grid grid-cols-4 gap-3 pt-4 pb-14">
          <div>
            <img
              src="/white-logo.svg"
              alt="logo"
              className="pb-3 mb-4 w-52"
            ></img>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-200">
                <FaMapPin className="w-5 h-5" />
                <div className="ml-3 text-base font-medium">
                  Khorezm region, Urgench
                </div>
              </li>
              <li className="flex items-center text-gray-200">
                <FaPhone className="w-5 h-5" />
                <div className="ml-3 text-base font-medium">
                  +99893 747-59-95
                </div>
              </li>
              <li className="flex items-center text-gray-200">
                <FaTelegram className="w-5 h-5" />
                <div className="ml-3 text-base font-medium">@isurojiddin</div>
              </li>
              <li className="flex items-center text-gray-200">
                <FaClock className="w-5 h-5" />
                <div className="ml-3 text-base font-medium">
                  Every day 9:00 - 18:00
                </div>
              </li>
              <li>
                <ul className="flex items-center space-x-1">
                  <li className="flex items-center justify-center text-white rounded-full w-8 h-8 cursor-pointer hover:bg-[#0167F3]">
                    <FaYoutube className="w-6 h-6" />
                  </li>
                  <li className="flex items-center justify-center text-white rounded-full w-8 h-8 cursor-pointer hover:bg-[#0167F3]">
                    <FaInstagram className="w-6 h-6" />
                  </li>
                  <li className="flex items-center justify-center text-white rounded-full w-8 h-8 cursor-pointer hover:bg-[#0167F3]">
                    <FaTelegram className="w-6 h-6" />
                  </li>
                  <li className="flex items-center justify-center text-white rounded-full w-8 h-8 cursor-pointer hover:bg-[#0167F3]">
                    <FaTiktok className="w-6 h-6" />
                  </li>
                  <li className="flex items-center justify-center text-white rounded-full w-8 h-8 cursor-pointer hover:bg-[#0167F3]">
                    <FaEnvelope className="w-6 h-6" />
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="relative mb-8 pb-4 text-base font-semibold text-white before:w-10 before:bg-[#0167F3] before:left-0 before:absolute before:bottom-0 before:h-1">
              Our Mobile App
            </h3>
            <ul className="space-y-3">
              <li>
                <button className="inline-flex items-center space-x-3 px-8 py-4 rounded bg-gray-800 text-white cursor-pointer transition-all duration-500 hover:bg-[#0167F3]">
                  <FaApple className="w-8 h-8" />
                  <div className="text-left">
                    <div className="text-sm">Download on the</div>
                    <div className="text-base font-medium">App Store</div>
                  </div>
                </button>
              </li>
              <li>
                <button className="inline-flex items-center space-x-3 px-8 py-4 rounded bg-gray-800 text-white cursor-pointer transition-all duration-500 hover:bg-[#0167F3]">
                  <FaGooglePlay className="w-8 h-8" />
                  <div className="text-left">
                    <div className="text-sm">Download on the</div>
                    <div className="text-base font-medium">Google Play</div>
                  </div>
                </button>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="relative mb-8 pb-4 text-base font-semibold text-white before:w-10 before:bg-[#0167F3] before:left-0 before:absolute before:bottom-0 before:h-1">
              Information
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-gray-200 text-base font-medium cursor-pointer transition-all duration-500 hover:text-[#0167F3] hover:ml-2"
                >
                  About us
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-gray-200 text-base font-medium cursor-pointer transition-all duration-500 hover:text-[#0167F3] hover:ml-2"
                >
                  Contacts us
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-gray-200 text-base font-medium cursor-pointer transition-all duration-500 hover:text-[#0167F3] hover:ml-2"
                >
                  Downlands
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-gray-200 text-base font-medium cursor-pointer transition-all duration-500 hover:text-[#0167F3] hover:ml-2"
                >
                  Sitemap
                </Link>
              </li>
              <li>
                <Link
                  to="/faq"
                  className="text-gray-200 text-base font-medium cursor-pointer transition-all duration-500 hover:text-[#0167F3] hover:ml-2"
                >
                  FAQs
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="relative mb-8 pb-4 text-base font-semibold text-white before:w-10 before:bg-[#0167F3] before:left-0 before:absolute before:bottom-0 before:h-1">
              Shop Departments
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-gray-200 text-base font-medium cursor-pointer transition-all duration-500 hover:text-[#0167F3] hover:ml-2"
                >
                  Computers & Accessories
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-gray-200 text-base font-medium cursor-pointer transition-all duration-500 hover:text-[#0167F3] hover:ml-2"
                >
                  Smartphones & Tablets
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-gray-200 text-base font-medium cursor-pointer transition-all duration-500 hover:text-[#0167F3] hover:ml-2"
                >
                  TV, Video & Audio
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-gray-200 text-base font-medium cursor-pointer transition-all duration-500 hover:text-[#0167F3] hover:ml-2"
                >
                  Cameras, Photo & Video
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-gray-200 text-base font-medium cursor-pointer transition-all duration-500 hover:text-[#0167F3] hover:ml-2"
                >
                  Headphones
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="container mx-auto">
        <div className="flex justify-center pt-6 border-t border-gray-800">
          <span className="text-sm text-gray-200">
            UltraStore © 2022. All Rights Reserved. Developed by{" "}
            <a
              href="http://it-forelead.uz"
              className="cursor-pointer hover:text-[#0167F3]"
            >
              IT-Forelead
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
