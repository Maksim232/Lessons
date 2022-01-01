
import { ProfileContext, withProfileContext } from "../../utils/ProfileContext";
export const AUTHORS = {
    HUMAN: "human",
    BOT: "bot",
};

export const Message = ({ author, text, name }) => (
    <div className={author === AUTHORS.HUMAN ? "human-msg" : "bot-msg"}>
        {author === AUTHORS.HUMAN ? name : author}: {text}
    </div>
);

export default withProfileContext(Message);  