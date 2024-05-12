<template>
  <div
  class="w-[90%]  min-h-[1000px] mx-auto bg-white lg:bg-gray-300 shadow-lg py-10 px-3 lg:px-28 rounded-xl"
 >
 <h3 class="flex gap-1 items-center">
     <span class="text-[#333] font-semibold"> تیکت ها </span>
     <span class="text-[#333] font-semibold">⟵</span>
   </h3>
 <div class="px-4 sm:px-6 lg:px-8">
  
   <div class="mt-8 flow-root">
     <div class="  overflow-x-auto">
       <div class="inline-block min-w-full  align-middle">
          <h3 class="flex gap-1 items-center">
     <span class="text-[#333] font-semibold py-3"> لیست تیکت ها </span>

   </h3>
         <table class="min-w-full">
           <thead class="bg-green-950 h-20">
             <tr>
           
               <th scope="col" class="px-8 text-center text-sm font-semibold text-gray-100"> تاریخ</th>
               <th scope="col" class="px-8  text-center text-sm font-semibold text-gray-100">عنوان </th>
               <th scope="col" class="px-8  text-center text-sm font-semibold text-gray-100">وضعیت </th>
               <th scope="col" class="px-8  text-center text-sm font-semibold text-gray-100"> #</th>

             </tr>
           </thead>
           <tbody class="bg-white">
             <tr v-for="(person, personIdx ) in people" :key="person.email" :class="personIdx % 2 === 0 ? undefined : 'bg-gray-50'">
         
              <td class="whitespace-nowrap px-3 py-4 text-sm text-center text-gray-500">{{ person.date }}</td>
               <td class="whitespace-nowrap px-3 py-4 text-sm text-center text-gray-500">{{ person.title }}</td>
               <td class="whitespace-nowrap px-3 py-4 text-sm text-center text-gray-500">{{ person.state }}</td>
               <td class="whitespace-nowrap px-3 py-4 text-sm text-center text-gray-500">
                <span  @click="goToChat(person.title)"  class="bg-green-500 text-white text-[12px] px-2 py-0.5 rounded-lg border cursor-pointer">
                  مشاهده
                </span>
               </td>
              
             </tr>
           </tbody>
         </table>
     
       </div>
     </div>
   
   </div>
 </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import { ref } from 'vue';
import axios from 'axios';
const router = useRouter();
const date = ref([]);

const people = [
 {id : 1 , title: 'خرید بسته ثابت', date :"1402/10/12" , state :"رد شده" , dic :"6277-6012-6755-7684" },
 {id : 2 , title: 'خرید بسته ماهانه', date :"1402/10/12" , state :"تایید شده" , dic :"6037-4594-5504-2011"},
 {id : 3 , title: 'خرید بسته یک روزه', date :"1402/10/12" , state :"رد شده  ", dic :"5054-1022-3456-7086"},
 {id : 4 , title: 'خرید بسته اشتراک ', date :"1402/10/12" , state :"منتظر پاسخ" , dic :"5892-1010-3456-7849"},
];

const goToChat = (title) => {
  router.push({ name: "chat", params: { title } });
};
const fetchData = async () => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1/comments');
    
        console.log('Fetched data:', response.data);
       
        date.value = response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};


fetchData();
</script>