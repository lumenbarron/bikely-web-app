<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="transparent">
      <b-navbar-brand :to="{ name: 'home' }">
        <b-img :src="image" alt="logo" />
      </b-navbar-brand>
      <b-navbar-nav class="flex-nav">
        <b-nav-item>
          <b-button @click="logout" variant="outline-warning" size="lg"
            >Log out</b-button
          >
        </b-nav-item>
      </b-navbar-nav>
    </b-navbar>
    <h2 class="title-header mb-4">Stores Dowtown Zone</h2>

    <b-container fluid class="cont-stores">
      <b-card
        no-body
        v-for="store in stores"
        :key="store.name"
        :img-src="store.imageAtelier"
        :img-alt="store.imageAtelier"
        img-height="300"
        img-top
        class="card-stores m-2"
      >
        <b-card-body>
          <b-card-title>{{ store.name }}</b-card-title>
          <b-card-text>
            {{ store.ubication }}
          </b-card-text>
        </b-card-body>

        <b-list-group flush>
          <b-list-group-item>{{ store.number }} </b-list-group-item>
          <b-list-group-item>{{ store.horario }} </b-list-group-item>
        </b-list-group>
      </b-card>
    </b-container>
  </div>
</template>

<script>
import logo from "./../assets/logo.png";
import firebase from "firebase";
import axios from "axios";

export default {
  name: "about",
  data() {
    return {
      image: logo,
      stores: ""
    };
  },
  mounted() {
    axios
      .get("https://5df3fc41f9e7ae0014801757.mockapi.io/zona-centro")
      .then(response => (this.stores = response.data));
  },
  methods: {
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          alert("saliendo");
          this.$router.replace("/");
        });
    }
  }
};
</script>

<style lang="scss">
.cont-stores {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.card-stores {
  max-height: 540px;
  max-width: 400px;
}
</style>
