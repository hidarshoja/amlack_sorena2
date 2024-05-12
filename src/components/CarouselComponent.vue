<template>
  <Carousel :items-to-show="isMobile ? 1 : 3" autoplay="3000" :wrap-around="true">
  <Slide v-for="(slide, index) in slides" :key="index">
    <div class="carousel__item border-2 border-red-100 shadow-2xl p-1 bg-white rounded-md w-[390px]">
      <img :src="slide.image" class="w-[100%] h-56 cursor-pointer" alt="Slide {{ index + 1 }}" />
      <div class="py-6 text-base font-semibold text-[#444]">{{ slide.title }}</div>
      <div class="py-6 text-sm px-5">{{ slide.dic }}</div>
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
          image: "/img/img7.jpg",
          title: "سپردن ملک",
          dic: "جهت فروش و یا اجاره ملک خود در  سورنا و مشاهده ملکتان توسط هزاران نفر و دریافت فایل آن توسط آژانس های املاک از این سرویس استفاده نمایید",
        },
        { image: "/img/img2.jpg", title: "سفارش ملک" , dic: "جهت فروش و یا اجاره ملک خود در  سورنا و مشاهده ملکتان توسط هزاران نفر و دریافت فایل آن توسط آژانس های املاک از این سرویس استفاده نمایید", },
        { image: "/img/img3.jpg", title: "درج تبلیغات هوشمند" , dic: "جهت فروش و یا اجاره ملک خود در  سورنا و مشاهده ملکتان توسط هزاران نفر و دریافت فایل آن توسط آژانس های املاک از این سرویس استفاده نمایید", },
        { image: "/img/img5.jpg", title: "مشاوره" , dic : "اگر می خواهید سامانه به صورت هوشمند دنبال ملک دلخواه شما بگردد و با یافتن ملک مناسب از طریق ایمیل و پیامک شما را در جریان بگذارد، از این سرویس استفاده نمایید", dic :" سریع ترین روش برای فروش ویا اجاره ملک و دیده شدن موارد ملکی شما " },
        { image: "/img/img6.png", title: "پیش فروش",  dic: "جهت فروش و یا اجاره ملک خود در  سورنا و مشاهده ملکتان توسط هزاران نفر و دریافت فایل آن توسط آژانس های املاک از این سرویس استفاده نمایید", },
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