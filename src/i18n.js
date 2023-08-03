import Vue from "vue";
import ja from "@/assets/lang/ja.js";
import VueI18n from "vue-i18n";

Vue.use(VueI18n);

export default new VueI18n(
  {
    locale: "ja", // 设置地区
    messages: {
      ja
    }
  } // 设置地区信息
);
