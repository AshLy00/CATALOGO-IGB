<script setup></script>

<template>
  <div id="slider">
    <figure>
      <img
        src="https://tinypic.host/images/2024/03/04/Mesa-de-trabajo-3reducida-100.jpeg"
        alt=""
      />
      <img
        src="https://tinypic.host/images/2024/03/04/Mesa-de-trabajo-3reducida-100.jpeg"
        alt=""
      />
      <img
        src="https://tinypic.host/images/2024/03/04/Mesa-de-trabajo-3reducida-100.jpeg"
        alt=""
      />
      <img
        src="https://tinypic.host/images/2024/03/04/Mesa-de-trabajo-3reducida-100.jpeg"
        alt=""
      />
      <img
        src="https://tinypic.host/images/2024/03/04/Mesa-de-trabajo-3reducida-100.jpeg"
        alt=""
      />
    </figure>
  </div>
</template>
<style scoped>
img {
  transition-property: height;
  transition-duration: 0.5s;
}
div#slider {
  overflow: hidden;
} /* las imágenes no van a salir del márgen de la pantalla*/
div#slider figure img {
  width: 20%;
  float: left;
}

div#slider figure {
  position: relative;
  width: 500%;
  margin: 0;
  left: 0;
  text-align: left;
  font-size: 0;
  animation: 20s slidy infinite; /*el movimiento se va a mantener de forma indefinida -infinito-*/
}

/*esta parte del código define el movimiento de las imágenes a la izquierda*/
@keyframes slidy {
  0% {
    left: 0%;
  }
  20% {
    left: 0%;
  }
  25% {
    left: -100%;
  }
  45% {
    left: -100%;
  }
  50% {
    left: -200%;
  }
  70% {
    left: -200%;
  }
  75% {
    left: -300%;
  }
  95% {
    left: -300%;
  }
  100% {
    left: -400%;
  }
}
</style>
