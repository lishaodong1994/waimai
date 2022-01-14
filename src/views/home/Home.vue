<template>
  <div class="home">
    <TabBar class="aaaaaa" v-if="Object.keys(geo).length">
          <i slot="left" class="iconfont icon-search2"></i>
          <p>{{ geo.address }}</p>
          <span slot="right" class="login" @click="$router.push('/login')"
            >登陆 | 注册</span
          >
          <!-- <span slot="right" class="login" :style="{textAlign:'right',marginRight:'12px'}" v-else>{{user.name}}</span> -->
        </TabBar>
    <div class="scroll_wrapper" :style="{height:scrollHeight-49+'px',overflow:'hidden'}" >
      <div class="scroll_content">
        
        <ShopCollection :swiperdata="swiperdata"></ShopCollection>
        <ShopList :shoplistData="shoplistData"></ShopList>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from "@better-scroll/core";
import TabBar from "@/common/tabbar/TabBar.vue";
import ShopCollection from "./child/ShopCollection.vue";
import ShopList from "./child/ShopList.vue";
import { mapMutations, mapState } from "vuex";
import {
  getshoplistDate,
  getGeoHash,
  gethomeswiperDate,
} from "@/API/request.js";
export default {
  components: {
    TabBar,
    ShopCollection,
    ShopList,
  },
  data() {
    return {
      swiperdata: [],
      shoplistData: [],
      scrollHeight:0,
      homeScroll:null
    };
  },
  created(){
    this.scrollHeight = document.documentElement.clientHeight
  },
  async mounted() {
    const swiperdataPromise = gethomeswiperDate();
    const { data: data1 } = await swiperdataPromise;
    const c_data1 = data1.map((item) => {
      //接口里数据不行，把接口数据改动了一下
      let cloneItem = { ...item };
      //把图片换成本地的。如果直接写图片路径字符串的话webpack不会识别它是一个图片路径而去引入他。
      cloneItem.img_url = require("assets/ng2.jpg");
      return cloneItem;
    });
    this.swiperdata = c_data1;

    const geoData = await getGeoHash();
    this.$store.commit("setGeo", geoData);
    const { data } = await getshoplistDate(this.geo);
    const c_data = data.map((item) => {
      const cloneItem = { ...item };
      cloneItem.img_url = require("assets/ng.gif");
      return cloneItem;
    });

    this.shoplistData = c_data;
  },
  computed: {
    ...mapState(["geo", "user"]),
  },
  methods: {
    ...mapMutations(["setGeo"]),
  },
  watch: {
    shoplistData() {
      this.$nextTick(()=>{
        if(!this.homeScroll){
          this.homeScroll = new BScroll('.scroll_wrapper', {
            probeType: 1,
            click:true,
          })
        }else{
          this.homeScroll.refresh()
        }
      })
    },
  },
};
</script>

<style lang="less" scoped>
//scoped独立作用域样式的本质：
// .home .login{  //scoped把样式最后添加了一个[data-v-3dd2e005]防止样式重名覆盖， .home .login[data-v-3dd2e005]
//   background-color: red;
// }
// .aaaaaa ::v-deep .right{
//   background-color: red;
// }
//.aaaaaa[data-v-3dd2e005] .right
// ::v-deep样式穿透：  本质就是把[data-v-3dd2e005]改到::v-deep 处
//直接.aaaaaa .right{ ... }去改的话：会被解析为.aaaaaa .right[data-v-4e22fe01]{ ... }
// .aaaaaa i{
//   background-color: red;
// }
// 这样就找不到这个元素。
//.aaaaaa ::v-deep .right{}  ==>.aaaaaa[data-v-3dd2e005] .right  而这样可以找到。

//所以我们在知道TabBar组件内有个 .right类名的元素：我们向在TabBar组件外去修改他，则：
.aaaaaa ::v-deep .right {
  padding-right: 8px;
}
</style>