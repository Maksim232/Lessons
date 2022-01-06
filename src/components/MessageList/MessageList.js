
import { Message } from "./Message";

export const AUTHORS = {
    HUMAN: "human",
    BOT: "bot",
};

export const MessageList = ({ messages }) => (
    <div>
        {messages.map(({ text, author, id }) => (
            <Message key={id} author={author} text={text} />
        ))}
    </div>
);
