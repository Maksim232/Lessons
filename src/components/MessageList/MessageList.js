export const MessageList = ({ messages }) => (
    <div>
        {messages.map(({ text, author }) => (
            <div>
                {author}: {text}
            </div>
        ))}
    </div>
);
