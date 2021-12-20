<template>
  <div class="shopCollection">
    <Swiper :loop="false" v-if="swiperdata.length">
      <SwiperItem v-for="(item, index) in c_swiperdata" :key="index" class="sweiperitem">
        <van-grid  class="swiper_context" :column-num="5"   :border="false">
          <van-grid-item v-for="it in item" :key="it.uid" class="sweiper_context_item" >
            <van-image :src="it.img_url" class="swiper_context_img" />
            <div class="swiper_context_text"><span>{{ it.title }}</span></div>
          </van-grid-item>
        </van-grid>
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
.shopCollection{
  margin-top: 44px;
}
.swiper_context{
  box-sizing: border-box;
  padding: 10px;
  width: 100%;
  height: 100%;
  align-content: flex-start;
}
.sweiper_context_item{
  width: 60px;
  height: 80px;
  margin-bottom: 10px;
 
}
::v-deep .van-grid-item__content{
 padding: 0;
}
.swiper_context_img{
  width: 60px;
  height: 60px;
}
.swiper_context_text{
  width: 60px;
  height:20px ;
  line-height: 20px;
  text-align: center;
  font-size: 14px;
}

</style>





