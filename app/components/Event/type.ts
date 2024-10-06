import { ImageSourcePropType } from "react-native";

export type EventStatus = "Settled" | "Owed" | "All";

export type UserEvent = {
  id: string;
  title: string;
  location: string;
  category: string;
  image: ImageSourcePropType;
  status: EventStatus;
  owed: string;
  participants: string[];
};
