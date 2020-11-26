<!--  目录  -->
<template>
  <div class="dir_list">
    <div class="public-title mg-b10">{{$t("developer.documentation.tableofContents")}}
      <div class="public-border mg-t16"></div>
    </div>
    <div v-for="(item, index) in dirList"
         :key="index"
         class="item"
         :class="{ 'active': active == index }">
      <div @click="handleApi(item, index)">{{item.title}}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    dirList: {
      type: Array,
      default: () => {
        return [];
      }
    },
    active: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      array: []
    };
  },
  mounted() {},
  methods: {
    handleApi(item, index) {
      this.$emit("activeFuc", index);
      this.$emit("dirListId", item.id);
    }
  }
};
</script>

<style lang="less">
.dir_list {
  width: 250px;
  padding: 30px;
  background: rgba(255, 255, 255, 1);
  border: 1px solid rgba(220, 220, 220, 1);
  box-shadow: 0px 4px 10px 0px rgba(168, 168, 168, 0.29);
  border-radius: 10px;

  .item {
    color: #1e1f20;
    font-size: 16px;
    cursor: pointer;
    margin-bottom: 10px;
    &:hover {
      color: #409eff;
    }
  }
  .item.active {
    color: #409eff;
  }
}
</style>
