import { useEffect, useState } from "react";
import useSpotify from "./use-spotify";

interface PlayingState {
  currentlyPlaying: SpotifyApi.TrackObjectFull | null;
  recentlyPlayed: SpotifyApi.PlayHistoryObject | null;
  playbackState: SpotifyApi.CurrentPlaybackResponse | null;
}

export default function usePlayingState(): PlayingState {
  const { spotify, session } = useSpotify();
  const [currentlyPlaying, setCurrentlyPlaying] = useState<SpotifyApi.TrackObjectFull | null>(null);
  const [recentlyPlayed, setRecentlyPlayed] = useState<SpotifyApi.PlayHistoryObject | null>(null);
  const [playbackState, setPlaybackState] = useState<SpotifyApi.CurrentPlaybackResponse | null>(null);

  useEffect(() => {
    (async () => {
      if (!session && !spotify.getAccessToken()) return;
      const { body: recentlyPlayed } = await spotify.getMyRecentlyPlayedTracks();
      const { body: playbackState } = await spotify.getMyCurrentPlaybackState();
      setRecentlyPlayed(recentlyPlayed?.items?.[0]);
      setCurrentlyPlaying(playbackState?.item as SpotifyApi.TrackObjectFull);
      setPlaybackState(playbackState);
    })().catch(() => {});
  }, [session, spotify]);

  return { currentlyPlaying, recentlyPlayed, playbackState };
}
