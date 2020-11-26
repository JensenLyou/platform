<template>
  <div class="developer-mainParams text-center">
    <div class="main-title">{{ $t("page.MainNetworkParameters") }}</div>
    <div class="text-center">
      <div class="steps-tips mg-b50 text-left tips">
        <div>{{ $t("developer.mainParams.tips") }} </div>
      </div>
    </div>

    <div>
      <div class="square"
           v-for="(item, index) in squareList"
           :key="index"
           :style="{'background-color': item.bgColor}"
           @click="handleType(index)">
        <img :src="item.imgUrl"
             alt="UDO_通用型数字化开放平台_区块链体验仿真_搭链体验_创客区块链">
        <div class="square-title fs20">{{item.title}}</div>

        <template v-if="$store.state.currentLanguage == 'zh'">
          <div v-if="index == 0">
            <div class="mg-b14">发布智能合约需抵押手续费</div>
            <div>{{ contractNumber + ' UC'}}</div>
          </div>
          <div v-if="index == 1">
            <div class="mg-b14">发行token需抵押的手续费</div>
            <div> {{ tokenNumber + ' UC'}}</div>
          </div>
          <div v-if="index == 2">
            <div>{{`立即返还总数的 ${initReleaseRatio}%`}}</div>
            <div>{{`每期返还总数的 ${releaseRatio}%`}}</div>
            <div>{{`每期时长为 ${interval / 60/ 60} H`}}</div>
          </div>
        </template>
        <template v-else>
          <div v-if="index == 0">
            <div class="mg-b14">{{ `Issuing smart contracts requires mortgage ${contractNumber}UC processing fee`}}</div>
          </div>
          <div v-if="index == 1">
            <div class="mg-b14">{{ `Issuing token requires mortgage ${tokenNumber}UC processing fee`}}</div>
          </div>
          <div v-if="index == 2">
            <div>{{`Return ${initReleaseRatio}% of the total fee immediately`}}</div>
            <div>{{`Return ${releaseRatio}% of the total fee in each period `}}</div>
            <div>{{`The duration of each period is ${interval / 60/ 60} H`}}</div>
          </div>
        </template>

      </div>
    </div>

    <el-dialog :title="titleName"
               :visible.sync="DialogVisible"
               center>
      <el-form :model="numberValidateForm"
               ref="numberValidateForm"
               class="demo-ruleForm text-center">
        <template v-if="type == 0">
          <el-form-item prop="contractNumber"
                        :rules="rules.contractNumber">
            <el-input type="age"
                      v-model.number="numberValidateForm.contractNumber"
                      autocomplete="off"
                      :placeholder="$t('placeholder.contractCash')"></el-input>
          </el-form-item>
        </template>

        <template v-if="type == 1">
          <el-form-item prop="tokenNumber"
                        :rules="rules.tokenNumber"
                        v-if="type == 1">
            <el-input type="age"
                      v-model.number="numberValidateForm.tokenNumber"
                      autocomplete="off"
                      :placeholder="$t('placeholder.tokenCash')"></el-input>
          </el-form-item>
        </template>

        <template v-if="type == 2">
          <el-form-item prop="initReleaseRatio"
                        :rules="rules.initReleaseRatio">

            <el-input type="age"
                      v-model.number="numberValidateForm.initReleaseRatio"
                      autocomplete="off"
                      :placeholder="$t('placeholder.immediatelyPercentage')"
                      :maxlength="3"></el-input>
            <span class="unit">%</span>
          </el-form-item>
          <el-form-item prop="interval"
                        :rules="rules.interval">

            <el-input type="age"
                      v-model.number="numberValidateForm.interval"
                      autocomplete="off"
                      :placeholder="$t('placeholder.periodDuration')"
                      :maxlength="20"></el-input>
            <span class="unit">h</span>
          </el-form-item>
          <el-form-item prop="releaseRatio"
                        :rules="rules.releaseRatio">

            <el-input type="age"
                      v-model.number="numberValidateForm.releaseRatio"
                      autocomplete="off"
                      :placeholder="$t('placeholder.periodPercentage')"
                      :maxlength="3"></el-input><span class="unit">%</span>
          </el-form-item>
        </template>

      </el-form>
      <span slot="footer"
            class="dialog-footer">
        <el-button type="primary"
                   @click="stepNextFuc">{{ $t("btn.next_step") }}</el-button>
      </span>
    </el-dialog>

    <sign :titleName="titleName"
          :signVisible="visible"
          :params="SignParams"
          @sign-visible="handleSignVisible"
          @SignQRCode="handleGetSignQRCode"
          :callback="toSuccess">
    </sign>

  </div>
</template>

