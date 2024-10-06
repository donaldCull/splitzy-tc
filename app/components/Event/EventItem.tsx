import { Button, Card, H2, Paragraph, XStack, Image } from "tamagui";
import { UserEvent } from "./type";
import { BadgePoundSterling, MapPin } from "@tamagui/lucide-icons";

type EventItemProps = {
  event: UserEvent;
};

export default function EventItem({ event }: EventItemProps) {
  return (
    <Card
      size="$6"
      m={"$2"}
      shadowOffset={{ width: 2, height: 3 }}
      shadowRadius={4}
      shadowColor={"black"}
      animation={"bouncy"}
      pressStyle={{
        scale: 0.9,
      }}
    >
      <Card.Header
        backgroundColor={"#e4e4e4"}
        borderTopLeftRadius={"$2"}
        borderTopRightRadius={"$2"}
      >
        <H2>{event.title}</H2>
        <XStack ai={"center"} gap="$2">
          <Paragraph theme="alt2">
            <MapPin size={"$1"} />
            {event.location}
          </Paragraph>
          <Button size={"$2"} color={"white"} backgroundColor={"#CD5C08"}>
            {event.category}
          </Button>
          <Button
            size={"$2"}
            color={"white"}
            backgroundColor={event.status === "Owed" ? "#159ab7" : "#007f4e"}
          >
            {event.status === "Owed" ? `Owed ${event.owed}` : "Settled"}
          </Button>
        </XStack>
      </Card.Header>
      <Card.Footer height={150}>
        <XStack
          p={"$3"}
          flex={1}
          ai={"flex-end"}
          justifyContent="space-between"
        >
          <Button circular>D</Button>
          <Button
            borderRadius="$10"
            fontSize={"$4"}
            scaleIcon={2}
            icon={BadgePoundSterling}
            animation={"bouncy"}
            pressStyle={{
              scale: 0.9,
            }}
          >
            Add expense
          </Button>
        </XStack>
      </Card.Footer>
      <Card.Background borderRadius={"$2"}>
        <Image objectFit="contain" source={event.image} />
      </Card.Background>
    </Card>
  );
}
