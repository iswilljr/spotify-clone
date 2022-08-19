/* eslint-disable @next/next/no-img-element */
import { createStyles, UnstyledButton } from "@mantine/core";
import { HeartIcon } from "components/icons/Heart";

const useStyles = createStyles((theme, { width, imageSize }: { width?: string | number; imageSize?: number }) => ({
  control: {
    minWidth: width ? undefined : "180px",
    width: width ?? "30%",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    position: "relative",
  },
  image: { width: imageSize ?? 56, height: imageSize ?? 56 },
  info: {
    display: "block",
    margin: "0 14px",
  },
  title: {
    color: "var(--light-color)",
    fontSize: "0.775rem",
    fontWeight: 400,
  },
  author: {
    fontSize: 11,
    fontWeight: "lighter",
    color: "#b3b3b3",
  },
}));

interface PlayingProps {
  buttonClassName: string;
  track?: SpotifyApi.TrackObjectFull | null;
  width?: string | number;
  imageSize?: number;
  noLikeButton?: boolean;
}

export default function Playing({ track, width, imageSize, noLikeButton, buttonClassName }: PlayingProps) {
  const { classes, cx } = useStyles({ width, imageSize });

  const trackImageSrc = track?.album?.images[0].url;
  const author = track?.artists?.[0].name;

  return (
    <div className={classes.control}>
      {track && (
        <>
          <div className={classes.image}>
            <img
              width={imageSize ?? 56}
              height={imageSize ?? 56}
              draggable="false"
              loading="eager"
              src={trackImageSrc}
              alt={track.name}
            />
          </div>
          <div className={cx(classes.info, "truncate")}>
            <div className={cx(classes.title, "truncate")} title={track.name}>
              {track.name}
            </div>
            <div className={cx(classes.author, "truncate")} title={author}>
              {author}
            </div>
          </div>
          {!noLikeButton && (
            <UnstyledButton className={buttonClassName}>
              <HeartIcon />
            </UnstyledButton>
          )}
        </>
      )}
    </div>
  );
}
