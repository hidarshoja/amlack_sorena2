<template>
  <div class="w-full h-28 text-center fixed bottom-20 z-10">
    <div
      class="flex flex-row items-center justify-center lg:justify-around relative w-[90%]  mx-auto bg-gray-100 shadow-lg py-2 px-3 rounded-xl"
    >

      <div
        class="absolute top-[-25px] left-1/2 transform -translate-x-1/2 bg-green-500 w-12 h-12 p-1 rounded-full cursor-pointer"
      >
         <router-link to="/expertMonitor/PropertyMonitor">
          <span class="inline-block p-1 rounded-full">
            <img src="/icons/home.png" class="w-7" alt="" />
          </span>
        </router-link>
       
      </div>
      <div class="flex items-center justify-between w-full lg:w-1/6 gap-5  lg:mt-0">
        <router-link to="/expertMonitor/ProfileMonitor">
        
          <div class="flex flex-col items-center gap-1 cursor-pointer">
            <span class="inline-block p-1 rounded-full">
              <img src="/icons/user.png" class="w-7" alt="" />
            </span>
            <span class="text-sm"> پرفایل </span>
          </div>
      </router-link>
     
       
       <!-- <router-link to="/ApplicantsView">
         
            <div class="flex flex-col items-center gap-1 cursor-pointer">
              <span class="inline-block p-1 rounded-full">
                <img src="/icons/users.png" class="w-7" alt="" />
              </span>
              <span> متقاضیان </span>
            </div>

       </router-link> -->
      
       <!-- <router-link to="/ApplicantsView">
         
         <div class="flex flex-col items-center gap-1 cursor-pointer">
           <span class="inline-block p-1 rounded-full">
             <img src="/icons/users.png" class="w-7" alt="" />
           </span>
           <span> متقاضیان </span>
         </div>

    </router-link> -->
      </div>
      <div></div>
      <div class="flex items-center justify-end w-full lg:w-1/6 gap-5">
        <div class="flex flex-col items-center gap-1 cursor-pointer">
          <router-link to="/expertMonitor/NotificationMonitor" class="flex flex-col items-center gap-1">
          <span class="inline-block p-1 rounded-full">
            <img src="/icons/alert.png" class="w-7" alt="" />
          </span>
          <span class="text-sm">  پیام ها  </span>
          </router-link>
        </div>
        <!-- <div class="flex flex-col items-center gap-1 cursor-pointer">
          <router-link to="/CustomersView" class="flex flex-col items-center gap-1">
            <span class="inline-block p-1 rounded-full">
              <img src="/icons/user.png" class="w-7" alt="" />
            </span>
            <span> مشتریان </span>
          </router-link>
        </div>
       
        <div class="flex flex-col items-center gap-1 cursor-pointer">
          <router-link to="/expert/loginExpert" class="flex flex-col items-center gap-1">
            <span class="inline-block p-1 rounded-full">
              <img src="/icons/user.png" class="w-7" alt="" />
            </span>
            <span> متخصصان </span>
          </router-link>
        </div> -->
      </div>
    </div>
  </div>
</template>
<script></script>
