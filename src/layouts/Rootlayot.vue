<template>
    <div>
      <div class="w-full min-h-[1500px] bg-gray-200">
        <!-- <div class="h-[100px]"></div> -->
       <!-- <HeaderComponent /> -->
          <div class="w-full">
            <div class="w-[90%] py-10 mx-auto">

              <HeaderComponent2/>
            </div>
            <router-view>

            </router-view>
          </div>
      </div>
      <div>

        <FooterComponent />
      </div>
        
    </div>
</template>
<script>
import HeaderComponent from "@/components/HeaderComponent.vue"
import FooterComponent from "@/components/FooterComponent.vue";
import HeaderComponent2 from "@/components/HeaderComponent2.vue"

 export default {
  components: {
    FooterComponent,
    HeaderComponent,
    HeaderComponent2
  }
};
</script>
<style scoped></style>