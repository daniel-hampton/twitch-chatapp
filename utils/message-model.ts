export interface Message {
  id: string;
  text: string;
  /** Time in milliseconds, Unix Epoch */
  timestampSent: number;
  senderID: string;
  roomID: number;
}
