import { getOneTodo } from "@/pages/api/todos/[todoId]";
import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";
import { toast } from "react-toastify";

const TodoEdit = ({ todo }) => {
   const [todoDetail, setTodoDetail] = useState(todo);
   const router = useRouter();

   const changeHandler = ({ target }) =>
      setTodoDetail({ ...todoDetail, [target.name]: target.value });

   const submitHandler = async (e) => {
      e.preventDefault();
      if (todo === todoDetail) router.push("/");
      else {
         try {
            const { data } = await axios.put(`/api/todos/${todo._id}`, {
               todoDetail,
            });
            router.push("/");
            toast.success(data.message);
         } catch ({ message }) {
            toast.error(message);
         }
      }
   };

   return (
      <main
         className="h-screen bg-bgColor flex flex-col justify-start items-center 
         py-44 px-4 md:px-0">
         <section
            className="section bg-bgColor"
            onSubmit={(e) => {
               e.preventDefault();
            }}>
            <h2 className="h2">Edit To do</h2>
            <form
               onSubmit={submitHandler}
               className="flex flex-col items-center gap-y-12 w-full">
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
                     onClick={() => router.push("/")}>
                     Back
                  </button>
                  <button
                     type="submit"
                     className="btn-form text-secondary bg-primary border border-primary">
                     Update
                  </button>
               </div>
            </form>
         </section>
      </main>
   );
};

export default TodoEdit;

export async function getServerSideProps(context) {
   const { query } = context;

   const todo = await getOneTodo(query.todoId);

   return {
      props: {
         todo: JSON.parse(JSON.stringify(todo)),
      },
   };
}
