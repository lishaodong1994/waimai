<template>
  <div>
    <TabBar>
      <p>我的</p>
    </TabBar>
    <div class="profile">
      <div class="profile_img"><img src="~assets/logo.png" alt="" /></div>
      <div class="profile_conent" @click="$router.replace('/login')">
        <p>{{'请登录~'}}</p>
        <p><van-icon name="phone" />{{'请登录~'}}</p>
      </div>
      <div class="profile_more" ><van-icon name="arrow" /></div>
    </div>
    <ul class="profile_context">
      <li v-for="item in 3" :key="item">
        <p><b>0.00</b>元</p>
        <p>我的余额</p>
      </li>
    </ul>
    <div class="profile_payinfo">
      <div v-for="item in 4" :key="item" class="profile_payinfo_item">
        <van-icon name="like" />
        <div><span>我的订单</span><van-icon name="arrow" class="_more" /></div>
      </div>
    </div>
    <van-button type="danger" class="logout_btn" @click="logout" >退出登录</van-button>
    <!-- <van-button type="danger" class="logout_btn" @click="$router.replace('/login')" v-show="!user._id" :style="{background:'yellowgreen'}">前往登录</van-button> -->
  </div>
</template>

<script>
import TabBar from "@/common/tabbar/TabBar.vue";
import {mapState,mapMutations,} from 'vuex' 
import {logout} from '@/API/request'
export default {
  components: {
    TabBar,
  },
  computed:{
    ...mapState(['user'])
  },
  methods: {
    ...mapMutations(['resetUser']),
   logout() {
      this.$Dialog
        .confirm({
          title: "提示",
          message: "确定退出登录吗？",
        })
        .then( async () => {
          this.resetUser()
          await logout()
          this.$router.replace('/login')
        })
        .catch(() => {
          // on cancel
        });
    },
  },
};
</script>

<style lang="less" scoped>
.profile {
  width: 100%;
  margin-top: 44px;
  display: flex;
  background-color: #ff7f24;
  .profile_img {
    width: 80px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    & > img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      object-fit: cover;
    }
  }
  .profile_conent {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    & > p {
      margin: 5px 0;
    }
  }
  .profile_more {
    display: flex;
    width: 50px;
    justify-content: center;
    align-items: center;
  }
}
.profile_context {
  display: flex;
  height: 100px;
  width: 100%;
  border-bottom: 10px solid #ccc;
  & > li {
    flex: 1;
    border-right: 1px solid #ccc;
    display: flex;
    flex-direction: column;
    justify-content: center;
    & > p {
      text-align: center;
    }
    & > p:nth-of-type(1) {
      font-size: 16px;
      height: 50px;
      line-height: 50px;
      > b {
        font-size: 28px;
        font-weight: 800;
      }
    }
    & > p:nth-of-type(2) {
      font-size: 14px;
    }
  }
}
.profile_payinfo {
  & > .profile_payinfo_item {
    display: flex;
    align-items: center;
    height: 45px;
    line-height: 45px;
    padding: 0 0 0 10px;
    & > div {
      font-size: 14px;
      flex: 1;
      margin-left: 10px;
      border-bottom: 1px solid #ccc;
    }
    ._more {
      float: right;
      line-height: 45px;
      margin-right: 10px;
    }
  }
  .profile_payinfo_item:nth-of-type(4) {
    border-top: 10px solid #ccc;
    border-bottom: 1px solid #ccc;
    margin-bottom: 5px;
  }
}
.logout_btn {
  width: 100%;
  font-size: 16px;
  color: #fff;
  letter-spacing: 3px;
}
</style>