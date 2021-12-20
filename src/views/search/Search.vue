<template>
  <div  class="_outer">
      <TabBar>
        <p>搜索</p>
      </TabBar>
      <div class="search">
        <div class="search_box">
        <input type="text">
        <span class="_close">×</span>
        </div>
        <van-button type="primary" class="search_btn">搜索</van-button>
      </div>
      <ul class="search_result">
        <li v-for="item in 5" :key=item class="search_result_item">
          <div class="search_result_img"><img src="~assets/logo.png" alt=""></div>
          <div class="search_result_context">
            <p>11111111111</p>
            <p>2222222222</p>
            <p>3333333333333333333</p>
          </div>
        </li>
      </ul>
  </div>
</template>

<script>
import TabBar from '@/common/tabbar/TabBar.vue'
export default {
  components:{
    TabBar
  }
}
</script>

<style lang="less" scoped>
._outer{
  background-color: rgb(235, 230, 230);
  width: 100%;
  height: calc(100vh - 44px) ;
}
.search{
  margin-top: 44px;
  display: flex;
  padding: 10px;
  background-color: #fff;
  .search_box{
    position: relative;
    flex-grow: 1;
    flex-shrink: 0;
    flex-basis: 200px;
    margin-right: 10px;
    
  }
  .search_box ._close{
    position: absolute;
    font-size: 20px;
    right: 8px;
    top: 5px;
    font-weight: 600;
  }
  input{
    outline: none;
    border-style: none;
    border:1px solid #ddd;
    border-radius: 5px;
    padding: 0 10px;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
  }
}
.search_btn{
  height: 35px;
}
.search_result{
  background-color: #fff;
  font-size: 14px;
  .search_result_item{
    display: flex;
    padding: 10px;
    border-bottom: 1px solid #ddd;
  }
  .search_result_img{
    width: 50px;
    height: 50px;
    img{
      width: 100%;
      height: 100%;
      object-fit: cover;
      vertical-align: top;
    }
  }
  .search_result_context{
    display: flex;
    flex:1;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 5px;
  }
}
</style>