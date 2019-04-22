<template>
  <div class="List">
    <div class="tabs">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="待办事项" name="0"></el-tab-pane>
        <el-tab-pane label="已办事项" name="1"></el-tab-pane>
        <!-- <el-tab-pane label="新建" name="2"></el-tab-pane> -->
        <!-- <el-tab-pane label="定时任务补偿" name="fourth"></el-tab-pane> -->
      </el-tabs>
    </div>
    <!-- 办理按钮组 -->
    <div class="allbtn">
      <div>
        <!-- 待办显示删除按钮 -->
        <el-button type="primary" v-if="isshowdel" :disabled='disabled' @click="delfn" size="medium" icon="el-icon-delete">删除</el-button>
        <el-button type="primary" @click="reloadfn" size="medium" icon="el-icon-refresh">刷新</el-button>
        <!-- 待办显示新建按钮 -->
        <el-button type="primary" v-if="isshowdel" @click="addfn" size="medium" icon="el-icon-plus">启动{{this.GET_CURRENT_NAV.title}}</el-button>
        <!-- 搜索时显示 -->
        <el-button v-if="this.formdata.query" @click="clearfn" size="medium">清空搜索条件</el-button>
        <el-button v-if="this.formdata.query" type="text" size="medium">共为您搜索到 <b>{{total}}</b> 条记录</el-button>
      </div>
      <div>
        <el-input placeholder="请输入关键字" v-model="searchInput" class="input-with-select" size="medium">
          <el-button slot="append" icon="el-icon-search" size="medium" @click="searchfn"></el-button>
        </el-input>
      </div>
    </div>
    <el-table v-if="isdblist" :height="height" :data="tableData" style="width: 100%" @row-click='click' @selection-change="handleSelectionChange" v-loading="loading">
      <el-table-column type="selection" :selectable='selectable' width="55">
      </el-table-column>
      <el-table-column prop="TITLE" label="标题">
      </el-table-column>
      <el-table-column prop="USER_USERNAME" label="来自" width="100" align="center">
      </el-table-column>
      <el-table-column prop="PRIORITY" label="优先级" width="100" align="center">
      </el-table-column>
      <el-table-column prop="STEPNAME" label="节点" width="170" align="center">
      </el-table-column>
      <el-table-column prop="BEGINTIME" label="日期" width="170" align="center">
      </el-table-column>
    </el-table>
    <el-table v-else :height="height" :data="tableData" style="width: 100%" @row-click='click' v-loading="loading">
      <!-- 已办 -->
      <el-table-column type="selection" width="55">
      </el-table-column>
      <el-table-column prop="TITLE" label="标题">
      </el-table-column>
      <el-table-column prop="USER_USERNAME" label="来自" width="100" align="center">
      </el-table-column>
      <el-table-column prop="ENDTIME" label="接收日期" width="170" align="center">
      </el-table-column>
      <el-table-column prop="BEGINTIME" label="办理日期" width="170" align="center">
      </el-table-column>
    </el-table>

    <!-- 翻页 -->
    <div class="fy">
      <el-pagination background layout="prev, pager, next" :total='total' :page-size="formdata.pageSize" @current-change='currentchange' :current-page.sync="formdata.page">
      </el-pagination>
    </div>
  </div>
</template>

<script>
import { apiMyNeedTask, apiMyDoneTask, apiDeleteTask, url } from '../axios/config';
import { mapGetters } from 'vuex'

