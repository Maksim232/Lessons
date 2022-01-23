import { AUTHORS } from "../utils/constants";
import { Message } from "./Message";



export const MessageList = ({ messages }) => (
    <div>
        {messages.map(({ text, author, id }) => (
            <Message key={id} author={author} text={text} />
        ))}
    </div>
);
