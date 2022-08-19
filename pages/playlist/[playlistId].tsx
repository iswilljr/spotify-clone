/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";
import { Avatar, Loader, Title } from "@mantine/core";
import { msToDuration } from "lib/ms-to-duration";
import usePlaylist from "hooks/use-playlist";
import Playing from "components/Layout/Footer/Playing";
import useStyles from "styles/playlistId";
import ms from "ms";
import NotFound from "../404";

export default function Playlist() {
  const { classes, cx } = useStyles();
  const router = useRouter();
  const { playlistId } = router.query;

  const playlist = usePlaylist(playlistId as string);

  return (
    <div className={classes.control}>
      {!playlist ? (
        playlist === null ? (
          <div
            style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}
          >
            <Loader color="#fff" />
          </div>
        ) : (
          <NotFound />
        )
      ) : (
        <>
          <div className={classes.playlist}>
            {playlist.images[0]?.url ? (
              <img
                src={playlist.images[0].url}
                draggable="false"
                loading="eager"
                className={classes.image}
                alt="Norway"
                width={232}
                height={232}
              />
            ) : (
              <Avatar className={classes.image}>{playlist.name.charAt(0)}</Avatar>
            )}
            <div className={classes.playlistInfo}>
              <Title order={1} className={cx(classes.title, "truncate")}>
                {playlist.name}
              </Title>
              <div className={classes.playlistDesc}>
                <span>{playlist.owner.display_name}</span>
                {playlist.tracks.total !== 0 && (
                  <span>
                    {" - "}
                    <span>{playlist.tracks.total} songs</span>
                    {", "}
                    <span className="gray">
                      {ms(
                        playlist.tracks.items.reduce((acc, item) => acc + (item.track?.duration_ms ?? 0), 0),
                        {
                          long: true,
                        }
                      )}
                    </span>
                  </span>
                )}
              </div>
            </div>
          </div>
          {playlist.tracks.total !== 0 && (
            <div className={classes.tracks}>
              <div className={cx(classes.trackChild, classes.border)}>
                <div className={classes.th}>#</div>
                <div className={cx(classes.th, classes.info)}>title</div>
                <div className={cx(classes.th, classes.info)}>album</div>
                <div className={classes.th}>
                  <svg role="img" height="20" width="20" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM0 8a8 8 0 1116 0A8 8 0 010 8z"></path>
                    <path d="M8 3.25a.75.75 0 01.75.75v3.25H11a.75.75 0 010 1.5H7.25V4A.75.75 0 018 3.25z"></path>
                  </svg>
                </div>
              </div>
              {playlist.tracks.items.map(({ track }, index) => (
                <div key={track?.id ?? index} className={classes.track}>
                  <div className={classes.th}>{index + 1}</div>
                  <div className={cx(classes.th, classes.info)}>
                    <Playing track={track} imageSize={40} width="100%" noLikeButton buttonClassName="" />
                  </div>
                  <div className={cx(classes.th, classes.info)}>{track?.album.name}</div>
                  <div className={classes.th}>{msToDuration(track?.duration_ms)}</div>
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
}
