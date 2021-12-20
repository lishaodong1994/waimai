import Vue from 'vue'
const mutations={
    setGeo(state, pld){
        state.geo = pld.data
    },
    setUserMsg(state, pld){
        state.user = pld
    },
    resetUser(state){
        state.user = {}
    },
    SET_ORDERING_FOOD(state,pld){
        state.orderingFood=pld
    },
    INCREMENT_COUNT(state,food){
        !food.count&&(Vue.set(food,'count',0));
        food.count++
    },
    DECREMENT_COUNT(state,food){
       food.count>0&& food.count--
    },
    
}
export default mutations