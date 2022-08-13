import { ScrollArea } from "@mantine/core";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Navbar from "./Navbar/Navbar";
import useStyles from "./styles";

export default function Layout({ children }: { children: React.ReactNode }) {
  const { classes } = useStyles();

  return (
    <div className={classes.control}>
      <div className={classes.wrapper}>
        <Navbar />
        <div className={classes.content}>
          <Header />
          <ScrollArea
            p="xl"
            style={{ width: "100%", height: "calc(100% - var(--header-height))" }}
            styles={{ root: { "& > div > div": { width: "100%", height: "100%" } } }}
          >
            {children}
          </ScrollArea>
        </div>
      </div>
      <Footer />
    </div>
  );
}
