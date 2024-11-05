<script setup lang="ts"></script>

<template>
  <div id="head-bar">
    <a class="anchor" href="#">Logo</a>
    <a class="anchor" href="#">information</a>
    <a class="anchor" href="#">Login</a>
  </div>
</template>

<style scoped>
#head-bar {
    background-image: linear-gradient(45deg, #e5e5e5, #cbcbcb);
    box-shadow:rgba(194, 194, 194, 0.3) 5px 10px 5px;
    border-radius: 50px;
    margin: 30px;
    margin-top: 42px;
    margin-bottom: 15px;
    position: relative;
    width: 80%;
    height: 10%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
    justify-items: center;
    font-size: 30px;
    font-weight: bold;
}
@property --angle {
    syntax: "<angle>";
    initial-value: 0deg;
    inherits: false;
}
@keyframes spin {
    from {
        --angle: 0deg;
    }
    to {
        --angle: 360deg;
    }
}
#head-bar:after {
  content: '';
  background-image: conic-gradient(from var(--angle), transparent 75%, #4ac3ff, #4ff3ff, #82b2ff);
  border-radius: 50px;
  display: inline-block;
  position: absolute;
  width: 101.5%;
  height: 115%;
  top: 50%;
  left: 50%;
  translate: -50% -50%;
  z-index: -1;
  animation: 3s spin linear infinite;
}
#head-bar .anchor {
  text-decoration: none;
  color: #000;

}

@media (max-width: 600px) {
  #head-bar:after {
    width: 105%;
  }
}
@media (min-width: 601px) and (max-width: 768px) {
  #head-bar:after {
    width: 103%;
  }
}
@media (min-width: 769px) and (max-width: 900px) {
  #head-bar:after {
    width: 103%;
  }
}
@media (min-width: 901px) and (max-width: 1024px) {
  #head-bar:after {
    width: 103%;
  }
}
@media (min-width: 1025px) {}
</style>