//定义get,post请求 （向/apiaaa/news发送请求即向本地服务器发送请求，mock会将请求拦截并返还数据。）

const swiperdata = {
    url: "/mock/index_category",
    type: "get",
    response: {
        code: 0,
        msg: '获取get数据成功!',
        'data|18': [
            {
                id: '@increment(1)',
                is_in_serving: true,
                description: "0元早餐0起送，每天都有新花样。",
                title: '@ctitle(3,4)',
                link: "",
                img_url: "@image('200x200','#ffa07a','#ffffff','png','lee')",//生成图片
                icon_url: "",
                title_color: "",
                __v: 0
            }
        ],
    }
}






module.exports = [
    swiperdata
]