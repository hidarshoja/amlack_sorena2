<template>
  <Carousel :items-to-show="isMobile ? 1 : 3" autoplay="3000" :wrap-around="true">
  <Slide v-for="(slide, index) in slides" :key="index">
    <div class="carousel__item border-2 border-red-100 shadow-2xl p-1 bg-white rounded-md w-[390px] h-[320px]">
      <img :src="slide.image" class="w-[100%] h-[300px] cursor-pointer" alt="Slide {{ index + 1 }}" />
    
    </div>
  </Slide>

  <template #addons>
    <Navigation />
  </template>
</Carousel>
</template>
<script>
import { defineComponent } from "vue";
import { Carousel, Navigation, Slide } from "vue3-carousel";

import "vue3-carousel/dist/carousel.css";

export default defineComponent({
  name: "WrapAround",
  components: {
    Carousel,
    Slide,
    Navigation,
  },
  data() {
    return {
      slides: [
        {
          image: "/img/home1.webp",
        },
        { image: "/img/home2.webp"},
        { image: "/img/home3.webp" },
        { image: "/img/home4.webp"},
        { image: "/img/home5.webp" },
        { image: "/img/home6.webp" },
        { image: "/img/home1.webp" }
      ],
      isMobile: false 
    };
  },
  mounted() {
    this.isMobile = window.innerWidth < 768;
    window.addEventListener('resize', this.handleResize);
  },
  methods: {
    handleResize() {
      this.isMobile = window.innerWidth < 768;
    }
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleResize);
  }
});
</script>
<style scoped>
@media screen and (max-width: 767px) {
  .carousel__item {
    width: 100% !important; 
  }
}
</style>