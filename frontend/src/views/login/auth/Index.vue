<template>
  <div id="app-auth">
    <div class="block-1">
      <a :href="authUrl" target="_blank" @click="getToken">
        <a-button type="primary">
          授权登录
        </a-button>
      </a>
    </div>  
  </div>
</template>
<script>
import storage from 'store2'
import _ from 'lodash'
import { ipcApiRoute } from '@/api/main'

export default {
  data() {
    return {
      loading: false, 
      authUrl: '',
    };
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      const auth_token = storage.get('auth_token');
      if (!_.isEmpty(auth_token)) {
        //this.$router.push({ name: 'Information', params: {}})
        //return;
      }

      this.$ipcInvoke(ipcApiRoute.oschina.authInfo, {}).then(res => {
        console.log('authInfo:', res)
        this.authUrl = res.authUrl;
      })
    },
    getToken () {
      // const that = this;
      // setInterval(function(){
      //   that.$ipcInvoke(ipcApiRoute.oschina.getAuthToken, {}).then(data => {
      //     console.log('getAuthToken data:', data)
      //     if (!_.isEmpty(data.access_token)) {
      //       storage.set('auth_token', data.access_token);
      //       that.$router.push({ name: 'Information', params: {}})
      //       return;
      //     }
      //   })
      // }, 1000)
    }
  }
};
</script>
<style lang="less" scoped>
#app-auth {
  //padding: 0px 10px;
  //text-align: left;
  width: 100%;
  min-height: 100%;
  background: #f0f2f5 url(~@/assets/login.png) no-repeat 50%;
  display: flex;
  .block-1 {
    font-size: 16px;
    align-items: center;
    margin: auto;
    display: inline-block;
  }
}
</style>
