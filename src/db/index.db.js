import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const connectDB = async () => {
  try {
    const connectionOnInstance = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected: ${connectionOnInstance.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1); // Exit process with failure
  }
};

export { connectDB };
