import mongoose from "mongoose";
import app from "./app.js";
import { config } from "./config/config.js";

const connectionRun = async () => {
  try {
    await mongoose.connect(config.db_url);
    console.log("db conecctection");
    app.listen(config.port, () => {
      console.log(`start server port on ${config.port}`);
    });
  } catch (err) {
    console.error(err);
  }
};
connectionRun();
