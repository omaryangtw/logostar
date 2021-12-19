<template>
  <div class="max-w-screen-lg w-10/12 mx-auto text-base md:text-lg">
    <div class="col-span-12 my-3">
      聯絡我們： 請填寫下列表單資料，我們將與您聯繫
      <br />
      需求內容
      <span class="text-red-500">*</span> 必填
    </div>

    <div class="grid grid-cols-12">
      <div class="col-span-3 border bg-gray-100 px-1 py-px md:px-4 md:py-2">
        服務需求 <span class="text-red-500">＊</span>
      </div>
      <div class="col-span-9 border">
        <select v-model="service" id="service" name="service" class="w-full">
          <option value="">▼ 服務需求</option>
          <option value="Logo設計">Logo設計</option>
          <option value="商標註冊申請">商標註冊申請</option>
          <option value="Logo設計 + 商標註冊申請">
            Logo設計 + 商標註冊申請
          </option>
          <option value="" disabled>———————</option>
          <option value="公司/商號設立登記 + 商標註冊申請">
            公司/商號設立登記 + 商標註冊申請
          </option>
          <option value="平面設計">平面設計</option>
          <option value="其他">其他</option>
        </select>
      </div>
      <div class="col-span-3 border bg-gray-100 px-1 py-px md:px-4 md:py-2">
        公司/商號/事業名稱 <span class="text-red-500">＊</span>
      </div>
      <div class="col-span-9 border">
        <input v-model="company" type="text" class="w-full" />
      </div>
      <div class="col-span-3 border bg-gray-100 px-1 py-px md:px-4 md:py-2">
        負責人姓名 <span class="text-red-500">＊</span>
      </div>
      <div class="col-span-9 border flex">
        <input v-model="name" type="text" class="w-full" />
      </div>
      <div class="col-span-3 border bg-gray-100 px-1 py-px md:px-4 md:py-2">
        聯絡人姓名 <span class="text-red-500">＊</span>
        <span
          ><button
            @click="repeat"
            class="bg-green-400 py-px px-1 rounded font-bold text-white"
          >
            同上
          </button></span
        >
      </div>
      <div class="col-span-9 border">
        <input v-model="contact_name" type="text" class="w-full" />
      </div>
      <div class="col-span-3 border bg-gray-100 px-1 py-px md:px-4 md:py-2">
        通訊地址 <span class="text-red-500">＊</span>
      </div>
      <div class="col-span-9 border">
        <input v-model="address" type="text" class="w-full" />
      </div>
      <div class="col-span-3 border bg-gray-100 px-1 py-px md:px-4 md:py-2">
        手機 <span class="text-red-500">＊</span>
      </div>
      <div class="col-span-9 border">
        <input v-model="mobile" type="tel" class="w-full" />
      </div>
      <div class="col-span-3 border bg-gray-100 px-1 py-px md:px-4 md:py-2">
        市話
      </div>
      <div class="col-span-9 border">
        <input v-model="phone" type="tel" class="w-full" />
      </div>
      <div class="col-span-3 border bg-gray-100 px-1 py-px md:px-4 md:py-2">
        E-mail
      </div>
      <div class="col-span-9 border">
        <input v-model="email" type="email" class="w-full" />
      </div>
      <div class="col-span-3 border bg-gray-100 px-1 py-px md:px-4 md:py-2">
        公司網站
      </div>
      <div class="col-span-9 border">
        <input v-model="website" type="url" class="w-full" />
      </div>
      <div class="col-span-3 border bg-gray-100 px-1 py-px md:px-4 md:py-2">
        <span class="pr-2" style="color: #3b5998">
          <font-awesome-icon :icon="['fab', 'facebook-square']" /></span
        >FB粉絲頁
      </div>
      <div class="col-span-9 border">
        <input v-model="facebook" type="url" class="w-full" />
      </div>
      <div class="col-span-3 border bg-gray-100 px-1 py-px md:px-4 md:py-2">
        <span class="pr-2" style="color: #8a3ab9"
          ><font-awesome-icon :icon="['fab', 'instagram']" /></span
        >IG 名稱
      </div>
      <div class="col-span-9 border">
        <input v-model="instagram" type="url" class="w-full" />
      </div>
      <div class="col-span-3 border bg-gray-100 px-1 py-px md:px-4 md:py-2">
        <span class="pr-2" style="color: #00b900">
          <font-awesome-icon :icon="['fab', 'line']" /> </span
        >Line ID
      </div>
      <div class="col-span-9 border">
        <input v-model="line" type="text" class="w-full" />
      </div>
      <div v-if="required" class="col-span-12 mx-auto bg-red-500 text-white">
        請將必填資訊完整填入
      </div>

      <button
        @click="check"
        class="p-4 col-span-12 bg-blue-500 text-white font-bold my-3"
      >
        確認送出
      </button>
    </div>
  </div>

  <div
    v-if="modal"
    class="
      modal
      h-screen
      w-full
      fixed
      left-0
      top-0
      text-base
      md:text-lg
      flex
      justify-center
      items-center
      bg-black bg-opacity-50
    "
    @click="modal = false"
  >
    <!-- modal -->
    <div
      class="bg-white rounded shadow-lg w-10/12 max-w-screen-lg"
      @click.stop=""
    >
      <!-- modal header -->
      <div class="border-b px-1 py-px md:px-4 md:py-2 flex">
        <h3 class="font-semibold">確認送出</h3>
      </div>
      <!-- modal body -->
      <div class="px-1 py-px md:px-4 md:py-2 grid grid-cols-2 md:grid-cols-3">
        <p>服務需求:</p>
        <p class="md:col-span-2">{{ service }}</p>
        <p>公司/商號/事業名稱:</p>
        <p class="md:col-span-2">{{ company }}</p>
        <p>負責人:</p>
        <p class="md:col-span-2">{{ name }}</p>
        <p>聯絡人:</p>
        <p class="md:col-span-2">{{ contact_name }}</p>
        <p>通訊地址:</p>
        <div class="md:col-span-2">{{ address }}</div>
        <p>手機:</p>
        <p class="md:col-span-2">{{ mobile }}</p>
        <p v-if="phone != ''">市話:</p>
        <p v-if="phone != ''" class="md:col-span-2">{{ phone }}</p>
        <p v-if="email != ''">E-mail:</p>
        <p v-if="email != ''" class="md:col-span-2">{{ email }}</p>
        <p v-if="website != ''">公司網站:</p>
        <p v-if="website != ''" class="md:col-span-2">{{ website }}</p>
        <p v-if="facebook != ''">FB粉絲頁:</p>
        <p v-if="facebook != ''" class="md:col-span-2">{{ facebook }}</p>
        <p v-if="instagram != ''">IG 名稱:</p>
        <p v-if="instagram != ''" class="md:col-span-2">{{ instagram }}</p>
        <p v-if="line != ''">Line ID:</p>
        <p v-if="line != ''" class="md:col-span-2">{{ line }}</p>
      </div>
      <div class="flex justify-end items-center w-100 border-t p-3">
        <button
          @click="modal = false"
          class="
            bg-red-600
            hover:bg-red-700
            px-3
            py-1
            rounded
            text-white
            mr-1
            close-modal
          "
        >
          取消
        </button>
        <button
          @click="sendEmail"
          class="bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded text-white"
        >
          送出
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import emailjs from 'emailjs-com';
import { useReCaptcha } from 'vue-recaptcha-v3';
export default {
  name: 'Order',
  data() {
    return {
      modal: false,
      required: false,
      service: '',
      company: '',
      name: '',
      contact_name: '',
      address: '',
      mobile: '',
      phone: '',
      email: '',
      website: '',
      facebook: '',
      instagram: '',
      line: '',
    };
  },
  methods: {
    sendEmail() {
      emailjs
        .send(
          import.meta.env.VITE_SERVICE_ID,
          import.meta.env.VITE_TEMPLATE_ID,
          {
            service: this.service,
            company: this.company,
            name: this.name,
            contact_name: this.contact_name,
            address: this.address,
            mobile: this.mobile,
            phone: this.phone,
            email: this.email,
            website: this.website,
            facebook: this.facebook,
            instagram: this.instagram,
            line: this.line,
          },
          import.meta.env.VITE_USER_ID
        )
        .then(
          (result) => {
            console.log('SUCCESS!', result.status, result.text);
            this.$router.push({ name: 'Thank' });
          },
          (error) => {
            console.log('FAILED...', error);
          }
        );
    },
    check() {
      if (
        this.service === '▼ 服務需求' ||
        this.company === '' ||
        this.name === '' ||
        this.contact_name === '' ||
        this.address === '' ||
        this.mobile === ''
      ) {
        this.required = true;
        setTimeout(() => {
          this.required = false;
        }, 1500);
      } else {
        this.modal = true;
      }
    },
    repeat() {
      this.contact_name = this.name;
    },
  },
};
</script>

<style>
table th {
  background: #f2f5f8;
}
table th,
table td {
  padding: 15px;
  border-bottom: 1px solid #cecece;
  border-right: 1px solid #cecece;
}
select,
textarea,
input[type='text'],
input[type='password'],
input[type='datetime'],
input[type='datetime-local'],
input[type='date'],
input[type='month'],
input[type='time'],
input[type='week'],
input[type='number'],
input[type='email'],
input[type='url'],
input[type='search'],
input[type='tel'],
input[type='color'] {
  border: 1px solid #d5d5d5;
}
.confirm input {
  background: #272ac5;
  color: #eeeeee;
}
.button input {
  padding: 20px 80px;
  font-weight: bold;
  border: none;
  cursor: pointer;
}
</style>
