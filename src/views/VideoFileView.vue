<template>
  <div
  class="w-[90%]  min-h-[1000px] mx-auto bg-gray-300 shadow-lg py-10 px-3 lg:px-28 rounded-xl"
  >
    <h3 class="flex gap-1 items-center">
      <span class="text-[#333] font-semibold"> نمایش ویدیو</span>
      <span class="text-[#333] font-semibold">⟵</span>
    </h3>
    <div class="flex items-center justify-center mt-10">
        <video src="/video/clip.mp4" autoplay controls class="w-[300px] lg:w-[80%] h-96  border-2 border-gray-500 shadow-2xl rounded-md"></video>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      videoId: ''
    }
  },
  computed: {
    videoSrc() {
      return `/video/clip_${this.videoId}.mp4`;
    }
  },
  mounted() {
    const urlParts = window.location.href.split('/');
    this.videoId = urlParts[urlParts.length - 1];
    console.log('videoId:', this.videoId);
  
  }
};
</script>