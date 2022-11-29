"use client";

import React from "react";
import {useSession, signOut, getSession} from 'next-auth/react';
import Link from "next/link";
import { env } from "../../next.config";

export default function Account(){
  const {data: session, status } = useSession({required: true});
  //fetch (process.env.NEXTAUTH_URL + '/api/users/')
  const deleteUser = () => {
    fetch(`https://doubleshot-app.azurewebsites.net/api/users/${session.user.email}`,
    {
      method: 'DELETE',
      headers: {
        'web_token': process.env.JWT_SECRET
      }
    })
    signOut({
      callbackUrl: `/`
    })
  }

  if (status === 'authenticated') {
    return (
      <div>
        <p> Welcome {session.user.email}</p>
        <button onClick={deleteUser}>Delete user</button>
      </div>
    );
  }
}
