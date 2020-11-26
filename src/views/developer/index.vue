<template>
  <div class="developer">
    <div class="fixtop"></div>
    <platformHeader></platformHeader>
    <div class="left_menu">
      <div class="pd-lr20 fs20 h56">{{ $t("page.UnderlyingChainService") }}</div>
      <el-menu :default-active="active"
               class="el-menu-vertical-demo"
               background-color="#545c64"
               text-color="#fff"
               active-text-color="#ffd04b"
               @select="selectMenu">
        <el-menu-item index="1">
          <i class="icon_contract"></i>
          <span slot="title"
                class="pd-l20">{{ $t("page.CreatingSmartContract") }}</span>
        </el-menu-item>

        <el-submenu index="2">
          <template slot="title">
            <i class="icon_publish"></i>
            <span class="pd-l20">{{ $t("page.ReleasePass") }}</span>
          </template>
          <el-menu-item index="2-1"> <span class="pd-l25"> {{ $t("page.IssueToken") }}</span></el-menu-item>
          <el-menu-item index="2-2"> <span class="pd-l25"> {{ $t("page.MultiSignatureSetting") }}</span></el-menu-item>
        </el-submenu>

        <el-menu-item index="3">
          <i class="icon_chain"></i>
          <span slot="title"
                class="pd-l20">{{ $t("page.CreateChain") }}</span>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="icon_params"></i>
          <span slot="title"
                class="pd-l20">{{ $t("page.MainNetworkParameters") }}</span>
        </el-menu-item>

        <div class="pd-lr20 fs20 h56  resource">{{ $t("page.Resource")}}</div>
        <el-menu-item index="5">
          <i class="icon_document"></i>
          <span slot="title"
                class="pd-l20">{{ $t("page.TechnicalDocumentation") }}</span>
        </el-menu-item>
        <el-menu-item index="6">
          <i class="icon_question"></i>
          <span slot="title"
                class="pd-l20">{{ $t("page.QuestionFeedback") }}</span>
        </el-menu-item>
      </el-menu>

    </div>
    <div class="right_part">
      <div class="right-header">
        <div class="search-input"
             v-if="active == 1">
          <el-input v-model="$store.state.createInput"
                    :placeholder="$t('developer.create.searchPlaceholder')"
                    @keydown.enter.native="handleQueryCreate"></el-input>
          <el-button type="primary"
                     @click="handleQueryCreate">{{ $t("btn.search") }}</el-button>
        </div>
        <div class="search-input"
             v-if="active == '2-1' || active == '2-2'">
          <el-input v-model="$store.state.tokenInput"
                    :placeholder="$t('developer.publish.searchPlaceholder')"
                    @keydown.enter.native="handleQueryToken"></el-input>
          <el-button type="primary"
                     @click="handleQueryToken">{{ $t("btn.search") }}</el-button>
        </div>
        <div class="search-input"
             v-if="active == 3">
          <el-input v-model="$store.state.chainInput"
                    :placeholder="$t('placeholder.keywordSearch')"
                    @keydown.enter.native="handleQueryChain"></el-input>
          <el-button type="primary"
                     @click="handleQueryChain">{{ $t("btn.search") }}</el-button>
        </div>
        <div class="search-input"
             v-if="active == 5">
          <el-input v-model="$store.state.documentInput"
                    :placeholder="$t('placeholder.keywordSearch')"
                    @keydown.enter.native="handleQueryDocument"></el-input>
          <el-button type="primary"
                     @click="handleQueryDocument">{{ $t("btn.search") }}</el-button>
        </div>

        {{activeTitle}}

      </div>
      <div class="right-content">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: "1",
      activeTitle: "",
      createInput: ""
    };
  },
  created() {
    this.handlerActive(this.$route.path);
  },
  watch: {
    $route: {
      handler: function(val) {
        this.handlerActive(val.path);
      },
      deep: true
    },
    "$i18n.locale": {
      handler: function() {
        this.handlerActive(this.$route.path);
      },
      deep: true
    }
  },
  methods: {
    handlerActive(path) {
      let arr = [
        {
          path: "/developer/create",
          index: "1",
          title: this.$t("page.CreatingSmartContract")
        },
        {
          path: "/developer/publish",
          index: "2-1",
          title: this.$t("page.IssueToken")
        },
        {
          path: "/developer/multipleSign",
          index: "2-2",
          title: this.$t("page.MultiSignatureSetting")
        },
        {
          path: "/developer/chain",
          index: "3",
          title: this.$t("page.CreateChain")
        },
        {
          path: "/developer/mainParams",
          index: "4",
          title: this.$t("page.MainNetworkParameters")
        },
        {
          path: "/developer/document",
          index: "5",
          title: this.$t("page.TechnicalDocumentation")
        },
        {
          path: "/developer/question",
          index: "6",
          title: this.$t("page.QuestionFeedback")
        }
      ];
      arr.forEach(item => {
        if (path.indexOf(item.path) > -1) {
          this.active = item.index;
          this.activeTitle = item.title;
        }
      });
    },
    selectMenu(index, indexPath) {
      if (index == 1) {
        this.$router.push({ path: "/developer/create" });
      } else if (index == "2-1") {
        this.$router.push({ path: "/developer/publish_token" });
      } else if (index == "2-2") {
        this.$router.push({ path: "/developer/multipleSign" });
      } else if (index == "3") {
        this.$router.push({ path: "/developer/chain" });
      } else if (index == "4") {
        this.$router.push({ path: "/developer/mainParams" });
      } else if (index == 5) {
        this.$router.push({ path: "/developer/document" });
      } else if (index == 6) {
        this.$router.push({ path: "/developer/question" });
      }
    },
    handleQueryCreate() {
      this.$store.commit("SET_CREATEINPUTDATE", new Date().getTime());
      if (!this.$store.state.createInput) {
        this.$message.error(this.$t("developer.create.searchPlaceholder"));
        return;
      }
      this.$router.push({ path: "/developer/create_list" });
    },
    handleQueryToken() {
      this.$store.commit("SET_TOKENINPUTDATE", new Date().getTime());
      this.$router.push({ path: "/developer/multipleSign" });
    },
    handleQueryChain() {
      this.$store.commit("SET_CHAININPUTDATE", new Date().getTime());
      this.$router.push({ path: "/developer/chain_list" });
    },
    handleQueryDocument() {
      this.$store.commit("SET_DOCUMENTINPUTDATE", new Date().getTime());
      if (!this.$store.state.documentInput) {
        this.$message.error(this.$t("page.SearchKeywordsCannotBeEmpty"));
        return;
      }
      this.$router.push({ path: "/developer/document_search_result" });
    }
  }
};
</script>

