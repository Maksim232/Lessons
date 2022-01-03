

import { useDispatch, useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import { addChat, deleteChat } from "../../store/chats/actions";
import { Form } from "../Form";
import { ChatItem } from "./Chatitem";

export const ChatList = () => {
    const chats = useSelector((state) => state.chats);
    const dispatch = useDispatch();

    const onAddChat = (newChatName) => {
        const newId = `chat${Date.now()}`;
        const newChat = {
            id: newId,
            name: newChatName,
        };
        dispatch(addChat(newChat));
    };



    return (
        <>
            <ul>
                {chats.map((chat) => (
                    <ChatItem key={chat.id} chat={chat} />
                ))}
                <Form onSubmit={onAddChat} />
            </ul>
            <Outlet />
        </>
    );
};