<template>
  <div
  class="w-[90%]  min-h-[1000px] mx-auto bg-gray-300 shadow-lg py-10 px-3 lg:px-28 rounded-xl"
  >
    <h3 class="flex gap-1 items-center">
      <span class="text-[#333] font-semibold"> خرید اشتراک </span>
      <span class="text-[#333] font-semibold">⟵</span>
    </h3>
    <div class="mt-10">
      <div class="mt-4" v-for="(item, index) in fileHomes" :key="index">
        <div
          class="w-full h-20 bg-gray-100 rounded-lg border-r-[5px] border-green-400 flex items-center justify-between px-3 mt-4 hover:bg-green-300 hover:border-red-500 cursor-pointer"
        >
          <span class="text-base text-green-700"> {{ item.label }}</span>

          <span class="text-[#A0BF12] text-sm">{{ item.description }} </span>
          <span class="text-3xl">›</span>
        </div>
      </div>
    </div>
    <div
      class="w-full h-20 bg-gray-100 rounded-lg flex items-center justify-between px-3 mt-4 cursor-pointer"
    >
      <span class="text-base text-green-700">کد تخفیف</span>
      <button
        class="text-lg py-1 flex items-center justify-center px-2 border border-1 border-gray-300 rounded-lg hover:bg-gray-700 hover:text-white w-9 h-9"
        @click="toggleButton"
      >
        +
      </button>
    </div>
    <div
      v-show="isInputVisible"
      class="w-full h-20 bg-gray-100 rounded-b-lg flex items-center justify-between px-3 mt-[-5px] cursor-pointer"
    >
      <input
        type="text"
        class="px-3 py-2 rounded-lg border border-1 border-gray-300 outline-none"
        dir="ltr"
      />
      <button
        class="border border-1 border-green-500 rounded-xl text-sm py-2 px-4 flex justify-center items-center h-[44px] hover:bg-green-500 hover:text-white"
      >
        بررسی کد
      </button>
    </div>
    <div class="w-full min-h-20 bg-gray-100 rounded-lg px-3">
      <div
        class="w-full h-20 bg-gray-100 rounded-lg flex items-center justify-start px-3 mt-4 cursor-pointer"
      >
        <span class="text-base text-green-700">کدهای تخفیف من</span>
      </div>
      <div class="px-3 overflow-x-auto">
        <table class="min-w-full">
              <thead class="bg-green-950">
                <tr>
                  <th scope="col" class="py-8 pr-2 text-center text-sm font-semibold text-gray-100">کد تخفیف</th>
                  <th scope="col" class="px-8  text-center text-sm font-semibold text-gray-100">به ارزش (تومان)</th>
                  <th scope="col" class="px-8  text-center text-sm font-semibold text-gray-100">تاریخ پرداخت</th>
                  <th scope="col" class="px-8  text-center text-sm font-semibold text-gray-100">بابت</th>
                  <th scope="col" class="px-8  text-center text-sm font-semibold text-gray-100">وضعیت استفاده</th>
                </tr>
              </thead>
              <tbody class="bg-white">
                <tr v-for="(person, personIdx ) in people" :key="person.email" :class="personIdx % 2 === 0 ? undefined : 'bg-gray-50'">
                  <td class="whitespace-nowrap px-3 py-4 text-sm text-center text-gray-500">{{ person.code }}</td>
                  <td class="whitespace-nowrap px-3 py-4 text-sm text-center text-gray-500">{{ person.price }}</td>
                  <td class="whitespace-nowrap px-3 py-4 text-sm text-center text-gray-500">{{ person.date }}</td>
                  <td class="whitespace-nowrap px-3 py-4 text-sm text-center text-gray-500">{{ person.state }}</td>
                  <td class="whitespace-nowrap px-3 py-4 text-sm text-center text-gray-500">{{ person.state2 }}</td>
                 
                 
                </tr>
              </tbody>
            </table>
      </div>
    </div>
    <div class="w-full h-60"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      fileHomes: [
        {
          label: "فایلینگ 1 ماهه",
          description: "150 هزار تومان",
        },
        { label: "فایلینگ سه ماهه", description: "420 هزار تومان" },
        {
          label: "فایلینگ شش ماهه",
          description: "800 هزار تومان",
        },
        {
          label: "فایلینگ 12 ماهه",
          description: "1,440 هزار تومان",
        },
        {
          label: " مدیریت دفاتر و مشاورین زیر مجموعه (سالانه )",
          description: "500 هزار تومان",
        },
        {
          label: "سایت شخصی متصل به پنل (سالانه ) ",
          description: "2,400 هزار تومان ",
        },
      ],
     people : [
    { code: '123', title: 'خرید بسته ثابت', price: '99', price2: '9' , date :"1402/10/12" , state :"ثبت نام اولیه" , state2 :"درحال استفاده"  },
    { code: '124', title: 'خرید بسته ماهانه', price: '199', price2: '99' , date :"1402/10/12" , state :"فایلینگ 1 ماهه" , state2 :"منقضی"  },
    { code: '125', title: 'خرید بسته یک روزه', price: '299', price2: '19' , date :"1402/10/12" , state :"کد تخفیف" , state2 :"درحال استفاده" },
    { code: '126', title: 'خرید بسته اشتراک ویژه', price: '499', price2: '99' , date :"1402/10/12" , state :"خرید" , state2 :"درحال استفاده" },
  ],

      isInputVisible: false,
    };
  },
  methods: {
    toggleButton() {
      this.isInputVisible = !this.isInputVisible;
    },
  },
};
</script>
<style scoped>
</style>
