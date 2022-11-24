"use client";
import '../../styles/layout.css'
import { useSession, signIn, signOut } from "next-auth/react";

export default function LoginBtn({ children }) {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        {session.user.name}
        {/* <UserInformation data={session.user} /> */}
        <button onClick={() => signOut()} className="sign-button">Sign out</button>
        {children}
      </>
    );
  }
  return (
    <>
      <button onClick={() => signIn()} className="sign-button">Sign in</button>
    </>
  );
}