<template>
  <div class="shopCollection">
    <Swiper :loop="false" v-if="swiperdata.length">
      <SwiperItem v-for="(item,index) in c_swiperdata" :key="index" class="sweiperitem">
        <ul class="swiper_context" >
          <li
            v-for="it in item"
            :key="it.id"
            class="sweiper_context_item"
            
          >
            <div class="img_box"><img :src="it.img_url" alt="" /></div>
            <div>
              <span>{{ it.title }}</span>
            </div>
          </li>
        </ul>
      </SwiperItem>
    </Swiper>
  </div>
</template>

<script>
import { Swiper, SwiperItem } from "@/common/swiper";
export default {
  props: {
    swiperdata: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  computed: {
    c_swiperdata() {
      return this._.chunk(this.swiperdata, 10);
    },
  },
  components: {
    Swiper,
    SwiperItem,
  },
};
</script>

<style lang="less" scoped>
.shopCollection {
  padding: 44px 0 0 0;
  border-bottom: 10px solid #ddd;
}
.swiper_context {
  box-sizing: border-box;
  width: 100vw; height: 190px;
  padding: 10px;
  font-size: 14px;
  display: flex;  flex-wrap: wrap;
  justify-content: space-between;
  align-content: space-between;
}
.sweiperitem:last-child>.swiper_context::after {    
       content: '';    
       flex: auto;    
       /* 或者flex: 1 */
}
.sweiperitem:last-child .sweiper_context_item:last-child{
  margin-left: calc((100vw - 320px) / 4);
}
// .sweiperitem:last-child .sweiper_context_item:nth-last-child(2){
//   margin-left: calc((100vw - 320px) / 4);
// }
.sweiper_context_item {
  width: 60px;
  height: 80px;
  text-align: center;
 
  .img_box {
    width: 60px;
    height: 60px;
    img{
      width: 100%;
      height: 100%;
      vertical-align: top;
      object-fit: cover;
    }
  }
  span {
    height: 20px;
    line-height: 20px;
  }
}



</style>





