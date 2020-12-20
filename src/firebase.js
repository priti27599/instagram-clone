import firebase from "firebase";
 
 // For Firebase J SDK v7.20.0 and later, measurementId is optional
const firebaseApp= firebase.initializeApp({
        apiKey: "AIzaSyAwpuO6mgRkNKGnHeN3ccRAUVPdvMMYjHs",
        authDomain: "my-instagram-clone-6c74d.firebaseapp.com",
        projectId: "my-instagram-clone-6c74d",
        storageBucket: "my-instagram-clone-6c74d.appspot.com",
        messagingSenderId: "880771682123",
        appId: "1:880771682123:web:7ee3618152b37aa190a2ce",
        measurementId: "G-D1DP83J5QE"
 });

 const db = firebaseApp.firestore();
 const auth = firebase.auth();
 const storage = firebase.storage();

 export { db, auth, storage };