import { Images } from "@/constants/images";
import { StaticImageData } from "next/image";

export type EventItem = {
  image: StaticImageData;
  title: string;
  slug: string;
  location: string;
  date: string; // e.g., "2025-11-07"
  time: string; // e.g., "09:00 AM"
};



export const events: EventItem[] = [
  {
    image: Images.event1,
    title: "React Summit US 2025",
    slug: "react-summit-us-2025",
    location: "San Francisco, USA",
    date: "2025-11-07",
    time: "09:00 AM",
  },
  {
    image: Images.event2,
    title: "KubeCon + CloudNativeCon Europe 2026",
    slug: "kubecon-cloudnativecon-eu-2026",
    location: "Vienna, Austria",
    date: "2026-03-18",
    time: "10:00 AM",
  },
  {
    image: Images.event3,
    title: "AWS Event 2025",
    slug: "aws-event-2025",
    location: "Las Vegas, USA",
    date: "2025-12-01",
    time: "08:30 AM",
  },
  {
    image: Images.event4,
    title: "Next.js Conf 2025",
    slug: "nextjs-conf-2025",
    location: "Los Angeles, USA",
    date: "2025-11-12",
    time: "09:30 AM",
  },
  {
    image: Images.event5,
    title: "Google Cloud Next 2026",
    slug: "google-cloud-next-2026",
    location: "Hyderabad, USA",
    date: "2026-04-07",
    time: "09:00 AM",
  },
  {
    image: Images.event6,
    title: "ETHGlobal Hackathon: Paris 2026",
    slug: "ethglobal-paris-2026",
    location: "Paris, France",
    date: "2026-07-10",
    time: "10:00 AM",
  },
  // {
  //   image: Images.eventFull,
  //   title: "Open Source Summit North America 2026",
  //   slug: "oss-na-2026",
  //   location: "Vancouver, Canada",
  //   date: "2026-06-22",
  //   time: "09:00 AM",
  // },
];




export default events;
