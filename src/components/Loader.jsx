import React from "react";

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen w-screen">
      <div className="relative w-12 h-12">
        <div className="absolute w-full h-full border-4 border-blue-500 rounded-full animate-spin border-t-transparent"></div>
        <div className="absolute w-full h-full border-4 border-blue-300 rounded-full animate-spin border-b-transparent [animation-duration:2s]"></div>
      </div>
    </div>
  );
};

export default Loader;