<script>
import params_01 from "assets/images/icon/params_01.png";
import params_02 from "assets/images/icon/params_02.png";
import params_03 from "assets/images/icon/params_03.png";
export default {
  data() {
    return {
      type: 0,
      titleName: this.$t("developer.mainParams.updateContractCash"),
      DialogVisible: false,
      visible: false,
      contractNumber: "",
      tokenNumber: "",
      initReleaseRatio: "",
      interval: "",
      releaseRatio: "",
      numberValidateForm: {
        contractNumber: "",
        tokenNumber: "",
        initReleaseRatio: "",
        interval: "",
        releaseRatio: ""
      },
      SignQRCode: "",
      SignQRCodeImg: "",
      rules: {
        contractNumber: [
          { required: true, message: this.$t("placeholder.contractCash") },
          { type: "number", message: this.$t("placeholder.mustNumeric") },
          { validator: this.$validator.rule.positive_number }
        ],
        tokenNumber: [
          { required: true, message: this.$t("placeholder.tokenCash") },
          { type: "number", message: this.$t("placeholder.mustNumeric") },
          { validator: this.$validator.rule.positive_number }
        ],
        initReleaseRatio: [
          {
            required: true,
            message: this.$t("placeholder.immediatelyPercentage")
          },
          { type: "number", message: this.$t("placeholder.mustNumeric") },
          {
            validator: this.$validator.rule.required_percentage,
            trigger: "blur"
          }
        ],
        interval: [
          { required: true, message: this.$t("placeholder.periodDuration") },
          { type: "number", message: this.$t("placeholder.mustNumeric") }
        ],
        releaseRatio: [
          { required: true, message: this.$t("placeholder.periodPercentage") },
          { type: "number", message: this.$t("placeholder.mustNumeric") },
          {
            validator: this.$validator.rule.required_percentage,
            trigger: "blur"
          }
        ]
      },
      squareList: [
        {
          imgUrl: params_01,
          title: this.$t("developer.mainParams.SmartContract"),
          des: this.$t("developer.mainParams.ContractCash"),
          bgColor: "#1C87FF"
        },
        {
          imgUrl: params_02,
          title: "Token",
          des: this.$t("developer.mainParams.tokenCash"),
          bgColor: "#FFA21C"
        },
        {
          imgUrl: params_03,
          title: this.$t("developer.mainParams.FeeReturn"),
          bgColor: "#6C1CFF"
        }
      ],
      SignParams: null
    };
  },
  created() {
    this.queryPublishCCRequireNum();
    this.queryPublishTokenRequireNum();
    this.queryReturnGasConfig();
  },
  methods: {
    handleSignVisible(val) {
      this.visible = val;
    },
    // 获取二维码地址给后台
    handleGetSignQRCode(val) {
      this.SignQRCode = val;
    },
    handleType(index) {
      this.type = index;
      if (index == 0) {
        this.titleName = this.$t("developer.mainParams.updateContractCash");
        this.queryPublishCCRequireNum();
      } else if (index == 1) {
        this.titleName = this.$t("developer.mainParams.updateTokenCash");
        this.queryPublishTokenRequireNum();
      } else if (index == 2) {
        this.titleName = this.$t("developer.mainParams.amendRulesTitle");
        this.queryReturnGasConfig();
      }
      this.DialogVisible = true;
    },
    // 设置智能合约
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    // 生成签名二维码
    stepNextFuc() {
      this.$refs.numberValidateForm.validate(valid => {
        if (valid) {
          let params = "";
          if (this.type == 0) {
            params = {
              signType: 12,
              fcnName: "mchain_publishCCRequireNum",
              number: this.numberValidateForm.contractNumber
            };
          } else if (this.type == 1) {
            params = {
              signType: 11,
              fcnName: "mchain_publishTokenRequireNum",
              number: this.numberValidateForm.tokenNumber
            };
          } else if (this.type == 2) {
            params = {
              signType: 13,
              fcnName: "mchain_returnGasConfig",
              initReleaseRatio: this.numberValidateForm.initReleaseRatio + "",
              interval: this.numberValidateForm.interval * 60 * 60 + "",
              releaseRatio: this.numberValidateForm.releaseRatio + ""
            };
          }

          this.SignParams = params;
        } else {
          return false;
        }
      });
    },
    // 签名成功跳转
    toSuccess(msg) {
      this.$router.push({
        path: "/developer/mainParams_success",
        query: {
          type: this.type,
          contractNumber: this.numberValidateForm.contractNumber,
          tokenNumber: this.numberValidateForm.tokenNumber,
          initReleaseRatio: this.numberValidateForm.initReleaseRatio,
          interval: this.numberValidateForm.interval,
          releaseRatio: this.numberValidateForm.releaseRatio,
          msg: msg
        }
      });
    },
    // 查询智能合约手续费
    queryPublishCCRequireNum() {
      this.$api.queryPublishCCRequireNum().then(res => {
        this.numberValidateForm.contractNumber = Number(res.data.data) || "";
        this.contractNumber = Number(res.data.data) || "";
      });
    },
    // 查询token手续费
    queryPublishTokenRequireNum() {
      this.$api.queryPublishTokenRequireNum().then(res => {
        this.numberValidateForm.tokenNumber = Number(res.data.data) || "";
        this.tokenNumber = Number(res.data.data) || "";
      });
    },
    // 查询手续费返还
    queryReturnGasConfig() {
      this.$api.queryReturnGasConfig().then(res => {
        this.numberValidateForm.initReleaseRatio = Number(
          res.data.data.initReleaseRatio
        );
        this.numberValidateForm.interval =
          Number(res.data.data.interval) / 60 / 60;
        this.numberValidateForm.releaseRatio = Number(
          res.data.data.releaseRatio
        );

        this.initReleaseRatio = Number(res.data.data.initReleaseRatio);
        this.interval = Number(res.data.data.interval);
        this.releaseRatio = Number(res.data.data.releaseRatio);
      });
    }
  }
};
</script>

<style lang="less">
.developer-mainParams {
  .main-title {
    font-size: 24px;
    margin-bottom: 60px;
  }
  .square {
    box-sizing: border-box;
    display: inline-block;
    width: 310px;
    height: 325px;
    padding: 45px 10px;
    vertical-align: top;
    color: #fff;
    margin: 0 50px 50px 50px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    img {
      display: inline-block;
      width: 60px;
      height: 60px;
      border-radius: 10px;
    }
    .square-title {
      margin: 35px 0;
    }
  }
  .tips {
    display: inline-block;
    max-width: 1100px;
  }
  .el-form-item {
    position: relative;
    display: inline-block;
    width: 300px;
    margin-bottom: 30px;

    .unit {
      position: absolute;
      top: 0;
      right: 20px;
    }
  }
  .el-form-item__error {
    text-align: left;
  }
}
</style>
