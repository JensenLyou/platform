<template>
  <div class="footer">
    <div class="panel">
      <div class="flex-between">
        <div class="fs30 text-left">
          <div>{{$t("web.weTry01")}}</div>
          <div>{{$t("web.weTry02")}}</div>
        </div>
        <div class="startNow" @click="handleToDeveloper">{{$t("web.StartNow")}}</div>
      </div>
      <div class="footer-line"></div>
      <!-- <div class="flex-between-items-start mg-b60">
        <div class="flex-items-center">
          <img class="logo"
               src="./../assets/logo.png"
               alt="UDO_通用型数字化开放平台_区块链体验仿真_搭链体验_创客区块链">
          <div>
            <div class="fs22">{{$t("page.logoZh")}}</div>
            <div>{{$t("page.logoEn")}}</div>
          </div>
        </div>
        <div>
          <div class="fs16 mg-b20">{{$t("web.BusinessCooperation")}}</div>
          <div class="fs20">0755-86524558</div>
        </div>
        <div>
          <div class="fs16 mg-b20">{{$t("web.TechnicalSupport")}}</div>
          <div class="fs20">chuangke@m-chain.com</div>
        </div>
      </div>-->
      <div>
        <el-row>
          <el-col :span="12">
            <div class="msg">
              <ul>
                <li class="myLi">
                  <i class="el-icon-phone myIcon"></i>
                  <span class="myMsg">{{$t("web.CooperationPhone")}}：0755-86567534</span>
                </li>
                <li class="myLi">
                  <i class="el-icon-s-goods myIcon"></i>
                  <span class="myMsg">{{$t("web.TechSupport")}}：chuangke@m-chain.com</span>
                </li>
                <li class="myLi">
                  <i class="el-icon-message myIcon"></i>
                  <span class="myMsg">{{$t("web.BusinessCooperation")}}：bd@m-chain.com</span>
                </li>
                <li class="myLi">
                  <i class="el-icon-user-solid myIcon"></i>
                  <span class="myMsg">{{$t("web.UserSupport")}}：support@m-chain.com</span>
                </li>
                <li class="myLi">
                  <i class="el-icon-plus myIcon"></i>
                  <span class="myMsg">{{$t("web.JoinUs")}}：hr@m-chain.com</span>
                </li>
                <li class="myLi"> 
                  <i class="el-icon-location inblock adressIcon"></i>
                  <span class="myMsg inblock address">{{$t("web.CompanyAddress")}}</span>
                </li>
              </ul>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="myForm">
              <el-form :model="form" ref="form" :rules="rules">
                <el-form-item>
                  <div class="formTitle">{{$t("web.ContactUs")}}</div>
                </el-form-item>
                <el-form-item style="margin-bottom:16px" prop="name">
                  <el-input
                    v-model="form.name"
                    prefix-icon="el-icon-user-solid"
                    :placeholder="$t('web.footerInput1')"
                    class="myInput"
                    clearable
                  ></el-input>
                </el-form-item>
                <el-form-item style="margin-bottom:16px" prop="phone">
                  <el-input
                    v-model="form.phone"
                    prefix-icon="el-icon-phone"
                    :placeholder="$t('web.footerInput2')"
                    class="myInput"
                    clearable
                  ></el-input>
                </el-form-item>
                <el-form-item style="margin-bottom:16px" prop="email">
                  <el-input
                    v-model="form.email"
                    prefix-icon="el-icon-message"
                    :placeholder="$t('web.footerInput3')"
                    class="myInput"
                    clearable
                  ></el-input>
                </el-form-item>
                <el-form-item style="margin-bottom:16px" prop="need">
                  <el-input
                    v-model="form.need"
                    :placeholder="$t('web.footerInput4')"
                    type="textarea"
                    class="myTextarea"
                    :autosize="false"
                  ></el-input>
                </el-form-item>
                <el-form-item>
                  <el-button @click="submit('form')" class="myButton">{{$t("web.submit")}}</el-button>
                </el-form-item>
              </el-form>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
    <div class="copyright">
      Copyright © 2018-2019深圳创客区块链技术有限公司 All Rights Reserved.
      <br>
      <el-link type="warning" :underline="false" href="http://www.beian.miit.gov.cn/" target="_blank">粤ICP备17070657号-3</el-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: null,
        email: null,
        phone: null,
        need: null,
      },
      rules:{
        name:[{ required: true, message: this.$t("web.footerInput1"), trigger: 'blur' }],
        email:[{ required: true, message: this.$t("web.footerInput3"), trigger: 'blur'}],
        phone:[{ required: true, message: this.$t("web.footerInput2"), trigger: 'blur'}],
        need:[{ required: true, message: this.$t("web.footerInput4"), trigger: 'blur'}],
      }
    };
  },
  methods: {
    handleToDeveloper() {
      if(window.sessionStorage.getItem('payState') > 0){
        this.$router.push({ path: "/templet" });
      }
      console.log('payState',window.sessionStorage.getItem('payState'));
      if(window.sessionStorage.getItem('payState') == 0 || window.sessionStorage.getItem('payState') === null){
        scrollTo(0,0);
        this.$router.push({ path: "/experience"});
      }
    },
    submit(form){
      var that = this;
      var bodyQuery = {
        "contactMail": that.form.email,
        "contactName": that.form.name,
        "contactTel": that.form.phone,
        "remark": that.form.remark
      }
      that.$refs[form].validate( (valid) => {
        if(valid){
          that.$axios.put('/expUser/fronContact',bodyQuery).then( res => {
            if(res.data.code == 200){
              that.$message({
                message:'提交成功',
                type:'success'
              })
              that.$refs[form].resetFields();
            }
          })
          console.log('valid',valid);
        }else{
          console.log('error!');
          return false;
        }
      })
    }
  },
};
</script>

