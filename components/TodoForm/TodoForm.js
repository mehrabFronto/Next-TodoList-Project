import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";

const TodoForm = ({ onAdd }) => {
   const [todoTitle, setTodoTitle] = useState("");

   return (
      <section
         className="section"
         onSubmit={(e) => {
            e.preventDefault();
            onAdd(todoTitle);
            setTodoTitle("");
         }}>
         <h2 className="h2">Add To do</h2>
         <form className="flex items-center justify-between w-full gap-4">
            <input
               value={todoTitle}
               onChange={({ target }) => setTodoTitle(target.value)}
               type="text"
               className="bg-transparent border-b border-primary focus:border-secondary transition-all 
               outline-none flex-1 p-4 text-primary"
               placeholder="Todo title..."
            />
            <button
               type="submit"
               className="btn shadow-md">
               +
            </button>
         </form>
      </section>
   );
};

export default TodoForm;
