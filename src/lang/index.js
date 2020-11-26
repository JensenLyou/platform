import Vue from "vue";
import VueI18n from "vue-i18n";
import store from "./../store.js";

import elementEnLocale from "element-ui/lib/locale/lang/en"; // element-ui lang
import elementZhLocale from "element-ui/lib/locale/lang/zh-CN"; // element-ui lang
// import elmentZhTWLocale from "element-ui/lib/locale/lang/zh-TW";
import enLocale from "./en";
import zhLocale from "./zh";
// import zhtwLocale from "./zh-tw";
Vue.use(VueI18n);

const messages = {
  en: {
    ...enLocale,
    ...elementEnLocale
  },
  zh: {
    ...zhLocale,
    ...elementZhLocale
  },
  // zhtw: {
  //   ...zhtwLocale,
  //   ...elmentZhTWLocale
  // }
};
// document.body.className = store.state.language || "zh";

const i18n = new VueI18n({
  locale: store.state.language || "zh", // set locale
  messages // set locale messages
});

export default i18n;
