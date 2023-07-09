import Navigation from "@/components/Navigation/Navigation";
import TodoForm from "@/components/TodoForm/TodoForm";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TodoList from "@/components/TodosList/TodoList";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
   const [loading, setLoading] = useState(true);
   const [data, setData] = useState([]);
   const [error, setError] = useState("");

   useEffect(() => {
      axios
         .get("/api/todos")
         .then(({ data }) => {
            setLoading(false);
            setError("");
            setData(data.todos);
         })
         .catch(({ message }) => {
            setLoading(false);
            setData([]);
            setError(message);
            toast.error(message);
         });
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

   const addTodoHandler = async (todoTitle) => {
      try {
         const { data } = await axios.post("/api/todos", { title: todoTitle });
         setLoading(false);
         setError("");
         setData(data.todos);
         toast.success(data.message);
      } catch ({ message }) {
         setLoading(false);
         toast.error(message);
      }
   };

   return (
      <>
         <ToastContainer />
         <Navigation />
         <main
            className="h-screen bg-bgColor flex flex-col lg:flex-row justify-center items-center 
            lg:items-start gap-y-32 lg:gap-x-24 py-52 px-4 md:px-0">
            <TodoForm onAdd={addTodoHandler} />
            <TodoList
               loading={loading}
               data={data}
               error={error}
               onDelete={deleteTodoHandler}
            />
         </main>
      </>
   );
}
