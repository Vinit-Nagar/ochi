import React from "react";

function Cards() {
  return (
    <div className="w-full h-screen flex items-center px-32 gap-5 bg-zinc-900">
      <div className="container w-1/2">
        <div className="card relative rounded-xl w-full h-96 flex items-center justify-center bg-[#004D43] ">
          <img
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
            alt=""
          />
          <button className=" px-5 py-2 font-['Neue_Montreal'] rounded-full border-2 absolute left-10 bottom-10 ">
            ©2019-2022
          </button>
        </div>
      </div>
      <div className="container flex gap-5 w-1/2">
        <div className="card relative rounded-xl w-full h-96 flex items-center justify-center bg-[#212121] ">
          <img
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"
            alt=""
          />
          <button className=" px-5 py-2 font-['Neue_Montreal'] rounded-full border-2 absolute left-10 bottom-10 ">
            RATING 5.0 ON CLUTCH
          </button>
        </div>
        <div className="card relative rounded-xl w-full h-96 flex items-center justify-center bg-[#212121] ">
          <img
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo003.png"
            alt=""
          />
          <button className=" px-5 py-2 font-['Neue_Montreal'] rounded-full border-2 absolute left-10 bottom-10 ">
            BUISNESS BOOTCAMP ALLUMINI
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cards;
