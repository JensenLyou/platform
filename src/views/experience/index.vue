<template>
  <div class="view-example">
    <!-- 头部 -->
    <Header ref="myHeader"></Header>
    <!-- 区块链 - 仿真体验 -->
    <div class="images1">
        <div class="panel"></div>
        <div class="text">区块链 - 仿真体验</div>
        <div class="panel"><el-button class="exButton" @click="apply">申请体验</el-button></div>
    </div>
    <!-- 区块链的特征 -->
    <div class="images2">
        <div class="panel">
        </div>
        <!-- 标题 -->
        <div class="text2">区块链的特征</div>
        <!-- icon -->
        <div class="panel flex-between">
            <div class="mrt_200">
                <div class="inblock">
                    <img src="./../../assets/images/experience/ic_functions_customization.png" alt="UDO_通用型数字化开放平台_区块链体验仿真_搭链体验_创客区块链">
                    <div class="text3">去中心化</div>
                </div>
                <div class="inblock mrl-226">
                    <img src="./../../assets/images/experience/ic_functions_join.png" alt="UDO_通用型数字化开放平台_区块链体验仿真_搭链体验_创客区块链">
                    <div class="text3 mrl-1">开放性</div>
                </div>
                <div class="inblock mrl-226">
                    <img src="./../../assets/images/experience/ic_functions_safety.png" alt="UDO_通用型数字化开放平台_区块链体验仿真_搭链体验_创客区块链">
                    <div class="text3 mrl-1">防篡改</div>
                </div>
                <div class="inblock mrl-226">
                    <img src="./../../assets/images/experience/ic_functions_advanced.png" alt="UDO_通用型数字化开放平台_区块链体验仿真_搭链体验_创客区块链">
                    <div class="text3 mrl-1">匿名性</div>
                </div>
            </div>
        </div>
    </div>
    <!-- 区块链定义 -->
    <div class="blockDefine">
        <div class="panel"></div>
        <!-- 标题 -->
        <div class="blockDefine-title">区块链定义</div>
        <!-- 描述 -->
        <div class="blockDefine-des">区块链是一种由多方共同维护，使用密码学保证传输和访问安全，能够实现数据一致存储、无法篡改、无法抵赖的技术体系。</div>
        <!-- 图片 -->
        <div class="blockImage flex-between"></div>
        <!-- 链介绍 -->
        <div class="linkDesLocation">
            <!-- 公有链 -->
            <div class="linkLocation">
                <!-- 图标 -->
                <div class="linkIcon1 inblock"></div>
                <!-- 标题与介绍 -->
                <div class="inblock">
                    <!-- 标题 -->
                    <div class="linkName">
                        <div class="inblock">公有链</div>
                        <div class="inblock">（Public Blockchain）</div>
                    </div>
                    <!-- 介绍 -->
                    <div class="linkName-Des">公有链是指任何人都能参与的区块链。公有链是去中心化程度最高的区块链，不受机构控制，整个账本对所有人公开透明。任何人都能在公有链上查询交易、发送交易、参与记账。
                        加入公有链不需要任何人授权，可以自由加入或者离开，所以公有链又称为非许可链。
                        人人都能参与记账的公有链，是在陌生的、缺乏信任的竞争环境下记账的，所以公有链需要有一套共识机制来选出记账节点
                        ，也就是我们平常说的通过“挖矿”竞争记账权。因为需要挖矿，所以公有链记账有延时高，成本高、效率低的特点。
                    </div>
                </div>
            </div>
            <!-- 联盟链 -->
            <div class="linkLocation">
                <!-- 图标 -->
                <div class="linkIcon2 inblock"></div>
                <!-- 标题与介绍 -->
                <div class="inblock">
                    <!-- 标题 -->
                    <div class="linkName">
                        <div class="inblock">联盟链</div>
                        <div class="inblock">（Consortium Blockchain）</div>
                    </div>
                    <!-- 介绍 -->
                    <div class="linkName-Des">联盟链的账本的公开程度，介于公有链和私有链之间。联盟链是指多个机构共同管理维护的区块链，参与区块链的节点是事先选定的。
                        联盟链也只对联盟内部成员开放全部或部分功能，链上信息的读取、写入以及记账规则都按照联盟共识来设定。
                        联盟链由于节点之间有很好的连接和可信的网络环境，所以联盟链有记账效率高、共识时间短、记账成本低还能兼顾隐私的特点。
                    </div>
                </div>
            </div>
            <!-- 私有链 -->
            <div class="linkLocation">
                <!-- 图标 -->
                <div class="linkIcon3 inblock"></div>
                <!-- 标题与介绍 -->
                <div class="inblock">
                    <!-- 标题 -->
                    <div class="linkName">
                        <div class="inblock">私有链</div>
                        <div class="inblock">（Private Blockchain）</div>
                    </div>
                    <!-- 介绍 -->
                    <div class="linkName-Des">和公有链的账本对所有人公开透明和人人皆可记账的情况相反，私有链是指区块链记账权限仅在一个人或者一个机构手里，
                        并且参与记账的权限由机构内部制定，读取权限可以对方开放也可以任意程度地限制。
                        私有链由于参与记账节点少，而且没有“挖矿”竞争这一过程，所以私有链有记账速度快，没有记账成本，隐私性高等优点。
                        由于私有链都是内部的节点，记账环境是可信的；区块链技术能够防止机构内单节点篡改数据，即便发生错误，也能快速发现。
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- 系统架构图 -->
    <div class="images4">
        <div class="panel"></div>
        <!-- 标题 -->
        <div class="text6">系统架构图</div>
        <!-- 架构图 -->
        <div class="diagram panel">
        </div>
    </div>
    <!-- 搭链过程拆分 -->
    <div class="images5 mrb_150">
        <div class="panel"></div>
        <!-- 标题 -->
        <div class="text7 panel">搭链过程拆分</div>
        <!-- 横条1 -->
        <div class="banner1"></div>
        <!-- 进程 -->
        <div class="banner2"></div>
        <!-- 文字 -->
        <div class="bannerTextLocation">
            <!-- <div class="bannerText inblock mr-text1">服务器启动</div>
            <div class="bannerText inblock mr-text2">安装基础环境</div>
            <div class="bannerText inblock mr-text3">证书匹配</div>
            <div class="bannerText inblock mr-text4">创建创世区块，锚节点，生成通道配置信息</div>
            <div class="bannerText inblock mr-text5">启动网络</div>
            <div class="bannerText inblock mr-text6">节点加入通道</div> -->
        </div>
    </div>
    <!-- 弹窗 -->
    <div class="panel">
        <el-dialog
            title="申请体验"
            :visible.sync="dialogVisible"
            width="683px"
            :close-on-click-modal="false" 
            class="myDialog" @close="closeDialog">
            <!-- 无法申请 -->
            <div v-if="type==1">
                <div class="text10 panel">由于服务器限制原因，同时只能有一名用户进行体验，有其他用户正在体验，请55分钟后再进行申请体验。</div>
                <div class="mrt_40">
                    <el-button class="certainBtn" @click="certainBtn">确定</el-button>
                </div>
            </div>
            <div class="payDialog" v-if="type==2">
                <!-- 支付按钮 -->
                <div class="payBtn">
                    <el-button @click="alipayQrCode" class="alipayBtn">
                        <img class="alipayIcon" src="./../../assets/images/icon/alipay.svg" alt="UDO_通用型数字化开放平台_区块链体验仿真_搭链体验_创客区块链">
                        <span class="alipayText">支付宝</span>
                    </el-button>
                    <el-button @click="wechatQrCode" class="weixinBtn" >
                        <img class="weixinIcon" src="./../../assets/images/icon/wechat.svg" alt="UDO_通用型数字化开放平台_区块链体验仿真_搭链体验_创客区块链">
                        <span class="weixinText">微信</span>
                    </el-button>
                </div>
                <!-- 扫码支付 -->
                <div class="payPositon">
                    <div class="scanPay">扫码支付</div>
                    <!-- 支付二维码 -->
                    <div v-loading="loading" class="payQrcode">
                        <!-- 支付宝 -->
                        <div v-if="qrCodeType==1" id="qrcode"></div>
                        <!-- <img v-if="qrCodeType==1" style="width:156px; height:156px" :src="qrCodeImg" alt="UDO_通用型数字化开放平台_区块链体验仿真_搭链体验_创客区块链"> -->
                        <!-- 微信 -->
                        <div v-if="qrCodeType==2" id="qrcode"></div>
                        <!-- <img v-if="qrCodeType==2" style="width:156px; height:156px" :src="qrCodeImg" alt="UDO_通用型数字化开放平台_区块链体验仿真_搭链体验_创客区块链"> -->
                    </div>
                    <!-- 体验价 -->
                    <div>
                        <div class="discountPrice inblock">体验价</div>
                        <div class="amount inblock">￥{{amount}}</div>
                    </div>
                    <!-- 原价 -->
                    <div class="originPrice"><s>原价  ￥{{originAmount}}</s></div>
                </div>
                <div style="clear:both"></div>
                <!-- 温馨提示 -->
                <div class="mentionPositon">
                    <div class="mention">温馨提示</div>
                    <div class="mentionContent">单次联盟链搭建体验必须要在{{totalDuration}}分钟内完成，超过{{totalDuration}}分钟体验会自动退出，无法继续进行操作。</div>
                </div>
            </div>
        </el-dialog>
    </div>
    <!-- 底部 -->
    <Footer></Footer>
  </div>
