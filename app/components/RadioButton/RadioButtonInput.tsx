import { XStack, Label, RadioGroup, YStack } from "tamagui";
import { EventStatus } from "../Event/type";

type RadioButtonInputProps = {
  label: EventStatus;
};

function RadioButtonInput({ label }: RadioButtonInputProps) {
  const id = `radiobutton-${label}`;
  return (
    <XStack alignItems="center" gap="$4">
      <RadioGroup.Item value={label} id={id} size={"$3"}>
        <RadioGroup.Indicator />
      </RadioGroup.Item>

      <Label size={"$3"} htmlFor={id}>
        {label}
      </Label>
    </XStack>
  );
}

type RadioGroupFormProps = {
  defaultValue: EventStatus;
  setItem: React.Dispatch<React.SetStateAction<EventStatus>>;
};

export function RadioGroupForm({ defaultValue, setItem }: RadioGroupFormProps) {
  return (
    <RadioGroup
      aria-labelledby="Select one item"
      defaultValue={defaultValue}
      name="form"
      onValueChange={(value) => setItem(value)}
    >
      <YStack jc={"flex-start"} gap="$2">
        <RadioButtonInput label="All" />
        <RadioButtonInput label="Owed" />
        <RadioButtonInput label="Settled" />
      </YStack>
    </RadioGroup>
  );
}
