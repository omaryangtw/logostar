<template>
  <div>
    <div class="grid grid-cols-5 p-5">
      <img
        class="col-start-2 w-32"
        alt="logo"
        src="./assets/logo.png"
        style="width: 300px"
      />
    </div>
    <Menu />
    <hr class="border-0 bg-gray-500 text-gray-500 h-px" />
    <div class="bg-gray-50">
      <div class="container m-auto">
        <div class="text-xl font-bold pt-2">與我們聯繫</div>
        <div class="flex items-end m-2">
          <img
            class="col-start-2 w-32"
            alt="logo_tiny"
            src="./assets/logo-tiny.png"
            style="width: 50px"
          />
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