</template>


<script>
import QRCode from 'qrcodejs2'  // 引入qrcode
import Header from '../../components/header'
export default {
    data(){
        return{
            dialogVisible:false,        //点击申请弹窗
            type:1,                     //1 无法申请 2 支付款
            qrCodeType:1,               //1 支付宝 2 微信
            qrCodeImg:'',
            orderNo:'',
            payTimer:'',                   //支付定时器
            processTimer:'',               //流程定时器
            loading:true,                  //加载
            originAmount:null,             //原始价格
            amount:null,                   //体验价
            totalDuration:null             //总时长
        };
    },
    created(){
        var that = this;
    },
    mounted(){
        // this.experiencePrice();
    },
    methods:{
        // 点击申请按钮
        async apply(){
            var that = this;
            // 如果未登录，则弹出注册登录框
            if(localStorage.getItem('token') === null || localStorage.getItem('token') === ''){
                that.$refs.myHeader.showLoginDialog();
            }else{
                that.type = 2;
                await that.getOrderNo();
                that.experiencePrice();
                var bodyQuery = {
                    "channelCode":"alipay",
                    "orderNo":that.orderNo,
                    "timestamp": new Date().getTime()
                };
                var url = '/exp-guide/api/payment/status?orderNo=' + that.orderNo;
                that.dialogVisible = true;
                that.$axios.post('/exp-guide/api/payment/qrcode',bodyQuery).then( res => {
                    console.log('alipay',res);
                    if(res.data.code == 200){
                        // 流程为未体验时
                        if(window.sessionStorage.getItem('payState') == 0){
                            that.loading = false;
                            that.qrCodeImg = res.data.data.qrcode;
                            that.orderNo = res.data.data.orderNo;
                            document.getElementById("qrcode").innerHTML = "";
                            that.qrcode();
                        }
                    }
                    if(res.data.code == 500){
                        that.$message({
                            message:res.data.msg,
                            type: 'error'
                        })
                    }
                }).catch(res =>{
                    console.log('catRes',res);
                });
                // 重复调用接口,判断是否支付完毕
                that.payTimer = setInterval(() => {
                    setTimeout(()=>{
                        that.$axios.get(url).then( res => {
                            if(res.data.code == 200){
                                if(res.data.data.status == 2){
                                    // 支付成功，传值给header组件，重复调用倒计时方法
                                    that.$refs.myHeader.isPay =  true;
                                    clearInterval(that.payTimer);
                                    // that.dialogVisible = false;
                                    that.certainBtn();
                                }
                            }
                        });
                    }, 0)
                }, 2000)
            }
        },
        // 弹窗确定按钮
        certainBtn(){
            var that = this;
            let timer = '';
            console.log('paySate:',sessionStorage.getItem('payState'));
            timer = setInterval(() => {
                setTimeout(()=>{
                    that.getOrderNo();
                    // debugger
                    if(sessionStorage.getItem('payState') >= 1){
                        clearInterval(timer);
                        that.$router.push({ path: "/templet" });
                    }
                }, 0)
            }, 1000)
        },
        // 支付宝二维码按钮
        alipayQrCode(){
            var bodyQuery = {
                "channelCode":"alipay",
                "orderNo":that.orderNo,
                "timestamp": new Date().getTime()
            };
            this.qrCodeType = 1;
            // 调用接口
            this.$axios.post('/exp-guide/api/payment/qrcode',bodyQuery).then( res => {
                console.log('alipay',res);
                if(res.data.code == 200){
                    console.log('payState:',window.sessionStorage.getItem('payState'));
                    if(window.sessionStorage.getItem('payState') == 0){
                        this.loading = false;
                        this.qrCodeImg = res.data.data.qrcode;
                        this.orderNo = res.data.data.orderNo;
                    }
                }
                if(res.data.code == 500){
                    this.$message({
                        message:res.data.msg,
                        type: 'error'
                    })
                }
            }).catch(res =>{
                console.log('catRes',res);
            });
        },
        // 微信二维码按钮
        wechatQrCode(){
            var bodyQuery = {
                "channelCode":"weixin",
                "orderNo":that.orderNo,
                "timestamp": new Date().getTime()
            };
            this.qrCodeType = 2;
            // 调用接口
            this.$axios.post('/exp-guide/api/payment/qrcode',bodyQuery).then( res => {
                console.log('alipay',res);
                if(res.data.code == 200){
                    // this.$message({
                    //     message: res.data.msg,
                    //     type:'success'
                    // })
                    this.qrCodeImg = res.data.data.qrcode;
                    this.orderNo = res.data.data.orderNo;
                }
                if(res.data.code == 500){
                    this.$message({
                        message:res.data.msg,
                        type: 'error'
                    })
                }
            }).catch(res =>{
                console.log('catRes',res);
            });
        },
        // 二维码窗口设置
        qrcode() {
            let qrcode = new QRCode('qrcode', {
                width: 156,  
                height: 156,
                text: this.qrCodeImg, // 二维码地址
            })
        },
        // 关闭弹窗
        closeDialog(){
            clearInterval(this.payTimer);
            console.log('关闭循环');
        },
        // 流程接口,获取订单号
        async getOrderNo(){
            var that = this;
            var res = await that.$axios.get('/exp-guide/api/process');
            if(res.data.code == 200){
                that.orderNo = res.data.data.orderNo;
                window.sessionStorage.setItem('payState',res.data.data.state);
            }
        },
        // 获取体验价
        experiencePrice(){
            var that = this;
            this.$axios.get('/exp-guide/api/configure/config').then( res => {
                if(res && res.data &&res.data.code == 200){
                    that.originAmount = res.data.data.originAmount;
                    that.amount = res.data.data.amount;
                    that.totalDuration = res.data.data.totalDuration;
                }
            });
        }
    }
}
</script>

