const TodoForm = () => {
   return (
      <section className="section">
         <h2 className="h2">Add To do</h2>
         <form className="flex items-center justify-between w-full px-2 gap-4">
            <input
               type="text"
               className="bg-transparent border-b border-primary focus:border-secondary transition-all outline-none flex-1 py-4 text-primary"
               placeholder="Todo title..."
            />
            <buttom className="btn">+</buttom>
         </form>
      </section>
   );
};

export default TodoForm;
