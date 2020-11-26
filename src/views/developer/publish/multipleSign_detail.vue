<template>
  <div class="developer-publish-multipleSign_detail">
    <div class="public-title clearfix relative">
      <div class="backbtn pointer"
           @click="handleBackFuc"><i class="el-icon-arrow-left"></i> <span class="ver-middle">{{ $t('page.Return') }}</span>
      </div>
      <div class="ver-middle text-center">{{ $t("btn.detail") }}</div>
      <div class="public-border mg-t18"></div>
      <div class="position-btn"
           v-show="tableData.length">
        <el-button type="primary"
                   size="small"
                   @click="DialogVisible= true">{{ $t("btn.add_manage") }}</el-button>
        <el-button type="primary"
                   size="small"
                   @click="DialogVisible02= true">{{ $t("btn.update_sign_number") }}</el-button>
      </div>

    </div>

    <div class="header-info">
      <div class="inblock update-icon-div">
        <div class="relative pointer update-icon-box"
             @click="DialogImg = true"><img :src="Info.iconUrl"
               alt="UDO_通用型数字化开放平台_区块链体验仿真_搭链体验_创客区块链">
          <div class="update-icon">{{i18n_detail.Modifytheicon}}</div>
        </div>
        <div class="text-center icon-name"
             :title="Info.name">{{Info.name}}</div>
      </div>
      <div class="inblock">
        <div>{{i18n_detail.TokenName}}：{{Info.name}}</div>
        <div>{{i18n_detail.Totalcirculation}}：{{ $validator.formatThusand(Info.totalNumber) }}</div>
        <div v-show="signInfo.masterAddress">{{i18n_detail.ManagerAddress}}：{{ signInfo.masterAddress}}</div>

      </div>
      <div class="inblock">
        <div>{{i18n_detail.EnglishAbbreviation}}：{{Info.tokenSymbol}}</div>
        <div>{{i18n_detail.Issueprice}}：{{Info.issuePrice}}</div>
        <div v-show="signInfo.masterThreshold">{{i18n_detail.Managethenumberofsignatures}}：{{ signInfo.masterThreshold }}</div>

      </div>
      <div class="inblock">
        <div>{{i18n_detail.Maximumdecimalpointnumber}}：{{Info.decimalUnits}}</div>
        <div>{{i18n_detail.TokenIdentification}}：{{Info.tokenID}}</div>
        <div v-show="signInfo.managerThreshold">{{i18n_detail.Numberofsignaturesexecuted}}：{{ signInfo.managerThreshold }}</div>
      </div>
    </div>

    <el-table :data="tableData"
              style="width: 100%">
      <el-table-column type="index"
                       :label="i18n_detail.Serialnumber"
                       align="center"
                       width="120">
      </el-table-column>
      <el-table-column prop="address"
                       :label="i18n_detail.ExecutorAddress"
                       align="center"
                       min-width="150">

      </el-table-column>
      <el-table-column :label="i18n_detail.Operation"
                       align="center"
                       min-width="120">
        <template slot-scope="scope">
          <el-button size="mini"
                     @click="handleDelete(scope.row.address)">{{ $t("btn.delete") }}</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-dialog :title="i18n_btn.add_manage"
               :visible.sync="DialogVisible"
               width="30%"
               center>

      <el-form :model="ruleFormManager"
               :rules="rulesManager"
               ref="ruleFormManager">

        <el-form-item prop="newAddress">
          <el-input v-model="ruleFormManager.newAddress"
                    :placeholder="i18n_ruleForm.managerAddress.placeholder"></el-input>
        </el-form-item>

      </el-form>

      <span slot="footer"
            class="dialog-footer">
        <el-button type="primary"
                   @click="handleAddManage">{{ $t("btn.next_step") }}</el-button>
      </span>
    </el-dialog>

    <el-dialog :title="i18n_btn.update_sign_number"
               :visible.sync="DialogVisible02"
               width="30%"
               center>
      <div class="sign-dialog">
        <el-form :model="ruleForm"
                 :rules="rules"
                 ref="ruleForm">
          <el-form-item prop="numberType">
            <el-select v-model="ruleForm.numberType">
              <el-option v-for="item in options"
                         :key="item.value"
                         :label="item.label"
                         :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item prop="number">
            <el-input v-model="ruleForm.number"
                      :placeholder="i18n_ruleForm.managerThreshold.placeholder"></el-input>
          </el-form-item>

        </el-form>
      </div>

      <span slot="footer"
            class="dialog-footer">
        <el-button type="primary"
                   @click="handleUpdate">{{ $t("btn.next_step") }}</el-button>
      </span>
    </el-dialog>

    <sign :titleName="titleName"
          :signVisible="visible"
          :params="SignParams"
          @sign-visible="handleSignVisible"
          @SignQRCode="handleGetSignQRCode"
          :callback="handleToDetail">
    </sign>

    <el-dialog :title="$t('prompt')"
               :visible.sync="DialogImg"
               width="30%"
               center
               @close="closeFuc">
      <el-form :model="ruleFormImg"
               :rules="rulesImg"
               ref="ruleFormImg"
               class="ruleForm">
        <el-form-item prop="iconUrl">
          <div class="text-left">
            <uploadFile @upload-url="uploadUrlFuc"
                        :type="1"
                        :mime_types="mime_types"
                        :imgUrl="ruleFormImg.iconUrl"
                        max_file_size="500kb"></uploadFile>

            <el-input v-model="ruleFormImg.iconUrl"
                      v-show="false"></el-input>
          </div>
        </el-form-item>
      </el-form>

      <span slot="footer"
            class="dialog-footer">
        <el-button type="primary"
                   @click="DialogFinishFun">{{ i18n_btn.finish }}</el-button>
      </span>
    </el-dialog>

    <sign :titleName="$t('page.Replacetokenicon')"
          :signVisible="DialogToken"
          :params="SignParamsToken"
          @sign-visible="handleSignVisibleToken"
          @SignQRCode="handleGetSignQRCodeToken"
          :callback="replaceSuccess">
    </sign>

  </div>
