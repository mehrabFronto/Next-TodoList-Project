import Navigation from "@/components/Navigation/Navigation";
import TodoForm from "@/components/TodoForm/TodoForm";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TodoList from "@/components/TodosList/TodoList";

export default function Home() {
   return (
      <>
         <ToastContainer />
         <Navigation />
         <main className="h-screen bg-bgColor flex flex-col items-center gap-y-32 py-32 px-4 md:px-0">
            <TodoForm />
            <TodoList />
         </main>
      </>
   );
}
