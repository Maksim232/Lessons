
import { Message } from "./Message";

export const AUTHORS = {
    HUMAN: "human",
    BOT: "bot",
};

export const MessageList = ({ messages, humanName }) => (
    <div>
        {messages.map(({ text, author, id }) => (
            <Message humanName={humanName} key={id} author={author} text={text} />
        ))}
    </div>
);
