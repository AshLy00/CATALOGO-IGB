<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import TheMenu from "../home/TheMenu.vue";

const router = useRouter();
const showMenu = ref(false);

const toggleMenu = () => {
  showMenu.value = !showMenu.value;
};
</script>

<template>
  <div class="menu" :class="{ show: showMenu }">
    <TheMenu />
  </div>

  <header>
    <div class="header_items">
      <img
        src="/src/images/logo.svg"
        alt=""
        @click="$router.push({ name: 'home' })"
      />

      <div class="botones">
        <img
          class="boton"
          src="/src/images/cart_black.svg"
          alt=""
          @click="$router.push({ name: 'product' })"
        />
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
.menu {
  z-index: 3;
  right: 0%;
  display: none;
  position: fixed;
}

.menu.show {
  display: inherit;
  opacity: 100%;
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
  width: 40px;
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

@media screen and (max-width: 600px) {
  img {
    width: 110px;
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
    width: 80px;
  }
  .boton {
    width: 30px;
  }
  .header_items {
    width: 85%;
  }
  header {
    height: 70px;
  }
}
</style>
