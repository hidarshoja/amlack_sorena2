<template>
    <div class="bg-gray-200">
      <div class="w-full min-h-[1500px] ">
  
          <div class="w-full">
            <div class="w-[95%] py-10 mx-auto">

              <!-- <HeaderComponent/> -->
            </div>
            <router-view>

            </router-view>
          </div>
      </div>
        <FooterExpert />
      <div>

        
      </div>
        
    </div>
</template>
<script>
import HeaderComponent from "@/components/HeaderExpert.vue"
import FooterExpert from "@/components/FooterExpert.vue";

 export default {
  components: {
  
    HeaderComponent,
    FooterExpert
  }
};
</script>
<style scoped></style>