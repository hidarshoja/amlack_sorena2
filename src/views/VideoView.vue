<template>
    <div
    class="w-[90%]  min-h-[1000px] mx-auto bg-gray-300 shadow-lg py-10 px-3 lg:px-28 rounded-xl"
    >
      <h3 class="flex gap-1 items-center">
        <span class="text-[#333] font-semibold">  آموزش های پنل </span>
        <span class="text-[#333] font-semibold">⟵</span>
      </h3>
      <div v-for="(item, index) in tutorials" :key="index" class="mt-5">
      <router-link :to="`/advisor/VideoView/${item.id}`">
        <div class="flex justify-center gap-3 bg-green-600 rounded-xl px-12 py-4 items-center shadow-lg">
          <img src="/img/playVideo.svg" alt="">
          <span class="text-white">{{ item.title }}</span>
        </div>
      </router-link>
    </div>
    </div>
  </template>
<script>
export default {
  data() {
    return {
      tutorials: [
      { id: 1,title : 'آموزش ثبت مشتری' ,src: '/video/clip.mp4' },
      { id: 2,title : 'آموزش ثبت مشتری' ,src: 'video_src_1.mp4' },
      { id: 3,title :'آموزش ثبت فایل'  ,src: 'video_src_1.mp4' },
      { id: 4,title : 'آموزش مشتریان من'  ,src: 'video_src_1.mp4' },
      { id: 5,title : 'آموزش دفاتر فایل' ,src: 'video_src_1.mp4' },
      { id: 6,title :  'آموزش سر رسید اجاره' ,src: 'video_src_1.mp4' },
      { id: 7,title : 'آموزش مشاورین من' ,src: 'video_src_1.mp4' },
      { id: 8,title : 'آموزش فایلینگ' ,src: 'video_src_1.mp4' },
      { id: 9,title : 'آموزش فایل های نشان شده' ,src: 'video_src_1.mp4' },
      {id: 10,title : 'آموزش شبکه سازی' ,src: 'video_src_1.mp4' } 
      ]
    };
  }
};
</script>