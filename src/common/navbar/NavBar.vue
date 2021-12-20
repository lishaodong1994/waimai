<template>
	<div id="tab-bar">
  	    <slot></slot>
    </div>
</template> 
<script>
export default {

}
</script>
<style lang="less" scoped>
 #tab-bar{
	display: flex;
    position:fixed; bottom: 0; left: 0; z-index: 200;
    width: 100%;
    background-color:#f6f6f6;
    box-shadow: 0 -1px 4px silver
	}
</style>