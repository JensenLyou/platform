<template>
  <div class="developer-create-update text-center">
    <div class="public-title clearfix relative">
      <div class="backbtn pointer"
           @click="handleBackFuc"><i class="el-icon-arrow-left"></i> <span class="ver-middle">{{$t("page.Return")}}</span>
      </div>
      <div class="ver-middle">{{$t("page.Upgradecontract")}} </div>
      <div class="public-border mg-t18"></div>

    </div>

    <div>
      <el-form :model="ruleForm"
               :rules="rules"
               ref="ruleForm"
               label-width="140px"
               class="ruleForm">
        <el-form-item :label="$t('developer.create.steps[0].name.label') + '：'">
          <el-input v-model.trim="ruleForm.name"
                    :maxlength="30"
                    disabled></el-input>
        </el-form-item>

        <el-form-item :label="$t('developer.create.steps[0].contractSymbol.label') + '：'">
          <el-input v-model.trim="ruleForm.contractSymbol"
                    :maxlength="30"
                    disabled=""></el-input>
        </el-form-item>

        <el-form-item :label="$t('developer.create.steps[0].version.label') +'：'"
                      prop="version">
          <el-input v-model.trim="ruleForm.version"
                    :placeholder="$t('developer.create.steps[0].version.placeholder')"
                    :maxlength="10"></el-input>
        </el-form-item>

        <el-form-item :label="$t('page.Initializecontractparameters') + '：'"
                      prop="args">
          <el-input type="textarea"
                    v-model.trim="ruleForm.args"
                    :placeholder="$t('page.Pleaseenterparameters')"
                    :maxlength="500"></el-input>
        </el-form-item>

        <el-form-item :label="$t('developer.create.steps[0].remark.label') + '：'">
          <el-input type="textarea"
                    v-model.trim="ruleForm.remark"
                    :maxlength="500"
                    disabled=""></el-input>
        </el-form-item>

        <el-form-item :label="$t('developer.create.steps[0].ccUrl.label') + '：'"
                      prop="ccUrl">
          <div class="text-left">
            <uploadFile @upload-url="uploadUrlFuc"
                        :tips="$t('developer.create.steps[0].ccUrl.rules')"
                        :mime_types="mime_types"
                        max_file_size="20mb"></uploadFile>
            <el-input v-model="ruleForm.ccUrl"
                      v-show="false"></el-input>
          </div>

          <pre id="console"></pre>
        </el-form-item>
        <el-form-item>
          <el-button type="primary"
                     @click="stepFour('ruleForm')"
                     class="mg-t50">{{ $t("btn.next_step") }}</el-button>
        </el-form-item>
      </el-form>

      <sign :titleName="$t('page.Upgradecontract')"
            :signVisible="visible"
            :params="SignParams"
            @sign-visible="handleSignVisible"
            @SignQRCode="handleGetSignQRCode"
            :callback="handleToDetail">
      </sign>

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      SignParams: null,
      ruleForm: {
        signType: "1", // 签名类型 - 发布合约
        name: "", // 合约名称
        contractSymbol: "", // 合约名称简写
        version: "", // 合约版本
        remark: "", // 合约简介
        args: "", // 初始化参数
        ccUrl: "" // 合约代码
      },
      rules: {
        version: [
          {
            required: true,
            validator: this.$validator.rule.required_version,
            trigger: "blur"
          }
        ],
        args: [
          {
            required: true,
            message: this.$t("page.Pleaseenterparameters"),
            trigger: "blur"
          }
        ],
        ccUrl: [
          {
            required: true,
            message: this.$t("developer.create.steps[0].ccUrl.error"),
            trigger: "change"
          }
        ]
      },
      visible: false,
      SignQRCodeStart: "", // 二维码
      SignQRCodeStartImg: "",
      mime_types: [{ title: "Zip files", extensions: "zip" }]
    };
  },
  created() {
    this.detailObj = this.$store.state.developer.create.detail;
    this.ruleForm.name = this.detailObj.name;
    this.ruleForm.contractSymbol = this.detailObj.contractSymbol;
    this.ruleForm.remark = this.detailObj.remark;
  },
  methods: {
    handleSignVisible(val) {
      this.visible = val;
    },
    // 获取二维码地址给后台
    handleGetSignQRCode(val) {
      this.SignQRCodeStart = val;
    },
    uploadUrlFuc(url) {
      this.ruleForm.ccUrl = url;
    },
    handleBackFuc() {
      this.$router.back();
    },
    stepFour(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          let params = {
            signType: 3, // 升级合约
            contractAddress: this.detailObj.contractAddress,
            version: this.ruleForm.version,
            args: this.ruleForm.args,
            ccUrl: this.ruleForm.ccUrl
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
          address: this.detailObj.contractAddress,
          version: this.ruleForm.version
        })
        .then(res => {
          if (res.data.status) {
            this.$store.commit("SET_DEVELOPER_CREATE_DETAIL", res.data.data);
            this.$router.push({
              path: "/developer/create_detail",
              query: { type: 3 }
            });
          }
        });
    }
  }
};
</script>

<style lang="less">
.developer-create-update {
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
