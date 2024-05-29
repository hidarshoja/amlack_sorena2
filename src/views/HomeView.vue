<template>
  <div>
    <div
      class="w-[90%]  min-h-[1000px] mx-auto bg-gray-300 shadow-lg py-10 px-3 lg:px-28 rounded-xl"
    >
    
      <div
       
        class="w-full mt-8 h-24 bg-gradient-to-r from-blue-400 to-green-500 rounded-lg border-r-[5px] border-green-950 flex items-center justify-between px-3  hover:bg-gradient-to-r hover:from-green-900 hover:to-blue-700"
      >
        <div class="flex gap-3 items-center">
          <a href="/advisor/AccountView" class="flex gap-3">

            <div class="w-14 h-14 rounded-full flex items-center justify-center">
              <img src="/icons/package.svg" class="w-10" alt="" />
            </div>
            <div class="border-r-2 px-4">
              <span class="text-white text-sm">
                7 روز مانده از 7 روز <br />
                از بسته خریداری شده شما
              </span>
            </div>
          </a>
        </div>
      </div>
      <div class="mt-8">
        <div class="flex flex-col md:flex-row gap-3">
          <div
            class="w-full md:w-1/2 h-16 bg-gradient-to-r from-blue-400 to-green-500 rounded-lg  py-2 px-4 hover:bg-gradient-to-r hover:from-green-900 hover:to-blue-400"
          >
            <div class="flex gap-3 items-center relative cursor-pointer">
              <router-link to="/advisor/filing" class="flex items-center gap-2">
              <div
                class="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center"
              >
                <span
                  class="absolute bg-red-400 text-[12px] text-white w-5 h-5 rounded-full flex items-center justify-center top-[-7px] right-[-3px]"
                  >2</span
                >
                <img src="/icons/file.png" class="w-6" alt="" />
              </div>
              <div>
                <span class="text-white">فایلینگ</span>
              </div>
              </router-link>
            </div>
          </div>
          <div
          class="w-full md:w-1/2 h-16 bg-gradient-to-r from-blue-400 to-green-500 rounded-lg  py-2 px-4 hover:bg-gradient-to-r hover:from-green-900 hover:to-blue-400"
          >
            <div class="flex gap-3 items-center relative cursor-pointer">
              <router-link to="/advisor/FavoritesView" class="flex items-center gap-2">

                <div
                  class="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center"
                >
                  <span
                    class="absolute bg-red-400 text-[12px] text-white w-5 h-5 rounded-full flex items-center justify-center top-[-7px] right-[-3px]"
                    >0</span
                  >
                  <img src="/icons/files.png" class="w-6" alt="" />
                </div>
                <div>
                  <span class="text-white">فالینگ نشان شده </span>
                </div>
              </router-link>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-4">
        <div class="flex flex-col md:flex-row gap-3">
          <div
          class="w-full md:w-1/2 h-16 bg-gradient-to-r from-blue-400 to-green-500 rounded-lg  py-2 px-4 hover:bg-gradient-to-r hover:from-green-900 hover:to-blue-400"
          >
            <div class="flex gap-3 items-center relative cursor-pointer">
              <router-link to="/advisor/ApplicantsView" class="flex items-center gap-2">
              <div
                class="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center"
              >
                <span
                  class="absolute bg-red-400 text-[12px] text-white w-5 h-5 rounded-full flex items-center justify-center top-[-7px] right-[-3px]"
                  >6</span
                >
                <img src="/icons/users.png" class="w-6" alt="" />
              </div>
              <div>
                <span class="text-white">متقاضیان</span>
              </div>
              </router-link>
            </div>
          </div>
          <div
          class="w-full md:w-1/2 h-16 bg-gradient-to-r from-blue-400 to-green-500 rounded-lg  py-2 px-4 hover:bg-gradient-to-r hover:from-green-900 hover:to-blue-400"
          >
            <div class="flex gap-3 items-center relative cursor-pointer">
              <router-link to="/advisor/CustomersView" class="flex items-center gap-2">

                <div
                  class="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center"
                >
                  <span
                    class="absolute bg-red-400 text-[12px] text-white w-5 h-5 rounded-full flex items-center justify-center top-[-7px] right-[-3px]"
                    >4</span
                  >
                  <img src="/icons/user.png" class="w-6" alt="" />
                </div>
                <div>
                  <span class="text-white"> مشتریان من </span>
                </div>
              </router-link>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-5 flex w-full p-4 bg-gray-400 rounded-lg">
        <div class="flex flex-col lg:flex-row w-full items-start gap-4 justify-between">
          <input type="text" placeholder="جستجو در تمام آگهی ها " class="py-3 px-4 w-full lg:w-3/6 text-sm text-[#333232] rounded-lg outline-none">
         <div class="flex items-center w-full lg:w-3/6 gap-2 justify-between">
          <select name="" id="" class="py-2.5 px-4 w-full lg:w-2/6 text-sm text-[#333232] rounded-lg outline-none">
            <option value="" disabled selected>جستجوی شهرها</option>
            <option value="1">مشهد</option>
            <option value="2">تهران</option>
            <option value="3">بجنورد</option>
          </select>
          <select  class="py-2.5 px-4 w-full lg:w-2/6 text-sm text-[#333232] rounded-lg outline-none">
            <option value="" disabled selected>دسته بندی ها</option>
            <option value="1">فروش</option>
            <option value="2">خرید </option>
            <option value="3">رهن</option>
          </select>
          <span  class="py-3 bg-[#5909B5] px-2 w-2/6 lg:w-[100px] flex items-center justify-center text-[12px] lg:text-sm text-[#fff] rounded-lg outline-none">
              <img src="/icons/search3.svg" alt="" class="w-6 cursor-pointer">
          </span>
         </div>
        </div>
      </div>
      <div class="mt-10 flex flex-wrap items-center justify-center gap-4 xl:w-[80%] xl:mx-auto">
        <div class="mt-4" v-for="(item, index) in fileHomes" :key="index">
          <router-link :to="item.link">

            <FileHome
              :label="item.label"
              :imageSrc="item.imageSrc"
              class="cursor-pointer"
            />
          </router-link>
        </div>
      </div>
      
      <div class="mt-10">
        <Carousel />
      </div>
      <div class="flex items-center justify-end mt-5 py-5">
        <button
          class="border border-green-500 py-1.5 px-6 rounded-lg hover:bg-green-500 hover:text-white"
        >
          مشاهده همه
        </button>
      </div>
      <div
        class="w-full bg-gradient-to-b from-white to-gray-300 shadow-lg mt-8 h-24 rounded-lg flex items-center py-2 px-4"
      >
        <div class="flex gap-3 items-center">
          <a href="/advisor/SupportView" class="flex gap-3 items-center">
          <div class="w-14 h-14 rounded-full flex items-center justify-center">
            <img src="/img/comment.svg" class="w-10" alt="" />
          </div>
          <div class="border-r-2 px-4">
              <span class="text-green-800 text-sm">
                با نظرات و پیشنهادات خود<br />
                ما را برای ارائه خدمات بهتر یاری کنید .
              </span>
            </div>
          </a>
        </div>
      </div>
    </div>
    <div class="w-full h-56"></div>
  </div>
