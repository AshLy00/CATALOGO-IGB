<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import TheMenu from "../home/TheMenu.vue";
import TheCart from "../home/TheCart.vue";
const isMenuVisible = ref(false);
const isCartVisible = ref(false);
const router = useRouter();

const toggleMenu = () => {
  isMenuVisible.value = !isMenuVisible.value;
};
const toggleCart = () => {
  isCartVisible.value = !isCartVisible.value;
};
</script>
<script>
export default {
  data() {
    return {
      cartItems: [], // Definir cartItems en la instancia del componente padre
    };
  },
};
</script>
<template>
  <div class="themenu" v-if="isMenuVisible" @click="toggleMenu">
    <TheMenu @close="toggleMenu" />
  </div>
  <div class="thecart" v-if="isCartVisible">
    <TheCart :cartItems="cartItems" @click="toggleCart" />
  </div>
  <header>
    <div class="header_items">
      <img
        src="/src/images/logo.svg"
        alt=""
        @click="$router.push({ name: 'home' })"
      />

      <div class="botones">
        <!--<img
          class="boton"
          src="/src/images/cart_black.svg"
          alt=""
          @click="toggleCart"
        />-->
        <img
          class="boton"
          src="/src/images/menu_icon.svg"
          alt=""
          @click="toggleMenu"
        />
      </div>
    </div>
  </header>
</template>

<style scoped>
.themenu {
  z-index: 4;
  position: fixed; /* Cambiado a fixed para que el menú se mantenga en su posición */
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(
    255,
    255,
    255,
    0.808
  ); /* Semi-transparent white background */
  overflow-y: auto; /* Habilitar el desplazamiento vertical */
}
.thecart {
  z-index: 4;
  position: fixed;
  top: 0%;
  right: 0%;
}
header {
  width: 100%;
  background-color: var(--color-white);
}
img {
  width: 130px;
  cursor: pointer;
  transition-property: width;
  transition-duration: 0.5s;
}
.boton {
  width: 50px;
  cursor: pointer;
  transition-property: width;
  transition-duration: 0.5s;
}
header {
  width: 100%;
  background-color: var(--color-white);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  box-shadow: rgba(0, 0, 0, 0.11) 0px 25px 20px -20px;
  position: fixed;
  z-index: 2;
}

.header_items {
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.botones {
  display: flex;
  gap: 15px;
  align-items: center;
}

@media screen and (max-width: 900px) {
  img {
    width: 95px;
  }
  .boton {
    width: 35px;
  }
  .header_items {
    width: 85%;
  }
  header {
    height: 85px;
  }
}
@media screen and (max-width: 600px) {
  img {
    width: 95px;
  }
  .boton {
    width: 35px;
  }
  .header_items {
    width: 85%;
  }
  header {
    height: 80px;
  }
}
@media screen and (max-width: 590px) {
  img {
    width: 80px;
  }
  .boton {
    width: 30px;
  }

  header {
    height: 70px;
  }
}
@media screen and (max-width: 420px) {
  img {
    width: 70px;
  }
  .boton {
    width: 25px;
  }
  .header_items {
    width: 85%;
  }
  header {
    height: 60px;
  }
  .themenu {
    z-index: 4;
    position: fixed;
    top: 0%;
    right: 0%;
    width: 100%;
  }

  .thecart {
    z-index: 4;
    position: fixed;
    top: 0%;
    right: 0%;
    width: 100%;
  }
}
</style>
