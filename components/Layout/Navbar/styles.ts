import { createStyles } from "@mantine/core";

export default createStyles(() => ({
  control: {
    backgroundColor: "var(--sidebar-background-color)",
    border: 0,
    width: "var(--sidebar-width)",
  },
  list: {
    flex: 1,
    marginTop: 24,
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
    flexShrink: 0,
    position: "relative",
  },
  dividerWrapper: {
    marginBottom: 8,
  },
  divider: {
    backgroundColor: "#282828",
    border: "none",
    height: 1,
    minHeight: 1,
    margin: "8px 24px 0 24px",
  },
}));
