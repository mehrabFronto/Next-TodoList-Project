import Navigation from "@/components/Navigation/Navigation";
import TodoForm from "@/components/TodoForm/TodoForm";
import axios from "axios";
import useSWR from "swr";
import { BiCheckCircle, BiTrash, BiEdit } from "react-icons/bi";

const fetcher = async (api) => {
   const { data } = await axios.get(api);
   return data;
};

export default function Home() {
   const { data, error } = useSWR("getTodos", () => fetcher("/api/todos"));

   const renderTodoList = () => {
      if (error)
         return (
            <p className="font-primary text-secondary text-xl text-center">
               There is an error
            </p>
         );

      if (!data)
         return (
            <p className="font-primary text-secondary text-xl text-center">
               loading...
            </p>
         );

      return data.todos.map((todo) => {
         return (
            <div
               key={todo.id}
               className={`flex items-center justify-between bg-primary rounded-lg w-full shadow-lg ${
                  todo.isCompleted ? "opacity-50" : null
               }`}>
               <h3
                  className={`pl-2 text-xl font-medium text-bg flex-1 truncate ${
                     todo.isCompleted ? "line-through" : null
                  }`}>
                  {todo.title}
               </h3>
               <div className="flex items-center gap-4">
                  <button className="btn w-10 h-10 py-6 md:w-12 md:h-12 text-xl">
                     <BiTrash />
                  </button>
                  <button className="btn w-10 h-10 py-6 md:w-12 md:h-12 text-xl">
                     <BiEdit />
                  </button>
                  <button className="btn w-10 h-10 py-6 md:w-12 md:h-12 text-xl">
                     <BiCheckCircle />
                  </button>
               </div>
            </div>
         );
      });
   };

   return (
      <>
         <Navigation />
         <main className="h-screen bg-bgColor flex flex-col items-center gap-y-32 py-32 px-4 md:px-0">
            <TodoForm />
            <section className="section">
               <h2 className="h2">To do List</h2>
               <div className="w-full flex flex-col items-cnter gap-y-4">
                  {renderTodoList()}
               </div>
            </section>
         </main>
      </>
   );
}
