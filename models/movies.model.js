const mongoose = require("mongoose");

const movieSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please enter movie title"],
    },
    genre: {
      type: String,
      required: [true, "Please enter movie genre"],
    },
    releaseDate: {
      type: Date,
      required: [true, "Please enter release date"],
    },
    duration: {
      type: Number,
      required: [true, "Please enter movie duration (in minutes)"],
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;
