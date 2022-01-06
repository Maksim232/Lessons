import { takeLatest, delay, put } from 'redux-saga/effects';
import { AUTHORS } from '../../components/utils/constants';

import { addMessage, ADD_MESSAGE } from './actions';


function* onAddMessage({ payload: { message, chatId } }) {
    if (message.author !== AUTHORS.BOT) {
        yield delay(1500);

        yield put(addMessage(
            {
                text: "iambot",
                author: AUTHORS.BOT,
                id: `msg-${Date.now()}`,
            },
            chatId
        ))
    }
}

export function* messageSaga() {
    yield takeLatest(ADD_MESSAGE, onAddMessage)
}