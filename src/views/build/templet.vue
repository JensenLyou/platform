<template>
  <div class="build-demo">
    <Header ref="myHeader"></Header>

    <!-- 进度条 -->
    <div class="panel step-demo">
      <el-steps
        space="100%"
        class="templetSteps"
        :active="activeStep"
        finish-status="success"
        :align-center="true"
      >
        <el-step class="templetStep" title="绘制网络模板" :description="'建议用'+ drawTemplateTime +'时分钟'"></el-step>
        <el-step class="templetStep" title="部署执行" description=""></el-step>
        <el-step class="templetStep" title="游戏体验" description=""></el-step>
        <!-- <el-step class="templetStep" title="部署执行" description="用时10分钟"></el-step>
        <el-step class="templetStep" title="游戏体验" description="建议用时20分钟"></el-step> -->
      </el-steps>
    </div>
    <!-- 虚拟机 -->
    <div class="templet-demo">
      <Virtual></Virtual>
    </div>

    <!-- 模板 -->
    <div class="graph-demo" v-if="state==1" v-show="true">
      <iframe :src="originUrl" width="100%" height="800px" id="graph-demo" style="overflow:hidden"></iframe>
      <el-button @click="submitGraphInfo" class="next-step" :loading="nextStepStatus">下一步</el-button>
    </div>

    <!-- 搭链 -->
    <div class="building-demo" v-if="state==2" v-show="true">
      <!-- 正在搭链 -->
      <div class="building-title">联盟链正在搭建</div>
      <div class="vertical-step">
        <el-steps v-loading="stepLoading" direction="vertical" :active="currentStage" finish-status="success">
          <el-step :title="item.description" v-for="item in stages"></el-step>
          <!-- <el-step title="服务器启动完成"></el-step>
          <el-step title="安装基础环境完成"></el-step>
          <el-step title="证书配置完成"></el-step>
          <el-step title="创建创世区块，锚节点，生成通道配置信息完成"></el-step>
          <el-step title="正在启动fabrci网络中..."></el-step>
          <el-step title="节点加入通道"></el-step> -->
        </el-steps>
      </div>
    </div>

    <!-- <Footer></Footer> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      type: 1, //1 绘制模板 2 搭建模板
      nextStepStatus: false, 
      activeStep: 1,
      activeBuild: 1,
      json_info: {},
      // originUrl: "http://192.168.1.164:7777", //开发环境
      // originUrl: "http://192.168.1.231:8888",    // 测试地址
      // originUrl: "http://119.45.211.64:30003",     // 生产地址
      originUrl: "../graph/index.html",     // 生产地址
      version: "V1.0.0",
      templateId: 1,                              //模板ID
      state:1,                                    //流程状态:0.待支付，1.绘制模板，2.编排任务，3.体验，4.结束
      orderNo:null,                               //订单号
      drawTemplateTime:null,                      //绘制模板时间
      buildTimer:null,                            //构建模板定时器
      currentStage:0,                             //联盟链当前到达步骤
      stages:[],                                  //步骤数组
      stepLoading: true,                          //步骤加载
      iframeLoading:false,                        //模板加载
      count:0,                                    //计数
      num:0,
    };
  },
  created() {
    if (this.currentStage == 7) {
      this.$router.push({ path: "/complete" });
    }
    this.getProcess();
    this.drawTemplet();
    this.handleJump();
  },
  async mounted() {
    this.listenEvent();
    await this.getProcess();
    // console.log('myheader:',this.$refs.myHeader.isLogin);
    this.drawTemplet();
    if(sessionStorage.getItem('payState') == 2){
      this.buildTimer = setInterval(() => {
          setTimeout(() => {
            // 启动模板成功调用获取此流程接口
            this.details();
          }, 0);
        },5000);
    }
  },
  methods: {
    listenEvent() {
      //监听message事件
      window.addEventListener("message", this.receiveMessage, false);
    },
    //回调函数
    receiveMessage(event) {
      // 如果有其他的提示信息处理,在此调用方法
      if (event.origin !== this.originUrl) {
        console.log('event:',event);
        // return;
      }
      console.log("receiveMessage-platform", event);
      console.log('receiveMessage:',event.data.status);
      if (event.data.status) {
        this.json_info = JSON.parse(event.data.json_info);
        console.log("this.json_info", this.json_info);
        // 调取相应接口
        this.$axios
          .put(
            "/exp-layout/template/" +
              this.version +
              "/" +
              this.templateId +
              "/sync",
            this.json_info
          )
          .then((res) => {
            if (res.data.code == 200) {
              console.log('num',this.num);
              if(this.num < 1){
                this.startTemplet();
                this.nextStepStatus = false;
              }
            } else if (res.data.code == 500) {
              this.$message({
                message: res.data.msg,
                type: "error",
              });
            }
          })
          .catch((res) => {
            this.$message({
              message: "提交异常",
              type: "error",
            });
          });
      } else {
        this.nextStepStatus = false;
      }
    },
    // 点击下一步
    submitGraphInfo() {
      this.nextStepStatus = true;
      //获取iframe元素
      const iframe = document.getElementById("graph-demo");
      //iframe发送一条消息
      iframe.contentWindow.postMessage("getJsonInfo", 'https://www.udochain.cn');
    },
    // 调取启动编排服务
    async startTemplet(){
      var that = this;
      // 记录调用次数
      that.num = that.num++;
      var url = "/exp-guide/api/process/"+ that.orderNo +"/layout"
      console.log('启动编排:',url);
      var res = await that.$axios.put(url);
      await that.getProcess();
      if(res.data.code == 200 && that.state == 2){
        // 显示联盟链正在搭建窗口
        that.type = 2;
        console.log('type',that.type);
        that.buildTimer = setInterval(() => {
          setTimeout(() => {
            // 启动模板成功调用获取此流程接口
            that.details();
          }, 0);
        },5000);
      }
      if(res.data.code == 500){
        that.$message({
          message:res.data.msg,
          type:'error',
        })
      }
    },
    // 流程接口
    async getProcess(){
      try {
        var res = await this.$axios.get('/exp-guide/api/process')
        if(res && res.data && res.data.code == 200){
          this.templateId = res.data.data.templateId;
          this.state = res.data.data.state;
          window.sessionStorage.setItem('payState',this.state);
          this.orderNo = res.data.data.orderNo;
          if(res.data.data.state == 3){
            this.$router.push({path:'/complete'})
          }
        }
      } catch (error) {
        console.log('Err',error.request);
        if(error.request.status == 401){
          this.$router.push({path:'/experience'})
        }
      }
    },
    // 获取体验价
    drawTemplet(){
        var that = this;
        this.$axios.get('/exp-guide/api/configure/config').then( res => {
            if(res && res.data && res.data.code == 200){
              that.drawTemplateTime = res.data.data.drawTemplateTime;
            }
        }).catch(err => {
          if(err.request.status == 401){
            that.$router.push({path:'/experience'});
          }
        })
    },
    // 获取编排进度
    async details(){
      var that = this;
      var url = '/exp-layout/api/stage/details?orderNo=' + that.orderNo; 
      var res = await that.$axios.get(url);
      console.log('resDetails:',res);
      if(res.status == 200){
        // 到达部署执行步骤
        that.activeStep = 2;
        that.stepLoading = false;
        that.stages = res.data.data.stages;
        that.currentStage = res.data.data.currentStage;
        if(that.currentStage == that.stages.length){
          clearInterval(that.buildTimer);
          that.$router.push({path:'/complete'});
        }
        // 刷新调用固定次数,如果还不行就强制退出更新
        that.count++;
        console.log('count:',that.count);
        if(this.count == 100){
          clearInterval(that.buildTimer);
        }
      }
      if(res.data.code == 500){
        that.$message({
          message:res.data.msg,
          type:error
        })
      }
    },
    // 跳转控制
    handleJump(){
      if(sessionStorage.getItem('payState') == 0){
        this.$router.push({path:'/experience'});
      }
      if(sessionStorage.getItem('payState') == 1){
        // this.$router.push({path:'/templet'});
      }
      if(sessionStorage.getItem('payState') == 3){
        this.$router.push({path:'/complete'});
      }
    }
  },
};
</script>

