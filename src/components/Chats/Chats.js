
import React, { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router";
import "./Chats.css";
import { Form } from "../Form";
import { MessageList } from "../MessageList/MessageList";




export const AUTHORS = {
    HUMAN: "dude",
    BOT: "bot",
};




function Chats() {
    const { chatId } = useParams();
    const [messageList, setMessageList] = useState([]);


    const handleAddMessage = (newMessage) => {
        setMessageList((prewMessageList) => [...prewMessageList, newMessage]);
    }

    const handleSubmit = (text) => {
        const newMessage = { text, author: AUTHORS.HUMAN, id: `msg-${Date.now()}` };
        handleAddMessage(newMessage);
    };




    useEffect(() => {

        let timeout;
        if (messageList[chatId]?.[messageList[chatId].length - 1]?.author === AUTHORS.HUMAN) {

            timeout = setTimeout(
                () => {

                    handleAddMessage({
                        text: "helloiambot", author: AUTHORS.BOT, id: `msg-${Date.now()}`,
                    }, chatId
                    );
                }, 1500);
        }

        return () => {
            clearTimeout(timeout);
        };
    },
        [messageList]);

    if (!messageList[chatId]) {
        return <Navigate to="/chats" replace />;
    }

    return (
        <>

            <div className="App-header">
                <div className="App">
                    <Form onSubmit={handleSubmit} />
                    <MessageList messages={messageList[chatId]} />
                </div>
            </div>
        </>
    );
}

export default Chats;





