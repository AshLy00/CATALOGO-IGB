<script></script>
<template>
  <div class="cart_product">
    <button class="sumar_restar">+</button>
    <p class="cantidad">2</p>
    <button class="sumar_restar">-</button>
    <p class="product_name">
      set billar pool familiar 1 mesa 6 patas 38 bolas 2 tacos tripode 2
      triangulos 50x25x15 cm
    </p>
    <p class="product_price">$1.100.000</p>
    <button class="delete">
      <img src="/src/images/close.svg" alt="" />
    </button>
  </div>
</template>

<style scooped>
.cart_product {
  display: flex;
  flex-direction: row;
  padding: 10px;
  align-items: center;
  margin-right: 10px;
  margin-left: 10px;

  gap: 10px;
  font-size: 0.8rem;
  justify-content: center;
}
.product_name {
  font-size: 0.7rem;
}
.cantidad {
  font-weight: bold;
}
.sumar_restar {
  padding: 5px;
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(218, 218, 218);
  border: none;
  border-radius: 5px;
}
.delete {
  border: none;
  background-color: transparent;
}
.delete img {
  width: 18px;
}
</style>
