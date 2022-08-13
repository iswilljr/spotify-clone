import create from "zustand";

interface PlaylistsStore {
  playlists: SpotifyApi.PlaylistObjectSimplified[];
  setPlaylists: (playlists: SpotifyApi.PlaylistObjectSimplified[]) => void;
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
}

export const usePlaylistStore = create<PlaylistsStore>((set) => ({
  playlists: [],
  setPlaylists: (playlists) => set({ playlists }),
  isLoading: true,
  setIsLoading: (isLoading) => set({ isLoading }),
}));
