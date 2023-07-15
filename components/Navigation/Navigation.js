import Link from "next/link";
import { useState } from "react";
import { HiMenuAlt3, HiOutlineX } from "react-icons/hi";
import { signIn, signOut, useSession } from "next-auth/react";

const Navigation = () => {
   const [isOpen, setIsOpen] = useState(false);
   const { data: session, status } = useSession();

   return (
      <header className="w-full text-xl fixed top-0 z-50 bg-primary shadow-lg">
         <nav className="w-full h-full container mx-auto flex justify-between items-center px-2 relative">
            <Link href="/">
               <h1 className="h1 lg:hover:tracking-wider transition-all">
                  What&apos;s your plan today?
               </h1>
            </Link>
            <button
               onClick={() => setIsOpen((prevState) => !prevState)}
               className="lg:hidden w-14 h-14 flex items-center justify-center text-3xl text-bgColor">
               {isOpen ? <HiOutlineX /> : <HiMenuAlt3 />}
            </button>
            {/* mobile menu */}
            {isOpen && (
               <ul
                  className={`lg:hidden flex flex-col items-center justify-center gap-y-5 absolute
                bg-primary w-full bottom-[-312px] md:bottom-[-320px] left-0 right-0 shadow-xl 
                rounded-b md:rounded pl-2 ${
                   !session && status === "loading"
                      ? "opacity-0"
                      : "opacity-1000"
                } transition-all`}>
                  <li className="w-full pt-5 md:pt-0">
                     <Link
                        className="w-full block py-3 text-bgColor font-medium"
                        href="/">
                        Home
                     </Link>
                  </li>
                  <li className="w-full">
                     <Link
                        className="w-full block py-4 text-bgColor font-medium"
                        href="/protected-ssr">
                        Protected-SSR
                     </Link>
                  </li>
                  <li className="w-full">
                     <Link
                        className="w-full block py-4 text-bgColor font-medium"
                        href="/profile">
                        Profile
                     </Link>
                  </li>
                  {!session && status !== "loading" && (
                     <li className="w-full">
                        <button
                           onClick={() => signIn("github")}
                           className="w-full flex items-center justify-start py-4 text-bgColor font-medium">
                           Sign In
                        </button>
                     </li>
                  )}
                  {session && (
                     <li className="w-full">
                        <button
                           onClick={() => signOut()}
                           className="w-full flex items-center justify-start py-4 text-bgColor font-medium">
                           Sign out
                        </button>
                     </li>
                  )}
               </ul>
            )}
            {/* desctop menu */}
            <ul
               className={`hidden lg:flex items-center justify-center gap-x-4 ${
                  !session && status === "loading"
                     ? "opacity-0"
                     : "opacity-1000"
               } transition-all`}>
               <li>
                  <Link
                     className="block py-6 lg:px-4 xl:px-6 2xl:px-8 text-bgColor font-medium hover:text-secondary transition-all"
                     href="/">
                     Home
                  </Link>
               </li>
               <li>
                  <Link
                     className="block py-6 lg:px-4 xl:px-6 2xl:px-8 text-bgColor font-medium hover:text-secondary transition-all"
                     href="/protected-ssr">
                     Protected-SSR
                  </Link>
               </li>
               <li>
                  <Link
                     className="block py-6 lg:px-4 xl:px-6 2xl:px-8 text-bgColor font-medium hover:text-secondary transition-all"
                     href="/profile">
                     Profile
                  </Link>
               </li>
               {!session && status !== "loading" && (
                  <li>
                     <button
                        onClick={() => signIn("github")}
                        className="block py-6 lg:px-4 xl:px-6 2xl:px-8 text-bgColor font-medium hover:text-secondary transition-all">
                        Sign In
                     </button>
                  </li>
               )}
               {session && (
                  <li>
                     <button
                        onClick={() => signOut()}
                        className="block py-6 lg:px-4 xl:px-6 2xl:px-8 text-bgColor font-medium hover:text-secondary transition-all">
                        Sign out
                     </button>
                  </li>
               )}
            </ul>
         </nav>
      </header>
   );
};

export default Navigation;
