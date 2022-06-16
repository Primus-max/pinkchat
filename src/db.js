import { initializeApp } from 'firebase/app';
import { getDatabase } from "firebase/database";

const config = {
    // API KEY
    apiKey: "AIzaSyASIBx_e6xrEayoAz0GJaKlO4h5KjcR4KM",
    authDomain: "pinkchatvue.firebaseapp.com",
    projectId: "pinkchatvue",
    storageBucket: "pinkchatvue.appspot.com",
    messagingSenderId: "877642650425",
    appId: "1:877642650425:web:dc72d6c06fb762e3c78ee8"
}

const db = initializeApp(config);

// Get a reference to the database service
 const database = getDatabase(db);
export default database

