import {http,MOCKhttp} from './http'

//-----------home页面-------------
//请求home的swiper数据（模拟）
// export function gethomeswiperDate(){return MOCKhttp.get('/index_category')}
//请求home的swiper数据
export function gethomeswiperDate(){return http.get('/index_category')}
//请求home的定位数据
export function getGeoHash() {return http({url: '/position/40.10038,116.36867'})}
//获取home的list列表数据
export function getshoplistDate( geo ) {
    const {latitude,longitude} =  geo
    return  http.get(`/shops?latitude=${latitude}&longitude=${longitude}`)
}

//-----------login页面-------------
export function getYzmImg(){ return http.get('/captcha')}  //请求图片验证码
//使用密码登陆请求
export function passLogin(payload){
    return http({
        url:'/login_pwd',
        method:'POST',
        data:{
            ...payload
        }
    })
}
//获取短信验证码（容联云通信服务一条0.06元）
export function getSms(phone){
    return http.get(`/sendcode?phone=${phone}`)
}
//使用短信验证码登陆：
export function smsLogin(payload){
    return http.post('/login_sms',{data:{phone:payload.phone,code:payload.captcha}})
}
//用户退出登录
export function logout(){
    return http.get('/logout')
}

//-----------category页面-------------
//获取商家信息（模拟）
export function getTitleInfo(){
    return MOCKhttp.get('/titleinfo')   //*注意不要把/titleinfo顺手写成./titleinfo.否则 呵呵。。。
}
//获取商品信息（模拟）
export function getOrderingFood(){
    return MOCKhttp.get('/orderingfood')
}
//获取用户评价信息（模拟）
export function getAssess(){
    return MOCKhttp.get('/assess')
}


//-----------页面公共-------------
//根据会话获取用户信息(及刷新自动登录,即登录信息不消失)
export function getUserInfo(){
    return http.get('/userinfo')
}