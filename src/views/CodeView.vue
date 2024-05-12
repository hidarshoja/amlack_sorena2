<template>
    <div class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
  <div class="sm:mx-auto sm:w-full sm:max-w-sm">
    <img class="mx-auto h-10 w-auto" src="/img/sorena.png" alt="Your Company" />
    <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">کد یک بار مصرف</h2>
  </div>

  <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm  px-4 py-10 rounded-lg shadow-lg shadow-gray-500">
    <form class="space-y-6" action="#" method="POST">
   

      <div>
        <div class="flex items-center justify-between">
          <label for="password" class="block text-sm font-medium leading-6 text-gray-900">کد تایید</label>
          <!-- <div class="text-sm">
            <a href="#" class="font-semibold text-green-600 hover:text-green-500">رمز عبور خود را فراموش کرده اید ؟</a>
          </div> -->
        </div>
        <div class="mt-2" dir="ltr">
          <input id="text" name="text" type="text"   class="block w-full pl-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
        </div>
      </div>

      <div>
        <button type="submit" class="flex w-full justify-center rounded-md bg-green-600 px-3 py-1.5 text-sm  leading-6 text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600">ارسال کد تایید </button>
      </div>
    </form>

  </div>
</div>
</template>