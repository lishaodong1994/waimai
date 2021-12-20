<template>
  <nav-bar>
      <nav-bar-item v-for="(item,index) in navBarData" :key="index" :routerPath="item.path" :activeColor="'#1296db'">
        <i slot="item-icon" class="iconfont fontImg" :class="item.icon"></i>
        <i slot="item-icon-active" class="iconfont acfontImg" :class="item.acIcon"></i>
        <span slot="item-text">{{item.text}}</span>
      </nav-bar-item>
    </nav-bar>
</template>

<script>
import NavBar from "common/navbar/NavBar.vue";
import NavBarItem from "common/navbar/NavBarItem.vue";
export default {
data() {
    return {
      navBarData:[
         {path:'/home',icon:'icon-gouwuchekong',acIcon:'icon-gouwuchekong-copy',text:'首页'}
        ,{path:'/search',icon:'icon-fangdajing',acIcon:'icon-fangdajing-copy',text:'收搜'}
        ,{path:'/order',icon:'icon-dingdan',acIcon:'icon-dingdan-copy',text:'订单'}
        ,{path:'/profile',icon:'icon-wode',acIcon:'icon-wode-copy',text:'我的'}
        ]
    };
  },
  components: {
    NavBar,
    NavBarItem,
  },
}
</script>

<style lang="less" scoped>
i.fontImg{
  font-size: 25px;
}
i.acfontImg{
  font-size: 25px;
  color: #1296db;
}
</style>