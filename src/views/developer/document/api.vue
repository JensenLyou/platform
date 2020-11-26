<template>
  <div class="api">
    <dir-list :active="active"
              :dirList="dirList"
              @dirListId="dirListId"
              @activeFuc="activeFuc"></dir-list>
    <div class="content">
      <h1>{{obj.name}}</h1>

      <h4>{{$t("developer.documentation.Features")}}</h4>
      <div class="des" v-html="obj.remark"></div>

      <h4>URL</h4>
      <div class="des">{{ toUpperCase(obj.method) }} {{obj.requestUrl}}</div>

      <!-- 请求参数 -->
      <div class="mg-b20"
           v-if="obj.requestParams">
        <h4>{{$t("developer.documentation.Requestparameter")}}</h4>
        <div>
          <el-table :data="obj.requestParams"
                    border
                    style="width: 100%">
            <el-table-column prop="arg_name"
                             :label="$t('developer.documentation.parameter')"
                             width="180">
            </el-table-column>
            <el-table-column prop="is_require"
                             :label="$t('developer.documentation.necessary')"
                             width="180">
            </el-table-column>
            <el-table-column prop="data_type"
                             :label="$t('developer.documentation.ParameterType')">
            </el-table-column>
            <el-table-column prop="description"
                             :label="$t('developer.documentation.description')">
            </el-table-column>
          </el-table>
        </div>
      </div>

      <!-- 请求参数字段说明 -->
      <div v-if="obj.requestParamsMemos">

        <div class="mg-b20"
             v-for="(item, index) in obj.requestParamsMemos"
             :key="index">
          <h4>{{item.reqFiled.title}}</h4>
          <div>
            <el-table :data="item.items"
                      border
                      style="width: 100%">
              <el-table-column prop="data_name"
                               :label="$t('developer.documentation.parameter')"
                               width="180">
              </el-table-column>
              <el-table-column prop="is_require"
                               :label="$t('developer.documentation.necessary')"
                               width="180">
              </el-table-column>
              <el-table-column prop="data_type"
                               :label="$t('developer.documentation.ParameterType')">
              </el-table-column>
              <el-table-column prop="description"
                               :label="$t('developer.documentation.description')">
              </el-table-column>
            </el-table>
          </div>
        </div>
      </div>

      <!-- 请求的例子 -->
      <div v-if="obj.requestSamples">
        <div v-for="(item, index) in obj.requestSamples"
             :key="index + 1"
             class="mg-b20">
          <h5>{{item.title}}</h5>
          <pre> {{unescape(item.content) }}</pre>
        </div>
      </div>

      <!-- 响应 -->
      <div v-if="obj.respParamResults">
        <h4>{{ $t("developer.documentation.response") }}</h4>
        <div class="mg-b20"
             v-for="(item, index) in obj.respParamResults"
             :key="index">
          <h5>{{ item.title}}</h5>
          <el-table :data="item.respParams"
                    border
                    style="width: 100%">
            <el-table-column prop="data_name"
                             :label="$t('developer.documentation.parameter')"
                             width="180">
            </el-table-column>
            <el-table-column prop="data_type"
                             :label="$t('developer.documentation.ParameterType')">
            </el-table-column>
            <el-table-column prop="description"
                             :label="$t('developer.documentation.description')">
            </el-table-column>
          </el-table>
        </div>
      </div>

      <!-- 响应例子 -->
      <div v-if="obj.respSamples">
        <div v-for="(item, index) in obj.respSamples"
             :key="index"
             class="mg-b20">
          <h5>{{item.respType}}</h5>
          <pre>{{ unescape(item.content)}}</pre>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
      obj: {},
      dirList: []
    };
  },
  created() {
    this.$api.queryApiTheme(this.$route.query.listId).then(res => {
      this.dirList = res.data.data;
      // 默认第一个
      if (this.$route.query.id) {
        this.handleQuery(this.$route.query.id);
        this.dirList.forEach((item, index) => {
          if (item.id == this.$route.query.id) {
            this.active = index;
          }
        });
      } else {
        this.handleQuery(this.dirList[0].id);
      }
    });
  },
  methods: {
    toUpperCase(val) {
      return val && val.toUpperCase();
    },
    handleQuery(id) {
      this.$api.queryApiInfo(id).then(res => {
        this.obj = res.data.data;
      });
    },
    dirListId(id) {
      this.handleQuery(id);
    },
    activeFuc(index) {
      this.active = index;
    },
    unescape(val) {
      return val && unescape(val);
    }
  }
};
</script>

<style lang="less">
.api {
  .content {
    overflow: auto;
    padding-right: 20px;
  }

  h4 {
    font-size: 22px;
    color: #3b516a;
    line-height: 33px;
    margin-bottom: 10px;
  }
  pre {
    background: #f6f7ff;
    position: relative;
    transition: background-color 1s;
    color: #3d3f43;
    padding: 20px;
    border: 1px solid #e7e9fa;
    margin: 14px 0;
    overflow: auto;
  }
  .des {
    font-size: 16px;
    color: #3d3f43;
    line-height: 28px;
    margin-bottom: 10px;
  }
  h5 {
    color: #36383c;
    font-weight: 700;
    margin-bottom: 14px;
  }
  table thead tr th {
    background: #f6f7ff;
    color: #3d3f43;
  }
  h1 {
    font-size: 30px;
    font-weight: normal;
    color: #3b516a;
    line-height: 42px;
    margin-bottom: 20px;
  }
  .dir_list {
    float: right;
  }
}
</style>
