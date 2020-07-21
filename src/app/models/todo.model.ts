import { model, models, Schema } from "mongoose";

const todoSchema: Schema = new Schema({
  text: {
    required: true,
    type: String, // String with a capital letter
  },
  userEmail: {
    required: false,
    type: String,
  },
});

export const Todo = models.Todo || model("Todo", todoSchema);
