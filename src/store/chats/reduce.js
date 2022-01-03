import { ADD_CHAT, DELETE_CHAT, SET_NAME, SHOW_NAME } from "./actions";

const initialState = [];

export const chatsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CHAT:
            return [...state, action.payload];
        case DELETE_CHAT:
            return state.filter((chat) => chat.id !== action.payload);
        default:
            return state;
    }
};