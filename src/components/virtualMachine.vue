<template>
  <div class="build-templet">
      <!-- 单张虚拟机卡片 -->
      <div class="inblock virtualCard" v-for="(item,index) in virtualMachineArr" :key="index">
          <!-- 虚拟机图片 -->
          <img class="virtualImg" :src="Img" alt="UDO_通用型数字化开放平台_区块链体验仿真_搭链体验_创客区块链">
          <!-- 虚拟机标题 -->
          <div class="virtualTitle">
              {{item.title}}
              <!-- {{index+1}} -->
          </div>
          <div class="virtualContent">
            <!-- 标签 -->
            <div class="inblock">
                <div class="virtualLabel">名称</div>
                <div class="virtualLabel">规格</div>
                <div class="virtualLabel">IP</div>
                <div class="virtualLabel">带宽</div>
                <div class="virtualLabel">磁盘</div>
            </div>
            <!-- 值 -->
            <div class="inblock">
                <div class="virtualValue">{{item.name}}</div>
                <div class="virtualValue">{{item.spec}}</div>
                <div class="virtualValue">{{item.publicIp}}</div>
                <div class="virtualValue">{{item.bandwidth}}</div>
                <div class="virtualValue">{{item.store}}</div>
            </div>
          </div>
      </div>
  </div>
</template>

<script>
import virtual from "../assets/images/virtualMachine/virtual.png";
export default {
  data() {
    return {
      Img:virtual,
      virtualMachineArr:[
          {
            "title": "容器-1",
            "name": "Docker",
            "spec": "Linux",
            "bandwidth": "5Mb/s",
            "store": "256G",
            "publicIp": "120.11.23.47"
          },
          {
            "title": "容器-2",
            "name": "Docker",
            "spec": "Linux",
            "bandwidth": "3Mb/s",
            "store": "256G",
            "publicIp": "120.11.23.48"
          },
          {
            "title": "容器-3",
            "name": "Docker",
            "spec": "Linux",
            "bandwidth": "5Mb/s",
            "store": "256G",
            "publicIp": "120.11.23.49"
          },
          {
            "title": "容器-4",
            "name": "Docker",
            "spec": "Linux",
            "bandwidth": "5Mb/s",
            "store": "256G",
            "publicIp": "120.11.23.50"
          },
          {
            "title": "容器-4",
            "name": "Docker",
            "spec": "Linux",
            "bandwidth": "5Mb/s",
            "store": "256G",
            "publicIp": "120.11.23.50"
          }
      ]
    };
  },
  created(){
    var that = this;
    that.virtualData();
  },
  methods: {
    virtualData(){
      var that = this;
      that.$axios.get('/exp-layout/list').then(res => {
        if(res.data.code == 200){
          that.virtualMachineArr = res.data.data;
        }
      })
    },
  },
};
</script>

<style lang="less">
.build-templet{
    text-align: center;
    .virtualPanel{
        width: 100%;
        margin: 0 auto;
    }
    .virtualCard{
        width:300px;
        height:382px;
        background:rgba(255,255,255,1);
        border-radius:4px;
        border:1px solid rgba(178,178,178,0.3);
        margin-left: 20px;
        .virtualImg{
            width: 64px;
            height: 64px;
            margin-top: 50px;
        }
        .virtualTitle{
            margin-top: 16px;
        }
        .virtualContent{
            margin-top: 50px;
        }
        .virtualLabel{
            text-align: left;
            padding-right: 65px;
            margin-bottom: 12px;
        }
        .virtualValue{
            text-align: right;
            line-height: 21px;
            margin-bottom: 10px;
        }
    }
}
</style>