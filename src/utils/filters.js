export default {
  // 合约状态
  globalContractStatus(status) {
    // -1、已删除 1、待初始化 2、正在运行 3、余额不足 4、合约已禁用 5、已弃用
    if (status == -1) return "已删除";
    if (status == 1) return "待初始化";
    if (status == 2) return "已启动";
    if (status == 3) return "余额不足";
    if (status == 4) return "已禁用";
    if (status == 5) return "已弃用";
  },
  languageText(value) {
    if (value == "zh") return "简体中文";
    if (value == "en") return "English";
  }
};
