<template>
  <div class='container'>
    <div class='userInfo'>
      <!-- p>{{userinfo.nickName}}</p> -->
    </div>
    <YearProgress></YearProgress>
    <button @click="scanBook" class="btn">添加图书</button>
  </div>
</template>


<script>
export default {
  data(){
    return {
      userInfo:{}
    }
  },
  methods:{
    scanBook(){
      console.log("you just click the button")
      wx.scanCode({
        success:(res) => {
          console.log(res)
        }
      })

    }
  },
  created(){
    this.userInfo = wx.getStorageSync('userInfo')
  }

}
</script>


<style >
.container { 
  padding: 0 30 rpx;
}

.userInfo{
  margin-top: 100 rpx;
}

</style>
