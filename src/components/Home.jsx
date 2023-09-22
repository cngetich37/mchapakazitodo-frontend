import React from "react";

function Home() {
  return (
    <>
    <div className="bg-gray-500">
    <div className="flex justify-center">
      <h1 className="text-3xl text-white italic font-semibold">
        Mchapakazi Todo
      </h1>
    </div>
      <div className="flex justify-center items-center h-auto max-w-xl rounded-lg" >
        <img src="../src/assets/Checklist-pana.png" />
      </div>
      <div className="flex justify-center text-xl font-semibold text-white font-sans ">
        <h1> Designed by Collins Nixon Tech</h1>
    </div>
    </div>
    </>
  );
}

export default Home;
