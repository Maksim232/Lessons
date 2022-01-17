import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import { profileReducer } from "./profile/reducer";
import { chatsReducer } from "./chats/reduce";
import { messagesReducer } from "../store/messages/reduce";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import createSagaMiddleware from 'redux-saga';
import { messageSaga } from '../store/messages/sagas';
import { articlesReducer } from "./articles/reducer";
import thunk from "redux-thunk";


const persistConfig = {
    key: "gbMessenger",
    storage,
    blacklist: ["profile"],
};

const rootReducer = combineReducers({
    messages: messagesReducer,
    chats: chatsReducer,
    profile: profileReducer,
    articles: articlesReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
    persistedReducer,
    composeEnhancers(applyMiddleware(thunk))
);

export const persistor = persistStore(store);













