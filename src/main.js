import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./styles/global.css";
import "./styles/home.css";
import "./styles/login.css";
import BootstrapVue from "bootstrap-vue";
import firebase from "firebase";

Vue.use(BootstrapVue);
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.config.productionTip = false;

let app = "";

const firebaseConfig = {
  apiKey: "AIzaSyDIWpkd7z6-RQZsIWSEtjA8XaRkboaWV5Y",
  authDomain: "bikely-13472.firebaseapp.com",
  databaseURL: "https://bikely-13472.firebaseio.com",
  projectId: "bikely-13472",
  storageBucket: "bikely-13472.appspot.com",
  messagingSenderId: "922184748745",
  appId: "1:922184748745:web:2b1b28284d4ee51b5d8718",
  measurementId: "G-SKYP62KMGJ"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount("#app");
  }
});

// new Vue({
//   router,
//   store,
//   render: h => h(App)
// }).$mount("#app");
