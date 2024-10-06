import { FlatList } from "react-native";
import EventItem from "./EventItem";
import {
  Button,
  Circle,
  H2,
  SizableText,
  Stack,
  XStack,
  YStack,
} from "tamagui";
import { Filter } from "@tamagui/lucide-icons";
import { EventData } from "app/api/EventData";
import { EventStatus } from "./type";

type EventListProps = {
  activeFilter: EventStatus;
  openFilter: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function EventList({
  openFilter,
  activeFilter,
}: EventListProps) {
  const data = EventData;
  const filteredData =
    activeFilter === "All"
      ? data
      : data.filter((item) => item.status === activeFilter);
  return (
    <YStack p={"$3"} gap={"$2"}>
      <XStack jc={"space-between"}>
        <H2>Events</H2>
        <Button
          bordered
          animation={"bouncy"}
          pressStyle={{
            scale: 0.9,
          }}
          circular
          icon={Filter}
          onPress={() => openFilter(true)}
        >
          {activeFilter !== "All" && (
            <Circle
              pos={"absolute"}
              right={5}
              h={10}
              w={10}
              backgroundColor={"#3dc2a1"}
            />
          )}
        </Button>
      </XStack>
      <FlatList
        data={filteredData}
        contentContainerStyle={{ paddingBottom: 100 }}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <EventItem event={item} />}
        ItemSeparatorComponent={() => <Stack h={10} />}
        ListEmptyComponent={<SizableText>Empty</SizableText>}
        showsVerticalScrollIndicator={false}
      />
    </YStack>
  );
}