<style lang="less">
.developer {
  position: relative;
  flex: 1;
  display: flex;
  flex-flow: column;
  background-color: #2e3641;
  .fixtop {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    height: 80px;
    background-color: rgba(30, 62, 104, 0.7);
  }
  .left_menu {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    color: #fff;
    vertical-align: top;
    background-color: #20252d;
  }

  .right_part {
    flex: 1;
    box-sizing: border-box;
    padding-left: 300px;
    display: flex;
    flex-flow: column;
    background-color: #f0f2f4;
  }
  .right-header {
    height: 100px;
    line-height: 100px;
    font-size: 24px;
    background-color: #fff;
    color: #1e1f20;
    box-sizing: border-box;
    padding-left: 40px;
  }
  .right-content {
    flex: 1;
    margin: 30px;
    padding: 30px;
    background-color: #fff;
  }
  .el-menu {
    border-right: none;
    width: 300px;
  }
  .el-menu-item,
  .el-submenu__title {
    font-size: 18px;
    background-color: #20252d !important;
  }
  .el-menu-item.is-active {
    background-color: #1c87ff !important;
    color: #fff !important;
  }
  .el-submenu__icon-arrow {
    .el-submenu__icon-arrow {
      font-size: 18px;
      margin-top: -9px;
    }
  }
  .h56 {
    height: 56px;
    line-height: 56px;
  }
  .steps-box {
    max-width: 1100px;
  }

  .search-input {
    float: right;
    padding-right: 30px;
    .el-input {
      width: 400px;
      margin-right: 20px;
    }
  }

  .resource {
    background-color: #20252d;
  }
}
</style>
