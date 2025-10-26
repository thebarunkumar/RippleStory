import React from "react";
import { footer_data } from "../assets/assets";

const Footer = () => {
  return (
    <div className="px-6 md:px-16 lg:px-24 xl:px-32 bg-primary/3">
      <div className="flex flex-col md:flex-row items-start justify-between gap-10 py-10 border-gray-500/30 text-gray-500">
        {/* <div>
            <img src={assets.logo} alt="logo" className='w-32 sm:w-44'/>
            <p className='max-w-[410px] mt-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, cupiditate quasi? Id, ipsam? Alias, eaque ad. Exercitationem atque natus dicta a impedit ipsa quam omnis aut doloremque fuga. Sunt, eius.</p>
        </div> */}

        <div>
          {/* Logo as text instead of image */}
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 bg-clip-text text-transparent cursor-pointer transition-all duration-500 hover:scale-105">
            Ripple<span className="text-blue-800">Story</span>
          </h1>

          {/* Blog description */}
          <p className="max-w-[410px] mt-6 text-gray-600 leading-relaxed">
            RippleStory is your go-to blog app where technology, ideas, and
            stories come together. Discover insightful articles, trending
            updates, and fresh perspectives—all in one place.
          </p>
        </div>

        <div className="flex flex-wrap justify-between w-full md:w-[45%] gap-5">
          {footer_data.map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold text-base text-gray-900 md:mb-5 mb-2">
                {section.title}
              </h3>
              <ul>
                {section.links.map((link, i) => (
                  <li key={i}>
                    <a href="#" className="hover:underline transition">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <p className="py-4 text-center text-sm md:text-base text-gray-500/80">
        Copyright 2025 © RippleStory - All Right Reserved.
      </p>
    </div>
  );
};

export default Footer;
