<template>
  <div>
    <div class="container m-auto">
      <div class="flex">
        <div class="flex-grow h-16">
          <div class="flex justify-around items-center">
            <router-link
              class="px-3 py-2 text-xl font-bold grid"
              :to="{ name: 'Home' }"
            >
              <div>首頁</div>
              <div class="text-sm font-light justify-self-center">HOME</div>
            </router-link>
            /
            <router-link
              class="px-3 py-2 text-xl font-bold grid"
              :to="{ name: 'About' }"
            >
              <div>關於LOGOSTAR</div>
              <div class="text-sm font-light justify-self-center">ABOUT</div>
            </router-link>
            /
            <router-link
              class="px-3 py-2 text-xl font-bold grid"
              :to="{ name: 'Service' }"
            >
              <div>服務介紹</div>
              <div class="text-sm font-light justify-self-center">SERVICE</div>
            </router-link>
            /
            <router-link
              class="px-3 py-2 text-xl font-bold grid"
              :to="{ name: 'Trademark' }"
            >
              <div>商標小知識</div>
              <div class="text-sm font-light justify-self-center">
                TRADEMARK
              </div>
            </router-link>
            /
            <router-link
              class="px-3 py-2 text-xl font-bold grid"
              :to="{ name: 'Order' }"
            >
              <div>聯繫我們</div>
              <div class="text-sm font-light justify-self-center">CONTACT</div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {};
</script>

<style></style>
