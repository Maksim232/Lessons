import React, { useState } from "react";
import { BrowserRouter, Link, Routes, Route, NavLink } from "react-router-dom";
import Chats from "../Chats/Chats";
import { Profile } from '../Profile';
import { Mistake } from '../Mistake';
import './Router.css';
import { ChatList } from "../ChatList";
import { Form } from "../Form";

const initialChats = [
    {
        id: "chat1",
        name: "Chat 1",
    },
    {
        id: "chat2",
        name: "Chat 2",
    },
    {
        id: "chat3",
        name: "Chat 3",
    },
    {
        id: "chat4",
        name: "Chat 4",
    },
];

const initialMessages = initialChats.reduce((acc, chat) => {
    acc[chat.id] = [];
    return acc;
}, {});


export const Router = () => {
    const [chats] = useState(initialChats);
    const [messages, setMessages] = useState(initialMessages);

    const handleAddMessage = (newMessage, chatId) => {
        setMessages((prevMessages) => ({
            ...prevMessages,
            [chatId]: [...prevMessages[chatId], newMessage],
        }));
    };

    return (


        <BrowserRouter>

            <ul className='ListofLinks'>
                <li>

                    <NavLink style={(isActive) => ({ color: isActive ? "green" : "blue" })} to="/" >Home Page</NavLink>
                </li>
                <li>
                    <NavLink style={(isActive) => ({ color: isActive ? "green" : "blue" })} to="/profile" >Profile</NavLink>
                </li>
            </ul>
            <Routes>
                <Route path="/" element={<Chats />} />
                <Route path="chats" element={<ChatList chats={chats} />}>
                    <Route
                        path=":chatId"
                        element={
                            <Chats messages={messages} onAddMessage={handleAddMessage} />
                        }
                    />
                </Route>
                <Route path="/profile" element={<Profile />} />
                <Route element={Mistake}></Route>
            </Routes>
            {/* <Form /> */}

        </BrowserRouter>


    );
};