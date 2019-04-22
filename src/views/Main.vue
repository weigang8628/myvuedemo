<template>
  <div class="Main">
    <el-row :gutter="12">
      <!-- 待办已办 -->
      <el-col :span="16">
        <div class="grid-content bg-purple">
          <!-- 待办列表 -->
          <div class="zw-box" >
            <div class="zw-title-xxk" >
              <a href="javascript:;" :class="isdblist?'zw-active':''" @click="xxkfn(0)">
                待办
              </a>
              <a href="javascript:;" :class="!isdblist?'zw-active':''" @click="xxkfn(1)">
                已办
              </a>
            </div>
            <div class="zw-listbox" >
              <div class="zw-bllist show">
                <ul>
                  <li v-for="(item,index) in tableData"  :key="index" @click="opendetailfn(item)">
                    <a href="javascript:;">{{item.TITLE}}</a>
                    <span v-if="isdblist">[{{item.CREATEDATE}}]</span>
                    <span v-else>[{{item.ENDTIME}}]</span>
                  </li>
                  
                </ul>
              </div>
              
            </div>

          </div>
        </div>
      </el-col>
      <!-- 通知公告 -->
      <el-col :span="8">
        <div class="grid-content bg-purple-light">
          <!-- 通知 -->
          <div class="zw-box">
            <div class="zw-title">
              <a href="javascript:;">
                通知公告
              </a>
            </div>

            <div class="zw-listbox">
              <ul class="notice">
                <li>
                  <div class="text">
                    <h3>
                      <a href="javascript:;">
                        张三
                      </a>
                    </h3>
                    <div class="info">
                      标题的标题的标题的标题...
                    </div>
                    <div class="date">
                      2018-05-15 12:15:45
                    </div>
                  </div>
                  <div class="zw-btn notice-btn">
                    <a class="zw-bg-red" href="javascript:;">查看详情</a>
                  </div>
                </li>
                <li>
                  <div class="text">
                    <h3>
                      <a href="javascript:;">
                        张三
                      </a>
                    </h3>
                    <div class="info">
                      标题的标题的标题的标题...
                    </div>
                    <div class="date">
                      2018-05-15 12:15:45
                    </div>
                  </div>
                  <div class="zw-btn notice-btn">
                    <a class="zw-bg-red" href="javascript:;">查看详情</a>
                  </div>
                </li>
                <li>
                  <div class="text">
                    <h3>
                      <a href="javascript:;">
                        张三
                      </a>
                    </h3>
                    <div class="info">
                      标题的标题的标题的标题...
                    </div>
                    <div class="date">
                      2018-05-15 12:15:45
                    </div>
                  </div>
                  <div class="zw-btn notice-btn">
                    <a class="zw-bg-red" href="javascript:;">查看详情</a>
                  </div>
                </li>

              </ul>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="12">
      <!-- 要闻 -->
      <el-col :span="12">
        <div class="grid-content bg-purple">
          <div class="zw-box">
            <div class="zw-title">
              <a href="javascript:;">
                时政要闻
              </a>
            </div>
            <div class="zw-listbox">
              <ul class="new">
                <li>
                  <div class="date zw-bg-red">
                    <p>10</p>
                    <p>2019/03</p>
                  </div>
                  <div class="text">
                    <h3>
                      <a href="javascript:;">
                        前10月标题的标题的标题的标题
                      </a>
                    </h3>
                    <div class="info">
                      阿发老爹付款啦健身房的安吉拉开发的爱丽丝的付款就拉开发的爱丽丝的付款就拉开发的爱丽丝的付款就案例士大夫艰苦...
                      <a class="zw-text-red" href="javascript:;">[详情]</a>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="date zw-bg-red">
                    <p>10</p>
                    <p>2019/03</p>
                  </div>
                  <div class="text">
                    <h3>
                      <a href="javascript:;">
                        前10月标题的标题的标题的标题
                      </a>
                    </h3>
                    <div class="info">
                      阿发老爹付款啦健身房的安吉拉开发的拉开发的爱丽丝的付款就爱丽丝的付款就案例士大夫艰苦...
                      <a class="zw-text-red" href="javascript:;">[详情]</a>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="date zw-bg-red">
                    <p>10</p>
                    <p>2019/03</p>
                  </div>
                  <div class="text">
                    <h3>
                      <a href="javascript:;">
                        前10月标题的标题的标题的标题
                      </a>
                    </h3>
                    <div class="info">
                      阿发老爹付款啦健身房的安吉拉开发的拉开发的爱丽丝的付款就爱丽丝的付款就案例士大夫艰苦...
                      <a class="zw-text-red" href="javascript:;">[详情]</a>
                    </div>
                  </div>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </el-col>
      <!-- 要闻 -->
      <el-col :span="12">
        <div class="grid-content bg-purple">
          <div class="zw-box">
            <div class="zw-title">
              <a href="javascript:;">
                时政要闻
              </a>
            </div>
            <div class="zw-listbox">
              <ul class="new">
                <li>
                  <div class="date zw-bg-red">
                    <p>10</p>
                    <p>2019/03</p>
                  </div>
                  <div class="text">
                    <h3>
                      <a href="javascript:;">
                        前10月标题的标题的标题的标题
                      </a>
                    </h3>
                    <div class="info">
                      阿发老爹付款啦健身房的安吉拉开发的爱丽丝的付款就拉开发的爱丽丝的付款就拉开发的爱丽丝的付款就案例士大夫艰苦...
                      <a class="zw-text-red" href="javascript:;">[详情]</a>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="date zw-bg-red">
                    <p>10</p>
                    <p>2019/03</p>
                  </div>
                  <div class="text">
                    <h3>
                      <a href="javascript:;">
                        前10月标题的标题的标题的标题
                      </a>
                    </h3>
                    <div class="info">
                      阿发老爹付款啦健身房的安吉拉开发的拉开发的爱丽丝的付款就爱丽丝的付款就案例士大夫艰苦...
                      <a class="zw-text-red" href="javascript:;">[详情]</a>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="date zw-bg-red">
                    <p>10</p>
                    <p>2019/03</p>
                  </div>
                  <div class="text">
                    <h3>
                      <a href="javascript:;">
                        前10月标题的标题的标题的标题
                      </a>
                    </h3>
                    <div class="info">
                      阿发老爹付款啦健身房的安吉拉开发的拉开发的爱丽丝的付款就爱丽丝的付款就案例士大夫艰苦...
                      <a class="zw-text-red" href="javascript:;">[详情]</a>
                    </div>
                  </div>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="12">
      <!-- 信息简报 -->
      <el-col :span="12">
        <div class="grid-content bg-purple">
          <!-- 简报信息 -->
          <div class="zw-box">
            <div class="zw-title">
              <a href="javascript:;">
                简报信息
              </a>
            </div>
            <div class="zw-listbox">
              <ul class="newlist">
                <li>
                  <h3><a href="javascript:;">[简报信息]国发健康的分解开来大多是解放路口打开了几分阿萨德飞机离开</a></h3>
                  <span>2018-05-12</span>
                </li>
                <li>
                  <h3><a href="javascript:;">[简报信息]国发健康的分解开来大多是解放路口打开了几分阿萨德飞机离开</a></h3>
                  <span>2018-05-12</span>
                </li>
                <li>
                  <h3><a href="javascript:;">[简报信息]国发健康的分解开来大多是解放路口打开了几分阿萨德飞机离开</a></h3>
                  <span>2018-05-12</span>
                </li>
                <li>
                  <h3><a href="javascript:;">[简报信息]国发健康的分解开来大多是解放路口打开了几分阿萨德飞机离开</a></h3>
                  <span>2018-05-12</span>
                </li>
                <li>
                  <h3><a href="javascript:;">[简报信息]国发健康的分解开来大多是解放路口打开了几分阿萨德飞机离开</a></h3>
                  <span>2018-05-12</span>
                </li>
                <li>
                  <h3><a href="javascript:;">[简报信息]国发健康的分解开来大多是解放路口打开了几分阿萨德飞机离开</a></h3>
                  <span>2018-05-12</span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </el-col>
      <!-- 信息简报 -->
      <el-col :span="12">
        <div class="grid-content bg-purple">
          <!-- 简报信息 -->
          <div class="zw-box">
            <div class="zw-title">
              <a href="javascript:;">
                简报信息
              </a>
            </div>
            <div class="zw-listbox">
              <ul class="newlist">
                <li>
                  <h3><a href="javascript:;">[简报信息]国发健康的分解开来大多是解放路口打开了几分阿萨德飞机离开</a></h3>
                  <span>2018-05-12</span>
                </li>
                <li>
                  <h3><a href="javascript:;">[简报信息]国发健康的分解开来大多是解放路口打开了几分阿萨德飞机离开</a></h3>
                  <span>2018-05-12</span>
                </li>
                <li>
                  <h3><a href="javascript:;">[简报信息]国发健康的分解开来大多是解放路口打开了几分阿萨德飞机离开</a></h3>
                  <span>2018-05-12</span>
                </li>
                <li>
                  <h3><a href="javascript:;">[简报信息]国发健康的分解开来大多是解放路口打开了几分阿萨德飞机离开</a></h3>
                  <span>2018-05-12</span>
                </li>
                <li>
                  <h3><a href="javascript:;">[简报信息]国发健康的分解开来大多是解放路口打开了几分阿萨德飞机离开</a></h3>
                  <span>2018-05-12</span>
                </li>
                <li>
                  <h3><a href="javascript:;">[简报信息]国发健康的分解开来大多是解放路口打开了几分阿萨德飞机离开</a></h3>
                  <span>2018-05-12</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>

  </div>
