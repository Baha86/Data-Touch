import firebase from 'firebase/app' // doing import firebase from 'firebase' or import * as firebase from firebase is not good practice.
import 'firebase/auth'
import 'firebase/database'
import 'firebase/firestore';
import Axios from 'axios'

// Initialize Firebase
let config = {
    apiKey: "AIzaSyDyF6DacMA-m88S1cQ_H6XcY4MmL3QvtI8",
    authDomain: "datatouch-dc097.firebaseapp.com",
    databaseURL: "https://datatouch-dc097-default-rtdb.firebaseio.com",
    projectId: "datatouch-dc097",
    storageBucket: "datatouch-dc097.appspot.com",
    messagingSenderId: "924394650423",
    appId: "1:924394650423:web:26438558fb863b7a14b8b2"
}

firebase.initializeApp(config)

const db = firebase.firestore()

export { Axios, db }