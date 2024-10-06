import { H2, Sheet } from "tamagui";
import { RadioGroupForm } from "./components/RadioButton/RadioButtonInput";
import { EventStatus } from "./components/Event/type";

type FilterEventsProps = {
  filter: EventStatus;
  setFilter: React.Dispatch<React.SetStateAction<EventStatus>>;
  setOpenFilterSheet: React.Dispatch<React.SetStateAction<boolean>>;
  openFilterSheet: boolean;
};

export default function FilterEvents({
  filter,
  setFilter,
  openFilterSheet,
  setOpenFilterSheet,
}: FilterEventsProps) {
  return (
    <Sheet
      open={openFilterSheet}
      onOpenChange={(open: boolean | ((prevState: boolean) => boolean)) =>
        setOpenFilterSheet(open)
      }
    >
      <Sheet.Overlay
        animation="lazy"
        enterStyle={{ opacity: 0 }}
        exitStyle={{ opacity: 0 }}
      />

      <Sheet.Handle />
      <Sheet.Frame padding="$4" gap="$2">
        <H2>Filter</H2>
        <RadioGroupForm defaultValue={filter} setItem={setFilter} />
      </Sheet.Frame>
    </Sheet>
  );
}
