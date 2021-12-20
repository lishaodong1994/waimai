<template>
  <div class="swiper-container lee" :class="swiperName">
    <div class="swiper-wrapper"> <slot></slot> </div>
		<!--圆点-->
    <div class="swiper-pagination"></div>     
		<!--左右按钮-->
    <div class="swiper-button-next" v-show="nextAndPrev"></div>  
    <div class="swiper-button-prev" v-show="nextAndPrev"></div>
  </div>
</template>
<script>
 //npm install swiper@6.5.7
import Swiper from "swiper/bundle"; //导入swiper构造函数
import "swiper/swiper-bundle.css";  //导入swiper样式
export default {
  props: {
    swiperName:{type:String ,default:'swiper-container'}, //当前swiper名，防止多次渲染同一个swiper
    loop: { type: Boolean, default: false },  //是否自动轮播
    nextAndPrev:{type: Boolean, default: false },	//是否显示左右按钮
    paginationType:{type: String, default: 'bullets' }, //显示圆点还是其他什么（如 2/6 )。
  },
  data() {
    return {
      swiper: null,
    };
  },
  mounted() {
    this.swiper = new Swiper("."+this.swiperName, {
      pagination: {
        el: ".swiper-pagination",
        type: this.paginationType,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      loop: this.loop,
      // autoplay: { delay: 2000, disableOnInteraction: false },
    });
  },
};
</script>
<style  scoped>
.lee {
  width: 100%;
  height: 205px;
  background-color: #fff;
}
</style>