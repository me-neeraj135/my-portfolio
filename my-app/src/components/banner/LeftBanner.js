/** @format */

import React from "react";
import { Link } from "react-router-dom";

import { useTypewriter, Cursor } from "react-simple-typewriter";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaReact,
  FaInstagram,
} from "react-icons/fa";
import { SiTailwindcss, SiFigma, SiNextdotjs } from "react-icons/si";
import { DiCss3, DiJsBadge } from "react-icons/di";
const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["Professional Coder.", "Full Stack Developer.", "UI Designer."],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });

  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME TO MY WORLD</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm{" "}
          <span className="text-designColor capitalize">Neeraj Kumar</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
          I am fluent in classics like HTML , CSS, Javascript, NodeJs, Express
          And React.Js, My field of interest are building new Web Technologies
          And Products And Also using React. Whenever possible,I also apply my
          passion for developing products with React.Js and Modern Javascript
          Library And Frameworks Like Node.Js .
        </p>
      </div>
      <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-4">
            <a
              href="https://www.instagram.com/insta.neeraj.rajpoot/"
              target="_blank"
            >
              <span className="bannerIcon">
                <FaInstagram />
              </span>
            </a>
            <a href="https://twitter.com/Neeraj945436" target="_blank">
              <span className="bannerIcon">
                <FaTwitter />
              </span>
            </a>
            <a
              href="https://www.linkedin.com/in/neeraj-rajpoot-107177225/"
              target="_blank"
            >
              <span className="bannerIcon">
                <FaLinkedinIn />
              </span>
            </a>
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
              <SiNextdotjs />
            </span>
            <span className="bannerIcon">
              <DiCss3 />
            </span>
            <span className="bannerIcon">
              <DiJsBadge />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBanner;
