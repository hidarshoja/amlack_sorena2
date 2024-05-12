<template>
  <div
   class="w-[250px] h-[150px] rounded-lg bg-white shadow-lg flex flex-col items-center justify-around p-3"
  >
 <img :src="imageSrc" class="w-20" alt="" />
   <span class="text-2xl font-semibold text-[#5909B5]">{{ label }}</span>
   
  </div>
</template>
<script>
export default {
  props: {
    label: String,
    imageSrc: String,
  
  },
};
</script>
