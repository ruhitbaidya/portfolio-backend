import mongoose from "mongoose";
import app from "./src/app.js";
import { config } from "./src/config/config.js";

const connectionRun = async () => {
  try {
    // Connection options for better stability
    const mongooseOptions = {
      autoIndex: true, // Don't build indexes in production
      maxPoolSize: 10, // Maintain up to 10 socket connections
      serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
      socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
    };

    await mongoose.connect(config.db_url, mongooseOptions);

    console.log("✅ Database connection established");

    mongoose.connection.on("error", (err) => {
      console.error("❌ MongoDB connection error:", err);
    });

    mongoose.connection.on("disconnected", () => {
      console.warn("⚠️ MongoDB disconnected");
    });

    const server = app.listen(config.port, () => {
      console.log(`🚀 Server running on port ${config.port}`);
    });

    // Graceful shutdown
    process.on("SIGINT", async () => {
      await mongoose.connection.close();
      server.close(() => {
        console.log("⛔ Server closed");
        process.exit(0);
      });
    });
  } catch (err) {
    console.error("❌ Failed to start application:", err);
    process.exit(1); // Exit with failure
  }
};

connectionRun();
