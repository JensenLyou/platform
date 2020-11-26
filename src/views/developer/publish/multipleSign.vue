<template>
  <div class="developer-publish-multipleSign">
    <template>
      <el-table :data="tableData"
                v-loading="tableLoading"
                style="width: 100%">
        <el-table-column :label="i18n_detail.Serialnumber"
                         type="index"
                         align="center"
                         width="120">
        </el-table-column>
        <el-table-column :label="i18n_detail.TokenName"
                         min-width="180"
                         prop="name">
        </el-table-column>
        <el-table-column :label="i18n_detail.EnglishAbbreviation"
                         min-width="180"
                         prop="tokenSymbol">
        </el-table-column>
        <el-table-column :label="i18n_detail.TokenIdentification"
                         min-width="280"
                         prop="tokenID">
        </el-table-column>
        <el-table-column :label="$t('page.NumberOfPerformers')"
                         min-width="170"
                         prop="managerCount">
        </el-table-column>
        <el-table-column :label="i18n_detail.Managethenumberofsignatures"
                         min-width="155"
                         prop="masterThreshold">
        </el-table-column>
        <el-table-column :label="i18n_detail.Numberofsignaturesexecuted"
                         min-width="165"
                         prop="managerThreshold">
        </el-table-column>
        <el-table-column :label="i18n_detail.Operation"
                         width="300">
          <template slot-scope="scope">
            <el-button size="mini"
                       type="primary"
                       @click="handleEdit(scope.$index, scope.row)"
                       v-if="!scope.row.hasMutliSign">{{ $t("btn.setting_sign") }}</el-button>
            <el-button size="mini"
                       type="primary"
                       @click="handleDetail(scope.$index, scope.row)">{{ $t("btn.detail") }}</el-button>
          </template>
        </el-table-column>
      </el-table>
    </template>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableLoading: true,
      tableData: []
    };
  },
  computed: {
    // 国际化
    i18n_detail() {
      return this.$t("developer.publish.multipleSign_detail");
    }
  },
  created() {
    this.handleQuery();
  },
  watch: {
    "$store.state.tokenInputDate": {
      handler: function(val, oldVal) {
        this.handleQuery();
      },
      deep: true
    }
  },
  methods: {
    handleQuery() {
      this.tableLoading = true;
      this.$api
        .queryTokenList({ keyWord: this.$store.state.tokenInput })
        .then(res => {
          this.tableData = res.data.data;
        })
        .finally(() => {
          this.tableLoading = false;
          this.$store.state.tokenInput = "";
        });
    },
    handleEdit(index, row) {
      this.$router.push({
        path: "/developer/multipleSign_setting",
        query: { tokenId: row.tokenID }
      });
    },
    handleDetail(index, row) {
      this.$router.push({
        path: "/developer/multipleSign_detail",
        query: { tokenId: row.tokenID }
      });
    }
  }
};
</script>

<style lang="less">
.developer-publish-multipleSign {
}
</style>
