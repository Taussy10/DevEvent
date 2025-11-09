"use client";
import Image from "next/image";
import React from "react";
import { Icons } from "@/constants/icons";
// Why creating seperate component ? cause it's a interation
// then we need 'use client'

// btw look at component file name: written in CapitalCase but
// for pages it's written in smallcase with seperated with dash
// why? cause first that's a page and 2nd this is how we write url name
const ExploreBtn = () => {
  return (
    <div>
      <button
        type="button"
        // Why Id? so that we refer it later
        id="explore-btn"
        className=" mt-7 mx-auto"
        onClick={() => console.log("hello")}
      >
        <a href="#events">
          Explore Events
          <Image src={Icons.arrowDown} alt="Pic of event" />
        </a>
      </button>
      <h1></h1>
    </div>
  );
};

export default ExploreBtn;
