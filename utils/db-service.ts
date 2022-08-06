import { Message } from "./message-model";
interface DBService {
  /** Send a message to the 'database' whatever that may be */
  sendMsg: (msg: Message) => Promise<void>;
  /** Retrieve a list of messages for a chat room from the 'database' */
  fetchMsgs: (roomID: Message["roomID"]) => Message[];
}
