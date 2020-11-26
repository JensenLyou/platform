<template>
  <div class="case">
    <!-- 头部 -->
    <Header></Header>
    <!-- banner -->
    <div class="case-banner"
         :style="{ backgroundImage: $i18n.locale == 'en' ? `url(${bannerbgen})`  : `url(${bannerbgzh})`}">
      <!-- <template v-if="$i18n.locale == 'en'">
        <img class="case-banner"
             src="./../../assets/images/case/banner_en.png">
      </template>
      <template v-else>
        <img class="case-banner"
             src="./../../assets/images/case/banner.png">
      </template> -->

    </div>

    <!-- 案例 -->
    <div class="case-example">
      <el-carousel :interval="3000" type="card" height="440px" arrow="always" indicator-position="none" class="myCarousel">
        <div>
          <el-carousel-item v-for="(item, index) in ServiceIntroductionArr" :key="index" :style="{ backgroundImage: `url(${item.imgBg})`}" class="case-item">
            <img :src="item.icon" alt="UDO_通用型数字化开放平台_区块链体验仿真_搭链体验_创客区块链">
              <div class="case-item-title">{{item.title}}</div>
              <div class="case-item-des">{{item.des}}</div>
              <div class="case-item-btn" @click="handleDetail(index)">
                {{$t("web.Details")}}
              </div>
          </el-carousel-item>
        </div>
      </el-carousel>
      <!-- <div v-for="(item, index) in ServiceIntroductionArr"
           :key="index"
           :style="{ backgroundImage: `url(${item.imgBg})`}"
           class="case-item">
        <img :src="item.icon">
        <div class="case-item-title">{{item.title}}</div>
        <div class="case-item-des">{{item.des}}</div>
        <div class="case-item-btn"
             @click="handleDetail(index)">{{$t("web.Details")}}</div>
      </div> -->
    </div>

    <Footer></Footer>
  </div>
</template>

<script>
// 服务介绍
import imgBg01 from "./../../assets/images/service/01.png";
import imgBg02 from "./../../assets/images/service/02.png";
import imgBg03 from "./../../assets/images/service/03.png";
import imgBg04 from "./../../assets/images/service/04.png";
import imgBg05 from "./../../assets/images/service/05.png";
import imgBg06 from "./../../assets/images/service/06.png";

import icon01 from "./../../assets/images/case/icon1.png";
import icon02 from "./../../assets/images/case/icon2.png";
import icon03 from "./../../assets/images/case/icon3.png";
import icon04 from "./../../assets/images/case/icon4.svg";
import icon05 from "./../../assets/images/case/icon5.svg";
import icon06 from "./../../assets/images/case/icon6.svg";

import bannerbgen from "./../../assets/images/case/banner_en.png";
import bannerbgzh from "./../../assets/images/case/banner.png";
export default {
  data() {
    return {
      bannerbgen,
      bannerbgzh,
      ServiceIntroductionArr: [
        // 精准扶贫
        {
          imgBg: imgBg01,
          icon: icon01,
          title: this.$t("web.Accuratepovertyalleviationsolution"),
          des: this.$t("web.AccuratepovertyalleviationsolutionDes")
        },
        // 数据存证
        {
          imgBg: imgBg06,
          icon: icon06,
          title: this.$t("web.DataEvidenceSolution"),
          des: this.$t("web.DataEvidenceSolutionDes")
        },
        // 智慧城市
        {
          imgBg: imgBg04,
          icon: icon04,
          title: this.$t("web.SmartCitySolution"),
          des: this.$t("web.SmartCitySolutionDes")
        },
        // 数字安全
        {
          imgBg: imgBg05,
          icon: icon05,
          title: this.$t("web.DigtalSavetySolution"),
          des: this.$t("web.DigtalSavetySolutionDes")
        },
        // 房屋租赁
        {
          imgBg: imgBg02,
          icon: icon02,
          title: this.$t("web.Houserentalsolution"),
          des: this.$t("web.HouserentalsolutionDes")
        },
        // 电子病历
        {
          imgBg: imgBg03,
          icon: icon03,
          title: this.$t("web.ElectronicMedicalRecordsSolution"),
          des: this.$t("web.ElectronicMedicalRecordsSolutionDes")
        },
      ]
    };
  },
  created() {},
  watch: {
    "$i18n.locale": {
      handler() {
        this.ServiceIntroductionArr = [
          // 精准扶贫
          {
            imgBg: imgBg01,
            icon: icon01,
            title: this.$t("web.Accuratepovertyalleviationsolution"),
            des: this.$t("web.AccuratepovertyalleviationsolutionDes")
          },
          // 数据存证
          {
            imgBg: imgBg06,
            icon: icon06,
            title: this.$t("web.DataEvidenceSolution"),
            des: this.$t("web.DataEvidenceSolutionDes")
          },
          // 智慧城市
          {
            imgBg: imgBg04,
            icon: icon04,
            title: this.$t("web.SmartCitySolution"),
            des: this.$t("web.SmartCitySolutionDes")
          },
          // 数字安全
          {
            imgBg: imgBg05,
            icon: icon05,
            title: this.$t("web.DigtalSavetySolution"),
            des: this.$t("web.DigtalSavetySolutionDes")
          },
          // 房屋租赁
          {
            imgBg: imgBg02,
            icon: icon02,
            title: this.$t("web.Houserentalsolution"),
            des: this.$t("web.HouserentalsolutionDes")
          },
          // 电子病历
          {
            imgBg: imgBg03,
            icon: icon03,
            title: this.$t("web.ElectronicMedicalRecordsSolution"),
            des: this.$t("web.ElectronicMedicalRecordsSolutionDes")
          },
        ];
      },
      deep: true
    }
  },
  destroyed() {},
  methods: {
    addClass() {},
    handleDetail(index) {
      this.$router.push({ path: "/case_demo", query: { index: index } });
    }
  }
};
</script>

<style lang="less">
.case {
  .case-banner {
    width: 100%;
    min-height: 695px;
    background-color: #fff;
    background-position: center center;
    background-repeat: no-repeat;
  }
  .case-example {
    padding: 200px 0 220px 0;
    background-color: #fff;
    text-align: center;
    .case-item {
      display: inline-block;
      width: 314px;
      height: 440px;
      box-sizing: border-box;
      color: #fff;
      padding: 80px 20px 0 20px;
      vertical-align: top;
      background-repeat: no-repeat;
      background-size: 100% 100%;
      transition: all 0.5s;
      &:hover {
        cursor: pointer;
        transform: scale(1.1, 1.2);
        .case-item-des,
        .case-item-btn {
          opacity: 1;
        }
      }
    }
    .case-item-title {
      font-size: 26px;
      margin: 40px 0 20px 0;
    }
    .case-item-des {
      transition: all 0.5s;
      opacity: 0;
    }
    .case-item-btn {
      display: inline-block;
      opacity: 0;
      width: 120px;
      height: 50px;
      line-height: 50px;
      background-color: #f8a747;
      color: #fff;
      border-radius: 2px;
      margin-top: 30px;
      transition: all 0.5s;
    }
    .myCarousel{
      height:500px;
      width:942px;
      margin-left:473px
    }
    .myCarousel .el-carousel__container{
      margin-left: 100px;
    }
    .myCarousel .el-carousel__arrow--left{
      left: -57px;
    }
    .myCarousel .el-carousel__arrow--right {
      right: 1px;
    }
    
  }
}
</style>
<style>
</style>