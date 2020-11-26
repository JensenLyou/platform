<template>
  <div class="home">
    <!-- 头部 -->
    <Header></Header>

    <!-- banner -->
    <div class="relative">
      <div class="banner-text">{{$t("web.Universaldigitalplatform")}}</div>
      <img class="banner"
           src="./../../assets/images/home/banner.png"
           alt="UDO_通用型数字化开放平台_区块链体验仿真_搭链体验_创客区块链">
    </div>

    <!-- 平台介绍 -->
    <div class="PlatformIntroduction">
      <div class="home-title-box">
        <div class="home-title">{{$t("web.Platformintroduction")}}</div>
        <div class="home-title-en"
             :class="$i18n.locale">Platform introduction</div>
      </div>
      <div class="panel PlatformIntroduction-item-box">
        <div class="Introduction-des mg-b35 mg-r100 udois01">
          <img src="./../../assets/images/home/udois01.png"
               alt="UDO_通用型数字化开放平台_区块链体验仿真_搭链体验_创客区块链">
          <div>{{$t('web.udois01')}}</div>
        </div>
        <div class="Introduction-des udois02" :style="{ padding: $i18n.locale == 'en' ? '40px 20px' : '40px 90px'}">
          <img src="./../../assets/images/home/udois02.png"
               alt="UDO_通用型数字化开放平台_区块链体验仿真_搭链体验_创客区块链">
          <div>{{$t('web.udois02')}}</div>
        </div>
      </div>

      <div class="btn-whitepaper"
           @click="handleDownload">{{$t("web.Viewwhitepaper")}}</div>
    </div>

    <!-- 技术特点 -->
    <div class="technicalfeature">
      <div class="home-title-box">
        <div class="home-title">{{$t("web.Technicalcharacteristics")}}</div>
        <div class="home-title-en"
             :class="$i18n.locale">Technical characteristics</div>
      </div>
      <div class="panel flex-between mg-b80">
        <div v-for="(item, index) in technicalfeatureArr01"
             :key="index"
             class="technicalfeature-item">
          <div class="technical-img"
               :class="`technical-img-${index+1}`"
               :style="{ backgroundImage: `url(${item.img})` }"></div>
          <div class="technical-des">{{item.des}}</div>
        </div>
      </div>
      <div class="panel flex-between">
        <div v-for="(item, index) in technicalfeatureArr02"
             :key="index"
             class="technicalfeature-item">
          <div class="technical-img"
               :class="`technical-img-${index+4}`"
               :style="{ backgroundImage: `url(${item.img})` }"></div>
          <div class="technical-des">{{item.des}}</div>
        </div>
      </div>
    </div>

    <!-- 服务介绍 -->
    <div class="ServiceIntroduction">
      <img class="ServiceIntroduction-bgImg"
           src="./../../assets/images/service/bg.png"
           alt="UDO_通用型数字化开放平台_区块链体验仿真_搭链体验_创客区块链">
      <div class="ServiceIntroduction-content">
        <div class="home-title-box">
          <div class="home-title">{{$t("web.ServicesIntroduction")}}</div>
          <div class="home-title-en"
               :class="$i18n.locale">Service Introduction</div>
        </div>
        <div>
          <div v-for="(item, index) in ServiceIntroductionArr"
               :key="index"
               :style="{ backgroundImage: `url(${item.imgBg})`}"
               class="Servic-item">
            <img :src="item.icon" alt="UDO_通用型数字化开放平台_区块链体验仿真_搭链体验_创客区块链">
            <div class="Servic-item-title">{{item.title}}</div>
            <div class="Servic-item-des">{{item.des}}</div>
          </div>
        </div>
      </div>

    </div>

    <!-- 合作伙伴 -->
    <div class="CooperativePartner">
      <div class="home-title-box">
        <div class="home-title">{{$t("web.CooperativePartner")}}</div>
        <div class="home-title-en"
             :class="$i18n.locale">Cooperative partner</div>
      </div>
      <div class="panel">
        <div v-for="(item, index) in CooperativePartner"
             :key="index"
             class="flex-between mg-b40">
          <div v-for="(sub, i) in item"
               :key="i"
               class="Partner-img-box">
            <img :src="sub"
                 alt="UDO_通用型数字化开放平台_区块链体验仿真_搭链体验_创客区块链">
          </div>
        </div>
      </div>
    </div>

    <!-- 底部 -->
    <div class="bottom-part">
      <Footer></Footer>
    </div>

  </div>
