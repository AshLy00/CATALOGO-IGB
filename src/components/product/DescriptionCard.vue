<script setup>
import { ref, defineProps } from "vue";

const props = defineProps(["project"]);

const capitalizeFirstLetter = (str) => {
  return str.replace(/\b\w/g, (match) => match.toUpperCase());
};

const navigateToLink = () => {
  const productText = capitalizeFirstLetter(props.project.product);
  const link =
    "https://wa.me/573054304014/?text=" +
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
    <div class="producto_container">
      <div class="informacion">
        <div class="categorias_des">
          <p class="categoria_description">{{ project.category }}</p>
          <p class="sub_description">{{ project.sub_category }}</p>
        </div>
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
  width: 100%;
}
.product_description {
  width: 60%;
}
.categorias_des {
  display: flex;
  align-items: center;
  gap: 20px;
  width: 100%;
  flex-wrap: wrap;
}
.categoria_description {
  background-color: var(--color-orange);
  color: white;
  padding: 13px 20px;
  width: max-content;
  display: flex;
  justify-content: center;
  border-radius: 30px;
}
.sub_description {
  width: 100%;
  border: solid 2px var(--color-orange);
  padding: 10px 20px;
  color: var(--color-orange);
  text-align: center;
  width: max-content;
  border-radius: 30px;
}
.container_description {
  display: flex;
  margin-top: 150px;
  align-items: center;
  width: fit-content;
  justify-content: center;
  width: 100%;
  gap: 70px;
}
.img_container_description img {
  width: 100%;
  height: 100%;
}

.img_container_description {
  width: fit-content;
  height: fit-content;
  border-radius: 30px;
  -webkit-box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.33);
  -moz-box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.33);
  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.33);
  overflow: hidden;
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
@media screen and (max-width: 1000px) {
}
@media screen and (max-width: 500px) {
  .container_description {
    display: flex;
    flex-direction: column;
    margin-top: 100px;
    gap: 20px;
  }
  .informacion {
    align-items: center;
    gap: 20px;
  }

  .product_description {
    width: 100%;
    text-align: center;
    font-size: 0.8rem;
  }
  .price_description {
    font-size: 1.2rem;
  }

  .img_container_description {
    width: fit-content;
    height: fit-content;
    justify-content: center;
    display: flex;
  }

  .img_container_description img {
    height: 50%;
  }
  .text {
    font-size: 1.1rem;
  }
  .description_text {
    font-size: 0.8rem;
  }

  .categorias_des {
    align-items: center;
    gap: 10px;
    width: 100%;
    justify-content: center;
    font-size: 0.6rem;
  }

  .cart_button_description {
    font-size: 0.8rem;
    justify-content: center;
    height: 70px;
    width: 150px;
    padding: 15px;
    display: flex;
    align-items: center;
    background-color: #29a71a;
    color: white;
    font-style: italic;
    border: 0px;
    border-radius: 20px;
    gap: 5px;
    margin-top: 10px;
  }

  .cart_button_description p {
    width: 80%;
    text-align: start;
  }

  .cart_button_description img {
    height: 40px;
    width: 40px;
  }
}
</style>
