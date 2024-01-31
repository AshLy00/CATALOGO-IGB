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
    <div class="img_container_description">
      <img :src="project.images_url" alt="" />
    </div>
    <div class="informacion">
      <p class="product_description">{{ project.product }}</p>
      <p class="price_description">${{ project.price }}</p>

      <p class="text">descripción</p>
      <p class="description_text">{{ project.description }}</p>
      <button class="cart_button_description" @click="navigateToLink">
        <img
          class="cart_description"
          src="/src/images/whatsapp_icon.png"
          alt=""
        />
        <p>comprar en línea</p>
      </button>
    </div>
  </div>
  <div v-else>
    <p>Loading...</p>
  </div>
</template>

<style>
.informacion {
  gap: 20px;
  flex-direction: column;
  display: flex;
}
.container_description {
  display: flex;
  margin-top: 150px;
  width: 100%;
  align-items: center;
  width: 80%;
  justify-content: center;
}
.img_container_description img {
  width: 500px;
  height: 500px;
}
.description_text {
  text-align: justify;
}
.text {
  font-weight: bold;
  font-size: 1.3rem;
}
.price_description {
  color: var(--color-orange);
  font-weight: bold;
  font-size: 1.5rem;
}
.description_text {
  width: 60%;
}
.cart_button_description {
  font-size: 1rem;
  height: 80px;
  width: 200px;
  padding: 20px;
  display: flex;
  align-items: center;
  background-color: #29a71a;
  color: white;
  font-style: italic;
  border: 0px;
  border-radius: 20px;
}

.cart_button_description p {
  width: 80%;
}

.cart_button_description img {
  height: 50px;
  width: 50px;
}

@media screen and (max-width: 650px) {
}
</style>
