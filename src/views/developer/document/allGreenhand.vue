<template>
  <div class="allGreenhand">
    <div class="public-title">{{$t('page.BeginnerGuide')}}
      <div class="public-border mg-t16"></div>
    </div>

    <div v-for="(item, index) in allGreenhand"
         :key="index"
         @click="handleToGreehand(item.id)"
         class="allGreenhand-item">
      <div class="allGreenhand-title">{{ `${index+1}、${item.title}` }}</div>
      <div class="allGreenhand-des"
           v-html="item.summary"></div>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      allGreenhand: []
    };
  },
  created() {
    this.handleQuery();
  },
  methods: {
    handleQuery() {
      this.$api.queryDocAllTheme().then(res => {
        this.allGreenhand = res.data.data;
      });
    },
    handleToGreehand(id) {
      this.$router.push({
        path: "/developer/document_greenhand",
        query: { id }
      });
    }
  }
};
</script>

<style lang="less">
.allGreenhand {
  .allGreenhand-title {
    color: #1e1f20;
    font-size: 18px;
    font-weight: 500;
    margin: 20px 0;
  }
  .allGreenhand-des {
    line-height: 2;
    color: #76787c;
  }
  .allGreenhand-item {
    cursor: pointer;
    &:hover {
      .allGreenhand-des {
        color: #409eff;
      }
    }
  }
}
</style>
