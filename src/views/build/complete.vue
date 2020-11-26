<template>
  <div class="complete-demo">
    <Header></Header>

    <!-- 步骤条 -->
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

    <!-- 节点数据 -->
    <div class="nodeData" v-show="false">
      <!-- 模板信息 -->
      <div class="templetData">
        <div class="inblock templet-inner">
          <div class="templet-inner-label">网络状态</div>
          <div class="templet-inner-value">正常</div>
        </div>
        <div class="inblock templet-inner">
          <div class="templet-inner-label">块高度</div>
          <div class="templet-inner-value">15,454,447</div>
        </div>
        <div class="inblock templet-inner">
          <div class="templet-inner-label">总交易次数</div>
          <div class="templet-inner-value">15,454,447</div>
        </div>
      </div>
      <!-- 模板卡片 -->
      <div class="templetCardDiv">
        <!-- 第一张卡片 -->
        <div class="inblock">
          <!-- 单张卡片 -->
          <div class="templetCard1">
            <div class="templetCard-label">
              <div>链码</div>
              <div class="templetCard-value">1</div>
            </div>
          </div>
          <!-- 模板状态 -->
          <div class="templetStatus">
            <!--  正常状态 -->
            <div>
              <div class="inblock">
                <el-tag class="templetTag" type="success" effect="dark"></el-tag>
                <div class="inblock status-label">正常</div>
                <div class="inblock status-value">13</div>
              </div>
              <!-- 详情 -->
              <el-popover
                placement="bottom"
                width="420"
                trigger="click"
                popper-class="detailPopver"
              >
                <div class="peerNode">
                  <div class="peerNodeText">Peer节点</div>
                </div>
                <el-table :data="gridData" :height="296">
                  <el-table-column property="nodeName" label="节点名称" align="center"></el-table-column>
                  <el-table-column property="nodeHeight" label="节点高度" align="center"></el-table-column>
                  <el-table-column property="runStatus" label="运行状态" align="center">
                    <template slot-scope="scope">
                      <el-tag
                        v-if="scope.row.runStatus == '正常'"
                        class="nodeTagSuccess"
                        type="success"
                        effect="dark"
                      ></el-tag>
                      <el-tag v-else class="nodeTagDanger" type="danger" effect="dark"></el-tag>
                      <div class="inblock">{{scope.row.runStatus}}</div>
                    </template>
                  </el-table-column>
                </el-table>
                <el-button slot="reference" type="text" class="inblock status-detail">详情</el-button>
              </el-popover>
            </div>
            <!-- 异常状态 -->
            <div>
              <el-tag class="templetTag" type="danger" effect="dark"></el-tag>
              <div class="inblock status-label">异常</div>
              <div class="inblock status-value">1</div>
            </div>
          </div>
        </div>
        <!-- 第二张卡片 -->
        <div class="inblock">
          <!-- 单张卡片 -->
          <div class="templetCard2">
            <div class="templetCard-label">
              <div>org组织</div>
              <div class="templetCard-value">2</div>
            </div>
          </div>
          <!-- 模板状态 -->
          <div class="templetStatus">
            <!--  正常状态 -->
            <div>
              <div class="inblock">
                <el-tag class="templetTag" type="success" effect="dark"></el-tag>
                <div class="inblock status-label">正常</div>
                <div class="inblock status-value">13</div>
              </div>
              <!-- 详情 -->
              <el-popover
                placement="bottom"
                width="420"
                trigger="click"
                popper-class="detailPopver"
              >
                <div class="peerNode">
                  <div class="peerNodeText">Peer节点</div>
                </div>
                <el-table :data="gridData" :height="296">
                  <el-table-column property="nodeName" label="节点名称" align="center"></el-table-column>
                  <el-table-column property="nodeHeight" label="节点高度" align="center"></el-table-column>
                  <el-table-column property="runStatus" label="运行状态" align="center">
                    <template slot-scope="scope">
                      <el-tag
                        v-if="scope.row.runStatus == '正常'"
                        class="nodeTagSuccess"
                        type="success"
                        effect="dark"
                      ></el-tag>
                      <el-tag v-else class="nodeTagDanger" type="danger" effect="dark"></el-tag>
                      <div class="inblock">{{scope.row.runStatus}}</div>
                    </template>
                  </el-table-column>
                </el-table>
                <el-button slot="reference" type="text" class="inblock status-detail">详情</el-button>
              </el-popover>
            </div>
            <!-- 异常状态 -->
            <div>
              <el-tag class="templetTag" type="danger" effect="dark"></el-tag>
              <div class="inblock status-label">异常</div>
              <div class="inblock status-value">1</div>
            </div>
          </div>
        </div>
        <!-- 第三张卡片 -->
        <div class="inblock">
          <!-- 单张卡片 -->
          <div class="templetCard3">
            <div class="templetCard-label">
              <div>peer节点</div>
              <div class="templetCard-value">14</div>
            </div>
          </div>
          <!-- 模板状态 -->
          <div class="templetStatus">
            <!--  正常状态 -->
            <div>
              <div class="inblock">
                <el-tag class="templetTag" type="success" effect="dark"></el-tag>
                <div class="inblock status-label">正常</div>
                <div class="inblock status-value">13</div>
              </div>
              <!-- 详情 -->
              <el-popover
                placement="bottom"
                width="420"
                trigger="click"
                popper-class="detailPopver"
              >
                <div class="peerNode">
                  <div class="peerNodeText">Peer节点</div>
                </div>
                <el-table :data="gridData" :height="296">
                  <el-table-column property="nodeName" label="节点名称" align="center"></el-table-column>
                  <el-table-column property="nodeHeight" label="节点高度" align="center"></el-table-column>
                  <el-table-column property="runStatus" label="运行状态" align="center">
                    <template slot-scope="scope">
                      <el-tag
                        v-if="scope.row.runStatus == '正常'"
                        class="nodeTagSuccess"
                        type="success"
                        effect="dark"
                      ></el-tag>
                      <el-tag v-else class="nodeTagDanger" type="danger" effect="dark"></el-tag>
                      <div class="inblock">{{scope.row.runStatus}}</div>
                    </template>
                  </el-table-column>
                </el-table>
                <el-button slot="reference" type="text" class="inblock status-detail">详情</el-button>
              </el-popover>
            </div>
            <!-- 异常状态 -->
            <div>
              <el-tag class="templetTag" type="danger" effect="dark"></el-tag>
              <div class="inblock status-label">异常</div>
              <div class="inblock status-value">1</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 区块浏览器 -->
    <div class="blockBrowser">
      <!-- 浏览器扫一扫 -->
      <div class="browserScan inblock">
        <div class="borserScanText">浏览器扫一扫</div>
        <div v-loading="imgLoading" class="browserImg">
          <div id="qrcode"></div>
        </div>
      </div>
      <!-- 区块链浏览器 -->
      <div class="blockText inblock">
        <div class="blockBrowser-title">
          区块链浏览器：
          <el-link class="browserLink" :underline="false">www.lll.con</el-link>
        </div>
        <div class="browserTextDiv">
          <div class="browserText">1、点击[开始挑战]填入个人信息，个人信息上链，系统返回ID哈希，可复制该哈希在区块链浏览器进行查询。</div>
          <div class="browserText">2、向上滑动金钱，滑动次数记录作上链，每次滑动返回一个交易哈希，可复制该哈希在区块链浏览器进行查询。</div>
        </div>
      </div>
    </div>

    <!-- 区块数据 -->
    <div class="blockData">
      <div>
        <el-input
          class="searchHash"
          placeholder="请输ID哈希/区块哈希/交易哈希"
          suffix-icon="el-icon-search"
          v-model="hashSearch"
          v-show="false"
          @keydown.enter.native="jumpHash(hashSearch)"
        ></el-input>
      </div>
      <el-divider class="tableDivider"></el-divider>
      <div class="blockData-table">
        <el-table
          :data="tableData"
          :height="428"
          :header-cell-style="{background:'#FAFAFA',color:'rgba(0, 0, 0, 0.65)'}"
        >
          <el-table-column prop="blockHeight" label="区块高度"></el-table-column>
          <el-table-column prop="formatTime(blockTime)" label="时间">
			<template slot-scope="scope">
				{{formatTime(scope.row.blockTime)}}
			</template>
		  </el-table-column>
          <el-table-column prop="blockSize" label="区块大小(Bytes)"></el-table-column>
          <el-table-column prop="transction" label="交易笔数"></el-table-column>
          <el-table-column prop="blockHash" label="块哈希" width="500">
            <template slot-scope="scope">
              <el-button
                @click="jumpBlockHash(scope.row.blockHash)"
                type="text"
              >{{scope.row.blockHash}}</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>

    <!-- 分页 -->
    <!-- <div class="blockPage">
      <el-pagination background layout="prev, pager, next" :total="tableData.length"></el-pagination>
    </div> -->
  </div>