</template>

<script>
// 技术特点
import png01 from "./../../assets/images/Technical/01.png";
import png02 from "./../../assets/images/Technical/02.png";
import png03 from "./../../assets/images/Technical/03.png";
import png04 from "./../../assets/images/Technical/04.png";
import png05 from "./../../assets/images/Technical/05.png";
import png06 from "./../../assets/images/Technical/06.png";

// 服务介绍
import imgBg01 from "./../../assets/images/service/01.png";
import imgBg02 from "./../../assets/images/service/02.png";
import imgBg03 from "./../../assets/images/service/03.png";
import icon01 from "./../../assets/images/service/icon_01.png";
import icon02 from "./../../assets/images/service/icon_02.png";
import icon03 from "./../../assets/images/service/icon_03.png";

// 合作伙伴
import partner01 from "./../../assets/images/partner/01.png";
import partner02 from "./../../assets/images/partner/02.png";
import partner03 from "./../../assets/images/partner/03.png";
import partner04 from "./../../assets/images/partner/04.png";
import partner05 from "./../../assets/images/partner/05.png";
import partner06 from "./../../assets/images/partner/06.png";
import partner07 from "./../../assets/images/partner/07.png";
import partner08 from "./../../assets/images/partner/08.png";
import partner09 from "./../../assets/images/partner/09.png";
import partner10 from "./../../assets/images/partner/10.png";
import partner11 from "./../../assets/images/partner/11.png";
import partner12 from "./../../assets/images/partner/12.png";

export default {
  name: "home",
  data() {
    return {
      technicalfeatureArr01: [
        {
          img: png01,
          des: this.$t("web.FreeServiceCharge")
        },
        {
          img: png02,
          des: this.$t("web.PrivacyPolicy")
        },
        {
          img: png03,
          des: this.$t("web.CompletelyDecentralized")
        }
      ],
      technicalfeatureArr02: [
        {
          img: png04,
          des: this.$t("web.Universal")
        },
        {
          img: png05,
          des: this.$t("web.TradingAcrossChain")
        },
        {
          img: png06,
          des: this.$t("web.MultisignatureMechanism")
        }
      ],
      ServiceIntroductionArr: [
        {
          imgBg: imgBg01,
          icon: icon01,
          title: this.$t("web.BlockchainSolutions"),
          des: this.$t("web.BlockchainSolutionsDes")
        },
        {
          imgBg: imgBg02,
          icon: icon02,
          title: this.$t("web.IntelligentContractDevelopment"),
          des: this.$t("web.IntelligentContractDevelopmentDes")
        },
        {
          imgBg: imgBg03,
          icon: icon03,
          title: this.$t("web.IndustryTOKENSolution"),
          des: this.$t("web.IndustryTOKENSolutionDes")
        }
      ],
      CooperativePartner: [
        [partner01, partner02, partner03],
        [partner04, partner05, partner06],
        [partner07, partner08, partner09],
        [partner10, partner11, partner12]
      ]
    };
  },
  watch: {
    "$i18n.locale": {
      handler() {
        this.technicalfeatureArr01 = [
          {
            img: png01,
            des: this.$t("web.FreeServiceCharge")
          },
          {
            img: png02,
            des: this.$t("web.PrivacyPolicy")
          },
          {
            img: png03,
            des: this.$t("web.CompletelyDecentralized")
          }
        ];
        this.technicalfeatureArr02 = [
          {
            img: png04,
            des: this.$t("web.Universal")
          },
          {
            img: png05,
            des: this.$t("web.TradingAcrossChain")
          },
          {
            img: png06,
            des: this.$t("web.MultisignatureMechanism")
          }
        ];
        this.ServiceIntroductionArr = [
          {
            imgBg: imgBg01,
            icon: icon01,
            title: this.$t("web.BlockchainSolutions"),
            des: this.$t("web.BlockchainSolutionsDes")
          },
          {
            imgBg: imgBg02,
            icon: icon02,
            title: this.$t("web.IntelligentContractDevelopment"),
            des: this.$t("web.IntelligentContractDevelopmentDes")
          },
          {
            imgBg: imgBg03,
            icon: icon03,
            title: this.$t("web.IndustryTOKENSolution"),
            des: this.$t("web.IndustryTOKENSolutionDes")
          }
        ];
        this.CooperativePartner = [
          [partner01, partner02, partner03],
          [partner04, partner05, partner06],
          [partner07, partner08, partner09],
          [partner10, partner11, partner12]
        ];
      },
      deep: true
    }
  },
  created() {},
  methods: {
    handleDownload() {
      window.open("./static/UDO_whitePaper.pdf", "_blank");
    }
  }
};
</script>

