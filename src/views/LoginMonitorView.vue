<template>
  <div
    class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8"
  >
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <img
        class="mx-auto h-10 w-auto"
        src="/img/sorena.png"
        alt="Your Company"
      />
      <div class="flex items-center mt-12 gap-3 justify-between">
        <router-link
          className="flex cursor-pointer justify-center rounded-md  px-3   text-sm font-semibold leading-6 border-2 border-gray-700 text-white shadow-sm"
          to="/"
        >
          <img src="/img/back.png" class="w-8 h-auto" alt="back" />
        </router-link>

        <h2
          className=" text-xl text-center font-bold leading-9 tracking-tight text-gray-900"
        >
          ورود به پنل پایشگر
        </h2>
      </div>
    </div>

    <div
      class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm px-4 py-10 rounded-lg shadow-lg shadow-gray-500"
    >
      <form class="space-y-6" action="#" method="POST">
        <div>
          <label
            for="email"
            class="block text-sm font-medium leading-6 text-gray-900"
            >ایمیل یا شماره تماس
          </label>
          <div class="mt-2" dir="ltr">
            <input
              id="email"
              name="email"
              type="number"
              autocomplete="email"
              class="block w-full pl-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <div class="flex items-center justify-between">
            <label
              for="password"
              class="block text-sm font-medium leading-6 text-gray-900"
              >پسورد</label
            >
          </div>
          <div class="mt-2" dir="ltr">
            <input
              id="password"
              name="password"
              type="password"
              autocomplete="current-password"
              class="block w-full pl-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <router-link to="/expertMonitor/PropertyRegistration">
            <button
              type="button"
              class="flex w-full justify-center rounded-md bg-green-600 px-3 py-1.5 text-sm leading-6 text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
            >
              ورود
            </button>
          </router-link>
        </div>
      </form>
      <span class="py-2 text-xs block">
        <span class="text-red-500"> هنوز ثبت نام نکرده اید ؟ </span>
        <span class="text-green-500">
          <router-link to="/expert/registerMonitor"> ثبت نام </router-link>
        </span>
      </span>
    </div>
  </div>
</template>
