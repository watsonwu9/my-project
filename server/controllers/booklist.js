const { mysql } = require('../qcloud')
module.exports = async (ctx) => {
    const books = await mysql('books')
                        .select('books.*','cSessionInfo.user_info')
                        .join('cSessionInfo','books.openId','cSessionInfo.open_id')
                        .orderBy('books.id','desc')

    ctx.state.data = {
        list:books.map( v=>{
            const info = JSON.parse(v.user_info)
            return Object.assign({},v,{
                user_info:{
                    nickName:info.nickName
                }
            })
        })

        //msg: '你好，小程序,我是你爸爸'
    }
}


