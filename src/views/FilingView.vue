<template>
  <div
    class="w-[90%] min-h-[1000px] mx-auto bg-gray-300 shadow-lg py-10 px-3 lg:px-28 rounded-xl"
  >
    <div class="flex items-center justify-between">
      <h3 class="flex gap-1 items-center">
        <span class="text-[#333] font-semibold"> فایلینگ</span>
        <span class="text-[#333] font-semibold">⟵</span>
      </h3>
      <div>
        <select
          id="transactionType"
          class="py-0.5 w-32 px-1 rounded-md border border-1 outline-none border-[#a3a3a3] flex items-center justify-between"
        >
          <option value="buy">خرید</option>
          <option value="sell">فروش</option>
        </select>
      </div>
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
      <div>
        <span
          @click="openModal = true"
          class="bg-green-300 text-sm py-1.5 px-4 rounded-lg border-green-700 border-1 border cursor-pointer text-gray-800 flex gap-2 items-center"
        >
          <span><img src="/img/filter.svg" class="w-4" alt="" /></span
          ><span>فیلترها</span>
        </span>
      </div>
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
        <router-link to="/advisor/detailsFiles">
          <div
            class="max-w-sm mx-auto bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <div
              class="bg-gradient-to-r from-purple-500 to-indigo-500 h-48 relative"
            >
              <img
                :src="item.src"
                class="w-full h-full object-cover opacity-75"
                alt=""
              />
              <span
                class="absolute top-2 left-2 text-white bg-gradient-to-r from-green-400 to-blue-400 rounded-md px-2 py-1"
                >{{ item.title }}</span
              >
            </div>
            <div class="p-6">
              <h2 class="text-xl font-bold text-gray-800">{{ item.type }}</h2>
              <p class="text-gray-600 mt-2">{{ item.dic }}</p>
              <div class="flex items-center mt-4 text-gray-700">
                <img
                  src="/img/location.svg"
                  alt="location"
                  class="w-5 h-5 mr-2"
                />
                <span>{{ item.city }}</span>
              </div>
              <div class="flex items-center mt-2 text-gray-700">
                <img src="/img/number.svg" alt="number" class="w-5 h-5 mr-2" />
                <span>{{ item.code }}</span>
              </div>
              <div class="flex items-center mt-2 text-gray-700">
                <img src="/img/date2.svg" alt="date" class="w-5 h-5 mr-2" />
                <span>{{ item.time }} ساعت پیش</span>
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
    <div
      v-if="openModal"
      class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
    >
      <div class="bg-white px-8 py-2 rounded-lg max-w-2xl">
        <div class="flex items-center justify-between py-3">
          <div class="text-gray-600 text-sm">فیلترها</div>
          <button
            @click="openModal = false"
            class="bg-red-500 hover:bg-red-600 text-white w-6 h-6 rounded-full"
          >
            x
          </button>
        </div>
        <div class="text-gray-600 text-sm py-2 mt-5">نوع واگذاری</div>
        <div class="flex gap-3 flex-wrap">
          <button
            v-for="button in buttonsTransfer"
            :key="button.id"
            @click="handleClick(button.id)"
            class="w-24 border border-1 border-green-400 rounded-lg py-1 text-sm"
            :style="{
              backgroundColor: button.id === selectedButtonId ? 'green' : '',
              color: button.id === selectedButtonId ? 'white' : '',
            }"
          >
            {{ button.name }}
          </button>
        </div>
        <div class="text-gray-600 text-sm py-2 mt-5">نوع ملک</div>
        <div class="flex gap-3 flex-wrap">
          <button
            v-for="button in PropertyType"
            :key="button.id"
            @click="handleClick2(button.id)"
            class="w-24 border border-1 border-green-400 rounded-lg py-1 text-sm"
            :style="{
              backgroundColor: button.id === selectedButtonId2 ? 'green' : '',
              color: button.id === selectedButtonId2 ? 'white' : '',
            }"
          >
            {{ button.name }}
          </button>
        </div>
        <div class="text-gray-600 text-sm py-2 mt-5">تعداد اتاق</div>
        <div class="flex gap-3 flex-wrap">
          <button
            v-for="button in numberRooms"
            :key="button.id"
            @click="handleClick3(button.id)"
            class="w-24 border border-1 border-green-400 rounded-lg py-1 text-sm"
            :style="{
              backgroundColor: button.id === selectedButtonId3 ? 'green' : '',
              color: button.id === selectedButtonId3 ? 'white' : '',
            }"
          >
            {{ button.name }}
          </button>
        </div>

        <div class="text-gray-600 text-sm py-2 mt-5">متراژ</div>
        <div class="flex gap-3 flex-wrap">
          <div class="relative">
            <label
              for="min-meter"
              class="absolute -top-2 right-2 inline-block bg-white px-1 text-xs font-medium text-gray-900"
              >حداقل متراژ</label
            >
            <input
              type="text"
              name="min-meter"
              id="min-meter"
              class="block pl-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder=""
              dir="ltr"
            />
          </div>
          <div class="relative">
            <label
              for="max-meter"
              class="absolute -top-2 right-2 inline-block bg-white px-1 text-xs font-medium text-gray-900"
              >حداکثر متراژ</label
            >
            <input
              type="text"
              name="max-meter"
              id="max-meter"
              class="block pl-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder=""
              dir="ltr"
            />
          </div>
        </div>
        <div class="flex items-center gap-3 mt-5">
          <div class="text-gray-600 text-sm py-2">قیمت توافقی</div>
          <Switch
            v-model="enabled"
            class="group relative inline-flex h-5 w-10 flex-shrink-0 cursor-pointer items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2"
          >
            <span class="sr-only">Use setting</span>
            <span
              aria-hidden="true"
              class="pointer-events-none absolute h-full w-full rounded-md bg-white"
            />
            <span
              aria-hidden="true"
              :class="[
                enabled ? 'bg-indigo-600' : 'bg-gray-200',
                'pointer-events-none absolute mx-auto h-4 w-9 rounded-full transition-colors duration-200 ease-in-out',
              ]"
            />
            <span
              aria-hidden="true"
              :class="[
                enabled ? 'translate-x-5' : 'translate-x-0',
                'pointer-events-none absolute left-0 inline-block h-5 w-5 transform rounded-full border border-gray-200 bg-white shadow ring-0 transition-transform duration-200 ease-in-out',
              ]"
            />
          </Switch>
        </div>
        <div v-if="!enabled">
          <div class="text-gray-600 text-sm py-2 mt-5">بازه قیمت</div>
          <div class="flex gap-3 flex-wrap">
            <div class="relative">
              <label
                for="min-meter"
                class="absolute -top-2 right-2 inline-block bg-white px-1 text-xs font-medium text-gray-900"
                >حداقل قیمت</label
              >
              <input
                type="text"
                name="min-meter"
                id="min-meter"
                class="block pl-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder=""
                dir="ltr"
              />
            </div>
            <div class="relative">
              <label
                for="max-meter"
                class="absolute -top-2 right-2 inline-block bg-white px-1 text-xs font-medium text-gray-900"
                >حداکثر قیمت</label
              >
              <input
                type="text"
                name="max-meter"
                id="max-meter"
                class="block pl-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder=""
                dir="ltr"
              />
            </div>
          </div>
        </div>
        <div class="flex items-center justify-between py-5">
          <button
            class="bg-red-500 hover:bg-red-600 text-white py-1.5 px-4 rounded-lg"
          >
            پاکسازی
          </button>
          <button
            class="bg-green-500 hover:bg-green-600 text-white py-1.5 px-4 rounded-lg"
          >
            اعمال فیلتر
          </button>
        </div>
      </div>
    </div>
    <div class="w-full h-60"></div>
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
      openModal: false,
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
