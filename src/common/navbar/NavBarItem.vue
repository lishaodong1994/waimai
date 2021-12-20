<template>
   <div class="tab-bar-item" @click="itemClick">  
     <div v-if="!isActive"> <slot name="item-icon"></slot> </div>
     <div v-else> <slot name="item-icon-active"></slot> </div>
     <div :style="activeStyle" ><slot name="item-text"></slot> </div>  
  </div>
</template>
<script>
export default {
	props:{
  	routerPath:{type:String,default:''},
    activeColor:{type:String,default:'red'}
  },
	data(){
  	return{ }
  },
  computed:{
  	isActive(){ return this.$route.path.indexOf(this.routerPath)!==-1 },
    activeStyle(){ return this.isActive?{color:this.activeColor}:{} }
  },
  methods:{
  	itemClick(){ this.$router.push(this.routerPath) }
  }
}
</script>
<style lang="less" scoped>
 .tab-bar-item{
  	flex:1;
   	height:49px;
    text-align: center;
    font-size: 14px;
  }
.tab-bar-item i{
  height: 30px;
  line-height: 30px;
}
.tab-bar-item span{
  height: 15px;
  line-height: 15px;
}
.tab-bar-item img{
  	width:24px; height:24px;
  	margin-top:2px;margin-bottom: 2px;
  	vertical-align:middle;
 }
 
</style>