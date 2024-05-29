<template>
    <!-- nav - start -->
    <nav class="sticky bottom-5 mx-auto w-full sm:max-w-md border-2 border-green-800 rounded-2xl">
      <router-link
        to="/expertPage/auctionView"
        class="absolute -top-7 left-1/2 flex h-14 w-14 -translate-x-1/2 items-center justify-center rounded-3xl bg-green-700 text-white shadow-lg transition duration-100 hover:bg-green-800 sm:-top-8 sm:h-16 sm:w-16"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" class="size-10">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0 0 12 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 0 1-2.031.352 5.988 5.988 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971Zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 0 1-2.031.352 5.989 5.989 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971Z" />
        </svg>
      </router-link>
  
  
      <div class="flex justify-between gap-8 border-t bg-white px-10 py-4 text-xs rounded-xl sm:border-transparent sm:text-sm sm:shadow-2xl">
        <router-link
        to="/expertPage/subscription"
          :class="['flex flex-col items-center gap-1', getActiveClass('/expert/subscription')]"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" class="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
          </svg>
          <span>اشتراک</span>
        </router-link>
  
        <router-link
        to="/expertPage/profileExpert"
          :class="['flex flex-col items-center gap-1 text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600', getActiveClass('/expert/profile')]"
        >
          <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path fill-rule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clip-rule="evenodd" />
          </svg>
          <span>پروفایل</span>
        </router-link>
      </div>
    </nav>
    <!-- nav - end -->
  </template>
  
  <script>
  export default {
    computed: {
      currentPath() {
        return this.$route.path;
      }
    },
    methods: {
      getActiveClass(path) {
        if (this.currentPath === path && path !== '/expert') {
          return 'router-link-active';
        }
        return '';
      }
    }
  };
  </script>
  
  <style>
  .router-link-active {
    color: #16a34a; /* Green color */
    font-weight: bold;
  }
  </style>
  