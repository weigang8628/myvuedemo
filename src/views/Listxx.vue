<template>
  <div class="List">
      listxxx
    <el-table :height="height" :data="tableData" stripe style="width: 100%" :row-class-name='fn' @row-click='click'>
      <el-table-column type="selection" width="55">
      </el-table-column>
      <el-table-column prop="title" label="标题">
      </el-table-column>
      <el-table-column prop="name" label="办理人" width="100">
      </el-table-column>
      <el-table-column prop="date" label="办理日期"   width="180" align="center" >
      </el-table-column>
      
    </el-table>

    <div class="fy">
      <el-pagination background layout="prev, pager, next" :total="1000">
      </el-pagination>
    </div>
  </div>
</template>

<script>
import { log } from 'util';

export default {
  name: 'List',
  data() {
    return {
      height: document.documentElement.clientHeight - 250,
      tableData: [{
        title:'标题的标题的标题的标题的标题的标题的标题的标题',
        date: '2016-05-02 12:15:10',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
      }, {
        title:'标题的标题的标题的标题的标题的标题的标题的标题',
        date: '2016-05-04 12:15:10',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        title:'标题的标题的标题的标题的标题的标题的标题的标题',
        date: '2016-05-01 12:15:10',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        title:'标题的标题的标题的标题的标题的标题的标题的标题',
        date: '2016-05-03 12:15:10',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }, {
        title:'标题的标题的标题的标题的标题的标题的标题的标题',
        date: '2016-05-03 12:15:10',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }, {
        title:'标题的标题的标题的标题的标题的标题的标题的标题',
        date: '2016-05-03 12:15:10',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }, {
        title:'标题的标题的标题的标题的标题的标题的标题的标题',
        date: '2016-05-03 12:15:10',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }, {
        title:'标题的标题的标题的标题的标题的标题的标题的标题',
        date: '2016-05-03 12:15:10',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }, {
        title:'标题的标题的标题的标题的标题的标题的标题的标题',
        date: '2016-05-03 12:15:10',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }, {
        title:'标题的标题的标题的标题的标题的标题的标题的标题',
        date: '2016-05-03 12:15:10',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }, {
        title:'标题的标题的标题的标题的标题的标题的标题的标题',
        date: '2016-05-03 12:15:10',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }, {
        title:'标题的标题的标题的标题的标题的标题的标题的标题',
        date: '2016-05-03 12:15:10',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }, {
        title:'标题的标题的标题的标题的标题的标题的标题的标题',
        date: '2016-05-03 12:15:10',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }, {
        title:'标题的标题的标题的标题的标题的标题的标题的标题',
        date: '2016-05-03 12:15:10',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }, {
        title:'标题的标题的标题的标题的标题的标题的标题的标题',
        date: '2016-05-03 12:15:10',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }]
    }
  },
  methods:{
      click(row, column, event
){
          console.log('点击',row, column, event
);
          
      },
      fn(){
        //  debugger;
      }
  },
  components: {

  }
}
</script>
<style lang="less" scoped>
.List {
}
.fy {
  position: absolute;
  bottom: 0;
  background-color: #ffffff;
}
</style>

