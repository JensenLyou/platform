<template>
  <div class="developer-question-success text-center">
    <div class="mg-b20"> <i class="el-icon-success public"></i></div>
    <div class="result-text">{{ $t('page.submitSuccess')}}</div>
    <div class="steps-tips mg-b50 mg-t44">{{$t('developer.Question.tips')}}</div>
    <div class="pointer" @click="$router.back()">{{ $t('btn.returnQuestion') }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style lang="less">
.developer-question-success {
  padding-top: 100px;
}
</style>
