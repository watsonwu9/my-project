<template>
<div>图书id {{bookid}}</div>
    
</template>


<script>
import {get} from "@/util" 
export default {
    data(){
        return{
            bookid:''
        }
    },
    methods:{
        async getDetail(){
            console.log("i am await in Detail "+this.bookid)
            const info = await get('/weapp/bookdetail',{id:this.bookid})
        }

    },
    mounted(){
        this.bookid=this.$root.$mp.query.id //this.$root.$mp.query获取跳转链接传过来的对象集合
        this.getDetail()
    }
}
</script>


<style>

</style>
