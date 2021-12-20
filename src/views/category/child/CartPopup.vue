<template>
  <van-popup
    v-model="isPopupShow"
    round
    position="bottom"
    :style="{ height: '40%', zIndex: 2019 }"
@open= "openClick"
  >
    <div class="popup_title">
      共{{ all_count }}件&nbsp;<em v-show="all_price < 20"
        >还差{{ 20 - all_price }}元可送</em
      >
      <span @click="clearCart">清空</span>
    </div>
    <div class="scroll_wraper"  :style="{height:'200px',overflow:'hidden'}">
      <div class="popup_content scroll_content">
        <div
          class="popup_content_item van-hairline--bottom"
          v-for="item in select_foods"
          :key="item.name"
        >
          <div class="popup_content_item_pic">
            <img :src="item.image" alt="" />
          </div>
          <div class="orderingFood_content_item_context">
            <p>{{ item.name }}</p>
            <p>￥{{ item.price }}</p>
          </div>
          <div class="orderingFood_content_item_btn">
            <OrderingFoodBtn :food="item"></OrderingFoodBtn>
          </div>
        </div>
      </div>
    </div>
  </van-popup>
</template>

<script>
import OrderingFoodBtn from "@/components/OrderingFoodBtn.vue";
import { mapGetters } from "vuex";
import BScroll from "@better-scroll/core";
export default {
  data() {
    return {
      popupScroll: null,
      isPopupShow: false, //购物车撑开是否弹出
    };
  },
  computed: {
    ...mapGetters(["select_foods", "all_count", "all_price"]),
  },

  components: {
    OrderingFoodBtn,
  },
  // watch:{
  //   select_foods(){
  //     console.log(this.$refs);
  //   }
  // },
  methods: {
    // 确认窗口：清除购物车商品
    clearCart() {
      this.$Dialog
        .confirm({
          title: "标题",
          message: "弹窗内容",
          overlayStyle: { background: "rgba(0,0,0,.3)" },
          theme: "round",
          confirmButtonColor: "#FF7F00",
        })
        .then(() => {})
        .catch(() => {
          // on cancel
        });
    },
    openClick() {
      console.log(123456);
      this.$nextTick(() => {
        if (!this.popupScroll) {
          this.popupScroll = new BScroll('.scroll_wraper', {
            probeType: 1,
            click: true,
            scrollY:true
          });
        } else {
          this.popupScroll.refresh();
        }
      });
    },
  },
};
</script>

<style lang="less" scoped>
.van-popup--bottom {
  bottom: 49px;
  z-index: 2019 !important;
}
.popup_title {
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  width: 100%;
  box-sizing: border-box;
  padding: 0 10px;
  height: 50px;
  line-height: 50px;
  background-color: rgb(245, 102, 19);
  color: #fff;
  letter-spacing: 1px;
  & > span {
    float: right;
    height: 30px;
  }
}

.popup_content_item {
  padding: 10px 0;
  display: flex;
  top: 0;
  font-size: 14px;
  .popup_content_item_pic {
    height: 50px;
    flex: 0 0 50px;
    margin: 0 10px;
    img {
      width: 100%;
      height: 100%;
      vertical-align: top;
      object-fit: cover;
    }
  }
  .orderingFood_content_item_context {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
  .orderingFood_content_item_btn {
    width: 50px;
    flex: 0 0 50px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
  }
}
</style>