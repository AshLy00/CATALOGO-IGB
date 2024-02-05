<script setup>
import { RouterView } from "vue-router";
import TheHeader from "./components/templates/TheHeader.vue";
import TheFooter from "./components/templates/TheFooter.vue";
</script>

<template>
  <TheHeader />
  <main>
    <RouterView />
  </main>
  <TheFooter />
</template>

<style scoped>
main {
  margin-bottom: 130px;
}

@media screen and (max-width: 800px) {
  main {
    margin-bottom: 100px;
  }
}

@media screen and (max-width: 500px) {
  main {
    margin-bottom: 80px;
  }
}
</style>
