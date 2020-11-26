<template>
  <div class="publish-detail">
    <div v-show="type == 0"
         class="title">{{$t("page.Deleteperformer")}}</div>
    <div v-show="type == 1"
         class="title">{{$t("page.Addperformer")}}</div>
    <div v-show="type == 2"
         class="title">{{$t("btn.update_sign_number")}}</div>
    <div v-show="type == 3"
         class="title">{{$t("page.Setupmultiplesignatures")}}</div>

    <div>
      <div class="mg-b20 mg-t44"><i class="el-icon-success public"></i></div>
      <div v-show="type == 0">{{msg}}</div>
      <div v-show="type == 1">{{msg}}</div>
      <div v-show="type == 2">{{msg}}</div>
      <div v-show="type == 3">{{msg}}</div>
    </div>

    <div class="info-box"
         v-if="type != 3">
      <div class="info clearfix">
        <template v-if="type != 2">
          <span class="fl"> {{$t("developer.publish.setting_multipleSign.ruleForm.managerAddress.label")}}:</span> <span class="fr">{{address}}</span>
        </template>
        <template v-else>
          <!-- 国际化 -->
          <div class="text-center"
               v-if="$i18n.locale == 'zh'">执行签名次数修改为{{number}}次</div>
          <div class="text-center"
               v-else>The number of execution signatures is changed to {{number}} time.</div>
        </template>
      </div>
    </div>

    <div class="contractInfo text-left"
         v-else>
      <div class="clearfix"><span>{{$t("developer.publish.setting_multipleSign.ruleForm.leaderAddress.label")}}：</span> <span class="detial-info-span">{{info.leaderAddress}}</span> </div>
      <div class="clearfix"><span>{{$t("developer.publish.setting_multipleSign.ruleForm.masterThreshold.label")}}：</span> <span class="detial-info-span">{{info.masterThreshold}}</span> </div>
      <div class="clearfix"
           v-for="(item,index) in info.domains"
           :key="index"><span>{{ info.domains.length > 1 ? `${$t("developer.publish.setting_multipleSign.ruleForm.managerAddress.label")}${index+1}：` : `${$t("developer.publish.setting_multipleSign.ruleForm.managerAddress.label")}：`}}</span> <span class="detial-info-span">{{item.value}}</span> 
      </div>
      <div class="clearfix"><span>{{$t("developer.publish.setting_multipleSign.ruleForm.managerThreshold.label")}}：</span> <span class="detial-info-span">{{info.managerThreshold}}</span> </div>
    </div>

    <div><span class="pointer"
            @click="handleDetail">{{$t("btn.View_multi_sign_aturedetails")}}</span></div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      type: 0, // 0删除 1添加 2修改 3设置多重签名
      address: "",
      number: "",
      msg: "",
      info: {
        leaderAddress: "",
        masterThreshold: "",
        staffAddresses: [],
        managerThreshold: "",
        domains: []
      }
    };
  },
  created() {
    this.type = this.$route.query.type;
    this.address = this.$route.query.address;
    this.number = this.$route.query.number;
    this.msg = this.$route.query.msg;
    if (this.$route.query.info) {
      this.info = this.$route.query.info;
    }
  },
  methods: {
    handleDetail() {
      this.$router.push({
        path: "/developer/multipleSign_detail",
        query: { tokenId: this.$route.query.tokenId }
      });
    }
  }
};
</script>

<style lang="less">
.publish-detail {
  text-align: center;
  padding-bottom: 70px;
  .info-box {
    width: 500px;
    display: inline-block;
    margin: 40px 0 50px 0;
  }
  .info {
    padding: 20px;
    background-color: #f8f8f9;
    border-radius: 10px;
  }
  .title {
    font-size: 18px;
    color: #1e1f20;
  }
  .contractInfo {
    display: inline-block;
    min-width: 525px;
    box-sizing: border-box;
    padding: 30px;
    background-color: #f8f8f8;
    line-height: 2;
    margin: 30px 0 30px 0;
  }
  .detial-info-span {
    width: 350px;
  }
}
</style>
