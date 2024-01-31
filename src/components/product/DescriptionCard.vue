<script setup>
import { ref, defineProps } from "vue";

const props = defineProps(["project"]);

const capitalizeFirstLetter = (str) => {
  return str.replace(/\b\w/g, (match) => match.toUpperCase());
};

const navigateToLink = () => {
  const productText = capitalizeFirstLetter(props.project.product);
  const link =
    "https://wa.me/573167966364/?text=" +
    encodeURIComponent(
      `Hola IGB! Me gustaría comprar este producto: ${productText} ;D`
    );
  window.location.href = link;
};
</script>

<template>
  <div v-if="project" class="container_description">
    <p class="category_description">{{ project.category }}</p>
    <p class="sub_description">{{ project.sub_category }}</p>
    <div class="img_container_description">
      <img :src="project.images_url" alt="" />
    </div>
    <p class="product_description">{{ project.product }}</p>
    <p class="price_description">${{ project.price }}</p>
    <br /><br /><br />
    <h1>DESCRIPTION</h1>
    <br />

    <button class="cart_button" @click="navigateToLink">
      <img class="cart" src="/src/images/whatsapp_icon.png" alt="" />
      <p>comprar en línea</p>
    </button>
  </div>
  <div v-else>
    <p>Loading...</p>
  </div>
</template>

<style>
.container_description {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 100px;
}
.img_container_description img {
  width: 80%;
}

.img_container_description {
  width: 100%;
  display: flex;
  justify-content: center;
}
</style>
