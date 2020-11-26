<template>
  <div class="uploadFile ">
    <template v-if="type == 1">
      <div class="upload-img-btn have-img"
           v-if="imgUrl">
        <img :src="imgUrl"
             alt="UDO_通用型数字化开放平台_区块链体验仿真_搭链体验_创客区块链">
        <div class="shade"
             @click.prevent.stop="handleDetele">
          <span class="el-icon-delete"></span>
        </div>
      </div>
      <div v-else
           class="upload-img-btn"
           id="selectfiles">
        <span class="el-icon-plus"></span>
      </div>
      <div class="upload-img-tips inblock">
        <div v-for="(item, index) in $t('developer.publish.steps[0].iconUrl.rules')"
             :key="index">
          {{item}}
        </div>
      </div>
    </template>
    <template v-else>
      <div v-show="!attachName">
        <el-button id="selectfiles"
                   class="mg-r20">{{ $t("btn.select_file") }}</el-button>
        <div>{{tips}}</div>
      </div>

      <template v-if="multi_selection">
        <!-- 如果是多选 -->

        <div v-for="(item, index) in attachNameArr"
             :key="index">
          <div class="inblock mg-r20">{{item.attachName}}</div>
          <el-button plain
                     @click="handleDetele(index)"
                     size="mini"
                     v-show="item.attachName">{{ $t('btn.delete') }}</el-button>
        </div>

      </template>
      <template v-else>
        <!-- 如果是单选 -->
        <template v-if="type != 1 && attachName">
          <div class="inblock mg-r20">{{attachName}}</div>
          <el-button plain
                     @click="handleDetele"
                     size="mini"
                     v-show="attachName">{{ $t('btn.delete') }}</el-button>
        </template>
      </template>

    </template>

    <el-progress v-show="percentage &&  percentage != 100"
                 :percentage="percentage"
                 status="success"></el-progress>
    <!-- <div id="ossfile" v-show="!imgUrl">你的浏览器不支持flash,Silverlight或者HTML5！</div> -->
  </div>
</template>

