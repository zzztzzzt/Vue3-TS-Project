import imgOne from '@/assets/images/myImage1.jpg';
import imgTwo from '@/assets/images/myImage2.jpg';
import imgThree from '@/assets/images/myImage3.jpg';
import imgFour from '@/assets/images/myImage1.jpg';
import imgFive from '@/assets/images/myImage2.jpg';
import imgSix from '@/assets/images/myImage3.jpg';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useSliderStore = defineStore('slider', () => {
  const imageUrls: string[] = [
    imgOne,
    imgTwo,
    imgThree,
    imgFour,
    imgFive,
    imgSix
  ];

  const imageUrl = ref<string>(imageUrls[0]);

  const currentInfo = ref<string>('When we see dark blue, the first thing we feel may be an emotion of calm and stability. This color is reminiscent of the night sky and the deep sea.');
  const gradientColor = ref<string>('background: linear-gradient(135deg, rgba(0, 58, 140, 0.6), rgba(122, 136, 255, 0.6)); font-size: 28px;');
  const fontColor = ref<string>('color: #3975c4;');

  const changeToImg = (index: number) => {
    if (index === 0 || index === 3) {
      imageUrl.value = imageUrls[0];
      currentInfo.value = 'When we see dark blue, the first thing we feel may be an emotion of calm and stability. This color is reminiscent of the night sky and the deep sea.';
      gradientColor.value = 'background: linear-gradient(135deg, rgba(0, 58, 140, 0.6), rgba(122, 136, 255, 0.6)); font-size: 28px;';
      fontColor.value = 'color: #3975c4;';
    } else if (index === 1 || index === 4) {
      imageUrl.value = imageUrls[1];
      currentInfo.value = 'When we see burgundy, we may first feel a pleasant and relaxing emotion, as this color is often associated with rich wines and delicious food.';
      gradientColor.value = 'background: linear-gradient(135deg, rgba(252, 3, 98, 0.6), rgba(226, 176, 255, 0.6)); font-size: 28px;';
      fontColor.value = 'color: #98a9eb;';
    } else if (index === 2 || index === 5) {
      imageUrl.value = imageUrls[2];
      currentInfo.value = 'When we see blue skies, the first emotion we usually feel is relaxation and joy. This color evokes clear skies and open spaces.';
      gradientColor.value = 'background: linear-gradient(135deg, rgba(25, 190, 255, 0.6), rgba(105, 240, 255, 0.6)); font-size: 28px;';
      fontColor.value = 'color: #5fdfed;';
    }
  };

  return {
    imageUrls,
    imageUrl,
    currentInfo,
    gradientColor,
    fontColor,
    changeToImg,
  };
});