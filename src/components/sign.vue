<template>
  <div class="components-sign">
    <el-dialog :title="titleName"
               :visible.sync="visible"
               width="35%"
               center
               @close="handleColse">
      <div class="text-center">
        <div>
          <slot name="tips">
            <div v-if="$store.state.currentLanguage == 'zh'"
                 class="public-QR-tips"
                 slot="tips"> 请使用MyBitt钱包进行签名确认，<span class="text-blue pointer"
                    @click="$utils.handleToWallet($router)">点击下载MyBitt钱包</span>
            </div>
            <div v-else
                 class="public-QR-tips"
                 slot="tips"> 
                 Please use MyBitt wallet to sign the contract and confirm.<span class="text-blue pointer"
                    @click="$utils.handleToWallet($router)"> Download MyBitt wallet immediately.</span>
            </div>
          </slot>
        </div>

        <div class="QR-box">
          <img :src="SignQRCodeImg"
               v-show="SignQRCodeImg" alt="UDO_通用型数字化开放平台_区块链体验仿真_搭链体验_创客区块链">
        </div>
      </div>
      <span slot="footer"
            class="dialog-footer">
        <el-button type="primary"
                   :loading="loadingBtn"
                   @click="confirmStart">{{ $t("btn.sign") }}</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  props: {
    titleName: {
      type: String,
      default: "启动合约"
    },
    // 控制二维码弹框显示隐藏
    signVisible: {
      type: Boolean,
      default: false
    },
    // 需要生成二维码的参数
    params: {
      type: Object,
      default: () => {
        return null;
      }
    },
    callback: {
      type: Function
    }
  },
  data() {
    return {
      timer: null, // 定时器
      SignQRCode: "", // 实际给后台的二维码参数
      SignQRCodeImg: "", // 生成的二维码图片
      visible: this.signVisible,
      loadingBtn: false
    };
  },
  watch: {
    //  外面给到里面
    signVisible(val) {
      this.visible = val;
    },
    // 里面给到外面
    SignQRCode(val) {
      this.$emit("SignQRCode", val);
    },
    // 如果传入参数,则生成二维码,弹出弹框
    params(val, old) {
      if (!val) return;
      this.$api.addSignData(val).then(res => {
        if (res.data.status) {
          if (res.data && res.data.data) {
            this.SignQRCode = res.data.data;
            this.$QRCode.toDataURL(res.data.data).then(url => {
              this.SignQRCodeImg = url;
              this.$emit("sign-visible", true);
              // 检查是否签名
              this.autoConfirmStart();
            });
          }
        }
      });
    }
  },
  destroyed() {
    this.timer && clearInterval(this.timer);
  },
  methods: {
    handleColse() {
      this.timer && clearInterval(this.timer);
      this.$emit("sign-visible", false);
    },
    autoConfirmStart() {
      this.timer && clearInterval(this.timer);
      this.timer = setInterval(() => {
        this.$api.checkSign(this.SignQRCode).then(res => {
          if (res.data.status) {
            clearInterval(this.timer);
            // 检查签名成功时的回调函数
            this.callback(res.data.msg);
            this.$emit("sign-visible", false);
          }
        });
      }, 5000);
    },
    confirmStart() {
      this.timer && clearInterval(this.timer);
      this.loadingBtn = true;
      this.$api
        .checkSign(this.SignQRCode)
        .then(res => {
          // 检查签名成功时的回调函数
          this.callback(res.data.msg);
          this.$emit("sign-visible", false);
        })
        .catch(err => {
          err.data.msg && this.$message.error(err.data.msg);
          this.autoConfirmStart();
        })
        .finally(() => {
          this.loadingBtn = false;
        });
    }
  }
};
</script>

<style  lang="less" scoped>
.components-sign {
  .QR-box {
    display: inline-block;
    width: 200px;
    height: 200px;
    background: rgba(32, 37, 45, 1);
    border-radius: 5px;
    img {
      height: 100%;
      width: 100%;
    }
  }
}
</style>
