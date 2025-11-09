import { Icons } from "@/constants/icons";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    // Learn to use Sementic elments like main, section header, nav, footer cause it improves SEO

    <header className="">
        <nav>
            <Link href={'/'} className="logo">
            <Image src={Icons.logo} alt="logo" className="mr-2" />
            <p className="  font-martian-mono ">DevEvent</p>
            </Link>
            <ul>
                <Link href={'/'} >Home</Link>
                <Link href={'/events'} >Events</Link>
                <Link href={'/create-event'} >Create Event</Link>
            </ul>
        </nav>

      {/* <div className=" flex flex-row  ">
       
      </div> */}
    </header>
  );
};

export default Navbar;
