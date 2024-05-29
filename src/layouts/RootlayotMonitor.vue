<template>
    <div>
      <div class="w-full min-h-[1500px] bg-gray-200">
        <!-- <div class="h-[100px]"></div> -->
       <!-- <HeaderComponent /> -->
          <div class="w-full">
            <div class="w-[90%] py-10 mx-auto">

              <HeaderMonitorComponent/>
            </div>
            <router-view>

            </router-view>
          </div>
      </div>
      <div>

        <FooterMonitorComponent />
      </div>
        
    </div>
</template>
<script>

import FooterMonitorComponent from "@/components/FooterMonitorComponent.vue";
import HeaderMonitorComponent from "@/components/HeaderMonitorComponent.vue"

 export default {
  components: {
    FooterMonitorComponent,
    
    HeaderMonitorComponent
  }
};
</script>
<style scoped></style>