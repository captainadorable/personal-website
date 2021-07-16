import mongoose from "mongoose";

var Schema = mongoose.Schema;

var postSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    required: true,
  },
  details: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  }
});

export default mongoose.models["Post"]
  ? mongoose.models["Post"]
  : mongoose.model("Post", postSchema);