<style lang="less" scoped>
.view-example{
    .panel {
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
    }
    /* 区块链 - 仿真体验 */
    .images1{
        width: 100%;
        height: 1000px;
        background-color: #2b4790;
        color: #fff;
        padding: 106px 0 82px 0;
        background-image: url("./../../assets/images/experience/bg1.png");
        background-repeat: no-repeat;
        background-size: 100% 100%;
    }
    .text{
        // width:500px;
        // height:60px;
        font-size:60px;
        font-family:SourceHanSansCN-Normal,SourceHanSansCN;
        font-weight:400;
        color:rgba(255,255,255,1);
        line-height:90px;
        justify-content: center;
        align-items: center;
        text-align: center;
        margin-top: 100px;
        // margin-left: 727px;
    }
    .exButton{
        width:224px;
        height:60px;
        background:rgba(255,162,0,1);
        box-shadow:0px 4px 6px 0px rgba(63,63,63,1);
        border-radius:2px;
        border:1px solid rgba(255,162,0,1);
        color: #fff;
        margin-top: 85px;
        margin-bottom: 555px;
        justify-content: center;
        align-items: center;
        text-align: center;
    }
    .el-button.exButton.el-button:focus {
        color: #FFFFFF;
        border-color: none;
        background-color: rgba(255,162,0,1);
        border: 1px solid rgba(255,162,0,1);
    }
    .el-button.exButton.el-button:hover {
        color: #FFFFFF;
        border-color: none;
        background-color: rgba(255,162,0,1);
        border: 1px solid rgba(255,162,0,1);
    }
    /* 区块链的特征 */
    .images2{
        width: 100%;
        height: 920px;
        background:rgba(255,255,255,1);
    }
    .text2{
        // width:216px;
        // height:36px;
        font-size:36px;
        font-family:SourceHanSansCN-Normal,SourceHanSansCN;
        font-weight:400;
        color:rgba(46,46,46,1);
        line-height:54px;
        margin-top: 249px;
        // margin-left: 852px;
        justify-content: center;
        align-items: center;
        text-align: center;
    }
    .mrt_200{
        margin-top: 200px;
    }
    .text3{
        height:16px;
        font-size:16px;
        font-family:SourceHanSansCN-Normal,SourceHanSansCN;
        font-weight:400;
        color:rgba(46,46,46,1);
        line-height:24px;
        // margin-left:14px;
        margin-top:20px;
    }
    .mrl-1{
        margin-left: 8px;;
    }
    .mrl-226{
        margin-left: 226px;
    }
    // 区块链定义
    .blockDefine{
        text-align: center;
        // 标题
        .blockDefine-title{
            font-size:36px;
            font-family:SourceHanSansCN-Normal,SourceHanSansCN;
            font-weight:400;
            color:rgba(46,46,46,1);
            line-height:54px;
        }
        // 描述
        .blockDefine-des{
            font-size:16px;
            font-family:SourceHanSansCN-Normal,SourceHanSansCN;
            font-weight:400;
            color:rgba(40,40,40,0.6);
            line-height:24px;
            margin-top: 44px;
        }
        // 图片
        .blockImage{
            width: 915px;
            height: 548px;
            background:rgba(255,255,255,1);
            background-image: url("./../../assets/images/experience/block.png");
            background-repeat: no-repeat;
            margin: 0 auto;
            margin-top: 80px;
        }
        // 链介绍位置
        .linkDesLocation{
            margin-top: 69px;
            margin-bottom: 331px;
            .linkLocation{
                margin-bottom: 155px;
                .linkIcon1{
                    position: relative;
                    top: -66px;
                    right: 18px;
                    width: 120px;
                    height: 120px;
                    background-image: url("./../../assets/images/experience/linkIcon1.png");
                    background-repeat: no-repeat;
                }
                .linkIcon2{
                    position: relative;
                    top: -36px;
                    right: 18px;
                    width: 120px;
                    height: 120px;
                    background-image: url("./../../assets/images/experience/linkIcon2.png");
                    background-repeat: no-repeat;
                }
                .linkIcon3{
                    position: relative;
                    top: -66px;
                    right: 18px;
                    width: 120px;
                    height: 120px;
                    background-image: url("./../../assets/images/experience/linkIcon3.png");
                    background-repeat: no-repeat;
                }
                .linkName{
                    // width: 371px;
                    font-size:28px;
                    font-family:SourceHanSansCN-Normal,SourceHanSansCN;
                    font-weight:400;
                    color:rgba(40,40,40,1);
                    line-height:42px;
                    text-align: left;
                }
                .linkName-Des{
                    width:1059px;
                    text-align: left;
                    font-size:16px;
                    font-family:SourceHanSansCN-Normal,SourceHanSansCN;
                    font-weight:400;
                    color:rgba(40,40,40,0.6);
                    line-height:28px;
                }
            }
        }
    }
    // 系统架构图
    .images4{
        width: 100%;
        background-color: #2b4790;
        color: #fff;
        padding: 106px 0 82px 0;
        background-image: url("./../../assets/images/experience/bg.png");
        background-repeat: no-repeat;
        background-size: 100% 100%;
        text-align: center;
        .text6{
            font-size:36px;
            font-family:SourceHanSansCN-Normal,SourceHanSansCN;
            font-weight:400;
            color:rgba(46,46,46,1);
            line-height:54px;
            margin-top: 59px;
        }
        .diagram{
            width: 935px;
            height: 666px;
            color: #fff;
            background-image: url("./../../assets/images/experience/src@3x.png");
            background-repeat: no-repeat;
            background-size: 100% 100%;
            margin-top: 128px;
            margin-bottom: 63px;
        }
    }
    // 搭链过程拆分
    .images5{
        width: 100%;
        height: 1000px;
        background:rgba(255,255,255,1);
        .text7{
            font-size:36px;
            font-family:SourceHanSansCN-Normal,SourceHanSansCN;
            font-weight:400;
            color:rgba(46,46,46,1);
            line-height:54px;
            margin-top: 200px;
        }
        .banner1{
            width: 1161px;
            height: 80px;
            background-image: url("./../../assets/images/experience/banner.png");
            background-repeat: no-repeat;
            margin: 0 auto;
            margin-top: 200px;
        }
        .banner2{
            width: 1117px;
            height: 78px;
            background-image: url("./../../assets/images/experience/process.png");
            background-repeat: no-repeat;
            margin: 0 auto;
            margin-top: 44px;
        }
        .bannerTextLocation{
            width: 1172px;
            height: 50px;
            // position: absolute;
            // left: 370px;
            background-image: url("./../../assets/images/experience/text.png");
            background-repeat: no-repeat;
            margin: 0 auto;
        }
        .bannerText{
            width: 195px;
            text-align: center;
            font-size:16px;
            font-family:SourceHanSansCN-Normal,SourceHanSansCN;
            font-weight:400;
            color:rgba(40,40,40,1);
            line-height:24px;
        }
        .mr-text1{
            margin: auto;
            margin-right: 23px;
        }
        .mr-text2{
            margin: auto;
            margin-right: 18px;
        }
        .mr-text3{
            margin: auto;
            margin-right: 26px;
        }
        .mr-text4{
            position: relative;
            top: 7px;
            margin: auto;
            margin-right: 21px;
        }
        .mr-text5{
            margin: auto;
            margin-right: 20px;
        }
        .mr-text6{
            
        }
    }
    // 申请体验弹窗
    .text10{
        width:553px;
        height:40px;
        font-size:14px;
        font-family:PingFangSC-Regular,PingFang SC;
        font-weight:400;
        color:rgba(0,0,0,0.5);
        line-height:20px;
        text-align: left;
    }
}
</style>

