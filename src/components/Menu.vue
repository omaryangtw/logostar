<template>
  <div class="">
    <div class="bg-gray-50">
      <div class="container m-auto hidden md:block">
        <ul class="flex">
          <li class="flex-1">
            <router-link
              class="
                text-center
                block
                py-2
                px-4
                hover:text-purple-400
                font-bold
              "
              :to="{ name: 'Home' }"
            >
              <div>首頁</div>
              <div class="text-xs text-center text-purple-400">HOME</div>
            </router-link>
          </li>
          <li class="flex-1">
            <router-link
              class="
                text-center
                block
                py-2
                px-4
                hover:text-purple-400
                font-bold
              "
              :to="{ name: 'About' }"
            >
              <div>關於LOGOSTAR</div>
              <div class="text-xs text-center text-purple-400">ABOUT</div>
            </router-link>
          </li>
          <li class="flex-1">
            <router-link
              class="
                text-center
                block
                py-2
                px-4
                hover:text-purple-400
                font-bold
              "
              :to="{ name: 'Service' }"
            >
              <div>服務介紹</div>
              <div class="text-xs text-center text-purple-400">SERVICE</div>
            </router-link>
          </li>
          <li class="flex-1">
            <router-link
              class="
                text-center
                block
                py-2
                px-4
                hover:text-purple-400
                font-bold
              "
              :to="{ name: 'Trademark' }"
            >
              <div>商標小知識</div>
              <div class="text-xs text-center text-purple-400">TRADEMARK</div>
            </router-link>
          </li>
          <li class="flex-1">
            <router-link
              class="
                text-center
                block
                py-2
                px-4
                hover:text-purple-400
                font-bold
              "
              :to="{ name: 'Order' }"
            >
              <div>聯繫我們</div>
              <div class="text-xs text-center text-purple-400">CONTACT</div>
            </router-link>
          </li>
        </ul>
      </div>
      <div>
        <nav
          class="
            flex flex-wrap
            items-center
            justify-between
            w-full
            py-4
            md:py-0
            px-4
            text-lg text-gray-700
            bg-gray-50
            md:hidden
          "
        >
          <div>
            <a href="#">
              <img class="w-32" alt="logo" src="../assets/img1.png" />
            </a>
          </div>

          <button @click="nav = !nav">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              id="menu-button"
              class="h-6 w-6 cursor-pointer md:hidden block"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          <div
            class="w-full md:flex md:items-center md:w-auto"
            id="menu"
            :class="{ hidden: !nav }"
          >
            <ul
              class="
                pt-4
                text-base text-gray-700
                md:flex md:justify-between md:pt-0
              "
            >
              <li class="flex-1">
                <router-link
                  class="
                    text-center
                    block
                    py-2
                    px-4
                    hover:text-purple-400
                    font-bold
                  "
                  @click="nav = !nav"
                  :to="{ name: 'Home' }"
                >
                  <span>首頁 / </span>
                  <span class="text-xs text-center text-purple-400">
                    HOME
                  </span>
                </router-link>
              </li>
              <li class="flex-1">
                <router-link
                  class="
                    text-center
                    block
                    py-2
                    px-4
                    hover:text-purple-400
                    font-bold
                  "
                  @click="nav = !nav"
                  :to="{ name: 'About' }"
                >
                  <span>關於LOGOSTAR / </span>
                  <span class="text-xs text-center text-purple-400">
                    ABOUT
                  </span>
                </router-link>
              </li>
              <li class="flex-1">
                <router-link
                  class="
                    text-center
                    block
                    py-2
                    px-4
                    hover:text-purple-400
                    font-bold
                  "
                  @click="nav = !nav"
                  :to="{ name: 'Service' }"
                >
                  <span>服務介紹 / </span>
                  <span class="text-xs text-center text-purple-400">
                    SERVICE
                  </span>
                </router-link>
              </li>
              <li class="flex-1">
                <router-link
                  class="
                    text-center
                    block
                    py-2
                    px-4
                    hover:text-purple-400
                    font-bold
                  "
                  @click="nav = !nav"
                  :to="{ name: 'Trademark' }"
                >
                  <span>商標小知識 / </span>
                  <span class="text-xs text-center text-purple-400">
                    TRADEMARK
                  </span>
                </router-link>
              </li>
              <li class="flex-1">
                <router-link
                  class="
                    text-center
                    block
                    py-2
                    px-4
                    hover:text-purple-400
                    font-bold
                  "
                  @click="nav = !nav"
                  :to="{ name: 'Order' }"
                >
                  <span>聯繫我們 / </span>
                  <span class="text-xs text-center text-purple-400">
                    CONTACT
                  </span>
                </router-link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>

    <hr class="border-0 bg-gray-200 text-gray-500 h-px" />

    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {
      nav: false,
    };
  },
};
</script>

<style></style>
