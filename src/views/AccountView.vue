<template>
    <div
    class="w-[90%]  min-h-[1000px] mx-auto bg-white lg:bg-gray-300 shadow-lg py-10 px-3 lg:px-28 rounded-xl"
   >
   <h3 class="flex gap-1 items-center">
       <span class="text-[#333] font-semibold">وضعیت اکانت </span>
       <span class="text-[#333] font-semibold">⟵</span>
     </h3>
   <div class="px-4 sm:px-6 lg:px-8">
    
     <div class="mt-8 flow-root">
       <div class="hidden xl:block  overflow-x-auto">
         <div class="inline-block min-w-full  align-middle">
            <h3 class="flex gap-1 items-center">
       <span class="text-[#333] font-semibold py-3">وضعیت پرداخت </span>

     </h3>
           <table class="min-w-full">
             <thead class="bg-green-950 h-20">
               <tr>
                 <th scope="col" class="px-8 text-start text-sm font-semibold text-gray-100"> بابت</th>
                 <th scope="col" class="px-8  text-start text-sm font-semibold text-gray-100">مبلغ </th>
                 <th scope="col" class="px-8  text-start text-sm font-semibold text-gray-100">مبلغ تخفیف </th>
                 <th scope="col" class="px-8  text-start text-sm font-semibold text-gray-100">تاریخ پرداخت</th>
                 <th scope="col" class="px-8  text-start text-sm font-semibold text-gray-100">شماره ارجاع</th>
                 <th scope="col" class="px-8  text-start text-sm font-semibold text-gray-100">شماره کارت</th>
                 <th scope="col" class="px-8  text-start text-sm font-semibold text-gray-100">وضعیت پرداخت</th>
               </tr>
             </thead>
             <tbody class="bg-white">
               <tr v-for="(person, personIdx ) in people" :key="person.email" :class="personIdx % 2 === 0 ? undefined : 'bg-gray-50'">
                 <td class="whitespace-nowrap px-3 py-4 text-sm text-center text-gray-500">{{ person.title }}</td>
                 <td class="whitespace-nowrap px-3 py-4 text-sm text-center text-gray-500">{{ person.price }}</td>
                 <td class="whitespace-nowrap px-3 py-4 text-sm text-center text-gray-500">{{ person.price2 }}</td>
                 <td class="whitespace-nowrap px-3 py-4 text-sm text-center text-gray-500">{{ person.date }}</td>
                 <td class="whitespace-nowrap px-3 py-4 text-sm text-center text-gray-500">{{ person.state }}</td>
                 <td class="whitespace-nowrap px-3 py-4 text-sm text-center text-gray-500">{{ person.state2 }}</td>
                 <td class="whitespace-nowrap px-3 py-4 text-sm text-center text-gray-500">مشاهده</td>
                
               </tr>
             </tbody>
           </table>
       
         </div>
       </div>
       <div class="xl:hidden">
          <div class="w-full  h-auto py-2 px-3 rounded-lg  flex flex-wrap gap-5 items-center justify-center text-center text-white text-sm mt-2"  v-for="(person, personIdx ) in people" :key="person.email">
            <div
              key={person.id}
              className="flex flex-col  h-[260px] bg-white text-black items-center justify-center mt-6 lg:hidden w-full md:w-[60%] md:mx-auto border border-gray-400 rounded-lg  shadow-sm shadow-gray-400"
            >
              <div className="w-[1px] h-[260px] bg-gray-400 absolute left-1/2 translate-x-[-50%]"></div>
              <div className="w-full flex items-center justify-around   py-2">
                <div className="text-[12px] font-semibold ">عنوان </div>
                <div className="text-[10px]"> {{ person.title }}</div>
              </div>
              <div className="w-full flex items-center justify-around border-t border-gray-400 py-2">
                <div  className="text-[12px] font-semibold">مبلغ</div>
                <div className="text-[10px]"> {{ person.price }}</div>
              </div>
              <div className="w-full flex items-center justify-around border-t border-gray-400 py-2">
                <div className="text-[12px] font-semibold">مبلغ تخفیف</div>
                <div className="text-[10px]">{{ person.price2 }}</div>
              </div>
              <div className="w-full flex items-center justify-around border-t border-gray-400 py-2">
                <div  className="text-[12px] font-semibold">تاریخ</div>
                <div className="text-[10px]"> 
                   {{ person.price }}
                </div>
              </div>
              <div className="w-full flex items-center justify-around border-t border-gray-400 py-2">
                <div className="text-[12px] font-semibold">کدرهگیری</div>
                <div className="text-[10px]">{{ person.state }}</div>
              </div>
              <div className="w-full flex items-center justify-around border-t border-gray-400 py-2">
                <div  className="text-[12px] font-semibold">وضعیت</div>
                <div className="text-[10px]"> مشاهده</div>
              </div>
              <div className="w-full flex items-center justify-around border-t border-gray-400 py-2">
                <div className="text-[12px] font-semibold">بانک</div>
                <div className="text-[10px]">{{ person.state2 }}</div>
              </div>
            </div>
        
          </div>
       </div>
     </div>
   </div>
    </div>
 </template>
 
 <script setup>
 const people = [
   { title: 'خرید بسته ثابت', price: '99', price2: '9' , date :"1402/10/12" , state :123 , state2 :"6277-6012-6755-7684" },
   { title: 'خرید بسته ماهانه', price: '199', price2: '99' , date :"1402/10/12" , state :345 , state2 :"6037-4594-5504-2011"},
   { title: 'خرید بسته یک روزه', price: '299', price2: '19' , date :"1402/10/12" , state :435, state2 :"5054-1022-3456-7086"},
   { title: 'خرید بسته اشتراک ویژه', price: '499', price2: '99' , date :"1402/10/12" , state :711 , state2 :"5892-1010-3456-7849"},
 ]
 </script>