<style lang="less">
.build-demo {
  width: 1903px;
  background: rgba(245, 246, 247, 1);
  // 虚拟机
  .templet-demo {
    text-align: center;
  }
  // 进度条边缘
  .step-demo {
    margin-top: 80px;
    margin-bottom: 80px;
  }
  // 模板
  .graph-demo {
    width: 1620px;
    margin-left: 150px;
    margin-top: 30px;
    height: 1000px;
    text-align: center; //水平居中
    // background: #fff;
    // 下一步按钮
    .next-step {
      width: 100%;
      font-size: 16px;
      color: rgba(255, 255, 255, 1);
      margin: 40px auto;
      width: 176px;
      height: 40px;
      background: rgba(248, 167, 71, 1);
    }
  }

  // 搭建进度条
  .building-demo {
    width: 1620px;
    height: 574px;
    margin-left: 150px;
    margin-top: 30px;
    background: #fff;
    margin-bottom: 50px;
    text-align: center;
    // 搭建标题
    .building-title {
      font-size: 21px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 600;
      color: rgba(40, 40, 40, 1);
      line-height: 29px;
      padding-top: 50px;
    }
    // 垂直步骤条
    .vertical-step {
      margin-top: 120px;
      margin-left: 60px;
      height: 300px;
      .el-step__icon {
        width: 22px;
        height: 22px;
        border: 1px solid #cccccc;
        background: #fff;
      }
      .el-step__icon .is-text {
        width: 22px;
        height: 22px;
        border: 1px solid rgba(248, 167, 71, 1);
      }
      .el-step__head.is-success {
        color: #f8a747;
      }
      .el-step__head.is-success .el-step__icon.is-text {
        border: 1px solid rgba(248, 167, 71, 1);
      }
      .el-step__head.is-success .el-step__icon .el-step__icon-inner {
        color: #f8a747;
      }
      .el-step__title {
        font-size: 14px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: rgba(40, 40, 40, 0.6);
        line-height: 21px;
      }
      .el-step__head.is-wait .el-step__icon .el-step__icon-inner {
        color: #cccccc;
      }
      .el-step__title.is-process {
        font-size: 14px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 600;
        color: rgba(40, 40, 40, 1);
        line-height: 21px;
      }
      .el-step__head.is-process .el-step__icon {
        border: 1px solid #f8a747;
        background: #f8a747;
      }
      .el-step__head.is-process .el-step__icon .el-step__icon-inner {
        font-size: 12px;
        font-weight: 400;
        font-family: HelveticaNeue;
        color: rgba(255, 255, 255, 1);
        line-height: 18px;
      }
      .el-step__line {
        margin-right: 0px;
        left: 11px;
        height: 25px;
        top: 25px;
      }
      .el-step__head.is-success .el-step__line {
        background-color: #f8a747;
      }
      .el-step__head.is-success .el-step__line-inner {
        border-color: #f8a747;
      }
    }
  }
  // 水平进度条
  .templetSteps {
    .templetStep {
      .el-step__head.is-success .el-step__icon {
        color: #f8a747;
        border-color: #f8a747;
        background: #f8a747;
      }
      .el-step__head.is-wait .el-step__icon {
        border-color: rgba(0, 0, 0, 0.15);
        background-color: #fff;
      }
      .el-step__icon.is-text {
        border-color: rgba(0, 0, 0, 0.15);
      }
      .el-step__head .el-step__icon .el-step__icon-inner {
        color: rgba(0, 0, 0, 0.25);
      }
      .el-step__head.is-success .el-step__icon .el-step__icon-inner {
        color: #fff;
      }
      .el-step__head .el-step__icon {
        width: 32px;
        height: 32px;
      }
      .el-step__title {
        font-size: 15px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: rgba(40, 40, 40, 1);
        line-height: 24px;
      }
      .el-step__title.is-process {
        font-weight: 700;
        color: #303133;
      }
      .el-step__description {
        font-size: 10px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: rgba(40, 40, 40, 0.3);
        line-height: 24px;
      }
      .el-step__line {
        position: absolute;
        border-color: #c0c4cc;
        background-color: #c0c4cc;
        margin-right: 0px;
        width: 300px;
        right: 100px;
        left: 240px;
        top: 17px;
      }
    }
  }
}
</style>