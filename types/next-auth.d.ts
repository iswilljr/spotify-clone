import type { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      /** User's accessToken */
      accessToken?: string;
      /** User's refreshToken */
      refreshToken?: string;
      /** User's username */
      username?: string;
      /** User's expires_at */
      expires_at?: number;
    } & DefaultSession["user"];
    error?: string;
  }
}
