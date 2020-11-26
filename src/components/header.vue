<template>
  <div class="header" :class="{'home-header': $route.name === 'home'}">
    <div class="panel inblock flex-between-items-center">
      <div class="flex-items-center">
        <img class="logo" src="./../assets/logo.png" alt="UDO_通用型数字化开放平台_区块链体验仿真_搭链体验_创客区块链" />
        <div>
          <div class="fs22">{{$t("page.logoZh")}}</div>
          <div>{{$t("page.logoEn")}}</div>
        </div>
      </div>
      <div class="text-right" :class="$i18n.locale">
        <!-- 首页按钮 -->
        <div
          class="header-item"
          :class="{ 'active': $route.path.indexOf('home') > -1}"
          @click="$router.push({path: '/home' })"
        >{{$t("web.HomePage")}}</div>
        <!-- 技术方案按钮 -->
        <div
          class="header-item"
          :class="{ 'active': $route.path.indexOf('case') > -1}"
          @click="jumpCase()"
        >{{$t("web.TechnicalSolution")}}</div>
        <!-- 案例按钮 -->
        <div
          class="header-item"
          :class="{ 'active': $route.path.indexOf('example') > -1}"
          @click="$router.push({path: '/example' })"
        >{{$t("web.Cases")}}</div>
        <!-- 仿真体验按钮 -->
        <div
          class="header-item" v-show="isShow"
          :class="{ 'active': $route.path.indexOf('experience') > -1}"
          @click="$router.push({path:'/experience'})"
        >仿真体验</div>
        <!-- 开发者平台按钮 -->
        <div
          class="header-item"
          :class="{ 'active': $route.path.indexOf('developer') > -1}"
          @click="ToDeveloperFuc"
        >{{ $t("page.DeveloperPlatform")}}</div>
        <div class="header-item" @click="$utils.ToBrowserFuc">{{$t("web.BlockchainBrowser")}}</div>
        <!-- 钱包按钮 -->
        <div
          class="header-item"
          :class="{ 'active': $route.path.indexOf('wallet') > -1}"
          @click="toMybitt"
        >{{$t("web.Wallet")}}</div>
        <!-- 中英文切换按钮 -->
        <div class="header-item">
          <el-dropdown trigger="hover" @command="handleCommand">
            <span class="el-dropdown-link">
              {{ $store.state.currentLanguage | languageText }}
              <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="zh">简体中文</el-dropdown-item>
              <el-dropdown-item command="en">English</el-dropdown-item>
              <!-- <el-dropdown-item command="zhtw">繁體</el-dropdown-item> -->
            </el-dropdown-menu>
          </el-dropdown>
        </div>
        <!-- 登录注册按钮 -->
        <div v-if="isLogin==false" v-show="isShow"
          class="header-item"
          @click="showLoginDialog()"
        >{{$t("web.Regitser")}}</div>
        <div v-if="isLogin===true"
          class="header-item" v-show="isShow">
          <el-popover
            placement="bottom-start"
            width="150"
            trigger="hover">
            <el-button class="exitBtn" @click="exitFun">退出</el-button>
            <div class="inblock userName" slot="reference">你好,{{mobile}}</div>
          </el-popover>
          <div v-if="isPay==false" class="inblock countdown" v-show="false">{{countTime}}</div>
          <div id="delTime" v-if="isPay==true || (state !==0 && state !== 6)" class="inblock countdown" v-show="true">{{countTime}}</div>
        </div>
      </div>
    </div>
    <!-- 账号手机号登录弹窗 -->
    <el-dialog
      :visible.sync="dialogVisible"
      width="488px"
      border-radius="8px" class="loginDialog"
      :append-to-body="true"  :close-on-click-modal="false" @close="closeRegisterAndForget('form')">
      <div>
        <el-radio-group v-model="index">
          <el-radio-button class="dividBtn" style="float:left; margin-left:90px; width:80px; height:24px;" label="1">{{$t("web.AccountLogin")}}</el-radio-button>
          <el-radio-button class="dividBtn" style="float:right; margin-left:97px; width:80px; height:24px;" label="2">{{$t("web.MobileLogin")}}</el-radio-button>
        </el-radio-group>
      </div>
      <!-- <div style="margin-bottom:24px">
        <div>
          <el-button >{{$t("web.AccountLogin")}}</el-button>
        </div>
        <div>
          <el-button>{{$t("web.MobileLogin")}}</el-button>
        </div>
      </div> -->
      <!-- 账号密码登录 -->
      <el-form :model="form" :rules="loginRules" ref="form" class="loginForm" >
        <!-- 账号 -->
        <el-form-item v-show="this.index==1" prop="account">
          <el-input
            :placeholder="$t('web.Account')"
            prefix-icon="el-icon-user"
            style="width:368px; margin:20px 45px 0 45px"
            v-model="form.account" name="acount" clearable>
          </el-input>
        </el-form-item>
        <!-- 密码 -->
        <el-form-item v-show="this.index==1" prop="password">
          <el-input
            :placeholder="$t('web.Pwd')"
            prefix-icon="iconfont iconpassword mySecret"
            style="width:368px; margin:0 8px 0 45px"
            v-model="form.password" name="password" clearable show-password @keyup.enter.native="login('form',form)">
            <!-- <el-button size="small" slot="suffix" class="iconfont iconyanjing1 myIcon"></el-button> -->
          </el-input>
        </el-form-item>
        <!-- 手机号码登录 -->
        <el-form-item v-show="this.index==2" prop="mobile">
          <el-input
            :placeholder="$t('web.Mobile')"
            prefix-icon="el-icon-mobile-phone"
            style="width:368px; margin:20px 45px 0 45px"
            v-model="form.mobile" name="mobile" clearable>
          </el-input>
        </el-form-item>
        <!-- 验证码 -->
        <el-form-item v-show="this.index==2" prop="code">
          <el-input
            :placeholder="$t('web.code')"
            prefix-icon="el-icon-message"
            style="width:258px; margin:0 8px 0 45px"
            v-model="form.code" clearable @keyup.enter.native="login('form',form)">
          </el-input>
          <!-- 获取验证码 -->
          <el-button v-if="codeTitle==='获取验证码'" style="width:102px; height:40px; padding-left:15px" @click="getCode('form',form)">{{codeTitle}}</el-button>
          <el-button v-else style="width:102px; height:40px; padding-left:15px" @click="getCode('form',form)" :disabled="true">{{codeTitle}}</el-button>
        </el-form-item>
        <!-- 登录按钮 -->
        <el-form-item style="margin-bottom:5px">
          <el-button class="loginBtn" @click="login('form',form)" >{{$t('web.login')}}</el-button>
        </el-form-item>
      </el-form>
      <div style="margin-bottom:50px">
        <!-- 忘记密码 -->
        <el-button type="text" class="textBtn" style="float:left;margin-left:36px" @click="forget">{{$t('web.forget')}}</el-button>
        <!-- 注册 -->
        <el-button type="text" class="textBtn" style="float:right;margin-right:36px" @click="getAccount">{{$t('web.getAccount')}}</el-button>
      </div>
    </el-dialog>
    <!-- 忘记密码注册账号弹窗 -->
    <el-dialog 
      :title="type==1 ? '忘记密码' : '注册'"
      :visible.sync="dialogVisible1" 
      width="488px" 
      :append-to-body="true"  
      class="loginDialog1" 
      :close-on-click-modal="false" @close="closeRegisterAndForget('registerForm')">
      <el-form :model="registerForm" :rules="registerRules" ref="registerForm" class="regitserForm">
        <!-- 请输入手机号 -->
        <el-form-item prop="mobile">
          <el-input ref="mark" v-model="registerForm.mobile" :placeholder="$t('web.RegisterPhone')" class="phoneInput" clearable>
            <el-select v-model="region" slot="prepend" class="mySelect" @change="getFocus">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-input>
        </el-form-item>
        <!-- 请输入验证码 -->
        <el-form-item prop="code">
          <el-input v-model="registerForm.code" :placeholder="$t('web.RegisterCode')" style="width:258px; height:40px;margin-left:38px" clearable></el-input>
          <!-- <el-button style="width:102px; height:40px; margin-left:8px">获取验证码</el-button> -->
          <el-button v-if="codeTitle==='获取验证码'" style="width:102px; height:40px; margin-left:8px; padding-left:15px" @click="getCode('registerForm',registerForm)" :disabled="false">{{codeTitle}}</el-button>
          <el-button v-else style="width:102px; height:40px; margin-left:8px; padding-left:15px" @click="getCode('registerForm',registerForm)" :disabled="true" >{{codeTitle}}</el-button>
        </el-form-item>
        <!-- 第一次输入密码 -->
        <el-form-item prop="firstPwd">
          <el-input v-model="registerForm.firstPwd" :placeholder="$t('web.FirstPassword')" style="width:368px;height:40px;margin-left:38px" clearable show-password></el-input>
        </el-form-item>
        <!-- 第二次输入密码验证 -->
        <el-form-item prop="secondPwd">
          <el-input v-model="registerForm.secondPwd" :placeholder="$t('web.SecondPassword')" style="width:368px;height:40px;margin-left:38px" clearable show-password>
          </el-input>
        </el-form-item>
        <!-- 立即注册按钮 -->
        <el-form-item style="margin-bottom:0px">
          <el-button v-if="type==1" type="text" class="registerBtn" @click="regitser('registerForm',registerForm)">{{$t('web.UpdatePassword')}}</el-button>
          <el-button v-else class="registerBtn"  type="text" @click="regitser('registerForm',registerForm)">{{$t('web.Register')}}</el-button>
        </el-form-item>
        <!-- 协议 -->
        <el-form-item style="margin-bottom:0px" prop="checked" v-show="false">
          <el-checkbox v-model="registerForm.checked" class="myCheck">
            {{$t('web.Text1')}}<el-button type="text" class="testBtn" @click="userProtocol">{{$t('web.Text2')}}</el-button>{{$t('web.Text3')}}<el-button type="text" class="testBtn" @click="privacy">{{$t('web.Text4')}}</el-button>
          </el-checkbox>
        </el-form-item>
        <!-- 返回登录按钮 -->
        <el-form-item style="margin-bottom:0px">
          <el-button type="text" class="returnLogin" @click="returnLogin('registerForm')">{{$t('web.ReturnLogin')}}></el-button>
        </el-form-item>
      </el-form>
      <el-dialog
        width="30%"
        :title="protocolType == 1 ? '用户服务协议' : '隐私政策'"
        :visible.sync="innerVisible"
        border-radius="8px" class="loginDialog2"
        append-to-body :close-on-click-modal="false">
      </el-dialog>
    </el-dialog>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
  data() {
    // 注册忘记密码规则校验
    // 检查手机号
    var checkMobile = (rule, value, callback) =>{
      if(this.registerForm.mobile === ''){
        callback(new Error('手机号码不能为空'));
      } else if(this.region === '1'){
        if(!(/^1[3-9]\d{9}$/.test(this.registerForm.mobile))){
          callback(new Error('请输入正确的内地手机号码'));
        }else{
          callback();
        }
      } else if(this.region === '2'){
        if(!(/^[0][9]\d{8}$/.test(this.registerForm.mobile))){
          callback(new Error('请输入正确的台湾手机号码'));
        }else{
          callback();
        }
      } else if(this.region === '3'){
        if(!(/^[6]([8|6])\d{5}$/.test(this.registerForm.mobile))){
          callback(new Error('请输入正确的澳门手机号码'));
        }else{
          callback();
        }
      } else if( this.region === '4'){
        if(!(/^([6|9])\d{7}$/.test(this.registerForm.mobile))){
          callback(new Error('请输入正确的香港手机号码'));
        }else{
          callback();
        }
      }else{
        callback();
      }
    }
    // 第一次输入密码
    var validatePass = (rule, value, callback) => {
      if (this.registerForm.firstPwd === '' || this.registerForm.firstPwd.length < 6 || this.registerForm.firstPwd.length >20) {
        console.log('length:',this.registerForm.firstPwd.length);
        callback(new Error('设置密码格式错误'));
      } else {
        if (this.registerForm.secondPwd !== '') {
          this.$refs.registerForm.validateField('secondPwd');
        }
        callback();
      }
    };
    // 第二次输入密码
    var validatePass2 = (rule, value, callback) => {
      if (this.registerForm.secondPwd === '') {
        callback(new Error('请再次输入密码'));
      } else if (this.registerForm.secondPwd !== this.registerForm.firstPwd) {
        callback(new Error('两次输入密码不一致!'));
      } else {
        callback();
      }
    };
    // 验证码校验
    var checkCode = (rule, value, callback) => {
      if (this.registerForm.code === '') {
          callback(new Error('验证码不能为空'));
        } else if (this.registerForm.code !== this.getcode) {
          callback(new Error('验证码不正确!'));
        } else {
          if(this.registerForm.code){
            callback();
          }else{
            callback(new Error('验证码不正确!'));
          }
        }
    };
    // 勾选协议
    var checkProtocol = (rule, value, callback) => {
      if (this.registerForm.checked === false) {
          return callback(new Error('请勾选用户服务协议'));
      }else{
        console.log('checked',this.registerForm.checked);
        callback();
      }
    };
    // 登录注册规则校验
    // 检查账号
    var checkAccount = (rule, value, callback) =>{
      if (this.form.account.length < 6) {
          return callback(new Error('账号格式输入错误'));
      }else{
        callback();
      }
    }
    // 检查密码
    var checkPassword = (rule, value, callback) =>{
      if (this.form.password === '') {
          return callback(new Error('密码不能为空'));
      }else{
        callback();
      }
    }
    // 检查手机号
    var validateMobile = (rule, value, callback) =>{
      if(this.form.mobile === ''){
        callback(new Error('手机号码不能为空'));
      } else if(this.form.mobile !== ''){
        if((/^1[3-9]\d{9}$/.test(this.form.mobile)) === true || (/^[0][9]\d{8}$/.test(this.form.mobile)) === true || (/^[6]([8|6])\d{5}$/.test(this.form.mobile)) === true || (/^([6|9])\d{7}$/.test(this.form.mobile)) === true){
          callback();
        }
      }else{
        console.log('check',(/^1[3-9]\d{9}$/.test(this.form.mobile)));
        callback(new Error('请输入正确的手机号码'));
      }
    }
    // 验证码校验
    var validateCode = (rule, value, callback) => {
      if (this.form.code === '') {
          callback(new Error('验证码不能为空'));
        } else if (this.form.code !== this.getcode) {
          callback(new Error('验证码不正确!'));
        } else {
          if(this.form.code){
            callback();
          }else{
            callback(new Error('验证码不正确!'));
          }
        }
    };
    // 变量
    return {
      activeIndex: 2,
      dialogVisible: false,   //登录弹窗
      dialogVisible1: false,  //注册，忘记密码弹窗
      innerVisible:false,     //协议弹窗
      visible:false,          //密码可视
      index:1,                //1 账号 2手机
      tab:1,
      form:{
        account:'',
        password:'',
        mobile:'',
        code:'',
      },
      registerForm:{
        firstPwd:'',
        secondPwd:'',
        mobile:'',
        code:'',
        checked: true,
      },
      type:1, //1忘记密码，2注册账号
      protocolType:1,//1用户服务协议，2隐私政策
      isLogin:false,//true登录，false未登录
      select:1,
      options: [
        {
          value: '1',
          label: '+86'
        }, 
        {
          value: '2',
          label: '+886'
        }, 
        {
          value: '3',
          label: '+853'
        }, 
        {
          value: '4',
          label: '+852'
        }
      ],
      region: "1",
      password:'',    //密码
      account:'',     //账号
      mobile:'',      //手机号
      code:'',        //验证码
      firstPwd:'',    //第一次输入密码
      secondPwd:'',   //第二次输入密码
      checked:true,  //勾选协议
      codeTitle: '获取验证码',
      registerRules: {//注册规则校验
          firstPwd: [
            { validator: validatePass, trigger: 'blur' }
          ],
          secondPwd: [
            { validator: validatePass2, trigger: 'blur' }
          ],
          mobile: [
            { validator: checkMobile, trigger: 'blur' }
          ],
          checked: [
            { validator: checkProtocol, trigger: 'blur' }
          ],
          code: [
            // { validator: checkCode, trigger: 'blur' }
          ]
        },
      loginRules: {//登录规则校验
        account:[
          { validator: checkAccount, trigger: 'blur' }
        ],
        password:[
          { validator: checkPassword, trigger: 'blur' }
        ],
        mobile:[
          { validator: validateMobile, trigger: 'blur' }
        ],
        code:[
          // { validator: validateCode, trigger: 'blur' }
        ],
      },
      getcode: null,    //验证码
      loginToken:null,  //登录TOKEN
      loginTokenValue:null,   // 登录TokenValue
      isShow: true,           //是否显示注册登录框
      isPay: false,           //是否支付成功
      startTime:null,         //支付时间
      countTime:null,         //剩余时间
      expiredTime:null,       //结束时间
      state:0,                //流程状态:0.待支付，1.绘制模板，2.编排任务，3.体验，4.结束
      payTimer:null,
    };
  },
  created(){
    if(this.$i18n.locale == 'en'){
      this.isShow = false;
    }
    if(this.$i18n.locale == 'zh'){
      this.isShow = true;
    }
    if(localStorage.getItem('token') == null){
      this.exitFun();
    }
    this.countTime = window.sessionStorage.getItem('countTime');
    sessionStorage.setItem('exFlag',0);
  },
  async mounted(){
    if(localStorage.getItem('token') !==null || this.$store.state.token !== null || this.$store.state.token !== '' || this.$store.state.token !== 'undefined'){
      this.isLogin = true;
      this.$axios.get('/expUser/frontUser/getMobile').then( res => {
        if(res.data.code == 200){
          this.mobile = res.data.data.mobile;
        }
        if(res.data.msg == '当前用户未登录，无法获取手机号！'){
          this.exitFun();
        }
      });
    }
    if(localStorage.getItem('token') ==null || this.$store.state.token == null || this.$store.state.token == 'undefined'){
      this.isLogin = false;
      this.isShow = true;
      console.log('token:',localStorage.getItem('token'))
      console.log('isShow:',this.isShow);
      console.log('isLogin:',this.isLogin);
    }
    // 调用流程接口,保证获取state的值
    await this.getProcess();
    // 支付成功且接口流程state=1进入到绘制模板阶段,启动倒计时
    if(this.isPay == true || (this.state !== 0 && this.state !== 6)){
      window.sessionStorage.setItem('payState',this.state);
      window.sessionStorage.setItem('expiredTime',this.expiredTime);
      this.payCountTime();
      console.log('支付成功');
    }
  },
  methods: {
    ...mapMutations(['setToken','delToken']),
    handleCommand(command) {
      this.$store.commit("set_currentLanguage", command);
      this.$store.commit("SET_LANGUAGE", command);
      this.$i18n.locale = command;
      if(this.$i18n.locale == 'en'){
        this.isShow = false;
        // this.$router.push({path:'/home'})
      }
      if(this.$i18n.locale == 'zh'){
        this.isShow = true;
      }
    },
    ToDeveloperFuc() {
      let { href } = this.$router.resolve({ path: "/developer" });
      window.open(href, "_blank");
    },
    toMybitt() {
      window.open("https://www.mybitt.io/", "_blank");
    },
    jumpCase(){
      this.$router.push({path: '/case' });
      console.log('点了',this.$router);
    },
    // 切换账号登录，手机号登录
    handleSelect(){
      if(this.tab==1){
        this.index=1
      }
      if(this.tab==2){
        this.index=2
      }
    },
    // 获取手机验证码按钮
    getCode(formName,form){
      // this.codeTime();
      var url = '/expUser/frontUser/vcode/' + form.mobile;
      this.$refs[formName].validateField('mobile',errMsg =>{
        if(errMsg == ''){
          this.$axios.get(url).then( res => {
            this.getcode = res.data.data.vcode;
            this.codeTime();
          });
        }
      })
    },
    //验证码倒计时
    codeTime(){
      let time = 60;
      let timer = setInterval(() =>{
        if(time == 0){
          clearInterval(timer);
          this.codeTitle = "获取验证码";
          this.disabled = false;
        }else{
          // 倒计时
          this.codeTitle = time + "秒后重试";
          this.disabled = true;
          time --;
        }
      }, 1000)
    },
    // 登录按钮
    login(formName,form){
      var that = this;
      if(that.index == 1){
        var bodyQuery = {
          "loginType": 0,
          "mobile": form.account,
          "password": form.password,
          "vcode": form.code
        }
        that.$refs[formName].validateField('account',errMsg => {
          if(errMsg == ''){
            that.$refs[formName].validateField('password',errMsg => {
              if(errMsg == ''){
                that.$axios.post('/expUser/frontUser/userLogin',bodyQuery).then( res => {
                  console.log('loginRes',res);
                  if(res.data.code == 200){
                    that.$message({
                      message: res.data.msg,
                      type: 'success',
                      duration:1000
                    });
                    that.loginToken = res.data.data.token;
                    that.loginTokenValue = res.data.data.tokenValue;
                    that.setToken({token:that.loginToken,tokenValue:that.loginTokenValue});
                    that.isLogin = true;
                    that.dialogVisible = false;
                    that.$refs[formName].resetFields();
                    that.getProcess();
                    that.getMobile();
                  }else{
                    that.$message({
                      message:res.data.msg,
                      type:'error'
                    })
                  }
                })
              }
            })
          }
        })
      }
      if(that.index ==2){
        var bodyQuery = {
          "loginType": 1,
          "mobile": form.mobile,
          "password": form.password,
          "vcode": form.code
        }
        that.$refs[formName].validateField('mobile',errMsg => {
          if(errMsg == ''){
            that.$axios.post('/expUser/frontUser/userLogin',bodyQuery).then( res => {
              console.log('loginRes',res);
              if(res.data.code == 200){
                that.$message({
                  message: res.data.msg,
                  type: 'success',
                  duration:1000
                });
                that.loginToken = res.data.data.token;
                that.loginTokenValue = res.data.data.tokenValue;
                that.setToken({token:that.loginToken,tokenValue:that.loginTokenValue});
                that.isLogin = true;
                that.dialogVisible = false;
                that.$refs[formName].resetFields();
                that.getProcess();
                that.getMobile();
              }else{
                that.$message({
                  message:res.data.msg,
                  type:'error'
                })
              }
            })
          }
        })
      }
    },
    // 忘记密码按钮
    forget(){
      this.type = 1
      this.dialogVisible1 = true;
      this.dialogVisible = false;
    },
    // 注册账号弹窗按钮
    getAccount(){
      this.type = 2;
      this.dialogVisible1 = true;
      this.dialogVisible = false;
    },
    // 返回账号弹窗登录
    returnLogin(formName){
      this.index = 1;
      this.$refs[formName].resetFields();
      this.dialogVisible1 = false;
      this.dialogVisible = true
    },
    // 协议弹窗按钮
    userProtocol(){
      this.protocolType = 1;
      this.innerVisible = true;
    },
    // 隐私政策按钮
    privacy(){
      this.protocolType = 2;
      this.innerVisible = true;
    },
    // 聚焦手机号
    getFocus(){
      this.$refs['mark'].focus();
    },
    // 立即注册按钮
    regitser(formName,form){
      var bodyQuery = {
          "mobile": form.mobile,
          "password": form.firstPwd,
          "rePassword": form.secondPwd,
          "vcode": form.code
      };
      if(this.registerForm.checked == false){
        this.$message({
          message:'请勾选用户协议！',
          type:'error'
        })
      }else{
        console.log('valid',this.$refs[formName]);
        this.$refs[formName].validate(valid => {
          console.log('appear');
          if(valid){
            // 调用接口
            if(this.type == 1){
              this.$axios.post('/expUser/frontUser',bodyQuery)
              .then(res => {
                if(res.data.code == 200){
                  this.$message({
                    message: res.data.msg,
                    type:'success'
                  })
                  this.dialogVisible1 = false;
                }else{
                  this.$message({
                    message: res.data.msg,
                    type: 'error'
                  })
                }
              })
              .catch(err => {
                console.error(err); 
              })
            }else{
              this.$axios.put('/expUser/frontUser',bodyQuery)
              .then(res => {
                if(res.data.code == 200){
                  this.$message({
                    message: res.data.msg,
                    type:'success'
                  })
                  this.dialogVisible1 = false;
                }else{
                  this.$message({
                    message: res.data.msg,
                    type: 'error'
                  })
                }
              })
              .catch(err => {
                console.error(err); 
              })
            }
          }
        })
      }
    },
    // 退出
    exitFun(){
      var that = this;
      that.$axios.get('/expUser/frontUser/exitLogin').then( res => {
        console.log('exitRes',res);
        if(res.data.code == 200){
          // that.isLogin = false;
          // that.isShow = true;
          that.delToken({token:that.loginToken,tokenValue:that.tokenValue});
          localStorage.clear();
          if(sessionStorage.getItem('payState') !==null && sessionStorage.getItem('payState') > 0){
            sessionStorage.clear();
            that.$router.push({path:'/experience'});
            clearInterval(payTimer)
          }
        }
        if( res.data.code == 500){
          that.delToken({token:that.loginToken,tokenValue:that.tokenValue});
          localStorage.removeItem('token');
          localStorage.removeItem('tokenValue');
        }
      }).catch(function(error){
        if (error.response){
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        }
      })
      this.isLogin = false;
    },
    // 关闭注册忘记密码弹窗
    closeRegisterAndForget(formName){
      this.$refs[formName].resetFields();
    },
    // 获取手机号
    getMobile(){
      var that = this;
      that.$axios.get('/expUser/frontUser/getMobile').then( res => {
        console.log("res",res);
        if(res.data.code == 200){
          that.mobile = res.data.data.mobile;
        }
        if(res.data.msg == '请传递token参数！'){
          that.getMobile();
        }
        if(res.data.msg == '服务未找到'){
          that.exitFun();
        }
      });
    },
    // 显示登录注册弹窗
    showLoginDialog(){
      this.dialogVisible = true;
    },
    // 支付完成，剩余体验时间倒计时
    payCountTime(){
      var that = this;
      var endTime = that.expiredTime;     //结束时间戳
      var h,m,s = 0;
      var currentTime = 0;
      that.payTimer = setInterval(() => {
          setTimeout(()=>{
              // 体验一小时结束
               // 倒计时
                var nowTime = new Date().getTime();   //获取实时时间
                currentTime = endTime - nowTime;
                if(currentTime < 0 || that.state == 0 || sessionStorage.getItem('payState') == 0 || sessionStorage.getItem('countTime') == '00:00:00'){
                  this.$router.push({ path: "/experience" });
                  window.sessionStorage.removeItem('countTime');
                  window.sessionStorage.setItem('payState',that.state);
                  clearInterval(that.payTimer);
                  that.$nextTick(function(){
                    that.isPay = false;
                    var del = document.getElementById('delTime');
                    del.remove();
                  });
                }
                // that.countExit();
                // 格式化时分秒
                h = Math.floor(Math.floor(currentTime / 1000 / 60 / 60 / 24)*24 + (currentTime / 1000 / 60 / 60 % 24))
                m = Math.floor(currentTime / 1000 / 60 % 60 )
                s = Math.floor(currentTime / 1000 % 60 )
                if(s < 10){
                  s = '0' + s
                }
                if(m < 10){
                  m = '0' + m
                }
                if(h < 10){
                  h = '0' + h
                }
                window.sessionStorage.setItem('countTime',that.countTime);
                window.sessionStorage.setItem('currentTime',currentTime);
                that.countTime = h + ':' + m + ':' + s;
                // 倒计时3分钟提示体验结束
                if((sessionStorage.getItem('currentTime') < 180000 || that.state == 0) && sessionStorage.getItem('exFlag') == 0){
                  sessionStorage.setItem('exFlag',1);
                  // 创建元素
                  const h = that.$createElement;
                  that.$message({
                    duration:0,
                    showClose:true,
                    type: 'warning',
                    message: h('p', null, [
                      h('span', null, '体验时间不足'),
                      h('i', { style: 'color: teal' }, '3分钟'),
                      h('span', null, '哟!')
                    ]),
                  });
                  // this.$confirm('体验时间仅剩'+ sessionStorage.getItem('countTime') + '秒后结束' +'?', '注意', {
                  //   confirmButtonText: '确定',
                  //   cancelButtonText: '取消',
                  //   type: 'warning'
                  // }).then(() => {
                  //   sessionStorage.setItem('exFlag',1);
                  // }).catch(() => {
                  //   sessionStorage.setItem('exFlag',1);   
                  // });
                }
          }, 500)
      }, 1000)
    },
    // 登录成功后获取流程码,且有流程状态码
    async getProcess(){
      var that = this;
      try {
        var res = await that.$axios.get('/exp-guide/api/process');
        if(res && res.data && res.data.code == 200){
          that.startTime = res.data.data.startTime;
          that.expiredTime = res.data.data.expiredTime;
          that.state = res.data.data.state;
          window.sessionStorage.setItem('payState',res.data.data.state);
          console.log('proRes:',res);
        }
      } catch (error) {
        console.log('processError:',error);
      }
    },
  }
};
</script>

