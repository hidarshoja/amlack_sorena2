<template>
  <div
    class="w-[90%] min-h-[1000px] mx-auto bg-gray-300 shadow-lg py-10 px-3 lg:px-28 rounded-xl"
  >
    <h3 class="flex gap-1 items-center">
      <span class="text-[#333] font-semibold"> سوابق پرداختی </span>
      <span class="text-[#333] font-semibold">⟵</span>
    </h3>
    <div class="px-4 sm:px-6 lg:px-8">
      <div class="mt-8 flow-root">
        <div class="hidden xl:block overflow-x-auto">
          <div class="inline-block min-w-full align-middle">
            <table class="min-w-full">
              <thead class="bg-green-950">
                <tr>
                  <th
                    scope="col"
                    class="py-8 pr-2 text-start text-sm font-semibold text-gray-100"
                  >
                    شماره فاکتور
                  </th>
                  <th
                    scope="col"
                    class="px-8 text-start text-sm font-semibold text-gray-100"
                  >
                    پرداخت بابت
                  </th>
                  <th
                    scope="col"
                    class="px-8 text-start text-sm font-semibold text-gray-100"
                  >
                    مبلغ پرداخت شده(تومان)
                  </th>
                  <th
                    scope="col"
                    class="px-8 text-start text-sm font-semibold text-gray-100"
                  >
                    مبلغ تخفیف (تومان)
                  </th>
                  <th
                    scope="col"
                    class="px-8 text-start text-sm font-semibold text-gray-100"
                  >
                    تاریخ پرداخت
                  </th>
                  <th
                    scope="col"
                    class="px-8 text-start text-sm font-semibold text-gray-100"
                  >
                    وضعیت پرداخت
                  </th>
                  <th
                    scope="col"
                    class="px-8 text-start text-sm font-semibold text-gray-100"
                  >
                    وضعیت بسته
                  </th>
                  <th
                    scope="col"
                    class="px-8 text-start text-sm font-semibold text-gray-100"
                  >
                    تاریخ شروع
                  </th>
                  <th
                    scope="col"
                    class="px-8 text-start text-sm font-semibold text-gray-100"
                  >
                    تاریخ پایان
                  </th>
                  <th
                    scope="col"
                    class="px-8 text-start text-sm font-semibold text-gray-100"
                  >
                    جزییات
                  </th>
                </tr>
              </thead>
              <tbody class="bg-white">
                <tr
                  v-for="(person, personIdx) in people"
                  :key="person.email"
                  :class="personIdx % 2 === 0 ? undefined : 'bg-gray-50'"
                >
                  <td
                    class="whitespace-nowrap px-3 py-4 text-sm text-center text-gray-500"
                  >
                    {{ person.code }}
                  </td>
                  <td
                    class="whitespace-nowrap px-3 py-4 text-sm text-center text-gray-500"
                  >
                    {{ person.title }}
                  </td>
                  <td
                    class="whitespace-nowrap px-3 py-4 text-sm text-center text-gray-500"
                  >
                    {{ person.price }}
                  </td>
                  <td
                    class="whitespace-nowrap px-3 py-4 text-sm text-center text-gray-500"
                  >
                    {{ person.price2 }}
                  </td>
                  <td
                    class="whitespace-nowrap px-3 py-4 text-sm text-center text-gray-500"
                  >
                    {{ person.date }}
                  </td>
                  <td
                    class="whitespace-nowrap px-3 py-4 text-sm text-center text-gray-500"
                  >
                    {{ person.state }}
                  </td>
                  <td
                    class="whitespace-nowrap px-3 py-4 text-sm text-center text-gray-500"
                  >
                    {{ person.state2 }}
                  </td>
                  <td
                    class="whitespace-nowrap px-3 py-4 text-sm text-center text-gray-500"
                  >
                    {{ person.dateStart }}
                  </td>
                  <td
                    class="whitespace-nowrap px-3 py-4 text-sm text-center text-gray-500"
                  >
                    {{ person.dateEnd }}
                  </td>
                  <td
                    class="whitespace-nowrap px-3 py-4 text-sm text-center text-gray-500"
                  >
                    مشاهده
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="xl:hidden">
      
          <div class="border-b border-gray-200 mt-6 bg-white px-4 py-5 sm:px-6 rounded-md relative"  v-for="(person, personIdx ) in people" :key="person.code">
            <div class="w-full">
              <div class="w-[100px] mx-auto">
                <span class="absolute flex items-center rounded-md  px-5 py-1.5 bg-green-800 text-sm  text-gray-100 shadow-sm  top-[-17px]">مشاهده</span>
              </div>
            </div>
            <div
              class="-ml-4 -mt-4 flex flex-wrap items-center justify-between sm:flex-nowrap"
            >
              <div class="mr-4 mt-4">
                <div class="flex items-center">
                  
                  <div class="mr-4">
                    <h3 class="text-base font-semibold leading-6 text-gray-700">
                      شماره فاکتور 
                    </h3>
                    <p class="text-sm text-gray-500">
                      {{ person.code }}
                    </p>
                  </div>
                </div>
              </div>
              <div class="ml-4 mt-4 flex items-center flex-shrink-0">
                <span class="px-1">از</span>
                <span
                  
                  class="relative inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-700 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                >
                {{ person.dateStart }}
                </span>
                <span class="px-1">تا</span>
                <span
                  
                  class="relative ml-3 inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                >
                {{ person.dateEnd }}
                </span>
              </div>
            </div>
            <div
              class="-ml-4 mt-2 border-t-2 flex flex-wrap items-center justify-between sm:flex-nowrap "
            >
              <div class="mr-4 mt-4">
                <div class="flex items-center">
                 
                  <div class="mr-4">
                    <h3 class="text-base font-semibold leading-6 text-gray-700">
                      پرداخت بابت 
                    </h3>
                    <p class="text-sm text-gray-500">
                      {{ person.title }}
                    </p>
                  </div>
                </div>
              </div>
              <div class="ml-4 mt-4">
                <div class="flex items-center">
                 
                  <div class="mr-4">
                    <h3 class="text-base font-semibold leading-6 text-gray-700">
                       وضعیت بسته 
                    </h3>
                    <p class="text-sm text-gray-500">
                      {{ person.state2 }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="-ml-4 mt-2 border-t-2 flex flex-wrap items-center justify-between sm:flex-nowrap "
            >
              <div class="mr-4 mt-4">
                <div class="flex items-center">
                 
                  <div class="mr-4">
                    <h3 class="text-base font-semibold leading-6 text-gray-700">
                       مبلغ پرداختی 
                    </h3>
                    <p class="text-sm text-gray-500">
                        1000
                    </p>
                  </div>
                </div>
              </div>
              <div class="ml-4 mt-4">
                <div class="flex items-center">
                 
                  <div class="mr-4">
                    <h3 class="text-base font-semibold leading-6 text-gray-700">
                        مبلغ تخفیف 
                    </h3>
                    <p class="text-sm text-gray-500">
                        1222
                    </p>
                  </div>
                </div>
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
  {
    code: "123",
    title: "خرید بسته ثابت",
    price: "99",
    price2: "9",
    date: "1402/10/12",
    state: "موفقیت آمیز",
    state2: "درحال استفاده",
    dateStart: "1402/10/11",
    dateEnd: "1402/10/30",
    details: "",
  },
  {
    code: "124",
    title: "خرید بسته ماهانه",
    price: "199",
    price2: "99",
    date: "1402/10/12",
    state: "موفقیت آمیز",
    state2: "منقضی",
    dateStart: "1402/10/10",
    dateEnd: "1402/11/10",
    details: "",
  },
  {
    code: "125",
    title: "خرید بسته یک روزه",
    price: "299",
    price2: "19",
    date: "1402/10/12",
    state: "موفقیت آمیز",
    state2: "درحال استفاده",
    dateStart: "1402/12/25",
    dateEnd: "1402/12/26",
    details: "",
  },
  {
    code: "126",
    title: "خرید بسته اشتراک ویژه",
    price: "499",
    price2: "99",
    date: "1402/10/12",
    state: "موفقیت آمیز",
    state2: "درحال استفاده",
    dateStart: "1402/12/20",
    dateEnd: "نامحدود",
    details: "",
  },
];
</script>