<style lang="less">
.footer {
  color: #fff;
  background-color: #23272a;
  padding-top: 70px;
  .startNow {
    width: 240px;
    height: 80px;
    line-height: 80px;
    text-align: center;
    font-size: 20px;
    cursor: pointer;
    border-radius: 2px;
    background-color: #f8a747;
  }
  .footer-line {
    height: 1px;
    background-color: #545454;
    margin: 60px 0 0 0;
  }
  .logo {
    height: 38px;
    margin-right: 10px;
  }
  .copyright {
    line-height: 30px;
    font-size: 16px;
    text-align: center;
    background-color: #18191b;
  }
}
.msg {
  margin-top: 135px;
  margin-bottom: 272px;
}
.myMsg {
  width: 197px;
  height: 22px;
  font-size: 16px;
  font-family: SourceHanSansCN-Regular, SourceHanSansCN;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  line-height: 22px;
  margin-left: 26px;
  text-align: left;
}
// .adressIcon{
//   position: relative;
//   top: -21px;
// }
.address{
  width: 500px;
  vertical-align: middle;
}
.myIcon {
  font-size: 17px;
}
.myLi {
  margin-bottom: 23px;
}
.myForm {
  width: 552px;
  height: 517px;
  background: linear-gradient(
    270deg,
    rgba(244, 245, 247, 1) 0%,
    rgba(244, 244, 247, 1) 100%
  );
  border-radius: 4px;
  margin-top: 52px;
  margin-bottom: 81px;
  .el-form-item__error {
    color: #F56C6C;
    font-size: 12px;
    line-height: 1;
    padding-top: 4px;
    position: absolute;
    top: 100%;
    left: 52px;
  }
}
.formTitle {
  height: 24px;
  font-size: 24px;
  font-family: SourceHanSansCN-Normal, SourceHanSansCN;
  font-weight: 400;
  color: rgba(50, 50, 93, 1);
  line-height: 36px;
  margin-top: 49px;
  margin-left: 48px;
}
.myInput.el-input {
  width: 456px;
  height: 46px;
  margin-left: 48px;
}
.myInput .el-input__inner {
  width: 456px;
  height: 46px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.02),
    0px 1px 3px 0px rgba(50, 50, 93, 0.15);
  border-radius: 4px;
  font-size: 15px;
  font-family: SourceHanSansCN-Normal, SourceHanSansCN;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.25);
  line-height: 21px;
}
.myInput .el-input__prefix {
  top: 1px;
  left: 5px;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  font-size: 16px;
}
.myTextarea .el-textarea__inner {
  width: 456px;
  height: 104px;
  font-family: SourceHanSansCN-Normal, SourceHanSansCN;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.25);
  line-height: 21px;
  margin-left: 48px;
  font-size: 16px;
  box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.02),
    0px 1px 3px 0px rgba(50, 50, 93, 0.15);
}
.myButton {
  width: 456px;
  height: 51px;
}
.myButton.el-button--default {
  margin-left: 48px;
  background: rgba(248, 167, 71, 1);
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.08),
    0px 4px 6px 0px rgba(50, 50, 93, 0.11);
  border-radius: 4px;
  font-size: 14px;
  font-family: PingFangSC-Semibold, PingFang SC;
  font-weight: 600;
  color: rgba(255, 255, 255, 1);
  line-height: 20px;
  margin-top: 8px;
}
.myButton.el-button:focus {
  color: #ffffff;
  border-color: none;
  background-color: rgba(248, 167, 71, 0.5);
}
.myButton.el-button:hover {
  color: #ffffff;
  border-color: none;
  background-color: rgba(248, 167, 71, 0.5);
}
</style>
