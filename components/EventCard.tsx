import { Images } from "@/constants/images";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import React from "react";

interface Props {
  title: string;
  image: StaticImageData
}

// Each event card will contain diff data so make it dynamic by props
const EventCard = ({ title, image }: Props) => {
  return (
    // Cause each card will clickable and send data to details one
    <Link href={'/event-details/{title}'} id="event-card">
      <Image src={image} alt={title} width={410} height={300} 
    //   the className poster is built in className check in global.css
      className="poster"
      />
      <p className="title">{title}</p>
    </Link>
  );
};

export default EventCard;
