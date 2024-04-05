"use client"
import { signOut } from "next-auth/react";

function ButtonSignout() {
  return (
    <button
      onClick={() => {
        signOut();
      }}
      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"
    >
      Cerrar sesion
    </button>
  );
}
export default ButtonSignout;