</template>

<script>
const neffos = require('neffos.js');
import QRCode from 'qrcodejs2'  // 引入qrcode
import * as moment from 'moment';
moment.locale("zh-cn")
export default {
  data() {
    return {
      type: 2, //1 绘制模板 2 搭建模板
      activeStep: 2,
      tableData: [
        // {
        //   blockHeight: "5565",
        //   blockTime: "59 分钟前",
        //   blockSize: "1,721,995",
        //   transction: "1,707",
        //   blockHash:
        //     "0000000000000000e3dda47f8a3e05dd738691764215c1adc219e608fd954",
        // },
        // {
        //   blockHeight: "5565",
        //   blockTime: "59 分钟前",
        //   blockSize: "1,721,995",
        //   transction: "1,707",
        //   blockHash:
        //     "0000000000000000e3dda47f8a3e05dd738691764215c1adc219e608fd954",
        // },
        // {
        //   blockHeight: "5565",
        //   blockTime: "59 分钟前",
        //   blockSize: "1,721,995",
        //   transction: "1,707",
        //   blockHash:
        //     "0000000000000000e3dda47f8a3e05dd738691764215c1adc219e608fd954",
        // },
        // {
        //   blockHeight: "5565",
        //   blockTime: "59 分钟前",
        //   blockSize: "1,721,995",
        //   transction: "1,707",
        //   blockHash:
        //     "0000000000000000e3dda47f8a3e05dd738691764215c1adc219e608fd954",
        // },
        // {
        //   blockHeight: "5565",
        //   blockTime: "59 分钟前",
        //   blockSize: "1,721,995",
        //   transction: "1,707",
        //   blockHash:
        //     "0000000000000000e3dda47f8a3e05dd738691764215c1adc219e608fd954",
        // },
        // {
        //   blockHeight: "5565",
        //   blockTime: "59 分钟前",
        //   blockSize: "1,721,995",
        //   transction: "1,707",
        //   blockHash:
        //     "0000000000000000e3dda47f8a3e05dd738691764215c1adc219e608fd954",
        // },
        // {
        //   blockHeight: "5565",
        //   blockTime: "59 分钟前",
        //   blockSize: "1,721,995",
        //   transction: "1,707",
        //   blockHash:
        //     "0000000000000000e3dda47f8a3e05dd738691764215c1adc219e608fd954",
        // },
        // {
        //   blockHeight: "5565",
        //   blockTime: "59 分钟前",
        //   blockSize: "1,721,995",
        //   transction: "1,707",
        //   blockHash:
        //     "0000000000000000e3dda47f8a3e05dd738691764215c1adc219e608fd954",
        // },
        // {
        //   blockHeight: "5565",
        //   blockTime: "59 分钟前",
        //   blockSize: "1,721,995",
        //   transction: "1,707",
        //   blockHash:
        //     "0000000000000000e3dda47f8a3e05dd738691764215c1adc219e608fd954",
        // },
      ],
      gridData: [
        {
          nodeName: "47.102.015.1",
          nodeHeight: "15875688",
          runStatus: "正常",
        },
        {
          nodeName: "47.102.015.1",
          nodeHeight: "15875688",
          runStatus: "正常",
        },
        {
          nodeName: "47.102.015.1",
          nodeHeight: "15875688",
          runStatus: "异常",
        },
        {
          nodeName: "47.102.015.1",
          nodeHeight: "15875688",
          runStatus: "异常",
        },
        {
          nodeName: "47.102.015.1",
          nodeHeight: "15875688",
          runStatus: "异常",
        },
        {
          nodeName: "47.102.015.1",
          nodeHeight: "15875688",
          runStatus: "异常",
        },
      ],
      IdHash: "0000000000000000019ddcc0fe0777a49a0e16f13c9d3235971096fbac4b17b4 ",
      hashSearch: "",
      drawTemplateTime:null,        //绘制模板建议用时
      clientUrl:'',                 //游戏地址
      imgLoading:true,              //游戏二维码加载

    };
  },
  created() {
    this.drawTemplet();
  },
  mounted(){
    this.drawTemplet();

    // product
    this.getProcess();
    this.handleJump();

    // for dev
    // this.qrcode();
    // this.createWs();

  },
  destroyed(){
    this.closeWs();
  },
  methods: {
	receiveData(blockData){
		this.tableData.unshift({
			blockHeight: blockData.height,
			blockTime: blockData.blockTime,
			blockSize: blockData.blockSize,
			transction: blockData.transction,
			blockHash: blockData.hash,
		});
	},
	async createWs() {
		// var wsUrl = this.clientUrl + "/websocket"
    // wsUrl = wsUrl.replace(/(http)(s)?\:\/\//, "ws$2://");
    var wsPort = new URL(this.clientUrl).port;
		try {
			// const conn = await neffos.dial("ws://127.0.0.1:8008/wss/", {
			const conn = await neffos.dial("/wss/", {
				default: {
					_OnNamespaceConnected: (ns, msg) => {
						if (ns.conn.wasReconnected()) {
							console.log("re-connected after " + ns.conn.reconnectTries.toString() + " trie(s)");
						}
						ns.joinRoom("Platform");
						window['wsConn'] = ns.conn;
						console.log("[ws.Connected]",msg);
					},
					_OnNamespaceDisconnect: (ns, msg) => {
						console.log("[ws.Disconnect]",msg);
					},
					onNewBlock:  (ns, msg) => {
						var blockData = JSON.parse(msg.Body);
						console.log("[ws.NewBlock]",blockData);
						this.receiveData(blockData);
					},
					onLatestBlcok:  (ns, msg) => {
						var blockList = JSON.parse(msg.Body);
						console.log("[ws.LatestBlcok]",blockList);
						blockList.forEach(blockData => {
							this.tableData.push({
								blockHeight: blockData.height,
								blockTime: blockData.blockTime,
								blockSize: blockData.blockSize,
								transction: blockData.transction,
								blockHash: blockData.hash,
							});
						});
					},
				},
			}, {
        reconnect: 5000,
        protocols: wsPort,
      })
			conn.connect("default");
		} catch (err) {
			console.log("[createWs]",err);
		}
	},
	formatTime(blockTime){
		return moment(blockTime * 1000).fromNow();
	},
	closeWs() {
		console.log("[closeWs]",window['wsConn']);
	},
    // 跳转块hash
    jumpBlockHash(block) {
      console.log("jumpBlock", block);
      this.$router.push({ path: "/searchBlockHash", query: { block: block } });
    },
    // 跳转IdHash
    jumpHash(idHash) {
      if (idHash == "") {
        this.$message({
          message: "无此hash",
          type: "info",
        });
      } else {
        this.$router.push({ path: "/searchIdHash", query: { idHash: idHash } });
      }
    },
    // 获取体验价及模板信息
    drawTemplet(){
        var that = this;
        this.$axios.get('/exp-guide/api/configure/config').then( res => {
            if(res && res.data && res.data.code == 200){
              that.drawTemplateTime = res.data.data.drawTemplateTime;
            }
        }).catch(error =>{
          if(error.request.status == 401){
            this.$router.push({path:'/experience'})
          }
        });
    },
    // 流程接口
    async getProcess(){
      try {
        var res = await this.$axios.get('/exp-guide/api/process')
        if(res && res.data && res.data.code == 200){
          this.templateId = res.data.data.templateId;
          if(res.data.data && res.data.data.state == 3){
            this.activeStep = res.data.data.state;
            this.clientUrl = res.data.data.clientUrl;
            window['clientUrl'] = this.clientUrl;
                  document.getElementById("qrcode").innerHTML = "";
            this.qrcode();
            this.createWs();
          }
        }
      } catch (error) {
        if(error.request.status == 401){
          this.$router.push({path:'/experience'})
        }
      }
    },
    // 二维码窗口设置
    qrcode() {
        let qrcode = new QRCode('qrcode', {
            width: 156,  
            height: 156,
            text: this.clientUrl, // 二维码地址
        });
        this.imgLoading = false;
    },
    // 跳转控制
    handleJump(){
      if(sessionStorage.getItem('payState') == 0){
        this.$router.push({path:'/experience'});
      }
      if(sessionStorage.getItem('payState') == 1){
        this.$router.push({path:'/templet'});
      }
      if(sessionStorage.getItem('payState') == 3){
        // this.$router.push({path:'/complete'});
      }
    }
  },
};
</script>