<style>
    /* 申请体验弹窗 */
    /* 无法体验 */
    .myDialog .el-dialog__header {
        width:683px;
        height:60px;
        background:rgba(247,247,247,1);
        border-radius:8px 8px 0px 0px;
    }
    .myDialog .el-dialog__title{
        width:64px;
        height:22px;
        font-size:16px;
        font-family:PingFangSC-Regular,PingFang SC;
        font-weight:400;
        color:rgba(0,0,0,0.65);
        line-height:22px;
    }
    .myDialog .el-dialog__headerbtn .el-dialog__close{
        font-size: 20px;
    }
    .mrt_40{
        margin-top: 40px;
    }
    .certainBtn{
        width:208px;
        height:48px;
        background:rgba(248,167,71,1);
        border-radius:4px;
        color: #fff;
    }
    .el-button.certainBtn.el-button:focus {
        color: #FFFFFF;
        border-color: none;
        background-color: rgba(248,167,71,1);
        border: 1px solid rgba(248,167,71,1);
    }
    .el-button.certainBtn.el-button:hover {
        color: #FFFFFF;
        border-color: none;
        background-color: rgba(248,167,71,1);
        border: 1px solid rgba(248,167,71,1);
    }
    /* 支付体验 */
    .payDialog{
        height: 577px;
    }
    .payBtn{
        float: left;
        margin-top: 22px;
        margin-left: 30px;
    }
    .weixinIcon{
        float: left;
        margin-right: 5px;
    }
    .weixinBtn{
        width: 100px;
        height: 40px;
        padding-top: 8px;
        visibility: hidden;
    }
    .weixinText{
        font-family:PingFangSC-Regular,PingFang SC;
        font-weight:400;
        color:rgba(0,0,0,0.65);
        line-height:22px;
    }
    .alipayIcon{
        float: left;
        margin-right: 5px;
        margin-left: -7px;
    }
    .alipayBtn{
        width: 100px;
        height: 40px;
        padding-top: 8px;
    }
    .alipayText{
        font-family:PingFangSC-Regular,PingFang SC;
        font-weight:400;
        color:rgba(0,0,0,0.65);
        line-height:22px;
    }
    /* 扫码支付文字 */
    .payPositon{
        float: left;
        text-align: center;
        margin-top: 155px;
    }
    .scanPay{
        width:64px;
        height:22px;
        font-size:16px;
        font-family:PingFangSC-Medium,PingFang SC;
        font-weight:600;
        color:rgba(0,0,0,0.65);
        line-height:22px;
        margin-left: 50px;
        margin-bottom: 20px;
    }
    /* 支付二维码 */
    .payQrcode{
        width:156px;
        height:156px;
        background:rgba(255,255,255,1);
        box-shadow:0px 2px 9px 0px rgba(210,210,210,0.5);
        border-radius:8px;
    }
    .discountPrice{
        font-size:14px;
        font-family:PingFangSC-Regular,PingFang SC;
        font-weight:400;
        color:rgba(40,40,40,1);
        line-height:20px;
    }
    .amount{
        font-size:16px;
        font-family:PingFangSC-Medium,PingFang SC;
        font-weight:600;
        color:rgba(248,167,71,1);
        line-height:22px;
        /* margin-left: 38px; */
        margin-top: 20px;
    }
    .originPrice{
        width:86px;
        height:20px;
        font-size:14px;
        font-family:PingFangSC-Regular,PingFang SC;
        font-weight:400;
        color:rgba(40,40,40,0.6);
        margin-left: 35px;
        line-height:20px;
    }
    /* 温馨提示 */
    .mentionPositon{
        margin-top: 60px;
        margin-left: 30px;
    }
    .mention{
        width:80px;
        height:22px;
        font-size:16px;
        font-family:PingFangSC-Medium,PingFang SC;
        font-weight:600;
        color:rgba(0,0,0,0.65);
        line-height:22px;
    }
    .mentionContent{
        width:570px;
        height:40px;
        font-size:14px;
        font-family:PingFangSC-Regular,PingFang SC;
        font-weight:400;
        color:rgba(0,0,0,0.5);
        line-height:20px;
        text-align: left;
        margin-top: 10px;
        margin-left: 10px;
    }
</style>