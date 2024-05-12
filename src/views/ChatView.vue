<template>
  <div
    class="w-[90%] min-h-[1000px] mx-auto bg-gray-300 shadow-lg py-10 px-3 lg:px-28 rounded-xl"
  >
    <div class="flex items-center justify-between">
      <h3 class="flex gap-1 items-center text-base lg:text-xl">
        <span class="text-[#333] font-semibold"> گفتگوی دو نفره </span>
        <span class="text-[#333] font-semibold">⟵</span>
      </h3>
      <h3 class="text-base text-[#333] font-semibold">
        عنوان گفتگو :
        <span class="text-red-600 font-normal">
          {{ title }}
        </span>
      </h3>
    </div>

    <div>
      <div class="scroll-container">
        <div
          v-for="(item, index) in items"
          :key="index"
          :class="item.status === 1 ? 'justify-start' : 'justify-end'"
          class="mt-6 w-full flex items-center"
        >
          <div
            class="flex gap-2 items-center justify-between bg-white w-[90%] lg:w-[65%] xl:w-[45%] py-2 px-2 rounded-lg"
            :dir="item.status === 2 ? 'ltr' : ''"
          >
            <div class="flex items-center gap-2">
              <div>
                <img :src="item.src" class="w-8 h-8 rounded-full" alt="" />
              </div>
              <div class="px-2">{{ item.description }}</div>
            </div>
            <div class="flex items-center gap-2">
              <div class="text-sm text-green-500">{{ item.time }}</div>
              <div class="px-1 text-sm text-green-500">{{ item.data }}</div>
            </div>
          </div>
        </div>
        <div class="py-6 flex items-center flex-col md:flex-row gap-2 mt-10">
            <input type="text" v-model="commentText" name="" class="w-full md:w-[80%] py-2 px-2 rounded-lg border-2 border-gray-600 outline-none" placeholder="ارسال نظر" id="">
            <button @click="postComment" class="w-full  md:w-[20%] py-2 border-2 border-green-500 rounded-md bg-green-500 text-white hover:bg-slate-100 hover:text-green-500">ارسال</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios';
export default {
  props: ["title"],
  data() {
    return {
      data : [],
      commentText: '',
      items: [
        {
          id: 1,
          src: "/img/user1.jfif",
          description: "سلام ، روش خرید بسته یک روزه چطور است ؟",
          status: 1,
          time: "18:33",
          data: "1403/01/08",
        },
        {
          id: 2,
          src: "/img/user2.jfif",
          description:
            "سلام ، می توانید پس از ثبت نام در سایت اقدام به خرید نماید ",
          status: 2,
          time: "18:43",
          data: "1403/01/08",
        },
        {
          id: 3,
          src: "/img/user1.jfif",
          description: "کدام بسته بصرفه است ؟",
          status: 1,
          time: "18:53",
          data: "1403/01/08",
        },
        {
          id: 4,
          src: "/img/user2.jfif",
          description: "اشتراک یک ساله بتوانید بخرید بصرف تر است",
          status: 2,
          time: "19:43",
          data: "1403/01/08",
        },
        {
          id: 5,
          src: "/img/user1.jfif",
          description: "ممنون از توضیحات شما",
          status: 1,
          time: "19:53",
          data: "1403/01/08",
        },
        {
          id: 6,
          src: "/img/user2.jfif",
          description: "خواهش می کنم سوالی بود در خدمتم",
          status: 2,
          time: "19:43",
          data: "1403/01/08",
        },
        {
          id: 7,
          src: "/img/user2.jfif",
          description: "خدا نگهدار شما",
          status: 2,
          time: "19:43",
          data: "1403/01/08",
        },
        {
          id: 1,
          src: "/img/user1.jfif",
          description: "سلام ، روش خرید بسته یک روزه چطور است ؟",
          status: 1,
          time: "18:33",
          data: "1403/01/08",
        },
        {
          id: 2,
          src: "/img/user2.jfif",
          description:
            "سلام ، می توانید پس از ثبت نام در سایت اقدام به خرید نماید ",
          status: 2,
          time: "18:43",
          data: "1403/01/08",
        },
        {
          id: 3,
          src: "/img/user1.jfif",
          description: "کدام بسته بصرفه است ؟",
          status: 1,
          time: "18:53",
          data: "1403/01/08",
        },
        {
          id: 4,
          src: "/img/user2.jfif",
          description: "اشتراک یک ساله بتوانید بخرید بصرف تر است",
          status: 2,
          time: "19:43",
          data: "1403/01/08",
        },
        {
          id: 5,
          src: "/img/user1.jfif",
          description: "ممنون از توضیحات شما",
          status: 1,
          time: "19:53",
          data: "1403/01/08",
        },
        {
          id: 6,
          src: "/img/user2.jfif",
          description: "خواهش می کنم سوالی بود در خدمتم",
          status: 2,
          time: "19:43",
          data: "1403/01/08",
        },
        {
          id: 7,
          src: "/img/user2.jfif",
          description: "خدا نگهدار شما",
          status: 2,
          time: "19:43",
          data: "1403/01/08",
        },
      ],
    };
  },
  mounted() {
    this.fetchData(); 
  },
  methods: {
    async fetchData() {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1/comments');
        this.data = response.data; 
        console.log('Fetched data:', this.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    },
    async postComment() {
      try {
        const response = await axios.post('https://jsonplaceholder.typicode.com/posts', {
          body: this.commentText,
        });
        console.log('Comment posted successfully:', response.data);
        this.commentText = '';
      } catch (error) {
        console.error('Error posting comment:', error);
      }
    },
  }
};
</script>
<style scoped>
.justify-start {
  justify-content: start;
}

.justify-end {
  justify-content: end;
}
.scroll-container {
  height: 800px;
  margin-top: 10px;
  padding: 10px 4px;
  overflow-y: auto;
  scrollbar-width: thin; 
  scrollbar-color: rgba(0, 0, 0, 0.1) transparent; 
}

.scroll-container::-webkit-scrollbar {
  width: 8px;
}

.scroll-container::-webkit-scrollbar-track {
  background-color: transparent; 
}

.scroll-container::-webkit-scrollbar-thumb {
  background-color: rgba(0, 0, 0, 0.1); 
  border-radius: 4px; 
}
</style>


