<template>
  <div class="developer-create-detail text-center">
    <div class="mg-b50">
      <div class="mg-b20 mg-t44"><i class="el-icon-success public"></i></div>
      <div>
        <div>{{ msg || $t("page.amendSuccess") }}</div>
        <!-- 国际化 -->
        <template v-if="$store.state.currentLanguage == 'zh'">
          <div class="detail-info"
               v-show="type == 0">发布智能合约需抵押手续费修改为 {{contractNumber}}UC</div>
          <div class="detail-info"
               v-show="type == 1">发行token需抵押的手续费修改为 {{tokenNumber}}UC</div>
          <div class="detail-info"
               v-show="type == 2">
            <div>立即返还本次抵押总数的百分比改为 {{initReleaseRatio}}%</div>
            <div>每期返还本次抵押总数的百分比改为 {{releaseRatio}}%</div>
            <div>每期的时长修改为 {{interval}}小时</div>
          </div>
        </template>
        <template v-else>
          <div class="detail-info"
               v-show="type == 0">Modify the processing fee for issuing a smart contract collateral to {{contractNumber}}UC</div>
          <div class="detail-info"
               v-show="type == 1">Modify the processing fee for issuing token to {{tokenNumber}}UC</div>
          <div class="detail-info"
               v-show="type == 2">
            <div>Modify the percentage of immediate return of the total amount of this mortgage to {{initReleaseRatio}}%</div>
            <div>Modify the percentage of the total number of mortgages returned in each period to {{releaseRatio}}%</div>
            <div>{{`Change the duration of each period to  ${interval} hours`}}</div>
          </div>
        </template>

      </div>
    </div>
    <div><span @click="$router.back()"
            class="pointer">{{ $t("btn.returnMainParams")}}</span></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      type: 0,
      contractNumber: "",
      tokenNumber: "",
      initReleaseRatio: "",
      interval: "",
      releaseRatio: "",
      msg: ""
    };
  },
  created() {
    this.type = this.$route.query.type;
    this.contractNumber = this.$route.query.contractNumber;
    this.tokenNumber = this.$route.query.tokenNumber;
    this.initReleaseRatio = this.$route.query.initReleaseRatio;
    this.interval = this.$route.query.interval;
    this.releaseRatio = this.$route.query.releaseRatio;
    this.msg = this.$route.query.msg;
  },
  methods: {
    backList() {
      this.$router.push({ path: "/developer/create_list" });
    },
    handleBackFuc() {
      this.$router.push({ path: "/developer/create_content" });
    }
  }
};
</script>

<style lang="less">
.developer-create-detail {
  .contractInfo {
    display: inline-block;
    min-width: 520px;
    box-sizing: border-box;
    padding: 30px;
    background-color: #f8f8f8;
    line-height: 2;
    margin: 0 0 30px 0;
  }
  .detial-info-span {
    width: 380px;
  }
  .el-icon-arrow-left {
    font-size: 24px;
    color: #1e1f20;
    vertical-align: middle;
  }
  .red {
    color: #e60012;
  }
  .detail-info {
    display: inline-block;
    margin-top: 30px;
  }
  .backbtn {
    position: absolute;
    left: 0;
    top: 0;
  }
}
</style>
