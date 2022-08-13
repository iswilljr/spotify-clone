import { createStyles } from "@mantine/core";

export default createStyles(() => ({
  control: {
    backgroundColor: "var(--header-background-color)",
    border: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "16px 32px",
    position: "relative",
    height: "var(--header-height)",
  },
  button: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    border: 0,
    borderRadius: "23px",
    gap: 8,
    height: 32,
    padding: 4,
    position: "relative",
    color: "var(--light-color)",
  },
  login: {
    padding: "0 16px",
    textTransform: "uppercase",
  },
  user: {
    display: "flex",
    alignItems: "center",
  },
  username: {
    fontSize: "0.875rem",
    fontWeight: 900,
    lineHeight: "28px",
    maxWidth: "110px",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },
  iconWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  avatar: {
    width: 28,
    height: 28,
    borderRadius: "50%",
    backgroundColor: "#535353",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  avatarImage: {
    borderRadius: "50%",
  },
}));
