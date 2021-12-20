<template>
  <div class="business">
    <div class="business_info">
      <p class="business_info_tit">配送信息</p>
      <p class="business_info_content">
        <span>硅谷专送</span>由商家配送提供配送，约28分钟送达，距离1000m
      </p>
      <p>配送费￥ 4</p>
    </div>
    <div class="business_task">
      <p class="business_task_tit">活动与服务</p>
      <div class="business_task_content" v-for="item in 10" :key="item">
        <span>首单</span>阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.business {
  background-color: rgb(236, 233, 233);
}
.business_info {
  padding: 10px;
  margin-bottom: 20px;
  background-color: #fff;
  border-bottom: 1px solid #999;
  .business_info_tit {
    height: 35px;
    line-height: 35px;
    font-weight: 700;
    font-size: 18px;
  }
  .business_info_content {
    font-size: 14px;
    line-height: 20px;
    max-height: 60px;
    > span {
      display: inline-block;
      background-color: rgb(72, 141, 187);
      color: #fff;
      font-size: 12px;
      vertical-align: top;
      padding: 1px 5px;
      border-radius: 3px;
      margin-right: 10px;
    }
  }
  & > p:last-child {
    font-size: 14px;
    height: 30px;
    line-height: 30px;
  }
}
.business_task {
  background-color: #fff;
  padding: 10px;
  .business_task_tit {
    height: 35px;
    line-height: 35px;
    font-weight: 700;
    font-size: 18px;
  }
  .business_task_content{
    font-size: 14px;
    height: 20px;
    line-height: 20px;
    overflow: hidden; // 超出的文本隐藏
    text-overflow: ellipsis; // 溢出用省略号显示
    white-space: nowrap; // 溢出不换行
    margin-bottom: 10px;
    &>span{
      vertical-align: top;
      font-size: 12px;
      display: inline-block;
      padding: 0 5px;
      height: 20px;
      text-align: center;
      border-radius: 3px;
      background-color: rgb(40, 163, 16);
      color:#fff;
      margin-right:8px ;
    }

  }
}
</style>