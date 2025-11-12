import mongoose, { Schema, Model, Document } from "mongoose";

/**
 * Interface for Event document
 */
export interface IEvent extends Document {
  title: string;
  slug: string;
  description: string;
  overview: string;
  image: string;
  venue: string;
  location: string;
  date: string; // ISO format string
  time: string; // HH:MM format string
  mode: "online" | "offline" | "hybrid";
  audience: string;
  agenda: string[];
  organizer: string;
  tags: string[];
  createdAt: Date;
  updatedAt: Date;
}

// This is Event schema with each key's props for example type:string 

const eventSchema = new Schema<IEvent>(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
      trim: true,
      minlength: [1, "Title cannot be empty"],
      maxlength: [100,'Title cannon exceed 100 chracters']
    },
    slug: {
      type: String,
      unique: true,
      lowercase: true,
      trim: true,
    },
    description: {
      type: String,
      required: [true, "Description is required"],
      trim: true,
      minlength: [1, "Description cannot be empty"],
    },
    overview: {
      type: String,
      required: [true, "Overview is required"],
      trim: true,
      minlength: [1, "Overview cannot be empty"],
    },
    image: {
      type: String,
      required: [true, "Image URL is required"],
      trim: true,
    },
    venue: {
      type: String,
      required: [true, "Venue is required"],
      trim: true,
      minlength: [1, "Venue cannot be empty"],
    },
    location: {
      type: String,
      required: [true, "Location is required"],
      trim: true,
      minlength: [1, "Location cannot be empty"],
    },
    date: {
      type: String,
      required: [true, "Date is required"],
      trim: true,
    },
    time: {
      type: String,
      required: [true, "Time is required"],
      trim: true,
    },
    mode: {
      type: String,
      required: [true, "Mode is required"],
      enum: {
        values: ["online", "offline", "hybrid"],
        message: "Mode must be one of: online, offline, hybrid",
      },
    },
    audience: {
      type: String,
      required: [true, "Audience is required"],
      trim: true,
      minlength: [1, "Audience cannot be empty"],
    },
    agenda: {
      type: [String],
      required: [true, "Agenda is required"],
      validate: {
        validator: (v: string[]) => Array.isArray(v) && v.length > 0,
        message: "Agenda must be a non-empty array",
      },
    },
    organizer: {
      type: String,
      required: [true, "Organizer is required"],
      trim: true,
      minlength: [1, "Organizer cannot be empty"],
    },
    tags: {
      type: [String],
      required: [true, "Tags are required"],
      validate: {
        validator: (v: string[]) => Array.isArray(v) && v.length > 0,
        message: "Tags must be a non-empty array",
      },
    },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt
  }
);

/**
 * Generates a URL-friendly slug from a title
 */
function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "") // Remove special characters
    .replace(/[\s_-]+/g, "-") // Replace spaces and underscores with hyphens
    .replace(/^-+|-+$/g, ""); // Remove leading/trailing hyphens
}

/**
 * Normalizes date string to ISO format (YYYY-MM-DD)
 * Accepts various date formats and converts to ISO
 */
function normalizeDate(dateString: string): string {
  try {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) {
      throw new Error("Invalid date format");
    }
    return date.toISOString().split("T")[0]; // Returns YYYY-MM-DD
  } catch {
    // If parsing fails, return the original string trimmed
    // This allows for custom date formats if needed
    return dateString.trim();
  }
}

/**
 * Normalizes time string to HH:MM format
 * Handles various time formats and converts to 24-hour format
 */
function normalizeTime(timeString: string): string {
  const trimmed = timeString.trim();
  
  // Match HH:MM or H:MM format
  const time24Regex = /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/;
  if (time24Regex.test(trimmed)) {
    // Already in HH:MM format, ensure two-digit hour
    const [hours, minutes] = trimmed.split(":");
    return `${hours.padStart(2, "0")}:${minutes}`;
  }

  // Match 12-hour format with AM/PM
  const time12Regex = /^([0-1]?[0-9]):([0-5][0-9])\s*(AM|PM)$/i;
  const match12 = trimmed.match(time12Regex);
  if (match12) {
    let hours = parseInt(match12[1], 10);
    const minutes = match12[2];
    const period = match12[3].toUpperCase();

    if (period === "PM" && hours !== 12) {
      hours += 12;
    } else if (period === "AM" && hours === 12) {
      hours = 0;
    }

    return `${hours.toString().padStart(2, "0")}:${minutes}`;
  }

  // If format doesn't match, return trimmed original
  return trimmed;
}

/**
 * Pre-save hook: Generates slug, normalizes date/time, and validates required fields
 */
eventSchema.pre("save", function (next) {
  // Generate slug only if title is modified or slug doesn't exist
  if (this.isModified("title") || !this.slug) {
    this.slug = generateSlug(this.title);
  }

  // Normalize date to ISO format if date is modified
  if (this.isModified("date")) {
    this.date = normalizeDate(this.date);
  }

  // Normalize time to HH:MM format if time is modified
  if (this.isModified("time")) {
    this.time = normalizeTime(this.time);
  }

  // Validate required string fields are non-empty
  const requiredStringFields: (keyof IEvent)[] = [
    "title",
    "description",
    "overview",
    "image",
    "venue",
    "location",
    "audience",
    "organizer",
  ];

  for (const field of requiredStringFields) {
    const value = this[field] as string;
    if (!value || typeof value !== "string" || value.trim().length === 0) {
      return next(new Error(`${field} cannot be empty`));
    }
  }

  next();
});

// Create unique index on slug for faster lookups
eventSchema.index({ slug: 1 }, { unique: true });

/**
 * Event model
 */
const Event: Model<IEvent> =
  mongoose.models.Event || mongoose.model<IEvent>("Event", eventSchema);

export default Event;

