<script setup>
import CardProduct from "../components/home/CardProduct.vue";
import { ref, computed } from "vue";
import { database } from "/src/database";

const selectedSubCategory = ref(null);
const filtersVisible = ref(false); // Inicialmente los filtros están ocultos

const filterProducts = (subCategory) => {
  selectedSubCategory.value = subCategory;
};

const showAllProducts = () => {
  selectedSubCategory.value = null;
};

const toggleFiltersVisibility = () => {
  filtersVisible.value = !filtersVisible.value;
};

const filteredDatabase = computed(() => {
  if (!selectedSubCategory.value) {
    return database;
  }

  return database.filter((p) => p.sub_category === selectedSubCategory.value);
});
</script>

<template>
  <div class="titulo"><h1>jugueteria</h1></div>
  <div class="mostrar_filtro, filtro2">
    <button @click="toggleFiltersVisibility">
      {{ filtersVisible ? "Ocultar Filtros" : "Mostrar Filtros" }}
    </button>
  </div>
  <div class="filtro" v-if="filtersVisible">
    <button @click="filterProducts('tableros')">tableros</button>
    <button @click="filterProducts('bebes')">bebes</button>
    <button @click="filterProducts('didactico')">didactico</button>
    <button @click="filterProducts('pistas de carros')">
      pistas de carros
    </button>
    <button @click="filterProducts('muñecas')">muñecas</button>
    <button @click="filterProducts('carpas')">carpas</button>
    <button @click="filterProducts('armatodos')">armatodos</button>
    <button @click="filterProducts('juegos de mesa')">juegos de mesa</button>
    <button @click="filterProducts('tocadores de juguete')">
      tocadores de juguete
    </button>
    <button @click="filterProducts('triciclos')">triciclos</button>
    <button @click="filterProducts('patinetas')">patinetas</button>
    <button @click="filterProducts('sillas')">sillas</button>
    <button @click="filterProducts('instrumentos musicales')">
      instrumentos musicales
    </button>
    <button @click="filterProducts('sets de muñecas')">sets de muñecas</button>
    <button @click="filterProducts('montables')">montables</button>
    <button @click="filterProducts('set de juego')">set de juego</button>
    <button @click="filterProducts('deslizaderos')">deslizaderos</button>
    <button @click="filterProducts('cunas de juguete')">
      cunas de juguete
    </button>
    <button @click="filterProducts('dinosaurios')">dinosaurios</button>
    <button @click="filterProducts('camiones')">camiones</button>
    <button @click="filterProducts('cocinas de juguete')">
      cocinas de juguete
    </button>
    <button @click="filterProducts('carros a control remoto')">
      carros a control remoto
    </button>
    <button @click="showAllProducts">todo</button>
  </div>

  <div class="grid_cards">
    <CardProduct
      v-for="(p, i) in filteredDatabase"
      :key="i"
      v-show="p.category === 'jugueteria'"
      :project="p"
    />
  </div>
</template>
<style>
.titulo {
  margin-top: 150px;
  margin-bottom: 40px;
  font-size: 1rem;
}
.filtro {
  display: flex;
  gap: 20px;
  margin-bottom: 40px;
  width: 80%;
  justify-content: center;
  flex-wrap: wrap;
}
.filtro button {
  background-color: transparent;
  padding: 20px;
  border-radius: 50px;
  color: white;
  background-color: var(--color-blue);
  border-style: none;
  font-size: 0.9rem;
}

