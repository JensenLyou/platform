<template>
  <div class="view-example">
    <!-- 头部 -->
    <Header></Header>
    <!-- 案例 -->
    <!-- 链上省 -->
    <div class="saving">
      <div class="panel">
        <!-- 画面 -->
        <div class="savingMobile">
          <img src="./../../assets/images/example/pic.png"
               alt="UDO_通用型数字化开放平台_区块链体验仿真_搭链体验_创客区块链">
        </div>
        <!-- 文字 -->
        <div>
          <!-- 标题 -->
          <div>
            <!-- 链上省logo -->
            <img class="mg-r20"
                 src="./../../assets/images/example/logo.png" alt="UDO_通用型数字化开放平台_区块链体验仿真_搭链体验_创客区块链">
            <!-- 标题 -->
            <div class="inblock savingTitle">
              <div>{{$t("web.OnchainSaving")}}</div>
            </div>
          </div>
          <!-- 描述 -->
          <div class="savingDes">{{$t("web.OnchainSavingDes")}}</div>
          <!-- 二维码 -->
          <div> 
            <img class="savingQrcode"
                 src="./../../assets/images/example/qrCode.png" alt="UDO_通用型数字化开放平台_区块链体验仿真_搭链体验_创客区块链">
            <div class="savingScan">{{$t("web.ScanDownload")}}</div>
          </div>
        </div>
      </div>
    </div>
    <!-- 精准扶贫助农平台 -->
    <div class="pig">
      <div class="panel">
        <!-- 信息 -->
        <div>
          <img class="mg-r20"
                 src="./../../assets/images/example/bg_logo.png" alt="UDO_通用型数字化开放平台_区块链体验仿真_搭链体验_创客区块链">
          <!-- 标题 -->
          <div class="inblock pigTitle">
            <div>{{$t("web.PercisionPoverty")}}</div>
          </div>
          <!-- 描述 -->
          <div class="pigDes">{{$t("web.PercisionPovertyDes")}}</div>
          <!-- 二维码 -->
          <div>
            <img class="pigQrcode"
                 src="./../../assets/images/example/bg_qrCode.png" alt="UDO_通用型数字化开放平台_区块链体验仿真_搭链体验_创客区块链">
            <div class="pigScan">{{$t("web.ScanExperience")}}</div>
          </div>
        </div>
        <!-- 手机 -->
        <div class="pigMobile">
          <img src="./../../assets/images/example/bg_pic.png"
               alt="UDO_通用型数字化开放平台_区块链体验仿真_搭链体验_创客区块链">
        </div>
      </div>
    </div>
    <!-- 真评网 -->
    <div class="example01">
      <div class="panel">
        <!-- 手机 -->
        <div class="mg-r154">
          <img src="./../../assets/images/example/Travel.png" alt="UDO_通用型数字化开放平台_区块链体验仿真_搭链体验_创客区块链">
        </div>
        <div>
          <!-- 标题 -->
          <div>
            <!-- 真评网logo -->
            <img class="mg-r20"
                 src="./../../assets/images/example/Travel-logo.png" alt="UDO_通用型数字化开放平台_区块链体验仿真_搭链体验_创客区块链">
            <!-- 标题 -->
            <div class="inblock ver-top">
              <div class="example-title">{{$t("web.MakeaPoint")}}</div>
              <div class="fs16">{{$t("web.Decentralizedtourismserviceplatform")}}</div>
            </div>
          </div>
          <!-- 描述 -->
          <div class="example-des">{{$t("web.DecentralizedtourismserviceplatformDes")}}</div>
          <!-- 按钮 -->
          <div class="play-btn">{{$t("web.StartonWechat")}}</div>
          <!-- 二维码 -->
          <div>
            <img class="imgQR" src="./../../assets/images/example/Travel-QR.png" alt="UDO_通用型数字化开放平台_区块链体验仿真_搭链体验_创客区块链">
          </div>
        </div>
      </div>
    </div>
    <!-- 欢乐夹娃娃 -->
    <div class="example02-box">
      <div class="panel example02">
        <!-- 画面 -->
        <div class="mg-r104">
          <img src="./../../assets/images/example/game.png"
               alt="UDO_通用型数字化开放平台_区块链体验仿真_搭链体验_创客区块链">
        </div>
        <!-- 文字 -->
        <div>
          <!-- 标题 -->
          <div class="mg-l7">
            <div class="example-title">{{$t("web.DigitalIntegralClaw")}}</div>
            <div class="fs16">{{$t("web.Decentralizedgames")}}</div>
          </div>
          <!-- 描述 -->
          <div class="example-des mg-l7">{{$t("web.DecentralizedgamesDes")}}</div>
          <div class="play-btn mg-l7">{{$t("web.StartNow")}}</div>
          <!-- 二维码 -->
          <div>
            <img class="imgQR"
                 src="./../../assets/images/example/game-QR.png" alt="UDO_通用型数字化开放平台_区块链体验仿真_搭链体验_创客区块链">
          </div>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  }
};
</script>

