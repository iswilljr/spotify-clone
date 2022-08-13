import { createStyles } from "@mantine/core";

export default createStyles((theme) => ({
  control: {
    width: "100%",
    height: "100%",
    color: "var(--light-color)",
    paddingBottom: 16,
  },
  title: {
    maxWidth: 750,
    marginBottom: 16,
    [theme.fn.largerThan("sm")]: { fontSize: "4rem" },
    [theme.fn.largerThan("md")]: { fontSize: "5rem" },
    [theme.fn.largerThan("lg")]: { fontSize: "6rem" },
    [theme.fn.largerThan("xl")]: { fontSize: "6rem" },
  },
  image: {
    width: 232,
    height: 232,
    marginRight: 32,
  },
  playlist: {
    display: "flex",
  },
  playlistInfo: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
  },
  playlistDesc: {
    fontSize: ".8rem",
    "& .gray": {
      color: `#ffffffb3 !important`,
    },
  },
  tracks: {
    width: "100%",
    marginTop: 32,
  },
  trackChild: {
    width: "100%",
    display: "flex",
    padding: 8,
    "& > :first-child": { width: "5%" },
    "& > :nth-child(2)": { width: "50%" },
    "& > :nth-child(3)": { width: "30%" },
    "& > :last-child": { width: "15%" },
  },
  track: {
    cursor: "pointer",
    width: "100%",
    display: "flex",
    padding: 8,
    borderRadius: 8,
    "& > :first-child": { width: "5%" },
    "& > :nth-child(2)": { width: "50%" },
    "& > :nth-child(3)": { width: "30%" },
    "& > :last-child": { width: "15%" },
    ":hover": { backgroundColor: "var(--darkest-color)" },
  },
  border: {
    borderBottom: ".6px solid #ffffff29",
  },
  th: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 12,
    textTransform: "uppercase",
    color: "#ffffffb3",
    position: "relative",
  },
  info: {
    justifyContent: "flex-start !important",
  },
}));