export default {
  name: 'List1',
  data() {
    return {
      activeName: '0',
      height: document.documentElement.clientHeight - 300,
      formdata: {
        page: 1,
        pageSize: 15,
        query: "",
        actionType: "wf",
        wfId: "",
        plugsUserId: "",
      },
      total: 0,
      tableData: [],
      isdblist: true,//是否是待办列表
      arrdel: [],//将要删除的项
      disabled: true,
      searchInput: '',//搜索框关键字
      isshowdel: true,//是否显示删除按钮
      openStatus: 8,//待办是8 已办是9
      loading: false,
    }
  },
  computed: {
    ...mapGetters(['GET_CURRENT_NAV']),
    arrdel1() {
      return this.arrdel.join(' ')
    }
  },
  created() {
    // 我的工作台-代办

    this.formdata.wfId = this.GET_CURRENT_NAV.wfid
    this.getdblistdatafn(this.formdata);
  },
  methods: {
    //   切换tab
    handleClick(tab, event) {
      this.formdata.page = 1
      this.autoselect()
    },
    // 点击表格跳转
    click(row, column, event) {
      console.log('点击');
      let sessionId = JSON.parse(sessionStorage.getItem('SESSIONID'))
      let taskId = row.ID;
      let openurl = url + 'sys_wfRun_getOpenTask.action?sessionId=' + sessionId + '&taskId=' + taskId + '&openStatus=' + this.openStatus
      window.open(openurl, "_blank");

    },
    // 复选框默认是否可勾选
    selectable(row, index) {
      if (row.STEPNO == 1 && row.STATUS == 0 || row.STATUS == 1) {
        // 可以删除
        return true;
      } else {
        // 不可删除
        return false;
      }
    },
    // 选择项发生改变
    handleSelectionChange(val) {
      console.log(val);
      let arr = [];
      val.map((item, index) => {
        arr.push(item.ID)
      })
      this.arrdel = arr
      if (arr.length) {
        //有选中项 不禁用删除按钮
        this.disabled = false;
      } else {
        this.disabled = true;
      }

    },
    //清空
    clearfn() {
      this.formdata.query = ''
      this.formdata.page = 1
      this.searchInput = ''
      this.autoselect()

    },
    // 搜索
    searchfn() {
      if (this.searchInput != '') {
        this.formdata.page = 1
        this.formdata.query = this.searchInput
        this.autoselect()
      } else {
        //提示
        this.$confirm('请输入要搜索的关键字', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {

        })

      }
    },
    // 新建流程
    addfn() {
      let that = this;
      console.log('新建流程');
      let sessionId = JSON.parse(sessionStorage.getItem('SESSIONID'))
      let wfId = this.formdata.wfId;
      let plugsUserId = this.GET_CURRENT_NAV.plugsuserid;
      let openurl = url + 'sys_wfTask_getAddTask.action?plugsUserId=' + plugsUserId + '&sessionId=' + sessionId + '&flowId=' + wfId
      window.open(openurl, "_blank");
      setTimeout(function () {
        that.autoselect()//新建后刷新列表
      }, 1000)

    },
    // 刷新
    reloadfn() {
      this.autoselect()
     
    },
    // 删除
    delfn() {
      this.$confirm('确认要删除选中项吗?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        console.log('点击确定');
        this.$post(apiDeleteTask, { ids: this.arrdel1 })
          .then((res) => {
            console.log(res);
            this.$message({
              message: '恭喜你，已成功删除',
              type: 'success'
            });
            this.arrdel = ''//清空临时选项
            // this.tableData//更新tabal数据，删除选中的项
            this.formdata.query = ''
            this.autoselect()
          })


      })

    },
    currentchange(data) {
      this.formdata.page = data;
      console.log('翻页发生改变触发.当前页码', data);
      // 我的工作台-代办
      this.getdblistdatafn(this.formdata);
    },
    currentpage() {
      console.log('currentpage', '33333');
    },
    // 获取代办列表数据
    getdblistdatafn(formdata) {
      this.loading = true;
      this.$post(apiMyNeedTask, formdata)
        .then((res) => {
          console.log(res);
          this.loading = false;
          let data = res.data;
          if (res.code == 0) {
            this.isdblist = true;
            this.tableData = data.list
            this.total = data.total
          } else {
          }
        })
    },

    // 获取已办列表数据
    getyblistdatafn(formdata) {
      this.loading = true;
      this.$post(apiMyDoneTask, formdata)
        .then((res) => {
          console.log(res);
          this.loading = false;
          let data = res.data;
          if (res.code == 0) {
            this.isdblist = false;
            this.tableData = data.list;
            this.total = data.total;
          } else {
          }
        })
    },
    //自动选择待办或者已办
    autoselect() {
      this.formdata.wfId = this.GET_CURRENT_NAV.wfid;
      if (this.activeName == '0') {
        // 代办
        this.getdblistdatafn(this.formdata);
        this.isshowdel = true;
        this.openStatus = 8
      } else if (this.activeName == '1') {
        // 已办
        this.getyblistdatafn(this.formdata);
        this.isshowdel = false;
        this.openStatus = 9
      }
    }
  },
  components: {

  },
  watch: {
    GET_CURRENT_NAV: {
      handler(val, oldVal) {
        this.formdata.query = ''
        this.formdata.page = 1
        this.activeName = '0'//发生改变就切换到待办列表
        this.autoselect()
      },
      deep: true
    },
  }
}
</script>
<style lang="less" scoped>
.tabs .el-tabs__item {
  font-size: 16px !important;
}

.allbtn {
  padding: 0 0 15px 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #e6e6e6;
}
.List {
}
.fy {
  position: absolute;
  bottom: 0;
  background-color: #ffffff;
}
</style>

