import { Button, Title } from "@mantine/core";
import { signIn, useSession } from "next-auth/react";
import Head from "next/head";

export default function NotFound() {
  const { status } = useSession();

  return (
    <>
      <Head>
        <title>Spotify | 404 Not Found</title>
      </Head>
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Title order={1} mb="md">
          Page not found
        </Title>
        <div>We can&#39;t seem to find the page you are looking for.</div>
        {status === "unauthenticated" && (
          <Button mt="md" onClick={() => signIn("spotify")}>
            Login
          </Button>
        )}
      </div>
    </>
  );
}