</template>

<script>
export default {
  data() {
    return {
      Info: {
        issueTime: "", //发行时间
        name: "", //token名称
        isBaseCoin: "", //是否主币
        totalNumber: "", //发行总量
        issuePrice: "", //发行价
        tokenSymbol: "", //token名称简写
        status: "", //状态1、启用0、禁用
        tokenID: "", //token标识
        iconUrl: "", //token图标
        restNumber: "", //余额
        decimalUnits: "" //最大小数点位数
      },
      signInfo: {
        managerAddresses: [],
        managerCount: "", // manager个数
        managerThreshold: "", // 执行者签名次数
        masterAddress: "", // 管理者签名地址
        masterThreshold: "" // 管理者签名次数
      },
      tableData: [],
      DialogImg: false,
      DialogToken: false,
      mime_types: [{ title: "Image files", extensions: "png" }],
      ruleFormImg: {
        iconUrl: "" //  token图标
      },
      rulesImg: {
        iconUrl: [
          {
            required: true,
            message: this.$t("developer.publish.steps[0].iconUrl.error"),
            trigger: "change"
          }
        ]
      },
      options: [
        {
          value: "2",
          label: this.$t("page.ExecutorSignatures")
        }
      ],
      ruleFormManager: {
        newAddress: ""
      },
      rulesManager: {
        newAddress: [
          {
            required: true,
            message: this.$t(
              "developer.publish.setting_multipleSign.ruleForm.managerAddress.label"
            ),
            trigger: "change"
          }
        ]
      },
      ruleForm: {
        numberType: "2",
        number: ""
      },
      rules: {
        numberType: [
          {
            required: true,
            message: this.$t("page.Pleaseselectasignaturetype"),
            trigger: "change"
          }
        ],
        number: [
          {
            required: true,
            message: this.$t("page.Pleaseenterthenumberofsignatures"),
            trigger: "change"
          }
        ]
      },

      visible: false,
      DialogVisible: false,
      DialogVisible02: false,
      SignQRCode: "",
      titleName: "",
      type: 0,
      oldAddress: "",
      SignQRCodeStart: "",
      loadingBtn: false,
      SignParams: null,
      SignParamsToken: null
    };
  },
  computed: {
    // 国际化
    i18n_ruleForm() {
      return this.$t("developer.publish.setting_multipleSign.ruleForm");
    },
    i18n_detail() {
      return this.$t("developer.publish.multipleSign_detail");
    },
    i18n_btn() {
      return this.$t("btn");
    }
  },
  created() {
    this.titleName = this.$t("page.Deleteperformer");
    this.queryTokenInfo();
  },
  methods: {
    handleSignVisible(val) {
      this.visible = val;
    },
    // 获取二维码地址给后台
    handleGetSignQRCode(val) {
      this.SignQRCode = val;
    },
    handleSignVisibleToken(val) {
      this.DialogToken = val;
    },
    // 获取二维码地址给后台
    handleGetSignQRCodeToken(val) {
      this.SignQRCodeStart = val;
    },
    uploadUrlFuc(url) {
      this.ruleFormImg.iconUrl = url;
    },
    handleBackFuc() {
      this.$router.back();
    },
    queryTokenInfo() {
      this.$api.queryTokenInfo(this.$route.query.tokenId).then(res => {
        this.Info = res.data.data;

        let signInfo = {
          managerAddresses: [],
          managerCount: "", // manager个数
          managerThreshold: "", // 执行者签名次数
          masterAddress: "", // 管理者签名地址
          masterThreshold: "" // 管理者签名次数
        };
        this.signInfo = res.data.signInfo ? res.data.signInfo : signInfo;

        let arr = [];
        this.signInfo.managerAddresses &&
          this.signInfo.managerAddresses.forEach(item => {
            arr.push({ address: item });
          });
        this.tableData = arr;
      });
    },
    handleAddManage() {
      this.$refs.ruleFormManager.validate(valid => {
        if (valid) {
          let params = {
            signType: 7,
            tokenID: this.$route.query.tokenId,
            newAddress: this.ruleFormManager.newAddress
          };
          this.titleName = this.$t(" page.Addperformer");
          this.type = 1;
          this.SignParams = params;
        }
      });
    },
    handleUpdate() {
      this.$refs.ruleForm.validate(valid => {
        if (valid) {
          let params = {
            signType: this.ruleForm.numberType == 1 ? 15 : 10, // 15 master  10 manager
            tokenID: this.$route.query.tokenId,
            threshold: this.ruleForm.number
          };
          this.titleName = this.$t("btn.update_sign_number");
          this.type = 2;
          this.SignParams = params;
        } else {
          return false;
        }
      });
    },
    handleDelete(address) {
      this.$confirm(
        this.$t("page.suredeletetheperformer"),
        this.$t("page.prompt"),
        {
          confirmButtonText: this.$t("page.determine"),
          cancelButtonText: this.$t("page.cancel"),
          type: "warning"
        }
      )
        .then(() => {
          let params = {
            signType: 9,
            tokenID: this.$route.query.tokenId,
            oldAddress: address
          };
          this.type = 0;
          this.titleName = this.$t("page.Deleteperformer");
          this.oldAddress = address;
          this.SignParams = params;
        })
        .catch(() => {});
    },
    handleToDetail(msg) {
      let params = {};
      if (this.type == 0) {
        params = {
          type: this.type,
          address: this.oldAddress,
          msg: msg
        };
      } else if (this.type == 1) {
        params = {
          type: this.type,
          address: this.ruleFormManager.newAddress,
          msg: msg
        };
      } else {
        params = {
          type: this.type,
          number: this.ruleForm.number,
          msg: msg
        };
      }
      params.tokenId = this.$route.query.tokenId;
      this.$router.push({
        path: "/developer/multipleSign_detail_handle",
        query: params
      });
    },

    DialogFinishFun() {
      this.$refs.ruleFormImg.validate(valid => {
        if (valid) {
          let params = {
            signType: 16,
            tokenID: this.$route.query.tokenId,
            iconUrl: this.ruleFormImg.iconUrl
          };
          this.SignParamsToken = params;
        }
      });
    },
    // 替换成功
    replaceSuccess(msg) {
      this.DialogImg = false;
      this.$message.success(msg);
      this.queryTokenInfo();
    },
    closeFuc() {
      this.$refs.ruleFormImg && this.$refs.ruleFormImg.resetFields();
    }
  }
};
</script>

<style lang="less">
.developer-publish-multipleSign_detail {
  .backbtn {
    position: absolute;
    left: 0;
    top: 0;
  }
  .header-info {
    padding: 30px;
    background-color: #f5f5f5;
    margin: 25px 0;
    line-height: 2;
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    flex-wrap: wrap;
    .update-icon-box {
      display: inline-block;
      width: 110px;
      height: 110px;
    }
    img {
      display: inline-block;
      width: 100%;
      height: 100%;
      border-radius: 5px;
      vertical-align: top;
    }
  }
  .sign-dialog {
    width: 300px;
    margin: 0 auto;

    .el-select {
      width: 300px;
    }
  }
  .position-btn {
    position: absolute;
    top: 0;
    right: 0;
  }
  .update-icon {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 20px;
    line-height: 20px;
    text-align: center;
    background: rgba(27, 27, 27, 0.6);
    color: #fff;
  }
  .update-icon-div {
    text-align: center;
    margin-right: 20px;
    .icon-name {
      max-width: 160px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
}
</style>
