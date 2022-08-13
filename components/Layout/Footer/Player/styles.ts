import { createStyles } from "@mantine/core";

export default createStyles(() => ({
  control: {
    maxWidth: "500px",
    width: "40%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  rounded: {
    borderRadius: "50%",
    backgroundColor: "var(--light-color)",
    color: "var(--dark-color)",
  },
  playerControls: {
    display: "flex",
    alignItems: "center",
    flexWrap: "nowrap",
    gap: 12,
    marginBottom: 8,
  },
  progress: {
    display: "flex",
    alignItems: "center",
    fontSize: "0.6875rem",
    color: "#a7a7a7",
    fontWeight: 400,
    width: "100%",
  },
  progressBar: {
    height: 12,
    flex: 1,
    width: "100%",
    display: "flex",
    alignItems: "center",
  },
}));
