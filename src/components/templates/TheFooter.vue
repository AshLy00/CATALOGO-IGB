<script setup></script>
<template>
  <footer>
    <div class="footer_container">
      <p>COPYRIGHT © 2024 - IGB</p>
    </div>
  </footer>
</template>

<style scoped>
footer {
  justify-content: center;
  display: flex;
  align-items: center;
  background-color: var(--color-white);
  height: 90px;
  box-shadow: rgba(0, 0, 0, 0.11) 0px -25px 20px -20px;
  font-size: 1rem;
  transition-property: font-size;
  transition-duration: 0.5s;
}

@media screen and (max-width: 600px) {
  footer {
    height: 70px;
    font-size: 0.6rem;
  }
}
</style>
