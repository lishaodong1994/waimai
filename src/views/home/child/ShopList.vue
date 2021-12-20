<template>
  <div class="shopList">
    <div class="shop_list_title">
      <i class="iconfont icon-dingdan"></i><span>附件商家</span>
    </div>

    <ul class="shop_list_content" v-if="!isLoad">
      <li class="shop_list_item" v-for="item in shoplistData" :key="item.id" @click="$router.push('/category')">
        <div class="shop_list_item_img">
          <img :src="item.img_url" alt="" />
        </div>
        <div class="shop_list_item_context">
          <p>
            <b>品牌</b><span class="item_title">{{ item.name }}</span>
          </p>
          <p>
            <span>{{ item.rating }}</span
            ><span
              >月售<b>{{ item.recent_order_num }}</b
              >件</span
            >
            <van-rate
              v-model="item.rating"
              readonly
              allow-half
              color="#ffd21e"
              :size="12"
            />
          </p>
          <p>
            ￥{{ item.float_minimum_order_amount }}起送 / 配送费约{{
              item.float_delivery_fee
            }}元
          </p>
        </div>
        <div class="shop_list_item_tip">
          <p>
            <span
              v-for="i in item.supports"
              :key="i._id"
              :style="{ color: `#${i.icon_color}` }"
              >{{ i.icon_name }}</span
            >
          </p>
          <p>
            <span :style="{ color: `#${item.delivery_mode.color}` }">{{
              item.delivery_mode.text
            }}</span>
          </p>
        </div>
      </li>
    </ul>
    <div v-else>
      <div v-for="item in 3" :key="item" style="margin-top: 40px">
        <p>Skeleton 骨架屏</p>
        <p>
          将loading属性设置成false表示内容加载完成，此时会隐藏占位图，并显示Skeleton的子组件段落占位图宽度，
          可传数组来设置每一行的宽度段落占位图行数头像占位图大小通过title属性显示标题占位图，通过row属性配置占位段落行数
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    shoplistData: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      isLoad: true,
    };
  },
  mounted() {
    this.isLoad = false;
  },
};
</script>

<style lang="less" scoped>
.shopList {
  padding: 10px 10px 10px 10px;
}
.shop_list_title {
  height: 30px;
  line-height: 30px;
  font-size: 14px;
  color: #555;
  i {
    vertical-align: top;
    margin-right: 5px;
  }
}
.shop_list_item {
  display: flex;
  font-size: 14px;
  padding: 10px 0;
  border-bottom: 1px solid #ddd;
  .shop_list_item_img {
    width: 80px;
    height: 80px;
    margin-right: 10px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .shop_list_item_context {
    flex-grow: 1;
    flex-shrink: 0;
    flex-basis: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
  .shop_list_item_tip {
    width: 60px;
    text-align: center;
    display: flex;
    flex-direction: column;
    line-height: 28px;
  }
}
</style>