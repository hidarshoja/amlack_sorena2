<template>
  <div
    class="w-[90%] min-h-[1000px] mx-auto bg-gray-300 shadow-lg py-10 px-3 lg:px-28 rounded-xl"
  >
    <div class="flex items-center justify-between">
      <h3 class="flex gap-1 items-center">
        <span class="text-[#333] font-semibold"> جزییات فایل </span>
        <span class="text-[#333] font-semibold">⟵</span>
      </h3>
      <div class="flex items-center gap-3">
        <img
          src="/img/delete.svg"
          class="w-8 h-8 rounded-full cursor-pointer"
          alt=""
        />
        <img
          v-if="!showFirstBookmark"
          @click="toggleBookmarks"
          src="/img/bookmarkB.svg"
          class="w-8 h-8 rounded-full cursor-pointer"
          alt=""
        />
        <img
          v-if="showFirstBookmark"
          @click="toggleBookmarks"
          src="/img/bookmark.svg"
          class="w-8 h-8 rounded-full cursor-pointer"
          alt=""
        />
      </div>
    </div>
    <div class="mt-10">
      <Carousel />
    </div>
    <div class="w-full flex flex-col lg:flex-row mt-10 gap-2">
      <div class="w-full lg:w-2/3 py-5 px-3 bg-slate-100 rounded-lg">
        <div class="flex flex-col gap-3 py-6">
          <h3 class="text-[#2b2b2b] text-xl">مغازه در فردوسی پل منطقه</h3>
          <h6 class="text-[#2b2b2b] text-sm">
            ساعاتی پیش، خراسان شمالی، بجنورد، فردوسی پل منطقه
          </h6>
        </div>
        <div class="w-full h-[1px] bg-gray-400"></div>
        <div class="flex flex-col gap-3 py-10">
          <div
            class="flex flex-col md:flex-row w-full items-center justify-between gap-3 lg:gap-10"
          >
            <div class="flex w-full md:w-1/2 items-center justify-between">
              <span>متراژ</span>
              <span class="text-sm text-[#242424]">50 متر</span>
            </div>
            <div class="flex w-full md:w-1/2 items-center justify-between">
              <span>اجاره </span>
              <span class="text-sm text-[#242424]">8,200,000 تومان</span>
            </div>
          </div>
          <div
            class="flex flex-col md:flex-row w-full items-center justify-between gap-3 lg:gap-10"
          >
            <div class="flex w-full md:w-1/2 items-center justify-between">
              <span>رهن</span>
              <span class="text-sm text-[#242424]">50,000,000 تومان</span>
            </div>
            <div class="flex w-full md:w-1/2 items-center justify-between">
              <span>نوع ملک </span>
              <span class="text-sm text-[#242424]">تجاری و مغازه </span>
            </div>
          </div>
        </div>
        <div class="w-full h-[1px] bg-gray-400"></div>
        <p class="text-sm py-10 leading-6">
          30 متر مغازه ‌ 10 متر بعد پل منطقه نبش فردسی 16 روبروی فروشگاه کوروش
          سرامیک کاشی سقف کاذب سکوریت کرکره برقی امتیازات کامل و مستقل هم از نبش
          خیابان و هم از انتهای مغازه به دور برگردان پشت درب دارد و دوکله
          است.زیبا و تمیز و روشنایی کامل.تعمیرات اساسی شده.مناسب دفتربیمه و
          مشاور املاک و ........ بغیر از میوه فروشی و اغذیه و سوپر چون در محل
          هست.رهن و اجاره قابل تبدیل نیست.
        </p>
        <div class="w-full h-[1px] bg-gray-400"></div>
        <div class="flex flex-col gap-3 py-10">
          <div
            class="flex flex-col w-full items-center justify-between gap-3 lg:gap-6"
          >
            <div class="flex w-full items-center justify-between">
              <span>شماره تماس تایید شده </span>
              <span class="text-sm text-[#242424]">09302175960 </span>
            </div>
            <div class="flex w-full items-center justify-between">
              <span>شماره تماس دوم </span>
              <span class="text-sm text-[#242424]">09302175961</span>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full flex flex-col lg:w-1/3 px-3 gap-3">
        <div class="w-full py-3 text-sm border rounded-lg bg-slate-100 px-2">
          شناسه آگهی: ۴۴۰۱۶۰۵۹۹
        </div>
        <div class="w-full py-3 border rounded-lg bg-slate-100 px-2">
          <h3 class="text-base">امکانات</h3>
          <div
            class="mt-6 flex flex-wrap gap-x-6 gap-y-3 items-center justify-between"
          >
            <div
              v-for="(facility, index) in facilities"
              :key="index"
              class="flex items-center gap-1"
            >
              <img :src="facility.icon" class="w-5 h-5" alt="" />
              <span class="text-sm">{{ facility.name }}</span>
            </div>
          </div>
        </div>
        <div
          class="w-full py-3 border rounded-lg bg-slate-100 px-2 flex items-center justify-between flex-col gap-4 h-[300px]"
        >
          <img src="/img/sorena.png" class="w-12 h-12 rounded-full" alt="" />
          <p>کاربر سورنا</p>
          <p class="text-sm">عضویت از تیر ماه 1402</p>
          <button
            class="w-full bg-green-500 py-2 rounded-lg text-white hover:bg-green-700"
            @click="changeButtonText"
          >
            {{ buttonText }}
          </button>
        </div>
      </div>
    </div>
    <div class="w-full h-[200px]"></div>
  </div>
</template>
<script>
import Carousel from "@/components/CarouselDetailsComponent.vue";
export default {
  components: {
    Carousel,
  },
  data() {
    return {
      showFirstBookmark: true,
      buttonText: 'تماس با آگهی دهنده',
      facilities: [
        { name: "آسانسور", icon: "/img/data.png" },
        { name: "انباری", icon: "/img/data.png" },
        { name: "پارکینگ", icon: "/img/data.png" },
        { name: "بالکون", icon: "/img/data.png" },
        { name: "توالت فرنگی", icon: "/img/data.png" },
        { name: "استخر", icon: "/img/data.png" },
        { name: "سونا", icon: "/img/data.png" },
        { name: "دسترسی به دبستان", icon: "/img/data.png" },
        { name: "دسترسی به سوپر مارکت", icon: "/img/data.png" },
   
      ],
    };
  },
  methods: {
    toggleBookmarks() {
      this.showFirstBookmark = !this.showFirstBookmark;
    },
    changeButtonText() {
      this.buttonText = '09159772121';
    }
  },
};
</script>
