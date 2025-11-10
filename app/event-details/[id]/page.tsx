import { eventDetails } from "@/lib/event-details-data";
import React from "react";

// Dynamic routes data passed to new route as params
const EventDetails = async ({ params }: { Promise }) => {
  const { id } = await params;

  const event = eventDetails.find((e) => e.slug === id);
  if (!event) return <h1>Coming Soon</h1>;
  return (
    // <div> {title}</div>
    <div>
      <h3>Overview</h3>
      <p> {event?.overview}</p>

      <h3>Event Details</h3>
      <p> {event?.eventDetails.date}</p>
      <p> {event?.eventDetails.price}</p>
      <p> {event?.eventDetails.duration}</p>
      <p> {event?.eventDetails.venue}</p>
      <p> {event?.eventDetails.address}</p>
      <p> {event?.eventDetails.registrationLink}</p>

      <h3>Agenda</h3>
      <p>
        {" "}
        {event?.agenda.map((item, index) => (
          <p>{item}</p>
        ))}
      </p>

      <h3>About the Organizer</h3>
      <p>{event?.organizer}</p>

      <p className=" flex flex-row gap-1">
        {event?.tags.map((item, index) => (
          <p key={index} className=" ">
            {item}
          </p>
        ))}
      </p>
    </div>
  );
};

export default EventDetails;
