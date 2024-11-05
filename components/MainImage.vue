<script setup lang="ts">
const props = defineProps<{
  imageUrl: string
}>()
</script>

<template>
    <div id="img-container">
        <img id="main-img" :src="imageUrl">
    </div>
</template>

<style scoped>
#img-container {
    width: 100%;
    height: 100%;
    max-width: 540px;
    max-height: 360px;
    padding: 15px;
    padding-bottom: 15px;
}

#main-img {
    box-shadow:rgba(194, 194, 194, 0.3) 5px 10px 5px;
    border-radius: 15px;
    aspect-ratio: 3 / 2;
    width: 100%;
    height: 100%;
}

@media (max-width: 600px) {
    #img-container {
        max-width: 100%;
        max-height: 200px;
    }
    #main-img {
        aspect-ratio: 3 / 2;
        width: 100%;
        height: auto;
    }
}
@media (min-width: 601px) and (max-width: 768px) {
    #img-container {
        max-width: 80%;
    }
    #main-img {
        aspect-ratio: 3 / 2;
        width: 100%;
        height: auto;
    }
}
@media (min-width: 769px) and (max-width: 900px) {}
@media (min-width: 901px) and (max-width: 1024px) {}
@media (min-width: 1025px) {}
</style>