.filtro2 {
  display: flex;
  gap: 20px;
  margin-bottom: 40px;
  width: 80%;
  justify-content: center;
  flex-wrap: wrap;
}
.filtro2 button {
  background-color: transparent;
  padding: 20px;
  border-radius: 50px;
  color: white;
  background-color: var(--color-orange);
  border-style: none;
  font-size: 0.9rem;
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
  .titulo {
    margin-top: 150px;
    margin-bottom: 30px;
    font-size: 1rem;
  }
  .filtro {
    display: flex;
    gap: 20px;
    margin-bottom: 20px;
  }
  .filtro button {
    background-color: transparent;
    padding: 20px;
    border-radius: 50px;
    color: white;
    background-color: var(--color-blue);
    border-style: none;
    font-size: 0.8rem;
  }

  .filtro2 {
    display: flex;
    gap: 20px;
    margin-bottom: 20px;
  }
  .filtro2 button {
    background-color: transparent;
    padding: 20px;
    border-radius: 50px;
    color: white;
    background-color: var(--color-orange);
    border-style: none;
    font-size: 0.8rem;
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

  .titulo {
    margin-top: 150px;
    margin-bottom: 30px;
    font-size: 1rem;
  }
  .filtro {
    display: flex;
    gap: 20px;
    margin-bottom: 30px;
  }
  .filtro button {
    background-color: transparent;
    padding: 20px;
    border-radius: 50px;
    color: white;
    background-color: var(--color-blue);
    border-style: none;
    font-size: 0.7rem;
  }

  .filtro2 {
    display: flex;
    gap: 20px;
    margin-bottom: 30px;
  }
  .filtro2 button {
    background-color: transparent;
    padding: 20px;
    border-radius: 50px;
    color: white;
    background-color: var(--color-orange);
    border-style: none;
    font-size: 0.7rem;
  }
}

@media screen and (max-width: 880px) {
  .grid_cards {
    width: 90%;
  }
}

@media screen and (max-width: 690px) {
  .grid_cards {
    width: 70%;
    grid-template-columns: repeat(2, 1fr);
  }

  .titulo {
    margin-top: 130px;
    margin-bottom: 30px;
    font-size: 0.8rem;
  }
  .filtro {
    display: flex;
    gap: 10px;
    margin-bottom: 30px;
  }
  .filtro button {
    background-color: transparent;
    padding: 15px;
    border-radius: 50px;
    color: white;
    background-color: var(--color-blue);
    border-style: none;
    font-size: 0.6rem;
  }
  .filtro2 {
    display: flex;
    gap: 10px;
    margin-bottom: 30px;
  }
  .filtro2 button {
    background-color: transparent;
    padding: 15px;
    border-radius: 50px;
    color: white;
    background-color: var(--color-orange);
    border-style: none;
    font-size: 0.6rem;
  }
}

@media screen and (max-width: 500px) {
  .grid_cards {
    width: 70%;
    grid-template-columns: repeat(2, 1fr);
  }

  .titulo {
    margin-top: 130px;
    margin-bottom: 30px;
    font-size: 0.7rem;
  }
  .filtro {
    display: flex;
    gap: 10px;
    margin-bottom: 30px;
    width: 90%;
  }
  .filtro button {
    background-color: transparent;
    padding: 15px;
    border-radius: 50px;
    color: white;
    background-color: var(--color-blue);
    border-style: none;
    font-size: 0.5rem;
  }
  .filtro2 {
    display: flex;
    gap: 10px;
    margin-bottom: 30px;
    width: 90%;
  }
  .filtro2 button {
    background-color: transparent;
    padding: 15px;
    border-radius: 50px;
    color: white;
    background-color: var(--color-orange);
    border-style: none;
    font-size: 0.5rem;
  }
}

@media screen and (max-width: 610px) {
  .grid_cards {
    width: 95%;
  }

  .titulo {
    margin-top: 110px;
    margin-bottom: 30px;
    font-size: 0.7rem;
  }
  .filtro {
    display: flex;
    gap: 10px;
    margin-bottom: 30px;
    width: 90%;
  }
  .filtro button {
    background-color: transparent;
    padding: 10px;
    border-radius: 50px;
    color: white;
    background-color: var(--color-blue);
    border-style: none;
    font-size: 0.5rem;
  }
  .filtro2 {
    display: flex;
    gap: 10px;
    margin-bottom: 30px;
    width: 90%;
  }
  .filtro2 button {
    background-color: transparent;
    padding: 10px;
    border-radius: 50px;
    color: white;
    background-color: var(--color-orange);
    border-style: none;
    font-size: 0.5rem;
  }
}
</style>
