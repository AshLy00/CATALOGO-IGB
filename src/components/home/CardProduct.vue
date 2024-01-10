<script setup>
const props = defineProps(["project"]);
</script>
<template>
  <div
    class="card_container"
    :class="`${project.disponibilidad ? '' : 'agotado'}`"
  >
    <div class="card">
      <div class="img_container">
        <div class="no-disponible">
          <h1>NO DISPONIBLE</h1>
        </div>
        <img :src="project.images_url" alt="" />
      </div>
      <p class="product">{{ project.product }}</p>
      <p class="price">${{ project.price }}</p>
    </div>
    <div class="cart_button">
      <img class="cart" src="/src/images/cart_white.svg" alt="" />
      <p>AÑADIR AL CARRITO</p>
    </div>
  </div>
</template>
<style scooped>
img {
  height: 100%;
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
  background-color: var(--color-orange);
  display: flex;
  align-items: center;
  font-style: italic;
  color: var(--color-white);
  border-style: none;
  padding-left: 20px;
  gap: 15px;
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
    padding-left: 20px;
    gap: 10px;
    font-size: 0.75rem;
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
    width: 120px;
    height: 70px;
    border-radius: 20px;
    bottom: 6%;
    padding-left: 20px;
    gap: 10px;
    padding-right: 10px;
    font-size: 0.7rem;
  }
  .cart_button p {
    width: 60%;
  }
  .cart {
    width: 30px;
    height: 30px;
  }
}

@media screen and (max-width: 720px) {
  .img_container {
    width: 150px;
    height: 150px;
  }
  .card_container {
    height: 420px;
    width: 230px;
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
    width: 100px;
    height: 60px;
    border-radius: 10px;
    bottom: 6%;
    padding-left: 20px;
    gap: 10px;
    padding-right: 10px;
    font-size: 0.7rem;
  }
  .cart_button p {
    width: 60%;
  }
  .cart {
    width: 20px;
    height: 20px;
  }
}
</style>
