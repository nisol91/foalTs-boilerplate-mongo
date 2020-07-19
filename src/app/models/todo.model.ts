import { model, models, Schema } from "mongoose";

const todoSchema: Schema = new Schema({
  required: true,
  type: String, // String with a capital letter
});

export const Todo = models.Todo || model("Todo", todoSchema);
