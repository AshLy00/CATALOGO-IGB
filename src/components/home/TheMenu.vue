<script setup>
import { ref } from "vue";
import TheCategory from "./TheCategory.vue";

const isVisible = ref(true);
const showSubCategoria = ref(false);

const closeMenu = () => {
  isVisible.value = false;
};
const toggleSubCategoria = () => {
  showSubCategoria.value = !showSubCategoria.value;
};

const categorias = [
  {
    nombre: "electrodomésticos",
    subcategorias: [
      "ventiladores",
      "sanducheras y wafleras",
      "plancha",
      "ollas fridoras",
      "ollas de presión",
    ],
  },
  {
    nombre: "cocina",
    subcategorias: ["sartenes", "ollas", "baterias de cocina"],
  },

  {
    nombre: "salud",
  },
  {
    nombre: "aseo",
  },

  // Agrega más categorías y subcategorías según tu estructura de datos
];
</script>
<template>
  <div v-if="isVisible" class="menu_container">
    <div class="menu">
      <h1>categorías</h1>
      <button class="close" @click="closeMenu">
        <img src="/src/images/menu_icon.svg" alt="" />
      </button>
    </div>
    <div class="categorias">
      <TheCategory
        v-for="(categoria, index) in categorias"
        :key="index"
        :categoria="categoria"
      />
    </div>
  </div>
</template>
<style scooped>
.categoria_container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
}
.sub_categoria {
  width: 100%;
  padding: 10px;
  gap: 10px;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  text-align: start;
  margin-left: 30%;
  font-size: 1.1rem;
}
.flecha {
  width: 25px;
  height: 25px;
}
.categorias {
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  text-align: center;
  justify-content: center;
  width: 50%;
  gap: 30px;
  margin-top: 40px;
  margin-bottom: 40px;
}
.categoria {
  font-size: 1.1rem;
  display: flex;
  gap: 100px;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  cursor: pointer;
  font-weight: bolder;
}
.menu button {
  width: fit-content;
}

.close {
  width: 30px;
  height: 30px;
  border-style: none;
  background-color: transparent;
}
.menu_container {
  background-color: white;
  width: 700px;
  height: 100%;
  -webkit-box-shadow: -4px -4px 29px -10px rgba(0, 0, 0, 0.44);
  -moz-box-shadow: -4px -4px 29px -10px rgba(0, 0, 0, 0.44);
  box-shadow: -4px -4px 29px -10px rgba(0, 0, 0, 0.44);
  border-radius: 0px 0px 0px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.menu {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid gray;
  height: 90px;
  align-items: center;
  width: 100%;
  font-weight: 800;
}

.menu h1 {
  margin-left: 50px;
  font-weight: lighter;
  font-size: 1.5rem;
}

.menu button {
  margin-right: 50px;
}

.menu img {
  width: 100%;
  height: 100%;
}

@media screen and (max-width: 1100px) {
  .sub_categoria {
    width: 100%;
    padding: 10px;
    gap: 10px;
    font-size: 1rem;
  }
  .flecha {
    width: 25px;
    height: 25px;
  }
  .categorias {
    width: 50%;
    gap: 30px;
    margin-top: 40px;
    margin-bottom: 40px;
  }
  .categoria {
    font-size: 1rem;
    gap: 100px;
    width: 100%;
  }
  .close {
    width: 30px;
    height: 30px;
  }
  .menu_container {
    width: 600px;
    height: 100%;
  }

  .menu {
    height: 90px;
    width: 100%;
  }
  .menu h1 {
    margin-left: 50px;
    font-weight: lighter;
    font-size: 1.3rem;
  }
  .menu button {
    margin-right: 50px;
  }
}

@media screen and (max-width: 790px) {
  .sub_categoria {
    width: 100%;
    padding: 10px;
    gap: 10px;
    font-size: 0.9rem;
  }
  .flecha {
    width: 25px;
    height: 25px;
  }
  .categorias {
    width: 50%;
    gap: 30px;
    margin-top: 40px;
    margin-bottom: 40px;
  }
  .categoria {
    font-size: 0.9rem;
    gap: 100px;
    width: 100%;
  }
  .close {
    width: 25px;
    height: 25px;
  }
  .menu_container {
    width: 500px;
    height: 100%;
  }

  .menu {
    height: 80px;
    width: 100%;
  }
  .menu h1 {
    margin-left: 50px;
    font-weight: lighter;
    font-size: 1.2rem;
  }
  .menu button {
    margin-right: 50px;
  }
}

@media screen and (max-width: 650px) {
  .sub_categoria {
    width: 100%;
    padding: 10px;
    gap: 10px;
    font-size: 0.9rem;
  }
  .flecha {
    width: 20px;
    height: 20px;
  }
  .categorias {
    width: 60%;
    gap: 30px;
    margin-top: 40px;
    margin-bottom: 40px;
  }
  .categoria {
    font-size: 0.9rem;
    gap: 80px;
    width: 100%;
  }
  .close {
    width: 20px;
    height: 20px;
  }
  .menu_container {
    width: 400px;
    height: 100%;
  }

  .menu {
    height: 70px;
    width: 100%;
  }
  .menu h1 {
    margin-left: 40px;
    font-weight: lighter;
    font-size: 1.1rem;
  }
  .menu button {
    margin-right: 40px;
  }
}

@media screen and (max-width: 420px) {
  .sub_categoria {
    width: 100%;
    padding: 10px;
    gap: 10px;
    font-size: 0.8rem;
  }
  .flecha {
    width: 20px;
    height: 20px;
  }
  .categorias {
    width: 70%;
    gap: 30px;
    margin-top: 40px;
    margin-bottom: 40px;
  }
  .categoria {
    font-size: 0.8rem;
    gap: 80px;
    width: 100%;
  }
  .close {
    width: 20px;
    height: 20px;
  }
  .menu_container {
    width: 100%;
    height: 100%;
  }

  .menu {
    height: 60px;
    width: 100%;
  }
  .menu h1 {
    margin-left: 25px;
    font-weight: lighter;
    font-size: 1rem;
  }
  .menu button {
    margin-right: 25px;
  }
}
</style>
