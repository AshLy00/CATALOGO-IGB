<script setup></script>

<template>
  <header>
    <div class="header_items">
      <img
        src="/public/logo.svg"
        alt=""
        @click="router.push({ name: 'home' })"
      />

      <div class="botones">
        <img
          class="boton"
          src="cart_black.svg"
          alt=""
          @click="router.push({ name: 'product' })"
        />
        <img
          class="boton"
          src="menu_icon.svg"
          alt=""
          @click="router.push({ name: 'product' })"
        />
      </div>
    </div>
  </header>
</template>

<style scoped>
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
}

@media screen and (max-width: 600px) {
  img {
    width: 110px;
  }
  .boton {
    width: 40px;
  }
  .header_items {
    width: 85%;
  }
  header {
    height: 80px;
  }
}

@media screen and (max-width: 420px) {
  img {
    width: 90px;
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
