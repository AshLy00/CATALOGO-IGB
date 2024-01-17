<script setup>
import CardProduct from "../components/home/CardProduct.vue";
import { ref, computed } from "vue";
import { database } from "/src/database";

const selectedSubCategory = ref(null);

const filterProducts = (subCategory) => {
  selectedSubCategory.value = subCategory;
};

const filteredDatabase = computed(() => {
  if (!selectedSubCategory.value) {
    return database;
  }

  return database.filter((p) => p.sub_category === selectedSubCategory.value);
});
</script>
<template>
  <div class="titulo"><h1>electrodomesticos</h1></div>
  <div class="filtro">
    <button @click="filterProducts('ollas freidoras')">ollas freidoras</button>
    <button @click="filterProducts('ventiladores')">ventiladores</button>
    <button @click="filterProducts('plancha')">planchas</button>
  </div>

  <div class="grid_cards">
    <CardProduct v-for="(p, i) in filteredDatabase" :key="i" :project="p" />
  </div>
</template>
<style>
.titulo {
  margin-top: 150px;
  margin-bottom: 50px;
}
.filtro {
  display: flex;
  gap: 20px;
  margin-bottom: 50px;
}
.filtro button {
  background-color: transparent;
  padding: 20px;
  border-radius: 50px;
  color: white;
  background-color: var(--color-blue);
  border-style: none;
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
