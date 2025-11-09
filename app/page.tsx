import React from "react";
// import LightRays from "./LightRays";
const Home = () => {
  return (
    <section className="">
      {/* Why H1 getting gradient cause in global styles we applied gradient */}
      <h1 className="text-center">
        The Hub for Every Dev
        {/* br is for moving to next line */}
        <br />
        Event You Can't Miss
      </h1>
      <p className=" text-center mt5 ">Hackathons, Meetups and Conferences, All in One Place</p>
    </section>
  );
};

export default Home;
