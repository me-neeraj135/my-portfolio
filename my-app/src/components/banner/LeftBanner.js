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
import { AiFillGithub } from "react-icons/ai";
import { DiCss3, DiJsBadge } from "react-icons/di";
const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["Professional Coder.", "Full Stack Developer."],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });

  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm{" "}
          <span className="text-orange-400 capitalize">Neeraj Kumar</span>
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
          I am a passionate Full Stack Web Developer . I am proficient in
          front-end technologies such as HTML, CSS, and JavaScript, and has
          experience with modern frameworks like React and I am also familiar
          with back-end technologies like Node.js and Express.js and comfortable
          working with databases like MongoDB. I am a quick learner, a team
          player, and always eager to learn new technologies to further enhance
          my skills as a Full Stack Web Developer.
        </p>
      </div>
      <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-4">
            <a
              href="https://github.com/me-neeraj135"
              target="_blank"
              rel="noreferrer"
            >
              <span className="bannerIcon">
                <AiFillGithub />
              </span>
            </a>
            <a
              href="https://twitter.com/Neeraj945436"
              target="_blank"
              rel="noreferrer"
            >
              <span className="bannerIcon">
                <FaTwitter />
              </span>
            </a>
            <a
              href="https://www.linkedin.com/in/neeraj-rajpoot-107177225/"
              target="_blank"
              rel="noreferrer"
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
