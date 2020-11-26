import fetch from "./../utils/fetch.js";
import utf8 from "utf8";

function String2Hex(tmp) {
  let str = "";
  for (let i = 0; i < tmp.length; i++) {
    str += tmp[i].charCodeAt(0).toString(16);
  }
  return str;
}

// post 请求方法 以formdata方式传参
let formData = {
  transformRequest: [
    function(data) {
      let ret = "";
      for (let it in data) {
        ret +=
          encodeURIComponent(it) + "=" + encodeURIComponent(data[it]) + "&";
      }
      return ret;
    }
  ],
  headers: {
    "Content-Type": "application/x-www-form-urlencoded"
  }
};

export default {
  // 生成二维码唯一标识
  addSignData(data) {
    console.log("签名参数", data);
    let jsonStr = "";
    if (Object.prototype.toString.call(data) == "[object Object]") {
      jsonStr = JSON.stringify(data);
    } else {
      jsonStr = data;
    }

    let hexStr = String2Hex(utf8.encode(jsonStr));
    return fetch({
      method: "POST",
      url: `/sign/addSignData`,
      data: {
        signType: data.signType,
        originData: hexStr
      },
      ...formData
    });
  },

  // 查询签名是否成功
  checkSign(qrCode) {
    return fetch({
      method: "GET",
      url: `/sign/getSignStatus/${qrCode}`
    });
  },

  // 获取签名信息
  querySignInfo(qrCode) {
    return fetch({
      method: "GET",
      url: `/sign/querySignInfo/${qrCode}`
    });
  },

  // 查询合约详情
  queryContractInfo(data) {
    return fetch({
      method: "GET",
      url: `/contract/queryContractInfo/${data.address}/${data.version}`
    });
  },

  // 查询某个地址下的合约信息列表
  queryContractList(address) {
    return fetch({
      method: "GET",
      url: `/contract/queryContractList/${address}`
    });
  },

  // 查看token详情
  queryTokenInfo(tokenID) {
    return fetch({
      method: "GET",
      url: `/token/queryTokenInfo/${tokenID}`
    });
  },

  //  获取所有发行的token
  queryAllTokens() {
    return fetch({
      method: "GET",
      url: `/token/queryAllTokens`
    });
  },
  // 查询token列表
  queryTokenList(data) {
    return fetch({
      method: "POST",
      url: `/token/queryTokenList`,
      data,
      ...formData
    });
  },

  // 链的申请
  chainApply(data) {
    return fetch({
      method: "POST",
      url: `/chain/chainApply`,
      data,
      ...formData
    });
  },

  // 链申请信息详情
  chainApplyInfo(id) {
    return fetch({
      method: "GET",
      url: `/chain/chainApplyInfo/${id}`
    });
  },

  // 链搜索
  chainSearch(data) {
    return fetch({
      method: "POST",
      url: `/chain/chainSearch`,
      data,
      ...formData
    });
  },

  // 获取 发布合约所需平台币
  queryPublishCCRequireNum() {
    return fetch({
      method: "GET",
      url: `/chain/queryPublishCCRequireNum`
    });
  },

  // 获取 发行token所需的平台币标准
  queryPublishTokenRequireNum() {
    return fetch({
      method: "GET",
      url: `/chain/queryPublishTokenRequireNum`
    });
  },

  // 获取 手续费返还规则
  queryReturnGasConfig() {
    return fetch({
      method: "GET",
      url: `/chain/queryReturnGasConfig`
    });
  },

  // 问题反馈 相关操作
  addQuestion(data) {
    return fetch({
      method: "POST",
      url: `/question/addQuestion`,
      data,
      ...formData
    });
  },

  // 替换token图标
  updateTokenIcon(data) {
    return fetch({
      method: "POST",
      url: `/token/updateTokenIcon`,
      data,
      ...formData
    });
  },
  // 新手指导
  // 默认展示
  queryDocTheme() {
    return fetch({
      method: "GET",
      url: `/doc/queryDocTheme`
    });
  },
  // 展示全部
  queryDocAllTheme() {
    return fetch({
      method: "GET",
      url: `/doc/queryDocAllTheme`
    });
  },
  // 查看文档详情
  queryDocInfo(id) {
    return fetch({
      method: "GET",
      url: `/doc/queryDocInfo/${id}`
    });
  },

  //  api查询相关操作
  queryApiTheme(id) {
    return fetch({
      method: "GET",
      url: `/api/queryApiTheme/${id}`
    });
  },
  queryApiInfo(id) {
    return fetch({
      method: "GET",
      url: `/api/queryApiInfo/${id}`
    });
  },

  // FAQ
  queryFaqList() {
    return fetch({
      method: "GET",
      url: `/faq/queryFaqList`
    });
  },
  // FAQ详情
  queryFaqInfo(id) {
    return fetch({
      method: "GET",
      url: `/faq/queryFaqInfo/${id}`
    });
  },
  // 所有的FAQ
  queryFaqAllList() {
    return fetch({
      method: "GET",
      url: `/faq/queryFaqAllList`
    });
  },
  // 技术问题搜索
  queryTechnologyList(data) {
    return fetch({
      method: "POST",
      url: `/faq/queryTechnologyList`,
      data,
      ...formData
    });
  },

  // 钱包下载二维码
  getVersionInfo(platType) {
    return fetch({
      method: "GET",
      url: `/version/getVersionInfo/${platType}`
    });
  },

  // 以下是UDO新增的体验模块相关接口
};
