import { createStyles } from "@mantine/core";

export default createStyles((theme, { active, xs }: { active?: boolean; xs?: boolean } = {}) => ({
  control: {
    padding: "0 8px",
  },
  link: {
    transitionDuration: ".2s",
    transitionProperty: "color background-color width height",
    transitionTimingFfunction: "linear",
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    gap: "16px",
    minHeight: xs ? 30 : 40,
    padding: "0 16px",
    color: active ? "#fff" : "#b3b3b3",
    ":hover": {
      color: "#fff",
    },
  },
  label: {
    fontWeight: xs ? 400 : 700,
    fontSize: xs ? 13 : 14,
  },
}));
