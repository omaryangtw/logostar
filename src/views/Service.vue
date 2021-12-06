<template>
  <div class="bg-purple-500 font-bold text-gray-50 text-lg p-3">
    <div class="max-w-screen-lg w-10/12 mx-auto">
      <h2>服務說明</h2>
    </div>
  </div>
  <div class="max-w-screen-lg w-10/12 grid grid-cols-4 mx-auto">
    <div id="main" class="col-span-4">
      <!-- 關於 -->
      <div>
        <div class="grid grid-cols-12">
          <div class="col-span-5 justify-self-center w-full p-2">
            <img src="../assets/img6.png" class="mx-auto h-32" />
            <h2 class="text-center md:text-xl">公司名稱</h2>
          </div>

          <div class="col-span-2 justify-self-center align-self-center flex">
            <font-awesome-icon
              class="self-center text-2xl bg-"
              :icon="['fas', 'plus']"
            />
          </div>

          <div class="col-span-5 justify-self-center flex w-full p-2">
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
            <h2 class="text-lg">
              <span class="text-purple-700"> LOGO</span
              >STAR，您開創品牌的最佳夥伴！LOGO設計＋商標註冊申請一站搞定，為您預先佈局，避免觸法風險。
            </h2>
            <h2 class="text-lg">
              我們擁有專業合法的商標代理人，俱備多年企業法務服務經驗，不論國內外商標，都能為您的商標事前檢索與申請註冊，讓您同步交辦，省時、省力，又安心！
            </h2>
            <p class="mt-2 text-sm">
              ※商標資料庫的事前調查內容，為盡可能貼近商標註冊現況之分析，並非取得商標註冊之保證。
            </p>
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
              bg-green-300
              mt-4
            "
          >
            <div class="p-4 rounded-md">服務申請，請點擊這裡 ></div>
          </a>
        </div>
      </div>
    </div>

    <div class="col-span-4 flex items-center mt-20">
      <img class="m-2 w-8" alt="logo_tiny" src="../assets/logo-tiny.png" />
      <span class="text-xl md:text-2xl font-bold text-purple-700">LOGO</span>
      <span class="text-xl md:text-2xl font-bold text-black">STAR</span>
      <span class="text-xl md:text-2xl font-bold text-blue-500">
        專業商標顧問支援</span
      >
    </div>
    <div class="my-2 col-span-4 grid grid-cols-4 border md:divide-x">
      <div class="md:col-span-1 hidden md:block p-2">
        <h2 class="text-xl font-semibold text-center">專任顧問服務</h2>
        <div class="h-8/12 w-8/12 m-auto">
          <img
            src="../assets/img12.png"
            alt=""
            class="h-full w-full object-cover"
          />
        </div>
      </div>
      <div class="p-2 col-span-4 md:col-span-3 bg-gray-200">
        <h2 class="block md:hidden text-xl font-bold mb-2">專任顧問服務</h2>
        <h2 class="md:text-lg md:mx-4">
          <span
            >指派專任設計師、商標代理人與您深入討論，客製化服務打造您專屬品牌識別，分析現有品牌狀況，致力成為值得您信賴的長期夥伴。</span
          >
        </h2>
      </div>
    </div>
    <div class="my-2 col-span-4 grid grid-cols-4 border md:divide-x">
      <div class="p-2 col-span-4 md:col-span-3 bg-gray-200">
        <h2 class="block md:hidden text-xl font-bold mb-2">免費諮詢報價</h2>
        <h2 class="md:text-lg md:mx-4">
          <span
            >根據您初步的需求說明與預算範圍，由專人服務免費提供報價，降低您的負擔。</span
          >
        </h2>
      </div>
      <div class="md:col-span-1 hidden md:block p-2">
        <h2 class="text-xl font-semibold text-center">免費諮詢報價</h2>
        <div class="h-8/12 w-8/12 m-auto">
          <img
            src="../assets/img13.png"
            alt=""
            class="h-full w-full object-cover"
          />
        </div>
      </div>
    </div>
    <div class="my-2 col-span-4 grid grid-cols-4 border md:divide-x">
      <div class="md:col-span-1 hidden md:block p-2">
        <h2 class="text-xl font-semibold text-center">預先商標佈局</h2>
        <div class="h-8/12 w-8/12 m-auto">
          <img
            src="../assets/img14.png"
            alt=""
            class="h-full w-full object-cover"
          />
        </div>
      </div>
      <div class="p-2 col-span-4 md:col-span-3 bg-gray-200">
        <h2 class="block md:hidden text-xl font-bold mb-2">預先商標佈局</h2>
        <h2 class="md:text-lg md:mx-4">
          <span
            >落實商標設計前預查動作，商標代理人會事前審查文字名稱，確保市場上沒有近似的商標內容，再交付設計師提案。</span
          >
        </h2>
      </div>
    </div>
    <div class="my-2 col-span-4 grid grid-cols-4 border md:divide-x">
      <div class="p-2 col-span-4 md:col-span-3 bg-gray-200">
        <h2 class="block md:hidden text-xl font-bold mb-2">品牌推廣諮詢</h2>
        <h2 class="md:text-lg md:mx-4">
          <span class="text-purple-700">LOGO</span
          ><span
            >STAR擁有堅強的創新創業輔導團隊，包含：各領域專業的會計師、平面設計師，在創業育成、技術媒合及公司法務領域皆有豐富資歷，將是您品牌行銷推廣的最強後盾。</span
          >
        </h2>
      </div>
      <div class="md:col-span-1 hidden md:block p-2">
        <h2 class="text-xl font-semibold text-center">品牌推廣諮詢</h2>
        <div class="h-8/12 w-8/12 m-auto">
          <img
            src="../assets/img15.png"
            alt=""
            class="h-full w-full object-cover"
          />
        </div>
      </div>
    </div>
    <div class="my-2 col-span-4 grid grid-cols-4 border md:divide-x">
      <div class="md:col-span-1 hidden md:block p-2">
        <h2 class="text-xl font-semibold text-center">完美商標設計</h2>
        <div class="h-8/12 w-8/12 m-auto">
          <img
            src="../assets/img16.png"
            alt=""
            class="h-full w-full object-cover"
          />
        </div>
      </div>
      <div class="p-2 col-span-4 md:col-span-3 bg-gray-200">
        <h2 class="block md:hidden text-xl font-bold mb-2">完美商標設計</h2>
        <h2 class="md:text-lg md:mx-4">
          <span
            >專人服務的商標註冊與設計，事前把關，事後快速送審，讓您放心取得完整商標權，在創立品牌初期安心有保障，我們將專注打造您的LOGO成為業界STAR。</span
          >
        </h2>
      </div>
    </div>

    <div class="col-span-4 flex items-center mt-20">
      <img class="m-2 w-8" alt="logo_tiny" src="../assets/logo-tiny.png" />
      <span class="text-xl md:text-2xl font-bold text-purple-700">LOGO</span>
      <span class="text-xl md:text-2xl font-bold text-black">STAR</span>
      <span class="text-xl md:text-2xl font-bold text-blue-500">
        的資訊保密責任</span
      >
    </div>
    <div class="col-span-4">
      <div class="w-full">
        <img src="../assets/img17.jpg" class="w-full object-fit" alt="" />
      </div>
      <div class="mt-8">
        <div class="text-xl font-bold lg:col-span-2 col-span-3">
          <span class="text-3xl text-purple-700">|</span>
          為使您品牌創立前多一份保障，與您討論委託前，LOGOSTAR會與您簽署保密協議。未經許可，LOGOSTAR不會在您行銷活動前向第三方透露您的商業訊息；其保密責任範圍包含「提出商標申請」，我們皆不會向第三方透露任何申請註冊資訊。
        </div>
      </div>
    </div>

    <div class="col-span-4 flex items-center mt-20">
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

    <div class="col-span-4 flex items-center mt-20">
      <img class="m-2 w-8" alt="logo_tiny" src="../assets/logo-tiny.png" />
      <span class="text-lg font-bold">
        <span class="text-purple-700">LOGO</span>STAR提供三種諮詢方式：</span
      >
    </div>
    <ul class="col-span-4 pl-16 text-lg list-disc">
      <li>到店拜訪：高雄、台南，可安排專人親訪</li>
      <li>
        預約諮詢：線上預約時間，由您親至台南市安平區LOGO S T A
        R事務所辦公室面談討論。
      </li>
      <li>
        視訊會議：提供線上會議服務，只要有瀏覽器就可以和我們進行視訊會議。我們也配合支援多款視訊會議軟體（Meet、Zoom、LINE、Skype、Webex）。
      </li>
    </ul>
  </div>
</template>
