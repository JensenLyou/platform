<template>
  <div class="wallet">
    <Header></Header>
    <div class="part01"><img class="img_bg"
           src="./../../assets/images/wallet.png"
           alt="UDO_通用型数字化开放平台_区块链体验仿真_搭链体验_创客区块链">
      <div class="part01-content panel">
        <div class="inblock part01-content-left">
          <div class="fs36 mg-b50">UDO数字钱包</div>
          <div>UDO是专业的数字资产管理钱包，独有的多重签名功使您的数字资产更加安全，可靠。</div>
          <div class="flex-between text-center">
            <div>
              <div class="andriod-download mg-t44">
                <img :src="QRurl"
                     alt="UDO_通用型数字化开放平台_区块链体验仿真_搭链体验_创客区块链">
              </div>

              <div>安卓下载</div>
            </div>
            <!-- <div>
              <img src="./../../assets/images/wallet_part01_ios.png"
                   alt="UDO_通用型数字化开放平台_区块链体验仿真_搭链体验_创客区块链"
                   height="52">
              <div>ios下载</div>
            </div> -->
          </div>
        </div>
        <div class="inblock part01-content-right relative">
          <div class="mybitt-title">Mybitt 钱包</div>
          <img src="./../../assets/images/wallet_part01.png"
               width="254"
               height="512"
               alt="UDO_通用型数字化开放平台_区块链体验仿真_搭链体验_创客区块链">
        </div>
      </div>
    </div>

    <div class="part02">
      <div class="title text-center  mg-b70">钱包模块</div>
      <div class="part02-item panel">
        <div class="inblock content-left mg-r125">
          <img src="./../../assets/images/wallet_part02_1.png"
               alt="UDO_通用型数字化开放平台_区块链体验仿真_搭链体验_创客区块链"
               width="564"
               height="361">
        </div>
        <div class="inblock content-right">
          <div class="title">MyBitt钱包</div>
          <div class="mg-b10">MyBitt钱包是一款专业的去中心化数字资产管理钱包，帮助你安全的储存数字资产，钱包不储存您的助记词、私钥，避免黑客窃取您的助记词私钥。保证您的资产安全。 </div>
        </div>
      </div>
      <div class="part02-item panel">

        <div class="inblock content-right mg-r125">
          <div class="title">数字资产安全储存</div>
          <div class="mg-b10">UDO 安全性，是和数钱包最大的特点。MyBitt钱包采用金融级别的加密技术，为用户的数字资产提供最高级别防护。用户可通过设置钱包密码、指纹实现多层防护，从而进一步保护资产安全。</div>
        </div>

        <div class="inblock content-left ">
          <img src="./../../assets/images/wallet_part02_2.png"
               alt="UDO_通用型数字化开放平台_区块链体验仿真_搭链体验_创客区块链"
               width="544"
               height="370">
        </div>
      </div>
      <div class="part02-item panel">
        <div class="inblock content-left mg-r125">
          <img src="./../../assets/images/wallet_part02_3.png"
               alt="UDO_通用型数字化开放平台_区块链体验仿真_搭链体验_创客区块链"
               width="548"
               height="437">
        </div>
        <div class="inblock content-right">
          <div class="title">多重签名认证</div>
          <div class="mg-b10">为了最大限度地保障用户资金的安全，MyBitt钱包支持多重签名认证，支持多方共同管理资产，为用户提供多重安全保障。</div>
        </div>
      </div>
      <div></div>
    </div>

    <div class="part03 ">
      <div class="title text-center mg-b165">钱包优势</div>
      <div class="panel part03-item-box">
        <div class="part03-item"
             v-for="(item, index) in advantageObj"
             :key="index">
          <div class="img-box"> <img :src="item.url"
                 alt="UDO_通用型数字化开放平台_区块链体验仿真_搭链体验_创客区块链">

          </div>

          <div class="title">{{item.title}}</div>
          <div>{{item.des}}</div>
        </div>
      </div>
    </div>

    <Footer></Footer>
  </div>
</template>

<script>
// @ is an alias to /src
import part03_1 from "./../../assets/images/wallet_part03_1.png";
import part03_2 from "./../../assets/images/wallet_part03_2.png";
import part03_3 from "./../../assets/images/wallet_part03_3.png";
import part03_4 from "./../../assets/images/wallet_part03_4.png";

export default {
  name: "home",
  data() {
    return {
      advantageObj: [
        {
          url: part03_1,
          title: "定制化服务",
          des: "只对您的需求定制化，最符合您的钱包。"
        },
        {
          url: part03_2,
          title: "关注用户体验",
          des: "重视用户体验，不断改进优化，为您提供安全又好用的钱包"
        },
        {
          url: part03_3,
          title: "多重签名模式",
          des: "独有的多重签名模式更好的实现多人管理数字资产"
        },
        {
          url: part03_4,
          title: "技术创新",
          des: "技术人员不断创新，运用最新技术，为您提供更好地服务"
        }
      ],
      QRurl: ""
    };
  },
  created() {
    // 安卓下载二维码
    this.$api.getVersionInfo(1).then(res => {
      this.$QRCode.toDataURL(res.data.data.appAddr).then(url => {
        this.QRurl = url;
      });
    });
  }
};
</script>

<style lang="less">
.wallet {
  .title {
    color: #1f1f1f;
    font-size: 36px;
  }
  .andriod-download {
    display: inline-block;
    width: 142px;
    height: 142px;
    background-color: #fff;
    img {
      width: 100%;
      height: 100%;
    }
  }

  .part01 {
    position: relative;
    .img_bg {
      width: 100%;
      min-height: 600px;
    }
    .part01-content {
      position: absolute;
      top: 0;
      bottom: 0;
      right: 0;
      left: 0;
      padding-top: 82px;
      display: flex;
      justify-content: center;
      color: #fff;
      font-size: 24px;

      .part01-content-left {
        width: 395px;
        margin-top: 80px;
        margin-right: 145px;
      }
      .part01-content-right {
        margin-top: 40px;
      }
    }
  }

  .part02 {
    padding: 175px 0 0 0;
    background-color: #fff;
    .part02-item {
      display: flex;
      align-items: center;
      padding: 100px 0;
    }

    .content-right {
      .title {
        font-size: 36px;
        color: #1f1f1f;
        margin-bottom: 50px;
      }
      width: 400px;
      text-align: left;
    }
  }

  .part03 {
    padding: 100px 0 200px 0;
    background-color: #fff;
    text-align: center;

    .part03-item-box {
      display: flex;
      justify-content: space-around;
    }

    .part03-item {
      width: 180px;
      .img-box {
        height: 52px;
      }
      .title {
        font-size: 24px;
        color: #1f1f1f;
        margin: 40px 0 37px 0;
      }
    }
  }
  .mybitt-title {
    position: absolute;
    left: 24px;
    top: 90px;
    background-color: #859cf7;
    font-size: 14px;
  }
}
</style>
