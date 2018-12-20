<template>
  <div>
    <Card :key='book.id' v-for = 'book in books' :book = 'book'></Card>
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
    page:0
    }
  },
  methods:{
    async getList(init){
      if(init){
        this.page = 0
      }
      wx.showNavigationBarLoading()
      const books = await get('/weapp/booklist',{page:this.page})
      this.books = books.list
      wx.stopPullDownRefresh()
      wx.hideNavigationBarLoading()
    }
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
