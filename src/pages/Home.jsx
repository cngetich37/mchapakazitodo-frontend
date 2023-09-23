import React from "react";

function Home() {
  return (
    <>
    <div className="bg-gray-500">
    <div className="flex justify-center">
      <h1 className="text-3xl text-white italic font-semibold">
        MchapakaziTodo
      </h1>
    </div>
      <div className="flex justify-center items-center h-auto max-w-xl rounded-lg" >
        <img src="../src/assets/Checklist-pana.png" />
      </div>
      <p class="flex justify-center text-sm text-white mt-10">
            Designed By{" "}
            <a href="#" class="ml-1 text-white font-bold">
              Collins Nixon Tech
            </a>
          </p>
    </div>
    </>
  );
}

export default Home;
