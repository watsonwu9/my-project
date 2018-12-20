<template>
    <div>
      <Card :key='book.id' v-for = 'book in books' :book = 'book'></Card>
      <p class="text-footer" v-if="!more">没有更多数据！</p>
    </div> 
</template>


<script>
import {get} from "@/util" 
import Card from '@/components/Card'
export default {
  components:{
    Card
  },
  data(){
    return {
    books:[],
    page:0,
    more:true
    }
  },
  methods:{
    async getList(init) {
        if(init) {
        	// 初始页码为0
          this.page = 0
          this.more = true
        }
        // 在当前页面显示导航条加载动画。
        wx.showNavigationBarLoading()
        console.log("the page in vue file is "+this.page)
        const books = await get('/weapp/booklist',{page:this.page})

        if(books.list.length < 10 && this.page > 0) {
          this.more = false
        }
        if(init) {
          this.books = books.list
          // 取消下拉事件
          wx.stopPullDownRefresh()
        } else {
          // 下拉刷新，不能直接覆盖books，而是累加
          this.books = this.books.concat(books.list)
        }
        // 隐藏导航条加载动画。
        wx.hideNavigationBarLoading()
      }
  },

  onReachBottom(){
    if(!this.more){
      return false
    }
    this.page = this.page + 1
    this.getList()
  },

  onPullDownRefresh(){
    console.log("上滑了")
    this.getList(true)
  },
  mounted() {
    this.getList(true)

  },

}
</script>


<style lang="scss">

  
</style>>


</style>
