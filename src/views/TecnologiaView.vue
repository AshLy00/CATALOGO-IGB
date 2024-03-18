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
  <div class="titulo"><h1>tecnología</h1></div>
  <div class="mostrar_filtro, filtro2">
    <button @click="toggleFiltersVisibility">
      {{ filtersVisible ? "Ocultar Filtros" : "Mostrar Filtros" }}
    </button>
  </div>
  <div class="filtro" v-if="filtersVisible">
    <button @click="filterProducts('xiaomi')">xiaomi</button>
    <button @click="filterProducts('memorias micro sd')">
      memorias micro sd
    </button>
    <button @click="filterProducts('samsung')">samsung</button>
    <button @click="filterProducts('iphone')">iphone</button>
    <button @click="filterProducts('motorola')">motorola</button>
    <button @click="filterProducts('usados')">celulares usados</button>
    <button @click="filterProducts('controles')">controles</button>
    <button @click="filterProducts('grabadoras')">grabadoras</button>
    <button @click="filterProducts('camaras web')">cámaras web</button>
    <button @click="filterProducts('camaras de seguridad')">
      camaras de seguridad
    </button>
    <button @click="filterProducts('repetidores de señal')">
      repetidores de señal
    </button>
    <button @click="filterProducts('audifonos')">audifonos</button>
    <button @click="filterProducts('audifonos alambricos')">
      audifonos alambricos
    </button>
    <button @click="filterProducts('adaptadores')">adaptadores</button>
    <button @click="filterProducts('radios')">radios</button>
    <button @click="filterProducts('realidad virtual')">
      realidad virtual
    </button>
    <button @click="filterProducts('combos teclado')">combos teclado</button>
    <button @click="filterProducts('cargadores')">cargadores</button>
    <button @click="filterProducts('smart watch')">smart watch</button>
    <button @click="filterProducts('accesorios para tv')">
      accesorios para tv
    </button>
    <button @click="filterProducts('cargadores portatiles')">
      cargadores portatiles
    </button>
    <button @click="filterProducts('computadores')">computadores</button>
    <button @click="filterProducts('tripodes')">tripodes</button>
    <button @click="filterProducts('mouses')">mouses</button>
    <button @click="filterProducts('mesas para laptop')">
      mesas para laptop
    </button>
    <button @click="filterProducts('consolas')">consolas</button>
    <button @click="filterProducts('parlantes')">parlantes</button>
    <button @click="filterProducts('videojuegos')">videojuegos</button>
    <button @click="filterProducts('aros de luces')">aros de luces</button>
    <button @click="showAllProducts">todo</button>
  </div>

  <div class="grid_cards">
    <CardProduct
      v-for="(p, i) in filteredDatabase"
      :key="i"
      v-show="p.category === 'tecnología'"
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
