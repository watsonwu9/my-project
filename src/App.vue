<script>
import {get} from './util.js'
import qcloud from 'wafer2-client-sdk'
import config from './config'

export default {
  async created () {
    // check whether we know this user
    // let user = wx.getStorageSync('userInfo')

    qcloud.setLoginUrl(config.loginUrl)
    const res = await get('/weapp/demo')
    console.log(res)
    console.log('小吴，App 里面程序启动了')
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

.text-primary {
  color: #EA5149;
  
}

.btn{
  color: white;
  background: #EA5A49;
  margin-bottom: 10px;
  padding-left: 15px;
  padding-right: 15px;
  border-radius: 2px;
  font-size: 16px;
  line-height: 40px;
  height: 40px;
  width: 60%;
}
.btn:active{
  background: #FA5A49;
}
/* this rule will be remove */
* {
  transition: width 2s;
  -moz-transition: width 2s;
  -webkit-transition: width 2s;
  -o-transition: width 2s;
}
</style>
