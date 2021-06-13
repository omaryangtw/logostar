<template>
  <div>
    <div class="container m-auto">
      <div class="flex">
        <div class="flex-none w-16 h-16"></div>
        <div class="flex-grow h-16 ">
          <div class="flex justify-around items-center">
            <router-link
              class="
                text-gray-300
                hover:bg-gray-700 hover:text-white
                px-3
                py-2
                rounded-md
                text-2xl
                font-bold
              "
              :to="{ name: 'Home' }"
            >
              <font-awesome-icon icon="user-secret" />Home</router-link
            >
            /
            <router-link
              class="
                text-gray-300
                hover:bg-gray-700 hover:text-white
                px-3
                py-2
                rounded-md
                text-2xl
                font-bold
              "
              :to="{ name: 'Trademark' }"
            >
              <font-awesome-icon icon="user-secret" />Trademark</router-link
            >
            /
            <router-link
              class="
                text-gray-300
                hover:bg-gray-700 hover:text-white
                px-3
                py-2
                rounded-md
                text-2xl
                font-bold
              "
              :to="{ name: 'Service' }"
            >
              <font-awesome-icon icon="user-secret" />Service</router-link
            >
            /
            <router-link
              class="
                text-gray-300
                hover:bg-gray-700 hover:text-white
                px-3
                py-2
                rounded-md
                text-2xl
                font-bold
              "
              :to="{ name: 'About' }"
            >
              <font-awesome-icon icon="user-secret" />About</router-link
            >
            /
            <router-link
              class="
                text-gray-300
                hover:bg-gray-700 hover:text-white
                px-3
                py-2
                rounded-md
                text-2xl
                font-bold
              "
              :to="{ name: 'Order' }"
              >Order</router-link
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
