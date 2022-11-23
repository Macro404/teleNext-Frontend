"use client";

import { useSession, signIn, signOut } from "next-auth/react";

export default function LoginBtn({ children }) {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        {session.user.name}
        {/* <UserInformation data={session.user} /> */}
        <button onClick={() => signOut()}>Sign out</button>
        {children}
      </>
    );
  }
  return (
    <>
      <button onClick={() => signIn()}>Sign in</button>
    </>
  );
}