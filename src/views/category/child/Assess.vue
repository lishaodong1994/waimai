<template>
  <div>
    <div class="assess_tit">
      <div class="assess_info">
        <span>3.5</span>
        <span>综合评分</span>
        <span>高于周边商家68.2%</span>
      </div>
      <div class="assess_star">
        <div>
          <span>服务态度</span>
          <van-rate
            v-model="value"
            readonly
            allow-half
            color="yellow"
            size="16"
          />
          <span>2.5</span>
        </div>
        <div>
          <span>商品评分</span>
          <van-rate
            v-model="value"
            readonly
            allow-half
            color="yellow"
            size="16"
          />
          <span>2.5</span>
        </div>
        <div><span>送达时间</span><span>28分钟</span></div>
      </div>
    </div>
    <div class="assess_user_say">
      <div class="say_filter1">
        <span :class="{ active: fif1 === '0' }" @click="fif1 = '0'"
          >全部27</span
        >
        <span :class="{ active: fif1 === '1' }" @click="fif1 = '1'"
          >满意27</span
        >
        <span :class="{ active: fif1 === '2' }" @click="fif1 = '2'"
          >不满意27</span
        >
      </div>
      <div class="say_filter2" @click="fif2 = !fif2">
        <van-icon
          name="checked"
          :class="{ _active: fif2 }"
          class="filter2"
        />只看有内容的评价
      </div>
      <ul class="says">
        <li class="say" v-for="item in 10" :key="item">
          <div class="say_pic"><img src="~assets/logo.png" alt="" /></div>
          <div class="say_info">
            <p class="say_info_msg1">
              <span>usernameleee</span><span>2016-07-23 21:52:44</span>
            </p>
            <div class="say_info_msg2">
              <van-rate
                v-model="value"
                readonly
                allow-half
                color="yellow"
                size="12"
              /><span>2.5</span>
            </div>
            <p class="say_info_msg3">
              阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴
            </p>
            <div class="say_info_msg4">
              <span><van-icon name="good-job-o" color="yellow" /></span>
              <span><van-tag plain type="primary">标签</van-tag></span>
              <span><van-tag plain type="primary">标签</van-tag></span>
              <span><van-tag plain type="primary">标签</van-tag></span>
              <span><van-tag plain type="primary">标签</van-tag></span>
              <span><van-tag plain type="primary">标签</van-tag></span>
              <span><van-tag plain type="primary">标签</van-tag></span>
              <span><van-tag plain type="primary">标签</van-tag></span>
              <span><van-tag plain type="primary">标签</van-tag></span>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: 2.5,
      fif1: "0",
      fif2: true,
    };
  },
};
</script>

<style lang="less" scoped>
.assess_tit {
  display: flex;
  margin: 15px 0;
  padding: 10px;
  font-size: 16px;
  height: 100px;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  box-shadow: 3px 10px 10px #ccc;
}
.assess_info {
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-right: 1px solid #ccc;
  line-height: 26px;
  & > span:nth-of-type(1) {
    font-size: 20px;
    color: orange;
  }
  & > span:nth-of-type(2) {
    font-size: 14px;
    line-height: 20px;
    color: #444;
  }
  & > span:nth-of-type(3) {
    font-size: 14px;
    line-height: 20px;
    color: #333;
  }
}
.assess_star {
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  font-size: 14px;
  justify-content: space-around;
  span {
    margin: 0 5px;
  }
}
.assess_user_say {
  padding: 10px;
}
.say_filter1 {
  display: flex;
  & > span {
    font-size: 14px;
    padding: 0 8px;
    height: 35px;
    line-height: 35px;
    text-align: center;
    background-color: #ccc;
    margin-right: 15px;
    border-radius: 3px;
  }
  & > span.active {
    background-color: rgb(11, 155, 18);
    color: #fff;
  }
}
.say_filter2 {
  margin: 10px 0;
  font-size: 15px;
  height: 24px;
  line-height: 24px;
}
.filter2 {
  margin-right: 5px;
}
._active {
  color: orangered;
}
.say {
  display: flex;
  position: relative;
  padding-bottom:20px ;
  margin-bottom: 20px;
  &::after{
    position: absolute;
    bottom: 0;
    left: 0;
    content: '';
    width: 100vw;
    height: 1px;
    background-color: #ccc;
    transform: scaleY(0.5) translateX(-10px);
  }
  .say_pic {
    display: flex;
    width: 60px;
    justify-content: center;
    align-items: flex-start;
    img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
    }
  }
  .say_info {
    font-size: 14px;
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: 0;
    display: flex;
    flex-direction: column;
    & > .say_info_msg1 {
      height: 20px;
      line-height: 20px;
      display: flex;
      justify-content: space-between;
    }
    & > .say_info_msg2 {
      color: #ccc;
      height: 25px;
      line-height: 25px;
      margin-bottom: 5px;
      >span{
        display: inline-block;
        height: 20px;
        line-height: 20px;
        vertical-align: middle;
        margin-left: 5px;
      }
    }
    &>.say_info_msg3 {
      max-height: 60px;
      line-height: 20px;
      overflow: hidden; //超出隐藏
      text-overflow: ellipsis;//超出显示 ...
      display: -webkit-box; // 作为弹性伸缩盒子模型显示。
      -webkit-box-orient: vertical; // 设置伸缩盒子的子元素排列方式--从上到下垂直排列
      -webkit-line-clamp: 3; // 显示的行
    }
    &>.say_info_msg4{
      display: flex;
      flex-wrap: wrap;
      min-height: 20px;
      max-height: 100px;
      line-height: 30px;
      align-items: center;
    //-webkit-align-content: center;  //多行在容器里的对其方式
    // align-content: center;
      justify-content: flex-start;
      .van-tag{
        margin:0 5px;
        height: 20px;
      }
    }
  }
}
</style>