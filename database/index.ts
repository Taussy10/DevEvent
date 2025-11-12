/**
 For exporting Database models 
 * Central export point for all Mongoose models
 */

export { default as Event, IEvent } from "./event.model";
export { default as Booking, IBooking } from "./booking.model";

// Typescript interfaces exports
export type { IEvent } from "@/database/event.model";
export type { IBooking } from "@/database/booking.model";
