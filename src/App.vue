<template>
  <div id="app">

    <div class="top-part">
      <div class="main">
        <router-view />
      </div>
    </div>

  </div>
</template>

<script>
import Header from "@/components/header.vue";
import Footer from "@/components/footer";
export default {
  name: "home",
  components: {
    Header,
    Footer
  },
  watch: {
    $route: {
      handler: function(val, oldVal) {
        window.scrollTo({ top: 0 });
      },
      deep: true
    }
  }
};
</script>

<style lang="less">
#app {
  display: flex;
  flex-flow: column;
  min-height: 100vh;
  box-sizing: border-box;
  padding-top: 80px;
  background-color: #fff;
  .top-part {
    flex: 1;
    // background-color: blueviolet;
    flex: 1;
    display: flex;
    flex-flow: column;
  }
  .main {
    flex: 1;
    display: flex;
    flex-flow: column;
  }
}
</style>
