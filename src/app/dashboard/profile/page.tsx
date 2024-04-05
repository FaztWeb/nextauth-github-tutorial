"use client";

import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";
import Image from "next/image";

function ProfilePage() {
  const { data: session, status, update } = useSession();

  if (status === "loading") return <div>Loading...</div>;

  return (
    <div>
      <div className="bg-slate-300 p-10 text-center">
        <h1>Bievenido {session?.user?.name}</h1>
        <p>{session?.user?.email}</p>
        <Image
          src={session?.user?.image || ""}
          alt="Image profile"
          width={200}
          height={200}
        />
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"
          onClick={() => {
            signOut();
          }}
        >
          Cerrar sesion
        </button>
      </div>
    </div>
  );
}

export default ProfilePage;
