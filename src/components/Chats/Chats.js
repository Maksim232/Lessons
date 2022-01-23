import React, { useMemo } from "react";
import { Navigate, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";

import { Form } from "../Form";
import { MessageList } from "../MessageList/MessageList";
import { AUTHORS } from "../../components/utils/constants";
import {
    addMsgWithFb
} from "../../store/messages/actions";
import {
    selectMessages,
    selectMessagesByChatId,
} from "../../store/messages/selectors";

import "./Chats.css";

function Chats() {
    const { chatId } = useParams();
    const messages = useSelector(selectMessages);

    const getMessagesByChatId = useMemo(
        () => selectMessagesByChatId(chatId),
        [chatId]
    );

    const messagesForCurrentChat = useSelector(getMessagesByChatId);
    const dispatch = useDispatch();

    const onAddMessage = (newMessage, chatId) => {
        dispatch(addMsgWithFb(newMessage, chatId));
    };

    const handleSubmit = (text) => {
        const newMessage = { text, author: AUTHORS.HUMAN, id: `msg-${Date.now()}` };
        onAddMessage(newMessage, chatId);
    };


    if (!messages[chatId]) {
        return <Navigate to="/chats" replace />;
    }

    return (
        <>
            <h3>HEADER</h3>
            <div className="chat-wrap">
                <div className="App">
                    <Form focusOnChange={chatId} onSubmit={handleSubmit} />
                    <MessageList messages={messagesForCurrentChat} />
                </div>
            </div>
        </>
    );
}

export default Chats;

