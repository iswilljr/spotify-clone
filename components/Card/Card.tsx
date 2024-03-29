import { useRouter } from "next/router";
import { Avatar, Card as MantineCard, Image, Text } from "@mantine/core";
import useStyles from "./styles";

interface CardProps {
  title: string;
  id: string;
  image?: string;
  desc?: string;
}

export default function Card({ image, title, desc, id }: CardProps) {
  const { classes } = useStyles();
  const router = useRouter();

  return (
    <MantineCard
      shadow="sm"
      p="md"
      radius="md"
      className={classes.control}
      onClick={() => {
        router.push(`/playlist/${id}`).catch(() => {});
      }}
    >
      {image ? (
        <Image src={image} alt="Norway" className={classes.image} />
      ) : (
        <Avatar radius="md" className={classes.image}>
          {title.charAt(0)}
        </Avatar>
      )}

      <Text className="truncate">{title}</Text>

      <Text size="sm" color="dimmed" lineClamp={2} style={{ overflowWrap: "anywhere" }}>
        {desc}
      </Text>
    </MantineCard>
  );
}
