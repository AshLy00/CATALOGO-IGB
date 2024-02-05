<script setup>
import CardProduct from "../home/CardProduct.vue";
import { database } from "../../database";
import { useRouter } from "vue-router";
import { ref, computed } from "vue";

const router = useRouter();
const allProducts = database;
const shuffledProducts = ref(allProducts.sort(() => Math.random() - 0.5));
const visibleProducts = ref(shuffledProducts.value.slice(0, 20));

const goToDescription = (projectId) => {
  // Use router.push to navigate to the description view with the correct projectId
  router.push({ name: "description", params: { projectId } });
};

const loadMoreProducts = () => {
  const remainingProducts = shuffledProducts.value.slice(
    visibleProducts.value.length,
    visibleProducts.value.length + 20
  );
  visibleProducts.value = [...visibleProducts.value, ...remainingProducts];
};

const allProductsShown = computed(
  () => visibleProducts.value.length === shuffledProducts.value.length
);
</script>

<template>
  <div class="grid_cards">
    <CardProduct v-for="(p, i) in visibleProducts" :key="i" :project="p" />
  </div>
  <button v-if="!allProductsShown" class="button" @click="loadMoreProducts">
    ver más :D
  </button>
</template>
<style>
.button {
  margin-top: 20px;
  border-radius: 20px;
  padding: 7px;
  width: 160px;
  border: none;
  background-color: var(--color-orange);
  color: white;
  font-size: 0.7rem;
}
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
