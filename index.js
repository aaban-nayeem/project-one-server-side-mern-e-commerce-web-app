import { connectDB } from "./src/db/index.db.js";
import { app } from "./app.js";
import dotenv from "dotenv";
dotenv.config();

connectDB()
  .then(
    app.listen(process.env.PORT, () => {
      console.log(`Server running on port ${process.env.PORT}`);
    }),
  )
  .catch((error) => {
    console.log(`MongoDB connection failed: ${error}`);
  });
