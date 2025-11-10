import { Images } from "@/constants/images";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import React from "react";
import { EventItem } from "@/lib/event-list-data";
import { Icons } from "@/constants/icons";

// Each event card will contain diff data so make it dynamic by props
const EventCard = ({ slug, image, title, location, date, time }: EventItem) => {
  return (
    // Why Link ? Cause each card will clickable and send data to details one
    // What is slug ? It's short URL = slug part of big URL(/event-details)
    <Link
      href={{
        pathname: `/event-details/${slug}`,
        // query: {image},
      }}
      locale="fr"
      id="event-card"
    >
      <Image
        src={image}
        alt={title}
        width={410}
        height={300}
        //   the className poster is built in className check in global.css
        className="poster"
      />
      <div className=" flex flex-row  gap-2">
        <Image src={Icons.pin} alt="location" />
        <p className=" font-bold">{location}</p>
      </div>
      <p className="title font-bold">{title}</p>

      {/* Div for date and timing */}
      <div className=" flex flex-row gap-12">
        <div className=" flex flex-row  gap-2">
          <Image src={Icons.calendar} alt="calendar" />
          <p>{date}</p>
        </div>

        <div className=" flex flex-row gap-2">
          <Image src={Icons.clock} alt="clock" />
          <p>{time}</p>
        </div>
      </div>
    </Link>
  );
};

export default EventCard;
