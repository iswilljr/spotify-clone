/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import { useSession, signIn } from "next-auth/react";
import { Header as MantineHeader, Skeleton, UnstyledButton } from "@mantine/core";
import { DropdownIcon } from "components/icons/Dropdown";
import UserIcon from "components/icons/User";
import Menu from "./Menu/Menu";
import useStyles from "./styles";

export default function Header() {
  const { classes, cx } = useStyles();
  const { data: session, status } = useSession();
  const [isOpen, setOpened] = useState(false);

  return (
    <MantineHeader height={64} className={classes.control}>
      <div className=""></div>
      <div className={classes.user}>
        {status === "loading" && <Skeleton height={32} width={110} radius="xl" />}
        {status === "authenticated" && session && (
          <>
            <UnstyledButton className={classes.button} onClick={() => setOpened((o) => !o)}>
              <div className={session.user.image ? "" : classes.avatar}>
                {session.user.image ? (
                  <img
                    src={session.user.image}
                    className={classes.avatarImage}
                    alt={session.user.username}
                    height="28"
                    width="28"
                  />
                ) : (
                  <UserIcon />
                )}
              </div>
              <span className={classes.username}>{session.user?.name ?? "user"}</span>
              <div className={classes.iconWrapper}>
                <DropdownIcon />
              </div>
            </UnstyledButton>
            <Menu open={isOpen} />
          </>
        )}
        {status === "unauthenticated" && !session && (
          <UnstyledButton
            className={cx(classes.button, classes.login)}
            onClick={() => {
              signIn("spotify").catch(() => {});
            }}
          >
            <span className={classes.username}>login</span>
          </UnstyledButton>
        )}
      </div>
    </MantineHeader>
  );
}
