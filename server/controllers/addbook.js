//http://feedback.api.juhe.cn/ISBN?sub=9787536692930&key=8384a9409bc1f7e0d64d30af88b9558c
const http = require('http')

module.exports = async (ctx) => {
    const {isbn,openId} = ctx.request.body

    if (isbn && openId){
        console.log("书进后台了")
        let url = 'http://feedback.api.juhe.cn/ISBN?sub=' + isbn + '&key=8384a9409bc1f7e0d64d30af88b9558c'
        const bookinfo = await getJSON(url)
        console.log(bookinfo)

    }
}



function getJSON(url){
    return new Promise((resolve, reject) => {
        http.get(url,res => {
            let urlData = ''
            res.on('data', data => {
                urlData += data
            })
            res.on('end',data =>{
                const bookinfo = JSON.parse(urlData)
                if(bookinfo.title){
                    resolve(bookinfo)
                }
                reject(bookinfo)
            })
        })
    })
}