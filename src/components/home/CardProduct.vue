<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const props = defineProps(["project"]);
const router = useRouter();
const projectRef = ref(props.project);

const navigateToLink = () => {
  if (!projectRef.value.disponibilidad) {
    window.alert(
      "Este producto está agotado. ¡Pronto estará disponible de nuevo! :D"
    );
    return;
  }

  const productText = projectRef.value.product.toUpperCase();
  const link =
    "https://wa.me/3167966364/?text=" +
    encodeURIComponent(`QUIERO COMPRAR ESTE PRODUCTO: ${productText}`);
  window.location.href = link;
};
</script>
<template>
  <div
    class="card_container"
    :class="`${project.disponibilidad ? '' : 'agotado'}`"
  >
    <div class="card">
      <div class="img_container">
        <div class="no-disponible" v-if="!project.disponibilidad">
          <h1>no disponible</h1>
        </div>
        <img :src="project.images_url" alt="" />
      </div>
      <p class="product">{{ project.product }}</p>
      <p class="price">${{ project.price }}</p>
    </div>
    <button class="cart_button" @click="navigateToLink">
      <img class="cart" src="/src/images/whatsapp_icon.png" alt="" />
      <p>comprar en línea</p>
    </button>
  </div>
</template>
<style scooped>
p {
  font-weight: 300;
}
img {
  height: 100%;

  width: fit-content;
  transition-property: width;
  transition-duration: 0.5s;
}
.agotado .no-disponible {
  color: red;
  position: absolute;
  z-index: 2;
  width: 80%;
  font-size: 0.7rem;
  display: inherit;
  display: flex;
  justify-content: center;
}

.no-disponible {
  display: none;
}

