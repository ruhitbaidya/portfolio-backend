import { model, Schema } from "mongoose";

const blogSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Blog title is required"],
      trim: true,
    },
    content: {
      type: String,
      required: [true, "Blog content is required"],
      trim: true,
    },
    image: {
      type: String,
      required: [true, "Featured image is required"],
    },
    category: {
      type: String,
      required: [true, "Category is required"],
    },
    tags: [
      {
        type: String,
        retuired: true,
      },
    ],
  },
  { timestamps: true }
);

export const blogModel = model("blog", blogSchema);
