import dbConnect from "@/server/utils/dbConnect";

import Todo from "@/server/models/todo";

dbConnect();

export default async function handler(req, res) {
   const { method, body } = req;
   if (method === "POST") {
      const { title, description } = body.todo;
      await Todo.create({
         title,
         description,
         isCompleted: false,
      });
      const todos = await Todo.find({});
      return res.status(201).json({ message: "new todo added!", todos });
   } else if (method === "GET") {
      const todos = await Todo.find({});
      return res.status(200).json({
         todos,
      });
   }
}
