import { getUserInfo, getOrderingFood } from '@/API/request'

const actions = {
    async setUserWhenflash(store) {
        const { data } = await getUserInfo()
        store.commit('setUserMsg', data)
    },
    setOrderingFood(store) {
        return new Promise((resolve, reject) => {
            getOrderingFood().then((res) => {
                store.commit('SET_ORDERING_FOOD', res)
                resolve()
            });
        })
    },
    UPDATE_COUNT(store,{isAdd,food}){
        if(isAdd){
           store.commit('INCREMENT_COUNT',food) 
        }else{
            store.commit('DECREMENT_COUNT',food)
        }
    }
}
export default actions