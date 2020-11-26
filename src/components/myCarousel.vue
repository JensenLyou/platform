<template>
  <div class="partner-carousel">
    <!-- <div class="main-title">我们的伙伴</div>
    <div class="panel">
      <el-carousel ref="carousel"
                   :autoplay="false"
                   :interval="5000"
                   arrow="always"
                   indicator-position="none">
        <el-carousel-item v-for="(item, index) in partnerArr"
                          :key="index">
          <div class="div-box">
            <div v-for="(sub, ins) in item"
                 :key="ins">
              <img :src="sub"
                   alt="UDO_通用型数字化开放平台_区块链体验仿真_搭链体验_创客区块链">
            </div>
          </div>
        </el-carousel-item>
      </el-carousel>
    </div> -->
  </div>

</template>

<script>
// import banner from "assets/images/partner/banner.png";
// import banner1 from "assets/images/partner/banner1.png";
// import banner2 from "assets/images/partner/banner2.png";
// import banner3 from "assets/images/partner/banner3.png";
// import banner4 from "assets/images/partner/banner4.png";
// import banner5 from "assets/images/partner/banner5.png";
// import banner6 from "assets/images/partner/banner6.png";
// import banner7 from "assets/images/partner/banner7.png";
// import banner8 from "assets/images/partner/banner8.png";
// import banner9 from "assets/images/partner/banner9.png";
// import banner10 from "assets/images/partner/banner10.png";
// import banner11 from "assets/images/partner/banner11.png";
// import banner12 from "assets/images/partner/banner12.png";
// import banner13 from "assets/images/partner/banner13.png";
// import banner14 from "assets/images/partner/banner14.png";

export default {
  data() {
    return {
      // partnerArr: [
      //   [banner, banner1, banner2],
      //   [banner3, banner4, banner5],
      //   [banner6, banner7, banner8],
      //   [banner9, banner10, banner11],
      //   [banner12, banner13, banner14]
      // ]
    };
  },
  mounted() {}
};
</script>


<style lang="less">
.partner-carousel {
  padding: 130px 0 80px 0;
  background-color: #fff;
  .main-title {
    font-size: 36px;
    color: #1f1f1f;
    text-align: center;
  }
  .div-box {
    width: 80%;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .el-carousel__item {
    // background-color: #fff;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .el-carousel__arrow {
    width: 46px;
    height: 69px;
    background: rgba(255, 255, 255, 1);
    box-shadow: 0px 3px 13px 0px rgba(102, 121, 158, 0.3);
    border-radius: 2px;
    color: #5182e4;
    font-size: 30px;
    &:hover {
      background: linear-gradient(
        90deg,
        rgba(51, 101, 146, 1),
        rgba(75, 142, 201, 1)
      );
      color: #fff;
    }
  }
}
</style>
