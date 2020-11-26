<template>
  <div class="developer-create-detail text-center">

    <div class="public-title clearfix relative">
      <div class="backbtn pointer"
           @click="handleBackFuc"><i class="el-icon-arrow-left"></i> <span class="ver-middle">{{$t("page.Return")}}</span>
      </div>
      <div class="ver-middle">{{ type($route.query.type) }} </div>
      <div class="public-border mg-t18"></div>

    </div>

    <div class="mg-b50">
      <div class="mg-b20 mg-t44"
           v-show="$route.query.type"><i class="el-icon-success public"></i></div>
      <div v-show="$route.query.type == 2">{{$t("page.Startcontract")}}</div>
      <div v-show="$route.query.type == 3">{{$t("page.Upgradecontract")}}</div>
      <div v-show="$route.query.type == 14">
        <div>{{$t("page.Deletecontract")}}</div>
        <div class="detail-info">{{$t("page.Successfullydeleted")}}{{$route.query.name}}</div>
      </div>
    </div>

    <!-- 详情 -->
    <div class="contractInfo text-left"
         v-show="!$route.query.type">
      <div class="clearfix"><span>{{$t("developer.create.steps[0].name.label")}}：</span> <span class="detial-info-span">{{ $store.state.developer.create.detail.name}}</span> </div>
      <div class="clearfix"><span>{{$t("developer.create.steps[0].contractSymbol.label")}}：</span> <span class="detial-info-span">{{ $store.state.developer.create.detail.contractSymbol}}</span> </div>
      <div class="clearfix"><span>{{$t("page.ContractAddress")}}：</span> <span class="detial-info-span">{{ $store.state.developer.create.detail.contractAddress}}</span> </div>
      <div class="clearfix"><span>{{$t("page.Status")}}：</span> <span class="detial-info-span"
              :class="{ 'red': $store.state.developer.create.detail.status == -1, 'text-blue': $store.state.developer.create.detail.status == 2 }">{{ globalContractStatus($store.state.developer.create.detail.status) }}</span> </div>
      <div class="clearfix"><span>{{$t("developer.create.steps[0].version.label")}}：</span> <span class="detial-info-span">{{ $store.state.developer.create.detail.version}}</span></div>
      <div class="clearfix"><span>{{$t("developer.create.steps[0].remark.label")}}：</span> <span class="detial-info-span">{{ $store.state.developer.create.detail.remark}}</span></div>
    </div>

    <!-- 启动 和 升级 -->
    <div class="contractInfo text-left"
         v-show="$route.query.type == 2 || $route.query.type == 3">
      <div class="clearfix"><span>{{$t("developer.create.steps[0].name.label")}}：</span> <span class="detial-info-span">{{ $store.state.developer.create.detail.name}}</span> </div>
      <div class="clearfix"><span>{{$t("developer.create.steps[0].contractSymbol.label")}}：</span> <span class="detial-info-span">{{ $store.state.developer.create.detail.contractSymbol}}</span> </div>
      <div class="clearfix"><span>{{$t("page.ContractAddress")}}：</span> <span class="detial-info-span">{{ $store.state.developer.create.detail.contractAddress}}</span> </div>
      <div class="clearfix"><span>{{$t("developer.create.steps[0].version.label")}}：</span> <span class="detial-info-span">{{ $store.state.developer.create.detail.version}}</span></div>
      <div class="clearfix"><span>{{$t("page.Status")}}：</span> <span class="detial-info-span"
              :class="{ 'red': $store.state.developer.create.detail.status == -1, 'text-blue': $store.state.developer.create.detail.status == 2 }">{{  globalContractStatus($store.state.developer.create.detail.status ) }}</span> </div>
      <div class="clearfix"><span>{{$t("developer.create.steps[0].remark.label")}}：</span> <span class="detial-info-span">{{ $store.state.developer.create.detail.remark}}</span></div>
    </div>

    <div v-show="!$route.query.type || $route.query.type == 3"><span @click="backList"
            class="pointer">{{ $t("btn.back_list_page") }}</span></div>
    <div v-show="$route.query.type == 2"><span @click="handleBackFuc"
            class="pointer">{{ $t("btn.back_publish_page") }}</span></div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    backList() {
      this.$router.push({
        path: "/developer/create_list",
        query: {
          address: this.$store.state.developer.create.detail.contractAddress
        }
      });
    },
    handleBackFuc() {
      this.$router.back();
    },
    type(value) {
      if (value == 2) return this.$t("page.Startcontract");
      if (value == 3) return this.$t("page.Upgradecontract");
      if (value == 14) return this.$t("page.Deletecontract");
      return this.$t("page.Contractdetails");
    },
    globalContractStatus(status) {
      // -1、已删除 1、待初始化 2、正在运行 3、余额不足 4、合约已禁用 5、已弃用
      if (status == -1) return this.$t("page.Deleted");
      if (status == 1) return this.$t("page.PendingInitialization");
      if (status == 2) return this.$t("page.Started");
      if (status == 3) return this.$t("page.InsufficientBalance");
      if (status == 4) return this.$t("page.Disabled");
      if (status == 5) return this.$t("page.Deprecated");
    }
  }
};
</script>

<style lang="less">
.developer-create-detail {
  .contractInfo {
    display: inline-block;
    min-width: 525px;
    box-sizing: border-box;
    padding: 30px;
    background-color: #f8f8f8;
    line-height: 2;
    margin: 0 0 30px 0;
  }
  .detial-info-span {
    width: 380px;
    vertical-align: top;
    word-wrap: break-word;
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
