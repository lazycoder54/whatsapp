import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAj0iChW_SJDR5ySl8mnY-ipyMKssJwJtQ",

  authDomain: "whatsapp-clone-41912.firebaseapp.com",

  projectId: "whatsapp-clone-41912",

  storageBucket: "whatsapp-clone-41912.appspot.com",

  messagingSenderId: "860342539569",

  appId: "1:860342539569:web:4cf121b8cfd1cd1dee4c10",

  measurementId: "G-0ZV8PLZ2KY",
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
