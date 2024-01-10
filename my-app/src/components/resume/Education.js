/** @format */

import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          {/* <p className="text-sm text-designColor tracking-[4px]">2010 - 2022</p> */}
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Full Stack Web Development"
            subTitle="AltCamus(BootCamp)"
            des="Full stack development refers to the end-to-end application software development, including the front end and back end. The front end consists of the user interface, and the back end takes care of the business logic and application workflows.."
          />

          <ResumeCard
            title="React-Native"
            subTitle="Coursera By Meta"
            des="In this module, the basic structure and use of React Native is explored and demonstrated. You will learn to build a single page React Native app and style it using basic components such as View, Text and StyleSheet."
          />
          <ResumeCard
            title="Bachelor of Commerce."
            subTitle="Bundelkhand University"
            des="Bachelor of Commerce is a degree in business, management, economics or accounting,."
          />
        </div>
      </div>
      {/* part Two */}

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          {/* <p className="text-sm text-designColor tracking-[4px]">2010 - 2022</p> */}
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full  border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Sr. Representative, Operations."
            subTitle="Concentrix Daksh Services India Private Limited,  - (2017 - 2021)"
            result="Gurugram"
            des="Concentrix care deeply about their teams and the people who make them up."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
