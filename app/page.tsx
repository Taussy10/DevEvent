import EventCard from "@/components/EventCard";
import ExploreBtn from "@/components/ExploreBtn";
import Navbar from "@/components/Navbar";
import { Images } from "@/constants/images";
import { events } from "@/lib/event-list-data";
import React from "react";
// import LightRays from "./LightRays";
const Home = () => {
  const array = [
    {
      image: Images.event1,
      title: "Event 1",
      slug:"even-1", // for identifying
      location: "San Fransisco, CA",
      date: "28the October 2025",
      time: "12:25pm - 2:40pm"
    },
    {
      image: Images.event2,
      title: "Event 2"
    }
  ];
  return (
    <section className="">
      {/* <Navbar /> */}
      {/* Why H1 getting gradient cause in global styles we applied gradient */}
      <h1 className="text-center">
        The Hub for Every Dev
        {/* br is for moving to next line */}
        <br />
        Event You Can't Miss
      </h1>
      <p className=" text-center mt-5   text-2xl ">
        Hackathons, Meetups and Conferences, All in One Place
      </p>

      <ExploreBtn />

      <div className=" mt-20 space-y-7">
        <h3 id="#events">Featured Events</h3>
        <ul className="events">
          {/* direct return not with return statemtn and curly */}
          {events.map((item, index) => (
            <div key={index}>
{/* We are sending data EventCard component */}
              {/* What is ...item ? Whatever the item contains , we spreaded it 
              then we can get those 
              example item = {"title", "image"}
              by spreading: ...item = {"title"}, "image"
              */}
            <EventCard {...item} />
            </div>
          ))}
        
        </ul>
      </div>
    </section>
  );
};

export default Home;
