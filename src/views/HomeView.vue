<script setup>
import HeroHome from "../components/home/HeroHome.vue";
import IntroHome from "../components/home/IntroHome.vue";
import CardGrid from "../components/home/CardGrid.vue";

import { useRouter } from "vue-router";

const router = useRouter();
</script>
<template>
  <div class="hero">
    <HeroHome />
  </div>
  <IntroHome />
  <CardGrid />
</template>

<style scoped>
.hero {
  margin-top: 100px;
}

@media screen and (max-width: 900px) {
  .hero {
    margin-top: 85px;
  }
}

@media screen and (max-width: 600px) {
  .hero {
    margin-top: 75px;
  }
}

@media screen and (max-width: 590px) {
  .hero {
    margin-top: 70px;
  }
}

@media screen and (max-width: 420px) {
  .hero {
    margin-top: 60px;
  }
}
</style>
