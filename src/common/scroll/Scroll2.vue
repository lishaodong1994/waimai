<template>
  <div class="wrapper" ref="wrapper">
      <slot></slot>
  </div>
</template>
<script>
import BScroll from "@better-scroll/core";  //npm install better-scroll/core2.4.2
//npm install @better-scroll/observe-image --save  当然你要自己处理因图片后加载而引起无法正确滚动bug也可以自己处理
// dom的高度是由图片撑开的，而图片是后于dom异步加载的，图片没加载完，bs就计算了高度，滚动就有问题了。
import ObserveImage from "@better-scroll/observe-image";
// npm install @better-scroll/observe-dom --save 异步加入dom元素后会刷新BScroll
import ObserveDOM from "@better-scroll/observe-dom";
//npm install @better-scroll/pull-up --save
import Pullup from "@better-scroll/pull-up"; //拓展上拉加载更多功能
BScroll.use(ObserveImage);
BScroll.use(Pullup);
BScroll.use(ObserveDOM);

export default {
  name: "Scroll",
  props: {
    imgListener:{type:Boolean,default:true},  // 是否开启 observe-image 插件,为true时开启。
    domListener:{type:Boolean,default:false}, // 是否开启 observe-dom 插件,为true时开启。
    probeType: { type: Number, default: 0 },   //是否开启滚动监听:0和1不开，2,3开启
    pullUpLoad: { type: Boolean, default: false }, //是否开启上拉加载更多功能插件，为true时开启。
  },
  data() {
    return {
      scroll: null,
    };
  },
  mounted() {
    this.$nextTick(() => {
      if (!this.scroll) {
        this.scroll = new BScroll(this.$refs.wrapper, {
          click: true,  //click为true时BScroll内的元素才能触发点击事件。
          probeType: this.probeType, 
          observeDOM: this.domListener, 
          observeImage: this.imgListener,
          pullUpLoad: this.pullUpLoad,
        });
      } else {
        this.scroll.refresh();
      }
    });
    this.$nextTick(() => {
      //BS的on方法用于监听事件，probeType值为2或3才能开启监听。
      if (this.probeType === 2 || this.probeType === 3) {
        this.scroll.on("scroll", (position) => {//监听scroll的滚动事件
          this.$emit("scrollevent", position);  //position记录了scroll位置信息。
        });
        // this.scroll.on('scrollEnd', () => {
        //   this.$emit("scrollevent", position);
        // })   
      }
      if (this.pullUpLoad) {//监听上拉加载事件
        this.scroll.on("pullingUp", () => {
          this.$emit("loadMore");
        });
      }
    });
  },
  methods: {
    go(x = 0, y = 0, time = 500) {
      this.scroll && this.scroll.scrollTo(x, y, time); //确保scroll对象已经挂载了才能触发他身上的方法！
    },
    finishPullUp() {
      this.scroll && this.scroll.finishPullUp();
    },
    refresh() {
      this.scroll && this.scroll.refresh();
    },
  },
};
</script>
<style>

</style>