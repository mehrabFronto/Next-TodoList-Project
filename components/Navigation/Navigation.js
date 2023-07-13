import Link from "next/link";
import { useState } from "react";
import { HiMenuAlt3, HiOutlineX } from "react-icons/hi";

const Navigation = () => {
   const [isOpen, setIsOpen] = useState(false);
   return (
      <header className="w-full text-xl fixed top-0 z-50 bg-primary shadow-lg">
         <nav className="w-full h-full container mx-auto flex justify-between items-center px-2 relative">
            <Link href="/">
               <h1 className="h1 hover:tracking-wider transition-all">
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
                  className="lg:hidden flex flex-col items-center justify-center gap-y-5 absolute
                bg-primary w-full bottom-[-392px] md:bottom-[-390px] left-0 right-0 shadow-xl rounded-b md:rounded pl-2">
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
                        href="/todos">
                        Todos
                     </Link>
                  </li>
                  <li className="w-full">
                     <Link
                        className="w-full block py-4 text-bgColor font-medium"
                        href="/profile">
                        Profile
                     </Link>
                  </li>
                  <li className="w-full">
                     <Link
                        className="w-full block py-4 text-bgColor font-medium"
                        href="#">
                        Sign In
                     </Link>
                  </li>
                  <li className="w-full">
                     <Link
                        className="w-full block py-4 text-bgColor font-medium"
                        href="#">
                        Sign out
                     </Link>
                  </li>
               </ul>
            )}
            {/* desctop menu */}
            <ul className="hidden lg:flex items-center justify-center gap-x-8">
               <li>
                  <Link
                     className="block py-6 xl:px-2 2xl:px-4 text-bgColor font-medium hover:text-secondary transition-all"
                     href="/">
                     Home
                  </Link>
               </li>
               <li>
                  <Link
                     className="block py-6 xl:px-2 2xl:px-4 text-bgColor font-medium hover:text-secondary transition-all"
                     href="/todos">
                     Todos
                  </Link>
               </li>
               <li>
                  <Link
                     className="block py-6 xl:px-2 2xl:px-4 text-bgColor font-medium hover:text-secondary transition-all"
                     href="/profile">
                     Profile
                  </Link>
               </li>
               <li>
                  <Link
                     className="block py-6 xl:px-2 2xl:px-4 text-bgColor font-medium hover:text-secondary transition-all"
                     href="#">
                     Sign In
                  </Link>
               </li>
               <li>
                  <Link
                     className="block py-6 xl:px-2 2xl:px-4 text-bgColor font-medium hover:text-secondary transition-all"
                     href="#">
                     Sign out
                  </Link>
               </li>
            </ul>
         </nav>
      </header>
   );
};

export default Navigation;
