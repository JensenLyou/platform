<template>
  <div class="greenhand">
    <div class="public-title">{{$t('page.BeginnerGuide')}}
      <div class="public-border mg-t16"></div>
    </div>

    <div>
      <div class="greenhand-title">{{greenhand.title}}</div>
      <div class="greenhand-des"
           v-html="greenhand.content"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      greenhand: {}
    };
  },
  created() {
    this.handleQuery();
  },
  methods: {
    handleQuery() {
      this.$api.queryDocInfo(this.$route.query.id).then(res => {
        this.greenhand = res.data.data;
      });
    }
  }
};
</script>

<style lang="less">
.greenhand {
  .greenhand-title {
    color: #1e1f20;
    font-size: 18px;
    font-weight: 500;
    margin: 30px 0;
  }
  .greenhand-des {
    overflow: auto;

    img {
      width: 100%;
    }
  }
}
</style>
