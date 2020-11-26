<template>
  <div class="developer-create">
    <div class="public-title">{{$t('developer.create.introduce_title')}}
      <div class="public-border mg-t16"></div>
    </div>
    <div class="mg-t18 mg-b30">
      <div v-for="(item,index) in $t('developer.create.introduce')"
           :key="index"
           class="mg-b14">
        <span class="public-black-circle"></span>
        <span class="ver-middle">{{item}}</span>
      </div>
    </div>
    <div class="public-title">{{$t('developer.create.explain_title')}}
      <div class="public-border mg-t16"></div>
    </div>
    <div class="mg-t18 mg-b30">
      <div v-for="(item,index) in $t('developer.create.Explain')"
           :key="index"
           class="mg-b14">
        <span class="public-black-circle"></span>
        <span class="ver-middle"
              v-html="item"></span>
      </div>
    </div>
    <div class="public-title">{{$t('developer.create.steps_title')}}
      <div class="public-border mg-t16"></div>
    </div>
    <div class="mg-t44 mg-b30 steps-box">
      <el-steps :active="4"
                process-status="finish"
                finish-status="finish"
                class="public-steps">
        <el-step v-for="(item, index) in $t('developer.create.steps')"
                 :key="index"
                 :title="item.title"
                 :description="item.des"></el-step>
      </el-steps>
    </div>

    <div class="text-center mg-t78 mg-b65">
      <el-button type="primary"
                 @click="$router.push({ path: '/developer/create_content' })">{{$t('btn.create')}}</el-button>
    </div>

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
.developer-create {}
</style>
