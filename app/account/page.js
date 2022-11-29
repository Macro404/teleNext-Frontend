"use client";

import React from "react";
import {useSession, signOut, getSession} from 'next-auth/react';
import Link from "next/link";

export default async function Account(){
  const {data: session, status } = useSession({required: true});
  const res = await fetch (process.env.NEXTAUTH_URL + '/api/users/' + session.email);
  const json = await res.json();

  if (status === 'authenticated') {
    return (
      <div>
        <p> Welcome {session.user.email}</p>
      </div>
    );
  }
}
