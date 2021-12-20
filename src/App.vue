<template>
  <div id="app">
    <router-view></router-view>
    <WMNavBar></WMNavBar>
  </div>
</template>
<script>
import WMNavBar from '@/components/wm_navbar/WMNavBar.vue';
import {mapActions} from 'vuex'
export default {
  data() {
    return {
     
    };
  },
  methods:{
       ...mapActions(['setUserWhenflash']),
  },
  mounted(){
    this.setUserWhenflash()
  },
  components: {
    WMNavBar,
  },
};
</script>
<style lang="less">
@import "assets/css/base.less";
@import "assets/icon/iconfont.css";
html body{
  width: 100%;
  height:calc(100vh - 44px) ;
}
//这个是后来创建的，样式只能在全局里面改。。。
// .van-overlay {
//   z-index: 2018 !important;
// }
// .van-dialog{
//   z-index: 2022 !important;
// }
// .van-dialog__confirm{
// background-color:#f56613 !important;
// color: #fff !important;
// }
</style>