<script setup>
import { ref } from "vue";
const showSubCategoria = ref(false);

const toggleSubCategoria = () => {
  showSubCategoria.value = !showSubCategoria.value;
};
</script>
<template>
  <div class="categoria_container">
    <div class="categoria" @click="toggleSubCategoria">
      <p>electrodomesticos</p>
      <div class="flecha">
        <img src="/src/images/flecha.png" alt="" />
      </div>
    </div>
    <div class="sub_categoria" v-if="showSubCategoria">
      <p>ventiladores</p>
      <p>lavadoras</p>
    </div>
  </div>
</template>
