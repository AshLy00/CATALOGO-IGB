<script setup>
const promptAddToHomeScreen = () => {
  if (window.matchMedia("(display-mode: standalone)").matches) {
    // La aplicación ya está instalada en la pantalla de inicio
    console.log("La aplicación ya está instalada en la pantalla de inicio.");
  } else if (window.navigator.standalone === true) {
    // iOS Safari
    console.log("La aplicación ya está instalada en la pantalla de inicio.");
  } else if (window.matchMedia("(display-mode: browser)").matches) {
    // Mostrar mensaje o instrucciones para agregar a la pantalla de inicio
    console.log("Mostrar instrucciones para agregar a la pantalla de inicio.");
  }
};
</script>
<template>
  <footer>
    <div class="footer_container">
      <p>copyright © 2024 - inversiones gomez barraza</p>
    </div>
    <button @click="promptAddToHomeScreen">
      Agregar a la pantalla de inicio
    </button>
  </footer>
</template>

<style scoped>
footer {
  justify-content: center;
  display: flex;
  align-items: center;
  background-color: var(--color-white);
  height: 80px;
  box-shadow: rgba(0, 0, 0, 0.11) 0px -25px 20px -20px;
  font-size: 1rem;
  transition-property: font-size;
  transition-duration: 0.5s;
}

@media screen and (max-width: 800px) {
  footer {
    height: 60px;
    font-size: 0.8rem;
  }
}

@media screen and (max-width: 500px) {
  footer {
    height: 50px;
    font-size: 0.7rem;
  }
}
</style>
