import React from "react";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa"; // Assuming you have the corresponding React icons library
import bg1 from "/images/slider-bg1.jpg";
import bnr from "/images/slider-bnr.jpg";
const HeaderSection = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-3 gap-5">
          <div className="col-span-2">
            <div className="relative flex flex-col justify-center px-16  w-full h-[500px] bg-cover bg-center bg-no-repeat">
              <div className="absolute top-1/2 left-0 -translate-y-1/2 flex items-center justify-center w-8 h-16 px-4 py-2 text-sm rounded-r font-semibold hover:bg-gray-900 transition-all duration-500 bg-[#0167F3] text-white">
                <FaCaretLeft className="absolute w-5 h-5 text-white" />
              </div>
              <div className="absolute top-1/2 right-0 -translate-y-1/2 flex items-center justify-center w-8 h-16 px-4 py-2 text-sm rounded-l font-semibold hover:bg-gray-900 transition-all duration-500 bg-[#0167F3] text-white">
                <FaCaretRight className="absolute w-5 h-5 text-white" />
              </div>

              <div className="text-xl font-semibold text-gray-500">
                No restocking fee ($35 savings)
              </div>
              <h2 className="mt-2 text-4xl font-extrabold text-gray-900">
                M75 Sport Watch
              </h2>
              <p className="w-3/5 mt-4 text-base font-medium text-gray-500">
                Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod
                tempor incididunt ut labore dolore magna aliqua.
              </p>
              <div className="flex items-end mt-6 space-x-3">
                <div className="text-lg font-semibold text-gray-500">
                  Now Only
                </div>
                <h2 className="text-2xl font-extrabold text-gray-900">
                  $320.99
                </h2>
              </div>
              <button className="flex items-center justify-center w-32 mt-6 py-4 text-sm rounded border-none font-semibold bg-[#a6bddf] transition-all duration-500 hover:bg-gray-700 text-white">
                Shop Now
              </button>
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <div className="flex flex-col justify-center px-8 space-y-2 w-full h-[240px] bg-cover bg-no-repeat">
              <p className="mt-4 text-base font-semibold text-gray-500">
                New line required
              </p>
              <h2 className="text-xl font-bold text-gray-900">
                iPhone 12 Pro Max
              </h2>
              <h3 className="text-xl font-bold text-[#0167F3]">$259.99</h3>
            </div>
            <div className="flex flex-col justify-center px-8 w-full h-[240px] bg-gray-900 bg-cover bg-no-repeat">
              <h2 className="text-xl font-bold text-white">Weekly Sale!</h2>
              <p className="mt-4 text-base font-semibold text-white">
                Saving up to 50% off all online store items this week.
              </p>
              <button className="flex items-center justify-center w-28 mt-6 px-4 py-2 text-sm rounded border-none font-semibold bg-[#0167F3] transition-all duration-500 hover:bg-gray-700 text-white">
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeaderSection;
