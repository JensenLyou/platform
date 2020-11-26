<template>
  <div class="developer-list">
    <el-table :data="tableData"
              style="width: 100%">
      <el-table-column :label="$t('page.Time')"
                       min-width="150">
        <template slot-scope="scope">
          <span>{{ scope.row.createTimeFmt }}</span>
        </template>
      </el-table-column>
      <el-table-column :label="$t('developer.chain.steps[0].name.label')"
                       min-width="180"
                       prop="name">
      </el-table-column>
      <el-table-column :label="$t('developer.chain.steps[0].contact_name.label')"
                       min-width="160"
                       prop="contact_name">
      </el-table-column>
      <el-table-column :label="$t('page.TelephoneNumber')"
                       min-width="150"
                       prop="contact_tel">
      </el-table-column>
      <el-table-column :label="$t('page.Email')"
                       min-width="180"
                       prop="e_mail">
      </el-table-column>
      <el-table-column :label="$t('page.Status')"
                       min-width="120"
                       prop="status">
        <template slot-scope="scope">
          <span>{{ status(scope.row.status) }}</span>
        </template>
      </el-table-column>
      <el-table-column :label="$t('page.Operation')"
                       min-width="100">
        <template slot-scope="scope">
          <el-button size="mini"
                     type="primary"
                     @click="handleDetail(scope.row.id)">{{ $t("btn.detail") }}</el-button>
        </template>
      </el-table-column>
    </el-table>

    <div class="mg-t20 text-right">
      <el-pagination v-show="pageTotal > pageSize"
                     @current-change="handleCurrentChange"
                     :current-page.sync="currentPage"
                     :page-size="pageSize"
                     layout="prev, pager, next"
                     :total="pageTotal">
      </el-pagination>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      currentPage: 1,
      pageSize: 10,
      pageTotal: 0,
      keyWord: "111",
      tableData: [{}]
    };
  },
  watch: {
    "$store.state.chainInputDate": {
      handler: function(val, oldVal) {
        this.currentPage = 1;
        this.handleQuery();
      },
      deep: true
    }
  },
  created() {
    this.handleQuery();
  },
  methods: {
    handleQuery() {
      let params = {
        keyWord: this.$store.state.chainInput,
        page: this.currentPage,
        pageSize: this.pageSize
      };
      this.$api
        .chainSearch(params)
        .then(res => {
          this.tableData = res.data.data;
          this.pageTotal = res.data.total;
        })
        .finally(() => {
          this.$store.state.chainInput = "";
        });
    },
    handleDetail(id) {
      this.$api.chainApplyInfo(id).then(res => {
        this.$store.commit("SET_DEVELOPER_CHAIN_DETAIL", res.data.data);
        this.$router.push({ path: "/developer/chain_detail" });
      });
    },
    handleCurrentChange(val) {
      this.currentPage = val;
      this.handleQuery();
    },
    status(value) {
      // 1、线下沟通 2、入驻成功 3、入驻失败
      if (value == 1) return this.$t("page.Offlinecommunication");
      if (value == 2) return this.$t("page.Successfulentry");
      if (value == 3) return this.$t("page.Failuretosettle");
    }
  }
};
</script>

<style lang="less">
</style>
