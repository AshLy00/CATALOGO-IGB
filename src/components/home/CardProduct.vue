<script setup></script>
<template>
  <div class="card_container">
    <div class="card">
      <div class="img_container">
        <img src="/public/olla.jpg" alt="" />
      </div>
      <p class="product">LAVADORA SEMIAUTOMATICA 12 LITROS KALLEY</p>
      <p class="price">$1.100.000</p>
    </div>
    <div class="cart_button">
      <img class="cart" src="cart_white.svg" alt="" />
      <p>AÑADIR AL CARRITO</p>
    </div>
  </div>
</template>
<style scooped>
img {
  width: 100%;
  transition-property: width;
  transition-duration: 0.5s;
}

.img_container {
  width: 250px;
  height: 250px;
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
.price {
  font-size: 1.4rem;
  font-weight: bold;
  transition-property: font-size;
  transition-duration: 0.5s;
}
.card {
  height: 550px;
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
</style>
