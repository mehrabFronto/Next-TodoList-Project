/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
      "./pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./components/**/*.{js,ts,jsx,tsx,mdx}",
      "./app/**/*.{js,ts,jsx,tsx,mdx}",
   ],
   theme: {
      fontFamily: {
         primary: "Work+Sans",
      },
      extend: {
         colors: {
            primary: "#3b82f6",
            secondary: "#e5e7eb",
            bgColor: "#1e293b",
         },
      },
   },
   plugins: [],
};