<style lang="less">
.home {
  background-color: #fff;
  .home-title {
    font-size: 40px;
    color: #2c2c2c;
    margin-bottom: 5px;
  }
  .home-title-en {
    color: #999;
    font-size: 20px;
  }
  .home-title-en.en {
    display: none;
  }
  // banner
  .banner-text {
    position: absolute;
    top: 115px;
    left: 0;
    right: 0;
    font-size: 60px;
    text-align: center;
    color: #fff;
  }
  .banner {
    width: 100%;
    vertical-align: top;
    min-height: 667px;
  }
  // 平台介绍
  .PlatformIntroduction {
    padding: 92px 0 152px 0;
    background-color: #f3f3f3;
    text-align: center;
    color: #2c2c2c;
    font-size: 28px;
    .home-title-box {
      margin-bottom: 80px;
    }
    // .PlatformIntroduction-item-box {
    //   display: flex;
    //   justify-content: space-around;
    // }
    .Introduction-des {
      width: 480px;
      height: 500px;
      display: inline-block;
      box-sizing: border-box;
      padding: 40px 92px;
      text-align: center;
      background-color: #23272a;
      color: #fff;
      font-size: 18px;
      vertical-align: top;
      line-height: 1.8;
      border-radius: 2px;
      &.udois01,
      &.udois02 {
        img {
          margin-bottom: 45px;
        }
      }
      &.udois01 {
        padding-top: 40px;
        image {
          margin-bottom: 45px;
        }
      }
    }
    .mg-r100 {
      margin-right: 100px;
    }
    .btn-whitepaper {
      width: 180px;
      height: 60px;
      line-height: 60px;
      text-align: center;
      color: #fff;
      font-size: 20px;
      background-color: #f8a747;
      margin: 48px auto 0 auto;
      cursor: pointer;
      border-radius: 2px;
    }
  }

  // 技术特点
  .technicalfeature {
    padding: 115px 0 120px;
    text-align: center;
    background-color: #fff;
    .technicalfeature-item {
      width: 300px;
    }
    .home-title-box {
      margin-bottom: 100px;
    }
    .mg-b80 {
      margin-bottom: 80px;
    }

    .technical-img {
      display: inline-block;
      width: 100px;
      height: 100px;
      background-repeat: no-repeat;
      background-size: 100% 100%;
      cursor: pointer;
    }
    .intro-loop(@n, @i:1) when (@i <= @n) {
      .technical-img-@{i}:hover {
        background-image: url("./../../assets/images/Technical/0@{i}_active.png") !important;
      }
      .intro-loop(@n, (@i + 1));
    }
    .intro-loop(6);

    .technical-des {
      font-size: 20px;
      color: #2c2c2c;
      margin-top: 30px;
      font-weight: 500;
    }
  }

  // 服务介绍
  .ServiceIntroduction {
    position: relative;
  }
  .ServiceIntroduction-bgImg {
    width: 100%;
    min-height: 868px;
    vertical-align: top;
  }
  .ServiceIntroduction-content {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 5% 0 200px 0;
    text-align: center;
    .home-title,
    .home-title-en {
      color: #fff;
    }
    .home-title-box {
      margin-bottom: 10%;
    }
    .Servic-imgBg {
      min-height: 868px;
    }
    .Servic-item {
      display: inline-block;
      width: 314px;
      height: 440px;
      box-sizing: border-box;
      color: #fff;
      padding: 80px 30px 0 30px;
      vertical-align: top;
      background-repeat: no-repeat;
      background-size: 100% 100%;
      transition: all 0.5s;
      &:hover {
        cursor: pointer;
        transform: scale(1.1, 1.2);
        .Servic-item-des {
          opacity: 1;
        }
      }
    }
    .Servic-item-title {
      font-size: 26px;
      margin: 40px 0 20px 0;
    }
    .Servic-item-des {
      opacity: 0;
      transition: all 0.5s;
    }
  }

  // 合作伙伴
  .CooperativePartner {
    background-color: #fff;
    padding: 170px 0 76px 0;
    text-align: center;
    .home-title-box {
      margin-bottom: 90px;
    }
    .Partner-img-box {
      width: 300px;
      height: 104px;
    }
  }
}
</style>
