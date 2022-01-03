import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addChat, deleteChat } from "../../../store/chats/actions";

export const ChatItem = ({ chat }) => {
    const dispatch = useDispatch();
    const handleDelete = () => {
        dispatch(deleteChat(chat.id));
    };



    return (
        <li key={chat.id}>
            <Link to={`/chats/${chat.id}`}>{chat.name}</Link>
            <button onClick={handleDelete} >Delete</button>
        </li>
    );

};