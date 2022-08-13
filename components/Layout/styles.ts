import { createStyles } from "@mantine/core";

export default createStyles(() => ({
  control: {
    backgroundColor: "var(--app-background-color)",
    height: "100vh",
    width: "100%",
    minHeight: "600px",
    minWidth: "768px",
    position: "relative",
  },
  wrapper: {
    display: "flex",
    height: "var(--wrapper-height)",
    position: "relative",
  },
  content: { flex: 1, position: "relative", height: "100%", width: "100%" },
  main: {},
}));
