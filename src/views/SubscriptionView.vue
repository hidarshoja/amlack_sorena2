<template>
    <div class="w-[90%] min-auto mx-auto bg-gray-300 shadow-lg py-10 px-3 lg:px-28 rounded-xl">
      <div class="bg-white py-24 sm:py-32">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          <h3 class="text-2xl py-3 font-semibold text-[#3b3b3b]">خرید اشتراک</h3>
          <div class="flex items-center">
            <input type="text" placeholder="کدتخفیف" class="border border-gray-400 rounded-md py-1 px-3 outline-none">
            <button class="bg-indigo-500 px-2 py-1 mr-2 rounded-md border border-gray-600 hover:bg-indigo-200 hover:text-gray-600 text-white">اعمال کد</button>
          </div>
          <div class="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            <div v-for="tier in tiers" :key="tier.id" :class="[tier.mostPopular ? 'ring-2 ring-indigo-600' : 'ring-1 ring-gray-200', 'rounded-3xl p-8 xl:p-10']">
              <div class="flex items-center justify-between gap-x-4">
                <h3 :id="tier.id" :class="[tier.mostPopular ? 'text-indigo-600' : 'text-gray-900', 'text-lg font-semibold leading-8']">{{ tier.name }}</h3>
                <p v-if="tier.mostPopular" class="rounded-full bg-indigo-600/10 px-2.5 py-1 text-xs font-semibold leading-5 text-indigo-600">بسته پیشنهادی</p>
              </div>
              <p class="mt-4 text-sm leading-6 text-gray-600">{{ tier.description }}</p>
              <p class="mt-6 flex items-baseline gap-x-1">
                <span class="text-4xl font-bold tracking-tight text-gray-900">{{ tier.price[frequency.value] }}</span>
                <span class="text-sm font-semibold leading-6 text-gray-600">{{ frequency.priceSuffix }}</span>
              </p>
              <a :href="tier.href" :aria-describedby="tier.id" :class="[tier.mostPopular ? 'bg-indigo-600 text-white shadow-sm hover:bg-indigo-500' : 'text-indigo-600 ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300', 'mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600']">خرید بسته</a>
              <ul role="list" class="mt-8 space-y-3 text-sm leading-6 text-gray-600 xl:mt-10">
                <li v-for="feature in tier.features" :key="feature" class="flex gap-x-3">
                  <CheckIcon class="h-6 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  {{ feature }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full min-h-20 bg-gray-100 rounded-lg px-3">
        <div class="w-full h-20 bg-gray-100 rounded-lg flex items-center justify-start px-3 mt-4 cursor-pointer">
          <span class="text-base text-green-700">بسته های من</span>
        </div>
        <div class="px-3">
          <table class="min-w-full">
            <thead class="bg-green-950">
              <tr>
                <th scope="col" class="py-8 pr-2 text-center text-sm font-semibold text-gray-100">نام بسته </th>
                <th scope="col" class="px-8 text-center text-sm font-semibold text-gray-100">به ارزش (تومان)</th>
                <th scope="col" class="px-8 text-center text-sm font-semibold text-gray-100">تاریخ پرداخت</th>
                <th scope="col" class="px-8 text-center text-sm font-semibold text-gray-100">بابت</th>
                <th scope="col" class="px-8 text-center text-sm font-semibold text-gray-100">وضعیت استفاده</th>
              </tr>
            </thead>
            <tbody class="bg-white">
              <tr v-for="(person, personIdx) in people" :key="person.code" :class="personIdx % 2 === 0 ? undefined : 'bg-gray-50'">
                <td class="whitespace-nowrap px-3 py-4 text-sm text-center text-gray-500">{{ person.code }}</td>
                <td class="whitespace-nowrap px-3 py-4 text-sm text-center text-gray-500">{{ person.price }}</td>
                <td class="whitespace-nowrap px-3 py-4 text-sm text-center text-gray-500">{{ person.date }}</td>
                <td class="whitespace-nowrap px-3 py-4 text-sm text-center text-gray-500">{{ person.state }}</td>
                <td class="whitespace-nowrap px-3 py-4 text-sm text-center text-gray-500">{{ person.state2 }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { CheckIcon } from '@heroicons/vue/20/solid'
  
  const frequencies = [
    { value: 'monthly', label: 'Monthly', priceSuffix: '/ماه' },
    { value: 'annually', label: 'Annually', priceSuffix: '/سال' },
  ]
  
  const tiers = [
    {
      name: 'ماهانه',
      id: 'tier-freelancer',
      href: '#',
      price: { monthly: '1000000', annually: '100000000' },
      description: 'خرید بسته سه ماهه بصورت کاملا بصرفه و اقتصادی',
      features: ['5 کاربره', 'تا هزار گیگ رایگان', 'پشتبانی', 'به صرفه و اقتصادی'],
      mostPopular: false,
    },
    {
      name: 'سه ماهه',
      id: 'tier-startup',
      href: '#',
      price: { monthly: '100000', annually: '28800000' },
      description: 'خرید بسته سه ماهه بصورت کاملا بصرفه و اقتصادی',
      features: ['5 کاربره', 'تا هزار گیگ رایگان', 'پشتبانی', 'به صرفه و اقتصادی'],
      mostPopular: true,
    },
    {
      name: 'سالانه',
      id: 'tier-enterprise',
      href: '#',
      price: { monthly: '600000', annually: '5760000' },
      description: 'خرید بسته سه ماهه بصورت کاملا بصرفه و اقتصادی',
      features: ['5 کاربره', 'تا هزار گیگ رایگان', 'پشتبانی', 'به صرفه و اقتصادی'],
      mostPopular: false,
    },
  ]
  
  const people = [
    { code: '123', price: '99', date: '1402/10/12', state: 'ثبت نام اولیه', state2: 'درحال استفاده' },
    { code: '124', price: '199', date: '1402/10/12', state: 'فایلینگ 1 ماهه', state2: 'منقضی' },
    { code: '125', price: '299', date: '1402/10/12', state: 'کد تخفیف', state2: 'درحال استفاده' },
    { code: '126', price: '499', date: '1402/10/12', state: 'خرید', state2: 'درحال استفاده' },
  ]
  
  const frequency = ref(frequencies[0])
  </script>
  