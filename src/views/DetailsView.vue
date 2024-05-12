<template>
  <div
  class="w-[90%]  min-h-[1000px] mx-auto bg-gray-300 shadow-lg py-10 px-3 lg:px-28 rounded-xl"
  >
  <div class="flex items-center justify-between">

    <h3 class="flex gap-1 items-center">
      <span class="text-[#333] font-semibold"> جزییات فایل </span>
      <span class="text-[#333] font-semibold">⟵</span>
    </h3>
    <div class="flex items-center gap-3">
      <img src="/img/delete.svg" class="w-8 h-8 rounded-full cursor-pointer" alt="">
      <img v-if="!showFirstBookmark" @click="toggleBookmarks" src="/img/bookmarkB.svg" class="w-8 h-8 rounded-full cursor-pointer" alt="">
      <img v-if="showFirstBookmark" @click="toggleBookmarks" src="/img/bookmark.svg" class="w-8 h-8 rounded-full cursor-pointer" alt="">
    </div>
  </div>
    <div
      class="w-full mt-5 border border-gray-100 rounded-lg h-auto bg-gray-200 py-5"
    >
      <div
        class="w-full flex items-center justify-between px-4 text-sm text-gray-600 pb-3"
      >
        <span>آپارتمان 90 متری سجادیه 32</span>
        <button
          @click="toggleDetailsVisibility"
          class="border py-1 px-4 border-red-50 rounded-lg bg-green-400 text-white"
        >
          {{ showDetails ? "مخفی کردن" : "مشاهده" }}
        </button>
      </div>
      <div
        v-if="showDetails"
        class="w-full flex items-center justify-between px-4 py-5 text-sm text-gray-600 border-t border-gray-100"
      >
        <span> کد ملک : 123456</span>
        <span>ثبت : 3 ماه پیش </span>
        <span>آخرین بروز رسانی : 3 ماه پیش </span>
      </div>
    </div>
    <div
      class="w-full mt-5 border border-gray-100 rounded-lg h-auto bg-gray-200 py-5"
    >
      <div
        class="w-full flex items-center justify-between px-4 text-sm text-gray-600 pb-3"
      >
        <span>قیمت </span>
        <button
          @click="toggleDetailsVisibility2"
          class="border py-1 px-4 border-red-50 rounded-lg bg-green-400 text-white"
        >
          {{ showDetails2 ? "مخفی کردن" : "مشاهده" }}
        </button>
      </div>
      <div
        v-if="showDetails2"
        class="w-full flex items-center justify-between px-4 py-5 text-sm text-gray-600 border-t border-gray-100"
      >
        <span>قیمت کل : 3 میلیارد </span>
        <span> قیمت هر متر مربع : 31 میلیون </span>
      </div>
    </div>
    <div
      class="w-full mt-5 border border-gray-100 rounded-lg h-auto bg-gray-200 py-5"
    >
      <div
        class="w-full flex items-center justify-between px-4 text-sm text-gray-600 pb-3"
      >
        <span>آدرس </span>
        <button
          @click="toggleDetailsVisibility3"
          class="border py-1 px-4 border-red-50 rounded-lg bg-green-400 text-white"
        >
          {{ showDetails3 ? "مخفی کردن" : "مشاهده" }}
        </button>
      </div>
      <div
        v-if="showDetails3"
        class="w-full flex items-center justify-between px-4 py-5 text-sm text-gray-600 border-t border-gray-100"
      >
        <span> شهر : بجنورد خیابان امامی</span>
      </div>
    </div>
    <div
      class="w-full mt-5 border border-gray-100 rounded-lg h-auto bg-gray-200 py-5"
    >
      <div
        class="w-full flex items-center justify-between px-4 text-sm text-gray-600 pb-3"
      >
        <span> اطلاعات ملک </span>
        <button
          @click="toggleDetailsVisibility4"
          class="border py-1 px-4 border-red-50 rounded-lg bg-green-400 text-white"
        >
          {{ showDetails4 ? "مخفی کردن" : "مشاهده" }}
        </button>
      </div>
      <div
        v-if="showDetails4"
        class="w-full flex items-center justify-between px-4 py-5 text-sm text-gray-600 border-t border-gray-100"
      >
        <div>
          <p>نوع واگذاری : فروش</p>
          <p>متراژ : 90 متر</p>
          <p>تعداد طبقه : همکف</p>
          <p>سال ساخت : 1393</p>
        </div>
        <div>
          <p>نوع ملک آپارتمان</p>
          <p>طبقه : همکف</p>
          <p>تعداد اتاق : دو خوابه</p>
        </div>
      </div>
    </div>
    <div
      class="w-full mt-5 border border-gray-100 rounded-lg h-auto bg-gray-200 py-5"
    >
      <div
        class="w-full flex items-center justify-between px-4 text-sm text-gray-600 pb-3"
      >
        <span> تجهیزات و امکانات </span>
        <button
          @click="toggleDetailsVisibility5"
          class="border py-1 px-4 border-red-50 rounded-lg bg-green-400 text-white"
        >
          {{ showDetails5 ? "مخفی کردن" : "مشاهده" }}
        </button>
      </div>
      <div
        v-if="showDetails5"
        class="w-full flex items-center justify-between px-4 py-5 text-sm text-gray-600 border-t border-gray-100"
      >
        <div>
          <p>آسانسور</p>
          <p>انباری</p>
          <p>پارکینگ</p>
          <p>بالکن</p>
        </div>
        <div>
          <p>کمد دیواری</p>
          <p>شوفاژ</p>
          <p>پنل خورشیدی</p>
        </div>
      </div>
    </div>
    <div
      class="w-full mt-5 border border-gray-100 rounded-lg h-auto bg-gray-200 py-5"
    >
      <div
        class="w-full flex items-center justify-between px-4 text-sm text-gray-600 pb-3"
      >
        <span> توضیحات</span>
        <button
          @click="toggleDetailsVisibility6"
          class="border py-1 px-4 border-red-50 rounded-lg bg-green-400 text-white"
        >
          {{ showDetails6 ? "مخفی کردن" : "مشاهده" }}
        </button>
      </div>
      <div
        v-if="showDetails6"
        class="w-full flex items-center justify-between px-4 py-5 text-sm text-gray-600 border-t border-gray-100"
      >
        <p>
          خرید خانه یکی از اتفاقاتی است که در زمره مهم‌ترین تصمیمات در زندگی
          افراد قرار می‌گیرد و با چالش‌های بسیاری روبرو است. همه ما کم و بیش با
          خرید و فروش خانه سر و کار داشته‌ایم و در صورتی که بخواهیم برای اولین
          بار خانه‌ای را خریداری کنیم؛ این کار سخت‌تر نیز خواهد شد. در این مقاله
          توضیح کاملی در مورد نکات مهم و ضروری و کلیدی خرید خانه داده‌ایم. در
          ضمن به موارد حقوقی و راهنمای خرید نیز اشاره شده است.
        </p>
      </div>
    </div>
    <div
      class="w-full mt-5 border border-gray-100 rounded-lg h-auto bg-gray-200 py-5"
    >
      <div
        class="w-full flex items-center justify-between px-4 text-sm text-gray-600 pb-3"
      >
        <span> یاداشت ها</span>
        <button
          @click="toggleDetailsVisibility7"
          class="border py-1 px-4 border-red-50 rounded-lg bg-green-400 text-white"
        >
          {{ showDetails7 ? "مخفی کردن" : "مشاهده" }}
        </button>
      </div>
      <div
        v-if="showDetails7"
        class="w-full flex items-center justify-between px-4 py-5 text-sm text-gray-600 border-t border-gray-100 relative"
      >
        <p class="min-h-36">
          یکی از نکات حقوقی خرید خانه، آن است که شما باید در درجه اول مالکیت
          فروشنده ملک را شناسایی کنید که اصلی بدیهی و بسیار مهم است. با توجه به
          اینکه هزینه بسیاری بابت خرید خانه پرداخت می‌شود؛ شما باید بدانید که
          مالک اصلی خانه چه کسی است.
        </p>
        <button
          @click="openModal"
          class="flex items-center justify-center py-1 px-4 rounded-lg bg-green-500 absolute left-2 bottom-1 text-white"
        >
          افزودن یاداشت
        </button>
      </div>
    </div>

    <div v-if="showModal" class="modal-overlay ">
      <div class="modal">
        <textarea
          v-model="note"
          class="w-full h-36 p-2 mb-2"
          placeholder="یاداشت خود را اینجا بنویسید"
        ></textarea>
       <div class="w-full flex items-center justify-end gap-4">
        <button
          @click="closeModal"
          class="bg-red-500 text-white px-4 py-2 rounded-lg ml-2"
        >
          لغو
        </button>
        <button
          @click="saveNote"
          class="bg-green-500 text-white px-4 py-2 rounded-lg"
        >
          ارسال کردن
        </button>
       
       </div>
      </div>
    </div>
   
  </div>
