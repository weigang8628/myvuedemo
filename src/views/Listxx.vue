<template>
  <div class="List">
    <!-- <div class="scroll-wrapper" ref="homePage">
      
    </div> -->
    <iframe :src="openurl" ref="homePage1" frameborder="0"></iframe>

  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { url } from '../axios/config';
export default {
  name: 'List',
  data() {
    return {
      openurl: '',
    }
  },
  mounted() {
    let clientHeight = `${document.documentElement.clientHeight}` - 150;
    this.$refs.homePage1.style.height = clientHeight + "px";
    this.$refs.homePage1.style.width = 100 + "%";
    this.openurl = url + this.GET_CURRENT_NAV.menuurl;
  },
  methods: {

  },
  computed: {
    ...mapGetters(['GET_CURRENT_NAV']),
  },
  components: {

  },
  watch: {
    GET_CURRENT_NAV: {
      handler(val, oldVal) {
        this.openurl = url + val.menuurl;
      },
      deep: true
    },
  }
}
</script>
<style lang="less" scoped>
.List {
}

.scroll-wrapper {
  // height: 100px;
  -webkit-overflow-scrolling: touch;
  overflow-y: scroll;
  /* 提示: 请在此处加上需要设置的大小(dimensions)或位置(positioning)信息! */
}
.scroll-wrapper frame {
  width: 100%;
  height: 100%;
}
</style>

