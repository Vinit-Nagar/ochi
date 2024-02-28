import React from "react";
import { motion } from "framer-motion";
function LandingPage() {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-.3"
      className="w-full h-screen bg-zinc-900 pt-1"
    >
      <div className="textstructure mt-52 px-20">
        {["WE CREATE", "EYE OPENING", "PRESENTATIONS"].map((item, index) => {
          return (
            // eslint-disable-next-line react/jsx-key
            <div className="masker">
              <div className="w-fit flex items-end overflow-hidden ">
                {index === 1 && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "8vw" }}
                    transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
                    className="mr-[1vw] w-[8vw] rounded-md h-[5.7vw] -top-[1.2vw] relative bg-green-500"
                  ></motion.div>
                )}
                <h1 className="pt-[2vw] -mb-[1vw] text-[9vw] leading-[0.75]  font-['Founders_Grotesk_Regular'] font-bold">
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
      <div className="border-t-[1px] border-zinc-800 mt-20 flex justify-between items-center py-5 px-20">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((item) => (
          // eslint-disable-next-line react/jsx-key
          <p className="text-md font-md tracking-tight leading-none">{item}</p>
        ))}
        <div className="start">
          <div className="py-2 px-4 border-[2px] font-light text-sm border-zinc-500 rounded-full">
            START THE PROJECT
          </div>
          <div className="w-3 h-3 rounded-full"></div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
