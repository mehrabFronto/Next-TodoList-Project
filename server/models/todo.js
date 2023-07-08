import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
   title: {
      type: String,
      unique: true,
      require: true,
   },

   isCompleted: {
      type: Boolean,
      require: true,
   },
});

export default mongoose.models.Todo || mongoose.model("Todo", todoSchema);
