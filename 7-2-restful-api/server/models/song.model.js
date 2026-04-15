import mongoose from "mongoose";

// db schema


const songSchema = new mongoose.Schema({
  title: String,
  artist: String,
  year: Number
});

export const Song = mongoose.model("Song", songSchema);