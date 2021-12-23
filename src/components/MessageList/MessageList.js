import { AUTHORS } from "../../App";

export const MessageList = ({ messages }) => (
    <div>
        {messages.map(({ text, author, id }) => (
            <div key={id} className={author === AUTHORS.HUMAN ? "human-msg" : "bot-msg"}>
                {author}: {text}
            </div>

        ))}
    </div>
);
