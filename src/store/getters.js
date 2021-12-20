const getters = {
    // 客户购买的商品数组
    select_foods(state) {
        const selectFoods = []
        state.orderingFood.forEach(item => {
            item.foods.forEach(i => {
                i.count && i.count !== 0 && (selectFoods.push(i))
            })
        })
        return selectFoods
    },
    // 客户购买的商品总数
    all_count(state,getter){
       let _count =  getter.select_foods.reduce((prv,item)=>{
           return prv = prv+item.count
       },0)
       return _count
    },
    // 客户购买的商品总价
    all_price(state,getter){
        let allPrice = getter.select_foods.reduce((prv,item)=>{
            return prv + (item.price*item.count)
        },0)
        return allPrice
    }
}
export default getters