import axios from "axios";
import Todo from "../Todo/Todo";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const TodoList = () => {
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

   const renderTodoList = () => {
      if (error)
         return (
            <p className="font-primary text-secondary text-xl text-center">
               an error occured: {error}
            </p>
         );

      if (loading)
         return (
            <p className="font-primary text-secondary text-xl text-center">
               loading...
            </p>
         );

      return data.map((todo) => {
         return (
            <Todo
               key={todo.id}
               todo={todo}
               onDelete={deleteTodoHandler}
            />
         );
      });
   };

   return (
      <section className="section">
         <h2 className="h2">To do List</h2>
         <div className="w-full flex flex-col items-cnter gap-y-4">
            {renderTodoList()}
         </div>
      </section>
   );
};

export default TodoList;
