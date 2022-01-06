import React, { useState } from "react";
import { BrowserRouter, Link, Routes, Route, NavLink } from "react-router-dom";
import Chats from "../Chats/Chats";
import Profile from "../Profile";
import { Mistake } from '../Mistake';
import './Router.css';
import { ChatList } from "../ChatList";
import { Home } from "../Home";



export const Router = () => (
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
            <Route path="chats" element={<ChatList />}>
                <Route
                    path=":chatId"
                    element={
                        <Chats />
                    }
                />
            </Route>
            <Route path="/profile" element={<Profile />} />

            <Route path="*" element={<Mistake />} />
        </Routes>
    </BrowserRouter>
);
