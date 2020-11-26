<template>
  <div class="developer-question text-center">
    <div>
      <div class="steps-tips mg-b50">{{$t('developer.Question.tips')}}</div>
    </div>

    <el-form :model="ruleForm"
             :rules="rules"
             ref="ruleForm"
             label-width="180px"
             class="ruleForm">
      <el-form-item :label="i18n_ruleFrom.email.label +'：'"
                    prop="email">
        <el-input v-model.trim="ruleForm.email"
                  :placeholder="i18n_ruleFrom.email.placeholder"
                  :maxlength="30"></el-input>
      </el-form-item>

      <el-form-item :label="i18n_ruleFrom.title.label+'：'"
                    prop="title">
        <el-input v-model.trim="ruleForm.title"
                  :placeholder="i18n_ruleFrom.title.placeholder"
                  :maxlength="30"></el-input>
      </el-form-item>

      <el-form-item :label="i18n_ruleFrom.question.label + '：'"
                    prop="question">
        <el-input type="textarea"
                  v-model.trim="ruleForm.question"
                  :placeholder="i18n_ruleFrom.question.placeholder"
                  :maxlength="500"></el-input>
      </el-form-item>

      <el-form-item :label="i18n_ruleFrom.file.label + '：'">
        <div class="text-left">
          <uploadFile @upload-attachNameArr="uploadUrlFuc"
                      :multi_selection="true"
                      :tips="i18n_ruleFrom.file.tips"
                      :mime_types="mime_types"
                      max_file_size="3.5mb"></uploadFile>
          <el-input v-model="ruleForm.baseUrl"
                    v-show="false"></el-input>
        </div>
        <pre id="console"></pre>
      </el-form-item>
      <el-form-item>
        <el-button type="primary"
                   :loading="loadingBtn"
                   @click="handleStepOne('ruleForm')"
                   class="mg-t50">{{ $t("btn.next_step") }}</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loadingBtn: false,
      percentage: 0,
      ruleForm: {
        email: "", // 邮箱
        title: "", // 问题标题
        question: "", // 问题简介
        baseUrl: "", // 附件根url
        attachName: "" // 附件名称
      },
      rules: {
        email: [
          {
            required: true,
            message: this.$t("developer.Question.ruleForm.email.placeholder"),
            trigger: "blur"
          },
          {
            type: "email",
            message: this.$t("developer.Question.ruleForm.email.error"),
            trigger: "blur"
          }
        ],
        title: [
          {
            required: true,
            message: this.$t("developer.Question.ruleForm.title.placeholder"),
            trigger: "blur"
          }
        ],
        question: [
          {
            required: true,
            message: this.$t(
              "developer.Question.ruleForm.question.placeholder"
            ),
            trigger: "blur"
          }
        ]
        // baseUrl: [{ required: true, message: "请上传文件", trigger: "change" }]
      },
      mime_types: [{ title: "Image files", extensions: "jpg,png,gif" }]
    };
  },
  computed: {
    i18n_ruleFrom() {
      return this.$t("developer.Question.ruleForm");
    }
  },
  methods: {
    handleStepOne(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.loadingBtn = true;
          this.$api
            .addQuestion(this.ruleForm)
            .then(res => {
              this.$router.push({ path: "/developer/question_success" });
            })
            .finally(() => {
              this.loadingBtn = false;
            });
        } else {
          return false;
        }
      });
    },
    uploadUrlFuc(obj) {
      this.ruleForm.baseUrl = obj.baseUrl;
      let arr = [];
      obj.attachNameArr.forEach((item, index) => {
        arr.push(item.fileName);
      });
      this.ruleForm.attachName = arr.join(",");
    }
  }
};
</script>

<style lang="less">
.developer-question {
  .steps-tips {
    width: 600px;
  }
  .ruleForm {
    display: inline-block;
    width: 600px;
  }
}
</style>
