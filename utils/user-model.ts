export interface User {
  id: string;
  displayName: string;
  avatar: string;
  status: "online" | "offline" | "away" | "invisible";
  statusMsg: string;
}
