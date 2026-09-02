// Sunrise Pádel 2.0 — Firebase client initialization
// This config identifies the Firebase project; it is not a server secret.
const firebaseConfig = {
  apiKey: "AIzaSyD0mViwKfndKe3KePleZAyUijx8apZ3lZA",
  authDomain: "sunrise-530d2.firebaseapp.com",
  projectId: "sunrise-530d2",
  storageBucket: "sunrise-530d2.firebasestorage.app",
  messagingSenderId: "827003466891",
  appId: "1:827003466891:web:dc736dac1da05cfb4f508e"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const ADMIN_EMAIL = "sunrisepadelmadrid@gmail.com";
