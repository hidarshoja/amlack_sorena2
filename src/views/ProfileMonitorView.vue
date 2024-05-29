<template>
  <div
    class="w-[90%] min-h-[1000px] mx-auto bg-gray-300 shadow-lg py-10 px-3 lg:px-28 rounded-xl"
  >
    <h3 class="flex gap-1 items-center">
      <span class="text-[#333] font-semibold"> پرفایل پایشگر</span>
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
    <div class="flex gap-4 mb-4 mt-8 flex-col lg:flex-row">
      <button
        @click="activeTab = 'form1'"
        :class="{
          'bg-green-600 text-white text-sm': activeTab === 'form1',
          'bg-gray-200 text-sm': activeTab !== 'form1',
        }"
        class="px-4 py-2 rounded"
      >
        مشخصات فردی
      </button>
     
      <button
        @click="activeTab = 'form3'"
        :class="{
          'bg-green-600 text-white text-sm': activeTab === 'form3',
          'bg-gray-200 text-sm': activeTab !== 'form3',
        }"
        class="px-4 py-2 rounded"
      >
        تغییر پسورد
      </button>
    </div>
    <div v-if="activeTab === 'form1'" class="form1">
      <form action="#" method="POST" className="space-y-6 mt-10">
        <div className="flex flex-col md:flex-row gap-1">
          <div className="w-full md:w-1/2">
            <label
              htmlFor="name"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              نام و نام خانوادگی
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
              کد ملی
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
          <div class="w-full md:w-1/2">
            <label
              for="city"
              class="block text-sm font-medium leading-6 text-gray-900"
            >
              شهر
            </label>
            <div class="mt-2">
              <select
                id="city"
                name="city"
                required
                class="block w-full rounded-md border-0 py-2 px-1 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              >
                <option value="تهران">تهران</option>
                <option value="مشهد">مشهد</option>
                <option value="اصفهان">اصفهان</option>
                <option value="شیراز">شیراز</option>
                <option value="تبریز">تبریز</option>
              </select>
            </div>
          </div>
          <div class="w-full md:w-1/2">
            <label
              for="province"
              class="block text-sm font-medium leading-6 text-gray-900"
            >
              استان
            </label>
            <div class="mt-2">
              <select
                id="province"
                name="province"
                required
                class="block w-full rounded-md border-0 py-2 px-1 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              >
                <option value="تهران">تهران</option>
                <option value="خراسان رضوی">خراسان رضوی</option>
                <option value="اصفهان">اصفهان</option>
                <option value="فارس">فارس</option>
                <option value="آذربایجان شرقی">آذربایجان شرقی</option>
              </select>
            </div>
          </div>
        </div>
        <div className="flex gap-1 flex-col md:flex-row ">
          <div className="w-full md:w-1/2">
            <label
              htmlFor="managerName"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
               آدرس دقیق محل سکونت
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
               شماره تماس
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
              توضیح مختصر
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
          <button
            type="submit"
            className="flex mt-10 w-full justify-center rounded-md bg-green-600 px-3 py-2  text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
          >
            ثبت تغییرات
          </button>
        </div>
      </form>
    </div>
  
    <div v-if="activeTab === 'form3'" class="form3">
      <form action="#" method="POST" className="space-y-6 mt-10">
        <div className="flex flex-col md:flex-row gap-1">
          <div className="w-full md:w-1/2">
            <label
              htmlFor="name"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              پسورد
            </label>
            <div className="mt-2">
              <input
                id="name"
                name="name"
                type="password"
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
              تکرار پسورد
            </label>
            <div className="mt-2">
              <input
                id="family"
                name="family"
                type="password"
                required
                className="block w-full rounded-md border-0 py-2 px-1 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
        </div>
      

        <div>
          <button
            type="submit"
            className="flex mt-10 w-full justify-center rounded-md bg-green-600 px-3 py-2  text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
          >
            ثبت تغییرات
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      profileImage: "/img/user.png",
      activeTab: "form1",
      jobExperience: '',
      jobExperiences: [],
    };
  },
  methods: {
    handleProfileImageChange(event) {
      const file = event.target.files[0];
      if (file) {
        this.profileImage = URL.createObjectURL(file);
      }
    },
    addJobExperience() {

      if (this.jobExperiences.length < 5 && this.jobExperience.trim()) {
        this.jobExperiences.push(this.jobExperience.trim());
        this.jobExperience = '';
      } else if (this.jobExperiences.length >= 5) {
        alert('حداکثر 5 مورد می‌توانید اضافه کنید');
      }
    },
    removeJobExperience(index) {
      this.jobExperiences.splice(index, 1);
    },
  },
  
};
</script>
<style scoped>
button {
  cursor: pointer;
}
</style>
