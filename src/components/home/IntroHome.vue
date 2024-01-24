<script setup></script>

<template>
  <div class="container">
    <div class="right"></div>
    <h1>¡mira nuestro catálogo!</h1>
    <div class="left"></div>
  </div>
</template>
<style scoped>
.container {
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  height: 100px;
}
.right {
  height: 50px;
  border-top-right-radius: 50px;
  border-bottom-right-radius: 50px;
  width: 25%;
  background-color: var(--color-blue);
  transition-property: width;
  transition-property: height;
  transition-duration: 0.5s;
}

.left {
  height: 50px;
  border-top-left-radius: 50px;
  border-bottom-left-radius: 50px;
  width: 25%;
  background-color: var(--color-blue);
  transition-property: width;
  transition-property: height;
  transition-duration: 0.5s;
}

h1 {
  font-size: 2rem;
  transition-property: font-size;
  transition-duration: 0.5s;
}
@media screen and (max-width: 1090px) {
  .container {
    height: 120px;
  }
  .right {
    height: 40px;
    width: 22%;
  }

  .left {
    height: 40px;
    width: 22%;
  }

  h1 {
    font-size: 1.5rem;
  }
}

@media screen and (max-width: 800px) {
  .container {
    height: 80px;
  }
  .right {
    height: 30px;
    width: 20%;
  }

  .left {
    height: 30px;
    width: 20%;
  }

  h1 {
    font-size: 1.2rem;
  }
}

@media screen and (max-width: 500px) {
  .container {
    height: 70px;
  }
  .right {
    height: 25px;
    width: 20%;
  }

  .left {
    height: 25px;
    width: 20%;
  }

  h1 {
    font-size: 1rem;
  }
}
@media screen and (max-width: 400px) {
  .container {
    height: 60px;
  }
  .right {
    height: 20px;
    width: 18%;
  }

  .left {
    height: 20px;
    width: 18%;
  }

  h1 {
    font-size: 0.9rem;
  }
}
</style>
