import { createApp } from 'vue'
import App from './App.vue'
import './assets/style.scss'
import db from "@/db";


// Firebase

// import firebase from 'firebase/compat/app'
// import 'firebase/compat/database'
//
// const config = {
//     // API KEY
//     apiKey: "AIzaSyASIBx_e6xrEayoAz0GJaKlO4h5KjcR4KM",
//     authDomain: "pinkchatvue.firebaseapp.com",
//     projectId: "pinkchatvue",
//     storageBucket: "pinkchatvue.appspot.com",
//     messagingSenderId: "877642650425",
//     appId: "1:877642650425:web:dc72d6c06fb762e3c78ee8"
// }
//
// firebase.initializeApp(config);

const app = createApp(App)

app.mount('#app')
