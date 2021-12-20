<template>
  <div class="navbar">
    <div class="left"><slot name="left"></slot></div>
    <div class="content"><slot></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="less" scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 200;
  display: flex;
  width: 100%;
  height: 44px;
  line-height: 44px;
  background-color: #f3f3f3;
  box-shadow: silver 1px 1px 1px;
}
.left {
  width: 75px;
  display: flex;
  justify-content: center;
  align-items: center;
  &>i{
      font-size:30px ;
  }
}
.content {
  flex: 1;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  & > p {
      height: 25px;
      line-height: 25px;
    /*p标签中的字符串太长不换行（但中文字会换行，但字母数字默认是不换行的）
  添加以下两条：无论中文还是字母数字都会进行换行*/
    word-break: break-all;
    word-wrap: break-word;
    /* 多行超出隐藏显示“...” */
    overflow: hidden;
    text-overflow: ellipsis;
    text-overflow: -o-ellipsis-lastline;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
  }
}
.right {
  width: 75px;
  display: flex;
  justify-content: center;
  align-items: center;
  &>span{
      text-align: center;
      width: 100%;
      height: 25px;
      line-height: 25px;
      font-size: 14px;
    //  微调位置
    //   position: relative; top: 0px; 或使用 vertical-align
    
    //flex布局时:子元素内部vertical-align：middle无效，
    //float会失效//clear清除浮动会失效//文字对齐vertical-align: middle失效（可对文字的容器 display: flex; align-items: center;）
    //子元素也会被默认转化成flex行内块(没设置宽高时,宽为自身撑开，【高为父元素的高度】！若设置了宽高则为设置的宽高。)
    //没设置宽高时,宽为自身撑开，高为父元素的高度：
    //父元素align-items: center/flex-start/flex-end(没效果)因为高度和父元素一样所以就一直在中间位置。;
    
    //出现莫名其名的布局问题：可能是因为line-height行高的继承。。。
  }
}
// 使用flex布局，但是flex布局常常会遇到一些不可思议的麻烦，下面介绍一下overflow遇到的麻烦:
// 我在工作中使用了左右两栏布局
// .container {
//     display: flex;
// }
// .left {
//     flex: 1;
//     overflow: auto;
// }
// .right {
//     width: 500px;
// }
// 我的想法是左边宽度要自适应，而且需要滚动条，虽然这样设置了，
// 但奇怪的事情发生，左边的内容并没有出现滚动条，通过查阅资料，可以通过如下办法解决
// .container {
//     display: flex;
// }
// .left {
//     flex: 1;
//     overflow: auto;
//     width: 0;
// }
// .right {
//     width: 500px;
// }
// 样式需要多加一个 width: 0; 
</style>
