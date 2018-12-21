<template>
<a :href="detailUrl">
    <div class="book-card">
        <div class='thumb' @click.stop = "preview">
            <img :src='book.images_medium' mode='aspectFit' class="img">
        </div>

        <div class="detail">
            <div class='row'>
                <div class='right'>
                    评分
                </div>
                <div class='left text-primary' >
                    {{book.title}}
                </div>
            </div>


            <div class='row'>
                <div class='right'>
                    {{book.user_info.nickName}}
                </div>
                <div class='left'>
                    {{book.author}}
                </div>
            </div>


            <div class='row'>
                <div class='right'>
                    {{book.count}}
                </div>
                <div class='left'>
                    {{book.publisher}}
                </div>
            </div>

        </div>
    </div>
</a>
</template>

<script>
export default {
    props:['book'],
    computed: {
        detailUrl(){
            return '/pages/detail/main?id='+this.book.id
        }
    },
    methods:{
        preview(){
            wx.previewImage({
                current:this.book.images_large,
                urls:[this.book.images_large]//轮播图列表
            })
        }
    }
}
    
</script>

<style lang="scss">
 .book-card{
  padding: 5px;
  overflow: hidden;
  margin-top:5px;
  margin-bottom:5px;
  font-size: 14px;
  .thumb {
    width:90px;
    height:90px;
    float: left;
    margin: 0 auto;
    overflow: hidden;
    .img{
      max-width:100%;
      max-height: 100%;
    }
  }

  .detail{
      margin-left:100px;
      .row{
          line-height: 20px;
          margin-bottom: 3px;
      }
        .right{
            float: right;
        }
        .left{
            margin-right: 80px;
        }
  }

}   
</style>