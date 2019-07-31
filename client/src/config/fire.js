import firebase from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyCh-9f5daxbWWAGnDSmowA6RoNvyNiOjWE",
    authDomain: "pattern-dating-tool.firebaseapp.com",
    databaseURL: "https://pattern-dating-tool.firebaseio.com",
    projectId: "pattern-dating-tool",
    storageBucket: "",
    messagingSenderId: "695422129212",
    appId: "1:695422129212:web:de35a49f476a66d1"
  };

  const fire = firebase.initializeApp(firebaseConfig);
  export default fire;