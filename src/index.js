import { connectDB } from "./db/index.db.js";
import { app } from "./app.js";
import dotenv from "dotenv";
dotenv.config();

const startServer = async () => {
  try {
    await connectDB();
    app.listen(process.env.PORT, () => {
      console.log(`Server running on port ${process.env.PORT}`);
    });
  } catch (error) {
    console.error(`MongoDB connection failed: ${error.message}`);
  }
};

startServer();
