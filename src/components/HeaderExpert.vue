<template>
  <div
    class="w-full h-[90px] bg-slate-700 text-center text-white flex items-center justify-between"
  >
    <header class="w-full">
      <nav
        class="flex items-center justify-between p-6 relative"
        aria-label="Global"
      >
        <div dir="rtl">
          <PopoverGroup class="hidden lg:flex">
            <ul class="flex gap-8 mt-3">
              <li class="h-8 text-gray-100">
                <router-link
                  to="/expertPage/subscription"
                  class="text-sm font-medium leading-6 transition-colors duration-300"
                  active-class="active-link"
                  exact-active-class="exact-active-link"
                >
                  اشتراک
                </router-link>
              </li>
              <li class="h-8 text-gray-100">
                <router-link
                  to="/expertPage/auctionView"
                  class="text-sm font-medium leading-6 transition-colors duration-300"
                  active-class="active-link"
                  exact-active-class="exact-active-link"
                >
                  مزایده
                </router-link>
              </li>
              <li class="h-8 text-gray-100">
                <router-link
                  to="/expertPage/profileExpert"
                  class="text-sm font-medium leading-6 transition-colors duration-300"
                  active-class="active-link"
                  exact-active-class="exact-active-link"
                >
                  پرفایل
                </router-link>
              </li>
            </ul>
          </PopoverGroup>
        </div>

        <div class="hidden lg:flex lg:flex-1">
          <a href="#" class="-m-1.5 p-1.5 absolute left-2 top-8">
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
            class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-100"
            @click="mobileMenuOpen = true"
          >
            <span class="sr-only">Open main menu</span>
            <Bars3Icon
              class="h-6 w-6 bg-gray-900 rounded-md"
              aria-hidden="true"
            />
          </button>
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
              <img class="h-8 w-auto" src="/img/sorena.png" alt="" />
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
                <a href="#" class="text-sm font-medium leading-6 text-gray-600">
                  اشتراک</a
                >
                <a href="#" class="text-sm font-medium leading-6 text-gray-600"
                  >مزایده
                </a>
                <a href="#" class="text-sm font-medium leading-6 text-gray-600">
                  پرفایل</a
                >
              </div>
              <div class="py-6">
                <a
                  href="#"
                  class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >ورود
                </a>
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

<style scoped>
.active-link {
  color: #38a169; /* رنگ سبز */
  border-bottom: 4px solid #38a169; /* نوار سبز در پایین */
}

.exact-active-link {
  color: #38a169; /* رنگ سبز */
  border-bottom: 4px solid #38a169; /* نوار سبز در پایین */
}

/* اگر فقط می‌خواهید هنگام هاور این تغییرات را داشته باشید */
.hover\:text-green-600:hover {
  color: #38a169;
}

.hover\:border-b-4:hover {
  border-bottom-width: 4px;
}

.hover\:border-green-600:hover {
  border-color: #38a169;
}
</style>
