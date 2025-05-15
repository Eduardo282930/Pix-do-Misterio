import { initializeApp } from "https://www.gstatic.com/firebasejs/11.7.3/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.7.3/firebase-analytics.js";

const firebaseConfig = {
  apiKey: "AIzaSyBjmlZ9tvVuolhLdcjK3cCBQ23dx5vBRJc",
  authDomain: "pix-do-misterio.firebaseapp.com",
  projectId: "pix-do-misterio",
  storageBucket: "pix-do-misterio.appspot.com",
  messagingSenderId: "771260429513",
  appId: "1:771260429513:web:2b0292fb84f501c5d00918",
  measurementId: "G-3YY5X2VRLR"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
