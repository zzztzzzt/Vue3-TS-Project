<script setup lang="ts">
import MainImage from './MainImage.vue';
import MainInfo from './MainInfo.vue';
import { ref } from 'vue'

const props = defineProps<{
  imageUrls: string[]
}>()

const imageUrl = ref<string>(props.imageUrls[0]);
const infoState = ref<string>("infoOne");

const changeToImg = (index: number): void => {
  if (index === 0 || index === 3) {
    imageUrl.value = props.imageUrls[0];
    infoState.value = "infoOne";
  } else if (index === 1 || index === 4) {
    imageUrl.value = props.imageUrls[1];
    infoState.value = "infoTwo";
  } else if (index === 2 || index === 5) {
    imageUrl.value = props.imageUrls[2];
    infoState.value = "infoThree";
  }
}
</script>

<template>
    <MainImage :image-url="imageUrl" />
    <MainInfo :info-state="infoState"/>

    <div class="slider" style="
        --width: 180px;
        --height: 120px;
        --quantity: 6;
    ">
        <div class="list">
            <div 
                v-for="(imageUrl, index) in props.imageUrls" 
                :key="index" 
                class="item" 
                :style="{ '--position': index + 1 }" 
                @click="changeToImg(index)"
            >
                <img :src="imageUrl" alt="">
            </div>
        </div>
    </div>
</template>

<style scoped>
.slider {
    width: 82%;
    height: var(--height);
    overflow: hidden;
    mask-image: linear-gradient(
        to right,
        transparent,
        #000 10% 90%,
        transparent
    );
}
.slider .list {
    display: flex;
    width: 100%;
    min-width: calc(var(--width) * var(--quantity));
    position: relative;
}
.slider .list .item {
    box-shadow:rgba(194, 194, 194, 0.3) 5px 10px 5px;
    width: var(--width);
    height: var(--height);
    position: absolute;
    left: 100%;
    animation: autoRun 12s linear infinite;
    animation-delay: calc( (12s / var(--quantity)) * (var(--position) - 1) );
    transition: filter 0.5s;
}
.slider .list .item img {
    border-radius: 5px;
    width: 100%;
}
@keyframes autoRun {
    from {
        left: 100%;
    }to {
        left: calc(var(--width) * -1);
    }
}
.slider .item:hover {
    filter: invert(100%);
    cursor: pointer;
}

@media (max-width: 600px) {
    .slider .item:hover {
        filter: invert(0%);
    }
}
@media (min-width: 601px) and (max-width: 768px) {
    .slider .item:hover {
        filter: invert(0%);
    }
}
@media (min-width: 769px) and (max-width: 900px) {
    .slider .item:hover {
        filter: invert(0%);
    }
}
@media (min-width: 901px) and (max-width: 1024px) {
    .slider .item:hover {
        filter: invert(0%);
    }
}
@media (min-width: 1025px) {}
</style>