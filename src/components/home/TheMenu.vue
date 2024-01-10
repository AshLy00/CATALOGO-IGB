<script setup></script>
<template>
  <div class="menu_container">
    <div class="menu">
      <h1>categorías</h1>
      <button class="close">
        <img src="/src/images/menu_icon.svg" alt="" />
      </button>
    </div>
    <button @click="$router.push({ name: 'product' })">lavadoras</button>
  </div>
</template>
<style scooped>
.menu button {
  width: fit-content;
}

.close {
  width: 30px;
  height: 30px;
  border-style: none;
  background-color: transparent;
}
.menu_container {
  background-color: white;
  width: 100%;
  height: 700px;
  -webkit-box-shadow: -4px -4px 29px -10px rgba(0, 0, 0, 0.44);
  -moz-box-shadow: -4px -4px 29px -10px rgba(0, 0, 0, 0.44);
  box-shadow: -4px -4px 29px -10px rgba(0, 0, 0, 0.44);
  border-radius: 0px 0px 0px 20px;
  display: flex;
  gap: 20px;
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
}

.menu h1 {
  margin-left: 50px;
  font-weight: lighter;
  font-size: 1.5rem;
}

.menu button {
  margin-right: 50px;
}

.menu img {
  width: 100%;
  height: 100%;
}
</style>
