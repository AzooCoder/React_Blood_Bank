import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyD8PVT5iAnMO-ULHyP-wnRayVDSKqOoYXQ",
    authDomain: "blood-bank-system-74a01.firebaseapp.com",
    databaseURL: "https://blood-bank-system-74a01.firebaseio.com",
    storageBucket: "blood-bank-system-74a01.appspot.com",
    messagingSenderId: "213787217974"
};

firebase.initializeApp(config);
export const database = firebase.database();

export const storage = firebase.storage();

export const fbAuth = firebase.auth();
 