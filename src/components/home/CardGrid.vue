<script setup>
import CardProduct from "../home/CardProduct.vue";
import { database } from "../../database";

const shuffledProducts = database.sort(() => Math.random() - 0.5);
</script>

<template>
  <div class="grid_cards">
    <CardProduct v-for="(p, i) in shuffledProducts" :key="i" :project="p" />
  </div>
</template>

<style>
.grid_cards {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  width: 70%;
  justify-items: center;
  transition-property: width;
  transition-duration: 0.5s;
}

@media screen and (max-width: 1700px) {
  .grid_cards {
    width: 80%;
  }
}

@media screen and (max-width: 1480px) {
  .grid_cards {
    width: 70%;
    grid-template-columns: repeat(3, 1fr);
  }
}

@media screen and (max-width: 1260px) {
  .grid_cards {
    width: 85%;
  }
}

@media screen and (max-width: 1040px) {
  .grid_cards {
    width: 70%;
    grid-template-columns: repeat(2, 1fr);
  }
}

@media screen and (max-width: 880px) {
  .grid_cards {
    width: 90%;
  }
}

@media screen and (max-width: 610px) {
  .grid_cards {
    width: 95%;
  }
}
</style>
