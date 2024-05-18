<template>
  <div
  class="w-[90%]  min-h-[1000px] mx-auto bg-gray-300 shadow-lg py-10 px-3 lg:px-28 rounded-xl"
  >
    <div>
      <h3 class="flex gap-1 items-center">
        <span class="text-[#333] font-semibold">  مشتریان من </span>
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
      <div>
        <span
          @click="openModal = true"
          class="bg-green-300 text-sm py-2.5 px-4 rounded-lg border-green-700 border-1 border cursor-pointer text-gray-800 flex gap-2 items-center"
        >
          <span><img src="/img/filter.svg" class="w-5" alt="" /></span
          ><span>فیلترها</span>
        </span>
      </div>
      <div class="flex gap-2 text-sm">
        <span
          @click="openModal2 = true"
          class="bg-green-300 text-sm py-1.5 px-4 rounded-lg border-green-700 border-1 border cursor-pointer text-gray-800 flex gap-2 items-center justify-between"
        >
          <span class="text-green-800 text-lg">+</span><span>ثبت مشتری</span>
        </span>
      </div>
    </div>
    <div class="flex items-center mt-5 gap-3 flex-wrap justify-center">
      <div
        v-if="products.length > 0"
        v-for="item in products"
        :key="item"
        class="mt-10"
      >
        <a href="#">
          <div
            class="shadow-lg rounded-xl bg-white font-yekan overflow-hidden border-t border-t-[#eaeaea]"
          >
            <div class="p-6 bg-gray-100">
              <div class="w-full bg-gray-200 relative  rounded-t-lg overflow-hidden">
                <span class="absolute text-green-100 right-1 top-1 text-sm bg-green-700 rounded-md px-1">{{ item.title }}</span>
               <img :src="item.src" width="280px" height="80px" alt="">
              </div>
              <div
                class="text-white flex justify-around items-center py-2 pb-2 text-sm px-2 border-b border-dashed border-gray-300 bg-gray-700"
              >
                <div class="text-primary-10">
                  <span class="font-bold text-pink"> {{ item.type }} </span>
                </div>
                <div>{{ item.dic }}</div>
                <div></div>
              </div>
              <div
                class="bg-gray-200 inline-flex w-full justify-between items-center pb-2 border-b border-dashed border-gray-300 py-2 px-1"
              >
                <div class="text-sm">{{ item.meter }}</div>
                <div  class="ml-1 min-w-[20px] flex gap-2">
                  <img src="/img/location.svg" alt="location" class="w-5 h-5" />
                  <div class="min-w-0">
                    <p class="text-[#333] truncate font-semibold text-sm">
                      {{ item.city }}
                    </p>
                  </div>
                </div>
              </div>
              <div
                class="flex justify-between w-full items-center py-2 px-1 bg-gray-600 rounded-b-lg"
              >
                <div class="flex items-center">
                  <div class="m-1">
                    <img
                      src="/number.svg"
                      alt="number"
                      class="w-4 h-4 bg-white rounded-md"
                    />
                  </div>
                  <div class="font-yekanNum text-sm text-white">
                    {{ item.code }}
                  </div>
                </div>
                <div class="flex items-center ng-star-inserted">
                  <div class="m-1">
                    <img src="/img/date2.svg" alt="date" class="w-5 h-5 bg-white rounded-lg" />
                  </div>
                  <div class="font-yekanNum text-sm text-white">
                    {{ item.time }} ساعت پیش
                  </div>
                </div>
                <div class="flex justify-between items-center"></div>
              </div>
            </div>
            <div
              class="flex justify-center items-center pink px-0 py-2 text-white bg-[#f800ce] ng-star-inserted"
              v-if="item.type === 'رهن و اجاره'"
            >
              <div class="flex justify-start items-center mx-2">
                <div class="mx-1 font-yekan text-sm ng-star-inserted">رهن:</div>
                <div class="font-yekan text-sm ng-star-inserted">
                  {{ item.price }} میلیون تومان
                </div>
              </div>
              <div class="flex justify-start items-center mx-2">
                <div class="mx-1 font-yekan text-sm ng-star-inserted">
                  اجاره:
                </div>
                <div class="font-yekan text-sm ng-star-inserted">
                  {{ item.price2 }} میلیون تومان
                </div>
              </div>
            </div>
            <div
              class="flex justify-center items-center pink px-0 py-2 text-white bg-[#46e940] ng-star-inserted"
              v-if="item.type === 'خرید و فروش'"
            >
              <div class="flex justify-start items-center mx-2">
                <div class="mx-1 font-yekan text-sm ng-star-inserted">
                  قیمت متر:
                </div>
                <div class="font-yekan text-sm ng-star-inserted">
                  {{ item.price }} تومان
                </div>
              </div>
              <div class="flex justify-start items-center mx-2">
                <div class="mx-1 font-yekan text-sm ng-star-inserted">
                  قیمت کل:
                </div>
                <div class="font-yekan text-sm ng-star-inserted">
                  {{ item.price2 }} میلیون تومان
                </div>
              </div>
            </div>
          </div>
        </a>
      </div>
      <div
        v-else-if="products.length == 0"
        class="flex flex-col items-center justify-center gap-5"
      >
        <img src="/img/file.svg" class="w-72" alt="" />
        <span class="text-[#333] font-semibold">هیچ فایلی ثبت نشده است !</span>
      </div>
    </div>
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
    <div
      v-if="openModal2"
      class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
    >
      <div class="bg-white px-8 py-2 rounded-lg w-[80%]">
        <div class="flex items-center justify-between py-3">
          <div class="text-gray-600 text-lg">ثبت فایل</div>
          <button
            @click="openModal2 = false"
            class="bg-red-500 hover:bg-red-600 text-white w-6 h-6 rounded-full"
          >
            x
          </button>
        </div>
        <div>
          <div class="w-full flex flex-col lg:flex-row gap-3">
            <div class="w-full lg:w-1/3">
              <p class="text-[#333] text-sm py-2">نوع واگذاری</p>
              <select
                class="w-full border border-1 border-gray-500 rounded-lg px-4 py-1"
              >
                <option value="1">فروش</option>
                <option value="2">رهن</option>
                <option value="3">پیش‌فروش</option>
                <option value="4">مشارکت</option>
              </select>
            </div>
            <div class="w-full lg:w-1/3">
              <p class="text-[#333] text-sm py-2">نوع ملک</p>
              <select
                class="w-full border border-1 border-gray-500 rounded-lg px-4 py-1"
              >
                <option value="1">خانه ویلایی</option>
                <option value="2">آپارتمان</option>
                <option value="3">زمین</option>
                <option value="4">کلنگی</option>
              </select>
            </div>
            <div class="w-full lg:w-1/3">
              <p class="text-[#333] text-sm py-2">نوع کاربری</p>
              <select
                class="w-full border border-1 border-gray-500 rounded-lg px-4 py-1"
              >
                <option value="sales">مسکونی</option>
                <option value="mortgage">اداری</option>
                <option value="pre-sale">تجاری</option>
                <option value="partnership">اقامتی</option>
              </select>
            </div>
          </div>
          <div class="w-full flex flex-col lg:flex-row gap-3 mt-3">
            <div class="w-full lg:w-1/3">
              <p class="text-[#333] text-sm py-2">متراژ</p>
              <input
                type="text"
                class="w-full border border-1 border-gray-500 rounded-lg px-4 py-1"
                placeholder=""
                dir="ltr"
              />
            </div>
            <div class="w-full lg:w-1/3">
              <p class="text-[#333] text-sm py-2">قیمت متر مربع (تومان)</p>
              <input
                type="text"
                class="w-full border border-1 border-gray-500 rounded-lg px-4 py-1"
                placeholder=""
                dir="ltr"
              />
            </div>
            <div class="w-full lg:w-1/3">
              <p class="text-[#333] text-sm py-2">قیمت کل (تومان)</p>
              <input
                type="text"
                class="w-full border border-1 border-gray-500 rounded-lg px-4 py-1"
                placeholder=""
                dir="ltr"
              />
            </div>
          </div>
          <div class="w-full flex flex-col lg:flex-row gap-3 mt-3">
            <div class="w-full lg:w-1/3">
              <p class="text-[#333] text-sm py-2">معاوضه</p>
              <select
                class="w-full border border-1 border-gray-500 rounded-lg px-4 py-1"
              >
                <option value="1">دارد</option>
                <option value="2">ندارد</option>
              </select>
            </div>
            <div class="w-full lg:w-1/3">
              <p class="text-[#333] text-sm py-2">وام</p>
              <select
                class="w-full border border-1 border-gray-500 rounded-lg px-4 py-1"
              >
                <option value="1">دارد</option>
                <option value="2">ندارد</option>
              </select>
            </div>
            <div class="w-full lg:w-1/3">
              <p class="text-[#333] text-sm py-2">مبلغ وام (اگر وام دارد)</p>
              <input
                type="text"
                class="w-full border border-1 border-gray-500 rounded-lg px-4 py-1.5"
                placeholder=""
                dir="ltr"
              />
            </div>
          </div>
          <div class="w-full flex flex-col lg:flex-row gap-3 mt-3">
            <div class="w-full lg:w-1/3">
              <p class="text-[#333] text-sm py-2">استان</p>
              <select
                class="w-full border border-1 border-gray-500 rounded-lg px-4 py-1"
              >
                <option value="1">تهران</option>
                <option value="2">مشهد</option>
                <option value="3">خراسان شمالی</option>
                <option value="4">خراسان رضوی</option>
              </select>
            </div>
            <div class="w-full lg:w-1/3">
              <p class="text-[#333] text-sm py-2">شهر</p>
              <select
                class="w-full border border-1 border-gray-500 rounded-lg px-4 py-1"
              >
                <option value="1">بجنورد</option>
                <option value="2">شیروان</option>
                <option value="3">فاروج</option>
                <option value="4">اسفراین</option>
              </select>
            </div>
            <div class="w-full lg:w-1/3">
              <p class="text-[#333] text-sm py-2">کوچه</p>
              <input
                type="text"
                class="w-full border border-1 border-gray-500 rounded-lg px-4 py-1.5"
                placeholder="ادرس ملک"
              />
            </div>
          </div>
          <div class="w-full mt-3">
            <p class="text-[#333] text-sm py-2">انتخاب تصاویر</p>
            <div class="relative">
              <input
                type="file"
                accept="image/*"
                class="hidden"
                id="imageInput"
                @input="previewImages"
                multiple
              />
              <label for="imageInput" class="w-full h-full cursor-pointer">
                <div
                  class="w-full border border-1 border-gray-500 rounded-lg px-4 py-1 flex items-center justify-between"
                >
                  <span class="text-[#333] placeholder-[#999]">
                    تصاویر را انتخاب کنید...
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 text-gray-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12 5l-8 8 1.5 1.5 8-8L18 9l1.5-1.5L12 2z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
              </label>
              <div
                class="mt-2 flex gap-3 items-center border border-1 border-gray-500 rounded-lg p-2"
              >
                <div v-if="images.length > 0" class="flex gap-3 items-center">
                  <img
                    v-for="(image, index) in images"
                    :key="index"
                    :src="image"
                    class="w-[100px] h-16 mr-2"
                  />
                </div>
                <div
                  class="flex items-center justify-center w-full text-sm text-[#333]"
                  v-else
                >
                  <p>تصویری انتخاب نشده است.</p>
                </div>
              </div>
            </div>
          </div>
          <div class="w-full mt-3">
            <p class="text-[#333] text-sm py-2">امکانات</p>
            <div class="flex gap-3 flex-wrap">
              <div
                v-for="i in Possibilities"
                :key="i"
                class="flex items-center"
              >
                <label :for="'checkbox-' + i">{{ i }}</label>
                <input type="checkbox" :id="'checkbox-' + i" class="mr-1" />
              </div>
            </div>
          </div>
          <div class="w-full flex flex-col lg:flex-row gap-3 mt-3">
            <div class="w-full lg:w-1/3">
              <p class="text-[#333] text-sm py-2">نام و نام خانوادگی</p>
              <input
                type="text"
                class="w-full border border-1 border-gray-500 rounded-lg px-4 py-1"
                placeholder=""
                dir="ltr"
              />
            </div>
            <div class="w-full lg:w-1/3">
              <p class="text-[#333] text-sm py-2">شماره تماس 1</p>
              <input
                type="text"
                class="w-full border border-1 border-gray-500 rounded-lg px-4 py-1"
                placeholder=""
                dir="ltr"
              />
            </div>
            <div class="w-full lg:w-1/3">
              <p class="text-[#333] text-sm py-2">شماره تماس 2</p>
              <input
                type="text"
                class="w-full border border-1 border-gray-500 rounded-lg px-4 py-1"
                placeholder=""
                dir="ltr"
              />
            </div>
          </div>
          <div class="flex items-center justify-end w-full mt-3">
            <button
              class="border border-1 border-green-600 rounded-lg px-5 py-2 text-[#333] hover:bg-green-600 hover:text-white text-sm"
            >
              ثبت فایل
            </button>
          </div>
        </div>
      </div>
    </div>
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
      openModal2: false,
      selectedButtonId: null,
      selectedButtonId2: null,
      selectedButtonId3: null,
      products: [
        // {
        //   id: 1,
        //   title: "اجاره سوله",
        //   type: "رهن و اجاره",
        //   dic: "صنعتی ، کشاورزی و تجاری",
        //   meter: "متراژ 170 متری",
        //   city: "بجنورد ",
        //   code: "23456",
        //   time: "5",
        //   price: "100",
        //   price2: "1",
        //   src: "/07.jpg",
        // }
      ],
      images: [],
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
      Possibilities: [
        "استخر",
        "پارکینگ",
        "انباری",
        "تراس",
        "کابینت",
        "نگهبانی",
        "جکوزی",
        "سونا",
        "دزدگیر",
        "اتاق بازی",
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
    previewImages(event) {
      const input = event.target;

      if (input.files) {
        for (let i = 0; i < input.files.length; i++) {
          const reader = new FileReader();
          reader.onload = (e) => {
            this.images.push(e.target.result);
          };
          reader.readAsDataURL(input.files[i]);
        }
      }
    },
  },
};
</script>
