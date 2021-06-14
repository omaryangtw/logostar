<template>
  <div>
    <div class="container m-auto">
      <div class="flex">
        <div class="flex-none w-16 h-16"></div>
        <div class="flex-grow h-16">
          <div class="flex justify-around items-center">
            <router-link
              class="px-3 py-2 rounded-md text-lg font-bold"
              :to="{ name: 'Home' }"
            >
              首頁</router-link
            >
            /
            <router-link
              class="px-3 py-2 rounded-md text-lg font-bold"
              :to="{ name: 'About' }"
            >
              關於Logostar</router-link
            >
            /
            <router-link
              class="px-3 py-2 rounded-md text-lg font-bold"
              :to="{ name: 'Service' }"
            >
              服務介紹</router-link
            >
            /
            <router-link
              class="px-3 py-2 rounded-md text-lg font-bold"
              :to="{ name: 'Trademark' }"
            >
              商標小知識</router-link
            >
            /
            <router-link
              class="px-3 py-2 rounded-md text-lg font-bold"
              :to="{ name: 'Order' }"
            >
              聯繫我們</router-link
            >
          </div>
        </div>
        <div class="flex-none w-16 h-16"></div>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {};
</script>

<style></style>
