<script>
import {get, showSuccess} from './util.js'
import qcloud from 'wafer2-client-sdk'
import config from './config'
export default {
  async created () {
    // check whether we know this user
    let user = wx.getStorageSync('userInfo')


    qcloud.setLoginUrl(config.loginUrl);
    qcloud.login({
    success: function (userInfo) {
        console.log('登录成功', userInfo)
        showSuccess("登陆成功")
        wx.setStorageSync('userInfo',userInfo)

    },
    fail: function (err) {
        console.log('登录失败', err);
    }
});

    const res = await get('/weapp/demo')
    console.log(res)
    console.log('小吴，小程序启动了')
  }
}
</script>

<style>
.container {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 200rpx 0;
  box-sizing: border-box;
}

.btn{
  color:aquamarine;
  background: #545A49;
  margin-bottom: 10 px;
  padding-left: 15 px;
  padding-right: 15 px;
  border-radius: 2px;
  font-size: 16px;
  line-height: 40px;
  height: 40px;
  width: 100%;

}
/* this rule will be remove */
* {
  transition: width 2s;
  -moz-transition: width 2s;
  -webkit-transition: width 2s;
  -o-transition: width 2s;
}
</style>
