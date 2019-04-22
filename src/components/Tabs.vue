<template>
  <div class="tabs">
    <!-- {{editableTabsValue2}} --{{tabIndex}} -->
    <!-- {{editableTabsValue2}}-{{editableTabs2}} -->
    <el-tabs v-if="editableTabs2.length" v-model="editableTabsValue2" type="card" closable @tab-remove="removeTab" @tab-click='tab_click(editableTabsValue2)'>
      <el-tab-pane v-for="(item, index) in editableTabs2" :key="item.name" :label="item.title" :name="item.name">
        <!-- {{item.content}}-1111 -->
      </el-tab-pane>
    </el-tabs>
    <!-- <div style="margin-bottom: 20px;">
      <el-button size="small" @click="addTab()">add tab</el-button>
    </div> -->
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  data() {
    return {
      editableTabsValue2: '0',
      editableTabs2: [],
      tabIndex: 0
    }
  },
  computed: {
    ...mapGetters(["GET_CURRENT_NAV", "GET_TABS", "GET_CURRENT_TAB_NAME"]),
  },
  created() {
    this.editableTabs2 = this.GET_TABS;//所有点击过的tabs
    this.editableTabsValue2 = this.GET_CURRENT_TAB_NAME;//选中项的name值
    this.tabIndex = this.editableTabs2.length;
    // 初始化如果tabs中没有数据才执行，第一次执行
    if (this.editableTabs2.length == 0) {
      this.addTab()
    }

  },
  methods: {
    // ...mapActions(['CURRENT_NAV']),
    addTab() {
      let newTabName = ++this.tabIndex + '';
      let currenttab = {
        title: this.GET_CURRENT_NAV.title,
        name: newTabName,
        content: this.GET_CURRENT_NAV,
        currentnav: this.GET_CURRENT_NAV
      }
      this.editableTabs2.push(currenttab);
      this.editableTabsValue2 = newTabName;
    },
    removeTab(targetName) {
      let tabs = this.editableTabs2;
      let activeName = this.editableTabsValue2;
      if (activeName === targetName) {
        tabs.forEach((tab, index) => {
          if (tab.name === targetName) {
            let nextTab = tabs[index + 1] || tabs[index - 1];
            if (nextTab) {
              activeName = nextTab.name;
            }
          }
        });
      }

      this.editableTabsValue2 = activeName;
      this.editableTabs2 = tabs.filter(tab => tab.name !== targetName);
      this.tab_click(activeName)

    },
    tab_click(editableTabsValue2) {
      this.editableTabs2.map((item, index) => {
        if (item.name == editableTabsValue2) {
          this.$store.dispatch('CURRENT_NAV', item.currentnav)
          sessionStorage.setItem('CURRENT_NAV', JSON.stringify(item.currentnav))
          //   tabs跳转路由
          this.$router.replace({
            path: '/Home' + item.currentnav.path,
            query: {
              id: item.currentnav.index,
              currentid: item.currentnav.id
            }
          })
        }
      })
    }
  },
  watch: {
    //  监听vuex中CURRENT_NAV的变化（鼠标点击左侧菜单）
    GET_CURRENT_NAV: {
      handler(val, oldVal) {
        var flag = true;
        this.editableTabs2.map((item, index) => {
          if (item.title == val.title) {
            flag = false;
            console.log('tabs中有当前选项');
            this.editableTabsValue2 = item.name
          }
        })
        if (flag) {
          // tabs中没有
          this.addTab()
        }

      },
      deep: true
    },
    editableTabs2: {
      handler(val, oldVal) {
        this.$store.dispatch('TABS', val)
        sessionStorage.setItem('TABS', JSON.stringify(this.editableTabs2))
      },
      deep: true

    },
    // 当前tabindex的值
    editableTabsValue2(val, oldVal) {
      console.log(val);
      this.editableTabs2.map((item, index) => {
        if (item.name == val) {
          sessionStorage.setItem('CURRENT_TAB_NAME', JSON.stringify(item.name))
        }
      })
    },
    // 监听路由变化
    $route(to, from) {
      console.log('路由发生变化', to.path);
    }
  }
}
</script>

<style lang="less" scoped>
.tabs {
  padding: 10px 20px 0 20px;
}
</style>


