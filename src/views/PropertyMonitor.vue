<template>
  <div
    class="w-[90%] min-h-[1000px] mx-auto bg-gray-300 shadow-lg py-10 px-3 lg:px-28 rounded-xl"
  >
    <div class="flex items-center justify-between">
      <h3 class="flex gap-1 items-center">
        <span class="text-[#333] font-semibold"> ملک های ثبت شده </span>
        <span class="text-[#333] font-semibold">⟵</span>
      </h3>
    </div>
    <div class="w-full relative mt-3">
      <input
        type="text"
        class="w-full py-2 px-3 rounded-lg text-sm border border-1 border-gray-400"
        placeholder="جستجو براساس نام  ، نام محدوده "
      />
      <img
        src="/icons/search.svg"
        class="w-6 absolute left-2 cursor-pointer top-2"
        alt=""
      />
    </div>
    <div class="flex mt-5 items-center justify-between">
      <div class="flex gap-2 text-sm">
        <span>نمایش</span>
        <span>20</span>
        <span>مورد از</span>
        <span>33620</span>
      </div>
    </div>
    <div class="flex items-center mt-5 gap-3 flex-wrap justify-center">
      <div
        v-if="products.length > 0"
        v-for="item in products"
        :key="item"
        class="mt-10"
      >
        <router-link to="/expertMonitor/DetailsFilesMonitor">
     
          <!-- طرح 6 -->
          <div
            class="max-w-sm mx-auto bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200"
          >
            <div
              class="bg-gradient-to-r from-blue-500 to-purple-500 h-48 relative"
            >
              <img
                :src="item.src"
                class="w-full h-full object-cover opacity-75"
                alt=""
              />
              <span
                class="absolute top-2 left-2 text-sm bg-white text-gray-800 rounded-md px-2 py-1"
                >{{ item.title }}</span
              >
            </div>
            <div class="p-6">
              <h2 class="text-lg font-bold text-gray-800">{{ item.type }}</h2>
              <p class="text-gray-600 mt-2">{{ item.dic }}</p>
              <div class="flex items-center mt-4">
                <img
                  src="/img/location.svg"
                  alt="location"
                  class="w-5 h-5 text-gray-500 mr-2"
                />
                <span class="text-gray-800">{{ item.city }}</span>
              </div>
              <div class="flex items-center mt-2">
                <img
                  src="/img/number.svg"
                  alt="number"
                  class="w-4 h-4 text-gray-500 mr-2"
                />
                <span class="text-gray-800">{{ item.code }}</span>
              </div>
              <div class="flex items-center mt-2">
                <img
                  src="/img/date2.svg"
                  alt="date"
                  class="w-5 h-5 text-gray-500 mr-2"
                />
                <span class="text-gray-800">{{ item.time }} ساعت پیش</span>
              </div>
            </div>
            <div class="bg-gray-100 px-6 py-4">
              <div
                v-if="item.type === 'رهن و اجاره'"
                class="flex justify-between items-center bg-pink-500 text-white py-2 px-4 rounded-md"
              >
                <div class="flex flex-col items-center">
                  <span class="text-sm">رهن</span>
                  <span class="font-semibold text-sm"
                    >{{ item.price }} میلیون تومان</span
                  >
                </div>
                <div class="flex flex-col items-center">
                  <span class="text-sm">اجاره</span>
                  <span class="font-semibold text-sm"
                    >{{ item.price2 }} میلیون تومان</span
                  >
                </div>
              </div>
              <div
                v-if="item.type === 'خرید و فروش'"
                class="flex justify-between items-center bg-green-500 text-white py-2 px-4 rounded-md"
              >
                <div class="flex flex-col items-center">
                  <span class="text-sm">قیمت متر</span>
                  <span class="font-semibold text-sm"
                    >{{ item.price }} تومان</span
                  >
                </div>
                <div class="flex flex-col items-center">
                  <span class="text-sm">قیمت کل</span>
                  <span class="font-semibold text-sm"
                    >{{ item.price2 }} میلیون تومان</span
                  >
                </div>
              </div>
            </div>
          </div>
        </router-link>
      </div>
      <div
        v-else-if="products.length == 0"
        class="flex flex-col items-center justify-center gap-5"
      >
        <img src="/img/file.svg" class="w-72" alt="" />
        <span class="text-[#333] font-semibold">هیچ فایلی ثبت نشده است !</span>
      </div>
    </div>
    <nav
      class="flex items-center justify-between border-t border-gray-200 px-4 sm:px-0 mt-10"
    >
      <div class="-mt-px flex w-0 flex-1">
        <a
          href="#"
          class="inline-flex items-center border-t-2 border-transparent pr-1 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
        >
          قبلی
        </a>
      </div>
      <div class="hidden md:-mt-px md:flex">
        <a
          href="#"
          class="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
          >1</a
        >
        <a
          href="#"
          class="inline-flex items-center border-t-2 border-indigo-500 px-4 pt-4 text-sm font-medium text-indigo-600"
          aria-current="page"
          >2</a
        >
        <a
          href="#"
          class="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
          >3</a
        >
        <a
          href="#"
          class="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
          >4</a
        >
        <a
          href="#"
          class="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
          >5</a
        >
        <a
          href="#"
          class="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
          >6</a
        >
      </div>
      <div class="-mt-px flex w-0 flex-1 justify-end">
        <a
          href="#"
          class="inline-flex items-center border-t-2 border-transparent pl-1 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
        >
          بعدی
        </a>
      </div>
    </nav>
    <div class="w-full h-48"></div>
  </div>
