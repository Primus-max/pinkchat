import firebase from 'firebase/compat/app'
import 'firebase/compat/database'

const config = {
    // API KEY
    apiKey: "AIzaSyDHdL8NVWv_1Cq2Lv1OUkhQs1GujmZf2SQ",
    authDomain: "pinkchat-1586c.firebaseapp.com",
    projectId: "pinkchat-1586c",
    storageBucket: "pinkchat-1586c.appspot.com",
    messagingSenderId: "1026282391388",
    appId: "1:1026282391388:web:25fb738676b1913d54a399"
}

const db = firebase.initializeApp(config)

export default db

