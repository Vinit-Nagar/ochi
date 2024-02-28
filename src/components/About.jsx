import React from "react";

function About() {
  return (
    <div className="w-full p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black">
      <h1 className="font-['Neue_Montreal'] text-[4vw] leading-[4.5vw] tracking-tight ">
        Ochi is a strategic partner for fast-growing tech businesses that need
        to raise funds, sell products, explain complex ideas, and hire great
        people.
      </h1>
      <div className="w-full flex gap-5 border-t-[1px] pt-10 mt-20  border-[#879161] ">
        <div className="w-1/2">
          <h1 className="text-7xl">Our Approach:</h1>
          <button className=" flex gap-10 items-center py-6 uppercase tracking-tight text-[1.2vw] px-10 rounded-full mt-10 bg-zinc-900 text-white ">
            Read More
            <div className="w-2 h-2 rounded-full bg-slate-300 "></div>
          </button>
        </div>
        <img
          className="w-1/2 h-[70vh] rounded-3xl"
          src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg"
        />
      </div>
    </div>
  );
}

export default About;
