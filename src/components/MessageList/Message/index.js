
import { withProfileContext } from "../../utils/ProfileContext";
import { AUTHORS } from "../../utils/constants";

export const Message = ({ author, text, name }) => (
    <div className={author === AUTHORS.HUMAN ? "human-msg" : "bot-msg"}>
        {author === AUTHORS.HUMAN ? name : author}: {text}
    </div>
);

export default withProfileContext(Message);  