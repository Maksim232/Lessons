import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import { profileReducer } from "./profile/reducer";
import { chatsReducer } from "./chats/reduce";
import { messagesReducer } from "../store/messages/reduce";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import createSagaMiddleware from 'redux-saga';
import { messageSaga } from '../store/messages/sagas';

const persistConfig = {
    key: "gbMessenger",
    storage,
    blacklist: ['profile'],
};




const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    messages: messagesReducer,
    chats: chatsReducer,
    profile: profileReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);


const sagaMiddleware = createSagaMiddleware();


export const store = createStore(
    persistedReducer,
    composeEnhancers(applyMiddleware(sagaMiddleware))
);

export const persistor = persistStore(store);
sagaMiddleware.run(messageSaga)