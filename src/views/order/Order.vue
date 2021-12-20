<template>
  <div>
    <TabBar>
      <p>订单列表</p>
    </TabBar>
    <div class="order">
      <div class="order_isLogin">
        <p>登录后查看外卖订单</p>
        <van-button type="primary" class="login_btn" @click="$router.replace('/login')">立即登录</van-button>
      </div>
    </div>
  </div>
</template>

<script>
import TabBar from "@/common/tabbar/TabBar.vue";
export default {
  components: {
    TabBar,
  },
};
</script>

<style lang="less" scoped>
.order {
  position: relative;
  width: 100vw;
  height: calc(100vh - 44px - 49px);
  padding-top: 44px;
  background: url("../../assets/nomessage.png") no-repeat;
  background-size: 100%;
  -webkit-background-size: 100% auto;
  -webkit-background-size: 100% auto;
  -o-background-size: 100% auto;
  background-position: center center;
}
// .order_isLogin {
//   position: absolute;
//   width: 60%;
//   height: 300px;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%);
// }
//或
.order_isLogin {
  position: absolute;
  width: 60%;
  height: 150px;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto auto 50px auto;
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items: center;
  &>p{
    font-size: 15px;
    height: 30px;
    line-height: 30px;
  }
  .login_btn{
    width: 150px;
    height: 40px;
  }
}
</style>