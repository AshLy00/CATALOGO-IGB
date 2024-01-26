<script setup>
import { ref, defineProps } from "vue";
import { useRouter } from "vue-router";

const props = defineProps(["project"]);
const router = useRouter();
const projectRef = ref(props.project);
</script>
<template>
  <div class="card_container">
    <div class="card">
      <p class="price">{{ project.category }}</p>
      <p class="price">{{ project.sub_category }}</p>
      <div class="img_container">
        <img :src="project.images_url" alt="" />
      </div>
      <p class="product">{{ project.product }}</p>
      <p class="price">${{ project.description }}</p>
      <p class="price">${{ project.price }}</p>
    </div>
    <button class="cart_button" @click="navigateToLink">
      <img class="cart" src="/src/images/whatsapp_icon.png" alt="" />
      <p>comprar en línea</p>
    </button>
  </div>
</template>
