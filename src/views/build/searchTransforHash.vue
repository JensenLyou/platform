<template>
  <div class="transforHash">
    <Header></Header>
    
    <!-- 页头+搜索输入框 -->
    <div class="transforPanel">
      <!-- 页头 -->
      <div class="inblock headerDiv">
        <el-button type="text" class="inblock browserHeader" @click="jumpBrowser">浏览器 </el-button>/
        <el-button type="text" class="inblock blockHeader" @click="jumpBlockHash(transfor)">块 - {{transfor}}</el-button>/
        <div class="inblock ">交易 {{transfor}}</div>
      </div>
      <!-- 搜索输入框 -->
      <div class="inblock searchHash">
        <el-input
          placeholder="请输ID哈希/区块哈希/交易哈希"
          suffix-icon="el-icon-search"
          v-model="hashSearch">
        </el-input>
      </div>
    </div>

    <!-- 摘要 -->
    <div class="transforPanel">
      <!-- 摘要标题 -->
      <div class="summaryBlock">
        <div class="summaryTitle">摘要</div>
      </div>
      <!-- 区块内容 -->
      <div class="blockContent">
        <!-- 区块基本信息 -->
        <div class="inblock blockBase">
          <!-- 标签 -->
          <div class="blockLabel-div inblock">
            <div class="blockLabel">区块高度</div>
            <div class="blockLabel">出块时间</div>
            <div class="blockLabel">区块大小（Bytes）</div>
            <div class="blockLabel">交易笔数</div>
          </div>
          <!-- 值 -->
          <div class="blockLabel-right inblock">
            <div class="blockValue">1155</div>
            <div class="blockValue">2020-04-15 19:18:15</div>
            <div class="blockValue">15,1999 Bytes</div>
            <div class="blockValue">110</div>
          </div>
        </div>
        <!-- 分割线 -->
        <div class="inblock blockLine-Location">
          <el-divider class="blockLine" direction="vertical"></el-divider>
        </div>
        <!-- 块跳转 -->
        <div class="inblock blockJump-Location">
          <!-- 区块哈希 -->
          <div class="blockJump-bottom">
            <!-- 标签 -->
            <div class="inblock blockHash-label">区块哈希</div>
            <!-- 值 -->
            <el-button type="text" class="inblock blockHash-value" @click="jumpBlockHash(jump)">{{jump}}</el-button>
          </div>
          <!-- 前块哈希 -->
          <div class="blockJump-bottom">
            <!-- 标签 -->
            <div class="inblock blockHash-label">前一个块</div>
            <!-- 值 -->
            <el-button type="text" class="inblock blockHash-value" @click="jumpBlockHash(jump)">{{jump}}</el-button>
          </div>
          <!-- 后块哈希 -->
          <div class="blockJump-bottom ">
            <!-- 标签 -->
            <div class="inblock blockHash-label">后一个块</div>
            <!-- 值 -->
            <el-button type="text" class="inblock blockHash-value" @click="jumpBlockHash(jump)">{{jump}}</el-button>
          </div>
        </div>
      </div>
    </div>
    
    <!-- 交易 -->
    <div class="transforPanel">
      <!-- 交易标题 -->
      <div class="summaryBlock">
        <div class="summaryTitle">交易</div>
      </div>
      <!-- 交易hash基本信息 -->
      <div class="inblock transforArea">
        <!-- 交易hash值 -->
        <div class="hashValue">
          47304402204e67954b3186515433b92c43d85d7534bdcefc1e61b0cd0f88252384c9e9322f02203d388dead659e3bf6cad72417bd0d6654b72c070c1f9d076122b0ae75f20b07c01210253bd6c72cada16f71f6253e66edd1fefa0f04046396af93df4ad8fc267d115ab
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return{
		hashSearch:null,
		transfor:'--',
		jump:'0000000000000000019ddcc0fe0777a49a0e16f13c9d3235971096fbac4b17b4',
    };
  },
  created(){
	console.log('block',this.$route.query.block);
	this.transfor = this.$route.query.transfor;
	if(window['clientUrl']){
		this.queryTransforDetail();
	} else {
		this.getClientUrl();
	}
  },
  methods: {
	queryTransforDetail(){

	},
	async getClientUrl(){
		try {
			var res = await this.$axios.get('/exp-guide/api/process')
			if(res && res.data && res.data.code == 200){
				if(res.data.data && res.data.data.state == 3){
					window['clientUrl'] = res.data.data.clientUrl;
					this.queryTransforDetail();
				}
			}
		} catch (error) {
			if(error.request.status == 401){
				this.$router.push({path:'/experience'})
			}
		}
	},
    jumpBlockHash(block){
      console.log('jumpBlock',block)
      this.$router.push({path:'/searchBlockHash', query: { block: block }})
    }
  },
}
</script>

