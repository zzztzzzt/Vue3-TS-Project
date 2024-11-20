<script setup lang="ts">
import { useSliderStore } from '@/stores/sliderStore';

const sliderStore = useSliderStore();
</script>

<template>
    <div id="info-container"><div class="follow-card" :style="sliderStore.gradientColor">{{ sliderStore.currentInfo }}</div></div>
    <div id="mobile-info" :style="sliderStore.fontColor">{{ sliderStore.currentInfo }}</div>
</template>

<style scoped>
@keyframes gradientAnimation {
    0%, 100% {
        background-size: 100%;
    }
    10%, 90% {
        background-size: 130%;
    }
    20%, 80% {
        background-size: 160%;
    }
    30%, 70% {
        background-size: 190%;
    }
    40%, 60% {
        background-size: 210%;
    }
    50% {
        background-size: 240%;
    }
}
#info-container {
    width: 100%;
    height: 100%;
    max-width: 420px;
    max-height: 360px;
    padding: 15px;
}

.follow-card {
    background: linear-gradient(135deg, rgba(0, 58, 140, 0.6), rgba(122, 136, 255, 0.6));
    color: #fff;
    box-shadow:rgba(194, 194, 194, 0.3) 5px 10px 5px;
    border-radius: 15px;
    aspect-ratio: 3 / 2;
    width: 100%;
    height: 100%;
    padding: 30px;
    font-size: 28px;
    font-weight: bold;
    transition: transform 2s;
}
.follow-card:hover {
    animation: gradientAnimation 1s;
}

#mobile-info {
    color: #3975c4;
    max-height: 160px;
    padding: 30px;
    font-size: 28px;
    font-weight: bold;
}

@media (max-width: 600px) {
    #info-container {
        display: none;
    }

    #mobile-info {
        font-size: 24px;
    }
}
@media (min-width: 601px) and (max-width: 768px) {
    #info-container {
        display: none;
    }

    #mobile-info {
        padding: 0px;
        padding-left: 80px;
        padding-right: 80px;
    }
}
@media (min-width: 769px) and (max-width: 900px) {
    #info-container {
        display: none;
    }

    #mobile-info {
        padding: 0px;
        padding-left: 80px;
        padding-right: 80px;
    }
}
@media (min-width: 901px) and (max-width: 1024px) {
    #mobile-info {
        display: none;
    }
}
@media (min-width: 1025px) {
    #mobile-info {
        display: none;
    }
}
</style>