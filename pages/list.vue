<template>
  <div>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column label="ID">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.ID }}</span>
        </template>
      </el-table-column>
      <el-table-column label="NO">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.VEHICLE_NO }}</span>
        </template>
      </el-table-column>
      <el-table-column label="VOLUME">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.RESIDUAL_VOLUME }}</span>
        </template>
      </el-table-column>
      <el-table-column label="WEIGHT">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.RESIDUAL_WEIGHT }}</span>
        </template>
      </el-table-column>
      <el-table-column label="VOLUME_PRO">
        <template slot-scope="scope">
          <el-progress :percentage="scope.row.VOLUME_PRO * 100" :color="getColor(scope.row.VOLUME_PRO)"></el-progress>
        </template>
      </el-table-column>
      <el-table-column label="WEIGHT_PRO">
        <template slot-scope="scope">
          <el-progress :percentage="scope.row.WEIGHT_PRO * 100" :color="getColor(scope.row.WEIGHT_PRO)"></el-progress>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import Vue from "vue";

export default {
  components: {},
  data() {
    return {
      tableData: []
    };
  },
  methods: {
    getColor (n) {
      let color ="red";
      if (0.3 > n > 0.7) {
        color = "yellow";
      } else if (0.7 <= n <= 1) {
        color = "green";
      }
      return color;
    }
  },
  mounted() {
    const that = this;
    this.getRequest("/list")
      .then(function(response) {
        that.tableData = response.data.result;
      })
      .catch(function(error) {
        console.log(error);
      });
  }
};
</script>

<style>
</style>
