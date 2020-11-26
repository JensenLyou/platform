<template>
  <div class="public-imgLeft">
    <div class="animated">
      <slot name="left"></slot>
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less">
.public-imgLeft {
  > div {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 150px;
  }
  .content-left {
    margin: 0px 50px;
  }
  .content-right {
    width: 600px;
    text-align: left;
    margin: 0 50px;
  }

  .title {
    font-size: 36px;
    color: #1f1f1f;
    margin-bottom: 40px;
  }

  .des {
    margin-bottom: 50px;
  }
}
</style>