<style lang="less">
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 80px;
  color: #282828;
  background: #fff;
  box-shadow:0px 2px 7px 0px rgba(221,221,221,0.5);
  z-index: 20;
  .panel {
    height: 100%;
  }
  .el-dropdown {
    color: #282828;
    &:hover {
      color: #f8a747;
    }
  }
  .logo {
    height: 38px;
    margin-right: 10px;
  }
  .header-item {
    display: inline-block;
    margin: 0 15px;
    cursor: pointer;
    &:hover {
      color: #f8a747;
    }
    &.active {
      color: #f8a747;
    }
  }
  .en {
    .header-item {
      margin: 0 10px;
    }
  }
  .el-dropdown-link {
    display: inline-block;
    height: 100%;
  }
}
.el-menu-demo {
  .menuItem {
    font-size: 16px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    line-height: 24px;
  }
}
.regitserForm .el-form-item__error{
  margin-left: 36px;
}
.el-button.iconfont.iconpassword.myIcon.el-button--default.el-button--small{
  margin-top: 13px;
}
.mySecret{
  margin-left: 3px;
}
.loginDialog{
  margin-top:100px;
  border-radius: 8px;
}
.loginDialog1 .el-dialog{
  border-radius: 8px;
}
.loginDialog2 .el-dialog{
  border-radius: 8px;
}
.loginDialog1 .el-dialog__title{
  width:64px;
  height:24px;
  font-size:16px;
  font-family:PingFangSC-Medium,PingFang SC;
  font-weight:500;
  color:rgba(96,96,96,1);
  line-height:24px;
  margin-top:60px
}
.el-button.loginBtn{
  background: #F8A747;
  border: 0px solid;
  border-radius: 4px;
  color: #FFFFFF;
  margin-left: 43px;
  margin-top:10px;
  height:40px;
  width:368px
}
.el-button.loginBtn.el-button:focus {
    color: #FFFFFF;
    border-color: none;
    background-color: rgba(248,167,71,0.5);
}
.el-button.loginBtn.el-button:hover {
    color: #FFFFFF;
    border-color: none;
    background-color: rgba(248,167,71,0.5);
}
.textBtn.el-button{
  color: #F8A747;
  border-color: #fff;
  background-color: #fff;
}
.textBtn.el-button:hover{
  color: #F8A747;
  border-color: #fff;
  background-color: #fff;
}
.textBtn.el-button:hover{
  color: #F8A747;
  border-color: #fff;
  background-color: #fff;
}
.dividBtn .el-radio-button__inner {
  border:none;
  background: #fff;
  font-size:16px;
  font-family:PingFangSC-Regular,PingFang SC;
  font-weight:400;
  line-height:24px;
  padding:0px;
  border-radius: none;
  padding-bottom: 5px;
}
.dividBtn .el-radio-button__orig-radio:checked+.el-radio-button__inner {
    color: #fff;
    background-color: #fff;
    color: #F8A747;
    border-color: #fff;
    -webkit-box-shadow: none;
    box-shadow: none;
    border-bottom: 2px solid #F8A747;
}
.dividBtn.el-radio-button:first-child .el-radio-button__inner {
    border-left: none!important;
    border-radius: 4px 0 0 4px;
    -webkit-box-shadow: none!important;
    box-shadow: none!important;
    border-radius: 0px;
}
.dividBtn.el-radio-button:last-child .el-radio-button__inner{
  border-radius: 0px;
}
.dividBtn .el-radio-button__inner:hover {
    color: #409EFF;
}
.loginDialog .el-dialog{
  margin-top:100px;border-radius: 8px
}
.mySelect{
  width: 78px;
  height: 40px;
  background-color: #fff;
  border: 1px solid #D9D9D9;
  border-left: none;
  border-right: none;
  border-radius: 4px;
}
.phoneInput.el-input{
  width: 368px;
  border-top: 1px;
  border-radius: 4px;
  margin-left: 36px;
}
.registerBtn.el-button{
  width: 368px;
  height: 40px;
  margin-left:38px;
  background-color: #F8A747;
  color: #FFFFFF;
  border-radius:4px;
  border-color: #F8A747;
}
.registerBtn.el-button.span{
  width:112px;
  height:24px;
  font-size:16px;
  font-family:PingFangSC-Regular,PingFang SC;
  font-weight:400;
  color:rgba(255,255,255,1);
  line-height:24px;
}
.registerBtn.el-button:focus {
    color: #FFFFFF;
    border-color: none;
    background-color: rgba(248,167,71,0.5);
}
.registerBtn.el-button:hover {
    color: #FFFFFF;
    border-color: rgba(248,167,71,0.5);
    background-color: rgba(248,167,71,0.5);
}
.registerBtn.el-button:focus,.el-button:hover {
    color: #F8A747;
    border-color: rgba(248,167,71,0.5);
    background-color: rgba(248,167,71,0.5);
    // border-color: #fff!important;
    // background-color: #fff!important;
}
.returnLogin.el-button{
  float: right;
  margin-right: 30px;
  margin-bottom: 0px;
  width:80px;
  height:22px;
  font-size:13px;
  font-family:PingFangSC-Regular,PingFang SC;
  font-weight:400;
  color:rgba(94,139,255,1);
  line-height:22px;
  border-color: #fff;
  background-color: #fff;
}
.myCheck{
  margin-left: 38px;
}
.myCheck.el-checkbox{
  width:294px;
  height:14px;
  font-size:14px;
  font-family:SourceHanSansCN-Normal,SourceHanSansCN;
  font-weight:400;
  color:rgba(96,96,96,1);
  line-height:21px;
}
.myCheck .el-checkbox__inner{
  border-radius: 50%;
}
.myCheck .el-button--text{
  color: #F8A747;
  
}
.myCheck .el-checkbox__input.is-checked+.el-checkbox__label {
    color: #606060;
}
.myCheck .el-checkbox__input.is-checked .el-checkbox__inner, .el-checkbox__input.is-indeterminate .el-checkbox__inner {
    background-color: #F8A747;
    border-color: #F8A747;
}
.myCheck .el-checkbox__inner:hover {
    border-color: #F8A747;
}
.myCheck .el-checkbox__inner .is_focus{
  border-color: #F8A747;
}
.testBtn.el-button+.el-button {
    margin-left: 0px;
}
.testBtn.el-button{
  border-color: #fff;
  background-color: #fff;
}
// 登录表单
.loginForm .el-form-item__error {
    color: #F56C6C;
    font-size: 12px;
    line-height: 1;
    padding-top: 4px;
    position: absolute;
    top: 100%;
    left: 0;
    margin-left: 50px;
}
// 登录倒计时
.countdown{
  font-size:16px;
  font-family:PingFangSC-Regular,PingFang SC;
  font-weight:400;
  color:rgba(248,167,71,1);
  line-height:25px;
  margin-left: 10px;
}
.userName{
  border: 1px solid #fff;
}
</style>
<style>
.el-button.exitBtn{
  width: 130px;
  height: 10px;
  font-size: 15px;
  border: 1px solid #fff;
  text-align: center;
  padding-top:5px
}
.exitBtn.el-button:hover {
    color: #444444;
    border-color: #fff;
    background-color: #fff;
}.exitBtn.el-button:focus {
    color: #444444;
    border-color: #fff;
    background-color: #fff;
}
</style>
