// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD5TxgG3JQ0aufWza3tqNJalWg5hdYSFSY",
  authDomain: "news-jack.firebaseapp.com",
  projectId: "news-jack",
  storageBucket: "news-jack.appspot.com",
  messagingSenderId: "608309507302",
  appId: "1:608309507302:web:876a62051b6cd2cb7fb727",
  measurementId: "G-0W1X5JM3YB"
};
  
  // Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig);
  const analytics = firebase.analytics();
  
  const db = app.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  
  export {db, auth, provider};
  