<style lang="less">
.transforHash{
  width: 1903px;
  height: 900px;
  background:rgba(245,246,247,1);
  .transforPanel{
    width: 1618px;
    margin-left: 151px;
  }
  // 页头跳转盒子
  .headerDiv{
    margin-top: 83px;
    // 浏览器跳转
    .browserHeader{
      font-size:14px;
      font-family:PingFangSC-Regular,PingFang SC;
      font-weight:400;
      color:rgba(96,183,255,1);
      line-height:20px;
      margin-right: 3px;
    }
    // 区块信息
    .blockHeader{
      font-size:14px;
      font-family:PingFangSC-Regular,PingFang SC;
      font-weight:400;
      line-height:20px;
      margin-left: 0;
    }
  }
  // 页头搜索盒子
  .searchHash{
    float: right;
    .el-input {
      width:473px;
      height:45px;
      background:rgba(255,255,255,1);
      border-radius:4px;
      border:1px solid rgba(178,178,178,0.3);
      border-top: none;
      border-left: none;
      float: right;
      margin-top: 83px;
    }
    .el-input__inner{
      width:473px;
      height:45px;
    }
    .el-input__suffix{
      width: 30px;
      height: 30px;
      padding-top: 3px;
    }
  }
  // 摘要盒子
  .summaryBlock{
    width:1618px;
    height:62px;
    background:rgba(250,250,250,1);
    border-radius:3px 3px 0px 0px;
    border:1px solid rgba(178,178,178,0.3);
    margin-top: 42px;
    .summaryTitle{
      font-size:16px;
      font-family:PingFangSC-Regular,PingFang SC;
      font-weight:400;
      color:rgba(40,40,40,1);
      line-height:22px;
      margin-top: 21px;
      margin-left: 20px;
    }
  }
  // 区块内容盒子
  .blockContent{
    width: 1618px;
    height: 234px;
    background:rgba(255,255,255,1);
    border-radius:0px 0px 3px 3px;
    border:1px solid rgba(178,178,178,0.3);
    border-top: none;
    // 区块基础信息
    .blockBase{
      float: left;
      width: 367px;
      padding-top: 51px;
      margin-left: 84px;
      // 区块信息标签盒子
      .blockLabel-div {
        width: 121px;
        margin-right: 106px;
        .blockLabel{
          font-size:14px;
          font-family:PingFangSC-Regular,PingFang SC;
          font-weight:400;
          color:rgba(40,40,40,0.6);
          line-height:20px;
          margin-bottom: 16px;
        }
      }
      // 标签左对齐
      .blockLabel-right{
        width: 140px;
        text-align: right;
        // 区块信息值
        .blockValue{
          font-size:14px;
          font-family:PingFangSC-Regular,PingFang SC;
          font-weight:400;
          color:rgba(40,40,40,1);
          line-height:20px;
          margin-bottom: 16px;
        }
      }
    }
    // 分割线位置
    .blockLine-Location{
      float: left;
      margin-top: 54px;
      margin-left: 199px;
      // 分割线大小
      .blockLine{
        width:1px;
        height:128px;
        margin-bottom: 100px;
      }
    }
    // 区块跳转位置
    .blockJump-Location{
      float: left;
      margin-top: 51px;
      margin-left: 166px;
      .blockJump-bottom{
        margin-bottom: 16px;
        // 标签样式
        .blockHash-label{
          font-size:14px;
          font-family:PingFangSC-Regular,PingFang SC;
          font-weight:400;
          color:rgba(40,40,40,0.6);
          line-height:20px;
          margin-right: 30px;
        }
        // 值样式
        .blockHash-value{
          font-size:14px;
          font-family:PingFangSC-Regular,PingFang SC;
          font-weight:400;
          color:rgba(96,183,255,1);
          line-height:20px;
          padding: 0px;
        }
      }
    }
  }
  // 交易hash内容盒子
  .transforArea{
    width:1618px;
    height:234px;
    background:rgba(255,255,255,1);
    border-radius:4px;
    border-radius:0px 0px 4px 4px;
    border:1px solid rgba(178,178,178,0.3);
    border-top: none;
    text-align: left;
    .hashValue{
      width:1451px;
      height:40px;
      font-size:13px;
      font-family:PingFangSC-Regular,PingFang SC;
      font-weight:400;
      color:rgba(40,40,40,1);
      line-height:20px;
      margin-top: 65px;
      margin-left: 84px;
      word-wrap: break-word;
      word-break: break-all;
      overflow: hidden;

    }
  }
}
</style>