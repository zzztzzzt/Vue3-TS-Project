<script setup lang="ts">
import HeadBar from './components/HeadBar.vue';
import InfiniteSlider from './components/InfiniteSlider.vue';
import imgOne from '@/assets/images/myImage1.jpg';
import imgTwo from '@/assets/images/myImage2.jpg';
import imgThree from '@/assets/images/myImage3.jpg';
import imgFour from '@/assets/images/myImage1.jpg';
import imgFive from '@/assets/images/myImage2.jpg';
import imgSix from '@/assets/images/myImage3.jpg';
import { ref } from 'vue';

const imageUrls = ref<string[]>([
  imgOne, 
  imgTwo, 
  imgThree,
  imgFour,
  imgFive,
  imgSix
]);
</script>

<template>
    <HeadBar />
    <InfiniteSlider :image-urls="imageUrls" />
</template>

<style scoped>

@media (max-width: 600px) {}
@media (min-width: 601px) and (max-width: 768px) {}
@media (min-width: 769px) and (max-width: 900px) {}
@media (min-width: 901px) and (max-width: 1024px) {}
@media (min-width: 1025px) {}
</style>
