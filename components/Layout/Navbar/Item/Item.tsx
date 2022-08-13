import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { UnstyledButton } from "@mantine/core";
import type { NavIconProps } from "components/icons/NavIcons";
import useStyles from "./styles";

export interface NavItemProps {
  component?: keyof JSX.IntrinsicElements;
  disabled?: boolean;
  href: string;
  icon?: (props: NavIconProps) => JSX.Element;
  label: string;
  xs?: boolean;
}

export default function NavItem({ component: Component = "li", disabled, href, icon: Icon, label, xs }: NavItemProps) {
  const active = useRouter().asPath === href;
  const { classes } = useStyles({ active, xs });

  const children = (
    <>
      {Icon && <Icon active={active} />}
      <span className={classes.label}>{label}</span>
    </>
  );

  return (
    <Component className={classes.control}>
      {disabled ? (
        <UnstyledButton className={classes.link}>{children}</UnstyledButton>
      ) : (
        <Link href={href}>
          <a className={classes.link} draggable="false">
            {children}
          </a>
        </Link>
      )}
    </Component>
  );
}
