<script setup>
import { ref, computed, onMounted } from "vue";

const selectedProject = ref(null);

// Check if selectedProject is not null before accessing its properties
const SelectedProject = computed(() => {
  return selectedProject.value || {};
});
</script>

<template>
  <div v-if="SelectedProject" class="container_description">
    <div class="card_description">
      <p class="price_description">{{ SelectedProject.category }}</p>
      <p class="price_description">{{ SelectedProject.sub_category }}</p>
      <div class="img_container_description">
        <img :src="SelectedProject.images_url" alt="" />
      </div>
      <p class="product_description">{{ SelectedProject.product }}</p>
      <p class="price_description">${{ SelectedProject.price }}</p>
      <br /><br /><br />
      <h1>DESCRIPTION</h1>
      <br />

      <button class="cart_button" @click="navigateToLink">
        <img class="cart" src="/src/images/whatsapp_icon.png" alt="" />
        <p>comprar en línea</p>
      </button>
    </div>
  </div>
  <div v-else>
    <p>Loading...</p>
  </div>
</template>
