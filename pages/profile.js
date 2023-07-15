import Layout from "@/containers/Layout";
import { signIn, useSession } from "next-auth/react";

const Profile = () => {
   const { data: session, status } = useSession({
      required: true,
      onUnauthenticated() {
         signIn();
      },
   });

   const renderProfileData = () => {
      if (status === "loading")
         return (
            <p className="font-primary text-secondary text-xl w-full flex items-center justify-center">
               loading...
            </p>
         );

      return <h1 className="h1">Welcome dear {session.user.name}</h1>;
   };

   return (
      <Layout>
         <main
            className="h-screen bg-bgColor flex flex-col justify-start items-center
            py-44 px-4 md:px-0">
            {renderProfileData()}
         </main>
      </Layout>
   );
};

export default Profile;