</template>

<script>
import { apiMyNeedTask, apiMyDoneTask, apiDeleteTask, gztid, url } from '../axios/config';
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'List',
  data() {
    return {
      formdata: {
        page: 1,
        pageSize: 5,
        query: "",
        actionType: "",
        wfId: "",
        plugsUserId: "",
      },
      isdblist: true,
      tableData: [],
      openStatus:8
    }
  },
  created() {
    this.getdblistdatafn(this.formdata)//获取待办列表
  },
  methods: {
    //   选项卡切换
    xxkfn(id) {
      if (id == 0) {
        //   待办
        this.getdblistdatafn(this.formdata)
        this.openStatus = 8
      } else if (id == 1) {
        //   已办
        this.getyblistdatafn(this.formdata)
        this.openStatus = 9
      }
    },
    // 待办已办打开新窗口
    opendetailfn(row){
        let sessionId = JSON.parse(sessionStorage.getItem('SESSIONID'))
      let taskId = row.ID;
      let openurl = url+'sys_wfRun_getOpenTask.action?sessionId='+sessionId+'&taskId='+taskId+'&openStatus='+this.openStatus
      window.open(openurl, "_blank");
    },
    // 获取代办列表数据
    getdblistdatafn(formdata) {
      this.$post(apiMyNeedTask, formdata)
        .then((res) => {
          console.log(res);
          let data = res.data;
          if (res.code == 0) {
            this.isdblist = true;
            this.tableData = data.list

          } else {
          }
        })

    },

    // 获取已办列表数据

    getyblistdatafn(formdata) {
      this.$post(apiMyDoneTask, formdata)
        .then((res) => {
          console.log(res);
          let data = res.data;
          if (res.code == 0) {
            this.isdblist = false;
            this.tableData = data.list;
          } else {

          }
        })
    },
  },
  components: {
    // HelloWorld
  }
}
</script>
<style lang="less" scoped>
body,
p,
h3,
div,
ul,
li {
  padding: 0;
  margin: 0;
}

