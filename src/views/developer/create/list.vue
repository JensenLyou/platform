<template>
  <div class="developer-list">

    <el-table :data="tableData"
              style="width: 100%">
      <el-table-column :label="$t('page.Serialnumber')"
                       min-width="150">
        <template slot-scope="scope">
          <span>{{ scope.row.createTime }}</span>
        </template>
      </el-table-column>
      <el-table-column :label="$t('developer.create.steps[0].name.label')"
                       min-width="180"
                       prop="name">
      </el-table-column>
      <el-table-column :label="$t('page.ContractAddress')"
                       min-width="260"
                       prop="contractAddress">
      </el-table-column>
      <el-table-column :label="$t('developer.create.steps[0].version.label')"
                       min-width="180"
                       prop="version">
      </el-table-column>
      <el-table-column :label="$t('page.Status')"
                       min-width="100"
                       prop="status">
        <template slot-scope="scope">
          <span :class="{ 'text-red': scope.row.status == 1, 'text-green': scope.row.status == 2  }">{{ globalContractStatus(scope.row.status) }}</span>
        </template>
      </el-table-column>
      <el-table-column :label="$t('page.Operation')"
                       min-width="100">
        <template slot-scope="scope">
          <el-dropdown trigger="click"
                       class="pointer">
            <span class="el-dropdown-link">
              {{$t("page.more")}}<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item v-if="scope.row.status == 1">
                <div @click="handleStart(scope.row)">{{ $t('btn.startContract')}}</div>
              </el-dropdown-item>
              <el-dropdown-item>
                <div @click="handleDetail(scope.row)">{{ $t("btn.detail") }}</div>
              </el-dropdown-item>
              <el-dropdown-item v-if="scope.row.status == 2">
                <div @click="handleUpdate(scope.row)">{{$t("page.Upgradecontract")}}</div>
              </el-dropdown-item>
              <el-dropdown-item v-if="scope.row.status != -1">
                <div @click="handleDelete(scope.row)">{{ $t('btn.delete_contract')}}</div>
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </template>
      </el-table-column>
    </el-table>

    <sign :titleName="$t('btn.delete_contract')"
          :signVisible="visible"
          :params="SignParams"
          @sign-visible="handleSignVisible"
          @SignQRCode="handleGetSignQRCode"
          :callback="handleToDetail">
      <div class="public-QR-tips"
           slot="tips">{{ $t("page.signTips")}}</div>
    </sign>

  </div>
</template>

<script>
export default {
  data() {
    return {
      keyWord: "",
      tableData: [],
      visible: false,
      SignQRCodeStart: "",
      SignQRCodeStartImg: "",
      deleteName: "",
      SignParams: null
    };
  },
  created() {
    this.handleQuery();
  },
  watch: {
    "$store.state.createInputDate": {
      handler: function(val) {
        this.handleQuery();
      },
      deep: true
    }
  },
  methods: {
    handleSignVisible(val) {
      this.visible = val;
    },
    // 获取二维码地址给后台
    handleGetSignQRCode(val) {
      this.SignQRCodeStart = val;
    },
    handleQuery() {
      this.$api
        .queryContractList(
          this.$route.query.address || this.$store.state.createInput
        )
        .then(res => {
          this.tableData = res.data.data;
        }).finally(() => {
          this.$store.state.createInput = "";
        });
    },
    handleDetail(row) {
      this.$api
        .queryContractInfo({
          address: row.contractAddress,
          version: row.version
        })
        .then(res => {
          this.$store.commit("SET_DEVELOPER_CREATE_DETAIL", res.data.data);
          this.$router.push({ path: "/developer/create_detail" });
        });
    },
    handleStart(row) {
      this.$router.push({
        path: "/developer/create_starting",
        query: {
          contractAddress: row.contractAddress,
          version: row.version
        }
      });
    },
    handleEdit(index, row) {},
    handleUpdate(row) {
      this.$api
        .queryContractInfo({
          address: row.contractAddress,
          version: row.version
        })
        .then(res => {
          this.$store.commit("SET_DEVELOPER_CREATE_DETAIL", res.data.data);
          this.$router.push({
            path: "/developer/create_update"
          });
        });
    },
    handleDelete(row) {
      this.$confirm(
        this.$t("page.suredeletecontract"),
        this.$t("page.prompt"),
        {
          confirmButtonText: this.$t("page.determine"),
          cancelButtonText: this.$t("page.cancel"),
          type: "warning"
        }
      )
        .then(() => {
          let params = {
            signType: 14,
            contractAddress: row.contractAddress,
            version: row.version
          };
          this.SignParams = params;
          this.deleteName = row.name;
        })
        .catch(() => {});
    },
    handleToDetail() {
      this.$router.push({
        path: "/developer/create_detail",
        query: { type: 14, name: this.deleteName }
      });
    },
    globalContractStatus(status) {
      // -1、已删除 1、待初始化 2、正在运行 3、余额不足 4、合约已禁用 5、已弃用
      if (status == -1) return this.$t("page.Deleted");
      if (status == 1) return this.$t("page.PendingInitialization");
      if (status == 2) return this.$t("page.Started");
      if (status == 3) return this.$t("page.InsufficientBalance");
      if (status == 4) return this.$t("page.Disabled");
      if (status == 5) return this.$t("page.Deprecated");
    }
  }
};
</script>

<style scoped>
</style>
