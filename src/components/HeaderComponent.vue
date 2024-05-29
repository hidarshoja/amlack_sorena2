<template>
  <div
    class="w-full h-[90px] bg-slate-100 text-center text-white flex items-center justify-between"
  >
    <header class="w-full">
      <nav
        class="flex  items-center justify-between p-6"
        aria-label="Global"
      >
        <div class="hidden lg:flex  lg:flex-1">
          <a href="#" class="-m-1.5 p-1.5">
            <img class="h-8 w-auto" src="/img/sorena.png" alt="" />
          </a>
        </div>
        <div class="flex absolute left-2 lg:hidden lg:flex-1">
          <a href="#" class="-m-1.5 p-1.5">
            <img class="h-8 w-auto" src="/img/sorena.png" alt="" />
          </a>
        </div>
        <div class="flex absolute lg:hidden">
          <button
            type="button"
            class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5  text-gray-100"
            @click="mobileMenuOpen = true"
          >
            <span class="sr-only">Open main menu</span>
            <Bars3Icon class="h-6 w-6 bg-gray-900 rounded-md" aria-hidden="true" />
          </button>
        </div>
        <div dir="ltr">
          <PopoverGroup class="hidden lg:flex">
            <ul class="flex gap-8 mt-3">
              <li class=" hover:border-b-4 border-green-950 h-8 hover:text-green-950 text-gray-100">
        <a href="#" class="text-sm font-medium leading-6  hover:border-b-4 border-transparent transition-colors duration-300 ">
          تماس با ما
        </a>
      </li>
      <li class=" hover:border-b-4 border-green-950 h-8 hover:text-green-950 text-gray-100">
        <a href="#" class="text-sm font-medium leading-6  hover:border-b-4 border-transparent transition-colors duration-300">
          سوالات متداول
        </a>
      </li>
      <li class=" hover:border-b-4 border-green-950 h-8 hover:text-green-950 text-gray-100">
        <a href="#" class="text-sm font-medium leading-6  hover:border-b-4 border-transparent transition-colors duration-300">
          وبلاگ
        </a>
      </li>
      <li class=" hover:border-b-4 border-green-950 h-8 hover:text-green-950 text-gray-100">
        <a href="#" class="text-sm font-medium leading-6  hover:border-b-4 border-transparent transition-colors duration-300">
          نظر مشتریان
        </a>
      </li>
      <li class=" hover:border-b-4 border-green-950 h-8 hover:text-green-950 text-gray-100">
        <a href="#" class="text-sm font-medium leading-6  hover:border-b-4 border-transparent transition-colors duration-300">
          تیم ما
        </a>
      </li>
      <li class=" hover:border-b-4 border-green-950 h-8 hover:text-green-950 text-gray-100">
        <a href="#" class="text-sm font-medium leading-6  hover:border-b-4 border-transparent transition-colors duration-300">
          تصاویر پنل
        </a>
      </li>
      <li class=" hover:border-b-4 border-green-950 h-8 hover:text-green-950 text-gray-100">
        <a href="#" class="text-sm font-medium leading-6  hover:border-b-4 border-transparent transition-colors duration-300">
          دعوت همکاران
        </a>
      </li>
      <li class=" hover:border-b-4 border-green-950 h-8 hover:text-green-950 text-gray-100">
        <a href="#" class="text-sm font-medium leading-6  hover:border-b-4 border-transparent transition-colors duration-300">
          صفحه اصلی
        </a>
      </li>
    </ul>
          </PopoverGroup>
        </div>
        <div class="hidden lg:flex gap-4 lg:flex-1 lg:justify-end rounded-lg py-1  w-full ">
          <div class="flex items-center gap-4">
          <div
            class="w-10 h-10 p-2 border border-1 border-gray-400 bg-white rounded-full relative"
          >
            <span
              class="absolute bg-red-400 text-[12px] text-white w-5 h-5 rounded-full flex items-center justify-center top-[-5px] left-6"
              >3</span
            >
            <a href="/notification">
              <img
                src="/icons/alert.png"
                class="w-[30px] cursor-pointer"
                alt=""
              />
            </a>
          </div>
         
          <div class="relative">
            <div
              class="w-10 h-10 p-2 border border-1 border-gray-400 bg-white rounded-full"
              @click="toggleSubMenu"
            >
              <img
                src="/icons/user.png"
                class="w-[30px] cursor-pointer"
                alt=""
              />
            </div>
            <div
              v-if="isSubMenuOpen"
              class="absolute top-[42px] left-1 w-[150px] bg-white border border-gray-300 rounded-lg shadow-md z-30 text-sm"
            >
              <ul>
                <li>
                  <a href="/profile" class="profileBtn">حساب کاربری</a>
                </li>
                <li>
                  <a class="profileBtn" href="/password">تغییر رمز عبور</a>
                </li>
                <li>
                  <a class="profileBtn" href="/transactionsView">سوابق پرداختی</a>
                </li>
                <li>
                  <a class="profileBtn" href="/BuySubscriptionView">خرید اشتراک</a>
                </li>
                
                <li>
                  <a class="profileBtn">خروج</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        </div>
      </nav>
      <Dialog
        as="div"
        class="lg:hidden"
        @close="mobileMenuOpen = false"
        :open="mobileMenuOpen"
      >
        <div class="fixed inset-0 z-10" />
        <DialogPanel
          class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
        >
          <div class="flex items-center justify-between">
            <a href="#" class="-m-1.5 p-1.5">
              <span class="sr-only">Your Company</span>
              <img
                class="h-8 w-auto"
                src="/img/sorena.png"
                alt=""
              />
            </a>
            <button
              type="button"
              class="-m-2.5 rounded-md p-2.5 text-gray-700"
              @click="mobileMenuOpen = false"
            >
              <span class="sr-only">Close menu</span>
              <XMarkIcon class="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div class="mt-6 flow-root">
            <div class="-my-6 divide-y divide-gray-500/10">
              <div class="space-y-2 py-6 flex flex-col">
                <a href="#" class="text-sm font-medium leading-6 text-gray-600">صفحه اصلی</a>
                <a href="#" class="text-sm font-medium leading-6 text-gray-600">دعوت همکاران</a>
                <a href="#" class="text-sm font-medium leading-6 text-gray-600">تصاویر پنل</a>
                <a href="#" class="text-sm font-medium leading-6 text-gray-600"> تیم ما</a>
                <a href="#" class="text-sm font-medium leading-6 text-gray-600"> نظر مشتریان</a>
                <a href="#" class="text-sm font-medium leading-6 text-gray-600"> وبلاگ</a>
                <a href="#" class="text-sm font-medium leading-6 text-gray-600">سوالات متدوال</a>
                <a href="#" class="text-sm font-medium leading-6 text-gray-600"> تماس با ما</a>
              </div>
              <div class="py-6">
                <a
                  href="#"
                  class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >ورود </a
                >
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  </div>
</template>

<script setup>
import { ref } from "vue";
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/vue";
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from "@heroicons/vue/24/outline";
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/vue/20/solid";

const products = [
  {
    name: "Analytics",
    description: "Get a better understanding of your traffic",
    href: "#",
    icon: ChartPieIcon,
  },
  {
    name: "Engagement",
    description: "Speak directly to your customers",
    href: "#",
    icon: CursorArrowRaysIcon,
  },
  {
    name: "Security",
    description: "Your customers’ data will be safe and secure",
    href: "#",
    icon: FingerPrintIcon,
  },
  {
    name: "Integrations",
    description: "Connect with third-party tools",
    href: "#",
    icon: SquaresPlusIcon,
  },
  {
    name: "Automations",
    description: "Build strategic funnels that will convert",
    href: "#",
    icon: ArrowPathIcon,
  },
];
const callsToAction = [
  { name: "Watch demo", href: "#", icon: PlayCircleIcon },
  { name: "Contact sales", href: "#", icon: PhoneIcon },
];

const mobileMenuOpen = ref(false);

</script>

<style scoped></style>
