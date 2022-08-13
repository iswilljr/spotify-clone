import Link from "next/link";
import { createStyles } from "@mantine/core";
import { SpotifyIcon } from "components/icons/Spotify";

const useStyles = createStyles(() => ({
  control: {
    display: "flex",
    flexDirection: "row",
    flexShrink: 0,
    justifyContent: "space-between",
  },
  link: {
    padding: "0 24px",
    border: 0,
    flex: 1,
    marginBottom: 18,
    position: "relative",
    color: "#fff",
  },
  icon: {
    height: 40,
    maxWidth: 131,
    width: "100%",
  },
}));

export default function Logo() {
  const { classes } = useStyles();

  return (
    <div className={classes.control} role="banner">
      <Link href="/">
        <a className={classes.link} draggable="false">
          <SpotifyIcon className={classes.icon} />
        </a>
      </Link>
    </div>
  );
}
