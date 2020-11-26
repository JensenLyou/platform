<template>
  <div class="developer-create-detail text-center">
    <div class="mg-b50">
      <div class="mg-b20 mg-t44" v-show="$store.state.developer.chain.detail.status ==1">
        <div class="blue-icon"><i class="el-icon-more"></i></div>
      </div>

      <div class="mg-b20 mg-t44" v-show="$store.state.developer.chain.detail.status == 2">
        <i class="el-icon-success public"></i>
      </div>

      <div class="mg-b20 mg-t44" v-show="$store.state.developer.chain.detail.status == 3">
        <i class="el-icon-error"></i>
      </div>

      <div>
        <div v-show="$store.state.developer.chain.detail.status == 1">{{$t("page.Offlinecommunication")}}</div>
        <div v-show="$store.state.developer.chain.detail.status == 2">{{$t("page.Successfulentry")}}</div>
        <div v-show="$store.state.developer.chain.detail.status == 3">{{$t("page.Failuretosettle")}}</div>
        <div class="detail-info text-left">
          <div class="clearfix"><span class="detail-text">{{$t("page.Creationtime")}}：</span> <span class="detial-info-span">{{ $store.state.developer.chain.detail.createTimeFmt }}</span> </div>
          <div class="clearfix"><span class="detail-text">{{$t("developer.chain.steps[0].name.label")}}：</span> <span class="detial-info-span">{{ $store.state.developer.chain.detail.name}}</span> </div>
          <div class="clearfix"><span class="detail-text">{{$t("developer.chain.steps[0].contact_name.label")}}：</span> <span class="detial-info-span">{{ $store.state.developer.chain.detail.contact_name}}</span> </div>
          <div class="clearfix"><span class="detail-text">{{$t("developer.chain.steps[0].contact_tel.label")}}：</span> <span class="detial-info-span">{{ $store.state.developer.chain.detail.contact_tel}}</span> </div>
          <div class="clearfix"><span class="detail-text">{{$t("developer.chain.steps[0].e_mail.label")}}：</span> <span class="detial-info-span">{{ $store.state.developer.chain.detail.e_mail}}</span> </div>
          <div class="clearfix"><span class="detail-text">{{$t("developer.chain.steps[0].remark.label")}}：</span> <span class="detial-info-span">{{ $store.state.developer.chain.detail.remark}}</span> </div>
        </div>
      </div>
    </div>

    <div><span @click="backList"
            class="pointer">{{$t("btn.back_list")}}</span></div>

  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  created() {},
  methods: {
    backList() {
      this.$router.push({
        path: "/developer/chain_list",
        query: { keyWord: this.$store.state.developer.chain.detail.name }
      });
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
  .el-icon-error {
    color: #e60012;
    font-size: 60px;
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
  .blue-icon {
    display: inline-block;
    width: 60px;
    height: 60px;
    border-radius: 60px;
    background-color: #409eff;
    .el-icon-more {
      color: #fff;
      font-size: 28px;
      margin-top: 18px;
    }
  }
}
</style>
