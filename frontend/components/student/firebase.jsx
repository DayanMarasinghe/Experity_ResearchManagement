import {initializeApp} from "firebase/app"
import {getStorage} from "firebase/storage"


const firebaseConfig = {
    apiKey: "AIzaSyDTEYV9HHfvDM1FE_0Bu0hBr9lbTo1TwFg",
    authDomain: "research-student-docs.firebaseapp.com",
    projectId: "research-student-docs",
    storageBucket: "research-student-docs.appspot.com",
    messagingSenderId: "33607994354",
    appId: "1:33607994354:web:89e1a4d413b4467559396b"
  };

const app =  initializeApp(firebaseConfig);

const storage = getStorage(app);

export { storage, app };