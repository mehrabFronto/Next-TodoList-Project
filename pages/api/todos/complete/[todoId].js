import dbConnect from "@/server/utils/dbConnect";
import Todo from "@/server/models/todo";
import { getOneTodo } from "../[todoId]";

dbConnect();

export default async function handler(req, res) {
   const { query, method } = req;
   if (method === "PUT") {
      const todo = await getOneTodo(query.todoId);
      todo.isCompleted = !todo.isCompleted;
      await todo.save();
      const todos = await Todo.find({});
      return res.status(200).json({
         message: `todo ${todo.isCompleted ? "completed" : "uncompleted"}`,
         todos,
      });
   }
}
