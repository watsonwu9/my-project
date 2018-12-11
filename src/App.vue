<script>
import {get} from './util.js'
export default {
  async created () {
    // 调用API从本地缓存中获取数据
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
/* this rule will be remove */
* {
  transition: width 2s;
  -moz-transition: width 2s;
  -webkit-transition: width 2s;
  -o-transition: width 2s;
}
</style>
