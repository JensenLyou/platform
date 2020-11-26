<template>
  <div class="developer-document">
    <div>
      <div class="public-title mg-b25">{{$t('page.BeginnerGuide')}}
        <div class="more-greenhand"
             @click="$router.push({ path: '/developer/document_allgreenhand'}) ">{{$t("page.Showmore")}}<span class="el-icon-arrow-right"></span><span class="el-icon-arrow-right"></span></div>
        <div class="public-border mg-t16"></div>
      </div>
      <div>
        <div class="greenhand-item"
             v-for="(item, index) in greenhand"
             :key="index"
             @click="handleToGreehand(item.id)">

          <div class="title">{{item.title}}</div>
          <div class="greenhand-des">{{item.summary}}</div>
        </div>

      </div>
    </div>

    <div>
      <div class="public-title mg-b25">{{$t('developer.documentation.APIinterfacedocumentation')}}
        <div class="public-border mg-t16"></div>
      </div>
      <div>
        <div class="api-item"
             v-for="(item, index) in api"
             :key="index">
          <div class="title">
            <div>{{item.title}}</div>
          </div>
          <ul>
            <li v-for="(sub, subIndex) in item.items"
                :key="subIndex">
              <div class="pointer list-item"
                   v-show="!(!item.more && subIndex > 4)"
                   @click="handleToApi(sub.id, sub.pid)">{{sub.title}}</div>
            </li>
            <div v-if="!item.more && item.items.length > 5">
              <div class="pointer list-item"
                   @click="handleToMoreApi(item.id, index)">{{$t("page.more")}}<span class="el-icon-arrow-down"></span></div>
            </div>
            <div v-if="item.more && item.items.length > 5">
              <div class="pointer list-item"
                   @click="handleToLess(item.id, index)">{{$t("page.collapse")}}<span class="el-icon-arrow-up"></span></div>
            </div>
          </ul>
        </div>
      </div>
    </div>

    <div>
      <div class="public-title mg-b25">FAQ
        <div class="public-border mg-t16"></div>
      </div>
      <div>
        <div class="FAQ-item"
             v-for="(item, index) in FAQ"
             :key="index">
          <div class="list-item"
               @click="handleToFAQ(item.id)">{{item.title}}</div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      greenhand: [],
      api: [],
      FAQ: []
    };
  },
  created() {
    this.handleQuery();
  },
  methods: {
    handleQuery() {
      this.$api.queryDocTheme().then(res => {
        this.greenhand = res.data.data;
      });
      this.$api.queryApiTheme().then(res => {
        this.api = res.data.data;
      });
      this.$api.queryFaqList().then(res => {
        this.FAQ = res.data.data;
      });
    },
    handleToApi(id, listId) {
      this.$router.push({
        path: "/developer/document_api",
        query: { id, listId }
      });
    },
    handleToMoreApi(id, index) {
      this.$set(
        this.api,
        index,
        Object.assign({}, this.api[index], { more: true })
      );
    },
    handleToLess(id, index) {
      this.$set(
        this.api,
        index,
        Object.assign({}, this.api[index], { more: false })
      );
    },
    handleToFAQ(id) {
      this.$router.push({ path: "/developer/document_FAQ", query: { id } });
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
.developer-document {
  a {
    color: #1e1f20;
    &:hover {
      color: #409eff;
    }
  }
  .title {
    color: #1e1f20;
    font-size: 18px;
    line-height: 1;
    margin-bottom: 25px;
  }
  .greenhand-item {
    display: inline-block;
    box-sizing: border-box;
    padding: 30px;
    width: 300px;
    height: 180px;
    border: 1px solid #ebebeb;
    border-radius: 5px;
    vertical-align: top;
    margin: 0 50px 25px 0;
    cursor: pointer;
    &:hover {
      border: 1px solid rgba(28, 135, 255, 1);
      box-shadow: 0px 4px 10px 0px rgba(28, 135, 255, 0.29);
    }
  }
  .more-greenhand {
    float: right;
    color: #76787c;
    cursor: pointer;
    font-size: 14px;
    &:hover {
      color: #409eff;
    }
  }
  .greenhand-des {
    color: #76787c;
    height: 75px;
    text-overflow: ellipsis;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    isplay: -webkit-box;
  }
  .api-item {
    display: inline-block;
    margin: 0 50px 50px 0;
    line-height: 2;
    vertical-align: top;
    width: 200px;
  }
  .FAQ-item {
    display: inline-block;
    margin: 0 60px 30px 0;
  }
  .list-item {
    color: #1e1f20;
    cursor: pointer;
    &:hover {
      color: #409eff;
    }
  }
  .el-icon-arrow-right {
    width: 12px;
  }
}
</style>