<style lang="less">
.complete-demo {
  width: 1903px;
  background: rgba(245, 246, 247, 1);
  // 进度条边缘
  .step-demo {
    margin-top: 80px;
    margin-bottom: 80px;
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
  // 节点数据
  .nodeData {
    width: 1618px;
    height: 454px;
    background: #fff;
    margin-left: 153px;
    border-radius: 4px;
    border: 1px solid rgba(178, 178, 178, 0.3);
    .templetData {
      margin-left: 100px;
      padding-top: 60px;
      .templet-inner {
        text-align: left;
        margin-right: 210px;
      }
      .templet-inner-label {
        font-size: 14px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: rgba(40, 40, 40, 0.6);
        line-height: 20px;
        margin-bottom: 12px;
      }
      .templet-inner-value {
        font-size: 24px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: rgba(40, 40, 40, 1);
        line-height: 33px;
      }
    }
    .templetCardDiv {
      margin-left: 100px;
      margin-top: 50px;
      .templetCard1 {
        width: 260px;
        height: 150px;
        background: linear-gradient(
          180deg,
          rgba(0, 210, 227, 1) 0%,
          rgba(21, 191, 249, 1) 100%
        );
        border-radius: 4px;
        margin-right: 319px;
      }
      .templetCard2 {
        width: 260px;
        height: 150px;
        background: linear-gradient(
          180deg,
          rgba(74, 137, 255, 1) 0%,
          rgba(36, 84, 250, 1) 100%
        );
        border-radius: 4px;
        margin-right: 319px;
      }
      .templetCard3 {
        width: 260px;
        height: 150px;
        background: linear-gradient(
          180deg,
          rgba(170, 115, 249, 1) 0%,
          rgba(136, 110, 248, 1) 100%
        );
        border-radius: 4px;
      }
      .templetCard-label {
        text-align: center;
        padding-top: 43px;
        color: #fff;
      }
      .templetCard-value {
        margin-top: 12px;
      }
      .templetTag {
        width: 13px;
        height: 13px;
        padding-right: 0px;
        padding-left: 0px;
        margin-top: 24px;
      }
      .templetStatus {
        width: 260px;
      }
      .status-label {
        margin-left: 6px;
        font-size: 14px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: rgba(40, 40, 40, 0.6);
        line-height: 20px;
      }
      .status-value {
        margin-left: 6px;
        font-size: 14px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: rgba(40, 40, 40, 0.6);
        line-height: 20px;
      }
      .status-detail {
        width: 28px;
        height: 20px;
        font-size: 14px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: rgba(96, 183, 255, 1);
        line-height: 20px;
        margin-top: 8px;
        float: right;
      }
    }
  }
  // 区块链浏览器
  .blockBrowser {
    width: 1618px;
    height: 309px;
    background: #fff;
    margin-left: 153px;
    margin-top: 30px;
    border-radius: 4px;
    border: 1px solid rgba(178, 178, 178, 0.3);
    // 区块链浏览器标题
    .blockBrowser-title {
      font-size: 16px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 600;
      color: rgba(40, 40, 40, 1);
      line-height: 25px;
      visibility: hidden;
      // 区块链浏览器链接
      .browserLink {
        font-size: 15px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        line-height: 25px;
        color: rgba(96, 183, 255, 1);
      }
    }
    // 区块链浏览器信息盒子
    .browserTextDiv {
      margin-top: 28px;
      // 区块链浏览器信息盒子描述
      .browserText {
        margin-bottom: 16px;
      }
    }
    // 浏览器扫描盒子
    .browserScan {
      margin-top: 60px;
      text-align: center;
      margin-left: 100px;
      // 浏览器扫描文本:浏览器扫一扫
      .borserScanText {
        font-size: 14px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: rgba(40, 40, 40, 1);
        line-height: 20px;
        margin-bottom: 13px;
      }
      // 浏览器图片
      .browserImg {
        width: 156px;
        height: 156px;
        background: rgba(255, 255, 255, 1);
        box-shadow: 0px 2px 9px 0px rgba(210, 210, 210, 0.5);
        border-radius: 8px;
      }
    }
    // 浏览器描述信息盒子
    .blockText {
      float: right;
      margin-right: 587px;
      margin-top: 123px;
    }
  }
  // 区块链详细数据盒子
  .blockData {
    width: 1618px;
    height: 632px;
    background: rgba(255, 255, 255, 1);
    border-radius: 4px;
    border: 1px solid rgba(178, 178, 178, 0.3);
    margin-left: 153px;
    margin-top: 30px;
    .searchHash {
      float: right;
      margin-top: 28px;
      margin-right: 45px;
    }
    .el-input {
      width: 473px;
      height: 45px;
      background: rgba(255, 255, 255, 1);
      border-radius: 4px;
      // border:1px solid rgba(217,217,217,1);
    }
    .el-input__inner {
      width: 473px;
      height: 45px;
      background: rgba(255, 255, 255, 1);
      border-radius: 4px;
      border: 1px solid rgba(217, 217, 217, 1);
    }
    .el-divider--horizontal {
      height: 2px;
      background: rgba(242, 242, 242, 1);
      margin-top: 100px;
    }
    .blockData-table {
      width: 1526px;
      height: 463px;
      margin-left: 47px;
    }
  }
  // 分页样式
  .blockPage {
    float: right;
    margin-right: 123px;
    margin-top: 30px;
    margin-bottom: 49px;
    .el-pagination.is-background .el-pager li {
      margin: 0 5px;
      background-color: #fff;
      color: #606266;
      min-width: 30px;
      border-radius: 2px;
    }
    .el-pagination.is-background .btn-prev:disabled {
      background-color: #fff;
      color: #c0c4cc;
    }
    .el-pagination.is-background .btn-prev {
      background-color: #fff;
      color: rgba(0, 0, 0, 0.65);
    }
    .el-pagination.is-background .btn-next:disabled {
      background-color: #fff;
      color: #c0c4cc;
    }
    .el-pagination.is-background .btn-next {
      background-color: #fff;
      color: rgba(0, 0, 0, 0.65);
    }
    .el-pagination.is-background .el-pager li.active {
      background-color: rgba(248, 167, 71, 1);
      color: #fff;
      font-weight: 200;
    }
    .el-pagination.is-background .el-pager li {
      background-color: #fff;
      border-radius: 6px;
    }
  }
}
.detailPopver {
  width: 420px;
  height: 346px;
  background: rgba(255, 255, 255, 1);
  border-radius: 4px;
  border: 1px solid rgba(233, 239, 244, 1);
  padding: 0px;
  .nodeTagSuccess {
    width: 6px;
    height: 6px;
    background: rgba(82, 196, 26, 1);
    padding: 0px;
    margin-right: 10px;
  }
  .nodeTagDanger {
    width: 6px;
    height: 6px;
    background: rgba(245, 34, 45, 1);
    padding: 0px;
    margin-right: 10px;
  }
}
.peerNode {
  width: 420px;
  height: 50px;
  background: rgba(247, 251, 254, 1);
  border-radius: 4px 4px 0px 0px;
  border: 1px solid rgba(233, 239, 244, 1);
  text-align: center;
  .peerNodeText {
    font-size: 14px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: rgba(40, 40, 40, 1);
    line-height: 20px;
    margin-top: 16px;
  }
}
</style>