</template>

<script>
export default {
  data() {
    return {
      showDetails: false,
      showDetails2: false,
      showDetails3: false,
      showDetails4: false,
      showDetails5: false,
      showDetails6: false,
      showDetails7: false,
      showModal: false,
      note: "",
      showFirstBookmark: true
    };
  },
  methods: {
    toggleDetailsVisibility() {
      this.showDetails = !this.showDetails;
    },
    toggleDetailsVisibility2() {
      this.showDetails2 = !this.showDetails2;
    },
    toggleDetailsVisibility3() {
      this.showDetails3 = !this.showDetails3;
    },
    toggleDetailsVisibility4() {
      this.showDetails4 = !this.showDetails4;
    },
    toggleDetailsVisibility5() {
      this.showDetails5 = !this.showDetails5;
    },
    toggleDetailsVisibility6() {
      this.showDetails6 = !this.showDetails6;
    },
    toggleDetailsVisibility7() {
      this.showDetails7 = !this.showDetails7;
    },
    toggleBookmarks() {
      this.showFirstBookmark = !this.showFirstBookmark;
    },
    openModal() {
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
      this.note = "";
    },
    saveNote() {
      // اینجا می‌توانید کدی برای ارسال یاداشت به سرور یا انجام هر عملیات مربوطه دیگر بنویسید
      console.log("یاداشت ارسال شد:", this.note);
      this.closeModal();
    },
  },
};
</script>
