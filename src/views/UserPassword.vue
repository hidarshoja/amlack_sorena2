<template>
    <div
    class="w-[90%]  min-h-[1000px] mx-auto bg-gray-300 shadow-lg py-10 px-3 lg:px-28 rounded-xl"
    >
      <h3 class="flex gap-1 items-center">
        <span class="text-[#333] font-semibold">تغییر رمز عبور</span>
        <span class="text-[#333] font-semibold">⟵</span>
      </h3>
      <div className="rounded-md bg-yellow-50 p-4 mt-5">
      <div className="flex items-start  gap-5">
        <div>
          <img src="/icons/alert.png" class="w-6" alt="">
        </div>
       
         
          <div className=" text-sm text-yellow-700">
            <p>
              پسورد حداقل باید شش رقم باشد و شامل حرف باشد. 
            </p>
          </div>
       
      </div>
    </div>
      <form action="#" method="POST" class="space-y-6 mt-10">
        <div class="flex flex-col md:flex-row gap-4">
          <div class="w-full md:w-1/2 relative">
            <label
              for="password"
              class="block text-sm font-medium leading-6 text-gray-900"
            >
              رمز جدید
            </label>
            <div class="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                dir="ltr"
                required
                class="block w-full rounded-md border-0 py-2 px-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              <!-- آیکون چشم برای نمایش رمز -->
              <button
                type="button"
                class="absolute top-8 inset-y-0 right-0 flex items-center px-2 focus:outline-none"
                @click="togglePasswordVisibility('password')"
              >
                <svg
                  class="w-6 h-6 text-gray-400 hover:text-gray-600"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  ></path>
                  <path
                    d="M2 12s3-6 10-6 10 6 10 6-3 6-10 6S2 12 2 12z"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
          <div class="w-full md:w-1/2 relative">
            <label
              for="r-password"
              class="block text-sm font-medium leading-6 text-gray-900"
            >
              تکرار رمز جدید
            </label>
            <div class="mt-2">
              <input
                id="r-password"
                name="r-password"
                type="password"
                dir="ltr"
                required
                class="block w-full rounded-md border-0 py-2 px-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              <!-- آیکون چشم برای نمایش رمز -->
              <button
                type="button"
                class="absolute top-8 inset-y-0 right-0 flex items-center px-2 focus:outline-none"
                @click="togglePasswordVisibility('r-password')"
              >
                <svg
                  class="w-6 h-6 text-gray-400 hover:text-gray-600"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  ></path>
                  <path
                    d="M2 12s3-6 10-6 10 6 10 6-3 6-10 6S2 12 2 12z"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        
        <div>
          <button
            type="submit"
            class="flex mt-10 w-full justify-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
          >
            ثبت تغییرات
          </button>
        </div>
      </form>
    </div>
  </template>
  
  <script>

  export default {
    methods: {
      togglePasswordVisibility(inputId) {
        const input = document.getElementById(inputId);
        if (input.type === 'password') {
          input.type = 'text';
        } else {
          input.type = 'password';
        }
      }
    }
  }
  </script>