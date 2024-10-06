import { Button, XStack, YStack } from "tamagui";
import Logo from "./Logo";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import EventList from "./components/Event/EventList";
import { Plus, User } from "@tamagui/lucide-icons";
import FilterEvents from "./FilterEvents";
import { useState } from "react";
import { EventStatus } from "./components/Event/type";

export default function RootLayout() {
  const insets = useSafeAreaInsets();
  const [filter, setFilter] = useState<EventStatus>("All");
  const [open, setOpen] = useState(false);

  return (
    <YStack f={1} backgroundColor={"#3dc2a1"}>
      <XStack
        jc={"space-between"}
        paddingTop={insets.top}
        paddingBottom={"$4"}
        paddingHorizontal={"$4"}
      >
        <Logo />
        <Button
          bordered
          animation={"bouncy"}
          pressStyle={{
            scale: 0.9,
          }}
          circular
          icon={<User size={"$1"} />}
        />
      </XStack>
      <YStack
        f={1}
        borderTopLeftRadius={"$10"}
        borderTopRightRadius={"$10"}
        backgroundColor={"#fefefe"}
      >
        <EventList activeFilter={filter} openFilter={setOpen} />
        <Button
          pos="absolute"
          backgroundColor={"#3dc2a1"}
          size="$6"
          bottom={insets.bottom}
          alignSelf="center"
          circular
          icon={<Plus size={"$2"} color="white" />}
          shadowOffset={{ width: 2, height: 4 }}
          shadowRadius={4}
          shadowColor={"black"}
          animation={"bouncy"}
          pressStyle={{
            scale: 1.1,
            backgroundColor: "#3dc2a1",
            borderColor: "#3dc2a1",
          }}
        />
      </YStack>
      <FilterEvents
        filter={filter}
        openFilterSheet={open}
        setOpenFilterSheet={setOpen}
        setFilter={setFilter}
      />
    </YStack>
  );
}
