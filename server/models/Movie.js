import mongoose from "mongoose";

const MovieSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    picturePath: String,
    videoPath: String,
    genre: {
      type: String,
      required: true,
    },
    isTrending: Boolean,
    date: Date,
  },
  { timestamps: true }
);

const Movie = mongoose.model("Movie", MovieSchema);

export default Movie;
