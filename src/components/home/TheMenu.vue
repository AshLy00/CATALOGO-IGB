<script setup>
import { ref, defineProps } from "vue";
import TheCategory from "./TheCategory.vue";

const showSubCategoria = ref(false);
const props = defineProps(["categoria"]);

const primeraCategoria = {
  nombre: "electrodomésticos",
};
const segundaCategoria = {
  nombre: "cocina",
};
const terceraCategoria = {
  nombre: "salud",
};
const cuartaCategoria = {
  nombre: "cristaleria",
};
const quintaCategoria = {
  nombre: "tecnologia",
};
const sextaCategoria = {
  nombre: "piscinas y accesorios",
};
const septimaCategoria = {
  nombre: "jardineria",
};
const octavaCategoria = {
  nombre: "hogar",
};
const novenaCategoria = {
  nombre: "jugueteria",
};
const decimaCategoria = {
  nombre: "aseo",
};

const toggleSubCategoria = () => {
  if (primeraCategoria.subcategorias && primeraCategoria.subcategorias.length) {
    showSubCategoria.value = !showSubCategoria.value;
  }
  if (segundaCategoria.subcategorias && segundaCategoria.subcategorias.length) {
    showSubCategoria.value = !showSubCategoria.value;
  }
  if (terceraCategoria.subcategorias && terceraCategoria.subcategorias.length) {
    showSubCategoria.value = !showSubCategoria.value;
  }
  if (cuartaCategoria.subcategorias && cuartaCategoria.subcategorias.length) {
    showSubCategoria.value = !showSubCategoria.value;
  }
  if (quintaCategoria.subcategorias && quintaCategoria.subcategorias.length) {
    showSubCategoria.value = !showSubCategoria.value;
  }
  if (sextaCategoria.subcategorias && sextaCategoria.subcategorias.length) {
    showSubCategoria.value = !showSubCategoria.value;
  }
  if (septimaCategoria.subcategorias && septimaCategoria.subcategorias.length) {
    showSubCategoria.value = !showSubCategoria.value;
  }
  if (octavaCategoria.subcategorias && octavaCategoria.subcategorias.length) {
    showSubCategoria.value = !showSubCategoria.value;
  }
  if (novenaCategoria.subcategorias && novenaCategoria.subcategorias.length) {
    showSubCategoria.value = !showSubCategoria.value;
  }
  if (decimaCategoria.subcategorias && decimaCategoria.subcategorias.length) {
    showSubCategoria.value = !showSubCategoria.value;
  }
};
</script>
<template>
  <div class="menu_container">
    <div class="menu">
      <h1>categorías</h1>
      <button class="close" @click="$emit('close')">
        <img src="/src/images/menu_icon.svg" alt="" />
      </button>
    </div>
    <div class="categorias">
      <TheCategory
        :categoria="primeraCategoria"
        @click="$router.push({ name: 'electrodomesticos' }), $emit('close')"
      />
      <TheCategory
        :categoria="segundaCategoria"
        @click="$router.push({ name: 'cocina' }), $emit('close')"
      />
      <TheCategory
        :categoria="terceraCategoria"
        @click="$router.push({ name: 'salud' }), $emit('close')"
      />
      <TheCategory
        :categoria="cuartaCategoria"
        @click="$router.push({ name: 'cristaleria' }), $emit('close')"
      />
      <TheCategory
        :categoria="quintaCategoria"
        @click="$router.push({ name: 'tecnologia' }), $emit('close')"
      />
      <TheCategory
        :categoria="sextaCategoria"
        @click="$router.push({ name: 'piscinas y accesorios' }), $emit('close')"
      />
      <TheCategory
        :categoria="septimaCategoria"
        @click="$router.push({ name: 'jardineria' }), $emit('close')"
      />
      <TheCategory
        :categoria="octavaCategoria"
        @click="$router.push({ name: 'hogar' }), $emit('close')"
      />
      <TheCategory
        :categoria="novenaCategoria"
        @click="$router.push({ name: 'jugueteria' }), $emit('close')"
      />
      <TheCategory
        :categoria="decimaCategoria"
        @click="$router.push({ name: 'aseo' }), $emit('close')"
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
  transition-property: width;
  transition-duration: 0.5s;
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
  transition-property: font-size;
  transition-duration: 0.5s;
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
  transition-property: font-size;
  transition-duration: 0.5s;
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
  transition-property: font-size;
  transition-duration: 0.5s;
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
