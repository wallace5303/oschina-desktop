<template>
  <div id="app-base-test-api">
    <div class="one-block-1">
      <span>
        1. 测试一些操作系统api
      </span>
    </div>  
    <div class="one-block-2">
      <a-timeline>
        <a-timeline-item>
          <a :href="loginUrl" target="_blank">
            登录
          </a>
        </a-timeline-item>
      </a-timeline>
    </div>
  </div>
</template>
<script>
import { ipcApiRoute, requestHttp } from '@/api/main'

export default {
  data() {
    return {
      type: 1,
      loginUrl: 'https://www.oschina.net/action/oauth2/authorize?response_type=code&client_id=KUM768r2I1qA00RUUAyp&state={"app_id":"oschina_desktop"}&redirect_uri=https%3A%2F%2Fwww.kaka996.com%2Fapi%2Foschina%2Fverify'
    };
  },
  methods: {
    exec (id) {
      const params = {
        id: id
      }
      this.$ipcInvoke(ipcApiRoute.test, params).then(res => {
        console.log('res:', res)
      }) 
    },
    exec2 (id) {
      const params = {
        id: id
      }
      requestHttp(ipcApiRoute.test, params).then(res => {
        console.log('res2:', res)
      }) 
    },    
  }
};
</script>
<style lang="less" scoped>
#app-base-test-api {
  padding: 0px 10px;
  text-align: left;
  width: 100%;
  .one-block-1 {
    font-size: 16px;
    padding-top: 10px;
  }
  .one-block-2 {
    padding-top: 10px;
  }
}
</style>
