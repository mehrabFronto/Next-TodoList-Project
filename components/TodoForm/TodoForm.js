const TodoForm = () => {
   return (
      <section className="section">
         <h2 className="h2">Add To do</h2>
         <form className="flex items-center justify-between w-full gap-4">
            <input
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
