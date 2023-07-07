import Todo from "../Todo/Todo";

const TodoList = ({ data, error }) => {
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
            <Todo
               key={todo.id}
               todo={todo}
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
