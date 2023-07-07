import { BiCheckCircle, BiTrash, BiEdit } from "react-icons/bi";

const Todo = ({ todo, onDelete }) => {
   return (
      <div
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
            <button
               className="btn w-10 h-10 py-6 md:w-12 md:h-12 text-xl"
               onClick={() => onDelete(todo.id)}>
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
};

export default Todo;
