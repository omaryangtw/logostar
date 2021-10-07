<template>
  <div class="container max-w-screen-lg grid grid-cols-4 mx-auto md:my-10">
    <div class="bg-purple-500 font-bold text-gray-50 text-xl p-3 col-span-4">
      服務介紹
    </div>
    <div id="main" class="col-span-4 mx-2">
      <!-- 關於 -->
      <div>
        <div class="grid grid-cols-12">
          <div class="col-span-5 justify-self-center bg-gray-50 w-full p-2">
            <img src="../assets/img6.png" class="mx-auto h-32" />
            <h2 class="text-center md:text-xl">公司名稱</h2>
          </div>

          <div class="col-span-2 justify-self-center align-self-center flex">
            <font-awesome-icon
              class="self-center text-2xl bg-"
              :icon="['fas', 'plus']"
            />
          </div>

          <div
            class="col-span-5 justify-self-center flex bg-gray-50 w-full p-2"
          >
            <img src="../assets/img11.png" class="mx-auto h-32 self-center" />
          </div>

          <div class="col-span-5 justify-self-center bg-green-300 w-full p-2">
            <h2 class="text-center md:text-xl">LOGO設計製作</h2>
          </div>

          <div class="col-span-2"></div>

          <div class="col-span-5 justify-self-center bg-green-300 w-full p-2">
            <h2 class="text-center md:text-xl">商標登錄</h2>
          </div>

          <div class="col-span-12 justify-self-center w-full p-2 mt-6">
            <h2 class="leading-10 text-lg">
              LOGOSTAR，公司行號LOGO設計＋智慧財產局商標資料庫事前調查＋商標註冊申請服務，一貫作業節省你在行銷推廣工作的寶貴時間。
            </h2>
            <h2 class="leading-10 text-lg">
              商標代理人具有多年企業法務服務資歷，如果你需要進行各國商標調查、申請註冊等需求，也可以同步交給我們。
            </h2>
            <h6 class="text-sm">
              ※商標資料庫的事前調查內容，為盡可能貼近商標註冊現況之分析，並非取得商標註冊之保證。
            </h6>
          </div>

          <a
            target="_blank"
            href="/order"
            class="
              bg-green-300
              hover:bg-green-400
              col-span-12
              justify-self-center
              text-2xl
              font-bold
              bg-green-300
              mt-4
            "
          >
            <div class="p-4 rounded-md">服務申請，請點擊這裡 ></div>
          </a>
        </div>
      </div>
    </div>

    <div class="col-span-4 flex items-center mt-10 mx-2">
      <img class="m-2 w-8" alt="logo_tiny" src="../assets/logo-tiny.png" />
      <span class="text-xl md:text-2xl font-bold text-purple-700">LOGO</span>
      <span class="text-xl md:text-2xl font-bold text-black">STAR</span>
      <span class="text-xl md:text-2xl font-bold text-blue-500">
        設計師團隊豐富的經驗</span
      >
    </div>

    <div class="md:col-span-1 hidden md:block p-2">
      <h2 class="text-xl font-semibold text-center">專人對應</h2>
      <img
        src="../assets/img12.png"
        alt=""
        class="mx-auto"
        style="max-width: 6rem"
      />
    </div>
    <div class="col-span-4 md:col-span-3 bg-gray-50 border m-2">
      <h2 class="block md:hidden text-xl font-bold m-4">專人對應</h2>
      <h2 class="md:text-lg mx-2 md:mx-4">
        <span class="text-purple-700">LOGO</span>
        <span>STAR</span>
        <span>團隊將指派專任的平面設計師、商標代理人，同時負責您的專案。</span>
        <h2 class="md:text-lg mx-2 md:mx-4">
          無論是設計方面或是法律方面，都能充分的回答您的問題。
        </h2>
      </h2>
    </div>

    <div class="col-span-4 md:col-span-3 bg-gray-50 border m-2">
      <h2 class="block md:hidden text-xl font-bold m-4">免費估價</h2>
      <h2 class="md:text-lg m-4">
        我們知道你想了解大致上的費用，我們會根據您初步的需求說明，提供您可能的預算範圍。
      </h2>
    </div>
    <div class="hidden md:block md:col-span-1 p-2">
      <h2 class="text-xl font-semibold text-center">免費估價</h2>
      <img
        src="../assets/img13.png"
        alt=""
        class="mx-auto"
        style="max-width: 6rem"
      />
    </div>

    <div class="hidden md:block md:col-span-1 p-2">
      <h2 class="text-xl font-semibold text-center">商標代理人</h2>
      <h2 class="text-xl font-semibold text-center">事前調查</h2>
      <img
        src="../assets/img14.png"
        alt=""
        class="mx-auto"
        style="max-width: 6rem"
      />
    </div>
    <div class="col-span-4 md:col-span-3 bg-gray-50 border m-2">
      <h2 class="block md:hidden text-xl font-bold m-4">商標代理人事前調查</h2>
      <h2 class="md:text-lg m-4">
        在LOGO設計之前，就先對文字名稱做事前調查，若發現有類似名稱存在，就可以提前更改。同時，設計師的LOGO圖案設計，也都會經過商標代理人事前審查，再做提案。
      </h2>
    </div>

    <div class="col-span-4 md:col-span-3 bg-gray-50 border m-2">
      <h2 class="block md:hidden text-xl font-bold m-4">品牌推廣諮詢</h2>
      <h2 class="md:text-lg m-4">
        <span class="text-purple-700">LOGO</span>
        <span>STAR</span>
        另外還有堅強的創新創業輔導團隊，我們有來自各領域專業的會計師、平面設計師，在創業育成、技術媒合、公司法務方面有豐富資歷的企管顧問群，協助您品牌推廣工作。
      </h2>
    </div>
    <div class="hidden md:block md:col-span-1 p-2">
      <h2 class="text-xl font-semibold text-center">品牌推廣諮詢</h2>
      <img
        src="../assets/img15.png"
        alt=""
        class="mx-auto my-2"
        style="max-width: 6rem"
      />
    </div>

    <div class="hidden md:block md:col-span-1 p-2">
      <h2 class="text-xl font-semibold text-center">LOGO製作完成</h2>
      <img
        src="../assets/img16.png"
        alt=""
        class="mx-auto my-2"
        style="max-width: 6rem"
      />
    </div>
    <div class="col-span-4 md:col-span-3 bg-gray-50 border m-2">
      <h2 class="block md:hidden text-xl font-bold m-4">LOGO製作完成</h2>
      <h2 class="md:text-lg m-4">
        以最有效率方式取得商標為前提，進行LOGO設計，所有的設計提案都有商標代理人與設計師的一致共識，您可以安心使用
        <span class="text-purple-700">LOGO</span>
        <span>STAR</span>
        的服務。
      </h2>
    </div>

    <div class="col-span-4 flex items-center mt-10">
      <img class="m-2 w-8" alt="logo_tiny" src="../assets/logo-tiny.png" />
      <span class="text-xl md:text-2xl font-bold text-purple-700">LOGO</span>
      <span class="text-xl md:text-2xl font-bold text-black">STAR</span>
      <span class="text-xl md:text-2xl font-bold text-blue-500">
        的資訊保密責任</span
      >
    </div>
    <div class="col-span-4">
      <div class="p-4">
        <img src="../assets/img17.jpg" class="mx-auto" alt="" />
      </div>
      <div class="m-2">
        <div class="text-xl font-bold lg:col-span-2 col-span-3">
          <span class="text-3xl mx-2 text-purple-700">|</span>
          和Logostar 討論案件，我們會和你先簽訂一份保密協議，未經許可，Logostar
          不會在您行銷活動前，向第三人透露您的商業訊息，安全可靠的展開您委託的工作。
          <br />
          <br />
          <span class="mx-2">
            Logostar的保密責任範圍包括您“提出商標申請”，我們不會向第三方透露您的申請註冊訊息。
          </span>
        </div>
      </div>
    </div>

    <div class="col-span-4 flex items-center mt-10">
      <img class="m-2 w-8" alt="logo_tiny" src="../assets/logo-tiny.png" />
      <span class="text-2xl font-bold text-blue-500">
        全方位的商標諮詢服務</span
      >
    </div>

    <div class="col-span-4 grid grid-cols-3 gap-4 mt-4">
      <div
        class="
          col-span-3
          md:col-span-1
          justify-self-center
          bg-blue-400
          w-11/12
          p-2
          rounded-lg
        "
      >
        <h2 class="text-center text-xl font-bold text-white">商標授權合約</h2>
      </div>
      <div
        class="
          col-span-3
          md:col-span-1
          justify-self-center
          bg-yellow-400
          w-11/12
          p-2
          rounded-lg
        "
      >
        <h2 class="text-center text-xl font-bold text-white">
          各國商標查詢申請
        </h2>
      </div>
      <div
        class="
          col-span-3
          md:col-span-1
          justify-self-center
          bg-green-400
          w-11/12
          p-2
          rounded-lg
        "
      >
        <h2 class="text-center text-xl font-bold text-white">
          商標侵權法律諮詢
        </h2>
      </div>
    </div>

    <div class="col-span-4 flex items-center mt-10">
      <img class="m-2 w-8" alt="logo_tiny" src="../assets/logo-tiny.png" />
      <span class="text-xl"> 高雄、屏東、台南可安排親訪您的公司/店面討論 </span>
    </div>
    <span class="col-span-4 text-xl"
      >也歡迎預約諮詢服務，親至台南市安平區本事務所辦公室。</span
    >
  </div>
</template>
