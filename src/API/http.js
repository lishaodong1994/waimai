import axios from 'axios'


const httpConfig = {
    // baseURL: '/',
    baseURL: '/proxy',
    timeout: 3000,
    //headers:''
}
const http = axios.create(httpConfig)
http.interceptors.request.use((config) => {
    return config
})
http.interceptors.response.use(
    response => response.data,
    // error => {
    //     console.log('失败了,原因:', error)
    //     return new Promise(() => { })
    // }
)

//-----------------------------
const MOCKhttp = axios.create({ ...httpConfig, baseURL: '/mock' })
MOCKhttp.interceptors.request.use((config) => { 
    return config
})
MOCKhttp.interceptors.response.use(
    response => response.data,
    // error => {
    //     console.log('失败了,原因:', error)
    //     return new Promise(() => { })
    // }
)
export { http, MOCKhttp }