<script setup>
import { ref, defineProps } from "vue";

const props = defineProps(["project"]);

const capitalizeFirstLetter = (str) => {
  return str.replace(/\b\w/g, (match) => match.toUpperCase());
};

const navigateToLink = () => {
  const productText = capitalizeFirstLetter(props.project.product);
  const productPrice = capitalizeFirstLetter(props.project.price);
  const link =
    "https://wa.me/573054304014/?text=" +
    encodeURIComponent(
      `Hola IGB! Me gustaría comprar este producto: ${productText} por $${productPrice} ;D`
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

        <p class="text">Descripción</p>
        <ul class="description_list">
          <li
            v-for="item in project.description.split('\n')"
            :key="item"
            style="font-size: 0.8rem"
          >
            {{ item }}
          </li>
        </ul>

        <button class="cart_button_description" @click="navigateToLink">
          <img
            class="cart_description"
            src="/src/images/whatsapp_icon.png"
            alt=""
          />
          <p>Comprar en línea</p>
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
  width: 500px;
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
  width: min-content;
  height: 100%;
}

.img_container_description {
  width: 500px;
  height: 500px;
  border-radius: 30px;
  -webkit-box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.33);
  -moz-box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.33);
  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.33);
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}
.description_text {
  text-align: justify;
  width: 85%;
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
  width: 170px;
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

@media screen and (max-width: 1250px) {
  .informacion {
    gap: 20px;
    flex-direction: column;
    display: flex;
    width: 100%;
    width: 400px;
  }
  .product_description {
    width: 100%;
    font-size: 0.9rem;
  }
  .categorias_des {
    display: flex;
    align-items: center;
    gap: 20px;
    width: 100%;
    flex-wrap: nowrap;
    font-size: 0.8rem;
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
    width: min-content;
    height: 100%;
  }

  .img_container_description {
    width: 400px;
    height: 400px;
    border-radius: 30px;
    -webkit-box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.33);
    -moz-box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.33);
    box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.33);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .description_text {
    text-align: justify;
    width: 100%;
    font-size: 0.9rem;
  }
  .text {
    font-weight: bold;
    font-size: 1rem;
  }
  .price_description {
    color: var(--color-orange);
    font-weight: bold;
    font-size: 1.3rem;
  }

  .cart_button_description {
    font-size: 1rem;
    height: 70px;
    width: 180px;
    padding: 20px;
    display: flex;
    align-items: center;
    background-color: #29a71a;
    color: white;
    font-style: italic;
    border: 0px;
    border-radius: 20px;
    gap: 10px;
  }

  .cart_button_description p {
    width: 80%;
    font-size: 0.9rem;
    text-align: start;
  }

  .cart_button_description img {
    height: 40px;
    width: 40px;
  }
}

@media screen and (max-width: 1000px) {
  .informacion {
    gap: 15px;
    flex-direction: column;
    display: flex;
    width: 100%;
    width: 300px;
  }
  .product_description {
    width: 100%;
    font-size: 0.8rem;
  }
  .categorias_des {
    display: flex;
    align-items: center;
    gap: 20px;
    width: 100%;
    flex-wrap: nowrap;
    font-size: 0.7rem;
  }
  .categoria_description {
    background-color: var(--color-orange);
    color: white;
    padding: 10px 20px;
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
    width: min-content;
    height: 100%;
  }

  .img_container_description {
    width: 300px;
    height: 300px;
    border-radius: 30px;
    -webkit-box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.33);
    -moz-box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.33);
    box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.33);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .description_text {
    text-align: justify;
    width: 100%;
    font-size: 0.7rem;
  }
  .text {
    font-weight: bold;
    font-size: 1rem;
  }
  .price_description {
    color: var(--color-orange);
    font-weight: bold;
    font-size: 1.1rem;
  }

  .cart_button_description {
    font-size: 1rem;
    height: 60px;
    width: 150px;
    padding: 20px;
    display: flex;
    align-items: center;
    background-color: #29a71a;
    color: white;
    font-style: italic;
    border: 0px;
    border-radius: 20px;
    gap: 5px;
  }

  .cart_button_description p {
    width: 80%;
    font-size: 0.8rem;
    text-align: start;
  }

  .cart_button_description img {
    height: 40px;
    width: 40px;
  }
}
@media screen and (max-width: 820px) {
  .informacion {
    gap: 10px;
    flex-direction: column;
    display: flex;
    width: 100%;
    width: 280px;
  }
  .product_description {
    width: 100%;
    font-size: 0.7rem;
  }
  .categorias_des {
    display: flex;
    align-items: center;
    gap: 20px;
    width: 100%;
    flex-wrap: nowrap;
    font-size: 0.6rem;
  }
  .categoria_description {
    background-color: var(--color-orange);
    color: white;
    padding: 10px 20px;
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
    justify-content: center;
    width: 100%;
    gap: 50px;
  }
  .img_container_description img {
    width: min-content;
    height: 100%;
  }

  .img_container_description {
    width: 250px;
    height: 250px;
    border-radius: 30px;
    -webkit-box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.33);
    -moz-box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.33);
    box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.33);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .description_text {
    text-align: justify;
    width: 100%;
    font-size: 0.6rem;
  }
  .text {
    font-weight: bold;
    font-size: 0.9rem;
  }
  .price_description {
    color: var(--color-orange);
    font-weight: bold;
    font-size: 1rem;
  }

  .cart_button_description {
    font-size: 1rem;
    height: 55px;
    width: 140px;
    padding: 20px;
    display: flex;
    align-items: center;
    background-color: #29a71a;
    color: white;
    font-style: italic;
    border: 0px;
    border-radius: 20px;
    gap: 5px;
  }

  .cart_button_description p {
    width: 90%;
    font-size: 0.7rem;
    text-align: start;
  }

  .cart_button_description img {
    height: 30px;
    width: 30px;
  }
}

@media screen and (max-width: 620px) {
  .container_description {
    display: flex;
    flex-direction: column;
    margin-top: 100px;
    gap: 20px;
  }
  .producto_container {
    justify-content: center;
    display: flex;
  }
  .informacion {
    align-items: center;
    gap: 20px;
    width: 80%;
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
    width: 300px;
    height: 300px;
    justify-content: center;
    display: flex;
  }

  .img_container_description img {
    width: fit-content;
    height: 95%;
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
    width: 100%;
    text-align: start;
  }

  .cart_button_description img {
    height: 40px;
    width: 40px;
  }
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
    width: 95%;
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
    width: 270px;
    height: 270px;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .img_container_description img {
    max-width: 500px;
    max-height: 500px;
  }

  .text {
    font-size: 1rem;
  }
  .description_text {
    font-size: 0.7rem;
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
