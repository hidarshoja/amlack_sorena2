<template>
    <div>
      <div class="w-full min-h-[1500px] bg-gray-200">
  
          <div class="w-full">
            <div class="w-[95%] py-10 mx-auto">

              <HeaderComponent/>
            </div>
            <router-view>

            </router-view>
          </div>
      </div>
      <div>

        
      </div>
        
    </div>
</template>
<script>
import HeaderComponent from "@/components/HeaderExpert.vue"


 export default {
  components: {
  
    HeaderComponent,

  }
};
</script>
<style scoped></style>