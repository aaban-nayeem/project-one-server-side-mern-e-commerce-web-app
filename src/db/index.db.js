import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const connectDB = async () => {
  try {
    const connectionOnInstance = await mongoose.connect(
      `${process.env.MONGO_URI}`,
    );

    console.log(
      `\n MongoDB Connected: ${connectionOnInstance.connection.host}`,
    );
  } catch (error) {}
  console.log(`Catch the error here: ${error}`);
  process.exit(1);
};
export { connectDB };
