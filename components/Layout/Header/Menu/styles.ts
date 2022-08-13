import { createStyles } from "@mantine/core";

export default createStyles((theme, { open }: { open?: boolean }) => ({
  control: {
    zIndex: 9999,
    position: "absolute",
    inset: "0 0 auto auto",
    margin: 0,
    transform: "translate(-32.0104px, 56px)",
    minWidth: 196,
    maxWidth: 350,
    backgroundColor: "#282828",
    borderRadius: 4,
    boxShadow: "0 16px 24px rgb(0 0 0 / 30%), 0 6px 8px rgb(0 0 0 / 20%)",
    maxHeight: "calc(100vh - 24px)",
    overflowY: "auto",
    padding: 4,
    display: open ? "block" : "none",
  },
}));

export const useMenuItemStyles = createStyles(() => ({
  menuitem: {
    background: "transparent",
    border: 0,
    borderRadius: "2px",
    color: "hsla(0,0%,100%,.9)",
    textDecoration: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 8,
    width: "100%",
    height: 40,
    padding: 12,
    position: "relative",
    textAlign: "start",
    ":hover": {
      backgroundColor: "hsla(0,0%,100%,.1)",
      color: "#fff",
      textDecoration: "none",
    },
  },
  text: {
    fontSize: "0.875rem",
    fontWeight: 400,
    flex: 1,
    textTransform: "capitalize",
  },
}));
