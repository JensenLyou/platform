<template>
  <div class="developer-create-content">
    <el-steps :active="active"
              process-status="finish"
              finish-status="success"
              align-center>
      <el-step v-for="(item, index) in $t('developer.create.steps')"
               :key="index"
               :title="item.title"></el-step>
    </el-steps>

    <!-- 步骤一  -->
    <div v-show="active == 0">
      <el-form :model="ruleForm"
               :rules="rules"
               ref="ruleForm"
               :label-width="labelWidth"
               class="ruleForm"
               :class="{ enruleForm: $store.state.currentLanguage == 'en'}">
        <el-form-item :label="$t('developer.create.steps[0].name.label') + '：'"
                      prop="name">
          <el-tooltip class="item"
                      effect="light"
                      placement="right">
            <div slot="content"
                 v-html="$t('developer.create.steps[0].name.rules')"></div>
            <el-input v-model.trim="ruleForm.name"
                      :placeholder="$t('developer.create.steps[0].name.placeholder')"
                      :maxlength="32"></el-input>
          </el-tooltip>

        </el-form-item>

        <el-form-item :label="$t('developer.create.steps[0].contractSymbol.label')+ '：'"
                      prop="contractSymbol">
          <el-tooltip class="item"
                      effect="light"
                      placement="right">
            <div slot="content"
                 v-html="$t('developer.create.steps[0].contractSymbol.rules')"></div>
            <el-input v-model.trim="ruleForm.contractSymbol"
                      :placeholder="$t('developer.create.steps[0].contractSymbol.placeholder')"
                      :maxlength="16"></el-input>
          </el-tooltip>

        </el-form-item>

        <el-form-item :label="$t('developer.create.steps[0].version.label')+ '：'"
                      prop="version">
          <el-tooltip class="item"
                      effect="light"
                      placement="right">
            <div slot="content"
                 v-html="$t('developer.create.steps[0].version.rules')"></div>
            <el-input v-model.trim="ruleForm.version"
                      :placeholder="$t('developer.create.steps[0].version.placeholder')"></el-input>
          </el-tooltip>

        </el-form-item>

        <el-form-item :label="$t('developer.create.steps[0].remark.label')+ '：'"
                      prop="remark"
                      class="relative">
          <el-input type="textarea"
                    v-model.trim="ruleForm.remark"
                    :autosize="{ minRows: 4 }"
                    :placeholder="$t('developer.create.steps[0].remark.placeholder')"
                    :maxlength="200"></el-input>
          <span class="stringNum">{{ruleForm.remark.length}}/200</span>
        </el-form-item>

        <el-form-item :label="$t('developer.create.steps[0].ccUrl.label')+ '：'"
                      prop="ccUrl">
          <div class="text-left">
            <uploadFile @upload-url="uploadUrlFuc"
                        @upload-fileName="uploadFileName"
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
                     :loading="loadingBtn"
                     @click="handleStepOne('ruleForm')"
                     class="mg-t50">{{$t('btn.next_step')}}</el-button>
        </el-form-item>
      </el-form>
    </div>

    <!-- 步骤二  -->
    <div v-show="active == 1"
         class="text-center">
      <div class="text-center">
        <div class="steps-tips mg-b50 text-left">
          <template v-if="$store.state.currentLanguage == 'zh'">
            <div>
              <span class="public-black-circle"></span>
              <span class="ver-middle">
                请使用MyBitt钱包进行签名，签名的钱包地址必须要有不小于 {{contract_cash}} UC。
                <span class='text-blue pointer'
                      @click="$utils.handleToWallet($router)">立即下载MyBitt钱包。</span>
              </span>
            </div>
          </template>
          <template v-else>
            <div>
              <span class="public-black-circle"></span>
              <span class="ver-middle">
                Please use MyBitt wallet to sign the contract and confirm,Signed wallet addresses must be no less than {{contract_cash}}UC.
                <span class='text-blue pointer'
                      @click="$utils.handleToWallet($router)">Download MyBitt wallet immediately.</span>
              </span>
            </div>
          </template>

          <div><span class="public-black-circle"></span><span class="ver-middle"
                  v-html="$t('developer.create.steps[1].tips.two')"></span> </div>
        </div>
      </div>

      <div class="public-QR-box mg-b60">
        <img :src="SignQRCodeImg" alt="UDO_通用型数字化开放平台_区块链体验仿真_搭链体验_创客区块链">
      </div>
      <div class="mg-b20">
        <el-button type="primary"
                   :loading="loadingBtn"
                   @click="checkSign">{{$t('btn.sign')}}</el-button>
      </div>
      <span class="pointer"
            @click="active = 0">{{ $t("btn.back_up") }}</span>
    </div>

    <!-- 步骤三  -->
    <div v-show="active == 2"
         class="step-three">
      <div class="text-center">
        <div class="steps-tips mg-b50 text-left">
          <div v-for="(item, index) in $t('developer.create.steps[2].tips')"
               :key="index"><span class="public-black-circle"></span><span class="ver-middle">{{item}}</span></div>
        </div>
      </div>
      
      <div class="step-three-info text-left mg-b60">
        <div class="clearfix">
          <span class="detail-text">{{$t('developer.create.steps[2].name')}}</span> <span class="detial-info-span">{{ $store.state.developer.create.detail.name }}</span> 
        </div>
        <div class="clearfix">
          <span class="detail-text">{{$t('developer.create.steps[2].contractSymbol')}}</span> <span class="detial-info-span">{{ $store.state.developer.create.detail.contractSymbol}}</span> 
          </div>
        <div class="clearfix">
          <span class="detail-text">{{$t('developer.create.steps[2].address')}}</span> <span class="detial-info-span">{{ $store.state.developer.create.detail.contractAddress}}</span> 
          </div>
        <div class="clearfix">
          <span class="detail-text">{{$t('developer.create.steps[2].version')}}</span> <span class="detial-info-span">{{ $store.state.developer.create.detail.version}}</span>
           </div>
        <div class="clearfix">
          <span class="detail-text">{{$t('developer.create.steps[2].remark')}}</span> <span class="detial-info-span">{{ $store.state.developer.create.detail.remark}}</span> 
          </div>
        <div class="clearfix">
          <span class="detail-text">{{$t('developer.create.steps[2].codeName')}}</span> <span class="detial-info-span">{{ codeName }}</span> 
        </div>
      </div>
      <div class="mg-b20">
        <el-button type="primary"
                   :loading="loadingBtn"
                   @click="active = 3">{{$t('btn.start_contract')}}</el-button>
      </div>
      <span class="pointer"
            @click="handleDetail">{{$t('developer.create.steps[2].look_contract_detail')}}</span>
    </div>

    <!-- 步骤四 -->
    <div v-show="active == 3">
      <el-form :model="ruleForm04"
               :rules="rules04"
               ref="ruleForm04"
               label-width="180px"
               class="ruleForm">

        <el-form-item :label="$t('developer.create.steps[3].label')"
                      prop="args">
          <el-input type="textarea"
                    v-model.trim="ruleForm04.args"
                    :placeholder="$t('developer.create.steps[3].placeholder')"></el-input>
          <div class="text-left">
            <div class="text-blue pointer"
                 @click="handleToApi">{{$t('developer.create.steps[3].link')}}</div>
          </div>
        </el-form-item>

        <el-form-item>
          <el-button type="primary"
                     :loading="loadingBtn"
                     @click="stepFour('ruleForm04')"
                     class="mg-t50">{{$t('btn.start_contract')}}</el-button>
        </el-form-item>
      </el-form>

      <sign :titleName="$t('page.StartContract')"
            :signVisible="visible"
            :params="SignParams"
            @sign-visible="handleSignVisible"
            @SignQRCode="handleGetSignQRCode"
            :callback="handleToDetail">
        <div class="public-QR-tips"
             slot="tips"> {{ $t('page.signTips') }}</div>
      </sign>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      labelWidth: "120px",
      contract_cash: "",
      timer: "",
      active: 0,
      percentage: 0,
      loadingBtn: false,
      ruleForm: {
        signType: "1", // 签名类型 - 发布合约
        name: "", // 合约名称
        contractSymbol: "", // 合约名称简写
        version: "", // 合约版本
        remark: "", // 合约简介
        ccUrl: "" // 合约代码
      },
      codeName: "",
      mime_types: [{ title: "Zip files", extensions: "zip" }],
      rules: {
        name: [
          {
            required: true,
            message: this.$t("developer.create.steps[0].name.placeholder"),
            trigger: "blur"
          },
          {
            required: true,
            validator: this.$validator.rule.required_Name,
            trigger: "blur"
          }
        ],
        contractSymbol: [
          {
            required: true,
            message: this.$t(
              "developer.create.steps[0].contractSymbol.placeholder"
            ),
            trigger: "blur"
          },
          {
            required: true,
            validator: this.$validator.rule.required_Symbol,
            trigger: "blur"
          }
        ],
        version: [
          {
            required: true,
            validator: this.$validator.rule.required_version,
            trigger: "blur"
          }
        ],
        remark: [
          {
            required: true,
            message: this.$t("developer.create.steps[0].remark.placeholder"),
            trigger: "blur"
          },
          { validator: this.$validator.rule.require_remark, trigger: "blur" }
        ],
        ccUrl: [
          {
            required: true,
            message: this.$t("developer.create.steps[0].ccUrl.error"),
            trigger: "change"
          }
        ]
      },
      SignQRCode: "", // stwpone
      SignQRCodeImg: "",
      contractAddress: "", // 合同地址
      SignQRCodeStart: "", // 启动签名
      SignQRCodeStartImg: "", // 启动签名二维码
      SignParams: null,
      ruleForm04: {
        signType: "2",
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
      visible: false
    };
  },
  created() {
    if (this.$store.state.currentLanguage == "en") {
      this.labelWidth = "230px";
    } else {
      this.labelWidth = "120px";
    }
  },
  destroyed() {
    this.handleColse();
  },
  watch: {
    active(val, oldval) {
      if (val != 1) {
        this.handleColse();
      } else {
        this.handleQueryPublishCCRequireNum();
      }
    }
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
    uploadFileName(name) {
      this.codeName = name;
    },
    handleColse() {
      this.timer && clearInterval(this.timer);
    },
    handleStepOne(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.loadingBtn = true;
          this.$api
            .addSignData(this.ruleForm)
            .then(res => {
              if (res.data.status) {
                if (res.data && res.data.data) {
                  this.SignQRCode = res.data.data;
                  this.$QRCode
                    .toDataURL(res.data.data)
                    .then(url => {
                      this.SignQRCodeImg = url;
                      this.active = 1;
                      this.autoCheckSign();
                    })
                    .catch(err => {});
                }
              }
            })
            .finally(() => {
              this.loadingBtn = false;
            });
        } else {
          return false;
        }
      });
    },
    autoCheckSign() {
      this.timer && clearInterval(this.timer);
      this.timer = setInterval(() => {
        this.$api.checkSign(this.SignQRCode).then(res => {
          if (res.data.status) {
            clearInterval(this.timer);
            this.contractAddress = res.data.contractAddress;
            this.queryContractInfoFuc();
          }
        });
      }, 5000);
    },
    checkSign() {
      this.handleColse();
      this.loadingBtn = true;
      this.$api
        .checkSign(this.SignQRCode)
        .then(res => {
          if (res.data.status) {
            this.contractAddress = res.data.contractAddress;
            this.queryContractInfoFuc();
          }
        })
        .catch(err => {
          err.data.msg && this.$message.error(err.data.msg);
          this.autoCheckSign();
        })
        .finally(() => {
          this.loadingBtn = false;
        });
    },
    handleToApi() {
      let params = {};
      if (this.$i18n.locale == "zh") {
        params = {
          id: 151,
          listId: 3
        };
      } else {
        params = {
          id: 302,
          listId: 294
        };
      }
      let { href } = this.$router.resolve({
        path: "/developer/document_api",
        query: params
      });
      window.open(href, "_blank");
    },
    stepFour(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          let params = {
            signType: 2,
            contractAddress: this.contractAddress,
            args: this.ruleForm04.args
          };
          this.SignParams = params;
        } else {
          return false;
        }
      });
    },
    //  跳转到启动成功页面
    handleToDetail() {
      this.$api
        .queryContractInfo({
          address: this.contractAddress,
          version: this.ruleForm.version
        })
        .then(res => {
          this.$store.commit("SET_DEVELOPER_CREATE_DETAIL", res.data.data);
          this.$router.push({
            path: "/developer/create_detail",
            query: { type: 2 }
          });
        });
    },
    // 获取合约详情
    queryContractInfoFuc() {
      this.$api
        .queryContractInfo({
          address: this.contractAddress,
          version: this.ruleForm.version
        })
        .then(res => {
          this.$store.commit("SET_DEVELOPER_CREATE_DETAIL", res.data.data);
          this.active = 2;
        });
    },
    // 查看合约详情按钮
    handleDetail() {
      this.$router.push({ path: "/developer/create_detail" });
    },
    handleQueryPublishCCRequireNum() {
      this.$api.queryPublishCCRequireNum().then(res => {
        this.contract_cash = res.data.data;
      });
    }
  }
};
</script>

<style lang="less">
.developer-create-content {
  text-align: center;
  padding: 0 30px;
  .ruleForm {
    width: 600px;
    margin: 0 auto;
  }
  .enruleForm {
    width: 700px;
  }
  .el-steps {
    margin-bottom: 75px;
  }
  .step-three {
    display: inline-block;
    width: 860px;
    .steps-tips {
      display: block;
    }
  }
  .step-three-info {
    padding: 10px 30px;
    background-color: #f7f7f7;
    line-height: 1.8;
    border-radius: 10px;
    > div {
      padding: 5px 0;
    }
  }
  // .visible {
  //   .steps-tips {
  //     padding: 10px;
  //     line-height: 1;
  //   }
  //   .public-QR-box {
  //     width: 200px;
  //     height: 200px;
  //     margin-top: 16px;
  //   }
  // }
  .el-form-item {
    position: relative;
  }
  .input-tips {
    position: absolute;
    left: 600px;
    width: 280px;
  }
  .stringNum {
    position: absolute;
    right: 15px;
    bottom: 0;
  }
}
</style>
