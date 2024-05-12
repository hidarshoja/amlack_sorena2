<template>
  <div
  class="w-[90%]  min-h-[1000px] mx-auto bg-gray-300 shadow-lg py-10 px-3 lg:px-28 rounded-xl"
  >
    <h3 class="flex gap-1 items-center">
      <span class="text-[#333] font-semibold"> دعوت دوستان </span>
      <span class="text-[#333] font-semibold">⟵</span>
    </h3>
    <div
      class="flex items-center flex-col mt-10 gap-5 w-[80%] lg:w-[60%] mx-auto bg-gray-100 px-4 py-6 rounded-lg shadow-xl"
    >
      <div>
        <img src="/img/gift.svg" alt="" />
      </div>
      <h3 class="text-[#A1BF12] text-lg">دعوت از دوستان</h3>
      <p class="text-center">
        با دعوت دوستان و همکاران خود به پنل سورنا می توانید شبکه کاری خود را
        گسترش داده و با همکاران خود به صورت درصدی همکاری داشته باشید.
      </p>
      <p class="text-center">
        با اشتراک گذاری فایل و مشتریان در این شبکه تبادل اطلاعات خواهید کرد و
        منجر به افزایش درآمد خود می شوید.
      </p>
      <p>
        با دعوت هر املاک
        <b class="text-green-600">کد تخفیف 200،000 تومانی</b> دریافت خواهید کرد.
      </p>
      <p>
        می توانید لینک اختصاصی خود را در گروه های پیام رسان ارسال یا پیامک کنید.
      </p>
      <h3 class="text-[#A1BF12] text-lg">لینک اختصاصی شما</h3>
      <div class="w-full">
        <span
          class="w-[80%] bg-green-800 flex items-center justify-between mx-auto px-3 py-2 rounded-lg text-white cursor-pointer"
          @click="showAlert"
        >
          <span>
            <img src="/img/copy.svg" alt="" />
          </span>
          <span>کپی لینک دعوت</span>
        </span>
      </div>
      <div class="flex gap-7 mt-5">
        <img src="/img/telegram.svg" class="w-10 cursor-pointer" alt="" />
        <img src="/img/whatsapp.svg" class="w-10 cursor-pointer" alt="" />
      </div>
    </div>
    <div
      class="flex items-center flex-col mt-10 gap-5 w-[80%] lg:w-[60%] mx-auto bg-gray-100 px-4 py-6 rounded-lg shadow-xl"
    >
      <h3 class="text-[#A1BF12] text-lg">آمار کلی دعوت شدگان</h3>

      <div class="w-full flex items-center justify-between text-[#333]">
        <span> تعداد معرفی شدگان </span>
        <span>
          <span class="px-2 text-[#A1BF12]">0</span>
          <span>مشاور املاک</span>
        </span>
      </div>
      <div class="w-full flex items-center justify-between text-[#333] border-t-2 py-4">
        <span> هدیه دریافت شده </span>
        <span>
          <span class="cursor-pointer text-[#A1BF12]">مشاهده </span>
        </span>
      </div>
    
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    showAlert() {
      alert("لینک دعوت کپی شد");
    },
  },
};
</script>