<style lang="less" scoped>
.view-example {
  .panel {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  // 链上省
  .saving {
    color: #373d41;
    padding: 154px 0 165px 0;
  }
  .savingMobile{
    // color: #373d41;
    // padding: 154px 0 165px 0;
    margin-right: 144px;
    margin-left: 100px;
  }
  .savingTitle{
    vertical-align: top;
    margin-top: 25px;
    font-size:24px;
    font-family:PingFangSC-Regular,PingFang SC;
    font-weight:400;
    color:rgba(0,0,0,0.65);
    line-height:33px;
  }
  .savingDes{
    width:638px;
    height:88px;
    font-size:16px;
    font-family:PingFangSC-Regular,PingFang SC;
    font-weight:400;
    color:rgba(0,0,0,0.5);
    line-height:22px;
    margin-top: 36px;
  }
  .savingQrcode{
    width:156px;
    height:156px;
    margin-top: 100px;
  }
  .savingScan{
    width:80px;
    height:22px;
    font-size:16px;
    font-family:PingFangSC-Regular,PingFang SC;
    font-weight:400;
    color:rgba(0,0,0,0.65);
    line-height:22px;
    margin-left: 38px;
    margin-top: 12px;
    text-align: center;
  }
  // 精准扶贫助农平台
  .pig{
    background-color: #fff;
    color: #fff;
    padding: 106px 0 82px 0;
    background-image: url("./../../assets/images/example/BG.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    padding-left: 160px;
  }
  .pigTitle{
    height:33px;
    font-size:24px;
    font-family:PingFangSC-Regular,PingFang SC;
    font-weight:400;
    color:rgba(0,0,0,0.65);
    line-height:33px;
    vertical-align: top;
    margin-top: 25px;
  }
  .pigDes{
    width:638px;
    height:110px;
    font-size:16px;
    font-family:PingFangSC-Regular,PingFang SC;
    font-weight:400;
    color:rgba(0,0,0,0.5);
    line-height:22px;
    margin-top: 35px;
  }
  .pigQrcode{
    width: 174px;
    height: 174px;
    margin-top: 71px;
  }
  .pigScan{
    width:64px;
    height:22px;
    font-size:16px;
    font-family:PingFangSC-Regular,PingFang SC;
    font-weight:400;
    color:rgba(0,0,0,0.65);
    line-height:22px;
    margin-left: 55px;
    text-align: center;
  }
  .pigMobile{
    margin-left: 150px;
  }
  // 真评网
  .example01 {
    background-color: #2b4790;
    color: #fff;
    padding: 106px 0 82px 0;
    background-image: url("./../../assets/images/example/Travel-bg.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }
  .example-des {
    margin-top: 22px;
    width: 410px;
    font-size: 16px;
  }
  .imgQR {
    margin-top: 35px;
  }
  .example-title {
    font-size: 30px;
    margin-bottom: 5px;
  }
  // 欢乐夹娃娃
  .example02-box {
    background-color: #fff;
  }
  .example02 {
    color: #373d41;
    padding: 154px 0 165px 0;
  }
  .play-btn {
    display: inline-block;
    color: #fff;
    height: 40px;
    line-height: 40px;
    padding: 0 18px;
    border-radius: 4px;
    background-color: #f8a747;
    margin-top: 30px;
  }
  .mg-r154 {
    margin-right: 154px;
  }
  .mg-r104 {
    margin-right: 104px;
  }
  .mg-l7 {
    margin-left: 7px;
  }
}
</style>
