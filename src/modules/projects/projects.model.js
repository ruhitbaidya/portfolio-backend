import mongoose, { model, Schema } from "mongoose";

const projectSchema = new Schema(
  {
    image: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    url: {
      type: [String],
      required: true,
    },
    techanology: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "skills",
      },
    ],
    fetcher: {
      type: [String],
      required: true,
    },
    tags: {
      type: [String],
      required: true,
    },
    advanceFetcher: {
      type: [String],
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const projectModel = model("projects", projectSchema);
