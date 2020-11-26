export default {
  //  转化为二进制
  String2Hex(tmp) {
    var str = "";
    for (var i = 0; i < tmp.length; i++) {
      str += tmp[i].charCodeAt(0).toString(16);
    }
    return str;
  },
  // 跳转到区块链浏览器
  ToBrowserFuc() {
    let url =
      process.env.NODE_ENV === "production"
        ? "https://explorer.udochain.cn/"
        : "https://explorer.udochain.cn/block";

    window.open(url, "_blank");
  },
  // 跳转到钱包
  handleToWallet() {
    window.open("https://www.mybitt.io/", "_blank");
  }
};
