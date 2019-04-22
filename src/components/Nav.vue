<template>

  <el-scrollbar style="height: 100%">
    <!-- {{GET_CURRENT_NAV}} -->
    <!-- {{GET_MENU}} -->
    <el-menu :default-openeds="defaultOpeneds" :default-active="defaultActive" @open="handleOpen" @close="handleClose">
      <el-submenu :index="item.index" v-for="(item,index) in GET_MENU" :key="index">
        <template slot="title">
          <!-- 一级菜单 -->
          <i :class="item.icon | qcmh"></i>
          {{item.title}}
        </template>

        <div v-for="(item2,index) in item.children" :key="index">
          <!-- 二级循环没三级 -->
          <el-menu-item :index="item2.index" v-if='!item2.children' @click="navclickfn(item2)">{{item2.title}}</el-menu-item>
          <!-- 二级循环有三级 -->

          <!-- <el-submenu v-else :index="item2.index" v-for="(item2,index) in item.children" :key="index"> -->
          <el-submenu v-else :index="item2.index">
            <template slot="title">{{item2.title}}</template>
            <!-- 三级循环 -->
            <el-menu-item :index="item3.index" v-for="(item3,index) in item2.children" :key="index" @click="navclickfn(item3)">{{item3.title}}</el-menu-item>
          </el-submenu>
        </div>

      </el-submenu>
      <!-- <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-menu"></i>事项管理
        </template>
        <el-submenu index="2-1">
            <template slot="title">事项审批</template>
            <el-menu-item index="2-1-1">审批进度1</el-menu-item>
            <el-menu-item index="2-1-2">审批进度2</el-menu-item>
            <el-menu-item index="2-1-3">审批进度3</el-menu-item>
            <el-menu-item index="2-1-4">审批进度4</el-menu-item>
          </el-submenu>
          <el-submenu index="2-2">
            <template slot="title">事项审批2</template>
            <el-menu-item index="2-2-1">审批进度1</el-menu-item>
            <el-menu-item index="2-2-2">审批进度2</el-menu-item>
            <el-menu-item index="2-2-3">审批进度3</el-menu-item>
            <el-menu-item index="2-2-4">审批进度4</el-menu-item>
          </el-submenu>
          <el-menu-item index="2-3">审批查询</el-menu-item>
        </el-submenu>-->
      <!-- <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-setting"></i>导航三
        </template>
        <el-menu-item-group>
          <template slot="title">分组一</template>
          <el-menu-item index="3-1">选项1</el-menu-item>
          <el-menu-item index="3-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="3-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="3-4">
          <template slot="title">选项4</template>
          <el-menu-item index="3-4-1">选项4-1</el-menu-item>
        </el-submenu>
        </el-submenu>-->
    </el-menu>
  </el-scrollbar>

</template>
<script>
import vue from 'vue'
import { mapActions, mapGetters } from 'vuex'
export default {
  data() {
    return {
      defaultActive: '1-1-1',//当前选中
      defaultOpeneds: ['1', '1-1'],//默认真开的层级
      //   navlist: [
      //     {
      //       title: "我的工作台",
      //       index: "1",
      //       children: [
      //         {
      //           title: "系统首页",
      //           index: "1-1",
      //           path: "/Home/Main"
      //         },
      //         {
      //           title: "我的待办",
      //           index: "1-2",
      //           path: "/Home/List"
      //         },
      //         {
      //           title: "我的已办",
      //           index: "1-3",
      //           path: "/Home/List"
      //         }
      //       ]
      //     },
      //     {
      //       title: "一级导航",
      //       index: "2",
      //       children: [
      //         {
      //           title: "二级导航",
      //           index: "2-1",
      //           path: "db",
      //           children: [
      //             {
      //               title: "三导航1",
      //               index: "2-1-1",
      //               path: "/Home/List1",
      //             },
      //             {
      //               title: "三导航2",
      //               index: "2-1-2",
      //               path: "/Home/List1",
      //             },
      //             {
      //               title: "三导航3",
      //               index: "2-1-3",
      //               path: "/Home/List1",
      //             },
      //             {
      //               title: "三导航4",
      //               index: "2-1-4",
      //               path: "/Home/List1",
      //             }
      //           ]
      //         }
      //       ]
      //     }
      //   ]
    };
  },
  computed: {
    ...mapGetters(["GET_CURRENT_NAV", "GET_MENU"]),
  },
  created() {

    //   初始化
    this.$store.dispatch('CURRENT_NAV', this.GET_CURRENT_NAV);
    this.defaultActive = this.GET_CURRENT_NAV.index;
    let id = this.$route.query.id
    let resolutearr = this.GET_MENU//展开多维数组

    resolutearr.map((item, index) => {
      if (item.index == id) {
        this.navclickfn(item)
      } else {
        item.children.map((item2, index2) => {
          if (item2.index == id) {
            this.navclickfn(item2)
          } else {
            item2.children.map((item3, index3) => {
              if (item3.index == id) {
                this.navclickfn(item3)
              } else {

              }
            })
          }
        })
      }
    })

    
  },
  methods: {
    navclickfn(item) {
      this.$store.dispatch('CURRENT_NAV', item);
      this.defaultActive = item.index;
      sessionStorage.setItem('CURRENT_NAV', JSON.stringify(item))
      this.$router.replace({
        path: '/Home' + item.path,
        query: {
          id: item.index,
          currentid: item.id
        }
      })

    },
    handleOpen(key, keyPath) {
      console.log('展开', key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log('关闭', key, keyPath);
    }

  },
  watch: {
    //  监听vuex中CURRENT_NAV的变化（鼠标点击左侧菜单）
    GET_CURRENT_NAV: {
      handler(val, oldVal) {
        this.defaultActive = val.index//选中菜单当前选项
      },
      deep: true
    }
  }
};
</script>

<style lang="less" scoped>
.nav1 {
}
</style>


