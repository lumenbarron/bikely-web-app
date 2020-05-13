<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="transparent">
      <b-navbar-brand :to="{ name: 'home' }">
        <b-img :src="image" alt="logo" />
      </b-navbar-brand>
      <b-navbar-nav class="flex-nav">
        <b-nav-item :to="{ name: 'login' }">
          <b-button variant="outline-light" size="lg">Log in</b-button>
        </b-nav-item>
      </b-navbar-nav>
    </b-navbar>
    <b-container>
      <b-row class="flex-column">
        <h2 class="title-header mb-4">Sign Up</h2>
        <b-row class="w-50 mb-3">
          <b-form-input
            v-model="email"
            placeholder="Enter your email"
          ></b-form-input>
        </b-row>
        <b-row class="w-50 mb-3">
          <b-form-input
            v-model="password"
            placeholder="Enter your password ( more than 6 characters )"
          ></b-form-input>
        </b-row>
        <b-button variant="outline-success" @click="signUp" size="lg"
          >Create</b-button
        >
        <p class="title-header mt-5">
           If you have an account, just
          <router-link to="/login"> log in</router-link>
        </p>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import logo from "./../assets/logo.png";
import firebase from "firebase";

export default {
  name: "sign-up",
  data() {
    return {
      image: logo,
      email: "",
      password: ""
    };
  },
  methods: {
    signUp() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(() => {
          this.$router.replace("/about");
          /* eslint-disable no-console */
          alert("Your account has been created!");
        }),
        err => {
          alert("We have an error" + err.message);
        };
    }
  }
};
</script>

<style></style>
