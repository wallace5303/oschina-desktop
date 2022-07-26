<template>
  <div id="app-auth">
    <div class="block-1">
      <a v-if="!loading" :href="authUrl" target="_blank" @click="getToken">
        <a-button type="primary">
          授权登录
        </a-button>
      </a>
      <span v-else>{{ loginText }}</span>
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
      loginText: '正在登陆......'
    };
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      const auth_token = storage.get('auth_token');
      if (!_.isEmpty(auth_token)) {
        this.redectHome();
        return;
      }

      this.$ipcInvoke(ipcApiRoute.oschina.authInfo, {}).then(res => {
        console.log('authInfo:', res)
        this.authUrl = res.authUrl;
      })
    },
    getToken () {
      const that = this;
      let myTimer;
      let times = 1;
      myTimer = setInterval(function(){
        console.log('retry number:', times);
        that.$ipcInvoke(ipcApiRoute.oschina.getAuthToken, {}).then(res => {
          console.log('getAuthToken res:', res)
          if (res.code == 0) {
            clearInterval(myTimer);
            const token_info = res.data.token_info;
            storage.set('auth_token', token_info.access_token);
            storage.set('token_info', token_info);
            that.redectHome();
            return;
          }
        })
        times++;
      }, 1000)
      setTimeout(function(){
        clearInterval(myTimer);
      }, 10000)
    },
    redectHome () {
      this.loading = true;
      this.$ipcInvoke(ipcApiRoute.common.changeWindowSize, {}).then(res => {
        //this.loading = false;
        //this.$router.push({ name: 'Information', params: {}});
      })
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
