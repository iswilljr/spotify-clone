import { useSession } from "next-auth/react";
import { Loader, Title } from "@mantine/core";
import Card from "components/Card/Card";
import { usePlaylistStore } from "lib/store";
import NotFound from "./404";

export default function Home() {
  const { status } = useSession();
  const { playlists, isLoading: isPlaylistLoading } = usePlaylistStore(({ playlists, isLoading }) => ({
    playlists,
    isLoading,
  }));

  const isLoading = status === "loading" || isPlaylistLoading;

  const Loading = (
    <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <Loader color="green" size="xl" />
    </div>
  );

  const Unauthenticated = (
    <div style={{ width: "100%", height: "100%" }}>
      <NotFound />
    </div>
  );

  return (
    <div style={{ width: "100%", height: "100%" }}>
      {!isLoading && status === "authenticated" && playlists.length !== 0 && (
        <>
          <Title order={1} mb="md">
            Your Playlists
          </Title>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 24 }}>
            {playlists.map((playlist) => (
              <Card
                key={playlist.id}
                id={playlist.id}
                image={playlist.images[0]?.url || ""}
                title={playlist.name}
                desc={playlist.description ?? ""}
              />
            ))}
          </div>
        </>
      )}
      {(isLoading || playlists.length === 0) && status !== "unauthenticated" && Loading}
      {status === "unauthenticated" && Unauthenticated}
    </div>
  );
}
