import React, { useState } from "react";
import { BrowserRouter, Link, Routes, Route, NavLink } from "react-router-dom";
import Chats from "../Chats/Chats";
import { Profile } from '../Profile';
import { Mistake } from '../Mistake';
import './Router.css';
import { ChatList } from "../ChatList";
import { Form } from "../Form";
import { Home } from "../Home";
import { withProfileContext } from "../utils/ProfileContext";


export const AUTHORS = {
    HUMAN: "dude",
    BOT: "bot",
};


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
    const [name, setName] = useState('default');
    const [chats, setChats] = useState(initialChats);
    const [messages, setMessages] = useState(initialMessages);

    const handleAddMessage = (newMessage, chatId) => {
        setMessages((prevMessages) => ({
            ...prevMessages,
            [chatId]: [...prevMessages[chatId], newMessage],
        }));
    };

    return (
        <BrowserRouter>
            <ul>
                <li>
                    <NavLink
                        style={(props) => ({ color: props.isActive ? "green" : "blue" })}
                        to="/"
                    >
                        HOME
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        style={({ isActive }) => ({ color: isActive ? "green" : "blue" })}
                        to="/chats"
                    >
                        Chats
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        style={({ isActive }) => ({ color: isActive ? "green" : "blue" })}
                        to="profile"
                    >
                        PROFILE
                    </NavLink>
                </li>
            </ul>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="chats" element={<ChatList chats={chats} />}>
                    <Route
                        path=":chatId"
                        element={
                            <Chats messages={messages} name={name} onAddMessage={handleAddMessage} />
                        }
                    />
                </Route>
                <Route path="/profile" element={<Profile name={name} onChangeName={setName} />} />

                <Route path="*" element={<Mistake />} />
            </Routes>
        </BrowserRouter>
    );
};
