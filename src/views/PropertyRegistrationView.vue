<template>
  <div
    class="w-[90%] min-h-[1000px] mx-auto bg-gray-200 shadow-lg py-10 px-3 lg:px-28 rounded-xl"
  >
    <div class="flex items-center justify-between">
      <h3 class="flex gap-1 items-center">
        <span class="text-[#333] text-base font-semibold"> ثبت ملک </span>
        <span class="text-[#333] font-semibold">⟵</span>
      </h3>
    </div>
    <div class="mt-6">
      <div class="flex flex-col lg:flex-row gap-3">
        <div class="w-full lg:w-1/3">
          <label
            for="location"
            class="block text-sm font-medium leading-6 text-gray-900"
            >وضعیت ملک</label
          >
          <select
            id="location"
            name="location"
            class="mt-2 block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
          >
            <option>در حال ساخت</option>
            <option>زمین خالصه</option>
            <option>در مرحله فروش</option>
            <option>اجاره</option>
            <option>رهن</option>
          </select>
        </div>
        <div class="w-full lg:w-1/3">
          <label
            for="location"
            class="block text-sm font-medium leading-6 text-gray-900"
            >منبع اطلاعات</label
          >
          <select
            id="location"
            name="location"
            class="mt-2 block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
          >
            <option>مالک</option>
            <option>همساده</option>
            <option>افراد محل</option>
            <option>سایر موارد</option>
          </select>
        </div>
        <div class="w-full lg:w-1/3">
          <label
            for="email"
            class="block text-sm font-medium leading-6 text-gray-900"
            >مساحت تقریبی</label
          >
          <div class="mt-2">
            <input
              type="text"
              name="email"
              id="email"
              class="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="100"
            />
          </div>
        </div>
      </div>
      <div class="flex flex-col lg:flex-row gap-3 mt-6">
        <div class="w-full lg:w-1/3">
          <label
            for="location"
            class="block text-sm font-medium leading-6 text-gray-900"
            >نوع ملک</label
          >
          <select
            id="location"
            name="location"
            class="mt-2 block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
          >
            <option>مسکونی</option>
            <option>تجاری</option>
            <option>اپارتمان</option>
            <option>ویلایی</option>
            <option>ملک بالای ده سال ساخت</option>
            <option>سایر</option>
          </select>
        </div>
        <div class="w-full lg:w-1/3">
          <label
            for="email"
            class="block text-sm font-medium leading-6 text-gray-900"
          >
            آدرس</label
          >
          <div class="mt-2">
            <input
              type="text"
              name="email"
              id="email"
              class="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="خیابان آزادی"
            />
          </div>
        </div>
        <div class="w-full lg:w-1/3">
          <label
            for="email"
            class="block text-sm font-medium leading-6 text-gray-900"
          >
            قیمت تقریبی جهت خرید(به میلیون)</label
          >
          <div class="mt-2">
            <input
              type="text"
              name="email"
              id="email"
              class="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="100"
            />
          </div>
        </div>
      </div>
      <div class="flex flex-col lg:flex-row gap-3 mt-6">
        <div class="w-full lg:w-2/3">
          <label
            for="location"
            class="block text-sm font-medium leading-6 text-gray-900"
          >
            ثبت لوکیشن</label
          >
          <div class="mt-2 relative h-20">
            <input
              type="text"
              name="address"
              id="address"
              disabled
              v-model="address"
              class="block w-full rounded-md border-0 py-2 px-3 text-gray-900 text-right shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="خیابان آزادی"
            />
            <button
              id="location"
              name="location"
              @click="getLocation"
              class="rounded-l-md bg-green-500 text-white border-0 py-2 px-3 ring-1 ring-inset  hover:bg-green-700 absolute left-0 top-0"
            >
              ثبت لوکیشن
            </button>
          </div>
        </div>
        <div class="w-full lg:w-1/3">
          <label
            for="email"
            class="block text-sm font-medium leading-6 text-gray-900"
          >
            قیمت تقریبی رهن (به میلیون)</label
          >
          <div class="mt-2">
            <input
              type="text"
              name="email"
              id="email"
              class="block w-full rounded-md border-0 py-2 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="100"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="w-full mt-6">
      <label
        for="description"
        class="block text-sm font-medium leading-6 text-gray-900"
      >
        سایر توضیحات
      </label>
      <div class="mt-2">
        <textarea
          name="description"
          id="description"
          rows="8"
          class="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          placeholder="توضیحات خود را اینجا بنویسید"
        ></textarea>
      </div>
    </div>
    <div class="w-full flex items-center justify-end mt-10">
        <button
              
              class="rounded-md bg-green-500 text-white border-0 py-2 px-10 w-[200px] ring-1 ring-inset sm:text-sm hover:bg-green-700 "
            >
              ذخیره  
            </button>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      address: "",
    };
  },
  methods: {
    getLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          this.showPosition,
          this.showError,
          {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0,
          }
        );
      } else {
        alert("Geolocation is not supported by this browser.");
      }
  
    },
    showPosition(position) {
      const lat = position.coords.latitude;
      const lng = position.coords.longitude;
      const url = `https://map.ir/reverse?lat=${lat}&lon=${lng}`;

      axios
        .get(url, {
          headers: {
            "x-api-key":
              "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImNmZTIxZTQ1Mjg2MWZlYzMzNjcxNmYyYjU5YmQ4NDM0MTViMDBjMWNlYTM1YjE1NDIyMDcyMzYxN2M3ODE5ODQ2YWRlYmNhMWJhODk1M2RhIn0.eyJhdWQiOiIyNzU1MSIsImp0aSI6ImNmZTIxZTQ1Mjg2MWZlYzMzNjcxNmYyYjU5YmQ4NDM0MTViMDBjMWNlYTM1YjE1NDIyMDcyMzYxN2M3ODE5ODQ2YWRlYmNhMWJhODk1M2RhIiwiaWF0IjoxNzE2OTU4ODA0LCJuYmYiOjE3MTY5NTg4MDQsImV4cCI6MTcxOTU1MDgwNCwic3ViIjoiIiwic2NvcGVzIjpbImJhc2ljIl19.AIpWBnYBcooIcXTqaaAV8pYQorsdjk3H3cjaG9D1v_AmlYhK8L92ZMFmGxCwukjazeZPuloWIv_9FQDX3FF7fdSag23Ah1NDINSxhGJ80TQw1JB5bXAwZE0t8fyhoIULSamywHeHt7JloG2-bge9OgwGxu_VLX9fAc7VZUVkn2M1JnAaJr_MmabdqRtt9wD2wXvnMomCHJF7Dads2hBVuoidQhALmli0FQDmZZIzOlhC2TNo_woIPEPa2Vn58JLqH-972aFYZuhUKE7KQ2Gb8LBcrcajkNp3XvPH0_KngObMqxxzjseZdZ1nQ3eVBRHOdI8XsKGcqPLI12qiUk2wvw", // جایگزین کردن YOUR_API_KEY با کلید API شما
          },
        })
        .then((response) => {
          this.address = `${response.data.address_compact} (Lat: ${lat}, Lng: ${lng})`;
          alert("لوکیشن با موفقیت ثبت شد");
        })
        .catch((error) => {
          alert("Error: " + error);
        });
    },
    showError(error) {
      switch (error.code) {
        case error.PERMISSION_DENIED:
          alert("User denied the request for Geolocation.");
          break;
        case error.POSITION_UNAVAILABLE:
          alert("Location information is unavailable.");
          break;
        case error.TIMEOUT:
          alert("The request to get user location timed out.");
          break;
        case error.UNKNOWN_ERROR:
          alert("An unknown error occurred.");
          break;
      }
    },
  },
};
</script>

