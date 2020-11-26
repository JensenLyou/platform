<template>

  <div class="setting_multipleSign">
    <div class="text-center">
      <div class="steps-tips mg-b50 text-left w800">
        <div v-for="(item, index) in $t('developer.publish.setting_multipleSign.tips')"
             :key="index">
          <span class="public-black-circle"></span>
          <span class="ver-middle">{{item}}</span>
        </div>
      </div>
    </div>

    <el-form :model="ruleForm04"
             ref="ruleForm04"
             label-width="245px"
             class="ruleForm">

      <el-form-item :label="`${$t('developer.publish.setting_multipleSign.ruleForm.leaderAddress.label')}：`"
                    prop="leaderAddress"
                    :rules="rules04.leaderAddress">
        <el-input v-model.trim="ruleForm04.leaderAddress"
                  :placeholder="$t('developer.publish.setting_multipleSign.ruleForm.leaderAddress.placeholder')"></el-input>
      </el-form-item>
      <el-form-item :label="$t('developer.publish.setting_multipleSign.ruleForm.masterThreshold.label') + '：'"
                    prop="masterThreshold"
                    :rules="rules04.masterThreshold">
        <el-input v-model.trim="ruleForm04.masterThreshold"
                  :placeholder="$t('developer.publish.setting_multipleSign.ruleForm.masterThreshold.placeholder')"></el-input>
      </el-form-item>

      <el-form-item v-for="(domain, index) in ruleForm04.domains"
                    :label="$t('developer.publish.setting_multipleSign.ruleForm.managerAddress.label') + '：'"
                    :key="domain.key"
                    :prop="'domains.' + index + '.value'"
                    :rules="rules04.staffAddresses">
        <el-input v-model="domain.value"
                  :placeholder="$t('developer.publish.setting_multipleSign.ruleForm.managerAddress.placeholder')"></el-input>
        <el-button class="addBtn"
                   v-show="index == 0"
                   type="primary"
                   @click="addDomain"
                   :disabled="ruleForm04.domains.length > 4">{{ $t("btn.add_manage") }}</el-button>
        <el-button class="deteleBtn"
                   @click.prevent="removeDomain(domain)"
                   v-show="index > 0">{{ $t('btn.delete')}}</el-button>
      </el-form-item>

      <el-form-item :label="$t('developer.publish.setting_multipleSign.ruleForm.managerThreshold.label')+ '：'"
                    prop="managerThreshold"
                    :rules="rules04.managerThreshold">
        <el-input v-model.trim="ruleForm04.managerThreshold"
                  :placeholder="$t('developer.publish.setting_multipleSign.ruleForm.managerThreshold.placeholder')"></el-input>
      </el-form-item>

      <div class="text-center">
        <el-button type="primary"
                   @click="stepFour('ruleForm04')"
                   class="mg-t30 mg-b20">{{ $t("btn.setting_sign") }}</el-button>
        <div> <span class="pointer"
                @click="$router.back()">{{ $t("btn.back_list_page") }}</span></div>

      </div>

    </el-form>

    <sign :titleName="$t('btn.setting_sign')"
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
      visible: false,
      SignParams: null,
      ruleForm04: {
        signType: 5,
        leaderAddress: "",
        masterThreshold: "",
        staffAddresses: [{ value: "" }],
        managerThreshold: "",
        domains: [
          {
            value: ""
          }
        ]
      },
      rules04: {
        leaderAddress: [
          {
            required: true,
            message: this.$t(
              "developer.publish.setting_multipleSign.ruleForm.leaderAddress.placeholder"
            ),
            trigger: "blur"
          },
          {
            validator: this.validMasterAddress,
            trigger: "blur"
          }
        ],
        masterThreshold: [
          {
            required: true,
            message: this.$t(
              "developer.publish.setting_multipleSign.ruleForm.masterThreshold.placeholder"
            ),
            trigger: "blur"
          },
          {
            validator: this.validSignNumber,
            trigger: "blur"
          }
        ],
        staffAddresses: [
          {
            required: true,
            message: this.$t(
              "developer.publish.setting_multipleSign.ruleForm.managerAddress.placeholder"
            ),
            trigger: "blur"
          },
          {
            validator: this.validAddress,
            trigger: "blur"
          }
        ],
        managerThreshold: [
          {
            required: true,
            message: this.$t(
              "developer.publish.setting_multipleSign.ruleForm.managerThreshold.placeholder"
            ),
            trigger: "blur"
          },
          {
            validator: this.validSignNumber,
            trigger: "blur"
          }
        ]
      }
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
    // 校验管理者地址
    validMasterAddress(rule, value, callback) {
      let number = 0;
      //  判断执行者地址
      this.ruleForm04.domains.forEach((item, index) => {
        if (item.value == value) {
          number += 1;
        }
      });
      if (number > 0) {
        callback(new Error(this.$t("page.Tmanageraddresscannotduplicated")));
      } else {
        callback();
      }
    },
    // 检验签名次数不能大于执行者个数
    validSignNumber(rule, value, callback) {
      if (!/^[0-9]+$/.test(value)) {
        callback(
          new Error(this.$t("developer.publish.steps[0].totalNumber.error"))
        );
      } else if (Number(value) > this.ruleForm04.domains.length) {
        callback(new Error(this.$t("page.signaturesmustbeless")));
      } else {
        callback();
      }
    },
    // 校验地址不能重复
    validAddress(rule, value, callback) {
      let number = 0;
      let msg = this.$t("page.Executoraddresscannotberepeated");
      //  判断执行者地址
      this.ruleForm04.domains.forEach((item, index) => {
        if (item.value == value) {
          number += 1;
          msg = this.$t("page.Executoraddresscannotberepeated");
        }
      });
      // 判断管理者地址
      if (value == this.ruleForm04.leaderAddress) {
        number += 1;
        msg = this.$t("page.duplicatedwithmanageraddress");
      }
      if (number > 1) {
        callback(new Error(msg));
      } else {
        callback();
      }
    },
    addDomain() {
      this.ruleForm04.domains.push({
        value: "",
        key: Date.now()
      });
    },
    removeDomain(item) {
      var index = this.ruleForm04.domains.indexOf(item);
      if (index !== -1) {
        this.ruleForm04.domains.splice(index, 1);
      }
    },
    stepFour(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          let arr = [];
          this.ruleForm04.domains.forEach(item => {
            arr.push(item.value);
          });
          let params = {
            signType: 5,
            tokenID: this.$route.query.tokenId,
            leaderAddress: this.ruleForm04.leaderAddress,
            masterThreshold: Number(this.ruleForm04.masterThreshold),
            staffAddresses: arr,
            managerThreshold: Number(this.ruleForm04.managerThreshold)
          };
          this.SignParams = params;
        } else {
          return false;
        }
      });
    },
    handleToDetail() {
      let params = {
        type: 3,
        info: this.ruleForm04,
        tokenId: this.$route.query.tokenId
      };
      this.$router.push({
        path: "/developer/multipleSign_detail_handle",
        query: params
      });
    }
  }
};
</script>

<style lang="less">
.setting_multipleSign {
  .w800 {
    width: 800px;
  }
  .token-info {
    display: inline-block;
    background-color: #f8f8f9;
    padding: 30px;
    border-radius: 10px;
    .detial-info-span {
      width: 320px;
    }
  }
  .ruleForm {
    width: 800px;
    margin: 0 auto;
  }
  .addBtn,
  .deteleBtn {
    margin-left: 20px;
  }
  .el-input {
    width: 360px;
  }
}
</style>
