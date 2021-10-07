<template>
  <div class="">
    <div class="bg-gray-50 hidden md:block">
      <div class="container mx-auto">
        <div class="mt-4">
          <div class="text-lg">
            <span class="text-white bg-purple-700 p-1">
              Logo設計＋商標申請一站式整合服務
            </span>
          </div>
          <img
            class="w-32"
            alt="logo"
            src="./assets/img1.png"
            style="width: 240px"
          />
        </div>
      </div>
    </div>
    <Menu />
    <hr class="border-0 bg-gray-200 text-gray-500 h-px" />
    <div class="bg-gray-50">
      <div class="container mx-4">
        <div class="text-xl font-bold pt-2">與我們聯繫</div>
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
