<template>
  <div class="FAQ">
    <div class="public-title">FAQ
      <div class="public-border mg-t16"></div>
    </div>

    <div v-for="(item, index) in FAQ"
         :key="index"
         :id="item.id"
         :class="item.id+'2'">
      <div class="FAQ-title">{{ `${index+1}、${item.title}` }}</div>
      <div class="FAQ-des"
           v-html="item.content"></div>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      toFixPositionHref: "",
      FAQ: []
    };
  },
  created() {
    this.handleQuery();
  },
  mounted() {},
  methods: {
    handleQuery() {
      this.$api.queryFaqAllList().then(res => {
        this.FAQ = res.data.data;
        // 滚动到指定位置
        this.$nextTick().then(res => {
          window.scrollTo({
            top: document.getElementById(this.$route.query.id).offsetTop - 50
          });
        });
      });
    }
  }
};
</script>

<style lang="less">
.FAQ {
  .FAQ-title {
    color: #1e1f20;
    font-size: 18px;
    font-weight: 500;
    margin: 20px 0;
  }
  .FAQ-des {
    line-height: 40px;
    color: #76787c;
  }
}
</style>
