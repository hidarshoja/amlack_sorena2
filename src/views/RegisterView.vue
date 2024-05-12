<template>
     <div className="flex min-h-full">
        <div className="flex flex-1 flex-col justify-center px-1 py-6 sm:px-6 lg:flex-none w-full  lg:w-1/2">
          <div className="mx-auto w-[95%] md:w-[80%]">
            <div>
              <h2 className="mt-8 text-2xl text-center font-bold leading-9 tracking-tight text-gray-900">
                ثبت نام
              </h2>
            </div>

            <div className="mt-10">
              <div>
                <form action="#" method="POST" className="space-y-6">
                  <div className="flex flex-col md:flex-row gap-1">
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
                    <div className="w-full md:w-1/2">
                      <label
                        htmlFor="manager"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        نام مدیر اژانس
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
                  </div>
                  <div className="flex gap-1 flex-col md:flex-row ">
                    <div className="w-full md:w-1/2">
                      <label
                        htmlFor="managerName"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        نام خانوادگی مدیر آژانس
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
                        htmlFor="agencyName"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        نام آژانس
                      </label>
                      <div className="mt-2">
                        <input
                          id="agencyName"
                          name="agencyName"
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
                        htmlFor="address"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        آدرس دفتر کار
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
                        htmlFor="location"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        استان
                      </label>
                      <select
                        id="location"
                        name="location"
                        className="mt-2 block w-full rounded-md border-0 py-2 px-1   text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        defaultValue="Canada"
                      >
                        <option>United States</option>
                        <option>Canada</option>
                        <option>Mexico</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="location"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      شهر
                    </label>
                    <select
                      id="location"
                      name="location"
                      className="mt-2 block w-full rounded-md border-0 py-2 px-1   text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      defaultValue="Canada"
                    >
                      <option>United States</option>
                      <option>Canada</option>
                      <option>Mexico</option>
                    </select>
                  </div>
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
                    <a href="/auth/login" className="text-green-500">
                      ورود
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden lg:w-1/2  lg:block">
          <img
            className="h-full w-full object-cover"
            src="/img/register2.svg"
            alt=""
          />
        </div>
      </div>
</template>