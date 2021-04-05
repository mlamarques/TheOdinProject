import firebase from 'firebase/app'
import 'firebase/database'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBQZwGGeI5T-dwS01I4d4b0s8AY_WWXquk",
    authDomain: "whereswaldo-6ffb4.firebaseapp.com",
    databaseURL: "https://whereswaldo-6ffb4-default-rtdb.firebaseio.com",
    projectId: "whereswaldo-6ffb4",
    storageBucket: "whereswaldo-6ffb4.appspot.com",
    messagingSenderId: "376957451839",
    appId: "1:376957451839:web:0c8ef7fa7e0180f217028a"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectDatabase = firebase.database()

export { projectDatabase }