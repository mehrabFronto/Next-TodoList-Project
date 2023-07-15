import Layout from "@/containers/Layout";
import { getSession, useSession } from "next-auth/react";
import React from "react";

const ProtectedSSR = () => {
   const { data: session, status } = useSession();

   console.log(session);

   return (
      <Layout>
         <main
            className="h-screen bg-bgColor flex flex-col justify-start items-center
            py-44 px-4 md:px-0">
            <h1 className="h1">ProtectedSSR</h1>
         </main>
      </Layout>
   );
};

export default ProtectedSSR;

export async function getServerSideProps(ctx) {
   const session = await getSession();
   return {
      props: {
         session,
      },
   };
}
