// 'use client'
import { Icons } from "@/constants/icons";
import { eventDetails } from "@/lib/event-details-data";

import Image from "next/image";
import Link from "next/link";
import React from "react";
// import { useSearchParams } from "next/navigation";
// Dynamic routes data passed to new route as params
const EventDetails =  async({ params }: { id: string }) => {
  const { id } =  await params;
  // const searchParams = useSearchParams();
  
    // const image = params.get("image");
// console.log("IMAGE", searchParams, image)

  const event = eventDetails.find((e) => e.slug === id);
  if (!event) return( 
  <div className=" flex-1 flex-center min-h-screen items-center justify-center ">
    <h1>Coming Soon</h1>
  </div> ) ;
  return (
    // <div> {title}</div>
    <div className=" ">
    <div className=" p-2">
      <Image src={event.image}
      height={100}
      // width={400}
      className="  w-full h-96"
      alt="image"/>
      </div>
      <div className=" p-2">
        <h3>Overview</h3>
        <p> {event?.overview}</p>
      </div>

      <div className=" p-2">
        <h3>Event Details</h3>
        <div className=" flex flex-row gap-2">
          <Image src={Icons.calendar} alt="calendar" />
          <p> Date: {event?.eventDetails.date}</p>
        </div>

        <div className=" flex flex-row gap-2">
          <Image src={Icons.clock} alt="clock" />
         
        <p> {event?.eventDetails.duration}</p>
        </div>

        <div className=" flex flex-row gap-2">
          <Image src={Icons.mode} alt="Calendar" />
         
        <p> {event?.eventDetails.mode}</p>
        </div>

        <div className=" flex flex-row gap-2">
          <Image src={Icons.pin} alt="Calendar" />
         
         <div>
        <p> {event?.eventDetails.address}</p>
         </div>
        </div>



        <div className=" flex flex-row gap-2">
          <Image src={Icons.audience} alt="Calendar" />
         
        <Link href={`${event?.eventDetails.registrationLink}`} target="_blank"   > <a className=" underline text-blue-500">{event?.eventDetails.registrationLink} </a> </Link>
        </div>
      </div>

      <div className=" p-2">
        <h3>Agenda</h3>
        <ul className=" ">
          {event?.agenda.map((item, index) => (
            <li className="p-1">{item}</li>
          ))}
        </ul>
      </div>

      <div className=" p-2">
        <h3>About the Organizer</h3>
        <p>{event?.organizer}</p>
      </div>

      <div className=" p-2">
        <p className=" flex flex-row gap-2">
          {event?.tags.map((item, index) => (
            <p key={index} className=" p-2 bg-gray-900  rounded-md ">
              {item}
            </p>
          ))}
        </p>
      </div>
    </div>
  );
};

export default EventDetails;
