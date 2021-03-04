import Vue from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase/app'
import VCalendar from 'v-calendar';
import VueBlobJsonCsv from 'vue-blob-json-csv';
import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';
import 'bootstrap/dist/css/bootstrap.css'
import "vue-toastification/dist/index.css";
var firebaseConfig = {
  apiKey: "AIzaSyBP5CCdYa7v8tomOfE0Yj04huNJ7Ar7vvU",
  authDomain: "wallet-49d18.firebaseapp.com",
  projectId: "wallet-49d18",
  storageBucket: "wallet-49d18.appspot.com",
  messagingSenderId: "358130182735",
  appId: "1:358130182735:web:38d723d96e63f266e1983a",
  measurementId: "G-MZN4GPN262"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
Vue.config.productionTip = false
Vue.use(VueBlobJsonCsv)
Vue.use(VueToast);
Vue.use(VCalendar, {
  componentPrefix: 'vc',
});


//initialize firebase
let app;
firebase.auth().onAuthStateChanged(async user => {
  if (!app) {
    console.log(user)
    await firebase.auth().currentUser;
    app = new Vue({
      router,
      render: h => h(App)
    }).$mount("#app");
  }
});