body {
  background-color: #f2f2f2;
  padding: 66px 12px 12px 12px;
}

a {
  text-decoration: none;
  color: #333333;
}

.zw-text-red {
  color: #c40001;
}

.zw-bg-red {
  background-color: #c40001;
}

.zw-box {
  height: 330px;
  background-color: #ffffff;
  border: 1px solid #e6e6e6;
  //   box-shadow: 0 0 5px #cccccc;
}
.zw-logo {
  position: fixed;
  background-color: #ffffff;
  z-index: 9999;
}
/* 标题1 */
.zw-title {
  font-size: 16px;
  height: 42px;
  line-height: 42px;
  border-bottom: 1px solid #e6e6e6;
}

.zw-title a {
  padding-left: 28px;
  position: relative;
}

.zw-title a::before {
  content: "";
  position: absolute;
  top: -1px;
  left: 15px;
  width: 6px;
  height: 20px;
  background-color: #c40001;
}

/* 标题2 */
.zw-title-xxk {
  height: 42px;
  line-height: 42px;
  border-bottom: 1px solid #e6e6e6;
  padding: 0 10px;
}

.zw-title-xxk a {
  display: inline-block;
  padding: 0 20px;
  font-size: 16px;
}

.zw-title-xxk a.zw-active {
  color: #c40001;
  border-bottom: 2px solid #c40001;
}