</template>
<script>
import { ref } from "vue";
import { Switch } from "@headlessui/vue";

const enabled = ref(false);

export default {
  components: {
    Switch,
  },
  setup() {
    const enabled = ref(false);

    return {
      enabled,
    };
  },
  data() {
    return {
      selectedButtonId: null,
      selectedButtonId2: null,
      selectedButtonId3: null,
      buttonsTransfer: [
        { id: 1, name: "فروش" },
        { id: 2, name: "رهن و اجاره" },
        { id: 3, name: "پیش فروش" },
        { id: 4, name: "مشارکت" },
        { id: 5, name: "تهاتر" },
      ],
      PropertyType: [
        { id: 1, name: "آپارتمان" },
        { id: 2, name: "خانه ویلایی" },
        { id: 3, name: "زمین" },
        { id: 4, name: "کلنگی" },
        { id: 5, name: "مغازه و تجاری" },
        { id: 6, name: "سوییت" },
        { id: 7, name: "سالن" },
        { id: 8, name: "ویلا" },
        { id: 9, name: "دفتر اداری" },
        { id: 10, name: "باغ" },
        { id: 11, name: "انبار" },
        { id: 12, name: "کارگاه" },
        { id: 13, name: "مستغلات" },
        { id: 14, name: "سوله" },
        { id: 15, name: "دامداری" },
        { id: 16, name: "مرغداری" },
        { id: 17, name: "هتل" },
        { id: 18, name: "صنعتی " },
      ],
      numberRooms: [
        { id: 1, name: "بدون اتاق" },
        { id: 2, name: " یک خواب " },
        { id: 3, name: " دو خواب" },
        { id: 4, name: "سه خواب" },
        { id: 5, name: "چهار خواب" },
        { id: 6, name: " 5 خواب به بالا" },
      ],
      products: [
        {
          id: 1,
          title: "اجاره سوله",
          type: "رهن و اجاره",
          dic: "صنعتی ، کشاورزی و تجاری",
          meter: "متراژ 170 متری",
          city: "بجنورد ",
          code: "23456",
          time: "5",
          price: "100",
          price2: "1",
          src: "/img/07.jpg",
        },
        {
          id: 2,
          title: "فروش واحد مسکونی",
          type: "خرید و فروش",
          dic: "فروش واحد مسکونی",
          meter: "متراژ 110 متری",
          city: " بجنورد",
          code: "34567",
          time: "7",
          price: "170",
          price2: "2,300",
          src: "/img/08.jpg",
        },
        {
          id: 3,
          title: "اجاره مسکونی",
          type: "رهن و اجاره",
          dic: "رهن واحد مسکونی",
          meter: "متراژ 115 متری",
          city: "بجنورد",
          code: "987543",
          time: "11",
          price: "1",
          price2: "200",
          src: "/img/09.jpg",
        },
        {
          id: 4,
          title: "اجاره سوله",
          type: "رهن و اجاره",
          dic: "صنعتی ، کشاورزی و تجاری",
          meter: "متراژ 170 متری",
          city: "بجنورد ",
          code: "23456",
          time: "5",
          price: "100",
          price2: "1",
          src: "/img/10.jpg",
        },
        {
          id: 6,
          title: "اجاره مسکونی",
          type: "رهن و اجاره",
          dic: "رهن واحد مسکونی",
          meter: "متراژ 115 متری",
          city: "بجنورد",
          code: "987543",
          time: "11",
          price: "1",
          price2: "200",
          src: "/img/11.jpg",
        },
        {
          id: 5,
          title: "فروش واحد مسکونی",
          type: "خرید و فروش",
          dic: "فروش واحد مسکونی",
          meter: "متراژ 110 متری",
          city: " بجنورد",
          code: "34567",
          time: "7",
          price: "170",
          price2: "2,300",
          src: "/img/12.jpg",
        },
      ],
    };
  },
  methods: {
    handleClick(id) {
      this.selectedButtonId = id;
    },
    handleClick2(id) {
      this.selectedButtonId2 = id;
    },
    handleClick3(id) {
      this.selectedButtonId3 = id;
    },
  },
};
</script>
