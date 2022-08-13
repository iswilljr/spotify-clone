import { createStyles, Slider } from "@mantine/core";
import { DeviceIcon, LyricsIcon, QueueIcon, VolumeIcon } from "components/icons/ControlIcons";

const useStyles = createStyles(() => ({
  control: {
    minWidth: "180px",
    width: "30%",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    position: "relative",
  },
}));

interface ControlsProps {
  buttonClassName: string;
  state?: SpotifyApi.CurrentPlaybackResponse | null;
}

export default function Controls({ buttonClassName, state }: ControlsProps) {
  const { classes } = useStyles();

  return (
    <div className={classes.control}>
      <LyricsIcon className={buttonClassName} />
      <QueueIcon className={buttonClassName} />
      <DeviceIcon className={buttonClassName} />
      <VolumeIcon className={buttonClassName} />
      <Slider
        thumbSize={12}
        defaultValue={state?.device.volume_percent || 100}
        min={0}
        max={100}
        styles={{
          root: {
            width: 125,
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
  );
}