<!-- eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImNmZTIxZTQ1Mjg2MWZlYzMzNjcxNmYyYjU5YmQ4NDM0MTViMDBjMWNlYTM1YjE1NDIyMDcyMzYxN2M3ODE5ODQ2YWRlYmNhMWJhODk1M2RhIn0.eyJhdWQiOiIyNzU1MSIsImp0aSI6ImNmZTIxZTQ1Mjg2MWZlYzMzNjcxNmYyYjU5YmQ4NDM0MTViMDBjMWNlYTM1YjE1NDIyMDcyMzYxN2M3ODE5ODQ2YWRlYmNhMWJhODk1M2RhIiwiaWF0IjoxNzE2OTU4ODA0LCJuYmYiOjE3MTY5NTg4MDQsImV4cCI6MTcxOTU1MDgwNCwic3ViIjoiIiwic2NvcGVzIjpbImJhc2ljIl19.AIpWBnYBcooIcXTqaaAV8pYQorsdjk3H3cjaG9D1v_AmlYhK8L92ZMFmGxCwukjazeZPuloWIv_9FQDX3FF7fdSag23Ah1NDINSxhGJ80TQw1JB5bXAwZE0t8fyhoIULSamywHeHt7JloG2-bge9OgwGxu_VLX9fAc7VZUVkn2M1JnAaJr_MmabdqRtt9wD2wXvnMomCHJF7Dads2hBVuoidQhALmli0FQDmZZIzOlhC2TNo_woIPEPa2Vn58JLqH-972aFYZuhUKE7KQ2Gb8LBcrcajkNp3XvPH0_KngObMqxxzjseZdZ1nQ3eVBRHOdI8XsKGcqPLI12qiUk2wvw -->
