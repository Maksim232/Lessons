import { SET_NAME, SHOW_NAME, showName } from "./actions";

const initialState = {
    name: "default name",
    toggleName: true,
};

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_NAME:
            return {
                ...state,
                toggleName: !state.toggleName,
            };
        case SET_NAME:
            return {
                ...state,
                name: action.payload,
            };
        default:
            return state;
    }
};