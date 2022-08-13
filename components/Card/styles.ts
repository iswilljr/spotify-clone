import { createStyles } from "@mantine/core";

export default createStyles(() => ({
  control: {
    width: 174,
    height: 229,
    backgroundColor: "var(--header-background-color)",
    ":hover": { backgroundColor: "#282828" },
    transition: "all 0.2s ease-in-out",
    cursor: "pointer",
  },
  image: {
    width: 142,
    height: 142,
    marginBottom: 16,
  },
}));
