<template>
  <div class="bg-gray-50 relative">
    <div class="bg-gray-50 hidden md:block">
      <div class="container mx-auto">
        <div class="py-2">
          <div class="text-lg">
            <span class="text-white bg-purple-700 p-1">
              Logo設計＋商標申請一站式整合服務
            </span>
          </div>
          <img class="w-48" alt="logo" src="./assets/img1.png" />
        </div>
      </div>
    </div>
    <Menu />
    <router-view />
    <hr class="mt-20 w-10/12 mx-auto border-0 bg-gray-200 text-gray-500 h-px" />
    <div class="py-8">
      <div class="w-10/12 max-w-screen-lg mx-auto">
        <div class="text-xl font-bold">與我們聯繫</div>
        <div class="flex items-end">
          <img class="w-8" alt="logo_tiny" src="./assets/logo-tiny.png" />
          <span class="text-purple-700 text-xl font-bold ml-2">LOGO</span>
          <span class="text-xl font-bold">STAR</span>
        </div>
        <div class="text-lg">
          Email:
          <a href="mailto:service@logostar.com.tw"> service@logostar.com.tw</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Menu from "./components/Menu.vue";
</script>

<style>
.router-link-active {
  color: rgba(167, 139, 250);
}
</style>
