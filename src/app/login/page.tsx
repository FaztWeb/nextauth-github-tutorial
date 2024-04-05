"use client";
import { signIn } from "next-auth/react";

function page() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div>
        <h1>Login con Github</h1>

        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          onClick={async () => {
            const result = await signIn("github", {
              callbackUrl: "/dashboard",
              redirect: false,
            });
            console.log(result);
          }}
        >
          Accede a tu cuenta
        </button>
      </div>
    </div>
  );
}

export default page;
