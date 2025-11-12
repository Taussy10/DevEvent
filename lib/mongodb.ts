import mongoose, { Mongoose } from "mongoose";

/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections growing exponentially
 * during API Route usage.
 */
declare global {
  // eslint-disable-next-line no-var
  var mongoose: {
    conn: Mongoose | null;
    promise: Promise<Mongoose> | null;
  };
}

// Initialize the cached connection object if it doesn't exist
if (!global.mongoose) {
  global.mongoose = { conn: null, promise: null };
}

/**
 * Retrieves the MongoDB connection string from environment variables.
 * Throws an error if the connection string is not provided.
 *
 * @returns The MongoDB connection string
 * @throws Error if MONGODB_URI is not defined
 */
function getMongoUri(): string {
  const uri = process.env.MONGODB_URI;

  if (!uri) {
    throw new Error(
      "Please define the MONGODB_URI environment variable inside .env.local"
    );
  }

  return uri;
}

/**
 * Establishes a connection to MongoDB using Mongoose.
 * Implements connection caching to prevent multiple connections during development.
 *
 * This function:
 * - Checks if a cached connection exists and is ready
 * - Creates a new connection if one doesn't exist
 * - Caches the connection promise to prevent duplicate connection attempts
 * - Handles connection errors appropriately
 *
 * @returns A promise that resolves to the Mongoose connection instance
 * @throws Error if connection fails or MONGODB_URI is not defined
 */
async function connectDB(): Promise<Mongoose> {
  // If we have a cached connection and it's ready, return it
  if (global.mongoose.conn) {
    return global.mongoose.conn;
  }

  // If we don't have a connection promise, create one
  if (!global.mongoose.promise) {
    const uri = getMongoUri();

    // Set connection options for better performance and reliability
    const opts: mongoose.ConnectOptions = {
      bufferCommands: false, // Disable mongoose buffering
      maxPoolSize: 10, // Maintain up to 10 socket connections
      serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
      socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
      family: 4, // Use IPv4, skip trying IPv6
    };

    // Create the connection promise
    global.mongoose.promise = mongoose.connect(uri, opts).then((mongoose) => {
      return mongoose;
    });
  }

  try {
    // Wait for the connection to be established
    global.mongoose.conn = await global.mongoose.promise;
  } catch (error) {
    // Reset the promise on error so we can retry
    global.mongoose.promise = null;
    throw error;
  }

  return global.mongoose.conn;
}

/**
 * Closes the MongoDB connection.
 * Useful for cleanup in tests or when shutting down the application.
 *
 * @returns A promise that resolves when the connection is closed
 */
async function disconnectDB(): Promise<void> {
  if (global.mongoose.conn) {
    await global.mongoose.conn.disconnect();
    global.mongoose.conn = null;
    global.mongoose.promise = null;
  }
}

export { connectDB, disconnectDB };
export default connectDB;

