import dbConnect from "@/server/utils/dbConnect";
import Todo from "@/server/models/todo";

dbConnect();

export default async function handler(req, res) {
   const { method, query, body } = req;

   if (method === "DELETE") {
      await Todo.findByIdAndDelete(query.todoId);
      const todos = await Todo.find({});
      return res.status(200).json({ message: "todo deleted", todos });
   } else if (method === "GET") {
      const todo = await getOneTodo(query.todoId);
      return res.status(200).json({ todo });
   } else if (method === "PUT") {
      const todo = await getOneTodo(query.todoId);
      todo.title = body.todoDetail.title;
      todo.description = body.todoDetail.description;
      todo.isCompleted = body.todoDetail.isCompleted;
      await todo.save();
      const todos = await Todo.find({});
      return res.status(200).json({ message: "todo edited", todos });
   }
}

export async function getOneTodo(todoId) {
   return await Todo.findById(todoId);
}
