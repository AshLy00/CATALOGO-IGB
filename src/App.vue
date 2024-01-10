<script setup>
import { RouterView } from "vue-router";
import TheHeader from "./components/templates/TheHeader.vue";
import TheFooter from "./components/templates/TheFooter.vue";
</script>

<template>
  <TheHeader />
  <main>
    <RouterView />
    <h1>NO SIRVEEEE</h1>
  </main>
  <TheFooter />
</template>

<style scoped>
main {
  margin-bottom: 20px;
}
</style>
