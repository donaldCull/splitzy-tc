import { UserEvent } from "app/components/Event/type";

export const EventData: UserEvent[] = [
  {
    id: "1",
    title: "Dinner at the Globe",
    location: "Globe Pub",
    category: "Food",
    status: "Owed",
    owed: "£145.35",
    image: require("../../assets/images/globe-pub.jpg"),
    participants: ["Donald", "Emily"],
  },
  {
    id: "2",
    title: "Drinks at The Rhum Club",
    location: "Rhum Club",
    category: "Drinks",
    status: "Settled",
    owed: "£0.00",
    image: require("../../assets/images/rhum-club.jpg"),
    participants: ["Donald", "Emily"],
  },
  {
    id: "3",
    title: "Wimbledon Men's Final",
    location: "Wimbledon",
    category: "Sport",
    status: "Settled",
    owed: "£0.00",
    image: require("../../assets/images/wimbledon-tennis.jpg"),
    participants: ["Donald", "Emily"],
  },
  {
    id: "4",
    title: "Glastonbury tickets",
    location: "Glastonbury",
    category: "Music",
    status: "Settled",
    owed: "£0.00",
    image: require("../../assets/images/glastonbury.jpg"),
    participants: ["Donald", "Emily"],
  },
];
