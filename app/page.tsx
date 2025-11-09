import ExploreBtn from "@/components/ExploreBtn";
import Navbar from "@/components/Navbar";
import React from "react";
// import LightRays from "./LightRays";
const Home = () => {
  const array = [1, 2, 3, 4, 5,6];
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
      <p className=" text-center mt-5 ">
        Hackathons, Meetups and Conferences, All in One Place
      </p>

      <ExploreBtn />

      <div className=" mt-20 space-y-7">
        <h3>Featured Events</h3>
        <ul className="events">
          {/* direct return not with return statemtn and curly */}
          {array.map((item, index) => (
            <li key={index}>Event {item}</li>
          ))}
        
        </ul>
      </div>
    </section>
  );
};

export default Home;
