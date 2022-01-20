
import { onValue, set } from "@firebase/database";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import { addChat, deleteChat } from "../../store/chats/actions";
import { Form } from "../Form";
import { ChatItem } from "./Chatitem";
import {
    chatsRef,
    getChatRefById,
    getMsgsRefById,
} from "../../service/firebase";

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
    const handleDeleteChat = (id) => {
        dispatch(deleteChat(id));
    };


    return (
        <>
            <ul>
                {chats.map((chat) => (
                    <ChatItem key={chat.id} chat={chat} onDelete={handleDeleteChat} />
                ))}
                <Form onSubmit={onAddChat} />
            </ul>
            <Outlet />
        </>
    );
};