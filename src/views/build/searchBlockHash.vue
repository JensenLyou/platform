<template>
  <div class="blockHash">
    <Header></Header>

    <!-- 页头+搜索输入框 -->
    <div class="blockPanel">
      <!-- 页头 -->
      <div class="inblock headerDiv">
        <el-button type="text" class="inblock browserHeader" @click="jumpBrowser">浏览器 </el-button>/
        <div class="inblock blockHeader">块 - {{block}}</div>
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
    <div class="blockPanel">
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
            <div class="blockValue">{{detail.number}}</div>
            <div class="blockValue">2020-04-15 19:18:15</div>
            <div class="blockValue">15,1999 Bytes</div>
            <div class="blockValue">{{detail.transactions?detail.transactions.length:0}}</div>
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
            {{block}}
          </div>
          <!-- 前块哈希 -->
          <div class="blockJump-bottom">
            <!-- 标签 -->
            <div class="inblock blockHash-label">前一个块</div>
            <!-- 值 -->
            <el-button type="text" class="inblock blockHash-value" @click="jumpBlockHash(detail.previousBlockHash)">{{detail.previousBlockHash}}</el-button>
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
    <div class="blockPanel">
      <!-- 交易标题 -->
      <div class="summaryBlock">
        <div class="summaryTitle">交易</div>
      </div>
      <!-- 区块表格信息盒子 -->
      <div class="blockTable">
        <el-table :data="tableData" :height="849" :header-cell-style="{height:'77px',background:'#FAFAFA',color:'rgba(0, 0, 0, 0.65)'}">
          <el-table-column prop="txid" label="交易哈希" width="1350px">
            <template slot-scope="scope">
              <el-button @click="jumpTransforHash(scope.row.txid)" type="text">{{scope.row.txid}}</el-button>
            </template>
          </el-table-column>
          <el-table-column prop="timestamp" label="时间"></el-table-column>
        </el-table>
      </div>
      <!-- 分页 -->
      <!-- <div class="searchBlockPage">
        <el-pagination
          background
          layout="prev, pager, next"
          :total="1000">
        </el-pagination>
      </div> -->
    </div>

  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return{
		detail:{},
		hashSearch:null,
		block:'--',
      jump:'--',
      tableData:[
      ]
    };
  },
  mounted(){
    console.log('block',this.$route.query.block);
    this.block = this.$route.query.block;
	if(window['clientUrl']){
		this.queryBlockDetail();
	} else {
		this.getClientUrl();
	}
  },
  methods: {
	queryBlockDetail(){
		var url = window['clientUrl'] + "/explore/block";
		var params = new URLSearchParams();
		params.append('block', this.block);
		axios.post(url,params)
		.then(resp => {
			var rst = resp.data;
			if(rst && rst.status === 200){
				this.detail = rst.data;
				this.tableData = rst.data.transactions;
			} else {
				this.$message({ message:rst.msg,type:'error'})
			}
			console.log("[BlockDetail]",this.block,rst,this.detail)
		})
		.catch(err=>{

		})
	},
	async getClientUrl(){
		try {
			var res = await this.$axios.get('/exp-guide/api/process')
			if(res && res.data && res.data.code == 200){
				if(res.data.data && res.data.data.state == 3){
					window['clientUrl'] = res.data.data.clientUrl;
					this.queryBlockDetail();
				}
			}
		} catch (error) {
			if(error.request.status == 401){
				// this.$router.push({path:'/experience'})
			}
		}
		// window['clientUrl'] = "http://127.0.0.1:8080";
		this.queryBlockDetail();
	},
    // 跳转块hash
    jumpBlockHash(block){
      console.log('jumpBlock',block);
      this.$router.push({path:'/searchBlockHash', query: { block: block }});
      this.block = this.$route.query.block;
    },
    // 跳转浏览器
    jumpBrowser(){
      this.$router.push({path:'/complete'});
      // this.$router.go(-1);
    },
    // 跳转交易hash
    jumpTransforHash(transfor){
      this.$router.push({path:'/searchTransforHash', query: { transfor: transfor }});
    }
  },
}
</script>

<style lang="less">
.blockHash{
  width: 1903px;
  height: 900px;
  background:rgba(245,246,247,1);
  .blockPanel{
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
      margin-right: 3px;
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
  // 表格样式
  .blockTable{
    background: #fff;
    border-radius:0px 0px 4px 4px;
    border:1px solid rgba(178,178,178,0.3);
    border-top: none;
    margin-bottom: 30px;
    .el-table{
      width: 1526px;
      height: 920px;
      margin-left: 47px;
      padding-top: 38px;
    }
  }
  // 分页
  .searchBlockPage{
    float: right;
    margin-bottom: 88px;
    .el-pagination.is-background .el-pager li {
        margin: 0 5px;
        background-color: #fff;
        color: #606266;
        min-width: 30px;
        border-radius: 2px;
    }
    .el-pagination.is-background .btn-prev:disabled{
      background-color: #fff;
      color: #C0C4CC;
    }
    .el-pagination.is-background .btn-prev{
      background-color: #fff;
      color: rgba(0, 0, 0, 0.65);
    }
    .el-pagination.is-background .btn-next:disabled{
      background-color: #fff;
      color: #C0C4CC;
    }
    .el-pagination.is-background .btn-next{
      background-color: #fff;
      color: rgba(0, 0, 0, 0.65);
    }
    .el-pagination.is-background .el-pager li.active{
      background-color: rgba(248, 167, 71, 1);
      color: #fff;
      font-weight: 200;
    }
    .el-pagination.is-background .el-pager li{
      background-color: #fff;
      border-radius:6px;
    }
  }
}
</style>