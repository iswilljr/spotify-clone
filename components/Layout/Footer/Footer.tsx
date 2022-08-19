import { createStyles, Footer as MantineFooter } from "@mantine/core";
import usePlayingState from "hooks/use-playing-state";
import Controls from "./Controls";
import Playing from "./Playing";
import Player from "./Player/Player";

const useStyles = createStyles(() => ({
  control: {
    backgroundColor: "var(--footer-background-color)",
    border: 0,
    height: "var(--footer-height)",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    position: "relative",
  },
  button: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 32,
    height: 32,
  },
}));

export default function Footer() {
  const { classes } = useStyles();
  const { currentlyPlaying, recentlyPlayed, playbackState } = usePlayingState();
  const track = currentlyPlaying ?? recentlyPlayed?.track;
  const listeningState = currentlyPlaying ? "current" : recentlyPlayed ? "recent" : "undeterminated";

  return (
    <MantineFooter height={90} px="md" className={classes.control}>
      <Playing track={track} buttonClassName={classes.button} />
      <Player track={track} state={playbackState} buttonClassName={classes.button} listeningState={listeningState} />
      <Controls buttonClassName={classes.button} state={playbackState} />
    </MantineFooter>
  );
}
