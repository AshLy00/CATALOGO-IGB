<script setup>
import TheProductCart from "../TheProductCart.vue";
import { ref } from "vue";

// Array reactiva para mantener los productos en el carrito
const cartItems = ref([
  {
    product: "ventilador ultra power 18 universal",
    price: 249000,
    quantity: 1,
  },
  {
    product: "lampara solar para exteriores led 90w",
    price: 215000,
    quantity: 1,
  },
]);

// Función para calcular el total de los productos en el carrito
const calculateTotal = () => {
  let total = 0;
  for (const item of cartItems.value) {
    total += item.price * item.quantity;
  }
  return total.toLocaleString();
};

// Función para añadir un producto al carrito
const addToCart = (product) => {
  // Verificar si el producto ya está en el carrito
  const existingProductIndex = cartItems.value.findIndex(
    (item) => item.product === product.product
  );
  if (existingProductIndex !== -1) {
    // Actualizar la cantidad del producto existente
    cartItems.value[existingProductIndex].quantity += product.quantity;
    // Verificar si la cantidad del producto es cero y eliminarlo del carrito
    if (cartItems.value[existingProductIndex].quantity <= 0) {
      cartItems.value.splice(existingProductIndex, 1);
    }
  } else {
    // Agregar el nuevo producto al carrito si no existe
    cartItems.value.push(product);
  }
};

// Función para capitalizar la primera letra de una cadena
const capitalizeFirstLetter = (str) => {
  return str.replace(/\b\w/g, (match) => match.toUpperCase());
};

// Función para navegar al enlace de WhatsApp con los productos del carrito
const navigateToLink = () => {
  let message = "Hola IGB! Me gustaría comprar estos productos:";
  for (const item of cartItems.value) {
    const productText = capitalizeFirstLetter(item.product);
    message += `\n- ${productText} (${item.quantity})`;
  }
  const link =
    "https://wa.me/573054304014/?text=" + encodeURIComponent(message);
  window.location.href = link;
};
</script>

<template>
  <div class="menu_container">
    <div class="menu">
      <h1>carrito</h1>
      <button class="close" @click="$emit('close')">
        <img src="/src/images/close.svg" alt="" />
      </button>
    </div>
    <div class="theproducts">
      <!-- Pasar cartItems como prop a TheProductCart -->
      <TheProductCart :cartItems="cartItems" />
    </div>
    <div class="boton_total">
      <div class="total">
        <p>total</p>
        <p>${{ calculateTotal() }}</p>
      </div>
      <button class="enviar_pedido" @click="navigateToLink">
        <img class="cart_producto" src="/src/images/whatsapp_icon.png" alt="" />
        <p>enviar tu pedido</p>
      </button>
    </div>
  </div>
</template>
<style scooped>
.categoria_container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  transition-property: width;
  transition-duration: 0.5s;
}
.total {
  display: flex;
  gap: 20px;
  justify-content: center;
  font-size: 0.9rem;
}
.boton_total {
  display: flex;
  gap: 20px;
  flex-direction: column;
  margin-top: 30px;
  margin-bottom: 30px;
}
.cart_producto {
  width: 30px;
}
.theproducts {
  display: flex;
  flex-direction: column;
}
.enviar_pedido {
  padding: 10px;
  display: flex;
  gap: 20px;
  align-items: center;
  font-weight: bold;
  width: 300px;
  justify-content: center;
  border: none;
  background-color: #29a71a;
  color: white;
  border-radius: 10px;
}

.close {
  width: 30px;
  height: 30px;
  border-style: none;
  background-color: transparent;
}
.menu_container {
  background-color: white;
  width: 700px;
  height: 100%;
  -webkit-box-shadow: -4px -4px 29px -10px rgba(0, 0, 0, 0.44);
  -moz-box-shadow: -4px -4px 29px -10px rgba(0, 0, 0, 0.44);
  box-shadow: -4px -4px 29px -10px rgba(0, 0, 0, 0.44);
  border-radius: 0px 0px 0px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.menu {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid gray;
  height: 90px;
  align-items: center;
  width: 100%;
  font-weight: 800;
}

.menu h1 {
  margin-left: 50px;
  font-weight: lighter;
  font-size: 1.5rem;
  transition-property: font-size;
  transition-duration: 0.5s;
}

.menu img {
  width: 100%;
  height: 100%;
}

@media screen and (max-width: 1100px) {
  .close {
    width: 30px;
    height: 30px;
  }
  .menu_container {
    width: 600px;
    height: 100%;
  }

  .menu {
    height: 90px;
    width: 100%;
  }
  .menu h1 {
    margin-left: 50px;
    font-weight: lighter;
    font-size: 1.3rem;
  }
}

@media screen and (max-width: 790px) {
  .close {
    width: 25px;
    height: 25px;
  }
  .menu_container {
    width: 500px;
    height: 100%;
  }

  .menu {
    height: 80px;
    width: 100%;
  }
  .menu h1 {
    margin-left: 50px;
    font-weight: lighter;
    font-size: 1.2rem;
  }
}

@media screen and (max-width: 650px) {
  .close {
    width: 20px;
    height: 20px;
  }
  .menu_container {
    width: 400px;
    height: 100%;
  }

  .menu {
    height: 70px;
    width: 100%;
  }
  .menu h1 {
    margin-left: 40px;
    font-weight: lighter;
    font-size: 1.1rem;
  }
}

@media screen and (max-width: 420px) {
  .close {
    width: 20px;
    height: 20px;
  }
  .menu_container {
    width: 100%;
    height: 100%;
    border-radius: 0px;
  }

  .menu {
    height: 60px;
    width: 100%;
  }
  .menu h1 {
    margin-left: 25px;
    font-weight: lighter;
    font-size: 1rem;
  }

  .cart_product {
    font-size: 0.8rem;
    margin: 5px;
  }
  .sumar_restar {
    padding: 12px;
    width: 15px;
    height: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgb(218, 218, 218);
    border: none;
    border-radius: 5px;
    font-size: 1rem;
  }

  .product_name {
    font-size: 0.7rem;
    width: 100%;
  }

  .cantidad {
    font-weight: bold;
    font-size: 1rem;
  }
  .cart_product {
    gap: 10px;
  }
}
</style>
