import { createStore } from "redux";
import { profileReducer } from "./profile/reducer";
import { combineReducers } from "redux";
import { chatsReducer } from "./chats/reduce";
import { messagesReducer } from "../store/messages/reduce";


const rootReducer = combineReducers({
    messages: messagesReducer,
    chats: chatsReducer,
    profile: profileReducer,
});

export const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);