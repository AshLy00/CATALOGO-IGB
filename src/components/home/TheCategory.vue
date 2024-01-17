<script setup>
import { ref, defineProps } from "vue";

const props = defineProps(["categoria"]);

const showSubCategoria = ref(false);

const toggleSubCategoria = () => {
  showSubCategoria.value = !showSubCategoria.value;
};
</script>

<template>
  <div class="categoria_container">
    <div class="categoria" @click="toggleSubCategoria">
      <p>{{ categoria.nombre }}</p>
      <div v-if="categoria.subcategorias" class="flecha">
        <img src="/src/images/flecha.png" alt="" />
      </div>
    </div>
    <div
      class="sub_categoria"
      v-if="showSubCategoria && categoria.subcategorias"
    >
      <p v-for="(subcategoria, index) in categoria.subcategorias" :key="index">
        {{ subcategoria }}
      </p>
    </div>
  </div>
</template>