</template>
<script>

import FileHome from "@/components/FileHomeComponent.vue";
import Carousel from "@/components/CarouselComponent.vue";

export default {
  components: {
    FileHome,
    Carousel,
  },
  data() {
    return {
      fileHomes: [
        {
          label: "ثبت ملک",
          imageSrc: "/img/home.png",
          link : "/advisor/FilesPageView",
        },
        { label: "تیکت ها",
         imageSrc: "/img/data.png",
         link : "/advisor/DueDatesView",
         },
        {
          label: "مشاورین من",
          imageSrc: "/img/consultant.png",
          link : "/advisor/AdvisersView",
        },
        {
          label: "دعوت همکاران",
          imageSrc: "/img/coll.png",
          link : "/advisor/InviteView",
        },
        {
          label: "خرید اشتراک",
          imageSrc: "/img/sub.png",
          link : "/advisor/BuySubscriptionView",
        },
        { label: "آموزش پنل",
         imageSrc: "/img/video.png",
        link: "/advisor/VideoView"
       },
       { label: " عضویت مشاور",
         imageSrc: "/img/ship.png",
        link: "/advisor/consultant"
       },
       { label: "مشارکت",
         imageSrc: "/img/part.png",
        link: "/advisor/ParticipationView"
       },
      ],
      isSubMenuOpen: false,
    };
  },
  methods: {
    toggleSubMenu() {
      this.isSubMenuOpen = !this.isSubMenuOpen;
    },

  },
};
</script>
<style scoped>
ul {
  list-style: none;
  padding: 0;
}

li {
  padding:5px 0.5rem;
}

a.profileBtn {
  background-color: transparent;
  border: none;
  display: block;
  cursor: pointer;
  outline: none;
  width: 100%;
  text-align: right;
  padding: 5px 3px;
}

a.profileBtn:hover {
  background-color: #f3f4f6;
}
</style>
