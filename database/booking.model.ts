import mongoose, { Schema, Model, Document, Types } from "mongoose";
import Event, { IEvent } from "./event.model";

/**
 * Interface for Booking document
 */
export interface IBooking extends Document {
  eventId: Types.ObjectId;
  email: string;
  createdAt: Date;
  updatedAt: Date;
}

/**
 * Booking schema definition
 */
const bookingSchema = new Schema<IBooking>(
  {
    eventId: {
      type: Schema.Types.ObjectId,
      ref: "Event",
      required: [true, "Event ID is required"],
      index: true, // Index for faster queries on eventId
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      trim: true,
      lowercase: true,
      validate: {
        validator: function (v: string) {
          // Email validation regex
          return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
        },
        message: "Please provide a valid email address",
      },
    },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt
  }
);

/**
 * Pre-save hook: Validates that the referenced event exists
 * This ensures referential integrity before saving a booking
 */
bookingSchema.pre("save", async function (next) {
  try {
    // Check if eventId is a valid ObjectId
    if (!Types.ObjectId.isValid(this.eventId)) {
      return next(new Error("Invalid event ID format"));
    }

    // Verify that the event exists in the database
    const event = await Event.findById(this.eventId);
    if (!event) {
      return next(new Error(`Event with ID ${this.eventId} does not exist`));
    }

    next();
  } catch (error) {
    // Handle any errors during the lookup
    next(
      error instanceof Error
        ? error
        : new Error("Failed to validate event reference")
    );
  }
});

// Create index on eventId for faster queries (also defined in schema, but explicit here for clarity)
bookingSchema.index({ eventId: 1 });

/**
 * Booking model
 */
const Booking: Model<IBooking> =
  mongoose.models.Booking || mongoose.model<IBooking>("Booking", bookingSchema);

export default Booking;

