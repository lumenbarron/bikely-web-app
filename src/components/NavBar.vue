<template>
  <b-navbar toggleable="lg" type="dark" variant="transparent">
    <b-navbar-brand href="#">
      <b-img :src="image" alt="logo" />
    </b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav class="flex-nav">
      <b-navbar-nav>
        <b-nav-item :to="{ name: 'login' }">
          <b-button variant="light" size="lg">Log in</b-button>
        </b-nav-item>
        <b-nav-item :to="{ name: 'signup' }">
          <b-button variant="outline-light" size="lg">Sign up</b-button>
        </b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
import logo from "./../assets/logo.png";

export default {
  data() {
    return {
      image: logo
    };
  }
};
</script>

<style lang="scss"></style>