.img_container {
  width: 250px;
  height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.img_container img {
  width: 90%;
  height: fit-content;
  border-radius: 10px;
  overflow: hidden;
}

.agotado img {
  filter: grayscale(100%);
}
.card_container {
  display: flex;
  flex-direction: column;
  height: 550px;
  justify-content: center;
  align-items: center;
  width: 300px;
  transition-property: width;
  transition-property: height;
  transition-duration: 0.5s;
}
.product {
  font-size: 0.9rem;
  width: 80%;
  text-align: center;
  transition-property: font-size;
  transition-duration: 0.5s;
}

.agotado .product {
  text-decoration: line-through;
  color: gray;
}
.price {
  font-size: 1.4rem;
  font-weight: bold;
  transition-property: font-size;
  transition-duration: 0.5s;
  color: var(--color-orange);
}

.agotado .price {
  text-decoration: line-through;
  color: gray;
}

.card {
  height: 550px;
  width: 100%;
  background-color: rgba(127, 255, 212, 0);
  border-radius: 20px;
  border: solid 2px #e6e6e688;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 20px;
  transition-property: width;
  transition-property: height;
  transition-duration: 0.5s;
}
.cart_button {
  width: 180px;
  height: 100px;
  border-radius: 20px;
  bottom: 6%;
  background-color: #29a71a;
  display: flex;
  align-items: center;
  font-style: italic;
  text-align: start;
  color: var(--color-white);
  border-style: none;
  padding-left: 15px;
  gap: 5px;
  font-size: 0.9rem;
  transition-property: width;
  transition-property: height;
  transition-property: font-size;
  transition-duration: 0.5s;
  cursor: pointer;
}

.agotado .cart_button {
  background-color: gray;
}
.cart_button p {
  width: 60%;
}
.cart {
  width: 50px;
  height: 50px;
  transition-property: width;
  transition-property: height;
  transition-duration: 0.5s;
}

@media screen and (max-width: 1800px) {
  .img_container {
    width: 220px;
    height: 220px;
  }
  .card_container {
    height: 520px;
    width: 270px;
  }
  .product {
    font-size: 0.8rem;
    width: 80%;
  }
  .price {
    font-size: 1.3rem;
    font-weight: bold;
  }
  .card {
    height: 400px;
    border-radius: 20px;
    border: solid 2px #e6e6e688;
    gap: 20px;
  }
  .cart_button {
    width: 150px;
    height: 80px;
    border-radius: 20px;
    bottom: 6%;
    font-size: 0.75rem;
    padding-left: 15px;
  }
  .cart_button p {
    width: 60%;
  }
  .cart {
    width: 40px;
    height: 40px;
  }
  .agotado .no-disponible {
    width: 100%;
    font-size: 0.6rem;
  }
}

@media screen and (max-width: 1090px) {
  .img_container {
    width: 200px;
    height: 200px;
  }
  .card_container {
    height: 480px;
    width: 270px;
  }
  .product {
    font-size: 0.7rem;
    width: 80%;
  }
  .price {
    font-size: 1.2rem;
    font-weight: bold;
  }
  .card {
    height: 400px;
    border-radius: 20px;
    border: solid 2px #e6e6e688;
    gap: 20px;
  }
  .cart_button {
    width: 140px;
    height: 70px;
    border-radius: 20px;
    bottom: 6%;
    padding-right: 10px;
    font-size: 0.7rem;
    padding-left: 15px;
    gap: 10px;
  }
  .cart_button p {
    width: 60%;
  }
  .cart {
    width: 30px;
    height: 30px;
  }
}

@media screen and (max-width: 690px) {
  .img_container {
    width: 150px;
    height: 150px;
  }
  .card_container {
    height: 380px;
    width: 210px;
  }
  .product {
    font-size: 0.6rem;
    width: 80%;
  }
  .price {
    font-size: 1rem;
    font-weight: bold;
  }
  .card {
    height: 380px;
    border-radius: 15px;
    border: solid 1.5px #e6e6e688;
    gap: 20px;
  }
  .cart_button {
    width: 120px;
    height: 60px;
    border-radius: 10px;
    bottom: 6%;
    padding-left: 10px;
    gap: 10px;
    padding-right: 10px;
    font-size: 0.6rem;
  }
  .cart_button p {
    width: 60%;
  }
  .cart {
    width: 25px;
    height: 25px;
  }

  .agotado .no-disponible {
    width: 100%;
    font-size: 0.5rem;
  }
}

@media screen and (max-width: 500px) {
  .img_container {
    width: 120px;
    height: 120px;
  }
  .card_container {
    height: 300px;
    width: 180px;
  }
  .product {
    font-size: 0.6rem;
    width: 85%;
  }
  .price {
    font-size: 0.9rem;
    font-weight: bold;
  }
  .card {
    height: 380px;
    border-radius: 15px;
    border: solid 1.5px #e6e6e688;
    gap: 15px;
  }
  .cart_button {
    width: 100px;
    height: 60px;
    border-radius: 10px;
    bottom: 6%;
    padding-left: 10px;
    gap: 8px;
    padding-right: 10px;
    font-size: 0.5rem;
  }
  .cart_button p {
    width: 60%;
  }
  .cart {
    width: 22px;
    height: 22px;
  }

  .agotado .no-disponible {
    width: 110%;
    font-size: 0.45rem;
  }
}

@media screen and (max-width: 430px) {
  .img_container {
    width: 100px;
    height: 100px;
  }
  .card_container {
    height: 240px;
    width: 160px;
  }
  .product {
    font-size: 0.5rem;
    width: 80%;
  }
  .price {
    font-size: 0.9rem;
    font-weight: bold;
  }
  .card {
    height: 380px;
    border-radius: 15px;
    border: solid 1.5px #e6e6e688;
    gap: 10px;
  }
  .cart_button {
    width: 90px;
    height: 70px;
    border-radius: 10px;
    bottom: 6%;
    padding-left: 10px;
    gap: 8px;
    padding-right: 5px;
    font-size: 0.45rem;
  }
  .cart_button p {
    width: 60%;
  }
  .cart {
    width: 20px;
    height: 20px;
  }

  .agotado .no-disponible {
    width: 110%;
    font-size: 0.4rem;
  }
}

@media screen and (max-width: 390px) {
  .img_container {
    width: 90px;
    height: 90px;
  }
  .card_container {
    height: 230px;
    width: 140px;
  }
  .product {
    font-size: 0.45rem;
    width: 80%;
  }
  .price {
    font-size: 0.8rem;
    font-weight: bold;
  }
  .card {
    height: 380px;
    border-radius: 15px;
    border: solid 1.5px #e6e6e688;
    gap: 10px;
  }
  .cart_button {
    width: 90px;
    height: 70px;
    border-radius: 10px;
    bottom: 6%;
    padding-left: 10px;
    gap: 8px;
    padding-right: 5px;
    font-size: 0.45rem;
  }
  .cart_button p {
    width: 60%;
  }
  .cart {
    width: 20px;
    height: 20px;
  }
  .agotado .no-disponible {
    width: 120%;
    font-size: 0.35rem;
  }
}
</style>
