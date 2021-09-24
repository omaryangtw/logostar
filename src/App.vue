<template>
  <div>
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
          style="width: 300px"
        />
      </div>
    </div>
    <Menu />
    <hr class="border-0 bg-gray-500 text-gray-500 h-px" />
    <div class="bg-gray-50">
      <div class="container m-auto">
        <div class="text-xl font-bold pt-2">與我們聯繫</div>
        <div class="flex items-end m-2">
          <img class="m-2 w-8" alt="logo_tiny" src="./assets/logo-tiny.png" />
          <span class="text-purple-700 text-xl font-bold ml-2">LOGO</span>
          <span class="text-xl font-bold">STAR</span>
        </div>
        <div class="text-lg m-2">Email: service@logostar.com.tw</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Menu from "./components/Menu.vue";
</script>

<style></style>
