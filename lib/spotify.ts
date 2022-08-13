import SpotifyWebApi from "spotify-web-api-node";

const scope = [
  "user-read-email",
  "user-read-playback-state",
  "user-read-currently-playing",
  "user-read-recently-played",
  "playlist-read-private",
  "playlist-read-collaborative",
].join(",");

const queryParams = new URLSearchParams({ scope }).toString();

export const authorization = `https://accounts.spotify.com/authorize?${queryParams}`;

export const clientId = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID || "";
export const clientSecret = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET || "";

export const spotify = new SpotifyWebApi({
  clientId,
  clientSecret,
});
