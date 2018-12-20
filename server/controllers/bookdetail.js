const {mysql}=require('../qcloud')
module.exports =async(ctx)=>{
    console.log("你在高原")
    const {id} = ctx.request.query
    await mysql('books')
        .where('id',id)
        .increment('count',1)
}
