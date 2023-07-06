import { useState } from "react";
import Todo from "../Todo/Todo";

const TodoList = () => {
   const [todoList, setTodoList] = useState([
      { id: 1, title: "todo 1", isCompleted: false },
      { id: 2, title: "todo 2", isCompleted: false },
      { id: 3, title: "todo 3", isCompleted: true },
   ]);

   const renderTodoList = () => {
      if (todoList.length === 0)
         return (
            <p className="font-primary text-secondary text-xl text-center">
               There is no to do! <br />
               add some...
            </p>
         );

      return todoList.map((todo) => {
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
