// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    getAuth,
} from "firebase/auth";
import { getDatabase, ref } from "firebase/database";
const firebaseConfig = {
    apiKey: "AIzaSyDEXHx21PkiKOKwH8FW_CAXtsw1ZAMXCt8",
    authDomain: "gbmess-83fe3.firebaseapp.com",
    databaseURL: "https://gbmess-83fe3-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "gbmess-83fe3",
    storageBucket: "gbmess-83fe3.appspot.com",
    messagingSenderId: "1095899474029",
    appId: "1:1095899474029:web:e31de32e196a3181ccf764"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app);

export const signUp = async (email, pass) => {
    await createUserWithEmailAndPassword(auth, email, pass);
};
export const logIn = async (email, pass) => {
    await signInWithEmailAndPassword(auth, email, pass);
};
export const logOut = async () => {
    await signOut(auth);
};

export const userRef = ref(db, "user");
export const userNameRef = ref(db, "user/name");
export const userShowNameRef = ref(db, "user/showName");
export const chatsRef = ref(db, "chats");
export const msgsRef = ref(db, "messages");
export const getChatRefById = (id) => ref(db, `chats/${id}`);
export const getMsgsRefById = (chatId) => ref(db, `messages/${chatId}`);