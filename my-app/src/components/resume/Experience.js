/** @format */

import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2017 - 2021</p>
          <h2 className="text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-14 w-full  border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Sr. Representative, Operations."
            subTitle="Concentrix Daksh Services India Private Limited,  - (2017 - 2021)"
            result="Gurugram,India"
            des="Concentrix care deeply about their teams and the people who make them up."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
