import store from "./../store";
import i18n from "../lang";

const pattern = {
  email: /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
  uppercase: /^[A-Z]{3,5}$/, // 大写字母校验
  letter: /[a-zA-Z]/, // 字母校验
  integer: /^[1-9]\d*$/, // 正整数校验
  outThree: /^[4-9]+$/, // 大于3的整数
  number: /^\d+(\.{0,1}\d+){0,1}$/, // 非负数的校验
  floatNumber: /^\d*\.?\d+$/, // 非负浮点数
  percent: /^\d+(\.\d{0,2})?$/,
  Name: /^[\u4e00-\u9fa50-9a-zA-Z\s]{2,32}$/, // 合约名称
  Symbol: /^[0-9a-zA-Z]{2,16}$/ //  合约简称
};

// 校验合约
function validVersion(version) {
  // 最多三个小数点  小数点之后最多5位小数
  if (Object.prototype.toString.call(version) !== "[object String]") return;
  let flag = true;
  if (!/^[0-9][.0-9]*$/.test(version)) {
    flag = false;
  }

  if (version.indexOf(".") > -1) {
    let arr = version.split(".");
    //  如果超过3个点
    if (arr.length > 4) {
      flag = false;
    }
    arr.forEach((item, index) => {
      // 如果点后面长度超过5个
      if (item.length > 5) {
        flag = false;
      } else if (item.length < 1) {
        flag = false;
      }
    });
  } else {
    if (version.length > 5) {
      flag = false;
    }
  }
  return flag;
}

export default {
  rule: {
    required_Name(rule, value, callback) {
      if (!pattern.Name.test(value)) {
        callback(
          new Error(
            store.state.currentLanguage == "zh"
              ? i18n.messages.zh.developer.create.steps[0].name.error
              : i18n.messages.en.developer.create.steps[0].name.error
          )
        );
      } else {
        callback();
      }
    },
    required_Symbol(rule, value, callback) {
      if (!pattern.Symbol.test(value)) {
        callback(
          new Error(
            store.state.currentLanguage == "zh"
              ? i18n.messages.zh.developer.create.steps[0].contractSymbol.error
              : i18n.messages.en.developer.create.steps[0].contractSymbol.error
          )
        );
      } else {
        callback();
      }
    },
    required_version(rule, value, callback) {
      if (value === "") {
        callback(
          new Error(
            store.state.currentLanguage == "zh"
              ? i18n.messages.zh.developer.create.steps[0].version.placeholder
              : i18n.messages.en.developer.create.steps[0].version.placeholder
          )
        );
      } else if (!validVersion(value)) {
        callback(
          new Error(
            store.state.currentLanguage == "zh"
              ? i18n.messages.zh.developer.create.steps[0].version.error
              : i18n.messages.en.developer.create.steps[0].version.error
          )
        );
      } else {
        callback();
      }
    },
    required_decimalUnits(rule, value, callback) {
      if (value < 4 || value > 18) {
        callback(
          store.state.currentLanguage == "zh"
            ? i18n.messages.zh.page.PleaseEnter3and18
            : i18n.messages.en.page.PleaseEnter3and18
        );
      } else {
        callback();
      }
    },
    required_totalNumber(rule, value, callback) {
      if (value === "") {
        callback(
          new Error(
            store.state.currentLanguage == "zh"
              ? i18n.messages.zh.developer.publish.steps[0].totalNumber
                  .placeholder
              : i18n.messages.en.developer.publish.steps[0].totalNumber
                  .placeholder
          )
        );
      } else if (!pattern.integer.test(value)) {
        callback(
          new Error(
            store.state.currentLanguage == "zh"
              ? i18n.messages.zh.developer.publish.steps[0].totalNumber.error
              : i18n.messages.en.developer.publish.steps[0].totalNumber.error
          )
        );
      } else {
        callback();
      }
    },
    required_issuePrice(rule, value, callback) {
      if (value === "") {
        callback(
          new Error(
            store.state.currentLanguage == "zh"
              ? i18n.messages.zh.developer.publish.steps[0].issuePrice
                  .placeholder
              : i18n.messages.en.developer.publish.steps[0].issuePrice
                  .placeholder
          )
        );
      } else if (
        !/^[0-9][0-9]{0,9}(\.[0-9]{1,6})?$/.test(value) ||
        value == 0
      ) {
        callback(
          new Error(
            store.state.currentLanguage == "zh"
              ? i18n.messages.zh.developer.publish.steps[0].issuePrice.errror
              : i18n.messages.en.developer.publish.steps[0].issuePrice.error
          )
        );
      } else {
        callback();
      }
    },
    required_percentage(rule, value, callback) {
      if (value < 0 || value > 100) {
        callback(
          new Error(
            store.state.currentLanguage == "zh"
              ? i18n.messages.zh.page.PleaseEnter0100
              : i18n.messages.en.page.PleaseEnter0100
          )
        );
      } else {
        callback();
      }
    },
    require_remark(rule, value, callback) {
      if (value.length < 2 || value.length > 200) {
        callback(
          new Error(
            store.state.currentLanguage == "zh"
              ? i18n.messages.zh.developer.create.steps[0].remark.error
              : i18n.messages.en.developer.create.steps[0].remark.error
          )
        );
      } else {
        callback();
      }
    },
    // 非负数的校验
    positive_number(rule, value, callback) {
      if (!pattern.floatNumber.test(value)) {
        callback(
          new Error(
            store.state.currentLanguage == "zh"
              ? i18n.messages.zh.page.PleaseEnterPositiveNumber
              : i18n.messages.en.page.PleaseEnterPositiveNumber
          )
        );
      } else {
        callback();
      }
    }
  },
  // 格式化 千分位
  formatThusand(val) {
    if (Number(val) !== 0 && !Number(val)) {
      return "";
    }
    return val.replace(/\d{1,3}(?=(\d{3})+$)/g, function(s) {
      return s + ",";
    });
  }
};
