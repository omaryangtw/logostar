<template>
  <section id="form_area" class="contents">
    <div class="grid grid-cols-5">
      <div class="col-span-1"></div>
      <div class="col-span-2 text-lg">
        <div class="flex">
          <i class="fa fa-thumbs-o-up"></i>
          <h1 class="ico">聯絡我們：</h1>
        </div>
        <p class="form_lead">
          請填寫下列表單資料，我們將與您聯繫<br />
          需求內容 <span class="text-red-500"> ＊</span>必填
        </p>
      </div>
      <div class="col-span-1"></div>
      <div class="col-span-1"></div>
      <div class="col-span-1"></div>
      <div class="col-span-3">
        <form @submit.prevent="sendEmail" accept-charset="utf-8" class="">
          <input
            type="hidden"
            name="page_flow"
            id="page_flow"
            value="confirm"
          />

          <!-- お客様情報 -->
          <div class="container">
            <table class="border-2 w-full">
              <tr>
                <th class="font-semibold">
                  服務需求<span class="req text-red-500">＊</span>
                </th>
                <td>
                  <div class="form-content">
                    <select id="service" name="service">
                      <option value="">▼ 服務需求</option>
                      <option value="平面設計">平面設計</option>
                      <option value="商標Logo設計">商標Logo設計</option>
                      <option value="企業識別規劃">企業識別規劃</option>
                      <option value="平面設計 + 商標Logo申請">
                        平面設計 + 商標Logo申請
                      </option>
                      <option value="企業識別規劃 + 商標Logo申請">
                        企業識別規劃 + 商標Logo申請
                      </option>
                      <option value="公司/商號設立登記 + 商標Logo申請">
                        公司/商號設立登記 + 商標Logo申請
                      </option>
                    </select>
                  </div>
                </td>
              </tr>
              <tr>
                <th>
                  公司/商號/事業名稱<span class="req text-red-500">＊</span>
                </th>
                <td>
                  <div class="form-content">
                    <input
                      type="text"
                      name="company_name"
                      id="company_name"
                      class="size_m"
                      value=""
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <th>負責人<span class="req text-red-500">＊</span></th>
                <td>
                  <div class="form-content" id="name">
                    <span class="in_text">姓&nbsp;</span>
                    <input
                      type="text"
                      name="name_last"
                      id="name_last"
                      class="size_s"
                      value=""
                    />
                    <span class="in_text">　名&nbsp;</span>
                    <input
                      type="text"
                      name="name_first"
                      id="name_first"
                      class="size_s"
                      value=""
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <th>聯絡人<span class="req text-red-500">＊</span></th>
                <td>
                  <div class="form-content" id="name_kana">
                    <span class="in_text">姓&nbsp;</span>
                    <input
                      type="text"
                      name="name_last_kana"
                      id="name_last_kana"
                      class="size_s"
                      value=""
                    />
                    <span class="in_text">　名&nbsp;</span>
                    <input
                      type="text"
                      name="name_first_kana"
                      id="name_first_kana"
                      class="size_s"
                      value=""
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <th>通訊地址<span class="req text-red-500">＊</span></th>
                <td>
                  <div class="form-content">
                    <input
                      type="text"
                      id="address"
                      name="address"
                      value=""
                      class="size_m"
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <th>電話(手機)<span class="req text-red-500">＊</span></th>
                <td>
                  <div class="form-content" id="phone">
                    <input
                      type="text"
                      name="mobile"
                      id="mobile"
                      class="size_s"
                      maxlength="10"
                      value=""
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <th>電話(室話)</th>
                <td>
                  <div class="form-content" id="phone">
                    <input
                      type="text"
                      name="phone_top"
                      id="phone_top"
                      class="size_s"
                      maxlength="3"
                      size="3"
                      value=""
                    />
                    &nbsp;-&nbsp;
                    <input
                      type="text"
                      name="phone_bot"
                      id="phone_bot"
                      class="size_s"
                      maxlength="8"
                      value=""
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <th>E-mail</th>
                <td>
                  <div class="form-content">
                    <input
                      type="text"
                      name="email"
                      id="email"
                      class="size_m"
                      value=""
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <th>公司網站</th>
                <td>
                  <div class="form-content">
                    <input
                      type="text"
                      name="company_url"
                      id="company_url"
                      value=""
                      class="size_m"
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <th>FB粉絲頁/IG 名稱</th>
                <td>
                  <div class="form-content">
                    <input
                      type="text"
                      name="fb_ig"
                      id="fb_ig"
                      value=""
                      class="size_m"
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <th>Line ID</th>
                <td>
                  <div class="form-content">
                    <input
                      type="text"
                      name="line_id"
                      id="line_id"
                      value=""
                      class="size_m"
                    />
                  </div>
                </td>
              </tr>
            </table>
          </div>

          <div class="button-area text-center">
            <span class="confirm button"
              ><input type="submit" value="確認送出" class="my-4"
            /></span>
          </div>

          <!-- 利用規約 -->

          <!-- /terms -->

          <!-- プライバシーポリシー -->

          <!-- /terms -->
        </form>
      </div>
      <div class="col-span-1"></div>
    </div>
  </section>
</template>

<script>
import emailjs from "emailjs-com";
export default {
  name: "Order",
  data() {
    return {
      email: "abc",
      name: "bbc",
      start: "fff",
      time: "time",
    };
  },
  methods: {
    sendEmail(e) {
      console.log(this.email);
      emailjs.init("user_drYeCXvkjUo72SeIjPobS");
      emailjs
        .send(
          "service_5ts85fa",
          "template_wepy8nq",
          { to_name: this.email, from_name: this.name },
          "user_drYeCXvkjUo72SeIjPobS"
        )
        .then(
          (result) => {
            console.log("SUCCESS!", result.status, result.text);
          },
          (error) => {
            console.log("FAILED...", error);
          }
        );
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
input[type="text"],
input[type="password"],
input[type="datetime"],
input[type="datetime-local"],
input[type="date"],
input[type="month"],
input[type="time"],
input[type="week"],
input[type="number"],
input[type="email"],
input[type="url"],
input[type="search"],
input[type="tel"],
input[type="color"] {
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
