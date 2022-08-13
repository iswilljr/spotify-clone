import { useEffect, useState } from "react";
import useSpotify from "./use-spotify";

export default function usePlaylists() {
  const { spotify, session } = useSpotify();
  const [playlists, setPlaylists] = useState<SpotifyApi.PlaylistObjectSimplified[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      if (!session && !spotify.getAccessToken()) return;
      setLoading(true);
      const { body } = await spotify.getUserPlaylists();
      setPlaylists(body.items);
    })()
      .catch(() => {})
      .finally(() => setLoading(false));
  }, [session, spotify]);

  return { playlists, loading };
}
