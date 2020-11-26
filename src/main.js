import Vue from "vue";
import ElementUI from "element-ui";
import App from "./App.vue";
import axios from 'axios';
import  VueResource  from 'vue-resource';
import store from "./store";
import utf8 from "utf8";
import QRCode from "qrcode";
import api from "./api/index.js";
import validator from "./utils/validator.js";
import utils from "./utils/index.js";
import $ from "jquery";
import './assets/iconfont/iconfont.css'
import './assets/iconfont/iconfont.js'

// css
import "./style/reset.less";
import "./style/index.less";
import "./style/animate.min.css";
import "./assets/iconfont/iconfont.css"
import "element-ui/lib/theme-chalk/index.css";

import router from "./router";
// 注册全局过滤器
import filters from "./utils/filters";
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key]);
});

// 全局组件
import components from "./components/index.js";
Object.keys(components).forEach(key => {
  Vue.component(key, components[key]);
});

// 语言包
import i18n from "./lang";
Vue.use(ElementUI, {
  i18n: (key, value) => i18n.t(key, value)
});

Vue.prototype.$axios = axios;
// axios.defaults.baseURL="http://192.168.1.231:8858/";            //开发环境
axios.defaults.baseURL="/nacos/";                                  //生产环境
Vue.use(VueResource);

Vue.config.productionTip = false;
Vue.prototype.$utf8 = utf8;
Vue.prototype.$QRCode = QRCode;
Vue.prototype.$api = api;
Vue.prototype.$validator = validator;
Vue.prototype.$utils = utils;
Vue.prototype.$ = $;

axios.defaults.headers.post['Content-Type'] = "application/json"
axios.defaults.headers.common['token'] = localStorage.getItem('token');
axios.defaults.headers.common['tokenValue'] = localStorage.getItem('tokenValue');

router.beforeEach((to, from, next) => {
	if (to.meta.content) {
		let head = document.getElementsByTagName('head');
		let meta = document.createElement('meta');
		document.querySelector('meta[name="keywords"]').setAttribute('content', to.meta.content.keywords)
		document.querySelector('meta[name="description"]').setAttribute('content', to.meta.content.description)
		meta.content = to.meta.content;
		head[0].appendChild(meta)
	}
	if (to.meta.title) {
		document.title = to.meta.title;
	}
	next()
});

new Vue({
  router,
  store,
  i18n,
  axios,
  render: h => h(App),
  mounted () {
    document.dispatchEvent(new Event('render-event'));
  }
}).$mount("#app");

// 添加请求拦截器
axios.interceptors.request.use(config => {
  // 在发送请求之前做些什么
  //判断是否存在token，如果存在将每个页面header都添加token
  // console.log("[store.state.token]",store.state.token)
    if(store.state.token){
      config.headers.common['Authorization']=store.state.token.token;
      config.headers.common['token'] = store.state.token.token;
      config.headers.common['tokenValue'] = store.state.token.tokenValue;
    } else{
      config.headers.common['Authorization']=localStorage.getItem('token');
      config.headers.common['token'] = localStorage.getItem('token');
      config.headers.common['tokenValue'] = localStorage.getItem('tokenValue');
    }
    return config;
}, error => {
// 对请求错误做些什么
  return Promise.reject(error);
});
  
// http response 拦截器
axios.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    console.log('response',error.response);
    if (error.response) {
      switch (error.response.status) {
        case 401:
          
      }
    }
    return Promise.reject(error)
});