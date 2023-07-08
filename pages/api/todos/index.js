import dbConnect from "@/server/utils/dbConnect";

import Todo from "@/server/models/todo";

dbConnect();

export default async function handler(req, res) {
   if (req.method === "POST") {
      const newTodo = {
         id: new Date().getTime(),
         title: req.body.title,
         isCompleted: false,
      };
      todos.push(newTodo);
      return res.status(201).json({ message: "new todo added!", todos });
   } else if (req.method === "GET") {
      const todos = await Todo.find({});
      return res.status(200).json({
         todos,
      });
   }
}
