import { Message } from "./message-model";
import { User } from "./user-model";

export const mockUsers: User[] = [
  {
    id: "abc123",
    status: "online",
    statusMsg: "Hi folks! 🤠",
    displayName: "Dan",
    avatar: "https://i.pravatar.cc/300",
  },
  {
    id: "def456",
    status: "away",
    statusMsg: "Let's goooooo! 🚀",
    displayName: "Madison",
    avatar: "https://i.pravatar.cc/300",
  },
];

export const mockMessageHistory: Message[] = [
  {
    id: "0",
    roomID: 1,
    senderID: "abc123",
    text: "Hello, World!",
    timestampSent: 1659798623,
  },
  {
    id: "1",
    roomID: 1,
    senderID: "def456",
    text: "How are you?",
    timestampSent: 1659798663,
  },
  {
    id: "2",
    roomID: 1,
    senderID: "abc123",
    text: "Great!",
    timestampSent: 1659798693,
  },
];
