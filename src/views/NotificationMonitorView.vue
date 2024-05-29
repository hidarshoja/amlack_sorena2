<template>
  <div>
    <div
      class="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-80 z-50"
      v-if="modalOpen"
    >
      <div
        class="bg-white w-[70%] md:w-[50%] lg:w-[40%] h-72 flex items-center justify-center rounded-lg shadow-lg p-6 relative"
      >
        <button
          @click="closeModal"
          class="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
        >
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>
        <p class="text-lg text-gray-800">{{ modalContent }}</p>
      </div>
    </div>
    <div
      class="w-[89%] md:w-[67%] lg:w-[75%] min-h-[1000px] mx-auto bg-gray-300 shadow-lg py-10 px-3 rounded-xl"
    >
      <h3 class="flex gap-1">
        <span class="text-[#333] font-semibold">اطلاعیه ها</span>
        <span class="text-[#333] font-semibold">⟵</span>
      </h3>
      <div
        v-for="(notification, index) in notifications"
        :key="index"
        class="w-full h-28 flex items-center justify-between bg-[#e9e9ff] text-[#696cff] rounded-lg border-r-[8px] border-green-400 py-2 px-4 mt-5"
      >
        <div class="flex gap-3 items-center cursor-pointer">
          <div class="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
            <img src="/img/network.png" class="w-6" alt="" />
          </div>
          <div>
            <span>{{ notification.title }}</span>
          </div>
        </div>
        <div class="flex flex-col gap-4">
          <div class="flex items-center justify-end">
            <button
              @click="openModal(notification.content)"
              class="bg-[#696cff] text-white py-1.5 px-4 rounded-lg cursor-pointer hover:bg-[#1d1e4d]"
            >
              مشاهده
            </button>
          </div>
          <div class="flex items-center gap-4 text-sm">
            <span>
              <img src="/img/date.svg" class="w-4" alt="" />
            </span>
            <span>{{ notification.date }}</span>
            <span>{{ notification.time }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      modalOpen: false,
      modalContent: "",
      notifications: [
        {
          title: "جستجو بیشتر در خصوص ملک امامی 15",
          content: "با سلام لطفا در خصوص ملک شماره 15 واقع در خیابان امامی 15 با جزییات بیشتری تحقیق کنید.",
          date: "1403/10/12",
          time: "9:53:12",
        },
        {
          title: "ملک شماره 20 در خیابان آزادی",
          content: "ملک شماره 20 در خیابان آزادی آماده فروش می‌باشد. لطفا بررسی کنید.",
          date: "1403/10/13",
          time: "10:15:30",
        },
        {
          title: "ملک شماره 5 در خیابان ولیعصر",
          content: "ملک شماره 5 در خیابان ولیعصر با شرایط ویژه برای فروش موجود است. لطفا تماس بگیرید.",
          date: "1403/10/14",
          time: "11:45:00",
        },
        {
          title: "ملک شماره 18 در خیابان انقلاب",
          content: "ملک شماره 18 در خیابان انقلاب با تخفیف ویژه به فروش می‌رسد. برای اطلاعات بیشتر تماس بگیرید.",
          date: "1403/10/15",
          time: "12:30:45",
        },
        {
          title: "ملک شماره 7 در خیابان سعدی",
          content: "ملک شماره 7 در خیابان سعدی آماده بازدید می‌باشد. لطفا هماهنگی‌های لازم را انجام دهید.",
          date: "1403/10/16",
          time: "14:00:20",
        },
      ],
    };
  },
  methods: {
    openModal(content) {
      this.modalContent = content;
      this.modalOpen = true;
    },
    closeModal() {
      this.modalOpen = false;
    },
  },
};
</script>
