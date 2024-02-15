<script setup>
import { defineProps } from "vue";

// Props recibidos desde el componente padre
const props = defineProps(["cartItems"]);

// Función para eliminar un producto del carrito
const removeFromCart = (index) => {
  props.cartItems.splice(index, 1);
};

// Función para aumentar la cantidad de un producto en el carrito
const increaseQuantity = (index) => {
  props.cartItems[index].quantity++;
};

// Función para disminuir la cantidad de un producto en el carrito
const decreaseQuantity = (index) => {
  if (props.cartItems[index].quantity > 1) {
    props.cartItems[index].quantity--;
  } else {
    // Si la cantidad es 1 o menos, se elimina el producto del carrito
    removeFromCart(index);
  }
};
</script>

<template>
  <div
    class="cart_product"
    v-for="(item, index) in props.cartItems"
    :key="index"
  >
    <button class="sumar" @click="increaseQuantity(index)">+</button>
    <p class="cantidad">{{ item.quantity }}</p>
    <button class="restar" @click="decreaseQuantity(index)">−</button>
    <p class="product_name">{{ item.product }}</p>
    <p class="product_price">${{ item.price.toLocaleString() }}</p>
    <button class="delete" @click="removeFromCart(index)">
      <img src="/src/images/close.svg" alt="" />
    </button>
  </div>
</template>

<style scoped>
.cart_product {
  display: flex;
  flex-direction: row;
  padding: 10px;
  align-items: center;
  margin-right: 5px;
  margin-left: 5px;
  gap: 20px;
  font-size: 1rem;
  justify-content: center;
  border-bottom: 1px solid rgb(221, 221, 221);
  padding: 15px;
}
.product_name {
  font-size: 0.9rem;
  width: 40%;
}

.cantidad {
  font-weight: bold;
  font-size: 1.5rem;
}
.sumar,
.restar {
  padding: 13px;
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(218, 218, 218);
  border: none;
  border-radius: 5px;
  font-size: 1.2rem;
}
.delete {
  border: none;
  background-color: transparent;
}
.delete img {
  width: 20px;
}

@media screen and (max-width: 650px) {
  .cart_product {
    display: flex;
    flex-direction: row;
    padding: 10px;
    align-items: center;
    margin-right: 5px;
    margin-left: 5px;
    gap: 12px;
    font-size: 0.8rem;
    justify-content: center;
    border-bottom: 1px solid rgb(221, 221, 221);
    padding: 15px;
  }
  .product_name {
    font-size: 0.7rem;
    width: 40%;
  }

  .cantidad {
    font-weight: bold;
    font-size: 1.1rem;
  }
  .sumar,
  .restar {
    padding: 11px;
    width: 20px;
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgb(218, 218, 218);
    border: none;
    border-radius: 5px;
    font-size: 1.2rem;
  }
  .delete {
    border: none;
    background-color: transparent;
  }
  .delete img {
    width: 20px;
  }
}
</style>
