<template>
  <div
  class="w-[90%]  min-h-[1000px] mx-auto bg-gray-300 shadow-lg py-10 px-3 lg:px-28 rounded-xl"
  >
    <h3 class="flex gap-1 items-center">
      <span class="text-[#333] font-semibold"> لیست مشاورین </span>
      <span class="text-[#333] font-semibold">⟵</span>
    </h3>
    <div class="flex w-full items-center justify-end">
      <span
        class="flex gap-4 shadow-lg px-5 cursor-pointer py-2 text-white rounded-lg justify-between items-center bg-green-600 hover:bg-green-800"
        @click="openModal = true"
      >
        <span class="text-2xl">+</span>
        <span>ثبت مشاور</span>
      </span>
    </div>
    <div class="w-full h-screen">
      <div
        class="flex w-full h-screen items-center justify-center flex-col gap-5"
      >
        <img src="/img/widht.svg" class="w-[280px] lg:w-[350px]" alt="" />
        <p>تاکنون هیچ مشاوری ثبت نکرده اید</p>
      </div>
    </div>
    <div
      v-if="openModal"
      class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
    >
      <div class="bg-white px-8 py-2 rounded-lg max-w-3xl w-[80%]">
        <div class="flex items-center justify-between py-3">
          <div class="text-gray-600 text-sm">افزودن مشاور</div>
          <button
            @click="openModal = false"
            class="bg-red-500 hover:bg-red-600 text-white w-6 h-6 rounded-full"
          >
            x
          </button>
        </div>
        <form action="#" method="POST" className="space-y-6 mt-10">
          <div className="flex flex-col md:flex-row gap-1">
            <div className="w-full md:w-1/2">
              <label
                htmlFor="name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                نام مشاور
              </label>
              <div className="mt-2">
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="block w-full rounded-md border-0 py-2 px-1 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <label
                htmlFor="family"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                نام خانوادگی مشاور
              </label>
              <div className="mt-2">
                <input
                  id="family"
                  name="family"
                  type="text"
                  required
                  className="block w-full rounded-md border-0 py-2 px-1 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
          <div className="flex gap-1 flex-col md:flex-row ">
            <div className="w-full md:w-1/2">
              <label
                htmlFor="managerName"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                شماره همراه مشاور
              </label>
              <div className="mt-2">
                <input
                  id="managerName"
                  name="managerName"
                  type="text"
                  dir="ltr"
                  required
                  className="block w-full rounded-md border-0 py-2 px-1 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <label
                htmlFor="address"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                نقش مشاور
              </label>
              <div className="mt-2">
                <select
                  id="address"
                  name="address"
                  required
                  class="block w-full rounded-md border-0 py-2 px-1 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                >
                  <option value="1">مشاور رهن و اجاره</option>
                  <option value="2">مشاور فروش</option>
                  <option value="3">مشاور آزاد</option>
                  <option value="4">پذیرشگر</option>
                </select>
              </div>
            </div>
          </div>
          <div className="flex gap-1 flex-col md:flex-row ">
            <div
              class="w-1/2 flex items-center justify-between rounded-md border-0 py-2 px-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            >
              <div>مشاور بتواند مشتری ثبت کند</div>
              <div>
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
            </div>
            <div
              class="w-1/2 flex items-center justify-between rounded-md border-0 py-2 px-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            >
              <div>مشاور بتواند فایل ثبت کند.</div>
              <div>
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
            </div>
          </div>
          <div
            class="w-full flex items-center justify-between rounded-md border-0 py-2 px-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          >
            <div>مشاهده اطلاعات تماس فایل ها و متقاضیان سایر مشاورین</div>
            <div>
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
          </div>
          <div>
            <button
              type="submit"
              className="flex mt-10 w-full justify-center rounded-md bg-green-600 px-3 py-2  text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
            >
              ثبت
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import { ref } from "vue";
import { Switch } from "@headlessui/vue";

export default {
  components: {
    Switch,
  },

  data() {
    return {
      openModal: false,
    };
  },
};
</script>
