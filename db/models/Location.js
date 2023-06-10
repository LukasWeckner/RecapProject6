import mongoose from "mongoose";

const { Schema } = mongoose;

const locationSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: false,
  },
  mapURL: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
});

const Place =
  mongoose.models.Location || mongoose.model("Location", locationSchema);

export default Place;
