<template>
  <header>
    <NavBar />
    <b-container>
      <b-row>
        <b-col sm="12" md="6" lg="6" class="flex-title">
          <b-img :src="image" alt="bikely" class="mb-3" />
        </b-col>
        <b-col sm="12" md="6" lg="6" class="flex-title">
          <h4 class="title-header">
            Imagine that you're biking and have an unexpected event. You need to
            change some piece of your bike or repair it; Bikely app shows the
            stores near your location
          </h4>
        </b-col>

      </b-row>
    </b-container>
  </header>
</template>

<script>
// @ is an alias to /src
import NavBar from "@/components/NavBar.vue";
import bikely from "./../assets/bikely.png";

export default {
  name: "home",
  data() {
    return {
      image: bikely
    };
  },
  components: {
    NavBar
  }
};
</script>
