<script setup>
import HeroHome from "../components/home/HeroHome.vue";
import IntroHome from "../components/home/IntroHome.vue";
import CardGrid from "../components/home/CardGrid.vue";

import { useRouter } from "vue-router";

const router = useRouter();
</script>
<template>
  <HeroHome />
  <IntroHome />
  <CardGrid />
</template>

<style scoped>
@media screen and (max-width: 1000px) {
}
</style>
