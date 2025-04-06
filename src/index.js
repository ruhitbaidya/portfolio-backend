import mongoose from "mongoose";
import app from "./app.js";
import { config } from "./config/config.js";

const connectionRun = async () => {
  try {
    await mongoose.connect(config.db_url);
    console.log("✅ Database connection established");
    const server = app.listen(config.port, () => {
      console.log(`🚀 Server running on port ${config.port}`);
    });
  } catch (err) {
    console.error("❌ Failed to start application:", err);
    process.exit(1); // Exit with failure
  }
};

connectionRun();
