"use client";
import React, { useRef, useState } from "react";


function SideBar() {

  return (
    <div>
      <div className="bg-gray-300 w-full">
        <button
          className=" bg-white hover:bg-gray-500 rounded-md p-2 w-[90%] mx-1 my-1 mt-5"
          onClick=""
        >
          Home
        </button>
        <button
          className=" bg-white hover:bg-gray-500 rounded-md p-2 w-[90%] mx-1 my-1"
          onClick=""
        >
          My Profile
        </button>
        <button
          className=" bg-white hover:bg-gray-500 rounded-md p-2 w-[90%] mx-1 my-1"
          onClick=""
        >
          + New Initiative
        </button>
        <button
          className=" bg-white hover:bg-gray-500 rounded-md p-2 w-[90%] mx-1 my-1"
          onClick=""
        >
          My Actions
        </button>
        <button
          className=" bg-white hover:bg-gray-500 rounded-md p-2 w-[90%] mx-1 my-1"
          onClick=""
        >
          + New Action
        </button>
        <button
          className=" bg-white hover:bg-gray-500 rounded-md p-2 w-[90%] mx-1 my-1"
          onClick=""
        >
          Inbox
        </button>
        <button
          className=" bg-white hover:bg-gray-500 rounded-md p-2 w-[90%] mx-1 my-1"
          onClick=""
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default SideBar;
