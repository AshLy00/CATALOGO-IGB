<script setup>
import CardProduct from "../home/CardProduct.vue";
</script>
<template>
  <div class="grid_cards">
    <CardProduct />
    <CardProduct />
    <CardProduct />
    <CardProduct />
    <CardProduct />
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
</style>
