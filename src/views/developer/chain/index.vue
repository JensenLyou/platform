<template>
  <div class="developer-chain ">
    <div class="steps-div">
      <el-steps :active="active"
                align-center
                process-status="finish"
                finish-status="success">
        <el-step :title="i18n_chain.steps[0].title"></el-step>
        <el-step :title="i18n_chain.steps[1].title"></el-step>
      </el-steps>
    </div>
    <div class="text-center">
      <div v-if="active == 0">
        <el-form :model="ruleForm"
                 :rules="rules"
                 ref="ruleForm"
                 label-width="250px"
                 class="ruleForm">
          <el-form-item :label="i18n_chain.steps[0].name.label + '：'"
                        prop="name">
            <el-tooltip class="item"
                        effect="light"
                        placement="right">
              <div slot="content"
                   v-html="i18n_chain.steps[0].name.tips"></div>
              <el-input v-model.trim="ruleForm.name"
                        :placeholder="i18n_chain.steps[0].name.placeholder"
                        :maxlength="32"></el-input>
            </el-tooltip>
          </el-form-item>

          <el-form-item :label="i18n_chain.steps[0].en_short.label+'：'"
                        prop="en_short">
            <el-tooltip class="item"
                        effect="light"
                        placement="right">
              <div slot="content"
                   v-html="i18n_chain.steps[0].en_short.tips"></div>
              <el-input v-model.trim="ruleForm.en_short"
                        :placeholder="i18n_chain.steps[0].en_short.placeholder"
                        :maxlength="16"></el-input>
            </el-tooltip>

          </el-form-item>

          <el-form-item :label="i18n_chain.steps[0].contact_name.label + '：'"
                        prop="contact_name">
            <el-tooltip class="item"
                        effect="light"
                        placement="right">
              <div slot="content"
                   v-html="i18n_chain.steps[0].contact_name.tips"></div>
              <el-input v-model.trim="ruleForm.contact_name"
                        :placeholder="i18n_chain.steps[0].contact_name.placeholder"
                        :maxlength="30"></el-input>
            </el-tooltip>

          </el-form-item>

          <el-form-item :label="i18n_chain.steps[0].contact_tel.label + '：'"
                        prop="contact_tel">
            <el-input v-model.trim="ruleForm.contact_tel"
                      :placeholder="i18n_chain.steps[0].contact_tel.placeholder"
                      :maxlength="20"></el-input>
          </el-form-item>

          <el-form-item :label="i18n_chain.steps[0].e_mail.label+ '：'"
                        prop="e_mail">
            <el-input v-model.trim="ruleForm.e_mail"
                      :placeholder="i18n_chain.steps[0].e_mail.placeholder"
                      :maxlength="30"></el-input>
          </el-form-item>

          <el-form-item :label="i18n_chain.steps[0].remark.label+ '：'"
                        prop="remark"
                        class="relative">
            <el-input type="textarea"
                      v-model.trim="ruleForm.remark"
                      :autosize="{ minRows: 3 }"
                      :placeholder="i18n_chain.steps[0].remark.placeholder"
                      :maxlength="300"></el-input>
            <span class="stringNum">{{ruleForm.remark.length}}/300</span>
          </el-form-item>

          <el-form-item>
            <el-button type="primary"
                       :loading="loadingBtn"
                       @click="handleSubmit('ruleForm')"
                       class="mg-t50 mg-r150">{{ $t("btn.submit") }}</el-button>
          </el-form-item>
        </el-form>
      </div>
      <div v-else-if="active == 1">
        <div class="text-center mg-t44">
          <div class="steps-tips mg-b50 text-left">
            <div><span class="ver-middle">{{i18n_chain.steps[1].tips}}</span> </div>
          </div>
        </div>
        <div class="detail-info text-left mg-b60">
          <div><span class="detail-text">{{i18n_chain.steps[1].Contacts + "："}}</span> <span>{{i18n_chain.steps[1].MissWu}}</span> </div>
          <div><span class="detail-text">{{i18n_chain.steps[1].TEL + "："}}</span>{{i18n_chain.steps[1].TEL_phone}}</div>
          <div><span class="detail-text">{{i18n_chain.steps[1].Email + "："}}</span> {{i18n_chain.steps[1].EmailAddress}} </div>
          <div><span class="detail-text">{{i18n_chain.steps[1].Address + "："}}</span>{{i18n_chain.steps[1].AddressDetail}}</div>
        </div>
        <div>
          <span class="pointer"
                @click="handleDetail">{{ $t("btn.detail")}}</span>
        </div>

      </div>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
      id: "",
      loadingBtn: false,
      ruleForm: {
        signType: "1",
        name: "",
        en_short: "",
        contact_name: "",
        contact_tel: "",
        e_mail: "",
        remark: ""
      },

      rules: {
        name: [
          {
            required: true,
            message: this.$t("developer.chain").steps[0].name.placeholder,
            trigger: "blur"
          },
          {
            required: true,
            validator: this.$validator.rule.required_Name,
            trigger: "blur"
          }
        ],
        en_short: [
          {
            required: true,
            message: this.$t("developer.chain").steps[0].en_short.placeholder,
            trigger: "blur"
          },
          {
            required: true,
            validator: this.$validator.rule.required_Symbol,
            trigger: "blur"
          }
        ],
        contact_name: [
          {
            required: true,
            message: this.$t("developer.chain").steps[0].contact_name
              .placeholder,
            trigger: "blur"
          },
          {
            validator: (rule, value, callback) => {
              if (!/^[a-zA-Z\u4e00-\u9fa5]{2,30}$/.test(value)) {
                callback(
                  new Error(
                    this.$t("developer.chain").steps[0].contact_name.error
                  )
                );
              } else {
                callback();
              }
            },
            trigger: "blur"
          }
        ],
        contact_tel: [
          {
            required: true,
            message: this.$t("developer.chain").steps[0].contact_tel.error,
            trigger: "change"
          },
          {
            validator: (rule, value, callback) => {
              if (!/^1[^ 1| 2 | 6 | 9 ][0-9]+$/.test(value)) {
                callback(
                  new Error(
                    this.$t("developer.chain").steps[0].contact_tel.error2
                  )
                );
              } else {
                callback();
              }
            },
            trigger: "blur"
          }
        ],
        e_mail: [
          {
            required: true,
            message: this.$t("developer.chain").steps[0].e_mail.placeholder,
            trigger: "blur"
          },
          {
            type: "email",
            message: this.$t("developer.chain").steps[0].e_mail.error
          }
        ],
        remark: [
          {
            required: true,
            message: this.$t("developer.chain").steps[0].remark.placeholder,
            trigger: "blur"
          }
        ]
      }
    };
  },
  computed: {
    i18n_chain() {
      return this.$t("developer.chain");
    }
  },
  methods: {
    handleSubmit(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.loadingBtn = true;
          this.$api
            .chainApply(this.ruleForm)
            .then(res => {
              this.id = res.data.data;
              this.active = 1;
            })
            .finally(() => {
              this.loadingBtn = false;
            });
        } else {
          return false;
        }
      });
    },
    handleDetail() {
      // this.$router.push({ path: "/developer/chain_detail" });
      this.$api.chainApplyInfo(this.id).then(res => {
        this.$store.commit("SET_DEVELOPER_CHAIN_DETAIL", res.data.data);
        this.$router.push({ path: "/developer/chain_detail" });
      });
    }
  }
};
</script>

<style lang="less">
.developer-chain {
  .steps-div {
    display: block;
    width: 900px;
    margin: 0 auto;
  }
  .ruleForm {
    display: inline-block;
    margin-top: 70px;
  }
  .el-input {
    width: 360px;
    margin-right: 150px;
  }
  .el-textarea {
    width: 360px;
    margin-right: 150px;
  }
  .detail-info {
    display: inline-block;
  }
  .stringNum {
    position: absolute;
    right: 165px;
    bottom: 0;
  }
  .mg-r150 {
    margin-right: 150px;
  }
  .steps-tips {
    max-width: 800px;
  }
}
</style>
