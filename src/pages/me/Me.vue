<template>
  <div class='container'>
    <div class='userinfo'>
      <img :src="userinfo.avatarUrl" alt="">
      <p>{{userinfo.nickName}}</p>
    </div>
    <YearProgress></YearProgress>
    <button v-if='userinfo.openId' @click="scanBook" class="btn">添加图书</button>
    <button v-else open-type="getUserInfo" lang="zh_CN" class='btn' @getuserinfo="doLogin">点击登录</button>
  </div>
</template>


<script>
import qcloud from 'wafer2-client-sdk'
import config from '@/config'
import { showSuccess, post } from '@/util.js'
import YearProgress from '@/components/YearProgress'
import { fail } from 'assert'

export default {
  components: {
    YearProgress
  },

  data () {
    return {
      userinfo: {
        avatarUrl: 'http://image.shengxinjing.cn/rate/unlogin.png',
        nickName: ''
      }
    }
  },
  methods: {
    loginSuccess (res) {
      showSuccess('登录成功')
      wx.setStorageSync('userinfo', res)
      //console.log(this.userinfo)
      ///console.log("zhong")
      this.userinfo = res
      //console.log(this.userinfo)
    },

    doLogin () {
      wx.showToast({
        title: '登录中',
        icon: 'loading'
      })
      qcloud.setLoginUrl(config.loginUrl)
      const session = qcloud.Session.get()
      if (session) {
        qcloud.loginWithCode({
          success: res => {
            console.log('没过期的登录', res)
            this.loginSuccess(res)
          },
          fail: err => {
            console.error(err)
          }
        })
      } else {
        qcloud.login({
          success: res => {
            console.log('登录成功', res)
            this.loginSuccess(res)
          },
          fail: err => {
            console.error(err)
          }
        })
      }
    },

    async addBook (isbn) {
      console.log('在前端准备添加以下同学的书')
      console.log(this.userinfo.openId)
      const res = await post('/weapp/addbook', {
        isbn,
        openId: this.userinfo.openId
      })
      if (res.errMsg === 'scanCode:ok') {
        showSuccess('添加成功', `${res.data.title}添加成功`)
      }
    },

    scanBook () {
      console.log('you just click the button')
      wx.scanCode({
        success: (res) => {
          console.log(res)
          this.addBook(res.result)
        },
        fail: () => {
          console.log('the scan failed')
        }
      })
    }
  },
  created () {
    // this.userInfo = wx.getStorageSync('userinfo')
  },
  onShow () {
    let userinfo = wx.getStorageSync('userinfo')
    if (userinfo) {
      this.userinfo = userinfo
    }
  }

}
</script>


<style lang='scss'>
.container{
  padding:10 30rpx;

}  
.userinfo{
  margin-top:100rpx;
  text-align:center;
  img{
    width: 200rpx;
    height:200rpx;
    margin: 20rpx;
    border-radius: 50%;
  }
}

</style>
