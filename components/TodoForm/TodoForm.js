import { useState } from "react";

const TodoForm = ({ onAdd }) => {
   const [todoDetail, setTodoDetail] = useState({ title: "", description: "" });

   const changeHandler = ({ target }) =>
      setTodoDetail({ ...todoDetail, [target.name]: target.value });

   return (
      <section
         className="section"
         onSubmit={(e) => {
            e.preventDefault();
            if (!todoDetail.title) return alert("enter todo title!");
            onAdd(todoDetail);
            setTodoDetail({ title: "", description: "" });
         }}>
         <h2 className="h2">Add To do</h2>
         <form className="flex flex-col items-center gap-y-12 w-full">
            <input
               value={todoDetail.title}
               name="title"
               onChange={changeHandler}
               type="text"
               className="bg-transparent border-b border-primary focus:border-secondary w-full transition-all 
               outline-none py-4 text-primary"
               placeholder="Todo title..."
            />
            <textarea
               value={todoDetail.description}
               name="description"
               onChange={changeHandler}
               className="bg-transparent border-b border-primary focus:border-secondary w-full transition-all 
               outline-none py-4 text-primary resize-none h-32"
               placeholder="Todo description..."></textarea>
            <div className="w-full flex items-center justify-between gap-x-4 lg:gap-x-8">
               <button
                  type="button"
                  className="btn-form text-secondary bg-transparent border border-secondary"
                  onClick={() => setTodoDetail({ title: "", description: "" })}>
                  Cancel
               </button>
               <button
                  type="submit"
                  className="btn-form text-secondary bg-primary border border-primary">
                  Add
               </button>
            </div>
            {/* <button
               type="submit"
               className="btn shadow-md">
               +
            </button> */}
         </form>
      </section>
   );
};

export default TodoForm;
