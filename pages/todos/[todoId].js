import Link from "next/link";
import { getOneTodo } from "../api/todos/[todoId]";
import { BiArrowBack } from "react-icons/bi";
import { BiCheck } from "react-icons/bi";
import { BiCircle } from "react-icons/bi";
import axios from "axios";
import { useState } from "react";

const TodoPage = ({ todo }) => {
   const [isCompleted, setIsCompleted] = useState(todo.isCompleted);
   const completeHandler = async () => {
      try {
         const { data } = await axios.put(`/api/todos/complete/${todo._id}`);
         const completedTodo = data.todos.find((t) => t._id === todo._id);
         setIsCompleted(completedTodo.isCompleted);
      } catch ({ message }) {}
   };

   return (
      <main
         className="h-screen bg-bgColor flex flex-col justify-start items-center gap-y-8
         py-44 px-4 md:px-0">
         <div className="w-full md:w-[500px] lg:w-[450px] xl:w-[550px] flex items-center justify-between">
            <Link
               href="/"
               className="w-10 h-10 flex items-center justify-center text-2xl text-secondary">
               <BiArrowBack />
            </Link>
            <h1 className="h1 border-b">Todo Detail</h1>
            <button
               onClick={completeHandler}
               className="w-10 h-10 flex items-center justify-center text-2xl text-secondary">
               {isCompleted ? (
                  <BiCheck className="text-primary" />
               ) : (
                  <BiCircle />
               )}
            </button>
         </div>
         <div className="section gap-y-12 text-secondary">
            <div className="flex flex-col items-center">
               <h2 className="h2">Todo Title:</h2>
               <h3>{todo.title}</h3>
            </div>
            <div className="flex flex-col items-center w-full">
               <h2 className="h2">Todo Description:</h2>
               <p className="w-full h-30 text-center break-words px-4">
                  {todo.description}
               </p>
            </div>
         </div>
      </main>
   );
};

export default TodoPage;

export async function getServerSideProps(context) {
   const { query } = context;

   const todo = await getOneTodo(query.todoId);

   return {
      props: {
         todo: JSON.parse(JSON.stringify(todo)),
      },
   };
}
