<template>
  <div class="orderingFood_content_item_btn">
    <div class="orderingFood_content_item_btn_inner">
      <transition-group name="move" tag="div">
        <span v-if="isOn>0" :class="[{discount:isOn}]" :key="1" @click="updataCount(false)" >-</span>
        <b v-if="isOn>0" :class="[{count:isOn}]" :key="2">{{food.count}}</b>
      </transition-group>
      <span @click="updataCount(true)">+</span>
    </div>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  props:{
    food:{type:Object,default(){return {}}}
  },
  data(){
    return{
      isOn: this.food.count,
    }
  },
  watch:{
    // food:{
    //   handler(newVal,olVal){
    //       if(!newVal||newVal.count==0){
    //         this.isOn = false
    //       }
    //  },
    //    immediate:true ,//true就表示会立即执行
    //    deep:true //为true，表示深度监听
    // }
    //以上会把整个food的属性都深度监听：改成以下写法仅深度监听个别属性
     "food.count":{
      handler(newVal,olVal){
          if(!newVal||newVal==0){
            this.isOn = false
          }
     },
       immediate:true ,//true就表示会立即执行
       deep:true //为true，表示深度监听
    }
  },
  methods:{
    ...mapActions(['UPDATE_COUNT']),
    updataCount(isAdd){
      this.UPDATE_COUNT({isAdd,food:this.food})
      if(!this.food.count||this.food.count==0){ 
        this.isOn = false
      }else{
        this.isOn = true
      }
    }
  }
};
</script>

<style lang="less" scoped >
.orderingFood_content_item_btn {
  width: 40px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  .orderingFood_content_item_btn_inner {
    width: 30px;
    height: 30px;
    position: relative;
  }
  span {
    position: absolute;
    top: 0;
    left: 0;
    font-size: 26px;
    width: 30px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    color: #fff;
    background-color: rgb(77, 192, 125);
    border-radius: 50%;
  }
}
// 按钮动画
.discount {
  transform: translateX(-60px) rotate(720deg);
  opacity: 1;
}
.count {
  font-size: 20px;
  width: 30px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  position: absolute;
  top: 0px;
  left: 0px;
  transform: translateX(-30px) rotateY(720deg);
  opacity: 1;
}
.move-enter-active,
.move-leave-active {
  transition: all 0.5s;
}
.move-enter,
.move-leave-to {
  transform: translateX(0px);
  opacity: 0;
}
</style>