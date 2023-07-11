import { getOneTodo } from "../api/todos/[todoId]";

const TodoPage = ({ todo }) => {
   return (
      <main
         className="h-screen bg-bgColor flex flex-col justify-center items-center gap-y-8
         px-4 md:px-0">
         <h1 className="h1 border-b">Todo Detail</h1>
         <span></span>
         <div className="section gap-y-12 text-secondary">
            <div className="flex flex-col items-center">
               <h2 className="h2">Todo Title:</h2>
               <h3>{todo.title}</h3>
            </div>
            <div className="flex flex-col items-center w-full">
               <h2 className="h2">Todo Description:</h2>
               <p className="w-full h-30 text-center break-words px-4">
                  {todo.description}
               </p>
            </div>
         </div>
      </main>
   );
};

export default TodoPage;

export async function getServerSideProps(context) {
   const { query } = context;

   const todo = await getOneTodo(query.todoId);

   return {
      props: {
         todo: JSON.parse(JSON.stringify(todo)),
      },
   };
}
