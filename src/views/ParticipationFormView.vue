<template>
  <div
    class="w-[90%] min-h-[1000px] mx-auto bg-gray-300 shadow-lg py-10 px-3 lg:px-28 rounded-xl"
  >
    <div class="flex items-center justify-between">
      <h3 class="flex gap-1 items-center text-base lg:text-xl">
        <span class="text-[#333] font-semibold">
          ثبت نام و مشارکت در ساخت
        </span>
        <span class="text-[#333] font-semibold">⟵</span>
      </h3>
    </div>
    <div
      class="w-full h-auto py-5 px-4 border border-gray-200 rounded-md mt-10"
    >
      <form  @submit.prevent="submitForm">
        <div class="flex flex-col lg:flex-row gap-6">
          <div className="w-full lg:w-1/2">
            <label
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              نام *
            </label>
            <div className="mt-2">
              <input
                type="text"
                v-model="formData.name"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 pr-1 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 placeholder:text-[12px]"
                placeholder="نام خود را وارد کنید"
              />
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <label
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              نام خانوادگی *
            </label>
            <div className="mt-2">
              <input
                type="text"
                v-model="formData.lastName"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 pr-1 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 placeholder:text-[12px]"
                placeholder="نام خانوادگی خود را وارد کنید"
              />
            </div>
          </div>
        </div>
        <div class="flex flex-col lg:flex-row gap-6 mt-4">
          <div className="w-full lg:w-1/2">
            <label
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              شماره تماس *
            </label>
            <div className="mt-2">
              <input
                type="text"
                v-model="formData.phoneNumber"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 pr-1 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 placeholder:text-[12px]"
                placeholder="09159885324"
              />
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              ایمیل *
            </label>
            <div className="mt-2">
              <input
                type="email"
                name="email"
                v-model="formData.email"
                id="email"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 pr-1 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 placeholder:text-[12px]"
                placeholder=" ایمیل  خود را وارد کنید"
              />
            </div>
          </div>
        </div>
        <div class="flex flex-col lg:flex-row gap-6 mt-4">
          <div className="w-full lg:w-1/2">
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              درصد مشارکت *
            </label>
            <div className="mt-2">
              <input
                type="text"
                v-model="formData.participationPercentage"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 pr-1 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 placeholder:text-[12px]"
                placeholder="به درصد از یک تا صد به عدد وارد کنید "
              />
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <label
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              نوع مشارکت *
            </label>
            <div className="mt-2">
              <select
                name="select"
                id="select"
                v-model="formData.participationType"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 pr-1 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              >
                <option value="option1" selected disabled>نوع مشارکت را انتخاب کنید</option>
                <option value="1">ساخت و ساز</option>
                <option value="2">خرید و فروش</option>
              </select>
            </div>
          </div>
        </div>
        <div class="flex flex-col lg:flex-row gap-6 mt-4">
          <div className="w-full ">
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
                توضیحات
            </label>
            <div className="mt-2">
              <textarea
                type="text"
                v-model="formData.description"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 pr-1 h-48 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 placeholder:text-[12px]"
                placeholder=""
              />
            </div>
          </div>
        
        </div>
        <div class="flex items-center justify-end mt-8">
          <button class="text-gray-100 bg-green-700 px-6 py-1.5 rounded-md text-sm hover:bg-green-800">ارسال در خواست</button>
        
        </div>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      formData: {
        name: '',
        lastName: '',
        phoneNumber: '',
        email: '',
        participationPercentage: '',
        participationType: '',
        description: ''
      }
    };
  },
  methods: {
    submitForm() {
      const jsonObject = { ...this.formData };

     
      fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(jsonObject)
      })
        .then(response => response.json())
        .then(data => {
          console.log('Response from server:', data);
          
        })
        .catch(error => {
          console.error('Error:', error);
         
        });
    }
  }
};
</script>