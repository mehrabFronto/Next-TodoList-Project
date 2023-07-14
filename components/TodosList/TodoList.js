import Todo from "../Todo/Todo";

const TodoList = ({ loading, data, error, onDelete, onComplete }) => {
   const renderTodoList = () => {
      if (error)
         return (
            <p className="font-primary text-secondary text-xl text-center">
               {error}
            </p>
         );

      if (loading)
         return (
            <p className="font-primary text-secondary text-xl w-full flex items-center justify-center">
               loading...
            </p>
         );

      if (data.length === 0)
         return (
            <p className="font-primary text-secondary text-xl text-center">
               There is no todo
               <br />
               add some...
            </p>
         );

      return data.map((todo) => (
         <Todo
            key={todo._id}
            todo={todo}
            onDelete={onDelete}
            onComplete={onComplete}
         />
      ));
   };

   return (
      <section className="section">
         <h2 className="h2">To do List</h2>
         <div className="w-full flex flex-col items-cnter gap-y-4 lg:h-[432px] 2xl:h-[496px] overflow-auto pr-2 todo-list">
            {renderTodoList()}
         </div>
      </section>
   );
};

export default TodoList;
