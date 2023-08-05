import { useEffect } from "react";
import { Navbar as MantineNavbar, ScrollArea } from "@mantine/core";
import { HomeIcon, SearchIcon, LibraryIcon, NewIcon, LikedIcon } from "components/icons/NavIcons";
import usePlaylists from "hooks/use-playlists";
import { usePlaylistStore } from "lib/store";
import NavItem, { type NavItemProps } from "./Item/Item";
import Logo from "./Logo";
import useStyles from "./styles";

const items: NavItemProps[] = [
  { href: "/", icon: HomeIcon, label: "Home" },
  { href: "/search", icon: SearchIcon, label: "Search", disabled: true },
  { href: "/collection", icon: LibraryIcon, label: "Your Library", disabled: true },
];

const list: NavItemProps[] = [
  { href: "/collection/new", icon: NewIcon, label: "New", disabled: true },
  { href: "/collection/tracks", icon: LikedIcon, label: "Liked", disabled: true },
];

export default function Navbar() {
  const { classes } = useStyles();

  const { playlists, loading } = usePlaylists();
  const { setPlaylists, setIsLoading } = usePlaylistStore(({ setPlaylists, setIsLoading }) => ({
    setPlaylists,
    setIsLoading,
  }));

  useEffect(() => {
    setPlaylists(playlists);
    setIsLoading(loading);
  }, [playlists, loading, setPlaylists, setIsLoading]);

  return (
    <MantineNavbar className={classes.control} pt="xl" width={{ sm: 240 }} height={"100%"}>
      <Logo />
      <ul className="items">
        {items.map(({ href, icon, label, disabled }) => (
          <NavItem key={href} href={href} icon={icon} label={label} disabled={disabled} />
        ))}
      </ul>
      <div className={classes.list}>
        {list.map(({ href, icon, label, disabled }) => (
          <NavItem key={href} component="div" href={href} icon={icon} label={label} disabled={disabled} />
        ))}
        <div className={classes.dividerWrapper}>
          <hr className={classes.divider} />
        </div>
        <ScrollArea
          style={{ width: "var(--sidebar-width)", height: 175 }}
          // styles={{ thumb: { backgroundColor: "#000" }, scrollbar: {} }}
        >
          {playlists.map((playlist) => (
            <NavItem key={playlist.id} component="div" href={`/playlist/${playlist.id}`} label={playlist.name} xs />
          ))}
        </ScrollArea>
      </div>
    </MantineNavbar>
  );
}
