import { DB_URI, NODE_ENV } from "../config/env.js";
import mongoose from "mongoose";

if (!DB_URI) {
  throw new Error("DB_URI is not defined in the environment variables");
}

const connectDB = async () => {
  try {
    await mongoose.connect(DB_URI);
    console.log(`MongoDB connected in ${NODE_ENV} mode`);
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1);
  }
};

export default connectDB;
