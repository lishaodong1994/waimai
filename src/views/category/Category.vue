<template>
  <div class="category">
    <!-- 店家信息栏 -->
    <div class="shop_title">
      <div class="shop_title_content">
        <div class="shop_title_content_pic">
          <img src="~assets/logo.png" alt="" />
        </div>
        <div class="shop_title_content_info">
          <h5><span>品牌</span>嘉禾一品（温都水城）`<b></b>`</h5>
          <p>
            <span>月售90件</span><span>硅谷专送</span><span>约20分钟</span
            ><span>距离1000m</span>
          </p>
          <p>
            <b>公告</b><span>新用户下单立减17元（不与其他活动）</span
            ><em class="discount"
              >8个优惠<van-icon name="arrow-down" class="_more"
            /></em>
          </p>
        </div>
      </div>
    </div>
    <!-- 点餐|评价|商家   -->
    <div class="shop_content">
      <!-- 切换标题 -->

      <ul class="shop_content_title">
        <li
          v-for="item in categoryTit"
          :key="item.path"
          @click="$router.push(item.path)"
        >
          <span :class="{ active: item.path === $route.path }">{{
            item.tit
          }}</span>
        </li>
      </ul>
      <!-- 二级路由 ：-->
      <router-view></router-view>
    </div>
    <!-- 底部清算栏 -->
    <div class="cartbar" @click="showPopup">
      <div class="cartbar_icon">
        <div class="cartbar_icon_inner">
          <van-icon name="shopping-cart" size="28" color="#aaa" />
        </div>
      </div>
      <span class="sumPrice">￥{{all_price}}</span>
      <p class="sell_btn" >￥20元起送</p>
    </div>
    <CartPopup ref="cartPopup"></CartPopup>
  </div>
</template>

<script>
import OrderingFood from "./child/OrderingFood.vue";
import Assess from "./child/Assess.vue";
import Business from "./child/Business.vue";
import { getTitleInfo } from "@/API/request";
import CartPopup from "./child/CartPopup.vue";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      categoryTit: [
        { path: "/category/orderingfood", tit: "点餐" },
        { path: "/category/assess", tit: "评价" },
        { path: "/category/business", tit: "商家" },
      ],
      titleInfo: {},
    };
  },
  computed: {
    ...mapGetters(["all_price",]),
  },
  async mounted() {
    console.log(this.all_count);
    this.titleInfo = await getTitleInfo();
  },
  components: {
    OrderingFood,
    Assess,
    Business,
    CartPopup,
  },
  methods: {
    showPopup() {
      this.$refs.cartPopup.isPopupShow = true;
    },
  },
};
</script>

<style lang="less" scoped>
.category {
  position: relative;
  z-index: 202;
  padding-bottom: 49px;
  background-color: #fff;
}
.shop_title {
  height: 170px;
  background: url("../../assets/duitang.jpg");
  background-size: 100% auto;
  position: relative;
  .shop_title_content {
    position: absolute;
    width: 100%;
    height: 100px;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    margin-bottom: 0;
    background: hsla(0, 0%, 100%, 0.9);
    box-shadow: 0 0 0 1px hsla(0, 0%, 100%, 0.3) inset,
      0 0.3em 1em rgba(0, 0, 0, 0.12);
  }
  .shop_title_content_pic {
    position: absolute;
    width: 80px;
    height: 80px;
    left: 50%;
    top: -52%;
    transform: translateX(-50%);
    background-color: #fff;
    box-shadow: 1px 3px 5px #ddd;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .shop_title_content_info {
    & > h5 {
      width: 100%;
      text-align: center;
      margin-top: 30px;
      font-size: 18px;
      height: 35px;
      line-height: 35px;
      span {
        display: inline-block;
        margin-right: 5px;
        vertical-align: 3px;
        padding: 0px 3px;
        height: 20px;
        line-height: 20px;
        font-size: 12px;
        background-color: rgb(243, 240, 70);
      }
    }
    h5::after {
      display: inline-block;
      vertical-align: middle;
      content: "";
      width: 0;
      height: 0;
      border-left: 6px solid #666;
      border-bottom: 6px solid transparent;
      border-top: 6px solid transparent;
      border-right: 0;
    }
    & > p {
      font-size: 13px;
      text-align: center;
    }
    & > p:last-of-type {
      background-color: #fff;
      border: 1px solid #ccc;
      width: 90%;
      margin: 0 auto;
      height: 18px;
      line-height: 18px;
      & > em,
      & > b {
        display: inline-block;
        height: 14px;
        line-height: 14px;
        font-size: 12px;
        background-color: green;
        color: #fff;
        vertical-align: top;
        margin-right: 5px;
        margin-top: 2px;
      }
      & > em {
        background-color: #fff;
        color: #333;
      }
      > span {
        display: inline-block;
        width: 220px;
        //溢出隐藏只对块和行内块有效。对行内元素无效
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap; /* 文字不折行 */
      }
    }
  }
}
.discount ._more {
  transform: rotate(0deg);
  transition: transform 0.5s;
}
.discount:hover ._more {
  //注意：移动端没有hover事件。。仅模拟效果
  transform: rotate(180deg);
}

.shop_content_title {
  display: flex;
  justify-content: space-between;
  height: 40px;
  line-height: 40px;
  border-bottom: 3px solid #ddd;
  font-size: 16px;
}
.shop_content_title > li {
  flex: 1;
  text-align: center;
  & > span {
    height: 25px;
    line-height: 25px;
    padding-bottom: 6px;
    display: inline-block;
  }
  & > span.active {
    border-bottom: 3px solid rgb(82, 211, 136);
  }
}

.cartbar {
  width: 100%;
  height: 49px;
  position: fixed;
  bottom: 0;
  left: 0;
  background-color: #555;
  z-index: 2020;
  .cartbar_icon {
    width: 60px;
    height: 60px;
    position: absolute;
    top: -30%;
    left: 15px;
    background-color: #555;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    .cartbar_icon_inner {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background-color: rgb(129, 125, 125);
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  .sumPrice {
    margin-left: 80px;
    line-height: 49px;
    color: #fff;
    font-size: 18px;
    font-weight: 800;
  }
  .sell_btn {
    font-size: 14px;
    color: #fff;
    float: right;
    height: 49px;
    width: 120px;
    background-color: #888;
    line-height: 49px;
    text-align: center;
    overflow: hidden;
  }
}
</style>