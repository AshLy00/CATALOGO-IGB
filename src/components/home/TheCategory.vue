<script setup>
import { ref, defineProps } from "vue";

const { categoria } = defineProps(["categoria"]); // Deberías desestructurar la prop

const showSubCategoria = ref(false);

const toggleSubCategoria = () => {
  if (categoria.subcategorias && categoria.subcategorias.length) {
    showSubCategoria.value = !showSubCategoria.value;
  }
};
</script>

<template>
  <div class="categoria_container">
    <div class="categoria">
      <p>{{ categoria.nombre }}</p>
      <div
        v-if="categoria.subcategorias && categoria.subcategorias.length"
        class="flecha"
      >
        <img src="/src/images/flecha.png" alt="" @click="toggleSubCategoria" />
      </div>
    </div>
    <div
      class="sub_categoria"
      v-if="
        showSubCategoria &&
        categoria.subcategorias &&
        categoria.subcategorias.length
      "
    >
      <p v-for="(subcategoria, index) in categoria.subcategorias" :key="index">
        {{ subcategoria }}
      </p>
    </div>
  </div>
</template>
