<template>
  <div class='container'>
    <button v-if="!user" open-type="getUserInfo" lang="zh_CN" @getuserinfo="doLogin">获取用户信息</button>
    <div class='userInfo'>
      <!-- p>{{userinfo.nickName}}</p> -->
    </div>
    <YearProgress></YearProgress>
    <button @click="scanBook" class="btn">添加图书</button>
  </div>
</template>


<script>
import qcloud from 'wafer2-client-sdk'
import config from '@/config'
import { showSuccess } from '@/util.js'

export default {
  data () {
    return {
      userInfo: {}
    }
  },
  methods: {
    loginSuccess (res) {
      showSuccess('登录成功')
      wx.setStorageSync('userinfo', res)
      this.userinfo = res
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
    //   doLogin: function () {

    //   const session = qcloud.Session.get()

    //   if (session) {
    //       // 第二次登录
    //       // 或者本地已经有登录态
    //       // 可使用本函数更新登录态
    //       qcloud.loginWithCode({
    //           success: res => {
    //               this.setData({ userInfo: res, logged: true })
    //               showSuccess('登录成功')
    //           },
    //           fail: err => {
    //               console.error(err)
    //           }
    //       })
    //   } else {
    //       // 首次登录
    //       qcloud.login({
    //           success: res => {
    //               this.setData({ userInfo: res, logged: true })
    //               showSuccess('登录成功')
    //           },
    //           fail: err => {
    //               console.log(err)
    //           }
    //       })
    //   }
    // },

    scanBook () {
      console.log('you just click the button')
      wx.scanCode({
        success: (res) => {
          console.log(res)
        }
      })
    }
  },
  created () {
    // this.userInfo = wx.getStorageSync('userInfo')
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
