import { useEffect, useState } from "react";
import { Slider } from "@mantine/core";
import { useInterval } from "@mantine/hooks";
import { NextIcon, PauseIcon, PlayIcon, PreviousIcon, RepeatIcon, ShuffleIcon } from "components/icons/PlayerIcons";
import { msToDuration } from "lib/ms-to-duration";
import useStyles from "./styles";

interface PlayerProps {
  buttonClassName: string;
  state?: SpotifyApi.CurrentPlaybackResponse | null;
  track?: SpotifyApi.TrackObjectFull | null;
  listeningState: "current" | "recent" | "undeterminated";
}

export default function Player({ buttonClassName, state, track, listeningState }: PlayerProps) {
  const { classes, cx } = useStyles();
  const durationSegs = Math.floor((track?.duration_ms ?? 0) / 1000);
  const progressSegs = Math.floor((state?.progress_ms ?? 0) / 1000);

  const [progress, setProgress] = useState(progressSegs);
  const interval = useInterval(() => setProgress((prev) => (prev < durationSegs ? prev + 1 : durationSegs)), 1000);

  useEffect(() => {
    if (!state?.is_playing || listeningState !== "current" || progress >= durationSegs) interval.stop();
    else !interval.active && interval.start();
  }, [listeningState, interval, progress, durationSegs, state?.is_playing]);

  useEffect(() => {
    if (progressSegs) setProgress(progressSegs);
  }, [progressSegs]);

  return (
    <div className={classes.control}>
      <div className={classes.playerControls}>
        <ShuffleIcon className={buttonClassName} />
        <PreviousIcon className={buttonClassName} />
        {state?.is_playing ? (
          <PauseIcon className={cx(buttonClassName, classes.rounded)} />
        ) : (
          <PlayIcon className={cx(buttonClassName, classes.rounded)} />
        )}
        <NextIcon className={buttonClassName} />
        <RepeatIcon className={buttonClassName} />
      </div>
      <div className={classes.progress}>
        <div className="">{msToDuration(progress * 1000)} </div>
        <div className={classes.progressBar}>
          <Slider
            thumbSize={12}
            defaultValue={progress}
            value={progress}
            min={0}
            max={durationSegs}
            styles={{
              root: {
                width: "100%",
                margin: "0 8px",
                ":hover .mantine-Slider-thumb": { display: "block" },
              },
              thumb: { display: "none", backgroundColor: "#fff" },
              track: { backgroundColor: "rgb(157, 150, 142)", height: 4 },
              bar: { backgroundColor: "#fff" },
              label: { display: "none" },
            }}
          />
        </div>
        <div className="">{msToDuration(track?.duration_ms ?? 0)}</div>
      </div>
    </div>
  );
}
