<template>
  <div class="w-10/12 mx-auto">
    <nav class="hidden md:block my-2">
      <ul class="flex">
        <li v-for="item in items" :key="item.en" class="flex-1">
          <router-link
            class="
              text-center
              font-bold
              hover:text-purple-400
              transition-color
              duration-300
            "
            :to="{ name: item.pathname }"
          >
            <div>{{ item.name }}</div>
            <div class="text-xs text-center uppercase">{{ item.en }}</div>
          </router-link>
        </li>
      </ul>
    </nav>
    <nav
      class="
        md:hidden
        text-gray-900
        flex flex-wrap
        items-center
        justify-between
      "
    >
      <div>
        <a href="#">
          <img class="w-32" alt="logo" src="../assets/img1.png" />
        </a>
      </div>

      <button @click="nav = !nav">
        <font-awesome-icon :icon="['fas', 'bars']" v-show="!nav" />
        <font-awesome-icon icon="times" class="fa-lg" v-show="nav" />
      </button>

      <div class="w-full" id="menu" :class="{ hidden: !nav }">
        <ul class="divide-y">
          <li v-for="item in items" :key="item.name" class="">
            <router-link
              class="block py-0.5 text-right"
              @click="nav = !nav"
              :to="{ name: item.pathname }"
            >
              <span> {{ item.name }} </span>
              <span class="text-xs"> / {{ item.en }} </span>
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nav: false,
      items: [
        {
          name: "首頁",
          pathname: "Home",
          en: "home",
        },
        {
          name: "關於LOGOSTAR",
          pathname: "About",
          en: "about",
        },
        {
          name: "服務介紹",
          pathname: "Service",
          en: "service",
        },
        {
          name: "商標小知識",
          pathname: "Trademark",
          en: "trademark",
        },
        {
          name: "聯繫我們",
          pathname: "Order",
          en: "contact",
        },
      ],
    };
  },
};
</script>

<style></style>
