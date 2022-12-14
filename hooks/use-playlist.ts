import { useEffect, useState } from "react";
import useSpotify from "./use-spotify";

export default function usePlaylist(id: string) {
  const { spotify, session } = useSpotify();
  const [playlist, setPlaylist] = useState<SpotifyApi.PlaylistObjectFull | null | false>(null);

  useEffect(() => {
    (async () => {
      if (!id) return;
      if (!session && !spotify.getAccessToken()) return setPlaylist(false);
      const { body } = await spotify.getPlaylist(id);
      setPlaylist(body);
    })().catch(() => {
      setPlaylist(false);
      console.log("error");
    });
  }, [session, spotify, id]);

  return playlist;
}
