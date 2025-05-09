"use client";
import React, { useRef, useState } from "react";
import Sidebar from 


function Initiative_View() {
  // variables for signup fields
  const [signupEmailText, setSignupEmailText] = useState("");
  

  // variables for login fields
  const [loginEmailText, setLoginEmailText] = useState("");


  // method called when signup is clicked
  async function SignupClicked() {
  }

  // method called when login is clicked
  async function loginClicked() {
  }

  return (
    <div className="flex w-screen min-h-screen bg-zinc-300 font-light text-sm">
      <Sidebar/>
      
    </div>
  );
}

export default Initiative_View;
