<template>
<div>
    <BookInfo :info='info'></BookInfo>
</div>
</template>


<script>
import {get} from "@/util" 
import BookInfo from '@/components/BookInfo'
export default {
    components:{
        BookInfo
    },
    data(){
        return{
            bookid:'',
            info:{}
        }
    },
    methods:{
        async getDetail(){
            const info = await get('/weapp/bookdetail',{id:this.bookid})
            console.log(info)
            wx.setNavigationBarTitle({
                title:info.title
            })

            this.info = info


            
        }

    },
    mounted(){
        this.bookid=this.$root.$mp.query.id //this.$root.$mp.query获取跳转链接传过来的对象集合
        this.getDetail()
    },

    onShareAppMessage: (res) => {
        if (res.from === 'button') {
            console.log("来自页面内转发按钮");
            console.log(res.target);
            }
        else {
            console.log("来自右上角转发菜单")
        }
        return {
            // title: '',
            // path: '/pages/share/share?id=123',
            // imageUrl: "/images/1.jpg",
            success: (res) => {
            console.log("转发成功", res);
            },
            fail: (res) => {
            console.log("转发失败", res);
            }
        }
    }

    
}
</script>


<style>

</style>
