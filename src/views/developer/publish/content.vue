<template>
  <div class="developer-publish-content">
    <el-steps :active="active"
              align-center
              process-status="finish"
              finish-status="success">
      <el-step v-for="(item, index) in $t('developer.publish.steps')"
               :key="index"
               :title="item.title"></el-step>
    </el-steps>

    <div v-show="active == 0">
      <el-form :model="ruleForm"
               :rules="rules"
               ref="ruleForm"
               label-width="235px"
               class="ruleForm">
        <el-form-item :label="$t('developer.publish.steps[0].name.label')"
                      prop="name">
          <el-tooltip class="item"
                      effect="light"
                      placement="right">
            <div slot="content"
                 v-html="$t('developer.publish.steps[0].name.rules')"></div>
            <el-input v-model.trim="ruleForm.name"
                      :placeholder="$t('developer.publish.steps[0].name.placeholder')"
                      :maxlength="32"></el-input>

          </el-tooltip>

        </el-form-item>

        <el-form-item :label="$t('developer.publish.steps[0].tokenSymbol.label')"
                      prop="tokenSymbol">
          <el-tooltip class="item"
                      effect="light"
                      placement="right">
            <div slot="content"
                 v-html="$t('developer.publish.steps[0].tokenSymbol.rules')"></div>
            <el-input v-model.trim="ruleForm.tokenSymbol"
                      :placeholder="$t('developer.publish.steps[0].tokenSymbol.placeholder')"
                      :maxlength="16"></el-input>
          </el-tooltip>

        </el-form-item>

        <el-form-item :label="$t('developer.publish.steps[0].decimalUnits.label')"
                      prop="decimalUnits">
          <el-input v-model.trim.number="ruleForm.decimalUnits"
                    :placeholder="$t('developer.publish.steps[0].decimalUnits.placeholder')"
                    :maxlength="2"></el-input>
        </el-form-item>

        <el-form-item :label="$t('developer.publish.steps[0].totalNumber.label')"
                      prop="totalNumber">
          <el-input v-model.trim="ruleForm.totalNumber"
                    :placeholder="$t('developer.publish.steps[0].totalNumber.placeholder')"
                    :maxlength="16"></el-input>
        </el-form-item>
        <el-form-item :label="$t('developer.publish.steps[0].issuePrice.label')"
                      prop="issuePrice"
                      class="relative">
          <el-input v-model.trim="ruleForm.issuePrice"
                    :placeholder="$t('developer.publish.steps[0].issuePrice.placeholder')"></el-input>
          <span class="USD">USD</span>
        </el-form-item>

        <el-form-item :label="$t('developer.publish.steps[0].iconUrl.label')"
                      prop="iconUrl">
          <div class="text-left">
            <uploadFile @upload-url="uploadUrlFuc"
                        :type="1"
                        :mime_types="mime_types"
                        :imgUrl="ruleForm.iconUrl"
                        max_file_size="500kb"></uploadFile>
            <el-input v-model="ruleForm.iconUrl"
                      v-show="false"></el-input>
          </div>

          <pre id="console"></pre>
        </el-form-item>
        <el-form-item>
          <el-button type="primary"
                     @click="handleStepOne('ruleForm')"
                     :loading="loadingBtn"
                     class="mg-t50">{{ $t("btn.next_step") }}</el-button>
        </el-form-item>
      </el-form>

    </div>
    <div v-show="active == 1"
         class="text-center">
      <div class="text-center">
        <div class="steps-tips mg-b50 text-left">
          <!-- 国际化 start-->
          <template v-if="$store.state.currentLanguage == 'zh'">
            <div><span class="public-black-circle"></span><span class="ver-middle">请使用MyBitt钱包进行签名，签名的钱包地址必须要有不小于{{token_cash}} UC。<span class="text-blue pointer"
                      @click="$utils.handleToWallet($router)">立即下载MyBitt钱包。</span></span> </div>
            <div><span class="public-black-circle"></span><span class="ver-middle">签名确认成功之后，Token将会默认转到签名钱包地址，请慎重选择签名钱包地址。</span> </div>
          </template>
          <template v-else>
            <div>
              <span class="public-black-circle"></span>
              <span class="ver-middle">
                Please use MyBitt wallet to sign the contract and confirm,Signed wallet addresses must be no less than {{token_cash}}UC.<span class="text-blue pointer"
                      @click="$utils.handleToWallet($router)">Download MyBitt wallet immediately.</span>
              </span>
            </div>
            <div>
              <span class="public-black-circle"></span>
              <span class="ver-middle">After the signature confirmation is successful, Token will transfer to the SIGNATURE WALLET address by default. Please choose the SIGNATURE WALLET address carefully.</span>
            </div>
          </template>
          <!-- 国际化 end-->
        </div>
      </div>

      <div class="public-QR-box mg-b60">
        <img :src="SignQRCodeImg"
             alt="UDO_通用型数字化开放平台_区块链体验仿真_搭链体验_创客区块链">
      </div>
      <div class="mg-b20">
        <el-button type="primary"
                   :loading="loadingBtn"
                   @click="checkSign">{{ $t("btn.sign") }}</el-button>
      </div>
      <span class="pointer"
            @click="active = 0">{{ $t("btn.back_up") }}</span>
    </div>
    <div v-show="active == 2"
         class="step-three">
      <div class="text-center">
        <div class="steps-tips mg-b50 text-left">
          <!-- 国际化 start-->
          <template v-if="$store.state.currentLanguage == 'zh'">
            <div>
              <span class="public-black-circle"></span>
              <span class="ver-middle">Token已经发布成功，您可以前往<span class="text-blue pointer"
                      @click="$utils.ToBrowserFuc()">UDO区块链览器</span>
                <span>进行查询相关的Token信息。</span>
              </span>
            </div>
            <div>
              <span class="public-black-circle"></span>
              <span class="ver-middle">多重签名：即多个用户同时对一个数字资产进行签名，保障数字资产的安全性，也可以在多重签名设置页面进行设置。</span>
            </div>
          </template>
          <template v-else>
            <div>
              <span class="public-black-circle"></span>
              <span class="ver-middle">Token has been released successfully. You can go to the UDO Block Link <span class="text-blue pointer"
                      @click="$utils.ToBrowserFuc()">UDO Block Link</span>
                <span> to query the relevant Token information.</span>
              </span>
            </div>
            <div>
              <span class="public-black-circle"></span>
              <span class="ver-middle">Multi-signature: that is, multiple users sign a digital asset at the same time to ensure the security of the digital asset, but also can set up in the multi-signature settings page.</span>
            </div>
          </template>
          <!-- 国际化 end-->
        </div>
      </div>
      <div class="step-three-info text-left mg-b60">
        <div class="clearfix"><span class="detail-text">{{ $t("developer.publish.steps[2].TokenName") }}</span> <span class="detial-info-span">{{ $store.state.developer.publish.detail.name }}</span> </div>
        <div class="clearfix"><span class="detail-text">{{ $t("developer.publish.steps[2].TokenEnglishAbbreviation") }}</span> <span class="detial-info-span">{{ $store.state.developer.publish.detail.tokenSymbol}}</span> </div>
        <div class="clearfix"><span class="detail-text">{{ $t("developer.publish.steps[2].Maximumdecimalpointnumber") }}</span> <span class="detial-info-span">{{ $store.state.developer.publish.detail.decimalUnits}}</span> </div>
        <div class="clearfix"><span class="detail-text">{{ $t("developer.publish.steps[2].Totalcirculation") }}</span> <span class="detial-info-span">{{ $validator.formatThusand($store.state.developer.publish.detail.totalNumber)}}</span> </div>
        <div class="clearfix"><span class="detail-text">{{ $t("developer.publish.steps[2].Issueprice") }}</span> <span class="detial-info-span">{{ $store.state.developer.publish.detail.issuePrice}} </span> </div>
        <div class="clearfix"><span class="detail-text">{{ $t("developer.publish.steps[2].TokenIdentification") }}</span> <span class="detial-info-span">{{ $store.state.developer.publish.detail.tokenID}}</span> </div>
        <div class="clearfix"><span class="detail-text">{{ $t("developer.publish.steps[2].TokenIcon") }}</span> <span class="detial-info-span">{{ $store.state.developer.publish.detail.iconUrl}}</span></div>
      </div>
      <div class="mg-b20">
        <el-button type="primary"
                   @click="handleSettingMultipleSign">{{ $t("btn.setting_sign") }}</el-button>
      </div>
      <span class="pointer"
            @click="$router.push({ path: '/developer/publish_token'})">{{ $t("btn.back_publish_page") }}</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      timer: "",
      token_cash: "",
      active: 0,
      name: name,
      percentage: 0,
      loadingBtn: false,
      loading: "",
      ruleForm: {
        signType: 4, // 签名类型 - 发行token
        name: "", // token名称
        tokenSymbol: "", // token名称简写
        decimalUnits: "", // 最大小数点位数
        totalNumber: "", // 发行总量
        issuePrice: "", // 发行价格
        iconUrl: "" //  token图标
      },
      rules: {
        name: [
          {
            required: true,
            message: this.$t("developer.publish.steps[0].name.placeholder"),
            trigger: "blur"
          },
          {
            required: true,
            validator: this.$validator.rule.required_Name,
            trigger: "blur"
          }
        ],
        tokenSymbol: [
          {
            required: true,
            message: this.$t(
              "developer.publish.steps[0].tokenSymbol.placeholder"
            ),
            trigger: "blur"
          },
          {
            required: true,
            validator: this.$validator.rule.required_Symbol,
            trigger: "blur"
          }
        ],
        decimalUnits: [
          {
            required: true,
            message: this.$t(
              "developer.publish.steps[0].decimalUnits.placeholder"
            ),
            trigger: "blur"
          },
          {
            type: "number",
            message: this.$t(
              "developer.publish.steps[0].totalNumber.placeholder"
            ),
            trigger: "blur"
          },
          {
            required: true,
            validator: this.$validator.rule.required_decimalUnits,
            trigger: "blur"
          }
        ],
        totalNumber: [
          {
            required: true,
            validator: this.$validator.rule.required_totalNumber,
            trigger: "blur"
          }
        ],
        issuePrice: [
          {
            required: true,
            validator: this.$validator.rule.required_issuePrice,
            trigger: "blur"
          }
        ],
        iconUrl: [
          {
            required: true,
            message: this.$t("developer.publish.steps[0].iconUrl.error"),
            trigger: "change"
          }
        ]
      },
      mime_types: [{ title: "Image files", extensions: "png" }],
      SignQRCode: "", // stwpone
      SignQRCodeImg: "",
      tokenId: "" // 合同地址
    };
  },
  created() {
    this.queryPublishTokenRequireNum();
  },
  destroyed() {
    this.handleColse();
  },
  watch: {
    active(val) {
      if (val != 1) {
        this.handleColse();
      }
    }
  },
  methods: {
    uploadUrlFuc(url) {
      this.ruleForm.iconUrl = url;
    },
    handleColse() {
      this.timer && clearInterval(this.timer);
    },
    handleStepOne(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          let params = Object.assign({}, this.ruleForm);

          params.decimalUnits = Number(params.decimalUnits);
          this.loading = true;
          this.$api
            .addSignData(params)
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
              this.loading = false;
            });
        } else {
          return false;
        }
      });
    },
    autoCheckSign() {
      this.handleColse();
      this.timer = setInterval(() => {
        this.$api.checkSign(this.SignQRCode).then(res => {
          if (res.data.status) {
            this.handleColse();
            this.tokenId = res.data.tokenId;
            this.$api.queryTokenInfo(this.tokenId).then(res => {
              if (res.data.status) {
                // 合约详情
                this.$store.commit(
                  "SET_DEVELOPER_PUBLISH_DETAIL",
                  res.data.data
                );
                this.active = 2;
              }
            });
          }
        });
      }, 5000);
    },
    checkSign() {
      this.handleColse();
      this.loading = true;
      this.$api
        .checkSign(this.SignQRCode)
        .then(res => {
          if (res.data.status) {
            this.tokenId = res.data.tokenId;
            this.$api.queryTokenInfo(this.tokenId).then(res => {
              if (res.data.status) {
                this.$store.commit(
                  "SET_DEVELOPER_PUBLISH_DETAIL",
                  res.data.data
                );
                this.active = 2;
              }
            });
          } else {
            this.$message.error(res.data.msg);
            this.autoCheckSign();
          }
        })
        .catch(err => {
          err.data.msg && this.$message.error(err.data.msg);
        })
        .finally(() => {
          this.loading = false;
        });
    },
    toSuccess() {
      this.active = 4;
    },
    handleSettingMultipleSign() {
      this.$router.push({
        path: "/developer/multipleSign_setting",
        query: { tokenId: this.tokenId }
      });
    },
    handleDetail() {
      this.$router.push({
        path: "/developer/multipleSign_detail",
        query: { tokenId: this.tokenId }
      });
    },
    // 查询token手续费
    queryPublishTokenRequireNum() {
      this.$api.queryPublishTokenRequireNum().then(res => {
        this.token_cash = res.data.data;
      });
    }
  }
};
</script>

<style lang="less">
.developer-publish-content {
  text-align: center;
  padding: 0 30px;
  .ruleForm {
    width: 850px;
    margin: 0 auto;
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
  .visible {
    .steps-tips {
      padding: 10px;
      line-height: 1;
    }
    .public-QR-box {
      width: 200px;
      height: 200px;
      margin-top: 16px;
      background-color: #fff;
    }
  }
  .performer {
    position: relative;
    .el-button.addBtn {
      position: absolute;
      top: 0;
      right: -135px;
    }
    .el-button.deteleBtn {
      position: absolute;
      top: 0;
      right: -92px;
    }
  }

  .token-info {
    display: inline-block;
    width: 525px;
    box-sizing: border-box;
    padding: 30px;
    background-color: #f8f8f8;
    line-height: 2;
    margin: 30px 0 30px 0;
    text-align: left;
    .detial-info-span {
      width: 350px;
    }
  }

  .USD {
    position: absolute;
    right: 20px;
    top: 0;
  }
}
</style>
