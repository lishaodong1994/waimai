<template>
  <!-- 点餐页面 -->
  <div class="orderingFood" v-if="currentIndex === 0" :style="{height:scrollHeiht-170-43-49+'px'}">
    <Scroll1 ref="scroll1" class="orderingFood_sidebar" v-if="orderingFood.length">
      <ul>
        <li
          v-for="(item, index) in orderingFood"
          :key="index"
          :class="{ active: index === current }"
          @click="jumpY(index)"
          ref="leftscroll"
        >
          <img :src="item.icon" alt="" v-if="item.icon" /><span>{{
            item.name
          }}</span>
        </li>
      </ul>
    </Scroll1>
    <Scroll2
      ref="scroll2"
      class="orderingFood_contents"
      :probeType="3"
      @scrollevent="scrollevent"
      v-if="orderingFood.length"
    >
      <div>
        <div
          class="orderingFood_content"
          v-for="(item, index) in orderingFood"
          :key="index"
          ref="lis"
        >
          <p>{{ item.name }}</p>
          <div
            class="orderingFood_content_item"
            v-for="i in item.foods"
            :key="i.name"
          >
            <div class="orderingFood_content_item_pic">
              <img :src="i.image" alt="" />
            </div>
            <div class="orderingFood_content_item_context">
              <p>{{ i.name }}</p>
              <p>{{ i.description }}</p>
              <p>月售{{ i.sellCount }}份&nbsp;&nbsp;好评率{{ i.rating }}%</p>
              <p>￥{{ i.price }}</p>
            </div>
            <OrderingFoodBtn :food=i></OrderingFoodBtn>
          </div>
        </div>
      </div>
    </Scroll2>
  </div>
</template>

<script>
import Scroll1 from "@/common/scroll/Scroll1";
import Scroll2 from "@/common/scroll/Scroll2";
import OrderingFoodBtn from "@/components/OrderingFoodBtn";
import { debounce } from "@/common/util.js";
import { mapActions,mapState } from "vuex";
export default {
  props: {
    currentIndex: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      positionyArr: [],
      scrollY: 0,
      scrollHeiht:0
    };
  },
  computed: {
    ...mapState(['orderingFood']),
    current() {
      const { scrollY, positionyArr } = this;
      return positionyArr.findIndex((tops, index) => {
        return scrollY >= tops && scrollY < positionyArr[index + 1];
      });
    },
  },
  watch: {
    current() {
      this.scrollLeft();
    },
  },
  components: {
    Scroll1,
    Scroll2,
    OrderingFoodBtn,
  },
  created() {
    this.scrollHeiht =  document.documentElement.clientHeight 

    this.dbe_setScrollY = debounce((position) => {
      this.scrollY = Math.abs(position.y);
    });
  },
  async mounted() {
    this.setOrderingFood().then(() => {
      this.$nextTick(() => {
        this.$refs.scroll1.refresh();
        this.$refs.scroll2.refresh();
        const arr = [0];
        let positiony = 0;
        this.$refs.lis.forEach((item) => {
          positiony += item.clientHeight;
          arr.push(positiony);
        });
        this.positionyArr = arr;
      });
    });
  },
  methods: {
    ...mapActions(["setOrderingFood"]),
    scrollevent(position) {
      this.dbe_setScrollY(position);
    },
    jumpY(i) {
      this.$refs.scroll2.go(0, -this.positionyArr[i], 0);
    },
    scrollLeft() {
      console.log(11111111);
      let leftscroll = this.$refs.leftscroll;
      let el = leftscroll[this.current];
      this.$refs.scroll1.scroll.scrollToElement(el, 200, true, true);
    },
  },
};
</script>

<style lang="less" scoped>
.orderingFood {
  display: flex;
  // height: calc(100vh - 170px - 40px - 52px);
  // background-color: #ddd;
  overflow: hidden;
  .orderingFood_sidebar {
    width: 80px;
    text-align: center;
    flex-grow: 0;
    flex-shrink: 0;
    flex-basis: 80px;
    li {
      height: 70px;
      line-height: 70px;
      border-bottom: 1px solid #ccc;
      border-right: 1px solid #ccc;
      img {
        width: 15px;
        height: 15px;
        margin-right: 5px;
        vertical-align: baseline;
      }
    }
  }
  .orderingFood_content {
    font-size: 16px;
    color: #555;
    flex: 1; //=== flex-grow: 1;flex-shrink: 0;flex-basis: 0;
    & > p {
      height: 30px;
      line-height: 30px;
      background-color: rgb(241, 237, 237);
      border-left: 4px solid #ccc;
    }
    & > .orderingFood_content_item {
      position: relative;
      display: flex;
      padding: 10px 10px 20px 10px;
      & > .orderingFood_content_item_pic {
        width: 70px;
        height: 115px;
        margin-right: 5px;
        img {
          border-radius: 5px;
          width: 70px;
          height: 70px;
        }
      }
      .orderingFood_content_item_context {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        color: #aaa;
        line-height: 22px;
        font-size: 14px;
        > p {
          height: 22px;
          width: 155px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        > p:nth-of-type(1) {
          height: 30px;
          line-height: 30px;
          font-size: 18px;
          color: #666;
        }
        > p:last-of-type {
          font-size: 18px;
          font-weight: 600;
          height: 26px;
          line-height: 26px;
          color: rgb(212, 60, 22);
        }
      }
    }
  }
}
.orderingFood_contents {
  flex: 1;
}
.orderingFood_content_item::after {
  position: absolute;
  content: "";
  width: 255px;
  height: 1px;
  background-color: #ddd;
  bottom: 0;
  // 移动端1px线技巧
  transform: scaleY(0.5);
  transform-origin: 0 0;
}
.active {
  background: rgb(241, 241, 241);
  box-shadow: 1px 1px 5px rgb(185, 184, 184);
}
</style>