.zw-listbox {
  padding: 15px;
}

.zw-listbox .new {
}

.zw-listbox .new li {
  overflow: hidden;
  margin-bottom: 22px;
  position: relative;
}

.zw-listbox .new li .date {
  float: left;
  width: 65px;
  height: 65px;
  border-radius: 5px;
  color: #ffffff;
}

.zw-listbox .new li .date p:nth-child(1) {
  font-size: 28px;
  font-weight: bold;
  text-align: center;
  padding-top: 8px;
}

.zw-listbox .new li .date p:nth-child(2) {
  font-size: 12px;
  text-align: center;
}

.zw-listbox .new li .text {
  padding-left: 85px;
  position: absolute;
  top: 0;
}

.zw-listbox .new li .text h3 {
  font-size: 16px;
  font-weight: normal;
}

.zw-listbox .new li .text h3 a {
}

.zw-listbox .new li .text .info {
  margin-top: 4px;
  font-size: 14px;
  color: #999999;
}

/* 普通列表 */
.zw-listbox .newlist {
}

.zw-listbox .newlist li {
  line-height: 44px;
  position: relative;
  overflow: hidden;
}

.zw-listbox .newlist li h3 {
  position: absolute;
  top: 0;
  font-weight: normal;
  padding-right: 80px;
  box-sizing: border-box;
  width: 100%;
  font-size: 14px;
}

.zw-listbox .newlist li h3 a {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  display: block;
}

.zw-listbox .newlist li span {
  float: right;
  color: #999999;
  font-size: 14px;
}
// 待办已办列表
.zw-listbox .zw-bllist {
}
.zw-listbox .zw-bllist ul li {
  display: flex;
  justify-content: space-between;
  line-height: 50px;
  border-bottom: 1px solid #e6e6e6;
  font-size: 14px;
}
.zw-listbox .zw-bllist ul li span {
  color: #999999;
  font-size: 14px;
}

/* 通知公告 */
.zw-listbox .notice {
}

.zw-listbox .notice li {
  overflow: hidden;
  border-bottom: 1px solid #e8e9eb;
  /* height: 88px; */
  padding: 10px 0;
  min-height: 70px;
  position: relative;
}

.zw-listbox .notice li .text {
  position: absolute;
  padding-right: 100px;
  top: 10px;
  width: 100%;
  box-sizing: border-box;
}

.zw-listbox .notice li .text h3 {
  font-size: 16px;
}
.zw-listbox .notice li .text h3 a {
  font-size: 16px;
}

.zw-listbox .notice li .text .info {
  font-size: 14px;
  color: #999999;
  margin-top: 5px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
}

.zw-listbox .notice li .text .date {
  font-size: 14px;
  margin-top: 5px;
  color: #999999;
}

.zw-listbox .notice .notice-btn {
  float: right;
  margin-top: 15px;
}

.zw-listbox .notice .notice-btn a {
  color: #ffffff;
  display: inline-block;
  border-radius: 30px;
  width: 90px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  font-size: 14px;
}

.show {
  display: block;
}

.hide {
  display: none;
}

.zw-topp {
  text-align: right;
  padding-right: 15px;
  box-sizing: border-box;
  height: 54px;
  line-height: 54px;
  background-color: #ffffff;
  width: 100%;
  left: 0px;
  top: 0px;
  position: absolute;
  box-shadow: 0 0px 5px #cccccc;
  z-index: 2;
}

.zw-topp p {
  display: inline-block;
  font-size: 14px;
}

.zw-topp p b {
  color: #c40001;
}

.zw-topp .zw-set {
  color: #c40001;
  border: 1px solid #c40001;
  padding: 8px 10px;
}

.zw-topp .zw-exit {
  margin-left: 10px;
  color: #c40001;
  border: 1px solid #c40001;
  padding: 8px 10px;
}
.zw-topp .zw-exit:hover,
.zw-topp .zw-set:hover {
  color: #ffffff;
  background-color: #c40001;
}

.zw-topp a {
}

.el-row {
  margin-bottom: 12px;
  &:last-child {
    margin-bottom: 0;
  }
}
</style>

