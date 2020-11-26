<template>
  <div class="platformHeader"
       :class="{'home-header': $route.name === 'home'}">
    <div class="text-right">
      <div class="header-item"
           :class="{ 'active': $route.path.indexOf('home') > -1}"
           @click="$router.push({path: '/home' })">{{$t("web.HomePage")}}</div>
      <div class="header-item"
           :class="{ 'active': $route.path.indexOf('case') > -1}"
           @click="$router.push({path: '/case' })">{{$t("web.TechnicalSolution")}}</div>
      <div class="header-item"
             :class="{ 'active': $route.path.indexOf('example') > -1}"
             @click="$router.push({path: '/example' })">{{$t("web.Cases")}}</div>
      <div class="header-item"
           :class="{ 'active': $route.path.indexOf('developer') > -1}"
           @click="ToDeveloperFuc">{{ $t("page.DeveloperPlatform")}}</div>
      <div class="header-item"
           @click="$utils.ToBrowserFuc">{{$t("web.BlockchainBrowser")}}</div>
      <div class="header-item"
           :class="{ 'active': $route.path.indexOf('wallet') > -1}"
           @click="$router.push({path: '/wallet' })">{{$t("web.Wallet")}}</div>
      <div class="header-item">
        <el-dropdown trigger="hover"
                     @command="handleCommand">
          <span class="el-dropdown-link">
            {{ $store.state.currentLanguage | languageText }}<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="zh">简体中文</el-dropdown-item>
            <el-dropdown-item command="en">English</el-dropdown-item>
            <!-- <el-dropdown-item command="zhtw">繁體</el-dropdown-item> -->
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: "2"
    };
  },
  methods: {
    handleCommand(command) {
      this.$store.commit("set_currentLanguage", command);
      this.$store.commit("SET_LANGUAGE", command);
      this.$router.push("/developer/create");
      this.$i18n.locale = command;
    },
    ToDeveloperFuc() {
      let { href } = this.$router.resolve({ path: "/developer" });
      window.open(href, "_blank");
    }
  }
};
</script>

<style lang="less">
.platformHeader {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 80px;
  line-height: 80px;
  color: #99a5c5;
  background-color: rgba(30, 62, 104, 0.7);
  z-index: 20;
  .el-dropdown {
    color: #99a5c5;
    &:hover {
      color: #fff;
    }
  }

  .header-item {
    display: inline-block;
    margin: 0 30px;
    cursor: pointer;
    &:hover {
      color: #fff;
    }
    &.active {
      color: #fff;
    }
  }
  .el-dropdown-link {
    display: inline-block;
    height: 100%;
  }
}
</style>
