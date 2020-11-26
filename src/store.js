import Vue from "vue";
import createPersistedState from "vuex-persistedstate";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentLanguage: "zh",
    language: "zh", // zh 中文  en 英文  zhtw 台湾
    developer: {
      create: {
        detail: {
          remark: "",
          contractAddress: "",
          // 合约地址
          ccPath: "",
          // 合约路径
          mAddress: "",
          // 钱包地址
          createTime: "",
          // 合约发布时间
          contractSymbol: "",
          // 合约名称简写
          name: "",
          // 合约名称
          status: "1",
          // 合约状态 -1、已删除 1、未启用 2、正在运行 3、余额不足
          updateTime: "",
          // 合约更新时间
          version: ""
        }
      },
      publish: {
        detail: {
          issueTime: "", // 发行时间
          name: "", // token名称
          isBaseCoin: "", // 是否主币
          totalNumber: "", // 发行总量
          issuePrice: "", // 发行价
          tokenSymbol: "", // token名称简写
          status: "", // 状态 1启用 0禁用
          tokenID: "", // token标识
          iconUrl: "", // token图标
          restNumber: "", // 余额
          decimalUnits: ""
        }
      },
      chain: {
        detail: {
          remark: "", //  链简介
          createTimeFmt: "", // 申请时间
          en_short: "", // 链英文简写名称
          contact_name: "", // 联系人姓名
          name: "", // 链名称
          create_time: "", // 申请时间
          e_mail: "", // 邮箱
          status: "", // 状态1、已申请2、沟通3、受理中4、成功5、失败
          id: "", //主键ID
          contact_tel: "" // 联系他人电话
        }
      }
    },
    createInput: "", // 创建链搜索框
    createInputDate: "",
    tokenInput: "",
    tokenInputDate: "",
    chainInput: "",
    chainInputDate: "",
    documentInput: "",
    documentInputDate: "",
    token: localStorage.getItem('token') ? localStorage.getItem('token') : '',
    tokenValue: localStorage.getItem('tokenValue') ? localStorage.getItem('tokenValue') : '',
  },
  mutations: {
    // 设置token
    setToken (state,token,tokenValue) {
      state.token = token;
      state.tokenValue = tokenValue;
      console.log('state',state);
      localStorage.setItem("token",state.token.token);
      localStorage.setItem('tokenValue',state.token.tokenValue);
    },
    // 删除token
		delToken (state) {
      state.token = '';
      state.tokenValue = '';
      localStorage.removeItem("token");
      localStorage.removeItem("tokenValue");
    },
    set_currentLanguage(state, currentLanguage) {
      state.currentLanguage = currentLanguage;
    },
    SET_LANGUAGE(state, language) {
      state.language = language;
    },
    SET_DEVELOPER_CREATE_DETAIL(state, detail) {
      state.developer.create.detail = detail;
    },
    SET_DEVELOPER_PUBLISH_DETAIL(state, detail) {
      state.developer.publish.detail = detail;
    },
    SET_DEVELOPER_CHAIN_DETAIL(state, detail) {
      state.developer.chain.detail = detail;
    },
    set_createInput(state, createInput) {
      state.createInput = createInput;
    },
    set_documentInput(state, documentInput) {
      state.documentInput = documentInput;
    },
    SET_CREATEINPUTDATE(state, createInputDate) {
      state.createInputDate = createInputDate;
    },
    SET_TOKENINPUTDATE(state, tokenInputDate) {
      state.tokenInputDate = tokenInputDate;
    },
    SET_CHAININPUTDATE(state, chainInputDate) {
      state.chainInputDate = chainInputDate;
    },
    SET_DOCUMENTINPUTDATE(state, documentInputDate) {
      state.documentInputDate = documentInputDate;
    }
  },
  actions: {},
  plugins: [createPersistedState({ storage: window.sessionStorage })]
});
