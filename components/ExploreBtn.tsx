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
    <div className="">
      <button
        type="button"
        // Why Id? so that we refer it later
        id="explore-btn"
        className=" mt-7 mx-auto"
        onClick={() => console.log("hello")}
      >
        <a href="#events">
          <p className=" text-xl font-semibold">Explore Events</p>
          {/* We write alt tag like this */}
          <Image
            src={Icons.arrowDown}
            alt="arrow-down"
            width={24}
            height={24}
          />
        </a>
      </button>
      
    </div>
  );
};

export default ExploreBtn;
