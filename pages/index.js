import TodoForm from "@/components/TodoForm/TodoForm";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TodoList from "@/components/TodosList/TodoList";
import { useEffect, useState } from "react";
import axios from "axios";
import Layout from "@/containers/Layout";
import dbConnect from "@/server/utils/dbConnect";
import Todo from "@/server/models/todo";

export default function Home({ todos }) {
   const [loading, setLoading] = useState(true);
   const [data, setData] = useState();
   const [error, setError] = useState("");

   useEffect(() => {
      if (todos.length) {
         setLoading(false);
         setError("");
         setData(todos);
      } else {
         setLoading(false);
         setData([]);
         setError("An error occured!");
      }
   }, []);

   const deleteTodoHandler = async (id) => {
      try {
         const { data } = await axios.delete(`/api/todos/${id}`);
         setLoading(false);
         setError("");
         setData(data.todos);
         toast.success(data.message);
      } catch ({ message }) {
         setLoading(false);
         toast.error(message);
      }
   };

   const addTodoHandler = async (todo) => {
      try {
         const { data } = await axios.post("/api/todos", { todo });
         setLoading(false);
         setError("");
         setData(data.todos);
         toast.success(data.message);
      } catch ({ message }) {
         setLoading(false);
         toast.error(message);
      }
   };

   const completeHandler = async (id) => {
      try {
         const { data } = await axios.put(`/api/todos/complete/${id}`);
         setData(data.todos);
         toast.success(data.message);
      } catch ({ message }) {
         toast.error(message);
      }
   };

   return (
      <>
         <ToastContainer />
         <Layout>
            <main
               className="h-full lg:h-screen bg-bgColor flex flex-col lg:flex-row justify-center md:items-center 
            lg:items-start gap-y-32 lg:gap-x-24 py-32 lg:py-52 px-4 md:px-0">
               <TodoForm onAdd={addTodoHandler} />
               <TodoList
                  loading={loading}
                  data={data}
                  error={error}
                  onDelete={deleteTodoHandler}
                  onComplete={completeHandler}
               />
            </main>
         </Layout>
      </>
   );
}

export async function getServerSideProps() {
   dbConnect();
   const todos = await Todo.find({});
   return {
      props: {
         todos: JSON.parse(JSON.stringify(todos)),
      },
   };
}
