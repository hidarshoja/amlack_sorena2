<template>
  <div className="flex min-h-full">
    <div
      className="flex flex-1 flex-col justify-center px-1 py-6 sm:px-6 lg:flex-none w-full  lg:w-1/2"
    >
      <div className="mx-auto w-[95%] md:w-[80%]">
        <div class="flex items-center justify-between">
          <router-link
            className="flex cursor-pointer justify-center rounded-md  px-3   text-sm font-semibold leading-6 border-2 border-gray-700 text-white shadow-sm"
            to="/"
          >
            <img src="/img/back.png" class="w-8 h-auto" alt="back" />
          </router-link>
          <h2
            className="text-2xl text-center font-bold leading-9 tracking-tight text-gray-900"
          >
            ثبت نام به عنوان پایشگر
          </h2>
        </div>

        <div className="mt-10">
          <div>
            <form action="#" method="POST" className="space-y-6">
              <div className="flex flex-col md:flex-row gap-1">
                <div className="w-full md:w-1/2">
                  <label
                    htmlFor="manager"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    نام و نام خانوادگی
                  </label>
                  <div className="mt-2">
                    <input
                      id="manager"
                      name="manager"
                      type="text"
                      required
                      className="block w-full rounded-md border-0 py-2 px-1 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="w-full md:w-1/2">
                  <label
                    htmlFor="numberPhone"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    شماره موبایل
                  </label>
                  <div className="mt-2">
                    <input
                      id="numberPhone"
                      name="numberPhone"
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
                    کد ملی
                  </label>
                  <div className="mt-2">
                    <input
                      id="managerName"
                      name="managerName"
                      type="text"
                      required
                      className="block w-full rounded-md border-0 py-2 px-1 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="w-full md:w-1/2">
                  <label
                    htmlFor="location"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    تخصص
                  </label>
                  <select
                    id="location"
                    name="location"
                    className="mt-2 block w-full rounded-md border-0 py-2 px-1   text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    defaultValue="Canada"
                  >
                    <option>انتخاب تخصص</option>
                    <option>بنا</option>
                    <option>گچ کار</option>
                    <option>کاشی کار</option>
                    <option>برق کار</option>
                  </select>
                </div>
              </div>
              <div className="flex gap-1 flex-col md:flex-row ">
                <div className="w-full md:w-1/2">
                  <label
                    htmlFor="address"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    رمز عبور
                  </label>
                  <div className="mt-2">
                    <input
                      id="address"
                      name="address"
                      type="text"
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
                    تکرار رمز
                  </label>
                  <div className="mt-2">
                    <input
                      id="address"
                      name="address"
                      type="text"
                      required
                      className="block w-full rounded-md border-0 py-2 px-1 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>
              <div></div>
              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-green-600 px-3 py-2  text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
                >
                  ثبت و دریافت کد تایید
                </button>
              </div>
              <div>
                <span>حساب کاربری دارید ؟ </span>
                <router-link to="/loginExpert" className="text-green-500">
                  ورود
                </router-link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div className="hidden lg:w-1/2  lg:block">
      <img className="h-screen w-full " src="/img/homeBill2.jpg" alt="" />
    </div>
  </div>
</template>
