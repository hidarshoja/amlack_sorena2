<template>
  <div
  class="w-[90%]  min-h-[1000px] mx-auto bg-gray-300 shadow-lg py-10 px-3 lg:px-28 rounded-xl"
  >
    <h3 class="flex gap-1 items-center">
      <span class="text-[#333] font-semibold"> پشتیبانی </span>
      <span class="text-[#333] font-semibold">⟵</span>
    </h3>
    <p class="text-[#333] font-normal mt-5 text-center">
      مشاور املاک گرامی شما میتوانید پیغام خود را ثبت کرده و یا در صورت تمایل با
      پشتیبانی فنی املاک سورنا تماس حاصل نمایید.
    </p>
    <div class="flex flex-col items-center justify-center gap-3 mt-5">
      <p class="flex gap-3">
        <span class="text-[#333]"> امور تجاری </span>
        <span class="text-green-950 font-semibold"> 09378224822 </span>
      </p>
      <p class="flex gap-3">
        <span class="text-[#333]"> پشتیبانی فنی </span>
        <span class="text-green-950 font-semibold"> 05832240911 </span>
      </p>
    </div>
    <div>
      <p class="text-[#333] font-normal mt-5  py-2">موضوع</p>
      <select   v-model="selectedOption"  class="w-[250px] px-2 py-1 rounded-lg border border-1 border-gray-400">
        <option value="" disabled>موضوع را انتخاب کنید</option>
        <option value="1">پشتیبانی فنی</option>
        <option value="2">درخواست همکاری</option>
        <option value="3">خرید محصولات</option>
        <option value="4">ارتباط با مدیریت</option>
        <option value="5">سایر</option>
      </select>
      <div class="w-full">
        <p class="text-[#333] font-normal mt-5">توضیحات</p>
        <textarea
          class="w-full resize-none rounded-xl mt-5 p-4"
          v-model="message"
          name=""
          id=""
          cols="30"
          rows="10"
        ></textarea>
      </div>
      <div class="flex items-center justify-end mt-5">
        <button @click="sendMessage" class="w-[200px] rounded-lg border border-1 border-green-500 hover:bg-green-500 hover:text-white py-2">ارسال پیام</button>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      message: '',
      selectedOption: ''
    };
  },
  methods: {
    async sendMessage() {
      try {
        const response = await axios.post('https://jsonplaceholder.typicode.com/posts', {
          subject: this.selectedOption,
          description: this.message
        });
        console.log('Message sent successfully:', response.data);
    
      } catch (error) {
        console.error('Error sending message:', error);
        
      }
    }
  }
}
</script>
