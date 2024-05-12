<template>
  <div
  class="w-[90%]  min-h-[1000px] mx-auto bg-gray-300 shadow-lg py-10 px-3 lg:px-28 rounded-xl"
  >
    <h3 class="flex gap-1 items-center">
      <span class="text-[#333] font-semibold"> پرفایل کاربری</span>
      <span class="text-[#333] font-semibold">⟵</span>
    </h3>
    <div class="flex items-center justify-center w-full h-16">
      <label for="profileImageInput">
        <img
          :src="profileImage"
          class="w-16 h-16 rounded-full cursor-pointer"
          alt="عکس پروفایل"
        />
        <input
          type="file"
          id="profileImageInput"
          ref="profileImageInput"
          style="display: none"
          @change="handleProfileImageChange"
        />
      </label>
    </div>
    <form action="#" method="POST" className="space-y-6 mt-10">
      <div className="flex flex-col md:flex-row gap-1">
        <div className="w-full md:w-1/2">
          <label
            htmlFor="name"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            نام
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
            نام خانوادگی
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
            نام آژانس
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
            htmlFor="address"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            آدرس آژانس
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
      <div className="flex gap-1 flex-col md:flex-row ">
        <div className="w-full">
          <label
            htmlFor="aboutManager"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            درباره آژانس
          </label>
          <div className="mt-2">
            <textarea
              id="aboutManager"
              name="aboutManager"
              required
              className="block w-full rounded-md border-0 py-4 min-h-[150px] px-1 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            ></textarea>
          </div>
        </div>
      </div>

      <div>
        <div>
          <!-- کد تعبیه شده Google Maps -->
          <iframe
            width="100%"
            height="450"
            style="border: 0"
            loading="lazy"
            allowfullscreen
            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&q=Bojnord+Iran"
          ></iframe>
        </div>
        <button
          type="submit"
          className="flex mt-10 w-full justify-center rounded-md bg-green-600 px-3 py-2  text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
        >
          ثبت تغییرات
        </button>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      profileImage: "/img/user.png",
    };
  },
  methods: {
    handleProfileImageChange(event) {
      const file = event.target.files[0];
      if (file) {
        this.profileImage = URL.createObjectURL(file);
      }
    },
  },
};
</script>
