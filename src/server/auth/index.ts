import NextAuth from "next-auth";
import { cache } from "react";
import { PrismaAdapter } from "@auth/prisma-adapter";
import bcrypt from "bcryptjs";
import Credentials from "next-auth/providers/credentials";

import { authConfig } from "./config";
import { db } from "~/server/db";
import { signInSchema } from "~/schemas";

const { auth: uncachedAuth, handlers, signIn, signOut } = NextAuth({
  ...authConfig,
  adapter: PrismaAdapter(db),
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        try {
          const { email, password } = await signInSchema.parseAsync(credentials);
          const user = await db.user.findUnique({
            where: {
              email: email
            }
          })

          if (!user) return null;

          const passwordMatch = await bcrypt.compare(password, user?.password ?? "");

          if (!passwordMatch) {
            return null;
          }

          return user;
        } catch (error) {
          return null;
        }
      }
    })
  ],
  secret: process.env.NEXTAUTH_SECRET,
});

const auth = cache(uncachedAuth);

export { auth, handlers, signIn, signOut };
