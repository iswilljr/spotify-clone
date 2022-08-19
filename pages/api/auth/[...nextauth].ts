import NextAuth, { NextAuthOptions } from "next-auth";
import SpotifyProvider from "next-auth/providers/spotify";
import { authorization, clientId, clientSecret, spotify } from "lib/spotify";

export const authOptions: NextAuthOptions = {
  providers: [
    SpotifyProvider({
      clientId,
      clientSecret,
      authorization,
    }),
  ],
  callbacks: {
    async jwt({ token, account, user }) {
      if (account && user) {
        return {
          ...token,
          accessToken: account.access_token,
          refreshToken: account.refresh_token,
          username: account.providerAccountId,
          expires_at: (account.expires_at as number) * 1000,
        };
      }

      if (Date.now() < (token.expires_at as any)) return token;
      return await refreshToken(token);
    },
    async session({ session, token }) {
      session.user = {
        ...session.user,
        accessToken: token.accessToken,
        refreshToken: token.refreshToken,
        username: token.username,
        expires_at: token.expires_at,
      } as any;
      return session;
    },
  },
};

export default NextAuth(authOptions);

async function refreshToken(token: any): Promise<any> {
  try {
    spotify.setAccessToken(token.accessToken);
    spotify.setRefreshToken(token.refreshToken);
    const { body } = await spotify.refreshAccessToken();
    return {
      ...token,
      accessToken: body.access_token,
      refreshToken: body.refresh_token ?? token.refreshToken,
      expires_at: body.expires_in * 1000,
    };
  } catch (error: any) {
    return {
      ...token,
      error: "RefreshAccessTokenError",
    };
  }
}
