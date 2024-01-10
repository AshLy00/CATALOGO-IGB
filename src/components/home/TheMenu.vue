<script setup></script>
<template>
  <div class="menu_container">
    <div class="menu">
      <button class="close">
        <img src="/src/images/close.svg" alt="" />
      </button>
    </div>
    <div class="menu_content"><h1>menu</h1></div>
  </div>
</template>
<style scooped>
.close {
  width: 30px;
  height: 30px;
  border-style: none;
  background-color: transparent;
}
.menu_container {
  background-color: white;
  width: 500px;
  height: 700px;
  -webkit-box-shadow: -4px -4px 29px -10px rgba(0, 0, 0, 0.44);
  -moz-box-shadow: -4px -4px 29px -10px rgba(0, 0, 0, 0.44);
  box-shadow: -4px -4px 29px -10px rgba(0, 0, 0, 0.44);
  border-radius: 20px 0px 0px 20px;
  display: flex;
  gap: 20px;
  flex-direction: column;
  padding: 40px;
}
.menu {
  display: flex;
  justify-content: space-between;
}
.menu_content {
  justify-content: center;
  align-items: center;
  display: flex;
  font-size: 0.7rem;
}
</style>
