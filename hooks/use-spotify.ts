import { useEffect } from "react";
import { signIn, useSession } from "next-auth/react";
import { spotify } from "lib/spotify";

export default function useSpotify() {
  const { data: session } = useSession();

  useEffect(() => {
    if (!session) return;
    if (session.error === "RefreshAccessTokenError" || Date.now() > (session.user.expires_at as number)) {
      signIn("spotify");
    }
    if (!spotify.getAccessToken() && session.user.accessToken) {
      spotify.setAccessToken(session.user.accessToken);
    }
  }, [session]);

  return { spotify, session };
}
