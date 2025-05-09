"use client";
import React, { useRef, useState } from "react";
import SideBar from "../components/sidebar";
import Initiative from "../components/initiativeBox";
import Notification from "../components/notificationBox";

function HomePage() {
  const [locationText, setLocationText] = useState("");

  return (
    <div className="flex min-w-screen max-w-screen min-h-screen max-h-screen bg-zinc-800 font-light text-sm">
      <div className="bg-gray-300 w-[10%]">
        <SideBar />
      </div>

      <div className="bg-white w-[35%]">
        <div className="p-5">
          <p className="text-xl">Initiatives</p>
          <hr className="h-px my-5 bg-gray-200 border-0 dark:bg-gray-700"></hr>
          <p>Location: </p>
          <input
            type="text"
            value={locationText}
            onChange={(e) => setLocationText(e.target.value)}
            className="rounded-md border-2 p-2 focus:outline-0 w-full"
            placeholder="Malmö, Sweden"
          ></input>
          <hr className="h-px my-5 bg-gray-200 border-0 dark:bg-gray-700"></hr>
        </div>

        <div
          className="w-[95%] h-[65%] justify-self-center space-y-2 overflow-y-scroll pr-1
        [&::-webkit-scrollbar]:w-2
        [&::-webkit-scrollbar-track]:rounded-full
        [&::-webkit-scrollbar-track]:bg-gray-100
        [&::-webkit-scrollbar-thumb]:rounded-full
        [&::-webkit-scrollbar-thumb]:bg-gray-300
        dark:[&::-webkit-scrollbar-track]:bg-white
        dark:[&::-webkit-scrollbar-thumb]:bg-gray-300"
        >
          <Initiative />
          <Initiative />
          <Initiative />
          <Initiative />
          <Initiative />
          <Initiative />
          <Initiative />
          <Initiative />
        </div>
      </div>

      <div className="bg-gray-300 w-[35%]">
        <div className="p-5">
          <p className="text-xl">My Initiatives</p>
          <hr className="h-px my-5 bg-gray-200 border-0 dark:bg-gray-700"></hr>
        </div>

        <div className="w-[95%] justify-self-center space-y-2 h-[80%] overflow-y-scroll pr-1
        [&::-webkit-scrollbar]:w-2
        [&::-webkit-scrollbar-track]:rounded-full
        [&::-webkit-scrollbar-track]:bg-gray-100
        [&::-webkit-scrollbar-thumb]:rounded-full
        [&::-webkit-scrollbar-thumb]:bg-gray-300
        dark:[&::-webkit-scrollbar-track]:bg-white
        dark:[&::-webkit-scrollbar-thumb]:bg-gray-300">
          <Initiative />
          <Initiative />
          <Initiative />
          <Initiative />
          <Initiative />
        </div>
      </div>

      <div className="bg-white w-[20%]">
        <div className="p-5">
          <p className="text-xl">Notifications</p>
          <hr className="h-px my-5 bg-gray-200 border-0 dark:bg-gray-700"></hr>
        </div>
        <div className="w-[95%] space-y-2 justify-self-center h-[80%] overflow-y-scroll pr-1
        [&::-webkit-scrollbar]:w-2
        [&::-webkit-scrollbar-track]:rounded-full
        [&::-webkit-scrollbar-track]:bg-gray-100
        [&::-webkit-scrollbar-thumb]:rounded-full
        [&::-webkit-scrollbar-thumb]:bg-gray-300
        dark:[&::-webkit-scrollbar-track]:bg-white
        dark:[&::-webkit-scrollbar-thumb]:bg-gray-300">
          <Notification />
          <Notification />
          <Notification />
          <Notification />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