<script>
import plupload from "plupload";
export default {
  props: {
    // 上传文件时的提示文字  上传类型为图片时  不要
    tips: {
      type: String
    },
    //  0为上传文件   1为上传图片
    type: {
      type: Number,
      default: 0
    },
    imgUrl: {
      type: String,
      default: ""
    },
    //  允许上传的格式
    mime_types: {
      type: Array,
      default: () => {
        //只允许上传图片和zip文件
        return [
          { title: "Image files", extensions: "png, jpg, gif" },
          { title: "Zip files", extensions: "zip,rar" }
        ];
      }
    },
    // 允许上传的文件大小
    max_file_size: {
      type: String,
      default: "20mb"
    },
    // 单选还是多选
    multi_selection: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      percentage: 0,
      url: "",
      attachName: "",
      // 多选
      attachNameArr: []
    };
  },
  mounted() {
    let _this = this;
    let accessid = "";
    let host = "";
    let policyBase64 = "";
    let signature = "";
    let callbackbody = "";
    let key = "";
    let expire = 0;
    let g_object_name = "";
    let g_object_name_type = "random_name";
    let now = Date.parse(new Date()) / 1000;
    let timestamp = Date.parse(new Date()) / 1000;
    let suffix = "";
    function send_request() {
      var xmlhttp = null;
      if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest();
      } else if (window.ActiveXObject) {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
      }

      if (xmlhttp != null) {
        // serverUrl是 用户获取 '签名和Policy' 等信息的应用服务器的URL，请将下面的IP和Port配置为您自己的真实信息。
        let serverUrl = "/base/OSS/GetPolicyToken";
        xmlhttp.onreadystatechange = state_Change;
        xmlhttp.open("GET", serverUrl, false);
        xmlhttp.send(null);
        return xmlhttp.responseText;
      } else {
        alert("Your browser does not support XMLHTTP.");
      }
      function state_Change() {
        if (xmlhttp.readyState == 4) {
          // 4 = "loaded"
          if (xmlhttp.status == 200) {
            // 200 = OK
            // ...our code here...
          } else {
            // alert("Problem retrieving XML data");
          }
        }
      }
    }

    function get_signature() {
      // 可以判断当前expire是否超过了当前时间， 如果超过了当前时间， 就重新取一下，3s 作为缓冲。
      now = Date.parse(new Date()) / 1000;
      timestamp = Date.parse(new Date()) / 1000;
      if (expire < now + 3) {
        let body = send_request();
        var obj = eval("(" + body + ")");
        host = obj["host"];
        policyBase64 = obj["policy"];
        accessid = obj["accessid"];
        signature = obj["signature"];
        expire = parseInt(obj["expire"]);
        callbackbody = obj["callback"];
        key = obj["dir"];
        return true;
      }
      return false;
    }

    function random_string(len) {
      len = len || 32;
      var chars = "ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678";
      var maxPos = chars.length;
      var pwd = "";
      for (let i = 0; i < len; i++) {
        pwd += chars.charAt(Math.floor(Math.random() * maxPos));
      }
      return pwd;
    }

    function get_suffix(filename) {
      let pos = filename.lastIndexOf(".");
      suffix = "";
      if (pos != -1) {
        suffix = filename.substring(pos);
      }
      return suffix;
    }

    function calculate_object_name(filename) {
      if (g_object_name_type == "local_name") {
        g_object_name += "${filename}";
      } else if (g_object_name_type == "random_name") {
        let suffix = get_suffix(filename);
        g_object_name = key + random_string(10) + suffix;
      }
      return "";
    }

    function get_uploaded_object_name(filename) {
      if (g_object_name_type == "local_name") {
        let tmp_name = g_object_name;
        tmp_name = tmp_name.replace("${filename}", filename);
        return tmp_name;
      } else if (g_object_name_type == "random_name") {
        return g_object_name;
      }
    }

    function set_upload_param(up, filename, ret) {
      if (ret == false) {
        ret = get_signature();
      }
      g_object_name = key;
      if (filename != "") {
        suffix = get_suffix(filename);
        calculate_object_name(filename);
      }
      let new_multipart_params = {
        key: g_object_name,
        policy: policyBase64,
        OSSAccessKeyId: accessid,
        success_action_status: "200", //让服务端返回200,不然，默认会返回204
        callback: callbackbody,
        signature: signature
      };

      up.setOption({
        url: host,
        multipart_params: new_multipart_params
      });

      up.start();
    }
    _this.uploader = new plupload.Uploader({
      runtimes: "html5,flash,silverlight,html4",
      browse_button: "selectfiles",
      multi_selection: false, // 单选
      flash_swf_url: "lib/plupload-2.1.2/js/Moxie.swf",
      silverlight_xap_url: "lib/plupload-2.1.2/js/Moxie.xap",
      url: "http://oss.aliyuncs.com",

      filters: {
        mime_types: _this.mime_types,
        max_file_size: _this.max_file_size, //最大只能上传10mb的文件
        prevent_duplicates: false //不允许选取重复文件
      },

      init: {
        PostInit: function() {},

        FilesAdded: function(up, files) {
          if (up.files.length > 5) {
            // 最多上传5张图
            _this.$message.error(
              _this.$store.state.currentLanguage == "zh"
                ? "最多只能上传五张图片"
                : "Can only upload up to five images"
            );
            _this.uploader.splice(5);

            return;
          }
          // _this.uploader.start();

          set_upload_param(_this.uploader, "", false);
        },

        BeforeUpload: function(up, file) {
          set_upload_param(up, file.name, true);
        },

        UploadProgress: function(up, file) {
          _this.percentage = file.percent;
        },

        FileUploaded: function(up, file, info) {
          if (info.status == 200) {
            // 传给后台的文件地址
            if (_this.multi_selection) {
              _this.attachNameArr.push({
                attachName: file.name,
                fileName: get_uploaded_object_name(file.name)
              });
              _this.$emit("upload-attachNameArr", {
                baseUrl: host,
                attachNameArr: _this.attachNameArr
              });
            } else {
              _this.attachName = file.name;
              _this.url = `${host}/${get_uploaded_object_name(file.name)}`;
              _this.$emit("upload-url", _this.url);
              _this.$emit("upload-fileName", file.name);
            }
          } else if (info.status == 203) {
            _this.$message.error(
              _this.$store.state.currentLanguage == "zh"
                ? "上传到OSS成功，但是oss访问用户设置的上传回调服务器失败，失败原因是:" +
                    info.response
                : "The upload to the OSS was successful, but the oss access user set upload callback server failed. The reason for the failure is:" +
                    info.response
            );
          } else {
            _this.$message.error(info.response);
          }
        },

        Error: function(up, err) {
          if (err.code == -600) {
            _this.$message.error(
              _this.$store.state.currentLanguage == "zh"
                ? "\n选择的文件太大了,请按要求上传文件大小"
                : "The file selected is too large. Please upload the file as required"
            );
          } else if (err.code == -601) {
            _this.$message.error(
              _this.$store.state.currentLanguage == "zh"
                ? "选择的文件后缀不对, 请按要求上传对应的文件类型"
                : "The selected file suffix is incorrect. Please upload the corresponding file type as required."
            );
          } else if (err.code == -602) {
            _this.$message.error(
              _this.$store.state.currentLanguage == "zh"
                ? "这个文件已经上传过一遍了"
                : "This file has been uploaded again."
            );
          } else {
            _this.$message.error("\nError xml:" + err.response);
          }
        }
      }
    });

    _this.uploader.init();
  },
  destroyed() {
    this.uploader = "";
  },
  methods: {
    handleDetele(index) {
      if (this.multi_selection) {
        this.attachNameArr.splice(index, 1);
        this.uploader.splice(index, 1);
      } else {
        this.attachName = "";
        this.$emit("upload-url", "");
      }
    }
  }
};
</script>

<style lang="less">
.uploadFile {
  .upload-img-btn {
    position: replace;
    display: inline-block;
    width: 100px;
    height: 100px;
    line-height: 100px;
    background: rgba(255, 255, 255, 1);
    border: 1px solid rgba(175, 175, 175, 1);
    border-radius: 5px;
    text-align: center;
    vertical-align: bottom;
    margin-right: 16px;
    cursor: pointer;
    .el-icon-plus {
      font-size: 20px;
      color: #afafaf;
    }
    &.have-img {
      border: none;
    }
    img {
      width: 100%;
      height: 100%;
    }
    .shade {
      display: none;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.5);
    }
    .el-icon-delete {
      color: #fff;
      font-size: 20px;
    }
    &:hover {
      .shade {
        display: inline-block;
      }
    }
  }
  .upload-img-tips {
    line-height: 1.8;
    vertical-align: bottom;
  }
}
</style>
