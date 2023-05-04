// 生产环境
let baseURL = 'https://chenkai-data.centmap.com:12060'
// 测试环境
const baseURL_TEST = 'https://tst-app.centmap.com:8443/biovillage/serv'
// 正式环境
const baseURL_REL = 'https://applet.biovillage.cn'

console.log(process.env.NODE_ENV);
if (process.env.NODE_ENV === 'development') {
    baseURL = baseURL_TEST;
} else if (process.env.NODE_ENV === 'production') {
    baseURL = baseURL_REL;
} else {
    baseURL = baseURL_TEST;
}
console.log();

const request = async (url: string, params: any, resolve: any, reject: any) => {
    try {
        const response = await fetch(`${baseURL}${url}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(params)
        })
        const res = await response.json() // 请求成功取到接口数据
        resolve(res) // 有效的返回结果值
    } catch (error) { // 无返回值就不能将JOSN字符串解析成对象就会报错，所以会走catch 直接resolve null
        resolve(null)
    }
}

// export default (url: string, data: any) => {
//     return new Promise((resolve, reject) => {
//         request(url, data, resolve, reject)
//     })
// }

export function websiteList(params: { page: number; size: number; }) {
    return new Promise((resolve, reject) => {
        request('/website.list', { type: '新闻资讯', display: "显示", ...params }, resolve, reject)
    })
}