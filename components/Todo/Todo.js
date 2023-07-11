import Link from "next/link";
import { BiCheckCircle, BiTrash, BiEdit } from "react-icons/bi";

const Todo = ({ todo, onDelete }) => {
   return (
      <div
         className={`flex items-center justify-between bg-primary rounded-lg w-full shadow-lg ${
            todo.isCompleted ? "opacity-50" : null
         }`}>
         <Link
            href={`/todos/${todo._id}`}
            className="flex flex-col justify-center flex-1 pl-2 h-12 text-bg hover:text-secondary transition-all">
            <h3
               className={`text-xl font-medium  truncate ${
                  todo.isCompleted ? "line-through" : null
               }`}>
               {todo.title}
            </h3>
         </Link>
         <div className="flex items-center gap-4">
            <button
               className="btn w-10 h-10 py-6 md:w-12 md:h-12 text-xl"
               onClick={() => onDelete(todo._id)}>
               <BiTrash />
            </button>
            <Link
               href={`/todos/edit/${todo._id}`}
               className="btn w-10 h-10 py-6 md:w-12 md:h-12 text-xl">
               <BiEdit />
            </Link>
            <button className="btn w-10 h-10 py-6 md:w-12 md:h-12 text-xl">
               <BiCheckCircle />
            </button>
         </div>
      </div>
   );
};

export default Todo;
