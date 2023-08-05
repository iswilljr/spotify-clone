import { useEffect, useRef, useState } from "react";
import useSpotify from "./use-spotify";

export default function usePlaylists() {
  const { spotify, session } = useSpotify();
  const [playlists, setPlaylists] = useState<SpotifyApi.PlaylistObjectSimplified[]>([]);
  const [loading, setLoading] = useState(true);
  const loaded = useRef(false);

  useEffect(() => {
    const getPlaylists = async () => {
      if (!session && !spotify.getAccessToken()) return;

      if (!loaded.current) setLoading(true);

      const { body } = await spotify.getUserPlaylists();

      setPlaylists(body.items);

      if (!loaded.current) loaded.current = true;
    };

    getPlaylists()
      .catch(() => {})
      .finally(() => setLoading(false));
  }, [session, spotify]);

  return { playlists, loading };
}
