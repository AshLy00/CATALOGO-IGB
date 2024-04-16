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
  <div class="titulo"><h1>cocina</h1></div>
  <div class="mostrar_filtro, filtro2">
    <button @click="toggleFiltersVisibility">
      {{ filtersVisible ? "Ocultar Filtros" : "Mostrar Filtros" }}
    </button>
  </div>
  <div class="filtro" v-if="filtersVisible">
    <button @click="filterProducts('ollas a presión')">ollas a presión</button>
    <button @click="filterProducts('sartenes')">sartenes</button>
    <button @click="filterProducts('woks')">woks</button>
    <button @click="filterProducts('ollas')">ollas</button>
    <button @click="filterProducts('calderos')">calderos</button>
    <button @click="filterProducts('baterias de cocina')">
      baterias de cocina
    </button>
    <button @click="filterProducts('cuchillos')">cuchillos</button>
    <button @click="filterProducts('portacomidas')">portacomidas</button>
    <button @click="filterProducts('parrillas')">parillas</button>
    <button @click="filterProducts('peroles')">peroles</button>
    <button @click="filterProducts('bowls')">bowls</button>
    <button @click="filterProducts('termos')">termos</button>
    <button @click="filterProducts('bar')">bar</button>
    <button @click="filterProducts('tablas de picar')">tablas de picar</button>
    <button @click="filterProducts('escurridor de platos')">
      escurridor de platos
    </button>
    <button @click="filterProducts('grameras')">grameras</button>
    <button @click="filterProducts('ralladores')">ralladores</button>
    <button @click="filterProducts('dispensadores')">dispensadores</button>
    <button @click="filterProducts('afiladores')">afiladores</button>
    <button @click="filterProducts('set de utensilios')">
      sets de utensilios
    </button>
    <button @click="filterProducts('contenedores')">contenedores</button>
    <button @click="filterProducts('recipientes plasticos')">
      recipientes plasticos
    </button>
    <button @click="filterProducts('jarras')">jarras</button>
    <button @click="filterProducts('sacacorchos')">sacacorchos</button>
    <button @click="filterProducts('abrelatas')">abrelatas</button>
    <button @click="filterProducts('peladores')">peladores</button>
    <button @click="filterProducts('tijeras')">tijeras</button>
    <button @click="filterProducts('coladores')">coladores</button>
    <button @click="filterProducts('utensilios')">utensilios</button>
    <button @click="filterProducts('filtros de agua')">filtros de agua</button>
    <button @click="filterProducts('refractarias')">refractarias</button>
    <button @click="filterProducts('portarollos')">portarollos</button>
    <button @click="filterProducts('martillos')">martillos</button>
    <button @click="filterProducts('cucharas heladeras')">
      cucharas heladeras
    </button>
    <button @click="filterProducts('exprimidores')">exprimidores</button>
    <button @click="filterProducts('prensas de pure')">prensas de pure</button>
    <button @click="filterProducts('cortadores pizza')">
      cortadores de pizza
    </button>
    <button @click="filterProducts('sprays')">sprays</button>
    <button @click="filterProducts('exprimidores')">exprimidores</button>
    <button @click="filterProducts('termometros digitales')">
      termometros digitales
    </button>
    <button @click="filterProducts('palas de torta')">palas de torta</button>
    <button @click="filterProducts('dispensadores de jabon')">
      dispensadores de jabon
    </button>
    <button @click="filterProducts('moledores')">moledores</button>
    <button @click="filterProducts('servilleteros')">servilleteros</button>
    <button @click="filterProducts('brochas de cocina')">
      brochas de cocina
    </button>

    <button @click="showAllProducts">todo</button>
  </div>

  <div class="grid_cards">
    <CardProduct
      v-for="(p, i) in filteredDatabase"
      :key="i"
      v-show="p.category === 'cocina'"
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
