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
    <div class="line"></div>
    <p class="product_description">{{ project.product }}</p>
    <p class="price_description">${{ project.price }}</p>
    <div class="line"></div>
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
  <div v-else>
    <p>Loading...</p>
  </div>
</template>

<style>
.line {
  width: 70%;
  height: 1px;
  background-color: var(---color-grey);
  border-radius: 100%;
}
.container_description {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  padding: 100px;
  gap: 20px;
  margin-top: 60px;
}

.product_description {
  width: 60%;
  text-align: center;
}

.description_text {
  width: 65%;
  text-align: justify;
}
.text,
.category_description,
.sub_description {
  font-weight: bold;
  font-size: 1.3rem;
}

.price_description {
  color: var(--color-orange);
  font-weight: bold;
  font-size: 1.5rem;
}

.img_container_description img {
  width: 100%;
  height: 100%;
}

.img_container_description {
  width: fit-content;
  height: fit-content;
  display: flex;
  justify-content: center;
  margin: 10px;
}

.cart_button_description {
  font-size: 1rem;
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
</style>
