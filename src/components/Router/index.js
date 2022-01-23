
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Chats from "../Chats/Chats";
import Profile from "../Profile";
import React, { useEffect } from "react";
import { Mistake } from '../Mistake';
import './Router.css';
import { initAuthTracking } from "../../store/profile/actions";
import { ChatList } from "../ChatList";
import { Home } from "../Home";
import { PrivateOutlet } from "../PrivateOutlet";
import { PublicOutlet } from "../PublicOutlet";
import { Articles } from "../Articles";
import { useDispatch } from "react-redux";



export const Router = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(initAuthTracking());
    }, []);

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
                <li>
                    <NavLink
                        style={({ isActive }) => ({ color: isActive ? "green" : "blue" })}
                        to="articles"
                    >
                        Articles
                    </NavLink>
                </li>
            </ul>

            <Routes>
                <Route path="/" element={<PublicOutlet />}>
                    <Route path="" element={<Home />} />
                    <Route path="signup" element={<Home isSignUp />} />
                </Route>
                <Route path="chats" element={<PrivateOutlet />}>
                    <Route path="" element={<ChatList />}>
                        <Route path=":chatId" element={<Chats />} />
                    </Route>
                </Route>
                <Route path="/profile" element={<PrivateOutlet />}>
                    <Route path="" element={<Profile />} />
                </Route>
                <Route path="/articles" element={<Articles />} />
                <Route path="*" element={<Mistake />} />
            </Routes>
        </BrowserRouter>
    );
};
