"use client"

import { useRouter } from "next/navigation"
import { signIn, signOut, useSession } from "next-auth/react";

export default function Appbar() {

    const router = useRouter();
    const session = useSession();

  return (
    <div className="flex items-center justify-center m-auto h-auto gap-11">
      <button
        onClick={() => {
          signIn();
        }}
      >
        Sign in
      </button>
      <button
        onClick={() => {
            signOut();
        }}
      >
        Sign Out
      </button>

      <br />    
      {JSON.stringify(session)}
    </div>
  );
}
