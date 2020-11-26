<template>
  <div class="create-starting text-center">
    <div class="public-title clearfix relative">
      <div class="backbtn pointer"
           @click="handleBackFuc"><i class="el-icon-arrow-left"></i> <span class="ver-middle">{{$t("page.Return")}}</span>
      </div>
      <div class="ver-middle">{{$t("page.Startcontract")}} </div>
      <div class="public-border mg-t18"></div>

    </div>
    <el-form :model="ruleForm04"
             :rules="rules04"
             ref="ruleForm04"
             label-width="120px"
             class="ruleForm">

      <el-form-item :label="$t('developer.create.steps[3].label')"
                    prop="args">
        <el-input type="textarea"
                  v-model.trim="ruleForm04.args"
                  :placeholder="$t('developer.create.steps[3].placeholder')"></el-input>
        <div class="text-left">
          <span class="text-blue pointer"
                @click="handleToApi">{{$t("developer.create.steps[3].link")}}?</span>
        </div>
      </el-form-item>

      <el-form-item>
        <el-button type="primary"
                   @click="stepFour('ruleForm04')"
                   class="mg-t50">{{ $t("btn.start_contract") }}</el-button>
      </el-form-item>
    </el-form>

    <sign :titleName="$t('page.Startcontract')"
          :signVisible="visible"
          :params="SignParams"
          @sign-visible="handleSignVisible"
          @SignQRCode="handleGetSignQRCode"
          :callback="handleToDetail">
    </sign>

  </div>
</template>

<script>
export default {
  data() {
    return {
      ruleForm04: {
        args: ""
      },
      rules04: {
        args: [
          {
            required: true,
            message: this.$t("developer.create.steps[3].placeholder"),
            trigger: "blur"
          }
        ]
      },
      visible: false,
      SignQRCodeStart: "",
      SignQRCodeStartImg: "",
      SignParams: null
    };
  },
  methods: {
    handleSignVisible(val) {
      this.visible = val;
    },
    // 获取二维码地址给后台
    handleGetSignQRCode(val) {
      this.SignQRCodeStart = val;
    },
    handleBackFuc() {
      this.$router.back();
    },
    stepFour(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          let params = {
            signType: 2,
            contractAddress: this.$route.query.contractAddress,
            args: this.ruleForm04.args
          };
          this.SignParams = params;
        } else {
          return false;
        }
      });
    },
    handleToDetail() {
      this.$api
        .queryContractInfo({
          address: this.$route.query.contractAddress,
          version: this.$route.query.version
        })
        .then(res => {
          this.$store.commit("SET_DEVELOPER_CREATE_DETAIL", res.data.data);
          this.$router.push({
            path: "/developer/create_detail",
            query: { type: 2 }
          });
        });
    },
    handleToApi() {
      let { href } = this.$router.resolve({
        path: "/developer/document_api",
        query: { id: 44, listId: 3 }
      });
      window.open(href, "_blank");
    }
  }
};
</script>

<style lang="less">
.create-starting {
  .ruleForm {
    display: inline-block;
    padding-top: 50px;
    width: 600px;
  }
  .el-icon-arrow-left {
    font-size: 24px;
    color: #1e1f20;
    vertical-align: middle;
  }
  .backbtn {
    position: absolute;
    left: 0;
    top: 0;
  }
}
</style>
