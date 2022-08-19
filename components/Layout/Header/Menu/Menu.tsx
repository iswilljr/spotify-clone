import { signOut } from "next-auth/react";
import useStyles, { useMenuItemStyles } from "./styles";

export default function Menu({ open }: { open: boolean }) {
  const { classes } = useStyles({ open });

  return (
    <ul role="menu" className={classes.control}>
      <MenuItem
        label="account"
        external
        onClick={() => window.open("https://www.spotify.com/co/account/overview/", "_blank")}
      />
      <MenuItem
        label="log out"
        onClick={() => {
          signOut().catch(() => {});
        }}
      />
    </ul>
  );
}

interface MenuItemProps
  extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  label: string;
  external?: boolean;
}

function MenuItem({ label, external, ...props }: MenuItemProps) {
  const { classes } = useMenuItemStyles();

  return (
    <li role="presentation" key={label}>
      <button role="menuitem" className={classes.menuitem} {...props}>
        <span className={classes.text}>{label}</span>
        {external && (
          <svg role="img" height="16" width="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M1 2.75A.75.75 0 011.75 2H7v1.5H2.5v11h10.219V9h1.5v6.25a.75.75 0 01-.75.75H1.75a.75.75 0 01-.75-.75V2.75z"></path>
            <path d="M15 1v4.993a.75.75 0 11-1.5 0V3.56L8.78 8.28a.75.75 0 01-1.06-1.06l4.72-4.72h-2.433a.75.75 0 010-1.5H15z"></path>
          </svg>
        )}
      </button>
    </li>
  );
}
