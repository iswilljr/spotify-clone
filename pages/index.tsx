import { useSession } from "next-auth/react";
import { Skeleton, Title } from "@mantine/core";
import Card, { SkeletonCard } from "components/Card/Card";
import { usePlaylistStore } from "lib/store";
import NotFound from "./404";

export default function Home() {
  const { status } = useSession();
  const { playlists, isLoading } = usePlaylistStore(({ playlists, isLoading }) => ({ playlists, isLoading }));

  const loading = status === "loading" || isLoading;

  return (
    <div style={{ width: "100%", height: "100%" }}>
      {loading && <Skeleton width="100%" height={40} mb="md" />}
      {!loading && status === "authenticated" && (
        <Title order={1} mb="md">
          Your Playlists
        </Title>
      )}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 24,
          ...(status === "unauthenticated" ? { width: "100%", height: "100%" } : {}),
        }}
      >
        {loading && [...Array(10)].map((_, i) => <SkeletonCard key={i} />)}
        {status === "authenticated" &&
          playlists.map((playlist) => (
            <Card
              key={playlist.id}
              id={playlist.id}
              image={playlist.images[0]?.url || ""}
              title={playlist.name}
              desc={playlist.description || ""}
            />
          ))}
        {status === "unauthenticated" && <NotFound />}
      </div>
    </div>
  );
}
