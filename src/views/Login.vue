<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="transparent">
      <b-navbar-brand :to="{ name: 'home' }">
        <b-img :src="image" alt="logo" />
      </b-navbar-brand>
      <b-navbar-nav class="flex-nav">
        <b-nav-item :to="{ name: 'signup' }">
          <b-button variant="outline-light" size="lg">Sign up</b-button>
        </b-nav-item>
      </b-navbar-nav>
    </b-navbar>
    <b-container>
      <b-row class="flex-column">
        <h2 class="title-header mb-4">Log In</h2>
        <b-row class="w-50 mb-3">
          <b-form-input
            v-model="email"
            placeholder="Enter your email"
          ></b-form-input>
        </b-row>
        <b-row class="w-50 mb-3">
          <b-form-input
            v-model="password"
            placeholder="Enter your password"
          ></b-form-input>
        </b-row>
        <b-button variant="outline-success" @click="login" size="lg"
          >Let's go</b-button
        >
        <p class="title-header mt-5">
          You don't have an account ? You can
          <router-link to="/signup"> create one here </router-link>
        </p>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import logo from "./../assets/logo.png";
import firebase from "firebase";

export default {
  name: "login",
  data() {
    return {
      image: logo,
      email: "",
      password: ""
    };
  },
  methods: {
    login() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(user => {
          this.$router.replace("/about");
          /* eslint-disable no-console */
          console.log('user', user)
          alert("Your are connected");
        }),
        err => {
          alert("We have an error" + err.message);
        };
    }
  }
};
</script>

<style></style>
