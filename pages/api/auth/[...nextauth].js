import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import { useSession } from "next-auth/react";
import { headers } from "../../../next.config";

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code"
        }
      },
    }),
  ],
  secret: process.env.JWT_SECRET,
});

