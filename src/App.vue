<script setup>
import { RouterView } from "vue-router";
import TheHeader from "./components/templates/TheHeader.vue";
import TheFooter from "./components/templates/TheFooter.vue";
import TheMenu from "./components/home/TheMenu.vue";
</script>

<template>
  <div class="themenu"><TheMenu /></div>

  <TheHeader />
  <main>
    <RouterView />
  </main>
  <TheFooter />
</template>

<style scoped>
main {
  margin-bottom: 20px;
}
.themenu {
  z-index: 3;
  position: absolute;
  width: 50%;
  right: 0%;
  bottom: 0%;
  top: 0%;
  display: none;
}
</style>
