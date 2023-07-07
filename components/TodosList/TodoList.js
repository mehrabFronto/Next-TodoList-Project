import Todo from "../Todo/Todo";

const TodoList = ({ loading, data, error, onDelete }) => {
   const renderTodoList = () => {
      if (error)
         return (
            <p className="font-primary text-secondary text-xl text-center">
               an error occured: {error}
            </p>
         );

      if (loading)
         return (
            <p className="font-primary text-secondary text-xl text-center">
               loading...
            </p>
         );

      return data.map((todo) => {
         return (
            <Todo
               key={todo.id}
               todo={todo}
               onDelete={onDelete}
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
