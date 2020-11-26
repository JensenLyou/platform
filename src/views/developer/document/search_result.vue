<template>
  <div class="document-search_result">
    <div class="public-title">{{ $t("page.searchresults")}}
      <div class="public-border mg-t16"></div>
    </div>

    <div v-for="(item, index) in tableData"
         :key="index"
         :id="item.id"
         :class="item.id+'2'"
         class="list-item"
         @click="handleToDetail(item)">
      <div class="search-title"
           v-html="brightenKeyword(item.title, searchContent)"></div>
      <div class="search-des"
           v-html="brightenKeyword(item.remark, searchContent)"></div>
    </div>

    <div class="null-data"
         v-show="!tableData.length">{{$t("page.NoData")}}</div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [],
      searchContent: ""
    };
  },
  created() {
    this.handleQuery();
  },
  watch: {
    "$store.state.documentInputDate": {
      handler: function(val, oldVal) {
        this.handleQuery();
      },
      deep: true
    }
  },
  methods: {
    handleQuery() {
      this.searchContent = this.$store.state.documentInput;
      this.$api
        .queryTechnologyList({ keyWord: this.$store.state.documentInput })
        .then(res => {
          this.tableData = res.data.data;
        })
        .finally(() => {
          this.$store.state.documentInput = "";
        });
    },
    handleToDetail(item) {
      // 1 api 2 新手 3 FAQ
      if (item.ctype == 1) {
        this.handleToApi(item.id, item.pid);
      } else if (item.ctype == 2) {
        this.handleToGreehand(item.id);
      } else if (item.ctype == 3) {
        this.handleToFAQ(item.id);
      }
    },
    handleToApi(id, listId) {
      this.$router.push({
        path: "/developer/document_api",
        query: { id, listId }
      });
    },
    handleToFAQ(id) {
      this.$router.push({ path: "/developer/document_FAQ", query: { id } });
    },
    handleToGreehand(id) {
      this.$router.push({
        path: "/developer/document_greenhand",
        query: { id }
      });
    },
    brightenKeyword(val, keyword) {
      const Reg = new RegExp(keyword, "i");
      if (val) {
        return val.replace(
          Reg,
          `<span style="color: #409EFF;">${keyword}</span>`
        );
      }
    }
  }
};
</script>

<style lang="less">
.document-search_result {
  .list-item {
    border: 1px solid transparent;
    &:hover {
      cursor: pointer;
    }
  }
  .search-title {
    display: inline-block;
    color: #1e1f20;
    font-size: 18px;
    font-weight: 500;
    margin: 20px 0;
  }
  .search-des {
    margin-bottom: 20px;
    line-height: 40px;
    color: #76787c;
    text-overflow: ellipsis;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    isplay: -webkit-box;
    &:hover {
      color: #409eff;
    }
  }
  .null-data {
    color: #909399;
    margin: 50px;
    text-align: center;
  }
}
</style>
