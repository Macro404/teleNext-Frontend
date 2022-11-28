"use client";

import React from "react";
import {useSession, signOut, getSession} from 'next-auth/react';
import Link from "next/link";

export default function Account(){
  const {data: session, status } = useSession({required: true});
  //fetch (process.env.NEXTAUTH_URL + '/api/users/')

  if (status === 'authenticated') {
    return (
      <div>
        <p> Welcome {session.user.email}</p>
      </div>
    );
  }
}
