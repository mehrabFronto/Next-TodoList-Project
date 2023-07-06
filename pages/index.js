import Navigation from "@/components/Navigation/Navigation";
import TodoForm from "@/components/TodoForm/TodoForm";

export default function Home() {
   return (
      <>
         <Navigation />
         <main className="h-screen bg-bgColor flex flex-col items-center py-32">
            <TodoForm />
         </main>
      </>
   );
}
